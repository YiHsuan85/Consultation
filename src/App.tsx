import React, { useState, useMemo, useEffect } from 'react';
import { 
  ClipboardList, 
  Stethoscope, 
  Utensils, 
  Activity, 
  Search, 
  Plus, 
  Trash2, 
  Save, 
  Calendar,
  User,
  Calculator,
  ArrowRight,
  FileDown,
  Bell,
  LogOut,
  LogIn,
  History,
  X,
  Pill,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppState, FoodItem, PES, MonitoringRecord } from './types';
import { generateWordDoc, generateReminderWordDoc } from './lib/wordGenerator';
import { 
  auth, 
  db, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged, 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  Timestamp,
  deleteDoc,
  User as FirebaseUser
} from './firebase';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  FOOD_DATABASE, 
  DIAG_DATA, 
  DIET_GUIDELINES, 
  MEALS, 
  EXERCISE_TYPES, 
  ACTIVITY_FACTORS,
  INTERVENTION_CATEGORIES,
  DIET_LOG_CATEGORIES,
  NUTRITION_EDUCATION_CONTENT,
  BIO_RANGES
} from './constants';
import { MEDICATIONS } from './constants/medications';

const INITIAL_STATE: AppState = {
  consultDate: new Date().toISOString().split('T')[0],
  goal: '',
  notes: '',
  clientHx: {
    name: '',
    gender: '男',
    birthday: '',
    job: '在職中',
    jobDescription: '',
    familyHx: '',
    socialHx: '',
    region: '',
    habits: { smoke: false, drink: false },
    exercise: { frequency: '', name: '', type: '', activityFactor: '' }
  },
  anthropometry: {
    height: '',
    weight: '',
    waist: '',
    weightChange: '',
    bmi: '',
    ibw: '',
    abw: '',
    bodyFat: '',
    edema: '無',
    notes: ''
  },
  biochemistry: {
    BP: '', AC: '', PC: '', FPG: '', HbA1c: '', BUN: '', Cr: '', eGFR: '', UPCR: '', 
    UricAcid: '', Na: '', K: '', P: '', TC: '', HDL: '', LDL: '', 
    TG: '', AST: '', ALT: '', Alb: ''
  },
  biochemistryNotes: '',
  biochemistryDate: new Date().toISOString().split('T')[0],
  clinical: {
    giStatus: [],
    giStatusOther: '',
    medicalHx: [],
    medicalHxOther: '',
    medications: ''
  },
  diet: {
    type: '口服',
    frequency: '',
    preference: '葷',
    targetKcal: '',
    targetProtein: '',
    targetWater: '',
    currentWater: '',
    supplements: '',
    allergies: [],
    allergiesOther: '',
    meals: [],
    logs: []
  },
  diagnoses: [],
  intervention: {
    dietType: 'DM',
    customGuidelines: {},
    educationTopics: [],
    mealPlan: {},
    referral: '',
    macroConfig: {
      carbsPercent: 55,
      proteinPercent: 15,
      fatPercent: 30
    }
  },
  monitoring: {
    history: [],
    nextDate: '',
    plan: ''
  },
  dietitian: '巫宜諼營養師',
  counselingType: '糖尿病營養方針',
  reminderNotes: '',
  educationImages: [],
  guidelineSelections: {}
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

const GuidelineCheckbox = ({ label, id, state, setState }: { label: string, id: string, state: AppState, setState: any }) => (
  <label className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 rounded transition-colors">
    <input 
      type="checkbox" 
      checked={!!state.guidelineSelections[id]} 
      onChange={e => setState({
        ...state, 
        guidelineSelections: {
          ...state.guidelineSelections, 
          [id]: e.target.checked
        }
      })}
      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
    />
    <span className="text-sm text-slate-700">{label}</span>
  </label>
);

export default function App() {
  const [state, setState] = useState<AppState>(INITIAL_STATE);
  const [activeTab, setActiveTab] = useState<'assessment' | 'diagnosis' | 'intervention' | 'monitoring' | 'reminder' | 'medications'>('assessment');
  const [searchQuery, setSearchQuery] = useState('');
  const [medicationSearchQuery, setMedicationSearchQuery] = useState('');
  const [selectedFoodCategory, setSelectedFoodCategory] = useState<string>('');
  const [selectedFoodItem, setSelectedFoodItem] = useState<string>('');
  const [selectedMeal, setSelectedMeal] = useState('早餐');
  const [currentDiagnosis, setCurrentDiagnosis] = useState<PES>({ id: '', domain: '', problem: '', etiology: '', symptom: '' });
  const [currentMonitoring, setCurrentMonitoring] = useState<MonitoringRecord>({
    date: new Date().toISOString().split('T')[0],
    weight: '',
    hba1c: '',
    egfr: '',
    tg: '',
    ldl: '',
    tc: '',
    uricAcid: '',
    bp: '',
    other: ''
  });

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) {
        setHistory([]);
        setState(INITIAL_STATE);
      }
    });
    return () => unsubscribe();
  }, []);

  // History Listener
  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'consultations'),
      where('userId', '==', user.uid),
      orderBy('updatedAt', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setHistory(docs);
    });
    return () => unsubscribe();
  }, [user]);

  // BMI, IBW, ABW Calculation
  useEffect(() => {
    const h = parseFloat(state.anthropometry.height);
    const w = parseFloat(state.anthropometry.weight);
    const birthday = state.clientHx.birthday;

    if (h > 0 && w > 0) {
      const h_m = h / 100;
      const bmi = (w / (h_m * h_m)).toFixed(1);
      
      // Age calculation
      let age = 0;
      if (birthday) {
        const birthDate = new Date(birthday);
        const today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
      }

      const ibw_factor = age >= 50 ? 25 : 22;
      const ibw = (ibw_factor * h_m * h_m).toFixed(1);
      const abw = ((w - parseFloat(ibw)) / 4 + parseFloat(ibw)).toFixed(1);

      if (bmi !== state.anthropometry.bmi || ibw !== state.anthropometry.ibw || abw !== state.anthropometry.abw) {
        setState(prev => ({
          ...prev,
          anthropometry: { ...prev.anthropometry, bmi, ibw, abw }
        }));
      }
    }
  }, [state.anthropometry.height, state.anthropometry.weight, state.clientHx.birthday, state.anthropometry.bmi, state.anthropometry.ibw, state.anthropometry.abw]);

  // Daily Calorie Requirement Calculation
  const recommendedKcal = useMemo(() => {
    const bmi = parseFloat(state.anthropometry.bmi);
    const weight = parseFloat(state.anthropometry.weight);
    const abw = parseFloat(state.anthropometry.abw);
    const factor = state.clientHx.exercise.activityFactor;

    if (!bmi || !weight || !factor) return 0;

    let baseWeight = weight;
    if (bmi < 18.5 || bmi >= 24) {
      baseWeight = abw;
    }

    let multiplier = 0;
    if (factor === '無' || factor === '輕度') multiplier = 30;
    else if (factor === '中度') multiplier = 35;
    else if (factor === '重度') multiplier = 40;

    return Math.round(baseWeight * multiplier);
  }, [state.anthropometry.bmi, state.anthropometry.weight, state.anthropometry.abw, state.clientHx.exercise.activityFactor]);

  // Recommended Macros Breakdown
  const recommendedMacros = useMemo(() => {
    if (!recommendedKcal) return null;
    const config = state.intervention.macroConfig || { carbsPercent: 55, proteinPercent: 15, fatPercent: 30 };
    return {
      carbs: Math.round((recommendedKcal * (config.carbsPercent / 100)) / 4),
      protein: Math.round((recommendedKcal * (config.proteinPercent / 100)) / 4),
      fat: Math.round((recommendedKcal * (config.fatPercent / 100)) / 9)
    };
  }, [recommendedKcal, state.intervention.macroConfig]);

  // Recommended Water Intake Calculation (Weight * 30)
  const recommendedWater = useMemo(() => {
    const weight = parseFloat(state.anthropometry.weight);
    if (!weight) return 0;
    return Math.round(weight * 30);
  }, [state.anthropometry.weight]);

  // Persistence: Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('nutrition_counseling_record', JSON.stringify(state));
  }, [state]);

  // Persistence: Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('nutrition_counseling_record');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge saved state with INITIAL_STATE to ensure all fields exist
        setState(prev => ({
          ...INITIAL_STATE,
          ...parsed,
          id: parsed.id, // Explicitly restore ID
          diagnoses: parsed.diagnoses || [],
          clientHx: { ...INITIAL_STATE.clientHx, ...(parsed.clientHx || {}) },
          anthropometry: { ...INITIAL_STATE.anthropometry, ...(parsed.anthropometry || {}) },
          biochemistry: { ...INITIAL_STATE.biochemistry, ...(parsed.biochemistry || {}) },
          clinical: { ...INITIAL_STATE.clinical, ...(parsed.clinical || {}) },
          diet: { ...INITIAL_STATE.diet, ...(parsed.diet || {}) },
          intervention: { ...INITIAL_STATE.intervention, ...(parsed.intervention || {}) },
          monitoring: { ...INITIAL_STATE.monitoring, ...(parsed.monitoring || {}) }
        }));
      } catch (e) {
        console.error('Failed to load saved state', e);
      }
    }
  }, []);

  const handleSave = async () => {
    if (!user) {
      alert('請先登入以儲存紀錄。');
      return;
    }

    setIsSaving(true);
    console.group('Saving Record');
    try {
      // 1. Prepare clean data mapping - remove ID from the 'data' payload to avoid recursive fields
      const { id, ...cleanState } = state;
      
      const payload = {
        userId: user.uid,
        consultDate: state.consultDate,
        clientName: state.clientHx.name || '未命名個案',
        data: cleanState,
        updatedAt: Timestamp.now()
      };

      console.log('Target ID:', id);
      console.log('Payload:', payload);

      if (id) {
        // Update existing
        const docRef = doc(db, 'consultations', id);
        await updateDoc(docRef, payload);
        alert('紀錄已更新成功。');
      } else {
        // Create new
        const docRef = await addDoc(collection(db, 'consultations'), {
          ...payload,
          createdAt: Timestamp.now()
        });
        setState(prev => ({ ...prev, id: docRef.id }));
        alert('新紀錄已建立並儲存。');
      }
    } catch (error: any) {
      console.error('Save error details:', error);
      const errorCode = error.code || 'unknown';
      const errorMessage = error.message || '未知錯誤';
      alert(`儲存失敗: ${errorCode}\n${errorMessage}\n\n提醒：如果紀錄包含大量照片，請嘗試移除部分照片後再試。`);
    } finally {
      console.groupEnd();
      setIsSaving(false);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    if (confirm('確定要登出嗎？')) {
      await signOut(auth);
    }
  };

  const loadRecord = (record: any) => {
    setState({ ...record.data, id: record.id });
    setIsHistoryOpen(false);
    alert(`已載入 ${record.clientName} 的紀錄。`);
  };

  const deleteRecord = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm('確定要刪除此紀錄嗎？')) {
      try {
        await deleteDoc(doc(db, 'consultations', id));
        if (state.id === id) {
          setState(INITIAL_STATE);
        }
      } catch (error) {
        alert('刪除失敗。');
      }
    }
  };

  const setSelection = (id: string, value: any) => {
    setState({
      ...state,
      guidelineSelections: {
        ...state.guidelineSelections,
        [id]: value
      }
    });
  };

  const renderGuidelineSpecifics = () => {
    return null;
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadWord = () => {
    generateReminderWordDoc(state);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setState({
        ...state,
        educationImages: [...state.educationImages, base64String]
      });
    };
    reader.readAsDataURL(file);
  };

  const dietTotals = useMemo(() => {
    return state.diet.logs.reduce((acc, item) => {
      const qty = item.qty || 0;
      const na = typeof item.na === 'number' ? item.na : parseFloat(item.na || '0') || 0;
      const k = typeof item.k === 'number' ? item.k : parseFloat(item.k || '0') || 0;
      const p = typeof item.p === 'number' ? item.p : parseFloat(item.p || '0') || 0;
      
      return {
        carbs: acc.carbs + (item.carbs * qty),
        protein: acc.protein + (item.protein * qty),
        fat: acc.fat + (item.fat * qty),
        kcal: acc.kcal + ((item.carbs * 4 + item.protein * 4 + item.fat * 9) * qty),
        na: acc.na + (na * qty),
        k: acc.k + (k * qty),
        p: acc.p + (p * qty)
      };
    }, { carbs: 0, protein: 0, fat: 0, kcal: 0, na: 0, k: 0, p: 0 });
  }, [state.diet.logs]);

  const filteredFood = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return FOOD_DATABASE.filter(f => 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const suggestedPortions = useMemo(() => {
    const type = state.intervention.dietType;
    if (type === 'Custom') {
      return state.intervention.customGuidelines || {};
    }
    const target = parseInt(state.diet.targetKcal) || 1500;
    
    const guidelines = DIET_GUIDELINES[type];
    if (!guidelines) return {};
    
    // Find the nearest calorie level
    const levels = Object.keys(guidelines).map(Number).sort((a, b) => a - b);
    const nearest = levels.reduce((prev, curr) => 
      Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
    );
    
    return guidelines[nearest.toString()] || {};
  }, [state.intervention.dietType, state.diet.targetKcal, state.intervention.customGuidelines]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <div className="p-2 bg-blue-600 rounded-lg">
                <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 truncate">
                營養諮詢系統
              </h1>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
              {user ? (
                <>
                  <button 
                    onClick={() => setIsHistoryOpen(true)}
                    className="flex items-center gap-2 px-2 sm:px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors text-sm font-medium"
                    title="歷史紀錄"
                  >
                    <History className="w-4 h-4" />
                    <span className="hidden lg:inline">歷史紀錄</span>
                  </button>
                  <button 
                    onClick={() => generateWordDoc(state)}
                    className="flex items-center gap-2 px-2 sm:px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium"
                    title="下載 Word"
                  >
                    <FileDown className="w-4 h-4" />
                    <span className="hidden sm:inline">下載 Word</span>
                  </button>
                  <button 
                    onClick={() => {
                      if(confirm('確定要清空所有紀錄嗎？')) setState(INITIAL_STATE);
                    }}
                    className="flex items-center gap-2 px-2 sm:px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
                    title="清空"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">清空</span>
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md text-sm font-medium shrink-0 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span className="hidden sm:inline">{state.id ? '更新紀錄' : '儲存紀錄'}</span>
                    <span className="sm:hidden">{state.id ? '更新' : '儲存'}</span>
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-2 sm:px-3 py-2 text-slate-500 hover:text-slate-700 transition-colors"
                    title="登出"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleLogin}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md text-sm font-medium"
                >
                  <LogIn className="w-4 h-4" />
                  <span>登入</span>
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Tab Navigation - Scrollable on mobile */}
        <div className="border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto no-scrollbar py-2 space-x-1">
              {[
                { id: 'assessment', label: '營養評估', icon: User },
                { id: 'diagnosis', label: '營養診斷', icon: Stethoscope },
                { id: 'intervention', label: '營養介入', icon: Utensils },
                { id: 'monitoring', label: '營養監測', icon: Activity },
                { id: 'medications', label: '藥物', icon: Pill },
                { id: 'reminder', label: '諮詢小提醒', icon: Bell },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                    activeTab === tab.id 
                      ? 'bg-blue-50 text-blue-700 shadow-sm' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* History Sidebar */}
      <AnimatePresence>
        {isHistoryOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsHistoryOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-[70] flex flex-col"
            >
              <div className="p-4 border-b flex justify-between items-center bg-slate-50">
                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                  <History className="w-5 h-5 text-blue-600" />
                  諮詢歷史紀錄
                </h2>
                <button onClick={() => setIsHistoryOpen(false)} className="p-1 hover:bg-slate-200 rounded">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {history.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <ClipboardList className="w-12 h-12 mx-auto opacity-20 mb-4" />
                    <p>尚無儲存紀錄</p>
                  </div>
                ) : (
                  history.map((record) => (
                    <div 
                      key={record.id}
                      onClick={() => loadRecord(record)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                        state.id === record.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-slate-800">{record.clientName}</span>
                        <button 
                          onClick={(e) => deleteRecord(e, record.id)}
                          className="text-slate-300 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-slate-500 flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          諮詢日: {record.consultDate}
                        </div>
                        <div className="text-[10px] opacity-60">
                          最後更新: {record.updatedAt?.toDate().toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Basic Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">諮詢日期</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="date" 
                value={state.consultDate || ''}
                onChange={e => setState({...state, consultDate: e.target.value})}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">諮詢目標 / 目的</label>
            <input 
              type="text" 
              placeholder="例如：控制血糖、體重管理..."
              value={state.goal || ''}
              onChange={e => setState({...state, goal: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="md:col-span-3 space-y-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">諮詢紀錄</label>
            <textarea 
              placeholder="紀錄諮詢過程中的重點..."
              value={state.notes || ''}
              onChange={e => setState({...state, notes: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all h-24"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'assessment' && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Client History */}
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    個案史 (Client Hx)
                  </h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">姓名</label>
                    <input type="text" value={state.clientHx.name || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, name: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">性別</label>
                    <select value={state.clientHx.gender || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, gender: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200">
                      <option>男</option>
                      <option>女</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">生日</label>
                    <input type="date" value={state.clientHx.birthday || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, birthday: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                    {state.clientHx.birthday && (
                      <div className="text-[10px] text-slate-400 ml-1">
                        年齡: {calculateAge(state.clientHx.birthday)} 歲
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">工作狀況</label>
                    <select value={state.clientHx.job || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, job: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200">
                      <option>在職中</option>
                      <option>退休</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">工作說明</label>
                    <input 
                      type="text" 
                      value={state.clientHx.jobDescription || ''} 
                      onChange={e => setState({...state, clientHx: {...state.clientHx, jobDescription: e.target.value}})} 
                      placeholder="簡述工作內容..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200" 
                    />
                  </div>

                  <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">家族史 (Family Hx)</label>
                      <input type="text" value={state.clientHx.familyHx || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, familyHx: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="例如：高血壓、糖尿病..." />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">社會史 (Social Hx)</label>
                      <input type="text" value={state.clientHx.socialHx || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, socialHx: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" placeholder="例如：與家人同住、外食為主..." />
                    </div>
                  </div>

                  <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">宗教/飲食禁忌</label>
                      <input type="text" value={state.clientHx.region || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, region: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">生活習慣</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={state.clientHx.habits.smoke} onChange={e => setState({...state, clientHx: {...state.clientHx, habits: {...state.clientHx.habits, smoke: e.target.checked}}})} className="w-4 h-4 text-blue-600 rounded" />
                          <span className="text-sm text-slate-600">抽菸</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={state.clientHx.habits.drink} onChange={e => setState({...state, clientHx: {...state.clientHx, habits: {...state.clientHx.habits, drink: e.target.checked}}})} className="w-4 h-4 text-blue-600 rounded" />
                          <span className="text-sm text-slate-600">喝酒</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">運動習慣</label>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                          <input 
                            type="text" 
                            placeholder="頻率 (次/週)" 
                            value={state.clientHx.exercise.frequency || ''} 
                            onChange={e => setState({...state, clientHx: {...state.clientHx, exercise: {...state.clientHx.exercise, frequency: e.target.value}}})} 
                            className="w-1/2 px-3 py-2 rounded-lg border border-slate-200" 
                          />
                          <select value={state.clientHx.exercise.type || ''} onChange={e => setState({...state, clientHx: {...state.clientHx, exercise: {...state.clientHx.exercise, type: e.target.value}}})} className="w-1/2 px-3 py-2 rounded-lg border border-slate-200">
                            <option value="">選擇類型</option>
                            {EXERCISE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <input 
                          type="text" 
                          placeholder="具體運動 (例如: 游泳、慢跑...)" 
                          value={state.clientHx.exercise.name || ''} 
                          onChange={e => setState({...state, clientHx: {...state.clientHx, exercise: {...state.clientHx.exercise, name: e.target.value}}})} 
                          className="w-full px-3 py-2 rounded-lg border border-slate-200" 
                        />
                        <select 
                          value={state.clientHx.exercise.activityFactor || ''} 
                          onChange={e => setState({...state, clientHx: {...state.clientHx, exercise: {...state.clientHx.exercise, activityFactor: e.target.value as any}}})} 
                          className="w-full px-3 py-2 rounded-lg border border-slate-200"
                        >
                          <option value="">活動因子</option>
                          {ACTIVITY_FACTORS.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Anthropometry */}
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    體位測量 (Anthropometry)
                  </h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">身高 (cm)</label>
                    <input type="number" value={state.anthropometry.height || ''} onChange={e => setState({...state, anthropometry: {...state.anthropometry, height: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">體重 (kg)</label>
                    <input type="number" value={state.anthropometry.weight || ''} onChange={e => setState({...state, anthropometry: {...state.anthropometry, weight: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">BMI</label>
                    <div className={`px-3 py-2 rounded-lg font-bold border ${parseFloat(state.anthropometry.bmi || '0') >= 24 ? 'bg-red-50 border-red-200 text-red-700' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                      {state.anthropometry.bmi || '--'}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">
                      IBW (標準體重) 
                      <span className="text-[10px] ml-1 text-slate-400">
                        ({(calculateAge(state.clientHx.birthday) >= 50 ? 25 : 22)})
                      </span>
                    </label>
                    <div className="px-3 py-2 rounded-lg font-bold border bg-slate-50 border-slate-200 text-slate-700">
                      {state.anthropometry.ibw || '--'}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">ABW (調整體重)</label>
                    <div className="px-3 py-2 rounded-lg font-bold border bg-slate-50 border-slate-200 text-slate-700">
                      {state.anthropometry.abw || '--'}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">腰圍 (cm)</label>
                    <input type="number" value={state.anthropometry.waist || ''} onChange={e => setState({...state, anthropometry: {...state.anthropometry, waist: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">體重變化 (1個月)</label>
                    <input type="text" value={state.anthropometry.weightChange || ''} onChange={e => setState({...state, anthropometry: {...state.anthropometry, weightChange: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">體脂率 (%)</label>
                    <input type="number" step="0.1" value={state.anthropometry.bodyFat || ''} onChange={e => setState({...state, anthropometry: {...state.anthropometry, bodyFat: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">水腫狀況</label>
                    <select value={state.anthropometry.edema || ''} onChange={e => setState({...state, anthropometry: {...state.anthropometry, edema: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200">
                      <option>無</option>
                      <option>輕微 (+)</option>
                      <option>中度 (++)</option>
                      <option>嚴重 (+++)</option>
                    </select>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">備註 (Notes)</label>
                    <input 
                      type="text" 
                      value={state.anthropometry.notes || ''} 
                      onChange={e => setState({...state, anthropometry: {...state.anthropometry, notes: e.target.value}})} 
                      placeholder="自由填寫備註..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200" 
                    />
                  </div>
                </div>
              </section>

              {/* Biochemistry */}
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    生化數值 (Biochemistry)
                  </h2>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-slate-600">報告日期</label>
                    <input 
                      type="date"
                      value={state.biochemistryDate || ''}
                      onChange={e => setState({...state, biochemistryDate: e.target.value})}
                      className="px-3 py-1.5 text-sm rounded-lg border border-slate-200"
                    />
                  </div>
                  <button
                    onClick={() => {
                      const newRecord: MonitoringRecord = {
                        date: state.biochemistryDate || new Date().toISOString().split('T')[0],
                        weight: state.anthropometry.weight || '',
                        hba1c: state.biochemistry.HbA1c || '',
                        egfr: state.biochemistry.eGFR || '',
                        tg: state.biochemistry.TG || '',
                        ldl: state.biochemistry.LDL || '',
                        tc: state.biochemistry.TC || '',
                        uricAcid: state.biochemistry.UricAcid || '',
                        bp: state.biochemistry.BP || '',
                        other: ''
                      };
                      setState({
                        ...state,
                        monitoring: {
                          ...state.monitoring,
                          history: [newRecord, ...state.monitoring.history]
                        }
                      });
                      alert('數據已同步至營養監測紀錄');
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition-colors shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    同步至監測紀錄
                  </button>
                </div>
                <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 border-b border-slate-100">
                  {Object.keys(state.biochemistry).map(key => {
                    const range = BIO_RANGES[key];
                    const val = state.biochemistry[key];
                    const num = parseFloat(val);
                    let isAbnormal = false;
                    if (range && val && !isNaN(num)) {
                      if (range.min !== undefined && range.max !== undefined) {
                        isAbnormal = num < range.min || num > range.max;
                      } else if (range.max !== undefined) {
                        isAbnormal = num >= range.max;
                      } else if (range.min !== undefined) {
                        isAbnormal = num <= range.min;
                      }
                    }

                    return (
                      <div key={key} className="space-y-1">
                        <label className="text-xs font-medium text-slate-500 uppercase">{key}</label>
                        <input 
                          type="text" 
                          value={val || ''} 
                          onChange={e => setState({...state, biochemistry: {...state.biochemistry, [key]: e.target.value}})}
                          className={`w-full px-2 py-1 text-sm rounded border transition-colors ${
                            isAbnormal 
                              ? 'border-red-500 bg-red-50 text-red-700 focus:ring-red-500' 
                              : 'border-slate-200 focus:ring-blue-500'
                          }`} 
                        />
                        {range && (
                          <div className="text-[10px] text-slate-400 font-medium">
                            標準: {range.label}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="p-6 bg-slate-50/50 space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-blue-500" />
                      數據備註與分析
                    </label>
                    <textarea 
                      value={state.biochemistryNotes || ''} 
                      onChange={e => setState({...state, biochemistryNotes: e.target.value})}
                      placeholder="輸入生化數值相關分析或備註..."
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm text-[11px] leading-relaxed">
                      <div className="font-bold text-blue-700 mb-1 border-b border-blue-50 pb-1">診斷參考值 (正常 | 糖尿病前期 | 糖尿病)</div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <div><span className="text-slate-500">AC:</span> 100 | 100-125 | ≧126</div>
                        <div><span className="text-slate-500">PC:</span> 140 | 140-199 | &gt;200</div>
                        <div><span className="text-slate-500">A1c:</span> 4-5.6 | 5.7-6.4 | &gt;6.5%</div>
                        <div><span className="text-slate-500">FPG:</span> &lt;200 | - | ≧200</div>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm text-[11px] leading-relaxed">
                      <div className="font-bold text-green-700 mb-1 border-b border-green-50 pb-1">控制目標</div>
                      <div className="space-y-1">
                        <div><span className="text-slate-700 font-medium underline">成人</span> AC 80-130 | PC 80-160 | A1c &lt;7.0 | BP &lt;130/80</div>
                        <div><span className="text-slate-700 font-medium underline">老年(&gt;65)</span> AC 80-130 | 睡前 80-180 | A1c &lt;7-7.5 | BP &lt;140/90</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Clinical */}
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-blue-600" />
                    臨床狀況 (Clinical)
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-slate-700">既往病史 (Medical Hx / Surgical Hx)</label>
                    <div className="flex flex-wrap gap-4">
                      {['糖尿病', '腎臟病', '心血管', '高血壓', '痛風', '腎結石', 'GORD', '高血脂'].map(item => (
                        <div key={item} className="flex items-center gap-4">
                          <label className="flex items-center gap-2 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              checked={state.clinical.medicalHx.includes(item)}
                              onChange={e => {
                                const newHx = e.target.checked 
                                  ? [...state.clinical.medicalHx, item]
                                  : state.clinical.medicalHx.filter(h => h !== item);
                                setState({...state, clinical: {...state.clinical, medicalHx: newHx}});
                              }}
                              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" 
                            />
                            <span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">{item}</span>
                          </label>
                          {item === '腎臟病' && state.clinical.medicalHx.includes('腎臟病') && (
                            <select 
                              value={state.clinical.medicalHxOther.includes('期') ? state.clinical.medicalHxOther.split('期')[0] : ''}
                              onChange={e => setState({...state, clinical: {...state.clinical, medicalHxOther: e.target.value + '期'}})}
                              className="px-2 py-1 text-xs rounded border border-slate-200"
                            >
                              <option value="">選擇期數</option>
                              <option value="第一">第一期</option>
                              <option value="第二">第二期</option>
                              <option value="第三">第三期</option>
                              <option value="第四">第四期</option>
                              <option value="第五">第五期</option>
                            </select>
                          )}
                        </div>
                      ))}
                      <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                        <span className="text-xs text-slate-400">其他:</span>
                        <input 
                          type="text" 
                          placeholder="其他病史內容..." 
                          value={state.clinical.medicalHxOther || ''}
                          onChange={e => {
                            // If it's a manual entry, we don't necessarily update the medicalHx array unless needed
                            setState({...state, clinical: {...state.clinical, medicalHxOther: e.target.value}});
                          }}
                          className="w-full px-3 py-1 text-sm rounded border border-slate-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <label className="text-sm font-medium text-slate-700 font-bold">腸胃狀況</label>
                    <div className="flex flex-wrap gap-4">
                      {['無', '吞嚥困難', '厭食', '噁心', '嘔吐', '腹瀉', '便秘', '其他'].map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={state.clinical.giStatus.includes(item)}
                            onChange={e => {
                              const newStatus = e.target.checked 
                                ? [...state.clinical.giStatus, item]
                                : state.clinical.giStatus.filter(h => h !== item);
                              setState({...state, clinical: {...state.clinical, giStatus: newStatus}});
                            }}
                            className="w-4 h-4 text-blue-600 rounded" 
                          />
                          <span className="text-sm text-slate-600 font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                    {state.clinical.giStatus.includes('其他') && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-slate-500">其他狀況說明:</span>
                        <input 
                          type="text" 
                          placeholder="請輸入其他腸胃狀況..."
                          value={state.clinical.giStatusOther || ''}
                          onChange={e => setState({...state, clinical: {...state.clinical, giStatusOther: e.target.value}})}
                          className="px-2 py-1 text-xs rounded border border-slate-200 w-64"
                        />
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">目前服用藥物</label>
                    <textarea 
                      value={state.clinical.medications || ''}
                      onChange={e => setState({...state, clinical: {...state.clinical, medications: e.target.value}})}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 h-20"
                      placeholder="列出目前服用的藥物..."
                    />
                  </div>
                </div>
              </section>

              {/* Diet History */}
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-blue-600" />
                    飲食史 (Diet Hx)
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">飲食型態</label>
                      <select value={state.diet.type || ''} onChange={e => setState({...state, diet: {...state.diet, type: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200">
                        <option>口服</option>
                        <option>特殊型態飲食</option>
                        <option>管灌</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">飲食傾向</label>
                      <select value={state.diet.preference || ''} onChange={e => setState({...state, diet: {...state.diet, preference: e.target.value}})} className="w-full px-3 py-2 rounded-lg border border-slate-200">
                        <option>葷</option>
                        <option>素</option>
                        <option>初一.十五素</option>
                        <option>蛋奶素</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">目前飲水量 (ml/d)</label>
                      <input 
                        type="number" 
                        value={state.diet.currentWater || ''} 
                        onChange={e => setState({...state, diet: {...state.diet, currentWater: e.target.value}})} 
                        className="w-full px-3 py-2 rounded-lg border border-slate-200" 
                        placeholder="例如：1500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">建議熱量需求 (僅供參考)</label>
                      <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">
                        <div className="text-sm font-bold">{recommendedKcal} kcal/d</div>
                        {recommendedMacros && (
                          <div className="flex gap-3 mt-1 text-[10px] font-medium text-blue-600/80">
                            <span>醣: {recommendedMacros.carbs}g</span>
                            <span>蛋: {recommendedMacros.protein}g</span>
                            <span>脂: {recommendedMacros.fat}g</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-700">非處方中藥或保健品</label>
                    <input 
                      type="text" 
                      value={state.diet.supplements || ''} 
                      onChange={e => setState({...state, diet: {...state.diet, supplements: e.target.value}})} 
                      placeholder="例如：魚油、葉黃素、中藥粉..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-700">飲食過敏</label>
                    <div className="flex flex-wrap gap-4">
                      {['花生', '蝦', '蟹', '牛奶', '其他'].map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={state.diet.allergies?.includes(item)} 
                            onChange={e => {
                              const newAllergies = e.target.checked 
                                ? [...(state.diet.allergies || []), item]
                                : (state.diet.allergies || []).filter(h => h !== item);
                              setState({...state, diet: {...state.diet, allergies: newAllergies}});
                            }}
                            className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" 
                          />
                          <span className="text-sm text-slate-600">{item}</span>
                        </label>
                      ))}
                    </div>
                    {state.diet.allergies?.includes('其他') && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-slate-500">其他過敏說明:</span>
                        <input 
                          type="text" 
                          placeholder="請輸入其他過敏項目..."
                          value={state.diet.allergiesOther || ''}
                          onChange={e => setState({...state, diet: {...state.diet, allergiesOther: e.target.value}})}
                          className="px-2 py-1 text-xs rounded border border-slate-200 w-64"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-700">餐次</label>
                    <div className="flex flex-wrap gap-4">
                      {['早餐', '早點', '午餐', '午點', '晚餐', '晚點'].map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={state.diet.meals?.includes(item)} 
                            onChange={e => {
                              const newMeals = e.target.checked 
                                ? [...(state.diet.meals || []), item]
                                : (state.diet.meals || []).filter(m => m !== item);
                              setState({...state, diet: {...state.diet, meals: newMeals}});
                            }}
                            className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" 
                          />
                          <span className="text-sm text-slate-600">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 便當油脂估計備註 */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2 shadow-sm">
                    <div className="flex items-center gap-2 text-amber-800 font-bold border-b border-amber-200 pb-2 mb-2">
                      <Info className="w-4 h-4" />
                      <span className="text-sm">便當油脂估計參考</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex flex-col gap-1 p-2 bg-white/50 rounded-lg border border-amber-100">
                        <span className="text-[11px] font-bold text-amber-600 uppercase">一般蔬菜</span>
                        <span className="text-sm text-amber-900 font-medium tracking-tight">每樣蔬菜：0.5-1 ex</span>
                      </div>
                      <div className="flex flex-col gap-1 p-2 bg-white/50 rounded-lg border border-amber-100">
                        <span className="text-[11px] font-bold text-amber-600 uppercase">吸油食材</span>
                        <span className="text-sm text-amber-900 font-medium tracking-tight">茄子、苦瓜、豆皮、干絲：1-1.5 以上</span>
                      </div>
                      <div className="flex flex-col gap-1 p-2 bg-white/50 rounded-lg border border-amber-100">
                        <span className="text-[11px] font-bold text-amber-600 uppercase">炸物/勾芡</span>
                        <span className="text-sm text-amber-900 font-medium tracking-tight">排骨、糖醋、三杯：1.5-2 以上</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
                      <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                        {MEALS.map(m => (
                          <button
                            key={m}
                            onClick={() => setSelectedMeal(m)}
                            className={`px-3 py-1 text-xs rounded-md transition-all ${selectedMeal === m ? 'bg-white text-blue-600 shadow-sm font-bold' : 'text-slate-500 hover:text-slate-700'}`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                      <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder={`手動搜尋食物並加入${selectedMeal}...`}
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <span className="text-sm font-medium text-slate-700 whitespace-nowrap">分類新增：</span>
                      <select 
                        value={selectedFoodCategory}
                        onChange={e => {
                          setSelectedFoodCategory(e.target.value);
                          setSelectedFoodItem('');
                        }}
                        className="w-full sm:w-48 px-3 py-2 rounded-lg border border-slate-200 text-sm"
                      >
                        <option value="">選擇食物類別...</option>
                        {Array.from(new Set(FOOD_DATABASE.map(f => f.category))).map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      
                      <select
                        value={selectedFoodItem}
                        onChange={e => {
                          const foodName = e.target.value;
                          setSelectedFoodItem(foodName);
                          if (foodName) {
                            const food = FOOD_DATABASE.find(f => f.name === foodName && f.category === selectedFoodCategory);
                            if (food) {
                              setState({
                                ...state,
                                diet: {
                                  ...state.diet,
                                  logs: [...state.diet.logs, { ...food, id: Math.random().toString(36).substr(2, 9), qty: 1, meal: selectedMeal }]
                                }
                              });
                              setSelectedFoodItem('');
                            }
                          }
                        }}
                        disabled={!selectedFoodCategory}
                        className="w-full flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm disabled:bg-slate-100 disabled:text-slate-400"
                      >
                        <option value="">選擇食物...</option>
                        {selectedFoodCategory && FOOD_DATABASE.filter(f => f.category === selectedFoodCategory).map(f => (
                          <option key={f.name} value={f.name}>{f.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    {filteredFood.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-64 overflow-y-auto">
                        {filteredFood.map((food, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setState({
                                ...state,
                                diet: {
                                  ...state.diet,
                                  logs: [...state.diet.logs, { ...food, id: Math.random().toString(36).substr(2, 9), qty: 1, meal: selectedMeal }]
                                }
                              });
                              setSearchQuery('');
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-slate-100 last:border-0 flex justify-between items-center"
                          >
                            <div>
                              <div className="font-medium text-slate-800">{food.name}</div>
                              <div className="text-xs text-slate-500">{food.category}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{selectedMeal}</span>
                              <Plus className="w-4 h-4 text-blue-500" />
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <div className="text-sm font-bold text-blue-800">目前飲食攝取總計</div>
                    <div className="flex gap-6 text-sm">
                      <div className="flex flex-col items-center"><span className="text-blue-600/80 text-xs font-medium mb-1">總熱量</span><span className="font-bold text-blue-900">{dietTotals.kcal.toFixed(0)} kcal</span></div>
                      <div className="flex flex-col items-center"><span className="text-blue-600/80 text-xs font-medium mb-1">總醣類</span><span className="font-bold text-blue-900">{dietTotals.carbs.toFixed(1)} g</span></div>
                      <div className="flex flex-col items-center"><span className="text-blue-600/80 text-xs font-medium mb-1">總蛋白質</span><span className="font-bold text-blue-900">{dietTotals.protein.toFixed(1)} g</span></div>
                      <div className="flex flex-col items-center"><span className="text-blue-600/80 text-xs font-medium mb-1">總脂肪</span><span className="font-bold text-blue-900">{dietTotals.fat.toFixed(1)} g</span></div>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-slate-600 font-semibold uppercase tracking-wider">
                        <tr>
                          <th className="px-4 py-3">餐次</th>
                          <th className="px-4 py-3">食物名稱</th>
                          <th className="px-4 py-3">類別</th>
                          <th className="px-4 py-3">份數</th>
                          <th className="px-4 py-3 text-right">熱量 (kcal)</th>
                          <th className="px-4 py-3 text-right">醣 (g)</th>
                          <th className="px-4 py-3 text-right">蛋 (g)</th>
                          <th className="px-4 py-3 text-right">脂 (g)</th>
                          <th className="px-4 py-3 text-right">Na (mg)</th>
                          <th className="px-4 py-3 text-right">K (mg)</th>
                          <th className="px-4 py-3 text-right">P (mg)</th>
                          <th className="px-4 py-3 text-center">操作</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {state.diet.logs.map((log) => (
                          <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3">
                              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                {log.meal}
                              </span>
                            </td>
                            <td className="px-4 py-3 font-medium text-slate-800">{log.name}</td>
                            <td className="px-4 py-3">
                              <select 
                                value={log.category || ''} 
                                onChange={e => {
                                  const newLogs = state.diet.logs.map(l => l.id === log.id ? {...l, category: e.target.value} : l);
                                  setState({...state, diet: {...state.diet, logs: newLogs}});
                                }}
                                className="text-xs px-2 py-1 rounded border border-slate-200 bg-white focus:ring-1 focus:ring-blue-500 outline-none"
                              >
                                {DIET_LOG_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                              </select>
                            </td>
                            <td className="px-4 py-3">
                              <input 
                                type="number" 
                                value={log.qty || 0} 
                                step="0.5"
                                onChange={e => {
                                  const newLogs = state.diet.logs.map(l => l.id === log.id ? {...l, qty: parseFloat(e.target.value) || 0} : l);
                                  setState({...state, diet: {...state.diet, logs: newLogs}});
                                }}
                                className="w-16 px-2 py-1 rounded border border-slate-200"
                              />
                            </td>
                            <td className="px-4 py-3 text-right">{(log.kcal * log.qty).toFixed(0)}</td>
                            <td className="px-4 py-3 text-right">{(log.carbs * log.qty).toFixed(1)}</td>
                            <td className="px-4 py-3 text-right">{(log.protein * log.qty).toFixed(1)}</td>
                            <td className="px-4 py-3 text-right">{(log.fat * log.qty).toFixed(1)}</td>
                            <td className="px-4 py-3 text-right">{( (typeof log.na === 'number' ? log.na : parseFloat(log.na || '0') || 0) * log.qty).toFixed(0)}</td>
                            <td className="px-4 py-3 text-right">{( (typeof log.k === 'number' ? log.k : parseFloat(log.k || '0') || 0) * log.qty).toFixed(0)}</td>
                            <td className="px-4 py-3 text-right">{( (typeof log.p === 'number' ? log.p : parseFloat(log.p || '0') || 0) * log.qty).toFixed(0)}</td>
                            <td className="px-4 py-3 text-center">
                              <button 
                                onClick={() => {
                                  const newLogs = state.diet.logs.filter(l => l.id !== log.id);
                                  setState({...state, diet: {...state.diet, logs: newLogs}});
                                }}
                                className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                        {state.diet.logs.length === 0 && (
                          <tr>
                            <td colSpan={6} className="px-4 py-8 text-center text-slate-400 italic">尚未新增飲食紀錄</td>
                          </tr>
                        )}
                      </tbody>
                      <tfoot className="bg-blue-50 font-bold text-blue-900">
                        <tr>
                          <td className="px-4 py-3">總計</td>
                          <td className="px-4 py-3">--</td>
                          <td className="px-4 py-3">--</td>
                          <td className="px-4 py-3 text-right">{dietTotals.kcal.toFixed(0)}</td>
                          <td className="px-4 py-3 text-right">{dietTotals.carbs.toFixed(1)}</td>
                          <td className="px-4 py-3 text-right">{dietTotals.protein.toFixed(1)}</td>
                          <td className="px-4 py-3 text-right">{dietTotals.fat.toFixed(1)}</td>
                          <td className="px-4 py-3 text-right">{dietTotals.na.toFixed(0)}</td>
                          <td className="px-4 py-3 text-right">{dietTotals.k.toFixed(0)}</td>
                          <td className="px-4 py-3 text-right">{dietTotals.p.toFixed(0)}</td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-xs bg-blue-200 px-2 py-1 rounded-full">{dietTotals.kcal.toFixed(0)} kcal</span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'diagnosis' && (
            <motion.div
              key="diagnosis"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-red-600" />
                    營養診斷 (Diagnosis - PES)
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  {/* Diagnosis Form */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
                    <h3 className="font-bold text-slate-700">新增診斷</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700">1. 診斷領域 (Domain)</label>
                        <select 
                          value={currentDiagnosis.domain || ''}
                          onChange={e => setCurrentDiagnosis({...currentDiagnosis, domain: e.target.value, problem: '', etiology: '', symptom: ''})}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white"
                        >
                          <option value="">請選擇領域</option>
                          {Object.keys(DIAG_DATA).map(d => <option key={d} value={d}>{DIAG_DATA[d as keyof typeof DIAG_DATA].label}</option>)}
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700">2. 問題 Problem (P)</label>
                        <div className="space-y-2">
                          <select 
                            value={currentDiagnosis.problem || ''}
                            disabled={!currentDiagnosis.domain}
                            onChange={e => setCurrentDiagnosis({...currentDiagnosis, problem: e.target.value, etiology: '', symptom: ''})}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white disabled:bg-slate-50 disabled:text-slate-400"
                          >
                            <option value="">請選擇問題</option>
                            {currentDiagnosis.domain && Object.keys(DIAG_DATA[currentDiagnosis.domain as keyof typeof DIAG_DATA].problems).map(p => <option key={p} value={p}>{p}</option>)}
                          </select>
                          {currentDiagnosis.problem === '其他' && (
                            <input 
                              type="text" 
                              placeholder="請輸入自定義問題..."
                              value={currentDiagnosis.problemOther || ''}
                              onChange={e => setCurrentDiagnosis({...currentDiagnosis, problemOther: e.target.value})}
                              className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white"
                            />
                          )}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700">3. 原因 Etiology (E)</label>
                        <div className="space-y-2">
                          <select 
                            value={currentDiagnosis.etiology || ''}
                            disabled={!currentDiagnosis.problem}
                            onChange={e => setCurrentDiagnosis({...currentDiagnosis, etiology: e.target.value})}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white disabled:bg-slate-50"
                          >
                            <option value="">請選擇原因</option>
                            {currentDiagnosis.problem && currentDiagnosis.problem !== '其他' && DIAG_DATA[currentDiagnosis.domain as keyof typeof DIAG_DATA].problems[currentDiagnosis.problem].etiologies.map(e => <option key={e} value={e}>{e}</option>)}
                            {currentDiagnosis.problem === '其他' && <option value="其他">其他</option>}
                          </select>
                          {currentDiagnosis.etiology === '其他' && (
                            <input 
                              type="text" 
                              placeholder="請輸入自定義原因..."
                              value={currentDiagnosis.etiologyOther || ''}
                              onChange={e => setCurrentDiagnosis({...currentDiagnosis, etiologyOther: e.target.value})}
                              className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white"
                            />
                          )}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-slate-700">4. 症狀 Symptoms (S)</label>
                        <div className="space-y-2">
                          <select 
                            value={currentDiagnosis.symptom || ''}
                            disabled={!currentDiagnosis.problem}
                            onChange={e => setCurrentDiagnosis({...currentDiagnosis, symptom: e.target.value})}
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white disabled:bg-slate-50"
                          >
                            <option value="">請選擇症狀</option>
                            {currentDiagnosis.problem && currentDiagnosis.problem !== '其他' && DIAG_DATA[currentDiagnosis.domain as keyof typeof DIAG_DATA].problems[currentDiagnosis.problem].symptoms.map(s => <option key={s} value={s}>{s}</option>)}
                            {currentDiagnosis.problem === '其他' && <option value="其他">其他</option>}
                          </select>
                          {currentDiagnosis.symptom === '其他' && (
                            <input 
                              type="text" 
                              placeholder="請輸入自定義症狀..."
                              value={currentDiagnosis.symptomOther || ''}
                              onChange={e => setCurrentDiagnosis({...currentDiagnosis, symptomOther: e.target.value})}
                              className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          if (currentDiagnosis.problem && currentDiagnosis.etiology && currentDiagnosis.symptom) {
                            setState({
                              ...state, 
                              diagnoses: [...(state.diagnoses || []), { ...currentDiagnosis, id: Date.now().toString() }]
                            });
                            setCurrentDiagnosis({ domain: '', problem: '', etiology: '', symptom: '', id: '' });
                          }
                        }}
                        disabled={!currentDiagnosis.problem || !currentDiagnosis.etiology || !currentDiagnosis.symptom}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 disabled:bg-slate-300 transition-colors"
                      >
                        新增此診斷
                      </button>
                    </div>
                  </div>

                  {/* Diagnosis List */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2">
                      已建立診斷列表
                      <span className="text-xs font-normal text-slate-400">({state.diagnoses?.length || 0})</span>
                    </h3>
                    {(!state.diagnoses || state.diagnoses.length === 0) ? (
                      <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
                        目前尚無診斷紀錄
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {state.diagnoses?.map((diag, idx) => (
                          <div key={diag.id} className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-4">
                              <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full border border-red-100">
                                {DIAG_DATA[diag.domain as keyof typeof DIAG_DATA]?.label || diag.domain}
                              </span>
                              <button 
                                onClick={() => setState({...state, diagnoses: (state.diagnoses || []).filter(d => d.id !== diag.id)})}
                                className="text-slate-300 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-lg font-serif italic text-slate-800 leading-relaxed">
                              <span className="font-bold underline decoration-red-300">
                                {diag.problem === '其他' ? (diag.problemOther || '其他') : diag.problem}
                              </span>
                              <span className="mx-2 text-slate-400">與</span>
                              <span className="font-bold underline decoration-red-300">
                                {diag.etiology === '其他' ? (diag.etiologyOther || '其他') : diag.etiology}
                              </span>
                              <span className="mx-2 text-slate-400">有關，經由</span>
                              <span className="font-bold underline decoration-red-300">
                                {diag.symptom === '其他' ? (diag.symptomOther || '其他') : diag.symptom}
                              </span>
                              <span className="mx-2 text-slate-400">證實。</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'intervention' && (
            <motion.div
              key="intervention"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-green-600" />
                    營養介入 (Intervention)
                  </h2>
                </div>
                <div className="p-6 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-slate-500 uppercase">疾病類型</div>
                      <div className="flex gap-4">
                        {['DM', 'CKD', 'Custom'].map(type => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="dietType" 
                              checked={state.intervention.dietType === type}
                              onChange={() => setState({...state, intervention: {...state.intervention, dietType: type as any}})}
                              className="w-4 h-4 text-green-600" 
                            />
                            <span className={`font-medium ${state.intervention.dietType === type ? 'text-green-700' : 'text-slate-600'}`}>
                              {type === 'DM' ? '糖尿病 (DM)' : type === 'CKD' ? '腎臟病 (CKD)' : '自定義 (Custom)'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-bold text-slate-500 uppercase">建議熱量 (kcal/d)</div>
                      <div className="flex gap-2">
                        <input 
                          type="number" 
                          value={state.diet.targetKcal || ''}
                          onChange={e => setState({...state, diet: {...state.diet, targetKcal: e.target.value}})}
                          placeholder="例如：1500"
                          className="flex-1 px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        <button 
                          onClick={() => setState({...state, diet: {...state.diet, targetKcal: recommendedKcal.toString()}})}
                          className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-xs font-bold hover:bg-green-200 transition-colors"
                        >
                          帶入建議值 ({recommendedKcal})
                        </button>
                      </div>
                      {recommendedMacros && (
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4 text-[10px] font-bold text-green-600/70 uppercase tracking-wider">
                            <span>醣: {recommendedMacros.carbs}g ({state.intervention.macroConfig?.carbsPercent}%)</span>
                            <span>蛋: {recommendedMacros.protein}g ({state.intervention.macroConfig?.proteinPercent}%)</span>
                            <span>脂: {recommendedMacros.fat}g ({state.intervention.macroConfig?.fatPercent}%)</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <span className="text-[10px] text-slate-400">調整比例(%):</span>
                            <input 
                              type="number" 
                              value={state.intervention.macroConfig?.carbsPercent || 0} 
                              onChange={e => setState({...state, intervention: {...state.intervention, macroConfig: {...state.intervention.macroConfig!, carbsPercent: parseInt(e.target.value) || 0}}})}
                              className="w-12 px-1 py-0.5 text-[10px] border rounded"
                              placeholder="醣"
                            />
                            <input 
                              type="number" 
                              value={state.intervention.macroConfig?.proteinPercent || 0} 
                              onChange={e => setState({...state, intervention: {...state.intervention, macroConfig: {...state.intervention.macroConfig!, proteinPercent: parseInt(e.target.value) || 0}}})}
                              className="w-12 px-1 py-0.5 text-[10px] border rounded"
                              placeholder="蛋"
                            />
                            <input 
                              type="number" 
                              value={state.intervention.macroConfig?.fatPercent || 0} 
                              onChange={e => setState({...state, intervention: {...state.intervention, macroConfig: {...state.intervention.macroConfig!, fatPercent: parseInt(e.target.value) || 0}}})}
                              className="w-12 px-1 py-0.5 text-[10px] border rounded"
                              placeholder="脂"
                            />
                            <span className={`text-[10px] font-bold ${(state.intervention.macroConfig?.carbsPercent || 0) + (state.intervention.macroConfig?.proteinPercent || 0) + (state.intervention.macroConfig?.fatPercent || 0) === 100 ? 'text-green-500' : 'text-red-500'}`}>
                              Total: {(state.intervention.macroConfig?.carbsPercent || 0) + (state.intervention.macroConfig?.proteinPercent || 0) + (state.intervention.macroConfig?.fatPercent || 0)}%
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {state.intervention.dietType === 'Custom' && (
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-100 space-y-4">
                      <div className="text-sm font-bold text-orange-700 uppercase">自定義建議份量 (Custom Portions)</div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {INTERVENTION_CATEGORIES.map(cat => (
                          <div key={cat} className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">{cat}</label>
                            <input 
                              type="number" 
                              step="0.5"
                              value={state.intervention.customGuidelines?.[cat] || ''}
                              onChange={e => {
                                const newCustom = { ...state.intervention.customGuidelines };
                                newCustom[cat] = parseFloat(e.target.value) || 0;
                                setState({...state, intervention: {...state.intervention, customGuidelines: newCustom}});
                              }}
                              className="w-full px-2 py-1 text-sm rounded border border-slate-200"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      飲食指南參考 (Reference Guidelines)
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* DM Reference */}
                      <div className="space-y-2">
                        <div className="text-sm font-bold text-blue-700">糖尿病 (DM) 份量建議表</div>
                        <div className="overflow-x-auto rounded-lg border border-blue-100">
                          <table className="w-full text-[10px] text-left">
                            <thead className="bg-blue-50 text-blue-800">
                              <tr>
                                <th className="px-2 py-1">kcal</th>
                                {INTERVENTION_CATEGORIES.map(cat => <th key={cat} className="px-1 py-1">{cat.slice(0, 2)}</th>)}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-blue-50">
                              {Object.entries(DIET_GUIDELINES['DM']).map(([kcal, plan]) => (
                                <tr key={kcal} className={state.diet.targetKcal === kcal ? 'bg-blue-100 font-bold' : ''}>
                                  <td className="px-2 py-1">{kcal}</td>
                                  {INTERVENTION_CATEGORIES.map(cat => <td key={cat} className="px-1 py-1 text-center">{plan[cat] || '--'}</td>)}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* CKD Reference */}
                      <div className="space-y-2">
                        <div className="text-sm font-bold text-orange-700">腎臟病 (CKD) 份量建議表</div>
                        <div className="overflow-x-auto rounded-lg border border-orange-100">
                          <table className="w-full text-[10px] text-left">
                            <thead className="bg-orange-50 text-orange-800">
                              <tr>
                                <th className="px-2 py-1">kcal</th>
                                {INTERVENTION_CATEGORIES.map(cat => <th key={cat} className="px-1 py-1">{cat.slice(0, 2)}</th>)}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-orange-50">
                              {Object.entries(DIET_GUIDELINES['CKD']).map(([kcal, plan]) => (
                                <tr key={kcal} className={state.diet.targetKcal === kcal ? 'bg-orange-100 font-bold' : ''}>
                                  <td className="px-2 py-1">{kcal}</td>
                                  {INTERVENTION_CATEGORIES.map(cat => <td key={cat} className="px-1 py-1 text-center">{plan[cat] || '--'}</td>)}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        一日飲食規劃
                        <span className="text-xs font-normal text-slate-500">(依據熱量目標自動建議)</span>
                      </h3>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => {
                            const newMealPlan = { ...state.intervention.mealPlan };
                            INTERVENTION_CATEGORIES.forEach(cat => {
                              const total = suggestedPortions[cat] || 0;
                              if (total > 0) {
                                if (!newMealPlan[cat]) newMealPlan[cat] = { breakfast: '', morningSnack: '', lunch: '', afternoonSnack: '', dinner: '', eveningSnack: '' };
                                
                                // Simple distribution logic: 1/3 for each main meal
                                const portion = (total / 3).toFixed(1);
                                newMealPlan[cat].breakfast = portion;
                                newMealPlan[cat].lunch = portion;
                                newMealPlan[cat].dinner = portion;
                              }
                            });
                            setState({ ...state, intervention: { ...state.intervention, mealPlan: newMealPlan } });
                          }}
                          className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-200 transition-colors"
                        >
                          套用建議份量 (平均分配)
                        </button>
                        <div className="text-sm text-green-600 font-medium">
                          建議級距: {state.diet.targetKcal || '1500'} kcal
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-green-50 text-green-800 font-bold">
                          <tr>
                            <th className="px-4 py-3 border-r border-green-100">食物類別</th>
                            <th className="px-4 py-3 text-center border-r border-green-100">建議份數</th>
                            {MEALS.map(meal => <th key={meal} className="px-4 py-3 text-center">{meal}</th>)}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {INTERVENTION_CATEGORIES.map(cat => (
                            <tr key={cat} className="hover:bg-slate-50 transition-colors">
                              <td className="px-4 py-3 font-medium text-slate-700 border-r border-slate-100">{cat}</td>
                              <td className="px-4 py-3 text-center font-bold text-blue-600 border-r border-slate-100">
                                {suggestedPortions[cat] || '--'}
                              </td>
                              {MEALS.map(meal => (
                                <td key={meal} className="px-2 py-2">
                                  <input 
                                    type="text" 
                                    placeholder="--"
                                    value={state.intervention.mealPlan[cat]?.[meal as keyof typeof state.intervention.mealPlan[string]] || ''}
                                    onChange={e => {
                                      const newMealPlan = { ...state.intervention.mealPlan };
                                      if (!newMealPlan[cat]) newMealPlan[cat] = { breakfast: '', morningSnack: '', lunch: '', afternoonSnack: '', dinner: '', eveningSnack: '' };
                                      
                                      const mealKeyMap: { [key: string]: string } = {
                                        '早餐': 'breakfast',
                                        '早點': 'morningSnack',
                                        '午餐': 'lunch',
                                        '午點': 'afternoonSnack',
                                        '晚餐': 'dinner',
                                        '晚點': 'eveningSnack'
                                      };
                                      
                                      const key = mealKeyMap[meal] as keyof typeof state.intervention.mealPlan[string];
                                      newMealPlan[cat][key] = e.target.value;
                                      setState({ ...state, intervention: { ...state.intervention, mealPlan: newMealPlan } });
                                    }}
                                    className="w-full text-center py-1 rounded border border-transparent hover:border-slate-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      營養教育 (Nutrition Education)
                      <span className="text-xs font-normal text-slate-500">(可複選)</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.keys(NUTRITION_EDUCATION_CONTENT).map(topic => (
                        <label key={topic} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${state.intervention.educationTopics.includes(topic) ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                          <input 
                            type="checkbox" 
                            checked={state.intervention.educationTopics.includes(topic)}
                            onChange={e => {
                              const newTopics = e.target.checked 
                                ? [...state.intervention.educationTopics, topic]
                                : state.intervention.educationTopics.filter(t => t !== topic);
                              setState({...state, intervention: {...state.intervention, educationTopics: newTopics}});
                            }}
                            className="hidden" 
                          />
                          <span className="text-sm font-medium">{topic}</span>
                        </label>
                      ))}
                    </div>
                    {state.intervention.educationTopics.length > 0 && (
                      <div className="mt-4 space-y-4">
                        {state.intervention.educationTopics.map(topic => (
                          <div key={topic} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              {topic}
                            </h4>
                            <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                              {NUTRITION_EDUCATION_CONTENT[topic]}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">一日飲水量建議</label>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-800 font-medium">
                        建議飲水量: {recommendedWater || 2000} ml/d
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">是否需轉介其他專業人員</label>
                      <textarea 
                        value={state.intervention.referral || ''}
                        onChange={e => setState({...state, intervention: {...state.intervention, referral: e.target.value}})}
                        placeholder="例如：轉介復健科評估吞嚥功能..."
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 h-24"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'monitoring' && (
            <motion.div
              key="monitoring"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-purple-600" />
                    營養監測 (Monitoring)
                  </h2>
                </div>
                <div className="p-6 space-y-8">
                  {/* Monitoring Input Form */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
                    <h3 className="font-bold text-slate-700">新增監測紀錄</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">日期</label>
                        <input 
                          type="date" 
                          value={currentMonitoring.date || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, date: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">體重 (kg)</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={currentMonitoring.weight || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, weight: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">HbA1c (%)</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={currentMonitoring.hba1c || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, hba1c: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">eGFR</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={currentMonitoring.egfr || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, egfr: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">TG (mg/dL)</label>
                        <input 
                          type="number" 
                          value={currentMonitoring.tg || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, tg: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">LDL (mg/dL)</label>
                        <input 
                          type="number" 
                          value={currentMonitoring.ldl || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, ldl: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">TC (mg/dL)</label>
                        <input 
                          type="number" 
                          value={currentMonitoring.tc || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, tc: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">Uric Acid</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={currentMonitoring.uricAcid || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, uricAcid: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">血壓 (BP)</label>
                        <input 
                          type="text" 
                          value={currentMonitoring.bp || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, bp: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                          placeholder="ex: 120/80"
                        />
                      </div>
                      <div className="space-y-1 col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
                        <label className="text-xs font-medium text-slate-500">其他 (自由填寫)</label>
                        <input 
                          type="text" 
                          value={currentMonitoring.other || ''}
                          onChange={e => setCurrentMonitoring({...currentMonitoring, other: e.target.value})}
                          className="w-full px-2 py-1 text-sm rounded border border-slate-200 bg-white"
                          placeholder="例如：血壓、尿酸、體脂率等..."
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          if (currentMonitoring.date) {
                            setState({
                              ...state, 
                              monitoring: {
                                ...state.monitoring,
                                history: [...state.monitoring.history, { ...currentMonitoring }].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                              }
                            });
                            setCurrentMonitoring({
                              date: new Date().toISOString().split('T')[0],
                              weight: '', hba1c: '', egfr: '', tg: '', ldl: '', tc: '', uricAcid: '', bp: '', other: ''
                            });
                          }
                        }}
                        className="px-6 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
                      >
                        新增紀錄
                      </button>
                    </div>
                  </div>

                  {/* Monitoring History Table */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-700">歷史趨勢紀錄</h3>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-slate-600 font-bold">
                          <tr>
                            <th className="px-4 py-3">日期</th>
                            <th className="px-4 py-3">體重 (kg)</th>
                            <th className="px-4 py-3">HbA1c (%)</th>
                            <th className="px-4 py-3">eGFR</th>
                            <th className="px-4 py-3">TG (mg/dL)</th>
                            <th className="px-4 py-3">LDL (mg/dL)</th>
                            <th className="px-4 py-3">TC (mg/dL)</th>
                            <th className="px-4 py-3">Uric Acid</th>
                            <th className="px-4 py-3">血壓</th>
                            <th className="px-4 py-3">其他</th>
                            <th className="px-4 py-3 text-center">操作</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {state.monitoring.history.length === 0 ? (
                            <tr>
                              <td colSpan={11} className="px-4 py-8 text-center text-slate-400">尚無歷史紀錄</td>
                            </tr>
                          ) : (
                            state.monitoring.history.map((record, idx) => (
                              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="px-4 py-3 font-medium">{record.date}</td>
                                <td className="px-4 py-3">{record.weight || '--'}</td>
                                <td className="px-4 py-3">{record.hba1c || '--'}</td>
                                <td className="px-4 py-3">{record.egfr || '--'}</td>
                                <td className="px-4 py-3">{record.tg || '--'}</td>
                                <td className="px-4 py-3">{record.ldl || '--'}</td>
                                <td className="px-4 py-3">{record.tc || '--'}</td>
                                <td className="px-4 py-3">{record.uricAcid || '--'}</td>
                                <td className="px-4 py-3">{record.bp || '--'}</td>
                                <td className="px-4 py-3 max-w-xs truncate" title={record.other}>{record.other || '--'}</td>
                                <td className="px-4 py-3 text-center">
                                  <button 
                                    onClick={() => setState({
                                      ...state, 
                                      monitoring: {
                                        ...state.monitoring,
                                        history: state.monitoring.history.filter((_, i) => i !== idx)
                                      }
                                    })}
                                    className="text-slate-300 hover:text-red-500 transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Charts */}
                  {state.monitoring.history.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-500 uppercase mb-6">體重與 HbA1c 趨勢</h4>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={state.monitoring.history}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis dataKey="date" tick={{fontSize: 10}} stroke="#94a3b8" />
                              <YAxis yAxisId="left" tick={{fontSize: 10}} stroke="#94a3b8" />
                              <YAxis yAxisId="right" orientation="right" tick={{fontSize: 10}} stroke="#94a3b8" />
                              <Tooltip />
                              <Legend verticalAlign="top" height={36} />
                              <Line yAxisId="left" type="monotone" dataKey="weight" name="體重 (kg)" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                              <Line yAxisId="right" type="monotone" dataKey="hba1c" name="HbA1c (%)" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-500 uppercase mb-6">腎功能與血脂趨勢</h4>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={state.monitoring.history}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis dataKey="date" tick={{fontSize: 10}} stroke="#94a3b8" />
                              <YAxis tick={{fontSize: 10}} stroke="#94a3b8" />
                              <Tooltip />
                              <Legend verticalAlign="top" height={36} />
                              <Line type="monotone" dataKey="egfr" name="eGFR" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                              <Line type="monotone" dataKey="tg" name="TG" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
                              <Line type="monotone" dataKey="ldl" name="LDL" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">下次追蹤日期</label>
                      <div className="relative w-64">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="date" 
                          value={state.monitoring.nextDate || ''}
                          onChange={e => setState({...state, monitoring: {...state.monitoring, nextDate: e.target.value}})}
                          className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700">監測指標與計畫</label>
                      <textarea 
                        rows={4}
                        value={state.monitoring.plan || ''}
                        onChange={e => setState({...state, monitoring: {...state.monitoring, plan: e.target.value}})}
                        placeholder="紀錄預計追蹤的生化數值、體重變化或飲食遵從性..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'reminder' && (
            <motion.div
              key="reminder"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-600" />
                    營養諮詢小提醒
                  </h2>
                  <button 
                    onClick={handleDownloadWord}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <FileDown className="w-4 h-4" />
                    下載 WORD
                  </button>
                </div>
                <div id="counseling-reminder-content" className="p-6 space-y-8 bg-white">
                  {/* (2) 諮詢細節 */}
                  <div className="space-y-4">
                    <h3 className="text-md font-bold text-blue-700 border-b pb-2">諮詢細節</h3>
                    
                    {/* Basic Info integrated here */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
                      <div><span className="text-slate-500">姓名：</span>{state.clientHx.name || '--'}</div>
                      <div><span className="text-slate-500">生日：</span>{state.clientHx.birthday || '--'}</div>
                      <div><span className="text-slate-500">身高：</span>{state.anthropometry.height || '--'} cm</div>
                      <div><span className="text-slate-500">體重：</span>{state.anthropometry.weight || '--'} kg</div>
                      <div><span className="text-slate-500">BMI：</span>{state.anthropometry.bmi || '--'}</div>
                      <div><span className="text-slate-500">腰圍：</span>{state.anthropometry.waist || '--'} cm</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">諮詢類型</label>
                        <select 
                          value={state.counselingType || ''} 
                          onChange={e => setState({...state, counselingType: e.target.value})}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        >
                          <option>糖尿病營養方針</option>
                          <option>腎臟病營養方針</option>
                          <option>高血脂營養方針</option>
                          <option>糖尿病 x 腎臟病 營養方針</option>
                          <option>痛風（高尿酸）營養方針</option>
                          <option>糖尿病 x 腎臟病 x 高血脂 營養方針</option>
                        </select>
                      </div>
                      {state.counselingType === '糖尿病營養方針' && (
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-slate-500">類型</label>
                          <div className="flex gap-4 h-[38px] items-center">
                            <GuidelineCheckbox label="糖尿病" id="dm_type_dm" state={state} setState={setState} />
                            <GuidelineCheckbox label="糖尿病前期" id="dm_type_predm" state={state} setState={setState} />
                          </div>
                        </div>
                      )}
                      {state.counselingType === '腎臟病營養方針' && (
                        <>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">腎臟病分期</label>
                            <div className="flex flex-wrap gap-2 items-center min-h-[38px]">
                              {['第1期', '第2期', '第3期', '第4期', '第5期'].map(stage => (
                                <GuidelineCheckbox key={stage} label={stage} id={`ckd_stage_${stage}`} state={state} setState={setState} />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">是否透析</label>
                            <div className="flex gap-4 h-[38px] items-center">
                              <GuidelineCheckbox label="否" id="ckd_dialysis_no" state={state} setState={setState} />
                              <GuidelineCheckbox label="是" id="ckd_dialysis_yes" state={state} setState={setState} />
                            </div>
                          </div>
                        </>
                      )}
                      {state.counselingType === '高血脂營養方針' && (
                        <>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">診斷</label>
                            <div className="flex flex-wrap gap-2 items-center min-h-[38px]">
                              <GuidelineCheckbox label="高血脂" id="hld_diag_hld" state={state} setState={setState} />
                              <GuidelineCheckbox label="高膽固醇" id="hld_diag_hc" state={state} setState={setState} />
                              <GuidelineCheckbox label="高三酸甘油脂" id="hld_diag_htg" state={state} setState={setState} />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">是否用藥</label>
                            <div className="flex gap-4 h-[38px] items-center">
                              <GuidelineCheckbox label="否" id="hld_med_no" state={state} setState={setState} />
                              <div className="flex items-center gap-2">
                                <GuidelineCheckbox label="是" id="hld_med_yes" state={state} setState={setState} />
                                <input type="text" value={state.guidelineSelections['hld_med_name'] || ''} onChange={e => setSelection('hld_med_name', e.target.value)} className="w-24 border-b border-slate-300 text-center outline-none text-xs" placeholder="藥名" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {state.counselingType === '糖尿病 x 腎臟病 營養方針' && (
                        <>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">診斷</label>
                            <div className="flex flex-wrap gap-2 items-center min-h-[38px]">
                              <GuidelineCheckbox label="糖尿病" id="dmckd_diag_dm" state={state} setState={setState} />
                              <div className="flex items-center gap-2">
                                <GuidelineCheckbox label="腎臟病" id="dmckd_diag_ckd" state={state} setState={setState} />
                                <span>第</span>
                                <input type="text" value={state.guidelineSelections['dmckd_ckd_stage'] || ''} onChange={e => setSelection('dmckd_ckd_stage', e.target.value)} className="w-12 border-b border-slate-300 text-center outline-none text-sm" />
                                <span>期</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">是否透析</label>
                            <div className="flex gap-4 h-[38px] items-center">
                              <GuidelineCheckbox label="否" id="dmckd_dialysis_no" state={state} setState={setState} />
                              <GuidelineCheckbox label="是" id="dmckd_dialysis_yes" state={state} setState={setState} />
                            </div>
                          </div>
                        </>
                      )}
                      {state.counselingType === '痛風（高尿酸）營養方針' && (
                        <>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">診斷</label>
                            <div className="flex flex-wrap gap-2 items-center min-h-[38px]">
                              <GuidelineCheckbox label="高尿酸血症" id="gout_diag_hua" state={state} setState={setState} />
                              <GuidelineCheckbox label="痛風" id="gout_diag_gout" state={state} setState={setState} />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">急性發作期</label>
                            <div className="flex gap-4 h-[38px] items-center">
                              <GuidelineCheckbox label="否" id="gout_acute_no" state={state} setState={setState} />
                              <GuidelineCheckbox label="是" id="gout_acute_yes" state={state} setState={setState} />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">是否用藥</label>
                            <div className="flex gap-4 h-[38px] items-center">
                              <GuidelineCheckbox label="否" id="gout_med_no" state={state} setState={setState} />
                              <div className="flex items-center gap-2">
                                <GuidelineCheckbox label="是" id="gout_med_yes" state={state} setState={setState} />
                                <input type="text" value={state.guidelineSelections['gout_med_name'] || ''} onChange={e => setSelection('gout_med_name', e.target.value)} className="w-24 border-b border-slate-300 text-center outline-none text-xs" placeholder="藥名" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {state.counselingType === '糖尿病 x 腎臟病 x 高血脂 營養方針' && (
                        <>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">診斷</label>
                            <div className="flex flex-wrap gap-2 items-center min-h-[38px]">
                              <GuidelineCheckbox label="糖尿病" id="met_diag_dm" state={state} setState={setState} />
                              <GuidelineCheckbox label="高血脂" id="met_diag_hld" state={state} setState={setState} />
                              <div className="flex items-center gap-2">
                                <GuidelineCheckbox label="腎臟病" id="met_diag_ckd" state={state} setState={setState} />
                                <span>第</span>
                                <input type="text" value={state.guidelineSelections['met_ckd_stage'] || ''} onChange={e => setSelection('met_ckd_stage', e.target.value)} className="w-12 border-b border-slate-300 text-center outline-none text-sm" />
                                <span>期</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">是否透析</label>
                            <div className="flex gap-4 h-[38px] items-center">
                              <GuidelineCheckbox label="否" id="met_dialysis_no" state={state} setState={setState} />
                              <GuidelineCheckbox label="是" id="met_dialysis_yes" state={state} setState={setState} />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-slate-500">是否用藥</label>
                            <div className="flex gap-4 h-[38px] items-center">
                              <GuidelineCheckbox label="否" id="met_med_no" state={state} setState={setState} />
                              <div className="flex items-center gap-2">
                                <GuidelineCheckbox label="是" id="met_med_yes" state={state} setState={setState} />
                                <input type="text" value={state.guidelineSelections['met_med_name'] || ''} onChange={e => setSelection('met_med_name', e.target.value)} className="w-24 border-b border-slate-300 text-center outline-none text-xs" placeholder="藥名" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">諮詢日期</label>
                        <input 
                          type="date" 
                          value={state.consultDate || ''} 
                          onChange={e => setState({...state, consultDate: e.target.value})}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-500">營養師</label>
                        <input 
                          type="text" 
                          value={state.dietitian || ''} 
                          onChange={e => setState({...state, dietitian: e.target.value})}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* (3) 生化數據 */}
                  <div className="space-y-4">
                    <h3 className="text-md font-bold text-blue-700 border-b pb-2">生化數據</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-xs">
                      {Object.entries(state.biochemistry).map(([key, val]) => (
                        <div key={key} className="border p-2 rounded bg-slate-50">
                          <div className="text-slate-500 font-medium">{key}</div>
                          <div className="text-sm font-bold">{val || '--'}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* (3.5) 飲食風險評估 */}
                  {state.counselingType === '糖尿病營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">飲食風險評估</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <GuidelineCheckbox label="常喝含糖飲料" id="dm_risk_sugar_drinks" state={state} setState={setState} />
                        <GuidelineCheckbox label="主食吃太多（飯/麵/麵包）" id="dm_risk_too_much_carbs" state={state} setState={setState} />
                        <GuidelineCheckbox label="常吃甜點/零食" id="dm_risk_sweets" state={state} setState={setState} />
                        <GuidelineCheckbox label="外食頻率高" id="dm_risk_eating_out" state={state} setState={setState} />
                        <GuidelineCheckbox label="幾乎不吃蔬菜" id="dm_risk_no_veg" state={state} setState={setState} />
                        <GuidelineCheckbox label="用餐時間不固定" id="dm_risk_irregular_meals" state={state} setState={setState} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="其他風險..." 
                        value={state.guidelineSelections['dm_risk_other'] || ''}
                        onChange={e => setSelection('dm_risk_other', e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-200 text-sm"
                      />
                    </div>
                  )}
                  {state.counselingType === '腎臟病營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">飲食風險評估</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <GuidelineCheckbox label="蛋白質攝取過多" id="ckd_risk_too_much_pro" state={state} setState={setState} />
                        <GuidelineCheckbox label="高鹽飲食（外食、加工品）" id="ckd_risk_high_salt" state={state} setState={setState} />
                        <GuidelineCheckbox label="水分控制不佳" id="ckd_risk_water_control" state={state} setState={setState} />
                        <GuidelineCheckbox label="常喝含糖飲料" id="ckd_risk_sugar_drinks" state={state} setState={setState} />
                        <GuidelineCheckbox label="蔬菜水果攝取不均" id="ckd_risk_veg_fruit_unbalanced" state={state} setState={setState} />
                        <GuidelineCheckbox label="不清楚食物鉀/磷含量" id="ckd_risk_unknown_k_p" state={state} setState={setState} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="其他風險..." 
                        value={state.guidelineSelections['ckd_risk_other'] || ''}
                        onChange={e => setSelection('ckd_risk_other', e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-200 text-sm"
                      />
                    </div>
                  )}
                  {state.counselingType === '高血脂營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">飲食風險評估</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <GuidelineCheckbox label="常吃油炸食物" id="hld_risk_fried" state={state} setState={setState} />
                        <GuidelineCheckbox label="偏好肥肉／皮" id="hld_risk_fatty_meat" state={state} setState={setState} />
                        <GuidelineCheckbox label="攝取過多加工肉品" id="hld_risk_processed_meat" state={state} setState={setState} />
                        <GuidelineCheckbox label="常吃精製澱粉" id="hld_risk_refined_starch" state={state} setState={setState} />
                        <GuidelineCheckbox label="常喝含糖飲料／酒精" id="hld_risk_sugar_alcohol" state={state} setState={setState} />
                        <GuidelineCheckbox label="外食頻率高" id="hld_risk_eating_out" state={state} setState={setState} />
                        <GuidelineCheckbox label="蔬菜攝取不足" id="hld_risk_no_veg" state={state} setState={setState} />
                        <GuidelineCheckbox label="水果過量" id="hld_risk_too_much_fruit" state={state} setState={setState} />
                        <GuidelineCheckbox label="缺乏運動" id="hld_risk_no_exercise" state={state} setState={setState} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="其他風險..." 
                        value={state.guidelineSelections['hld_risk_other'] || ''}
                        onChange={e => setSelection('hld_risk_other', e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-200 text-sm"
                      />
                    </div>
                  )}
                  {state.counselingType === '糖尿病 x 腎臟病 營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">飲食風險評估</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <GuidelineCheckbox label="主食過多" id="dmckd_risk_too_much_carbs" state={state} setState={setState} />
                        <GuidelineCheckbox label="常喝含糖飲料" id="dmckd_risk_sugar_drinks" state={state} setState={setState} />
                        <GuidelineCheckbox label="愛吃甜點" id="dmckd_risk_sweets" state={state} setState={setState} />
                        <GuidelineCheckbox label="高鹽飲食" id="dmckd_risk_high_salt" state={state} setState={setState} />
                        <GuidelineCheckbox label="常喝湯" id="dmckd_risk_soup" state={state} setState={setState} />
                        <GuidelineCheckbox label="蔬菜水果攝取不均" id="dmckd_risk_veg_fruit_unbalanced" state={state} setState={setState} />
                        <GuidelineCheckbox label="飲食不規律" id="dmckd_risk_irregular_meals" state={state} setState={setState} />
                        <GuidelineCheckbox label="蛋白質攝取過多" id="dmckd_risk_too_much_pro" state={state} setState={setState} />
                        <GuidelineCheckbox label="水分控制不佳" id="dmckd_risk_water_control" state={state} setState={setState} />
                        <GuidelineCheckbox label="不清楚食物鉀/磷含量" id="dmckd_risk_unknown_k_p" state={state} setState={setState} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="其他風險..." 
                        value={state.guidelineSelections['dmckd_risk_other'] || ''}
                        onChange={e => setSelection('dmckd_risk_other', e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-200 text-sm"
                      />
                    </div>
                  )}
                  {state.counselingType === '痛風（高尿酸）營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">飲食風險評估</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <GuidelineCheckbox label="常吃高普林食物" id="gout_risk_high_purine" state={state} setState={setState} />
                        <GuidelineCheckbox label="愛喝含糖飲料" id="gout_risk_sugar_drinks" state={state} setState={setState} />
                        <GuidelineCheckbox label="有飲酒習慣" id="gout_risk_alcohol" state={state} setState={setState} />
                        <GuidelineCheckbox label="常吃大魚大肉" id="gout_risk_too_much_meat" state={state} setState={setState} />
                        <GuidelineCheckbox label="水分攝取不足" id="gout_risk_no_water" state={state} setState={setState} />
                        <GuidelineCheckbox label="外食頻率高" id="gout_risk_eating_out" state={state} setState={setState} />
                        <GuidelineCheckbox label="高油飲食" id="gout_risk_high_fat" state={state} setState={setState} />
                        <GuidelineCheckbox label="體重過重／肥胖" id="gout_risk_obese" state={state} setState={setState} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="其他風險..." 
                        value={state.guidelineSelections['gout_risk_other'] || ''}
                        onChange={e => setSelection('gout_risk_other', e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-200 text-sm"
                      />
                    </div>
                  )}
                  {state.counselingType === '糖尿病 x 腎臟病 x 高血脂 營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">飲食風險評估</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <GuidelineCheckbox label="主食過多／精製澱粉" id="dmckdhld_risk_too_much_carbs" state={state} setState={setState} />
                        <GuidelineCheckbox label="含糖飲料／甜點" id="dmckdhld_risk_sugar_sweets" state={state} setState={setState} />
                        <GuidelineCheckbox label="高鹽飲食" id="dmckdhld_risk_high_salt" state={state} setState={setState} />
                        <GuidelineCheckbox label="高油飲食" id="dmckdhld_risk_high_fat" state={state} setState={setState} />
                        <GuidelineCheckbox label="常喝湯" id="dmckdhld_risk_soup" state={state} setState={setState} />
                        <GuidelineCheckbox label="蔬菜攝取不足" id="dmckdhld_risk_no_veg" state={state} setState={setState} />
                        <GuidelineCheckbox label="水果過量" id="dmckdhld_risk_too_much_fruit" state={state} setState={setState} />
                        <GuidelineCheckbox label="外食頻率高" id="dmckdhld_risk_eating_out" state={state} setState={setState} />
                        <GuidelineCheckbox label="壓力大／作息不規律" id="dmckdhld_risk_stress_routine" state={state} setState={setState} />
                        <GuidelineCheckbox label="缺乏運動" id="dmckdhld_risk_no_exercise" state={state} setState={setState} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="其他風險..." 
                        value={state.guidelineSelections['dmckdhld_risk_other'] || ''}
                        onChange={e => setSelection('dmckdhld_risk_other', e.target.value)}
                        className="w-full px-3 py-2 rounded border border-slate-200 text-sm"
                      />
                    </div>
                  )}

                  {/* (4) 營養控制目標 */}
                  <div className="space-y-4">
                    <h3 className="text-md font-bold text-blue-700 border-b pb-2">營養控制目標</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="text-xs text-blue-600 font-bold uppercase mb-1">熱量 (kcal/天)</div>
                        <input 
                          type="number" 
                          value={state.diet.targetKcal || ''} 
                          onChange={e => setState({...state, diet: {...state.diet, targetKcal: e.target.value}})}
                          className="text-2xl font-bold text-blue-700 bg-transparent border-none focus:ring-0 w-full"
                        />
                      </div>
                      <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                        <div className="text-xs text-green-600 font-bold uppercase mb-1">醣類 (公克/天)</div>
                        <div className="text-2xl font-bold text-green-700">
                          {recommendedMacros?.carbs || '--'} g
                        </div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                        <div className="text-xs text-purple-600 font-bold uppercase mb-1">蛋白質 (公克/天)</div>
                        <div className="text-2xl font-bold text-purple-700">
                          {recommendedMacros?.protein || '--'} g
                        </div>
                      </div>

                      {/* Merged Guideline Specific Goals */}
                      {state.counselingType === '糖尿病營養方針' && (
                        <>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">HbA1c 目標</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">&lt;</span>
                              <input type="text" value={state.guidelineSelections['dm_goal_hba1c'] || ''} onChange={e => setSelection('dm_goal_hba1c', e.target.value)} className="w-16 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">%</span>
                            </div>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">血壓目標</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">&lt;</span>
                              <input type="text" value={state.guidelineSelections['dm_goal_bp'] || ''} onChange={e => setSelection('dm_goal_bp', e.target.value)} className="w-24 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">mmHg</span>
                            </div>
                          </div>
                        </>
                      )}

                      {(state.counselingType === '腎臟病營養方針' || state.counselingType === '糖尿病 x 腎臟病 營養方針') && (
                        <>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">鈉 (Na)</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">&lt;</span>
                              <input type="text" value={state.guidelineSelections[state.counselingType === '腎臟病營養方針' ? 'ckd_goal_na' : 'dmckd_goal_na'] || ''} onChange={e => setSelection(state.counselingType === '腎臟病營養方針' ? 'ckd_goal_na' : 'dmckd_goal_na', e.target.value)} className="w-20 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">mg</span>
                            </div>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">鉀 (K)</div>
                            <div className="flex gap-4 items-center">
                              <GuidelineCheckbox label="限制" id={state.counselingType === '腎臟病營養方針' ? 'ckd_goal_k_limit' : 'dmckd_goal_k_limit'} state={state} setState={setState} />
                              <GuidelineCheckbox label="不需限制" id={state.counselingType === '腎臟病營養方針' ? 'ckd_goal_k_no_limit' : 'dmckd_goal_k_no_limit'} state={state} setState={setState} />
                            </div>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">磷 (P)</div>
                            <div className="flex gap-4 items-center">
                              <GuidelineCheckbox label="限制" id={state.counselingType === '腎臟病營養方針' ? 'ckd_goal_p_limit' : 'dmckd_goal_p_limit'} state={state} setState={setState} />
                              <GuidelineCheckbox label="不需限制" id={state.counselingType === '腎臟病營養方針' ? 'ckd_goal_p_no_limit' : 'dmckd_goal_p_no_limit'} state={state} setState={setState} />
                            </div>
                          </div>
                        </>
                      )}

                      {state.counselingType === '高血脂營養方針' && (
                        <>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">LDL-C 目標</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">&lt;</span>
                              <input type="text" value={state.guidelineSelections['hld_goal_ldl'] || ''} onChange={e => setSelection('hld_goal_ldl', e.target.value)} className="w-16 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">mg/dL</span>
                            </div>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">TG 目標</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">&lt;</span>
                              <input type="text" value={state.guidelineSelections['hld_goal_tg'] || ''} onChange={e => setSelection('hld_goal_tg', e.target.value)} className="w-16 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">mg/dL</span>
                            </div>
                          </div>
                        </>
                      )}

                      {state.counselingType === '糖尿病 x 腎臟病 x 高血脂 營養方針' && (
                        <>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">飽和脂肪</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">&lt;</span>
                              <input type="text" value={state.guidelineSelections['dmckdhld_goal_sat_fat'] || ''} onChange={e => setSelection('dmckdhld_goal_sat_fat', e.target.value)} className="w-12 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">%</span>
                            </div>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">鈉 (Na)</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">&lt;</span>
                              <input type="text" value={state.guidelineSelections['dmckdhld_goal_na'] || ''} onChange={e => setSelection('dmckdhld_goal_na', e.target.value)} className="w-20 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">mg</span>
                            </div>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
                            <div className="text-xs text-slate-500 font-bold uppercase mb-1">膳食纖維</div>
                            <div className="flex items-center gap-1">
                              <span className="text-lg font-bold text-slate-700">≥</span>
                              <input type="text" value={state.guidelineSelections['dmckdhld_goal_fiber'] || ''} onChange={e => setSelection('dmckdhld_goal_fiber', e.target.value)} className="w-12 border-b border-slate-300 text-center outline-none bg-transparent font-bold text-lg" />
                              <span className="text-slate-500">g</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* (4.5) 營養方針 */}
                  {state.counselingType === '糖尿病營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">糖尿病營養方針</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">① 醣類</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="每餐固定醣量" id="dm_guide_fixed_carbs" state={state} setState={setState} />
                            <GuidelineCheckbox label="減少精製糖" id="dm_guide_less_sugar" state={state} setState={setState} />
                            <GuidelineCheckbox label="主食替換：糙米 / 全穀" id="dm_guide_whole_grain" state={state} setState={setState} />
                            <GuidelineCheckbox label="避免勾芡" id="dm_guide_no_thickening" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">② 纖維</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="每餐至少半碗蔬菜" id="dm_guide_veg_half_bowl" state={state} setState={setState} />
                            <GuidelineCheckbox label="先吃菜 → 再吃飯" id="dm_guide_veg_first" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">③ 蛋白質</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="每餐搭配蛋白質" id="dm_guide_protein_match" state={state} setState={setState} />
                            <GuidelineCheckbox label="避免只吃澱粉" id="dm_guide_no_only_starch" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">④ 含糖飲料</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="完全避免含糖飲料" id="dm_guide_no_sugar_drinks" state={state} setState={setState} />
                            <GuidelineCheckbox label="改無糖茶 / 水" id="dm_guide_tea_water" state={state} setState={setState} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {state.counselingType === '腎臟病營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">腎臟病營養方針</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">① 蛋白質管理</h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <GuidelineCheckbox label="控制蛋白質" id="ckd_guide_pro_control" state={state} setState={setState} />
                              <input type="text" value={state.guidelineSelections['ckd_guide_pro_val'] || ''} onChange={e => setSelection('ckd_guide_pro_val', e.target.value)} className="w-16 border-b border-slate-300 text-center outline-none" />
                              <span>g/kg</span>
                            </div>
                            <GuidelineCheckbox label="優先高生物價蛋白" id="ckd_guide_hbv_pro" state={state} setState={setState} />
                            <GuidelineCheckbox label="避免過量肉類" id="ckd_guide_no_excess_meat" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">② 鈉控制</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="減少鹽巴（<5g/天）" id="ckd_guide_less_salt" state={state} setState={setState} />
                            <GuidelineCheckbox label="避免加工食品" id="ckd_guide_no_processed" state={state} setState={setState} />
                            <GuidelineCheckbox label="少喝湯" id="ckd_guide_less_soup" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">③ 鉀與磷控制</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="避免高鉀食物" id="ckd_guide_no_high_k" state={state} setState={setState} />
                            <GuidelineCheckbox label="蔬菜先汆燙" id="ckd_guide_veg_blanch" state={state} setState={setState} />
                            <GuidelineCheckbox label="減少加工食品（含磷添加物）" id="ckd_guide_no_p_additive" state={state} setState={setState} />
                            <GuidelineCheckbox label="少喝可樂類飲料" id="ckd_guide_no_cola" state={state} setState={setState} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {state.counselingType === '高血脂營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">高血脂營養方針</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">① 降低壞膽固醇 (LDL)</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="減少飽和脂肪" id="hld_guide_less_sat_fat" state={state} setState={setState} />
                            <GuidelineCheckbox label="避免反式脂肪" id="hld_guide_no_trans_fat" state={state} setState={setState} />
                            <GuidelineCheckbox label="少吃內臟類" id="hld_guide_less_organ" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">② 降低三酸甘油脂 (TG)</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="減少含糖飲料與甜點" id="hld_guide_no_sugar_sweets" state={state} setState={setState} />
                            <GuidelineCheckbox label="控制精製澱粉" id="hld_guide_control_starch" state={state} setState={setState} />
                            <GuidelineCheckbox label="限制酒精攝取" id="hld_guide_limit_alcohol" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">③ 好油與纖維</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="使用植物油" id="hld_guide_veg_oil" state={state} setState={setState} />
                            <GuidelineCheckbox label="每日適量堅果" id="hld_guide_nuts" state={state} setState={setState} />
                            <GuidelineCheckbox label="每餐至少半碗蔬菜" id="hld_guide_veg_half_bowl" state={state} setState={setState} />
                            <GuidelineCheckbox label="攝取全穀類" id="hld_guide_whole_grain" state={state} setState={setState} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {state.counselingType === '糖尿病 x 腎臟病 營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">糖尿病 x 腎臟病 營養方針</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">① 控醣＋穩血糖</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="每餐固定醣量" id="dmckd_guide_fixed_carbs" state={state} setState={setState} />
                            <GuidelineCheckbox label="減少精製糖" id="dmckd_guide_less_sugar" state={state} setState={setState} />
                            <GuidelineCheckbox label="避免勾芡" id="dmckd_guide_no_thickening" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">② 蛋白質與鈉控制</h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <GuidelineCheckbox label="控制蛋白質" id="dmckd_guide_pro_control" state={state} setState={setState} />
                              <input type="text" value={state.guidelineSelections['dmckd_guide_pro_val'] || ''} onChange={e => setSelection('dmckd_guide_pro_val', e.target.value)} className="w-16 border-b border-slate-300 text-center outline-none" />
                              <span>g/kg</span>
                            </div>
                            <GuidelineCheckbox label="減少鹽巴（<5g/天）" id="dmckd_guide_less_salt" state={state} setState={setState} />
                            <GuidelineCheckbox label="少喝湯" id="dmckd_guide_less_soup" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">③ 纖維與代謝</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="每餐至少吃半碗蔬菜" id="dmckd_guide_veg_half_bowl" state={state} setState={setState} />
                            <GuidelineCheckbox label="先吃菜再吃飯" id="dmckd_guide_veg_first" state={state} setState={setState} />
                            <GuidelineCheckbox label="完全避免含糖飲料" id="dmckd_guide_no_sugar_drinks" state={state} setState={setState} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {state.counselingType === '痛風（高尿酸）營養方針' && (
                    <>
                      <div className="space-y-4">
                        <h3 className="text-md font-bold text-blue-700 border-b pb-2">痛風營養方針</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold text-slate-600">① 降低尿酸生成</h4>
                            <div className="space-y-1">
                              <GuidelineCheckbox label="避免高普林食物" id="gout_guide_no_high_purine" state={state} setState={setState} />
                              <GuidelineCheckbox label="海鮮與肉類適量" id="gout_guide_mod_meat_seafood" state={state} setState={setState} />
                              <GuidelineCheckbox label="優先選擇低普林蛋白" id="gout_guide_low_purine_pro" state={state} setState={setState} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold text-slate-600">② 減少尿酸上升因子</h4>
                            <div className="space-y-1">
                              <GuidelineCheckbox label="避免含糖飲料（果糖）" id="gout_guide_no_fructose" state={state} setState={setState} />
                              <GuidelineCheckbox label="限制酒精（尤其啤酒）" id="gout_guide_limit_alcohol" state={state} setState={setState} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold text-slate-600">③ 促進尿酸排除</h4>
                            <div className="space-y-1">
                              <GuidelineCheckbox label="每日飲水 ≥2000 mL" id="gout_guide_water_2000" state={state} setState={setState} />
                              <GuidelineCheckbox label="分次補充水分" id="gout_guide_water_split" state={state} setState={setState} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-md font-bold text-blue-700 border-b pb-2">飲食紅黃綠燈</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                            <div className="font-bold text-red-700 mb-1">🔴 避免 (高普林)</div>
                            <ul className="list-disc list-inside text-xs text-red-600 space-y-1">
                              <li>內臟 (肝、腎)</li>
                              <li>小魚乾、沙丁魚、鯖魚</li>
                              <li>濃肉湯</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                            <div className="font-bold text-yellow-700 mb-1">🟡 適量 (中普林)</div>
                            <ul className="list-disc list-inside text-xs text-yellow-600 space-y-1">
                              <li>雞肉、豬肉、魚類</li>
                              <li>豆類</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                            <div className="font-bold text-green-700 mb-1">🟢 建議 (低普林)</div>
                            <ul className="list-disc list-inside text-xs text-green-600 space-y-1">
                              <li>蛋、牛奶、優格</li>
                              <li>多數蔬菜</li>
                              <li>全穀類</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {state.counselingType === '糖尿病 x 腎臟病 x 高血脂 營養方針' && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">糖尿病 x 腎臟病 x 高血脂 營養方針</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">① 控醣 × 穩血糖</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="每餐固定醣量" id="dmckdhld_guide_fixed_carbs" state={state} setState={setState} />
                            <GuidelineCheckbox label="選擇低GI主食" id="dmckdhld_guide_low_gi" state={state} setState={setState} />
                            <GuidelineCheckbox label="減少精製糖" id="dmckdhld_guide_less_sugar" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">② 蛋白質控制（減緩腎臟負擔）</h4>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <GuidelineCheckbox label="控制蛋白質" id="dmckdhld_guide_pro_control" state={state} setState={setState} />
                              <span>(</span>
                              <input type="text" value={state.guidelineSelections['dmckdhld_guide_pro_val'] || ''} onChange={e => setSelection('dmckdhld_guide_pro_val', e.target.value)} className="w-16 border-b border-slate-300 text-center outline-none" />
                              <span>g/kg)</span>
                            </div>
                            <GuidelineCheckbox label="選擇高生物價蛋白" id="dmckdhld_guide_hbv_pro" state={state} setState={setState} />
                            <GuidelineCheckbox label="避免大魚大肉" id="dmckdhld_guide_no_excess_meat" state={state} setState={setState} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-600">③ 低鈉飲食 × 穩血脂</h4>
                          <div className="space-y-1">
                            <GuidelineCheckbox label="減少鹽分攝取" id="dmckdhld_guide_less_salt" state={state} setState={setState} />
                            <GuidelineCheckbox label="攝取好油脂" id="dmckdhld_guide_good_fat" state={state} setState={setState} />
                            <GuidelineCheckbox label="增加膳食纖維" id="dmckdhld_guide_more_fiber" state={state} setState={setState} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* (4.6) 追蹤指標+營養計畫 */}
                  {(state.counselingType === '糖尿病營養方針' || state.counselingType === '高血脂營養方針' || state.counselingType === '痛風（高尿酸）營養方針') && (
                    <div className="space-y-4">
                      <h3 className="text-md font-bold text-blue-700 border-b pb-2">追蹤指標+營養計畫</h3>
                      {state.counselingType === '糖尿病營養方針' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <GuidelineCheckbox label="飯後血糖變化" id="dm_track_ppg" state={state} setState={setState} />
                          <GuidelineCheckbox label="血糖波動（是否過高）" id="dm_track_fluctuation" state={state} setState={setState} />
                          <GuidelineCheckbox label="飲食後反應（記錄1–2項）" id="dm_track_reaction" state={state} setState={setState} />
                        </div>
                      )}
                      {state.counselingType === '高血脂營養方針' && (
                        <div className="flex flex-wrap gap-4 items-center text-sm">
                          <span className="font-medium">3個月追蹤：</span>
                          <GuidelineCheckbox label="體重" id="hld_track_weight" state={state} setState={setState} />
                          <GuidelineCheckbox label="腰圍" id="hld_track_waist" state={state} setState={setState} />
                          <GuidelineCheckbox label="血脂數值" id="hld_track_lipid_panel" state={state} setState={setState} />
                        </div>
                      )}
                      {state.counselingType === '痛風（高尿酸）營養方針' && (
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-4 items-center text-sm">
                            <span className="font-medium">3個月追蹤：</span>
                            <GuidelineCheckbox label="尿酸" id="gout_track_ua" state={state} setState={setState} />
                            <GuidelineCheckbox label="體重" id="gout_track_weight" state={state} setState={setState} />
                            <GuidelineCheckbox label="飲食紀錄" id="gout_track_diet_log" state={state} setState={setState} />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-medium text-slate-500">飲食目標</label>
                              <input type="text" value={state.guidelineSelections['gout_plan_diet_goal'] || ''} onChange={e => setSelection('gout_plan_diet_goal', e.target.value)} className="w-full px-3 py-2 rounded border border-slate-200 text-sm" />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-medium text-slate-500">行為改變目標</label>
                              <input type="text" value={state.guidelineSelections['gout_plan_behavior_goal'] || ''} onChange={e => setSelection('gout_plan_behavior_goal', e.target.value)} className="w-full px-3 py-2 rounded border border-slate-200 text-sm" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* (5) 備註與注意事項 */}
                  <div className="space-y-4">
                    <h3 className="text-md font-bold text-blue-700 border-b pb-2">備註與注意事項</h3>
                    <textarea 
                      rows={4}
                      value={state.reminderNotes || ''}
                      onChange={e => setState({...state, reminderNotes: e.target.value})}
                      placeholder="輸入備註或注意事項..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>

                  {/* (6) 衛教資訊 */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <h3 className="text-md font-bold text-blue-700">衛教資訊與附件</h3>
                      <label className="cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold transition-colors flex items-center gap-1">
                        <Plus className="w-3 h-3" />
                        新增圖片
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {state.intervention.educationTopics.map(topic => (
                        <span key={topic} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {topic}
                        </span>
                      ))}
                      {state.intervention.educationTopics.length === 0 && (
                        <span className="text-slate-400 italic text-sm">尚未選擇衛教主題</span>
                      )}
                    </div>

                    {state.educationImages.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                        {state.educationImages.map((img, idx) => (
                          <div key={idx} className="relative group aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                            <img src={img} alt="衛教附件" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            <button 
                              onClick={() => {
                                const newImages = [...state.educationImages];
                                newImages.splice(idx, 1);
                                setState({...state, educationImages: newImages});
                              }}
                              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Guideline Specifics */}
                  {renderGuidelineSpecifics()}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'medications' && (
            <motion.div
              key="medications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Pill className="w-5 h-5 text-indigo-600" />
                    藥物查詢與衛教 (Medications)
                  </h2>
                  <div className="relative max-w-xs w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm"
                      placeholder="搜尋藥品名稱或適應症..."
                      value={medicationSearchQuery}
                      onChange={(e) => setMedicationSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-6 bg-slate-50/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {MEDICATIONS.filter(med => 
                      med.name.toLowerCase().includes(medicationSearchQuery.toLowerCase()) || 
                      (med.genericName && med.genericName.toLowerCase().includes(medicationSearchQuery.toLowerCase())) ||
                      med.indication.toLowerCase().includes(medicationSearchQuery.toLowerCase())
                    ).map((med, idx) => (
                      <div key={idx} className="bg-white border text-sm border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="p-4 bg-indigo-50/50 border-b border-slate-100">
                          <h3 className="font-bold text-indigo-900 text-base">{med.name}</h3>
                          {med.genericName && <p className="text-xs text-indigo-600/70 mt-1">{med.genericName}</p>}
                        </div>
                        <div className="p-4 space-y-4 flex-1">
                          <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">適應症</span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">{med.indication}</span>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">用法與劑量</span>
                            <p className="text-slate-700">{med.dosage}</p>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">注意事項</span>
                            <ul className="list-disc list-outside ml-4 text-amber-700 space-y-1">
                              {med.precautions.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                          </div>
                          <div className="pt-2 border-t border-slate-100">
                            <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block mb-1">營養交互作用</span>
                            <ul className="list-disc list-outside ml-4 text-rose-700 space-y-1">
                              {med.nutritionInteraction.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {MEDICATIONS.filter(med => 
                    med.name.toLowerCase().includes(medicationSearchQuery.toLowerCase()) || 
                    (med.genericName && med.genericName.toLowerCase().includes(medicationSearchQuery.toLowerCase())) ||
                    med.indication.toLowerCase().includes(medicationSearchQuery.toLowerCase())
                  ).length === 0 && (
                    <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
                      <Pill className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p>找不到符合「{medicationSearchQuery}」的藥物</p>
                    </div>
                  )}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="mt-12 flex justify-between items-center text-slate-400 text-sm border-t border-slate-200 pt-8">
          <p>© 2026 營養諮詢紀錄系統 - NCP 專業版</p>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                if(confirm('確定要清空所有紀錄嗎？')) setState(INITIAL_STATE);
              }}
              className="hover:text-red-500 transition-colors"
            >
              清空紀錄
            </button>
            <button 
              onClick={handlePrint}
              className="hover:text-blue-600 transition-colors"
            >
              列印報告
            </button>
          </div>
        </div>
      </main>

      {/* Hidden Full Report for Printing */}
      <div className="hidden print:block p-8 space-y-12 bg-white text-slate-900">
        <div className="text-center border-b-2 border-slate-900 pb-4">
          <h1 className="text-3xl font-bold">營養諮詢紀錄報告</h1>
          <p className="text-slate-500 mt-2">諮詢日期: {state.consultDate}</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3">基本資料與諮詢紀錄</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="font-bold">諮詢目標:</span> {state.goal}</div>
            <div><span className="font-bold">諮詢紀錄:</span> {state.notes}</div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3">一、營養評估 (Assessment)</h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div><span className="font-bold">姓名:</span> {state.clientHx.name}</div>
            <div><span className="font-bold">性別:</span> {state.clientHx.gender}</div>
            <div><span className="font-bold">年齡:</span> {state.clientHx.birthday ? calculateAge(state.clientHx.birthday) : '--'} 歲</div>
            <div><span className="font-bold">身高:</span> {state.anthropometry.height} cm</div>
            <div><span className="font-bold">體重:</span> {state.anthropometry.weight} kg</div>
            <div><span className="font-bold">BMI:</span> {state.anthropometry.bmi}</div>
            <div><span className="font-bold">IBW:</span> {state.anthropometry.ibw} kg</div>
            <div><span className="font-bold">ABW:</span> {state.anthropometry.abw} kg</div>
            <div><span className="font-bold">體脂率:</span> {state.anthropometry.bodyFat} %</div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-sm mb-2">生化數值:</h3>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {Object.entries(state.biochemistry).map(([key, val]) => (
                <div key={key} className="border p-1">
                  <span className="font-semibold">{key}:</span> {val || '--'}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3">二、營養診斷 (Diagnosis)</h2>
          <div className="space-y-2">
            {state.diagnoses?.map((diag, idx) => (
              <div key={idx} className="p-3 border rounded text-sm italic">
                {diag.problem === '其他' ? (diag.problemOther || '其他') : diag.problem} 與 {diag.etiology === '其他' ? (diag.etiologyOther || '其他') : diag.etiology} 有關，經由 {diag.symptom === '其他' ? (diag.symptomOther || '其他') : diag.symptom} 證實。
              </div>
            ))}
            {(!state.diagnoses || state.diagnoses.length === 0) && <p className="text-sm text-slate-400 italic">無紀錄</p>}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3">三、營養介入 (Intervention)</h2>
          <div className="text-sm space-y-2">
            <div><span className="font-bold">建議熱量:</span> {state.diet.targetKcal} kcal/d</div>
            <div><span className="font-bold">建議飲水量:</span> {recommendedWater} ml/d</div>
            <div>
              <h3 className="font-bold mt-2">一日飲食規劃:</h3>
              <table className="w-full border-collapse border border-slate-300 text-xs mt-1">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-1">類別</th>
                    {MEALS.map(m => <th key={m} className="border border-slate-300 p-1">{m}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {INTERVENTION_CATEGORIES.map(cat => (
                    <tr key={cat}>
                      <td className="border border-slate-300 p-1 font-bold">{cat}</td>
                      {MEALS.map(meal => {
                        const mealKeyMap: { [key: string]: string } = {
                          '早餐': 'breakfast', '早點': 'morningSnack', '午餐': 'lunch', 
                          '午點': 'afternoonSnack', '晚餐': 'dinner', '晚點': 'eveningSnack'
                        };
                        const key = mealKeyMap[meal] as keyof typeof state.intervention.mealPlan[string];
                        return <td key={meal} className="border border-slate-300 p-1 text-center">{state.intervention.mealPlan[cat]?.[key] || '--'}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {state.intervention.educationTopics.length > 0 && (
              <div>
                <h3 className="font-bold mt-2">營養教育重點:</h3>
                <ul className="list-disc list-inside">
                  {state.intervention.educationTopics.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-blue-600 pl-3">四、營養監測 (Monitoring)</h2>
          <div className="text-sm space-y-4">
            {state.monitoring.history.length > 0 && (
              <table className="w-full border-collapse border border-slate-300 text-xs">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-1">日期</th>
                    <th className="border border-slate-300 p-1">體重</th>
                    <th className="border border-slate-300 p-1">HbA1c</th>
                    <th className="border border-slate-300 p-1">eGFR</th>
                    <th className="border border-slate-300 p-1">TG</th>
                    <th className="border border-slate-300 p-1">LDL</th>
                    <th className="border border-slate-300 p-1">其他</th>
                  </tr>
                </thead>
                <tbody>
                  {state.monitoring.history.map((record, idx) => (
                    <tr key={idx}>
                      <td className="border border-slate-300 p-1 text-center">{record.date}</td>
                      <td className="border border-slate-300 p-1 text-center">{record.weight || '--'}</td>
                      <td className="border border-slate-300 p-1 text-center">{record.hba1c || '--'}</td>
                      <td className="border border-slate-300 p-1 text-center">{record.egfr || '--'}</td>
                      <td className="border border-slate-300 p-1 text-center">{record.tg || '--'}</td>
                      <td className="border border-slate-300 p-1 text-center">{record.ldl || '--'}</td>
                      <td className="border border-slate-300 p-1">{record.other || '--'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <p><span className="font-bold">下次追蹤日期:</span> {state.monitoring.nextDate || '--'}</p>
            <p><span className="font-bold">監測計畫:</span> {state.monitoring.plan || '--'}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
