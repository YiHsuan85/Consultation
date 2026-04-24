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
  }
];
