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
  }
];
