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
                createHeaderCell("既往病史"), createValueCell(state.clientHx.medicalHx.join(", ") + (state.clientHx.medicalHxOther ? ` (${state.clientHx.medicalHxOther})` : "")),
                createHeaderCell("家族史"), createValueCell(state.clientHx.familyHx),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("社會史"), createValueCell(state.clientHx.socialHx),
                createHeaderCell("生活習慣"), createValueCell(`${state.clientHx.habits.smoke ? "抽菸 " : ""}${state.clientHx.habits.drink ? "喝酒" : ""}` || "無"),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("運動習慣"), createValueCell(`${state.clientHx.exercise.frequency ? state.clientHx.exercise.frequency + ' ' : ''}${state.clientHx.exercise.type}${state.clientHx.exercise.name ? ' (' + state.clientHx.exercise.name + ')' : ''} [因子: ${state.clientHx.exercise.activityFactor || 'N/A'}]`),
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
                createHeaderCell("體重 (kg)"), createValueCell(state.anthropometry.weight),
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

        new Paragraph({ text: "4. 飲食史 (Diet Hx)", heading: HeadingLevel.HEADING_3, spacing: { before: 200 } }),
        new Paragraph({ text: `飲食型態: ${state.diet.type} / 傾向: ${state.diet.preference}` }),
        new Paragraph({ text: `飲水量: ${state.diet.currentWater} ml/d` }),
        new Paragraph({ text: `保健品: ${state.diet.supplements || "無"}` }),

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
              new TextRun({ text: `${pes.problem} (P) 相關於 ${pes.etiology} (E) 經由 ${pes.symptom} (S) 證實。` }),
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
        new Paragraph({ text: `轉介建議: ${state.intervention.referral || "無"}` }),
        
        new Paragraph({ text: "飲食計畫 (Meal Plan)", heading: HeadingLevel.HEADING_3, spacing: { before: 200 } }),
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
                createValueCell(record.weight),
                createValueCell(record.hba1c),
                createValueCell(record.egfr),
                createValueCell(`${record.tg}/${record.ldl}`)
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
                createHeaderCell("體重 (kg)"), createValueCell(state.anthropometry.weight),
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
                  children: [new Paragraph({ text: `${state.clientHx.exercise.frequency ? state.clientHx.exercise.frequency + ' ' : ''}${state.clientHx.exercise.type}${state.clientHx.exercise.name ? ' (' + state.clientHx.exercise.name + ')' : ''}` || "無" })],
                  verticalAlign: VerticalAlign.CENTER,
                })
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

        // 營養控制目標
        new Paragraph({ text: "三、營養控制目標", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                createHeaderCell("熱量 (kcal/d)"), createValueCell(state.guidelineSelections.target_kcal),
                createHeaderCell("蛋白質 (g/d)"), createValueCell(state.guidelineSelections.target_protein),
              ],
            }),
            new TableRow({
              children: [
                createHeaderCell("醣類 (g/d)"), createValueCell(state.guidelineSelections.target_carbs),
                createHeaderCell("脂肪 (g/d)"), createValueCell(state.guidelineSelections.target_fat),
              ],
            }),
          ],
        }),

        // 備註與注意事項
        new Paragraph({ text: "四、備註與注意事項", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
        new Paragraph({ text: state.reminderNotes || "無" }),

        // 衛教資訊
        new Paragraph({ text: "五、衛教資訊與附件", heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } }),
        new Paragraph({ text: state.intervention.educationTopics.join(", ") || "無" }),
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
