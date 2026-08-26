import { 
  Document, 
  Packer, 
  Paragraph, 
  TextRun, 
  Table, 
  TableRow, 
  TableCell, 
  WidthType, 
  BorderStyle, 
  AlignmentType, 
  HeadingLevel,
  VerticalAlign,
  ImageRun
} from 'docx';
import { saveAs } from 'file-saver';
import { AppState } from '../types';

const createHeaderCell = (text: string, fill: string = "F1F5F9") => new TableCell({
  children: [new Paragraph({ 
    children: [new TextRun({ text, bold: true })],
    alignment: AlignmentType.CENTER 
  })],
  shading: { fill },
  verticalAlign: VerticalAlign.CENTER,
});

const createValueCell = (text: string) => new TableCell({
  children: [new Paragraph({ text: text || "N/A" })],
  verticalAlign: VerticalAlign.CENTER,
});

const formatExercises = (state: AppState, includeFactor = false) => {
  const list = state.clientHx.exerciseList || [];
  let result = "無";
  if (list.length > 0) {
    const formatted = list
      .map(ex => {
        const parts: string[] = [];
        if (ex.frequency) parts.push(ex.frequency);
        if (ex.type) parts.push(ex.type);
        if (ex.name) parts.push(`(${ex.name})`);
        return parts.join(' ').trim();
      })
      .filter(Boolean);
    if (formatted.length > 0) {
      result = formatted.join('、');
    }
  } else {
    const single = state.clientHx.exercise;
    const parts: string[] = [];
    if (single.frequency) parts.push(single.frequency);
    if (single.type) parts.push(single.type);
    if (single.name) parts.push(`(${single.name})`);
    const str = parts.join(' ').trim();
    if (str) {
      result = str;
    }
  }

  if (includeFactor) {
    return `${result} [因子: ${state.clientHx.exercise.activityFactor || 'N/A'}]`;
  }
  return result;
};

