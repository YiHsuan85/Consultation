export interface ClientHistory {
  name: string;
  gender: 'male' | 'female' | '';
  birthday: string;
  workStatus: string;
  medicalHistory: string[];
  kidneyStage: string;
  familyHistory: string;
  socialHistory: string;
  mealPreparer: string;
  region: string;
  smoking: string;
  alcohol: string;
  exerciseFrequency: string;
  exerciseType: string;
  activityFactor: 'none' | 'light' | 'moderate' | 'heavy' | '';
}

export interface Anthropometry {
  height: number;
  weight: number;
  standardWeight: number;
  adjustedWeight: number;
  weightChange: string;
  bmi: number;
  bodyFat: number;
  edema: boolean;
}

export interface Biochemistry {
  bp: string;
  fpg: string;
  hba1c: string;
  bun: string;
  cr: string;
  egfr: string;
  upcr: string;
  uricAcid: string;
  na: string;
  k: string;
  p: string;
  tc: string;
  hdl: string;
  ldl: string;
  tg: string;
  ast: string;
  alt: string;
  alb: string;
}

export interface Clinical {
  currentHistory: string[];
  otherHistory: string;
  medications: string;
}

export interface DietHistory {
  pattern: 'oral' | 'special' | 'tube' | '';
  mealFreq: Record<string, boolean>;
  eatingOutFreq: Record<string, boolean>;
  preference: string;
  appetiteChange: string;
  supplements: string;
  dietaryHistory: string;
}

export interface FoodEntry {
  id: string;
  name: string;
  category: string;
  portions: number;
  carbs: number;
  protein: number;
  fat: number;
  na: number;
  k: number;
  p: number;
  calories: number;
  meal: 'breakfast' | 'morningSnack' | 'lunch' | 'afternoonSnack' | 'dinner' | 'eveningSnack';
}

export interface PES {
  id: string;
  domain: string;
  problem: string;
  etiology: string;
  symptoms: string;
}

export interface MonitoringRecord {
  date: string;
  weight: number;
  hba1c: number;
  egfr: number;
  tg: number;
  ldl: number;
}

export interface NutritionRecord {
  id: string;
  date: string;
  goal: string;
  notes: string;
  assessment: {
    clientHx: ClientHistory;
    anthropometry: Anthropometry;
    biochemistry: Biochemistry;
    clinical: Clinical;
    diet: DietHistory;
    foodEntries: FoodEntry[];
    waterIntake: number;
  };
  diagnosis: PES[];
  intervention: {
    plan: string;
    education: string[];
  };
  monitoring: MonitoringRecord[];
}
