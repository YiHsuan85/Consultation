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
  saturatedFat?: number | string;
  transFat?: number | string;
  cholesterol?: number | string;
  fiber?: number | string;
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

export interface WeightRecord {
  id: string;
  date: string;
  weight: string | number;
}

export interface BiochemRecord {
  id: string;
  date: string;
  ac?: string | number;
  hba1c?: string | number;
  egfr?: string | number;
  tg?: string | number;
  ldl?: string | number;
  tc?: string | number;
  uricAcid?: string | number;
  hdl?: string | number;
  ast?: string | number;
  alt?: string | number;
  bp?: string | number;
  other?: string;
}

export interface MonitoringRecord {
  date: string;
  weight: string | number;
  ac?: string | number;
  hba1c?: string | number;
  egfr?: string | number;
  tg?: string | number;
  ldl?: string | number;
  tc?: string | number;
  uricAcid?: string | number;
  hdl?: string | number;
  ast?: string | number;
  alt?: string | number;
  bp?: string | number;
  other?: string;
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
      none?: boolean;
      smokeFrequency?: string;
      drinkFrequency?: string;
    };
    exercise: {
      frequency: string;
      name: string;
      type: string;
      activityFactor: '無' | '輕度' | '中度' | '重度' | '';
    };
    exerciseList?: {
      frequency: string;
      name: string;
      type: string;
    }[];
  };
  anthropometry: {
    height: string;
    weight: string;
    weightDate?: string;
    waist: string;
    weightChange: string;
    bmi: string;
    ibw: string;
    abw: string;
    bodyFat: string;
    edema: string;
    notes?: string;
    rightArmMuscle?: string;
    leftArmMuscle?: string;
    rightLegMuscle?: string;
    leftLegMuscle?: string;
    gripStrength?: string;
    sarcopeniaResult?: string;
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
    currentWaterNotes?: string;
    supplements: string;
    allergies: string[];
    allergiesOther: string;
    meals: string[];
    mealsOther?: string;
    notes: string;
    intakeNotes?: string;
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
    portions?: { [category: string]: number };
  };
  monitoring: {
    history: MonitoringRecord[];
    weightHistory?: WeightRecord[];
    biochemHistory?: BiochemRecord[];
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

export interface Patient {
  id?: string;
  userId: string;
  name: string;
  birthday: string;
  gender: '男' | '女';
  checklist: {
    consultation: boolean;
    personalizedMsg: boolean;
    fu1: boolean;
    fu2: boolean;
    fu3: boolean;
    fu4: boolean;
  };
  consultDate?: string;
  createdAt: any;
  updatedAt: any;
}