const calculateAge = (birthday: string) => {
  if (!birthday) return 0;
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const calcRecommendedKcalStr = (state: AppState): string => {
  const bmi = parseFloat(state.anthropometry.bmi);
  const weight = parseFloat(state.anthropometry.weight);
  const abw = parseFloat(state.anthropometry.abw);
  const factor = state.clientHx.exercise?.activityFactor;

  if (!bmi || !weight || !factor) return '';

  let baseWeight = weight;
  if (bmi < 18.5 || bmi >= 24) {
    baseWeight = abw;
  }

  if (factor === '無' || factor === '輕度') {
    const minVal = Math.round(baseWeight * 20);
    const maxVal = Math.round(baseWeight * 25);
    return `${minVal} ~ ${maxVal}`;
  } else if (factor === '中度') {
    return `${Math.round(baseWeight * 30)}`;
  } else if (factor === '重度') {
    return `${Math.round(baseWeight * 35)}`;
  }

  return '';
};

const parseCalorie = (val: string | number | undefined | null): number => {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  const str = val.toString().trim();
  if (!str) return 0;
  const parts = str.split(/[~-]/).map(p => parseFloat(p.trim())).filter(n => !isNaN(n));
  if (parts.length === 0) return 0;
  return parts[parts.length - 1]; // Return the last element (upper bound)
};

const getRecommendedHBKcal = (state: AppState) => {
  const gender = state.clientHx.gender;
  const weight = parseFloat(state.anthropometry.weight);
  const height = parseFloat(state.anthropometry.height);
  const age = calculateAge(state.clientHx.birthday);

  if (isNaN(weight) || isNaN(height) || age <= 0) {
    return { err: '數據不足', bee: 0, total: 0 };
  }

  let bee = 0;
  if (gender === '男') {
    bee = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  } else {
    bee = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }
  bee = Math.round(bee);
  const act = (state.guidelineSelections as any)?.hbActivity !== undefined ? parseFloat((state.guidelineSelections as any).hbActivity) : 1.3;
  const total = Math.round(bee * act);
  return { err: '', bee, total };
};

const getMacroDistribution = (state: AppState) => {
  const recommendedKcalStr = calcRecommendedKcalStr(state);
  const recKcalVal = parseCalorie(recommendedKcalStr);
  const kcal = parseCalorie(state.diet.targetKcal) || recKcalVal;
  const config = state.intervention?.macroConfig || { carbsPercent: 55, proteinPercent: 15, fatPercent: 30 };
  const cp = parseFloat(config.carbsPercent as any) || 0;
  const pp = parseFloat(config.proteinPercent as any) || 0;
  const fp = parseFloat(config.fatPercent as any) || 0;
  
  if (!kcal) {
    return {
      kcal: 0,
      carbsPer: cp,
      proteinPer: pp,
      fatPer: fp,
      carbsG: '0.0',
      proteinG: '0.0',
      fatG: '0.0'
    };
  }

  return {
    kcal,
    carbsPer: cp,
    proteinPer: pp,
    fatPer: fp,
    carbsG: ((kcal * (cp / 100)) / 4).toFixed(1),
    proteinG: ((kcal * (pp / 100)) / 4).toFixed(1),
    fatG: ((kcal * (fp / 100)) / 9).toFixed(1)
  };
};

const PORT_VALS: Record<string, { p: number, c: number, f: number, k: number }> = {
  '低脂乳品': { p: 8, c: 12, f: 4, k: 120 },
  '全脂乳品': { p: 8, c: 12, f: 8, k: 150 },
  '全榖根莖': { p: 2, c: 15, f: 0, k: 70 },
  '低脂豆魚蛋肉': { p: 7, c: 0, f: 3, k: 55 },
  '中脂豆魚蛋肉': { p: 7, c: 0, f: 5, k: 75 },
  '蔬菜': { p: 1, c: 5, f: 0, k: 25 },
  '水果': { p: 0, c: 15, f: 0, k: 60 },
  '堅果': { p: 0, c: 0, f: 5, k: 45 },
  '低氮澱粉': { p: 1, c: 15, f: 0, k: 64 }
};

export const generateWordDoc = async (state: AppState) => {
  // ... (existing code remains same)
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: "營養諮詢紀錄 (NCP Record)",
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),

        // Basic Info
        new Paragraph({
          children: [
            new TextRun({ text: `姓名: ${state.clientHx.name || "未填寫"}`, bold: true }),
            new TextRun({ text: `\t諮詢日期: ${state.consultDate}`, bold: true }),
          ],
          spacing: { after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: `諮詢目標: ${state.goal || "未填寫"}`, bold: true }),
          ],
          spacing: { after: 400 },
        }),

        // 1. Assessment
        new Paragraph({
          text: "一、營養評估 (Nutrition Assessment)",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),

        new Paragraph({ text: "1. 個案史 (Client Hx)", heading: HeadingLevel.HEADING_3 }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("性別"), createValueCell(state.clientHx.gender),
                createHeaderCell("生日"), createValueCell(state.clientHx.birthday),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("工作狀況"), createValueCell(state.clientHx.job),
                createHeaderCell("宗教/禁忌"), createValueCell(state.clientHx.region),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("既往病史"), createValueCell(
                  state.clinical.medicalHx
                    .map(h => (h === '腎臟病' && state.clinical.kidneyStage ? `腎臟病(${state.clinical.kidneyStage})` : h))
                    .join(", ") + (state.clinical.medicalHxOther ? ` (${state.clinical.medicalHxOther})` : "")
                ),
                createHeaderCell("家族史"), createValueCell(state.clientHx.familyHx),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("社會史"), createValueCell(state.clientHx.socialHx),
                createHeaderCell("生活習慣"), createValueCell((() => {
                  const parts: string[] = [];
                  if (state.clientHx.habits.smoke) {
                    parts.push(`抽菸${state.clientHx.habits.smokeFrequency ? ` (${state.clientHx.habits.smokeFrequency})` : ''}`);
                  }
                  if (state.clientHx.habits.drink) {
                    parts.push(`喝酒${state.clientHx.habits.drinkFrequency ? ` (${state.clientHx.habits.drinkFrequency})` : ''}`);
                  }
                  if (state.clientHx.habits.none || parts.length === 0) {
                    return '無';
                  }
                  return parts.join('、');
                })()),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("運動習慣"), createValueCell(formatExercises(state, true)),
                createHeaderCell(""), createValueCell(""),
              ],
            }),
          ],
        }),

        new Paragraph({ text: "2. 體位測量 (Anthropometry)", heading: HeadingLevel.HEADING_3, spacing: { before: 200 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("身高 (cm)"), createValueCell(state.anthropometry.height),
                createHeaderCell("體重 (kg)"), createValueCell(state.anthropometry.weight + (state.anthropometry.weightDate ? ` (${state.anthropometry.weightDate})` : '')),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("BMI"), createValueCell(state.anthropometry.bmi),
                createHeaderCell("IBW / ABW"), createValueCell(`${state.anthropometry.ibw} / ${state.anthropometry.abw}`),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("體脂率 (%)"), createValueCell(state.anthropometry.bodyFat),
                createHeaderCell("水腫狀況"), createValueCell(state.anthropometry.edema),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("右手 / 左手肌肉量 (kg)"), createValueCell(`${state.anthropometry.rightArmMuscle || '--'} / ${state.anthropometry.leftArmMuscle || '--'}`),
                createHeaderCell("右腳 / 左腳肌肉量 (kg)"), createValueCell(`${state.anthropometry.rightLegMuscle || '--'} / ${state.anthropometry.leftLegMuscle || '--'}`),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("手握力 (kg)"), createValueCell(state.anthropometry.gripStrength || '--'),
                createHeaderCell("ASM 肌肉量 (ASMI)"), createValueCell((() => {
                  const h = parseFloat(state.anthropometry.height);
                  const r = parseFloat(state.anthropometry.rightArmMuscle || '');
                  const l = parseFloat(state.anthropometry.leftArmMuscle || '');
                  const rl = parseFloat(state.anthropometry.rightLegMuscle || '');
                  const ll = parseFloat(state.anthropometry.leftLegMuscle || '');
                  if (!isNaN(h) && h > 0 && !isNaN(r) && !isNaN(l) && !isNaN(rl) && !isNaN(ll)) {
                    return `${((10000 * (r + l + rl + ll)) / (h * h)).toFixed(2)} kg/m²`;
                  }
                  return '--';
                })()),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("校正型 (ASM/BMI)"), createValueCell((() => {
                  const weight = parseFloat(state.anthropometry.weight);
                  const h = parseFloat(state.anthropometry.height);
                  const r = parseFloat(state.anthropometry.rightArmMuscle || '');
                  const l = parseFloat(state.anthropometry.leftArmMuscle || '');
                  const rl = parseFloat(state.anthropometry.rightLegMuscle || '');
                  const ll = parseFloat(state.anthropometry.leftLegMuscle || '');
                  if (!isNaN(r) && !isNaN(l) && !isNaN(rl) && !isNaN(ll)) {
                    const sum = r + l + rl + ll;
                    const h_m = h / 100;
                    const computedBmi = (!isNaN(weight) && h_m > 0) ? (weight / (h_m * h_m)) : 0;
                    const bmiVal = parseFloat(state.anthropometry.bmi) || computedBmi;
                    if (bmiVal > 0) {
                      return `${(sum / bmiVal).toFixed(3)} m²`;
                    }
                  }
                  return '--';
                })()),
                createHeaderCell("肌少症評估 (AWGS 2025)"), createValueCell(state.anthropometry.sarcopeniaResult || '資料不足'),
              ],
            }),
          ],
        }),

        new Paragraph({ text: "3. 生化數值 (Biochemistry)", heading: HeadingLevel.HEADING_3, spacing: { before: 200 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: (() => {
            const entries = Object.entries(state.biochemistry);
            const rows: TableRow[] = [];
            for (let i = 0; i < entries.length; i += 3) {
              const chunk = entries.slice(i, i + 3);
              rows.push(new TableRow({
                children: chunk.flatMap(([key, val]) => [
                  createHeaderCell(key),
                  createValueCell(val)
                ])
              }));
            }
            return rows.length > 0 ? rows : [new TableRow({ children: [createValueCell("無紀錄")] })];
          })(),
        }),
        state.biochemistryNotes ? new Paragraph({
          children: [
            new TextRun({ text: "備註: ", bold: true }),
            new TextRun({ text: state.biochemistryNotes }),
          ],
          spacing: { before: 200 }
        }) : new Paragraph({ text: "" }),

        new Paragraph({ text: "4. 飲食史 (Diet Hx)", heading: HeadingLevel.HEADING_3, spacing: { before: 200 } }),
        new Paragraph({ text: `飲食型態: ${state.diet.type} / 傾向: ${state.diet.preference}` }),
        new Paragraph({ text: `餐次: ${state.diet.meals.join(", ") || (state.diet.mealsOther ? "" : "未填寫")}${state.diet.mealsOther ? (state.diet.meals.length > 0 ? "、" : "") + state.diet.mealsOther : ""}` }),
        new Paragraph({ text: `飲水量: ${state.diet.currentWater || "0"} ml/d${state.diet.currentWaterNotes ? ` (${state.diet.currentWaterNotes})` : ""}` }),
        new Paragraph({ text: `過敏: ${state.diet.allergies.join(", ") || (state.diet.allergiesOther ? "" : "無")}${state.diet.allergiesOther ? (state.diet.allergies.length > 0 ? "、" : "") + state.diet.allergiesOther : ""}` }),
        new Paragraph({ text: `保健品: ${state.diet.supplements || "無"}` }),
        
        // 目前攝取估計 (熱量、碳水化合物、蛋白質、脂肪)
        new Paragraph({ 
          text: "目前飲食攝取估計 (Current Dietary Intake Estimate)", 
          heading: HeadingLevel.HEADING_4, 
          spacing: { before: 150, after: 100 } 
        }),
        (() => {
          const totals = state.diet.logs.reduce((acc, item) => {
            const qty = item.qty || 0;
            const newCategories = { ...acc.categories };
            if (item.category) {
              newCategories[item.category] = (newCategories[item.category] || 0) + qty;
            }
            const carbs = (item.carbs || 0) * qty;
            const protein = (item.protein || 0) * qty;
            const fat = (item.fat || 0) * qty;
            const kcal = ((item.carbs || 0) * 4 + (item.protein || 0) * 4 + (item.fat || 0) * 9) * qty;
            return {
              carbs: acc.carbs + carbs,
              protein: acc.protein + protein,
              fat: acc.fat + fat,
              kcal: acc.kcal + kcal,
              categories: newCategories
            };
          }, { carbs: 0, protein: 0, fat: 0, kcal: 0, categories: {} as Record<string, number> });

          const totalKcal = Math.round(totals.kcal);
          const totalCarbs = parseFloat(totals.carbs.toFixed(1));
          const totalProtein = parseFloat(totals.protein.toFixed(1));
          const totalFat = parseFloat(totals.fat.toFixed(1));

          const carbsPct = totalKcal > 0 ? Math.round(((totalCarbs * 4) / totalKcal) * 100) : 0;
          const proteinPct = totalKcal > 0 ? Math.round(((totalProtein * 4) / totalKcal) * 100) : 0;
          const fatPct = totalKcal > 0 ? Math.round(((totalFat * 9) / totalKcal) * 100) : 0;

          const categoryItems = Object.entries(totals.categories)
            .filter(([_, count]) => count > 0)
            .map(([cat, count]) => `${cat}: ${count.toFixed(1)} 份`);

          return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  createHeaderCell("項目", "E0F2FE"),
                  createHeaderCell("目前估計攝取量", "E0F2FE"),
                  createHeaderCell("佔總熱量比例 / 熱量換算", "E0F2FE"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("總熱量 (Total Calories)"),
                  createValueCell(`${totalKcal} kcal`),
                  createValueCell(totalKcal > 0 ? "依飲食詳細登錄估算" : "尚未登錄食物記錄"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("碳水化合物 / 醣類 (Carbohydrates)"),
                  createValueCell(`${totalCarbs} g`),
                  createValueCell(`${carbsPct} % (${Math.round(totalCarbs * 4)} kcal)`),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("蛋白質 (Protein)"),
                  createValueCell(`${totalProtein} g`),
                  createValueCell(`${proteinPct} % (${Math.round(totalProtein * 4)} kcal)`),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("脂肪 (Fat / Lipids)"),
                  createValueCell(`${totalFat} g`),
                  createValueCell(`${fatPct} % (${Math.round(totalFat * 9)} kcal)`),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("六大類食物份數估計"),
                  new TableCell({
                    columnSpan: 2,
                    children: [new Paragraph({ text: categoryItems.length > 0 ? categoryItems.join("、 ") : "無詳細食物份數紀錄" })],
                    verticalAlign: VerticalAlign.CENTER,
                  }),
                ]
              }),
            ]
          });
        })(),
        state.diet.notes ? new Paragraph({
          children: [
            new TextRun({ text: "飲食史備註: ", bold: true }),
            new TextRun({ text: state.diet.notes }),
          ],
          spacing: { before: 100 }
        }) : new Paragraph({ text: "" }),
        state.diet.intakeNotes ? new Paragraph({
          children: [
            new TextRun({ text: "飲食攝取備註: ", bold: true }),
            new TextRun({ text: state.diet.intakeNotes }),
          ],
          spacing: { before: 100 }
        }) : new Paragraph({ text: "" }),

        // Detailed food log table
        new Paragraph({ 
          text: "飲食史詳細登錄明細 (Dietary Food Logs Detail)", 
          heading: HeadingLevel.HEADING_3, 
          spacing: { before: 200, after: 100 } 
        }),
        state.diet.logs.length === 0 ? new Paragraph({ text: "目前無詳細登錄之食物記錄" }) : new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("餐次"), 
                createHeaderCell("食物名稱"), 
                createHeaderCell("主要類別"), 
                createHeaderCell("份數"),
                createHeaderCell("醣類 (g)"),
                createHeaderCell("蛋白質 (g)"),
                createHeaderCell("脂肪 (g)"),
                createHeaderCell("熱量 (kcal)"),
                createHeaderCell("膳食纖維 (g)"),
                createHeaderCell("飽和脂肪 (g)"),
                createHeaderCell("反式脂肪 (g)"),
                createHeaderCell("膽固醇 (mg)"),
                createHeaderCell("鈉 Na (mg)"),
                createHeaderCell("鉀 K (mg)"),
                createHeaderCell("磷 P (mg)")
              ]
            }),
            ...[...state.diet.logs]
              .sort((a, b) => {
                const order = ["早餐", "早點", "午餐", "午點", "晚餐", "晚點"];
                const idxA = order.indexOf(a.meal);
                const idxB = order.indexOf(b.meal);
                return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
              })
              .map(item => {
                const na = typeof item.na === 'number' ? item.na : parseFloat(item.na || '0') || 0;
                const k = typeof item.k === 'number' ? item.k : parseFloat(item.k || '0') || 0;
                const p = typeof item.p === 'number' ? item.p : parseFloat(item.p || '0') || 0;
                const fiber = typeof item.fiber === 'number' ? item.fiber : parseFloat(item.fiber as string || '0') || 0;
                const satFat = typeof item.saturatedFat === 'number' ? item.saturatedFat : parseFloat(item.saturatedFat as string || '0') || 0;
                const transFat = typeof item.transFat === 'number' ? item.transFat : parseFloat(item.transFat as string || '0') || 0;
                const cholesterol = typeof item.cholesterol === 'number' ? item.cholesterol : parseFloat(item.cholesterol as string || '0') || 0;
                
                return new TableRow({
                  children: [
                    createValueCell(item.meal),
                    createValueCell(item.name),
                    createValueCell(item.category || "N/A"),
                    createValueCell(`${item.qty} 份`),
                    createValueCell(`${(item.carbs * item.qty).toFixed(1)}`),
                    createValueCell(`${(item.protein * item.qty).toFixed(1)}`),
                    createValueCell(`${(item.fat * item.qty).toFixed(1)}`),
                    createValueCell(`${Math.round((item.carbs * 4 + item.protein * 4 + item.fat * 9) * item.qty)}`),
                    createValueCell(`${(fiber * item.qty).toFixed(1)}`),
                    createValueCell(`${(satFat * item.qty).toFixed(1)}`),
                    createValueCell(`${(transFat * item.qty).toFixed(transFat === 0 ? 0 : 2)}`),
                    createValueCell(`${(cholesterol * item.qty).toFixed(0)}`),
                    createValueCell(`${(na * item.qty).toFixed(0)}`),
                    createValueCell(`${(k * item.qty).toFixed(0)}`),
                    createValueCell(`${(p * item.qty).toFixed(0)}`),
                  ]
                });
              })
          ]
        }),

        new Paragraph({ text: "5. 臨床狀況 (Clinical)", heading: HeadingLevel.HEADING_3, spacing: { before: 200, after: 100 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("既往病史 (Medical Hx)"),
                createValueCell((() => {
                  const hx = state.clinical.medicalHx
                    .map(h => (h === '腎臟病' && state.clinical.kidneyStage ? `腎臟病 (${state.clinical.kidneyStage})` : h));
                  if (state.clinical.medicalHxOther) {
                    hx.push(state.clinical.medicalHxOther);
                  }
                  return hx.length > 0 ? hx.join("、") : "無特定紀錄";
                })()),
                createHeaderCell("腸胃狀況 (GI Status)"),
                createValueCell((() => {
                  const gi = [...state.clinical.giStatus];
                  if (state.clinical.giStatusOther) {
                    gi.push(state.clinical.giStatusOther);
                  }
                  return gi.length > 0 ? gi.join("、") : "正常 / 無特殊不適";
                })()),
              ]
            }),
            new TableRow({
              children: [
                createHeaderCell("排便狀況 (Stool Status)"),
                createValueCell(state.clinical.stoolStatus || "正常 / 未填寫"),
                createHeaderCell("目前服用藥物 (Medications)"),
                createValueCell(state.clinical.medications || "無使用特殊藥物 / 未填寫"),
              ]
            }),
          ]
        }),

        // 2. Diagnosis
        new Paragraph({
          text: "二、營養診斷 (Nutrition Diagnosis)",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),
        ...state.diagnoses.map((pes, idx) => 
          new Paragraph({
            children: [
              new TextRun({ text: `PES ${idx + 1}: `, bold: true }),
              new TextRun({ text: `${pes.problem === '其他' ? (pes.problemOther || '其他') : pes.problem} (P) 相關於 ${pes.etiology === '其他' ? (pes.etiologyOther || '其他') : pes.etiology} (E) 經由 ${pes.symptom === '其他' ? (pes.symptomOther || '其他') : pes.symptom} (S) 證實。` }),
            ],
            spacing: { after: 100 },
          })
        ),
        state.diagnoses.length === 0 ? new Paragraph({ text: "尚無診斷紀錄" }) : new Paragraph({ text: "" }),

        // 3. Intervention
        new Paragraph({
          text: "三、營養介入 (Nutrition Intervention)",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),
        new Paragraph({ text: `飲食計畫類型: ${state.intervention.dietType}` }),
        new Paragraph({ text: `衛教重點: ${state.intervention.educationTopics.join(", ") || "無"}` }),
        ...(state.intervention.educationNotes ? [
          new Paragraph({ text: `自訂衛教備註: ${state.intervention.educationNotes}` })
        ] : []),
        new Paragraph({ text: `轉介建議: ${state.intervention.referral || "無"}` }),

        // 新增/加強：建議熱量需求與三大營養素比例
        new Paragraph({ 
          text: "1. 建議熱量需求與三大營養素比例 (Recommended Caloric & Macronutrients Targets)", 
          heading: HeadingLevel.HEADING_3, 
          spacing: { before: 200, after: 100 } 
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: (() => {
            const recommendedKcalStr = calcRecommendedKcalStr(state);
            const hb = getRecommendedHBKcal(state);
            const macros = getMacroDistribution(state);
            const targetKcalStr = state.diet.targetKcal ? `${state.diet.targetKcal} kcal/d` : (recommendedKcalStr ? `${recommendedKcalStr} kcal/d` : "未填寫");
            return [
              new TableRow({
                children: [
                  createHeaderCell("項目"),
                  createHeaderCell("設計與建議數值"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("建議熱量需求 (僅供參考)"),
                  createValueCell(recommendedKcalStr ? `${recommendedKcalStr} kcal/d` : "未定"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("建議熱量需求 (Harris Benedict)"),
                  createValueCell(hb.err ? "資料不足" : `BEE: ${hb.bee} kcal / 總計: ${hb.total} kcal/d`),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("設定介入熱量目標"),
                  createValueCell(targetKcalStr),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("醣類 (Carbohydrates)"),
                  createValueCell(`${macros.carbsG} g (${macros.carbsPer}%)`),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("蛋白質 (Protein)"),
                  createValueCell(`${macros.proteinG} g (${macros.proteinPer}%)`),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("脂肪 (Fat / Lipids)"),
                  createValueCell(`${macros.fatG} g (${macros.fatPer}%)`),
                ]
              }),
            ];
          })()
        }),

        // 新增/加強：六大類食物份數計算與建議份量
        new Paragraph({ 
          text: "2. 六大類食物份數計算與建議份量 (Food Portions Calculator & Plan)", 
          heading: HeadingLevel.HEADING_3, 
          spacing: { before: 200, after: 100 } 
        }),
        (() => {
          let totalP = 0, totalC = 0, totalF = 0, totalK = 0;
          const rows = [
            '低脂乳品',
            '全脂乳品',
            '全榖根莖',
            '低脂豆魚蛋肉',
            '中脂豆魚蛋肉',
            '蔬菜',
            '水果',
            '堅果',
            '低氮澱粉'
          ].map(key => {
            const val = state.intervention.portions?.[key] || 0;
            const rowInfo = PORT_VALS[key];
            const p = val * rowInfo.p;
            const c = val * rowInfo.c;
            const f = val * rowInfo.f;
            const k = val * rowInfo.k;
            totalP += p;
            totalC += c;
            totalF += f;
            totalK += k;
            
            return new TableRow({
              children: [
                createHeaderCell(key),
                createValueCell(`${val} 份`),
                createValueCell(`${p.toFixed(1)} g`),
                createValueCell(`${c.toFixed(1)} g`),
                createValueCell(`${f.toFixed(1)} g`),
                createValueCell(`${Math.round(k)} kcal`),
              ]
            });
          });

          // Add Total row
          rows.push(new TableRow({
            children: [
              createHeaderCell("份數計算總計", "E2E8F0"),
              createHeaderCell("", "E2E8F0"),
              createHeaderCell(`${totalP.toFixed(1)} g`, "E2E8F0"),
              createHeaderCell(`${totalC.toFixed(1)} g`, "E2E8F0"),
              createHeaderCell(`${totalF.toFixed(1)} g`, "E2E8F0"),
              createHeaderCell(`${Math.round(totalK)} kcal`, "E2E8F0"),
            ]
          }));

          return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  createHeaderCell("食物類別"),
                  createHeaderCell("設計份數"),
                  createHeaderCell("蛋白質 (g)"),
                  createHeaderCell("醣類 (g)"),
                  createHeaderCell("脂肪 (g)"),
                  createHeaderCell("熱量 (kcal)"),
                ]
              }),
              ...rows
            ]
          });
        })(),

        new Paragraph({ text: "3. 飲食計畫 (Meal Plan)", heading: HeadingLevel.HEADING_3, spacing: { before: 200 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("餐次"), 
                createHeaderCell("內容"),
              ],
            }),
            ...["早餐", "早點", "午餐", "午點", "晚餐", "晚點"].map(meal => {
              const mealKeyMap: any = {
                "早餐": "breakfast",
                "早點": "morningSnack",
                "午餐": "lunch",
                "午點": "afternoonSnack",
                "晚餐": "dinner",
                "晚點": "eveningSnack"
              };
              const content = Object.values(state.intervention.mealPlan).map(cat => (cat as any)[mealKeyMap[meal]]).filter(Boolean).join(", ");
              return new TableRow({
                children: [
                  createHeaderCell(meal),
                  createValueCell(content || "依計畫執行"),
                ]
              });
            })
          ]
        }),

        // 4. Monitoring
        new Paragraph({
          text: "四、營養監測 (Nutrition Monitoring)",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        }),
        ...(state.monitoring.selectedIndicators && state.monitoring.selectedIndicators.length > 0 ? [
          new Paragraph({ text: `追蹤監測項目: ${state.monitoring.selectedIndicators.join("、")}` })
        ] : []),
        new Paragraph({ text: `下次追蹤日期: ${state.monitoring.nextDate || "未定"}` }),
        new Paragraph({ text: `監測計畫: ${state.monitoring.plan || "無"}` }),
        
        new Paragraph({ text: "追蹤紀錄 (History)", heading: HeadingLevel.HEADING_3, spacing: { before: 200 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("日期"), createHeaderCell("體重"), createHeaderCell("HbA1c"), createHeaderCell("eGFR"), createHeaderCell("TG/LDL")
              ]
            }),
            ...state.monitoring.history.map(record => new TableRow({
              children: [
                createValueCell(record.date),
                createValueCell(String(record.weight || '--')),
                createValueCell(String(record.hba1c || '--')),
                createValueCell(String(record.egfr || '--')),
                createValueCell(`${record.tg || '--'}/${record.ldl || '--'}`)
              ]
            }))
          ]
        }),

        new Paragraph({
          text: "\n\n營養師簽章: ____________________",
          alignment: AlignmentType.RIGHT,
          spacing: { before: 800 },
        }),
      ],
    }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `營養諮詢紀錄_${state.clientHx.name || "未命名"}_${state.consultDate}.docx`);
};

