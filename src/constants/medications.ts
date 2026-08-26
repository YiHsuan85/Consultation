export interface Medication {
  name: string;
  genericName?: string;
  indication: string;
  dosage: string;
  precautions: string[];
  nutritionInteraction: string[];
}

export const MEDICATIONS: Medication[] = [
  {
    name: "💉 Humalog U-100 KwikPen",
    genericName: "優泌樂筆 Insulin lispro 300 IU/3 mL",
    indication: "糖尿病",
    dosage: "餐前0–15分鐘注射",
    precautions: [
      "需配合進食避免低血糖",
      "與 Pioglitazone 併用 → 心衰竭風險↑"
    ],
    nutritionInteraction: [
      "碳水攝取量需穩定",
      "延遲進食 → 低血糖"
    ]
  },
  {
    name: "💊 Glucophage",
    genericName: "Metformin",
    indication: "第2型糖尿病",
    dosage: "500–2000 mg/day（餐後）",
    precautions: [
      "eGFR <30 禁用",
      "腸胃不適常見"
    ],
    nutritionInteraction: [
      "↓維生素B12吸收（長期）"
    ]
  },
  {
    name: "💊 Forxiga",
    genericName: "Dapagliflozin",
    indication: "糖尿病、心衰竭、CKD",
    dosage: "10 mg/day",
    precautions: [
      "脫水、泌尿道感染"
    ],
    nutritionInteraction: [
      "低碳飲食 → 酮酸中毒風險"
    ]
  },
  {
    name: "💊 Lipitor",
    genericName: "Atorvastatin",
    indication: "高膽固醇、心血管預防",
    dosage: "10–40 mg/day",
    precautions: [
      "肌肉疼痛、肝功能上升"
    ],
    nutritionInteraction: [
      "❌ 葡萄柚 → 增加藥物濃度"
    ]
  },
  {
    name: "💊 Lipidil",
    genericName: "Fenofibrate",
    indication: "高三酸甘油酯",
    dosage: "160–200 mg/day",
    precautions: [
      "與statin併用 → 肌病風險"
    ],
    nutritionInteraction: [
      "高脂飲食 → 降低效果"
    ]
  },
  {
    name: "💊 Ezetrol",
    genericName: "Ezetimibe",
    indication: "高LDL",
    dosage: "10 mg/day",
    precautions: [
      "常與statin併用"
    ],
    nutritionInteraction: [
      "高膽固醇飲食會抵銷效果"
    ]
  },
  {
    name: "💊 Renitec",
    genericName: "Enalapril",
    indication: "高血壓、腎病",
    dosage: "5–20 mg/day",
    precautions: [
      "高血鉀、乾咳",
      "懷孕禁用"
    ],
    nutritionInteraction: [
      "⚠️ 高鉀飲食（香蕉、菠菜）"
    ]
  },
  {
    name: "💊 Cozaar",
    genericName: "Losartan",
    indication: "高血壓",
    dosage: "50–100 mg/day",
    precautions: [
      "高血鉀"
    ],
    nutritionInteraction: [
      "高鉀飲食需注意"
    ]
  },
  {
    name: "💊 Natrilix",
    genericName: "Indapamide",
    indication: "高血壓",
    dosage: "1.25–2.5 mg/day",
    precautions: [
      "低鉀、脫水"
    ],
    nutritionInteraction: [
      "需補充鉀"
    ]
  },
  {
    name: "💊 Zyloric",
    genericName: "Allopurinol",
    indication: "高尿酸、痛風",
    dosage: "100–300 mg/day",
    precautions: [
      "嚴重皮膚過敏（SJS）"
    ],
    nutritionInteraction: [
      "高普林飲食 → 效果下降"
    ]
  },
  {
    name: "💊 Feburic",
    genericName: "Febuxostat",
    indication: "高尿酸",
    dosage: "40–80 mg/day",
    precautions: [
      "心血管風險"
    ],
    nutritionInteraction: [
      "酒精 → 尿酸上升"
    ]
  },
  {
    name: "💊 Jardiance",
    genericName: "Empagliflozin",
    indication: "CKD、糖尿病、心衰竭",
    dosage: "10 mg/day",
    precautions: [
      "脫水"
    ],
    nutritionInteraction: [
      "低碳飲食 → 酮酸中毒風險"
    ]
  },
  {
    name: "💊 Lasix",
    genericName: "Furosemide",
    indication: "水腫、腎病",
    dosage: "20–80 mg/day",
    precautions: [
      "電解質不平衡"
    ],
    nutritionInteraction: [
      "低鉀、低鎂"
    ]
  },
  {
    name: "💊 Pioglitazone (Pioglit) 順醣錠",
    genericName: "Pioglitazone",
    indication: "第2型糖尿病",
    dosage: "30 mg",
    precautions: [
      "可於飯前或隨餐服用",
      "立刻回診：尿液顏色變黑、皮膚及眼白變黃、胃痛且噁心嘔吐無食慾、呼吸困難"
    ],
    nutritionInteraction: [
      "可於飯前或隨餐服用，需注意規律飲食"
    ]
  },
  {
    name: "💊 Soma Cap (舒肌膠囊)",
    genericName: "Carisoprodol",
    indication: "肌肉痙攣、骨骼肌肉疾病引起之疼痛",
    dosage: "每日 3–4 次，每次 1 粒（飯後或睡前）",
    precautions: [
      "顯著嗜睡、頭暈、注意力不集中，避免開車或操作機械",
      "不可與酒精、鎮靜安眠藥併用（加重中樞抑制）",
      "長期連續使用可能具依賴性，應遵循醫囑"
    ],
    nutritionInteraction: [
      "❌ 嚴禁飲酒（酒精會大幅增強中樞神經抑制與嗜睡效果）",
      "飯後或隨餐服用可減少胃部不適"
    ]
  },
  {
    name: "💊 Acarbose (Glucobay 醣祿錠)",
    genericName: "Acarbose",
    indication: "第2型糖尿病（延緩碳水化合物消化吸收）",
    dosage: "50–100 mg，每日 3 次（隨第一口飯併服）",
    precautions: [
      "常見腸胃道反應：腹脹、腸胃排氣增加、腹瀉",
      "發生低血糖時，必須使用「葡萄糖 (Glucose)」矯正，蔗糖或澱粉無法迅速升糖"
    ],
    nutritionInteraction: [
      "🍚 必須於用餐時與「第一口飯」一同咬碎吞服，才能有效延緩碳水化合物分解",
      "⚠️ 若與其他降血糖藥併用引發低血糖，需補充葡萄糖錠或含葡萄糖飲料，食用蔗糖/一般糖果無效"
    ]
  },
  {
    name: "💊 Glimepiride (Amaryl 亞莫利錠)",
    genericName: "Glimepiride",
    indication: "第2型糖尿病（刺激胰島素分泌）",
    dosage: "1–8 mg/day（早餐前或當日第一主餐前）",
    precautions: [
      "低血糖風險（延遲用餐、劇烈運動或未按時進食）",
      "可能導致體重增加",
      "嚴重肝腎功能不全者慎用"
    ],
    nutritionInteraction: [
      "🍽️ 需配合規律三餐時間，切勿漏餐或延遲進食，以防發生低血糖",
      "隨身攜帶方糖、果汁或含糖飲料，出現低血糖徵兆（心悸、冒冷汗、手抖）時立即補充"
    ]
  },
  {
    name: "💊 Jardiance Duo (歐糖Met錠)",
    genericName: "Empagliflozin / Metformin",
    indication: "第2型糖尿病（SGLT2抑制劑 + Metformin 複方）",
    dosage: "每日 2 次，隨餐或飯後吞服",
    precautions: [
      "eGFR < 30 或嚴重腎功能不全者禁用",
      "生殖泌尿道真菌感染與脫水風險",
      "急性重病或極低碳水飲食時需注意正常血糖性酮酸中毒 (eDKA)"
    ],
    nutritionInteraction: [
      "🍚 隨餐或飯後服用以減少 Metformin 導致之腸胃不適（噁心、腹瀉）",
      "💧 每日應補足水分（1500–2000 mL），長期服藥建議定期監測維生素 B12"
    ]
  },
  {
    name: "💊 Xigduo XR (釋糖達緩釋錠)",
    genericName: "Dapagliflozin / Metformin XR",
    indication: "第2型糖尿病（SGLT2抑制劑 + Metformin 緩釋複方）",
    dosage: "每日 1 次，隨晚餐或第一主餐整錠吞服",
    precautions: [
      "⚠️ 緩釋錠劑必須整錠吞服，切勿嚼碎、分割或粉碎",
      "多補充水分預防生殖泌尿道感染與脫水",
      "急性嚴重感染或脫水狀況下應注意血糖與酮體變化"
    ],
    nutritionInteraction: [
      "🍽️ 隨晚餐或第一主餐整錠吞服，能顯著改善腸胃耐受性",
      "💧 補充充足水分，避開極低碳生酮飲食，長期監測維生素 B12"
    ]
  },
  {
    name: "💊 Glyxambi (糖健糖錠)",
    genericName: "Linagliptin / Empagliflozin",
    indication: "第2型糖尿病（DPP-4抑制劑 + SGLT2抑制劑 雙重複方）",
    dosage: "每日 1 次，早晨隨餐或空腹均可",
    precautions: [
      "生殖泌尿道感染、脫水風險",
      "警惕急性胰臟炎徵兆（持續劇烈上腹痛延伸至背部）",
      "嚴重腎功能不全或透析患者不建議使用"
    ],
    nutritionInteraction: [
      "💧 每日維持充足水分攝取，減少泌尿道感染發生率",
      "保持規律定時飲食，若有劇烈上腹痛應立即就醫"
    ]
  },
  {
    name: "💊 Qtern (酷騰膜衣錠)",
    genericName: "Dapagliflozin / Saxagliptin",
    indication: "第2型糖尿病（SGLT2抑制劑 + DPP-4抑制劑 雙重複方）",
    dosage: "每日 1 次，早晨隨餐或空腹均可",
    precautions: [
      "生殖器與泌尿道真菌感染風險、低血壓或脫水",
      "有心衰竭病史者使用 Saxagliptin 需謹慎評估",
      "留意急性胰臟炎及關節疼痛反應"
    ],
    nutritionInteraction: [
      "💧 確保每日足量水分，避免因排糖利尿造成脫水",
      "均衡飲食，若因嘔吐或腹瀉嚴重脫水時需諮詢醫師"
    ]
  },
  {
    name: "💊 Trajenta Duo (糖潤澤膜衣錠)",
    genericName: "Linagliptin / Metformin",
    indication: "第2型糖尿病（DPP-4抑制劑 + Metformin 複方）",
    dosage: "每日 2 次，隨餐或飯後吞服",
    precautions: [
      "常見胃腸不適（嘔吐、腹瀉、食慾不振）",
      "注意急性胰臟炎風險（持續性劇烈上腹痛）",
      "嚴重腎功能不全 (eGFR < 30) 禁用"
    ],
    nutritionInteraction: [
      "🍚 隨餐或飯後立即服用，可有效減輕 Metformin 對腸胃的刺激",
      "長期服用（超過 1 年）建議定期檢測維生素 B12 狀態"
    ]
  },
  {
    name: "💊 Janumet / Janumet XR (捷適妥膜衣錠 / 緩釋錠)",
    genericName: "Sitagliptin / Metformin",
    indication: "第2型糖尿病（DPP-4抑制劑 + Metformin 複方）",
    dosage: "每日 1–2 次，隨餐吞服（XR 緩釋錠不可咬碎）",
    precautions: [
      "腸胃道不適常見，極罕見乳酸中毒",
      "注意急性胰臟炎症狀",
      "eGFR < 30 禁用"
    ],
    nutritionInteraction: [
      "🍽️ 隨餐吞服可降低消化道刺激，XR 劑型需完整吞服",
      "維視規律飲食，長期用藥注意維生素 B12 補充"
    ]
  },
  {
    name: "💊 Galvus Met (宜糖健膜衣錠)",
    genericName: "Vildagliptin / Metformin (50/500mg, 50/850mg)",
    indication: "第2型糖尿病（DPP-4抑制劑 + Metformin 雙效複方）",
    dosage: "每日 2 次，每次 1 錠，早晚隨餐或飯後立即吞服",
    precautions: [
      "腸胃道不適（腹脹、噁心、腹瀉、食慾不振）最常見",
      "需定期追蹤肝功能 (ALT/AST)，若 ALT/AST > 3倍上限或出現黃疸應停藥",
      "嚴重腎功能不全 (eGFR < 30 mL/min) 或肝功能異常者禁用",
      "進行含碘造影劑檢查前需依醫囑暫停服藥（預防乳酸中毒）"
    ],
    nutritionInteraction: [
      "🍚 必須隨餐或飯後立即整錠吞服，能顯著減輕 Metformin 對胃腸道的刺激",
      "❌ 服藥期間嚴禁過量飲酒（酒精會增加乳酸中毒風險並干擾血糖控制）",
      "長期服藥（超過 1 年）建議定期評估維生素 B12 吸收狀態"
    ]
  },
  {
    name: "💊 Doxaben (可迅 / 暢循膜衣錠)",
    genericName: "Doxazosin mesylate (2mg, 4mg, XL 4mg)",
    indication: "高血壓、良性前列腺肥大 (BPH)",
    dosage: "每日 1 次，起始 1–2 mg，維持 2–8 mg/day（睡前或固定時間服用，XL 緩釋錠需整錠吞服）",
    precautions: [
      "首劑效應與姿勢性低血壓（起立或變換姿勢時易頭暈，宜放慢動作）",
      "初次服藥或調高劑量時建議於睡前服用",
      "可能出現暈眩、水腫、心悸、疲倦感"
    ],
    nutritionInteraction: [
      "🚫 嚴禁與酒精併服（酒精會增強血管擴張作用，加重降壓與頭暈風險）",
      "💧 維持充足水分補充，避免脫水加劇低血壓",
      "🧂 維持低鈉清淡飲食，避免高鈉攝取削弱降血壓效果"
    ]
  },
  {
    name: "💊 Ketosteril (開同膠囊 / 吉多利錠 / 酮酸胺基酸)",
    genericName: "Keto analogues of essential amino acids (酮基/羥基必需胺基酸複方)",
    indication: "慢性腎臟病 (CKD stage 3b–5 未洗腎) 配合低蛋白飲食治療，延緩腎功能惡化與透析時程",
    dosage: "通常每 5 kg 體重每日 1 錠（每日 3 次，每次 4–8 錠），隨餐或飯中立即整錠吞服",
    precautions: [
      "本品含鈣（每錠約含鈣 50 mg），需定期監測血鈣、血磷及 eGFR",
      "高血鈣症 (Hypercalcemia) 或胺基酸代謝異常者禁用",
      "與含鈣制酸劑或活性維生素 D 併用時需慎防高血鈣",
      "與四環黴素 (Tetracycline)、鐵劑、奎諾酮 (Quinolone) 間隔至少 2 小時服用（避免鈣離子螯合降低吸收）"
    ],
    nutritionInteraction: [
      "🍚 必須於用餐中或飯後立即整錠吞服（利用食物中多餘氮源進行轉氨作用合成必需胺基酸，減少尿毒生成）",
      "🥗 必須嚴格搭配「低蛋白飲食 (0.6–0.8 g/kg/d)」或「極低蛋白飲食 (0.3–0.4 g/kg/d)」",
      "⚡ 必須攝取充足熱量 (30–35 kcal/kg/d)，防止內源性蛋白質分解造成負氮平衡"
    ]
  },
  {
    name: "💊 Valsartan (得安穩 / 衛克壓 / 汎莎坦)",
    genericName: "Valsartan (80mg, 160mg) / Sacubitril-Valsartan (健安心)",
    indication: "高血壓、心臟衰竭 (NYHA II–IV)、心肌梗塞後左心室功能不全、保護腎臟 (延緩糖尿病腎病變)",
    dosage: "每日 1–2 次，40–160 mg/次，隨餐或空腹均可，固定時間服用",
    precautions: [
      "高血鉀風險 (Hyperkalemia)，定期監測血鉀及腎功能 (Cr, eGFR)",
      "懷孕及哺乳期婦女禁用（可能造成胎兒致畸或損傷）",
      "雙側腎動脈狹窄者需謹慎使用",
      "姿勢改變時宜放慢速度預防姿勢性低血壓與頭暈"
    ],
    nutritionInteraction: [
      "⚠️ 嚴禁大量攝取高鉀食品、含鉀低鈉鹽/代鹽、精力湯或高鉀保健品",
      "🚫 避免與高濃度葡萄柚汁大量同服",
      "🧂 維持低鈉飲食有助提升降壓效果"
    ]
  },
  {
    name: "💊 Ursodesoxycholic Acid (愛活膽 / 優思弗 / 利膽能 UDCA)",
    genericName: "Ursodesoxycholic Acid (熊去氧膽酸 UDCA 100mg, 300mg)",
    indication: "膽固醇系膽結石之溶解、原發性膽道性肝硬化 (PBC) 之改善、急慢性肝炎膽汁鬱積、脂肪肝",
    dosage: "每日 2–3 次，每次 50–300 mg，隨餐或飯後整錠吞服",
    precautions: [
      "膽道完全阻塞、急性膽囊炎、放射線不透光鈣化結石患者禁用",
      "偶見輕微腹瀉、稀便、噁心或胃部不適",
      "定期追蹤肝功能指數 (AST/ALT/GGT/Bilirubin)",
      "避免與含鋁制酸劑 (Antacids) 或膽酸結合樹脂 (Cholestyramine) 同時服用（需間隔至少 2 小時）"
    ],
    nutritionInteraction: [
      "🍽️ 隨餐或飯後立即服用，隨膳食油脂刺激膽汁分泌與藥物吸收",
      "🥗 配合低飽和脂肪、低膽固醇與高膳食纖維飲食，降低膽汁膽固醇飽和度",
      "💧 充足水分攝取，避免暴飲暴食及極端節食（極端節食易促發膽結石）"
    ]
  },
  {
    name: "💊 血壓藥 (單方) / Amlodipine (脈優 / 壓平樂)",
    genericName: "Amlodipine / CCB 鈣離子通道阻斷劑單方 (5mg, 10mg)",
    indication: "高血壓、心絞痛、冠狀動脈心臟病",
    dosage: "每日 1 次，每次 5–10 mg，早晨固定時間服用",
    precautions: [
      "下肢水腫、臉部潮紅、頭痛、心悸為常見反應",
      "定時定量服用，不可突然自行停藥以防反彈性高血壓",
      "變換姿勢時放慢動作以防姿勢性低血壓頭暈"
    ],
    nutritionInteraction: [
      "❌ 嚴禁食用葡萄柚或葡萄柚汁（會抑制肝臟 CYP3A4 代謝，使藥物血中濃度急遽升高導致嚴重低血壓）",
      "🧂 實行 DASH 得舒飲食或低鈉飲食（每日食鹽 < 5–6g），有助提升降壓療效",
      "🚫 避免與酒精併服"
    ]
  },
  {
    name: "💊 Rosuvastatin/Ezetimibe (脂瑞妥 / 冠脂妥複方 / Suvab)",
    genericName: "Rosuvastatin + Ezetimibe (10/10mg, 20/10mg)",
    indication: "原發性高膽固醇血症、混合型高血脂症、降低心血管疾病與心肌梗塞風險（抑制肝臟膽固醇合成 + 抑制小腸吸收雙重機轉）",
    dosage: "每日 1 次，每次 1 錠，固定時間隨餐或空腹服用",
    precautions: [
      "注意肌肉痠痛、無力或深茶色尿等橫紋肌溶解症 (Rhabdomyolysis) 警訊",
      "定期監測肝功能指數 (AST/ALT) 及肌酸激酶 (CK)",
      "活動性肝病或未明原因肝酵素持續上升者禁用",
      "孕婦及哺乳期婦女禁用"
    ],
    nutritionInteraction: [
      "🥩 配合低飽和脂肪、低反式脂肪與高纖飲食（避免高油脂飲食抵銷降血脂效果）",
      "🚫 避免過量飲酒（酒精會加重肝臟負擔與肌病風險）",
      "🍊 避免大量飲用葡萄柚汁",
      "💊 若併用制酸劑（含鋁、鎂），需間隔至少 2 小時以上服用"
    ]
  },
  {
    name: "💊 Aspirin (阿斯匹靈 / 伯基 Bokey / Tapal)",
    genericName: "Aspirin / Acetylsalicylic Acid (100mg 腸溶微粒膠囊/膜衣錠)",
    indication: "預防心肌梗塞、缺血性腦中風 (TIA)、動脈血栓栓塞症、冠狀動脈繞道手術後抗血小板凝集",
    dosage: "每日 1 次，每次 100 mg，飯後以足量溫開水整粒吞服（勿咬碎/壓碎）",
    precautions: [
      "腸胃道潰瘍、胃出血風險，若出現黑便、血便或嘔吐咖啡色物體需立即停藥就醫",
      "易有出血傾向（如刷牙出血、皮下瘀青加重），拔牙或手術前 5–7 天需依醫囑評估暫停",
      "活動性消化性潰瘍、出血性疾病或對阿斯匹靈過敏者禁用",
      "氣喘患者服用需留意引發氣喘發作風險"
    ],
    nutritionInteraction: [
      "🍚 務必於「飯後」或隨餐立即以整杯開水吞服，降低胃黏膜刺激與潰瘍風險",
      "🚫 嚴禁併服酒精（酒精與阿斯匹靈併用會顯著倍增胃出血及胃潰瘍風險）",
      "⚠️ 慎用高劑量銀杏 (Ginkgo)、魚油、大蒜精、維生素 E 等具抗凝血作用保健品（避免加成出血風險）"
    ]
  }
];
