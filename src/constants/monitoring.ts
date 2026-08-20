export interface MonitoringIndicatorItem {
  id: string;
  label: string;
  fullName?: string;
  unit?: string;
  category: 'anthropometry' | 'glycemia' | 'lipids' | 'bloodPressure' | 'renal';
}

export interface MonitoringGroup {
  id: 'anthropometry' | 'glycemia' | 'lipids' | 'bloodPressure' | 'renal';
  categoryTitle: string;
  subTitle: string;
  theme: {
    badge: string;
    border: string;
    bg: string;
    text: string;
    activeBg: string;
    activeBorder: string;
    activeText: string;
    checkboxActive: string;
  };
  items: MonitoringIndicatorItem[];
}

export const MONITORING_GROUPS: MonitoringGroup[] = [
  {
    id: 'anthropometry',
    categoryTitle: '體位測量',
    subTitle: 'Anthropometry',
    theme: {
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      border: 'border-emerald-200',
      bg: 'bg-emerald-50/50',
      text: 'text-emerald-800',
      activeBg: 'bg-emerald-600 text-white shadow-sm shadow-emerald-200',
      activeBorder: 'border-emerald-600',
      activeText: 'text-emerald-700',
      checkboxActive: 'bg-emerald-600 border-emerald-600 text-white'
    },
    items: [
      { id: '體重', label: '體重', fullName: '體重 (Weight)', category: 'anthropometry' },
      { id: 'BMI', label: 'BMI', fullName: '身體質量指數 (BMI)', category: 'anthropometry' },
      { id: '體脂率', label: '體脂率', fullName: '體脂率 (Body Fat %)', category: 'anthropometry' },
      { id: 'InBody', label: 'InBody', fullName: 'InBody / 身體組成分析', category: 'anthropometry' },
      { id: '腰圍', label: '腰圍', fullName: '腰圍', category: 'anthropometry' }
    ]
  },
  {
    id: 'glycemia',
    categoryTitle: '生化數據 - 血糖',
    subTitle: 'Glycemia',
    theme: {
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      border: 'border-amber-200',
      bg: 'bg-amber-50/50',
      text: 'text-amber-800',
      activeBg: 'bg-amber-500 text-white shadow-sm shadow-amber-200',
      activeBorder: 'border-amber-500',
      activeText: 'text-amber-700',
      checkboxActive: 'bg-amber-500 border-amber-500 text-white'
    },
    items: [
      { id: 'AC', label: 'AC', fullName: '空腹血糖 (AC / Fasting Glucose)', category: 'glycemia' },
      { id: 'HbA1c', label: 'HbA1c', fullName: '糖化血色素 (HbA1c)', category: 'glycemia' },
      { id: 'CGM', label: 'CGM', fullName: '連續血糖監測', category: 'glycemia' }
    ]
  },
  {
    id: 'lipids',
    categoryTitle: '生化數據 - 血脂',
    subTitle: 'Lipid Profile',
    theme: {
      badge: 'bg-rose-100 text-rose-800 border-rose-200',
      border: 'border-rose-200',
      bg: 'bg-rose-50/50',
      text: 'text-rose-800',
      activeBg: 'bg-rose-500 text-white shadow-sm shadow-rose-200',
      activeBorder: 'border-rose-500',
      activeText: 'text-rose-700',
      checkboxActive: 'bg-rose-500 border-rose-500 text-white'
    },
    items: [
      { id: 'TC', label: 'TC', fullName: '總膽固醇 (Total Cholesterol)', category: 'lipids' },
      { id: 'HDL', label: 'HDL', fullName: '高密度脂蛋白膽固醇 (HDL-C)', category: 'lipids' },
      { id: 'LDL', label: 'LDL', fullName: '低密度脂蛋白膽固醇 (LDL-C)', category: 'lipids' },
      { id: 'TG', label: 'TG', fullName: '三酸甘油酯 (Triglycerides)', category: 'lipids' }
    ]
  },
  {
    id: 'bloodPressure',
    categoryTitle: '生化數據 - 血壓',
    subTitle: 'Blood Pressure',
    theme: {
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
      border: 'border-purple-200',
      bg: 'bg-purple-50/50',
      text: 'text-purple-800',
      activeBg: 'bg-purple-600 text-white shadow-sm shadow-purple-200',
      activeBorder: 'border-purple-600',
      activeText: 'text-purple-700',
      checkboxActive: 'bg-purple-600 border-purple-600 text-white'
    },
    items: [
      { id: 'BP', label: 'BP', fullName: '血壓 (Blood Pressure)', category: 'bloodPressure' }
    ]
  },
  {
    id: 'renal',
    categoryTitle: '生化數據 - 腎臟',
    subTitle: 'Renal Function',
    theme: {
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      border: 'border-blue-200',
      bg: 'bg-blue-50/50',
      text: 'text-blue-800',
      activeBg: 'bg-blue-600 text-white shadow-sm shadow-blue-200',
      activeBorder: 'border-blue-600',
      activeText: 'text-blue-700',
      checkboxActive: 'bg-blue-600 border-blue-600 text-white'
    },
    items: [
      { id: 'UPCR', label: 'UPCR', fullName: '尿蛋白/肌酸酐比值 (Urine Protein/Cr Ratio)', category: 'renal' },
      { id: 'Cr', label: 'Cr', fullName: '血清肌酸酐 (Serum Creatinine)', category: 'renal' },
      { id: 'eGFR', label: 'eGFR', fullName: '腎絲球過濾率 (Estimated GFR)', category: 'renal' },
      { id: 'BUN', label: 'BUN', fullName: '血尿素氮 (Blood Urea Nitrogen)', category: 'renal' }
    ]
  }
];

export const ALL_MONITORING_INDICATOR_IDS = MONITORING_GROUPS.flatMap(g => g.items.map(i => i.id));

export const MONITORING_PRESETS = [
  {
    id: 'dm',
    name: '糖尿病重點',
    items: ['體重', 'BMI', 'AC', 'HbA1c', 'CGM', 'BP', 'eGFR', 'UPCR']
  },
  {
    id: 'ckd',
    name: '慢性腎臟病 (CKD)',
    items: ['體重', 'BP', 'UPCR', 'Cr', 'eGFR', 'BUN']
  },
  {
    id: 'cvd_lipid',
    name: '高血脂 / 心血管',
    items: ['體重', 'BMI', '腰圍', 'TC', 'HDL', 'LDL', 'TG', 'BP']
  },
  {
    id: 'weight_loss',
    name: '體重管理 / 減脂',
    items: ['體重', 'BMI', '體脂率', 'InBody', '腰圍', 'AC', 'HbA1c', 'TG', 'HDL']
  }
];
