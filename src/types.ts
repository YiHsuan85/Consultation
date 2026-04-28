export interface FoodItem {
  name: string;
  category: string;
  carbs: number;
  protein: number;
  fat: number;
  kcal: number;
  na?: number | string;
  k?: number | string;
  p?: number | string;
  portions?: number;
  meal?: string;
}

export interface DiagnosisProblem {
  etiologies: string[];
  symptoms: string[];
}

export interface DiagnosisDomain {
  label: string;
  problems: {
    [problem: string]: DiagnosisProblem;
  };
}

export interface DiagnosisData {
  [domain: string]: DiagnosisDomain;
}

export interface PortionPlan {
  [category: string]: number;
}

export interface GuidelineData {
  [kcal: string]: PortionPlan;
}

export interface PES {
  id: string;
  domain: string;
  problem: string;
  problemOther?: string;
  etiology: string;
  etiologyOther?: string;
  symptom: string;
  symptomOther?: string;
}

export interface MonitoringRecord {
  date: string;
  weight: string;
  hba1c: string;
  egfr: string;
  tg: string;
  ldl: string;
  tc: string;
  uricAcid: string;
  bp: string;
  other: string;
}

export interface AppState {
  consultDate: string;
  goal: string;
  notes: string;
  clientHx: {
    name: string;
    gender: string;
    birthday: string;
    job: string;
    jobDescription: string;
    familyHx: string;
    socialHx: string;
    region: string;
    habits: {
      smoke: boolean;
      drink: boolean;
    };
    exercise: {
      frequency: string;
      name: string;
      type: string;
      activityFactor: '無' | '輕度' | '中度' | '重度' | '';
    };
  };
  anthropometry: {
    height: string;
    weight: string;
    waist: string;
    weightChange: string;
    bmi: string;
    ibw: string;
    abw: string;
    bodyFat: string;
    edema: string;
    notes?: string;
  };
  biochemistry: {
    [key: string]: string;
  };
  biochemistryNotes: string;
  biochemistryDate?: string;
  clinical: {
    giStatus: string[];
    giStatusOther?: string;
    medicalHx: string[];
    medicalHxOther: string;
    medications: string;
  };
  diet: {
    type: string;
    frequency: string;
    preference: string;
    targetKcal: string;
    targetProtein: string;
    targetWater: string;
    currentWater: string;
    supplements: string;
    allergies: string[];
    allergiesOther: string;
    logs: (FoodItem & { id: string; qty: number; meal: string })[];
  };
  diagnoses: PES[];
  intervention: {
    dietType: 'DM' | 'CKD' | 'Custom';
    customGuidelines?: { [category: string]: number };
    educationTopics: string[];
    mealPlan: {
      [category: string]: {
        breakfast: string;
        morningSnack: string;
        lunch: string;
        afternoonSnack: string;
        dinner: string;
        eveningSnack: string;
      };
    };
    referral: string;
    macroConfig?: {
      carbsPercent: number;
      proteinPercent: number;
      fatPercent: number;
    };
  };
  monitoring: {
    history: MonitoringRecord[];
    nextDate: string;
    plan: string;
  };
  id?: string;
  userId?: string;
  dietitian: string;
  counselingType: string;
  reminderNotes: string;
  educationImages: string[];
  guidelineSelections: {
    [key: string]: any;
  };
}
