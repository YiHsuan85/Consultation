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
    genericName: "Vildagliptin / Metformin",
    indication: "第2型糖尿病（DPP-4抑制劑 + Metformin 複方）",
    dosage: "每日 2 次，隨餐或飯後吞服",
    precautions: [
      "腸胃道不良反應（腹瀉、噁心）",
      "需定期追蹤肝功能 (ALT/AST)，若有黃疸或肝功能異常應停藥",
      "腎功能不全者慎用"
    ],
    nutritionInteraction: [
      "🍚 隨餐或飯後服用減輕腸胃負擔",
      "❌ 避免過量飲酒，長期服藥建議關心維生素 B12 吸收"
    ]
  }
];