export const generateReminderWordDoc = async (state: AppState) => {
  const base64ToUint8Array = (base64: string) => {
    const binaryString = atob(base64.split(',')[1]);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const imageRuns = state.educationImages.map(img => {
    try {
      return new Paragraph({
        children: [
          new ImageRun({
            data: base64ToUint8Array(img),
            transformation: {
              width: 400,
              height: 225,
            },
          } as any),
        ],
        spacing: { before: 200, after: 200 },
        alignment: AlignmentType.CENTER,
      });
    } catch (e) {
      console.error("Error adding image to Word:", e);
      return new Paragraph({ text: "[圖片無法顯示]" });
    }
  });

  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({
          text: "營養諮詢小提醒",
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),

        // 諮詢細節
        new Paragraph({ text: "一、諮詢細節", heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 200 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("姓名"), createValueCell(state.clientHx.name),
                createHeaderCell("生日"), createValueCell(state.clientHx.birthday),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("身高 (cm)"), createValueCell(state.anthropometry.height),
                createHeaderCell("體重 (kg)"), createValueCell(state.anthropometry.weight + (state.anthropometry.weightDate ? ` (${state.anthropometry.weightDate})` : '')),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("BMI"), createValueCell(state.anthropometry.bmi),
                createHeaderCell("腰圍 (cm)"), createValueCell(state.anthropometry.waist),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("諮詢類型"), createValueCell(state.counselingType),
                createHeaderCell("諮詢日期"), createValueCell(state.consultDate),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("運動習慣"), 
                new TableCell({
                  columnSpan: 3,
                  children: [new Paragraph({ text: formatExercises(state, false) })],
                  verticalAlign: VerticalAlign.CENTER,
                })
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("既往病史"), 
                createValueCell(
                  state.clinical.medicalHx
                    .map(h => (h === '腎臟病' && state.clinical.kidneyStage ? `腎臟病 (${state.clinical.kidneyStage})` : h))
                    .concat(state.clinical.medicalHxOther ? [state.clinical.medicalHxOther] : [])
                    .join("、") || "無特定紀錄"
                ),
                createHeaderCell("腸胃狀況"), 
                createValueCell(
                  state.clinical.giStatus
                    .concat(state.clinical.giStatusOther ? [state.clinical.giStatusOther] : [])
                    .join("、") || "正常"
                ),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("排便狀況"), createValueCell(state.clinical.stoolStatus || "正常 / 未填寫"),
                createHeaderCell("目前用藥"), createValueCell(state.clinical.medications || "無使用特殊藥物 / 未填寫"),
              ],
            }),
          ],
        }),

        // 生化數據
        new Paragraph({ text: "二、生化數據", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: (() => {
            const entries = Object.entries(state.biochemistry).filter(([_, v]) => v);
            const rows: TableRow[] = [];
            for (let i = 0; i < entries.length; i += 3) {
              const chunk = entries.slice(i, i + 3);
              rows.push(new TableRow({
                children: chunk.flatMap(([key, val]) => [
                  createHeaderCell(key, "EFF6FF"),
                  createValueCell(val)
                ])
              }));
            }
            return rows.length > 0 ? rows : [new TableRow({ children: [createValueCell("無紀錄")] })];
          })(),
        }),
        state.biochemistryNotes ? new Paragraph({
          children: [
            new TextRun({ text: "數據分析備註: ", bold: true }),
            new TextRun({ text: state.biochemistryNotes }),
          ],
          spacing: { before: 200 }
        }) : new Paragraph({ text: "" }),

        // 營養控制目標與目前攝取比較
        new Paragraph({ text: "三、營養控制目標 (Nutrition Control Targets)", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
        new Paragraph({
          text: "1. 建議熱量需求與三大營養素比例 (Recommended Caloric & Macronutrients Targets)",
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 100, after: 100 }
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: (() => {
            const recommendedKcalStr = calcRecommendedKcalStr(state);
            const hb = getRecommendedHBKcal(state);
            const macros = getMacroDistribution(state);
            const targetKcalStr = state.diet.targetKcal ? `${state.diet.targetKcal} kcal/d` : (recommendedKcalStr ? `${recommendedKcalStr} kcal/d` : "未填寫");
            
            // 目前飲食攝取計算
            const currentDiet = state.diet.logs.reduce((acc, item) => {
              const qty = item.qty || 0;
              const carbs = (item.carbs || 0) * qty;
              const protein = (item.protein || 0) * qty;
              const fat = (item.fat || 0) * qty;
              const kcal = ((item.carbs || 0) * 4 + (item.protein || 0) * 4 + (item.fat || 0) * 9) * qty;
              return {
                carbs: acc.carbs + carbs,
                protein: acc.protein + protein,
                fat: acc.fat + fat,
                kcal: acc.kcal + kcal,
              };
            }, { carbs: 0, protein: 0, fat: 0, kcal: 0 });
            
            const currKcal = Math.round(currentDiet.kcal);
            const currCarbs = parseFloat(currentDiet.carbs.toFixed(1));
            const currProtein = parseFloat(currentDiet.protein.toFixed(1));
            const currFat = parseFloat(currentDiet.fat.toFixed(1));
            const currCarbsPct = currKcal > 0 ? Math.round(((currCarbs * 4) / currKcal) * 100) : 0;
            const currProteinPct = currKcal > 0 ? Math.round(((currProtein * 4) / currKcal) * 100) : 0;
            const currFatPct = currKcal > 0 ? Math.round(((currFat * 9) / currKcal) * 100) : 0;

            return [
              new TableRow({
                children: [
                  createHeaderCell("項目"),
                  createHeaderCell("建議與設定目標"),
                  createHeaderCell("目前估計攝取量 (基線)"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("建議熱量需求 (僅供參考)"),
                  createValueCell(recommendedKcalStr ? `${recommendedKcalStr} kcal/d` : "未定"),
                  createValueCell(currKcal > 0 ? `${currKcal} kcal/d` : "無食物記錄"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("建議熱量需求 (Harris Benedict)"),
                  createValueCell(hb.err ? "資料不足" : `BEE: ${hb.bee} kcal / 總計: ${hb.total} kcal/d`),
                  createValueCell(currKcal > 0 ? `${currKcal} kcal/d` : "--"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("設定介入熱量目標"),
                  createValueCell(targetKcalStr),
                  createValueCell(currKcal > 0 ? `${currKcal} kcal/d` : "--"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("醣類 (Carbohydrates)"),
                  createValueCell(`${macros.carbsG} g (${macros.carbsPer}%)`),
                  createValueCell(currKcal > 0 ? `${currCarbs} g (${currCarbsPct}%)` : "--"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("蛋白質 (Protein)"),
                  createValueCell(`${macros.proteinG} g (${macros.proteinPer}%)`),
                  createValueCell(currKcal > 0 ? `${currProtein} g (${currProteinPct}%)` : "--"),
                ]
              }),
              new TableRow({
                children: [
                  createHeaderCell("脂肪 (Fat / Lipids)"),
                  createValueCell(`${macros.fatG} g (${macros.fatPer}%)`),
                  createValueCell(currKcal > 0 ? `${currFat} g (${currFatPct}%)` : "--"),
                ]
              }),
              ...(state.guidelineSelections.target_kcal || state.guidelineSelections.target_protein || state.guidelineSelections.target_carbs || state.guidelineSelections.target_fat ? [
                new TableRow({
                  children: [
                    createHeaderCell("自訂亮點目標 (勾選)"),
                    new TableCell({
                      columnSpan: 2,
                      children: [new Paragraph({
                        text: [
                          state.guidelineSelections.target_kcal ? `熱量: ${state.guidelineSelections.target_kcal}` : '',
                          state.guidelineSelections.target_protein ? `蛋白: ${state.guidelineSelections.target_protein}` : '',
                          state.guidelineSelections.target_carbs ? `醣類: ${state.guidelineSelections.target_carbs}` : '',
                          state.guidelineSelections.target_fat ? `脂肪: ${state.guidelineSelections.target_fat}` : '',
                        ].filter(Boolean).join("、 ")
                      })],
                      verticalAlign: VerticalAlign.CENTER,
                    }),
                  ]
                })
              ] : [])
            ];
          })()
        }),

        // 六大類食物份數計算與建議份量
        new Paragraph({ 
          text: "2. 六大類食物份數計算與建議份量 (Food Portions Calculator & Plan)", 
          heading: HeadingLevel.HEADING_3, 
          spacing: { before: 200, after: 100 } 
        }),
        (() => {
          let totalP = 0, totalC = 0, totalF = 0, totalK = 0;
          const rows = [
            '低脂乳品',
            '全脂乳品',
            '全榖根莖',
            '低脂豆魚蛋肉',
            '中脂豆魚蛋肉',
            '蔬菜',
            '水果',
            '堅果',
            '低氮澱粉'
          ].map(key => {
            const val = state.intervention.portions?.[key] || 0;
            const rowInfo = PORT_VALS[key];
            const p = val * rowInfo.p;
            const c = val * rowInfo.c;
            const f = val * rowInfo.f;
            const k = val * rowInfo.k;
            totalP += p;
            totalC += c;
            totalF += f;
            totalK += k;
            
            return new TableRow({
              children: [
                createHeaderCell(key, "F0F9FF"),
                createValueCell(`${val} 份`),
                createValueCell(`${p.toFixed(1)} g`),
                createValueCell(`${c.toFixed(1)} g`),
                createValueCell(`${f.toFixed(1)} g`),
                createValueCell(`${Math.round(k)} kcal`),
              ]
            });
          });

          // Add Total row
          rows.push(new TableRow({
            children: [
              createHeaderCell("份數計算總計", "EFF6FF"),
              createHeaderCell("", "EFF6FF"),
              createHeaderCell(`${totalP.toFixed(1)} g`, "EFF6FF"),
              createHeaderCell(`${totalC.toFixed(1)} g`, "EFF6FF"),
              createHeaderCell(`${totalF.toFixed(1)} g`, "EFF6FF"),
              createHeaderCell(`${Math.round(totalK)} kcal`, "EFF6FF"),
            ]
          }));

          return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  createHeaderCell("食物類別", "DBEAFE"),
                  createHeaderCell("設計份數", "DBEAFE"),
                  createHeaderCell("蛋白質 (g)", "DBEAFE"),
                  createHeaderCell("醣類 (g)", "DBEAFE"),
                  createHeaderCell("脂肪 (g)", "DBEAFE"),
                  createHeaderCell("熱量 (kcal)", "DBEAFE"),
                ]
              }),
              ...rows
            ]
          });
        })(),

        // 備註與注意事項
        new Paragraph({ text: "四、備註與注意事項", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
        new Paragraph({ text: state.reminderNotes || "無" }),

        // 衛教資訊
        new Paragraph({ text: "五、衛教資訊與附件", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
        new Paragraph({ text: state.intervention.educationTopics.join(", ") || "無" }),
        ...(state.intervention.educationNotes ? [
          new Paragraph({ text: `自訂衛教備註: ${state.intervention.educationNotes}` })
        ] : []),
        ...imageRuns,

        new Paragraph({
          text: "\n\n營養師: " + state.dietitian,
          alignment: AlignmentType.RIGHT,
          spacing: { before: 800 },
        }),
      ],
    }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `諮詢小提醒_${state.clientHx.name || "未命名"}_${state.consultDate}.docx`);
};
