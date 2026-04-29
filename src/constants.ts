import { DiagnosisData, FoodItem, GuidelineData } from './types';

export const FOOD_DATABASE: FoodItem[] = [
  // 乳品類
  { name: '全脂牛奶 240 cc', category: '全脂乳品類', carbs: 12, protein: 8, fat: 8, kcal: 150, na: '', k: '', p: '' },
  { name: '低脂起司片 2片', category: '低脂乳品類', carbs: 12, protein: 8, fat: 4, kcal: 120, na: '', k: '', p: '' },
  { name: '低脂牛奶 240 cc', category: '低脂乳品類', carbs: 12, protein: 8, fat: 4, kcal: 120, na: '', k: '', p: '' },
  { name: '優格 180g', category: '低脂乳品類', carbs: 32, protein: 8, fat: 4, kcal: 200, na: '', k: '', p: '' },
  { name: '無糖優酪乳 200cc', category: '低脂乳品類', carbs: 27, protein: 8, fat: 4, kcal: 180, na: '', k: '', p: '' },
  // 低脂豆魚蛋肉類
  { name: '一般魚類 30g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '花枝 60g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '吻仔魚 80g（5匙）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '蚵仔 65g （3匙）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '劍蝦 4尾 （35g）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '里肌肉片 30g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '雞胸肉 30g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '雞腿 40g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '毛豆 50g (2匙）', category: '低脂豆魚蛋肉類', carbs: 5, protein: 7, fat: 3, kcal: 75, na: '', k: '', p: '' },
  { name: '黑豆 25g (2匙）', category: '低脂豆魚蛋肉類', carbs: 10, protein: 7, fat: 3, kcal: 95, na: '', k: '', p: '' },
  { name: '豆包 30g (2/3片）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '無糖豆漿 190cc', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, na: '', k: '', p: '' },
  { name: '含糖豆漿 190cc', category: '低脂豆魚蛋肉類', carbs: 25, protein: 7, fat: 3, kcal: 155, na: '', k: '', p: '' },
  { name: '魚丸（不包肉）55g', category: '低脂豆魚蛋肉類', carbs: 10, protein: 7, fat: 3, kcal: 95, na: '', k: '', p: '' },
  { name: '牛肉乾 20g', category: '低脂豆魚蛋肉類', carbs: 5, protein: 7, fat: 3, kcal: 75, na: '', k: '', p: '' },
  { name: '火腿 45g', category: '低脂豆魚蛋肉類', carbs: 10, protein: 7, fat: 3, kcal: 95, na: '', k: '', p: '' },
  // 中脂豆魚蛋肉類
  { name: '方形油豆腐 55g (2/3-1塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '板豆腐 80g (1/2塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '嫩豆腐 140g (半盒）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '黑豆乾 55g (1/3塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '小方豆乾 40g (1+1/3塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '五香豆乾 55g (2/3塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '旗魚 30g', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '肉魚 一隻', category: '中脂豆魚蛋肉類', carbs: 0, protein: 21, fat: 15, kcal: 225, na: '', k: '', p: '' },
  { name: '虱目魚', category: '中脂豆魚蛋肉類', carbs: 0, protein: 21, fat: 15, kcal: 225, na: '', k: '', p: '' },
  { name: '豆棗 60g', category: '中脂豆魚蛋肉類', carbs: 35, protein: 7, fat: 5, kcal: 215, na: '', k: '', p: '' },
  { name: '滷蛋 55g (1顆）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, na: '', k: '', p: '' },
  { name: '花枝丸、虱目魚丸 50g', category: '中脂豆魚蛋肉類', carbs: 7, protein: 7, fat: 5, kcal: 103, na: '', k: '', p: '' },
  // 高脂豆魚蛋肉類
  { name: '素火腿片 55g (4薄片）', category: '高脂豆魚蛋肉類', carbs: 4, protein: 7, fat: 8.5, kcal: 120, na: '', k: '', p: '' },
  { name: '素火腿丁 55g (4匙）', category: '高脂豆魚蛋肉類', carbs: 4, protein: 7, fat: 8.5, kcal: 120, na: '', k: '', p: '' },
  { name: '香腸、臘肉 40g', category: '高脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 10, kcal: 120, na: '', k: '', p: '' },
  { name: '熱狗、五花肉 50g', category: '高脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 10, kcal: 120, na: '', k: '', p: '' },
  // 全榖雜糧類
  { name: '白飯 40g(1/4碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },
  { name: '稀飯 125g(半碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },  
  { name: '熟麵條 60g(1/2碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },
  { name: '米粉 30-50g(1/4碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },
  { name: '冬粉 1/4碗', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },
  { name: '冬粉 1/4碗', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },  
  { name: '地瓜 (小 1/2個)', category: '全榖雜糧類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: '', k: '', p: '' },
  { name: '南瓜 85g(1/4碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: 1.3, k: 402.5, p: 43.4 },
  { name: '綠豆 25g(熟3匙)', category: '全榖雜糧類', carbs: 15, protein: 5, fat: 0, kcal: 80, na: '', k: '', p: '' },
  { name: '帶殼栗子 50g (4顆)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },
  { name: '薄片吐司 1片', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, na: '', k: '', p: '' },
  { name: '厚片吐司 1片', category: '全榖雜糧類', carbs: 30, protein: 4, fat: 0, kcal: 140, na: '', k: '', p: '' },
  { name: '市售饅頭 1顆', category: '全榖雜糧類', carbs: 60, protein: 8, fat: 0, kcal: 280, na: '', k: '', p: '' },
  // 蔬菜類
  { name: '蔬菜100g(半碗)', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: '', k: '', p: '' },
  { name: '胡瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 24.4, k: 838, p: 111.1 },
  { name: '絲瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 1.7, k: 626.6, p: 115.1 },
  { name: '白玉苦瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 17.1, k: 1065.6, p: 162.3 },
  { name: '青苦瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 20.2, k: 1208, p: 120.3 },
  { name: '高麗菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 45.4, k: 805.9, p: 130.9 },
  { name: '花椰菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 61.9, k: 1146.1, p: 173.7 },
  { name: '茼蒿', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 438.9, k: 2300.6, p: 139.6 },
  { name: '白蘿蔔', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 262.4, k: 708.2, p: 95.9 },
  { name: '紅蘿蔔', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 232, k: 513.1, p: 75 },
  { name: '皎白筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 24.5, k: 1070.9, p: 186.5 },
  { name: '玉米筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 0, k: 656.9, p: 133.4 },
  { name: '綠竹筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 5.5, k: 932.9, p: 151.5 },
  { name: '蘆筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 19.7, k: 1208.4, p: 236.9 },
  { name: '紅莧菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 56.4, k: 2017.3, p: 207.1 },
  { name: '菠菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 242.9, k: 2851.1, p: 246.3 },
  { name: '油菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 182.5, k: 3417.6, p: 196.3 },
  { name: '小白菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 1052.4, k: 1050.1, p: 229.7 },
  { name: '青江菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 719.7, k: 1122.8, p: 322.3 },
  { name: '空心菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 768.5, k: 390.4, p: 112 },
  { name: '地瓜葉', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 141.1, k: 1441.8, p: 156.6 },
  { name: '金針菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 6.4, k: 1031.9, p: 241.8 },
  { name: '洋菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 74.7, k: 1338.5, p: 321.2 },
  { name: '草菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 7.9, k: 1150.3, p: 289.2 },
  { name: '香菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 3.8, k: 719.5, p: 218.2 },
  { name: '海帶', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 1133.4, k: 33.7, p: 56.2 },
  { name: '木耳', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, na: 32.1, k: 147.4, p: 60 },
  // 水果類
  { name: '紅西瓜（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 2.6, k: 223.3, p: 21.5 },
  { name: '黃西瓜（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 3.3, k: 203.9, p: 20.2 },
  { name: '木瓜（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 5.3, k: 292.7, p: 17 },
  { name: '美濃香瓜（2/3顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 13.6, k: 550.7, p: 31.4 },
  { name: '愛文芒果（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 2.1, k: 150.3, p: 16.7 },
  { name: '鳳梨6塊（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 0, k: 184.9, p: 12.2 },
  { name: '白肉芭樂（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 2.2, k: 240.7, p: 19.8 },
  { name: '奇異果（1.5顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 2.9, k: 310, p: 32.2 },
  { name: '黃金奇異果（1.5顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 2, k: 256.2, p: 23.2 },
  { name: '蓮霧1.5-2個（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 2.9, k: 139.1, p: 11.9 },
  { name: '富士蘋果1顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 4.2, k: 138.4, p: 11.6 },
  { name: '柳丁1顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 7.3, k: 200.2, p: 28.7 },
  { name: '香蕉半根（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 0, k: 259.5, p: 16.5 },
  { name: '聖女蕃茄13-15顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 16.9, k: 354.7, p: 46 },
  { name: '綠葡萄13顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 3.8, k: 155, p: 20.2 },
  { name: '草莓16顆', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 10.5, k: 308, p: 35.5 },
  { name: '荔枝100g(9顆)', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 1.1, k: 170.5, p: 22.9 },
  { name: '楊桃170g (3/4顆)', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 0.6, k: 284.6, p: 17.3 },
  { name: '水蜜桃145g (1顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 2.9, k: 312.3, p: 32.5 },
  { name: '文旦', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, na: 0.8, k: 250, p: 26.3 },
  // 油脂與堅果類
  { name: '植物油5g(1/3匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, na: '', k: '', p: '' },
  { name: '豬油6g(1/3匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, na: '', k: '', p: '' },
  { name: '去殼花生15g(1匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, na: '', k: '', p: '' },
  { name: '花生醬9g(1匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, na: '', k: '', p: '' },
  { name: '美乃滋10g(2/3匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, na: '', k: '', p: '' },
  { name: '芝麻醬(1/2匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, na: '', k: '', p: '' },
  { name: '沙茶醬(1/2匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, na: '', k: '', p: '' },
// 外食類
  { name: '統一木瓜牛奶 478cc', category: '外食類', carbs: 47.3, protein: 9.1, fat: 8.6, kcal: 303, na: 277, k: '', p: '' },
  { name: '蘿蔔糕(香菇蝦米) (1塊)', category: '外食類', carbs: 18.8, protein: 2.5, fat: 2.8, kcal: 110, na: '', k: '', p: '' },
  { name: '柳橙汁(100%)', category: '外食類', carbs: 10.7, protein: 0.6, fat: 0.3, kcal: 48, na: 7.8, k: 179.9, p: 12.4 },
  { name: '蘋果汁(100%)', category: '外食類', carbs: 12.2, protein: 0.1, fat: 0.2, kcal: 51, na: 1.3, k: 96.2, p: 6.5 },
  { name: '仙草蜜', category: '外食類', carbs: 8.8, protein: 0, fat: 0, kcal: 35, na: 48, k: 15, p: 1 },
  { name: '麥茶', category: '外食類', carbs: 4.4, protein: 0, fat: 0, kcal: 18, na: 18, k: 8.9, p: 5.9 },
  { name: '可樂', category: '外食類', carbs: 12.8, protein: 0, fat: 0, kcal: 51, na: 6.6, k: 0, p: 15.8 },
  { name: '可樂(低熱量)', category: '外食類', carbs: 0.3, protein: 0, fat: 0, kcal: 1, na: 9.6, k: 0, p: 7.9 },
  { name: '美式咖啡(無糖)', category: '外食類', carbs: 0.3, protein: 0.2, fat: 0.1, kcal: 3, na: 1.7, k: 62.1, p: 4 },
  { name: '拿鐵咖啡(無糖)', category: '外食類', carbs: 3.4, protein: 3, fat: 2, kcal: 44, na: 28.3, k: 176.1, p: 81.2 },
  { name: '咖啡(三合一)', category: '外食類', carbs: 8.2, protein: 0.9, fat: 0.4, kcal: 40, na: 25.1, k: 75, p: 20.8 },
  { name: '鮮奶茶(無糖)', category: '外食類', carbs: 1.4, protein: 2, fat: 1.4, kcal: 26, na: 11.9, k: 61.6, p: 27.7 },
  { name: '奶茶(三合一)', category: '外食類', carbs: 9.5, protein: 0.5, fat: 0.3, kcal: 43, na: 18, k: 34.7, p: 18.1 },
  { name: '711聖德科斯芭樂檸檬汁280ml', category: '外食類', carbs: 33.6, protein: 0.6, fat: 0.3, kcal: 137.5, na: 1.1, k: '', p: '' },
  { name: '蛋塔', category: '外食類', carbs: 41.1, protein: 4.1, fat: 21.7, kcal: 376, na: 85.4, k: 116.3, p: 153.7 },
  { name: '蛋塔(葡式)', category: '外食類', carbs: 31.9, protein: 3.7, fat: 25.8, kcal: 375, na: 119.2, k: 96.2, p: 174.4 },
  { name: '鬆餅', category: '外食類', carbs: 55.1, protein: 3.2, fat: 2.6, kcal: 257, na: 227.9, k: 142.2, p: 211.9 },
  { name: '乳酪蛋糕', category: '外食類', carbs: 19.1, protein: 7, fat: 21.3, kcal: 296, na: 153, k: 133.1, p: 138.8 },
  { name: '傳統豆花(未加糖)', category: '外食類', carbs: 2.1, protein: 3.2, fat: 1.9, kcal: 38, na: 22, k: 123, p: 39 },
  { name: '蛋捲(芝麻)', category: '外食類', carbs: 55.5, protein: 6.8, fat: 33.3, kcal: 549, na: 225, k: 114, p: 163 },
  { name: '煎餅', category: '外食類', carbs: 78.3, protein: 6.3, fat: 11.7, kcal: 444, na: 162, k: 157, p: 115 },
  { name: '蘇打餅乾(蔬菜)', category: '外食類', carbs: 64.5, protein: 7.8, fat: 24.7, kcal: 512, na: 388, k: 141, p: 93 },
  { name: '廣東粥', category: '外食類', carbs: 9.1, protein: 4.9, fat: 2.8, kcal: 81, na: 271, k: 53, p: 40 },
  { name: '冷凍火腿炒飯', category: '外食類', carbs: 29.7, protein: 5, fat: 5.6, kcal: 189, na: 220, k: 57, p: 62 },
  { name: '冷凍蝦仁炒飯', category: '外食類', carbs: 24.6, protein: 4.7, fat: 3.4, kcal: 148, na: 222, k: 44, p: 44 },
  { name: '豬血糕', category: '外食類', carbs: 37.8, protein: 8.6, fat: 0.9, kcal: 194, na: 414, k: 83, p: 69 },
  { name: '清蒸蝦仁肉圓', category: '外食類', carbs: 16.7, protein: 4.6, fat: 7.4, kcal: 152, na: 429, k: 58, p: 31 },
  { name: '冷凍芝麻湯圓', category: '外食類', carbs: 46.7, protein: 4.8, fat: 16.3, kcal: 353, na: 3, k: 45, p: 398 },
  { name: '冷凍花生湯圓', category: '外食類', carbs: 47.1, protein: 5.2, fat: 15.6, kcal: 350, na: 6, k: 55, p: 279 },
  { name: '白饅頭', category: '外食類', carbs: 51.3, protein: 8.1, fat: 1.2, kcal: 248, na: 182, k: 66, p: 58 },
  { name: '蔥油餅', category: '外食類', carbs: 46.9, protein: 8.3, fat: 9.3, kcal: 305, na: 257, k: 63, p: 41 },
  { name: '燒餅', category: '外食類', carbs: 51.1, protein: 9.1, fat: 9.1, kcal: 323, na: 458, k: 81, p: 65 },
  { name: '韭菜盒子', category: '外食類', carbs: 19.5, protein: 7.5, fat: 12.1, kcal: 217, na: 287, k: 180, p: 66 },
  { name: '水煎包', category: '外食類', carbs: 25.2, protein: 4.3, fat: 5.4, kcal: 167, na: 310, k: 129, p: 48 },
  { name: '鮮奶起司爆漿包1個110g', category: '外食類', carbs: 51.5, protein: 12, fat: 8.6, kcal: 332.9, na: 458, k: '', p: '' },
  { name: '蚵仔煎', category: '外食類', carbs: 19.7, protein: 4.9, fat: 10.4, kcal: 192, na: 479, k: 91, p: 91 },
  { name: '肉羹', category: '外食類', carbs: 18.9, protein: 9.7, fat: 14.7, kcal: 247, na: 512, k: 102, p: 198 },
  { name: '桂冠黃金起司球 30g', category: '外食類', carbs: 3.7, protein: 3.1, fat: 1.8, kcal: 43, na: 169, k: '', p: '' },
  { name: '711阜杭豆漿里肌肉紫米飯糰 207g', category: '外食類', carbs: 65.6, protein: 12.8, fat: 12, kcal: 422, na: 511, k:'', p: ''},
  { name: '711星級饗宴-麻油雞飯糰 207g', category: '外食類', carbs:0 , protein: 0, fat: 0, kcal: 354, na: '', k:'', p: ''},
  { name: '711新極上飯糰-天使紅蝦 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, na: '', k:'', p: ''},
  { name: '711新極上飯糰-蔥鹽生鮭 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 210, na: '', k:'', p: ''},
  { name: '711新極上飯糰-明太子鮭魚 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 228, na: '', k:'', p: ''},
  { name: '711新極上飯糰-冠軍烏魚子 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, na: '', k:'', p: ''},
  { name: '711星宇新極上-胡同炭火牛小排 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, na: '', k:'', p: ''},
  { name: '711嫩烤里肌多彩便當 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, na: '', k:'', p: ''},
  { name: '711極饗-沙茶豬肉燴飯 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, na: '', k:'', p: ''},  
  { name: '711黑金松露嫩雞胸 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, na: '', k:'', p: ''},
  { name: '711香檸優多 椰果晶凍 400g', category: '外食類', carbs: 52, protein: 0.4, fat: 0, kcal: 210, na: 176, k:'', p: ''},
  { name: '711 AB優洛乳（無加糖） 517ml', category: '外食類', carbs: 43.4, protein: 16, fat: 6.8, kcal: 298, na: 268, k:'', p: ''},
  { name: '711 AB優洛乳（原味） 517ml', category: '外食類', carbs: 54.8, protein: 15.6, fat: 3.2, kcal: 310, na: 268, k:'', p: ''},
  { name: '711比菲多（寡糖配方）471ml', category: '外食類', carbs: 60.3, protein: 6.2, fat: 0, kcal: 198, na: 89, k:'', p: ''},
  { name: '711比菲多（減醣30%）471ml', category: '外食類', carbs: 67.8, protein: 5.2, fat: 0, kcal: 278, na: 52, k:'', p: ''},
  { name: '711寒天冬瓜檸檬QQ 400g', category: '外食類', carbs: 51, protein: 0.4, fat: 0.4, kcal: 208, na: 73, k:'', p: ''},
  { name: 'Qburger黃金脆雞鮮蔬堡 152g', category: '外食類', carbs: 6.1, protein: 17, fat: 9, kcal: 171.5, na: 205, k:'', p: ''},
  { name: 'Qburger里肌豬排堡 158g', category: '外食類', carbs: 38.1, protein: 14, fat: 11.9, kcal: 314.9, na: 762, k:'', p: ''},
  { name: 'Qburger牛肉起士漢堡 174g', category: '外食類', carbs: 35.6, protein: 15, fat: 24.1, kcal: 418.3, na: 639, k:'', p: ''},
  { name: 'Qburger卡啦雞腿漢堡 207g', category: '外食類', carbs: 46.4, protein: 21.9, fat: 33.4, kcal: 572.7, na: 976, k:'', p: ''},
  { name: 'Qburger麥香雞漢堡 157g', category: '外食類', carbs: 42.1, protein: 10.2, fat: 19.4, kcal: 383.6, na: 756, k:'', p: ''},
  { name: 'Qburger黃金脆雞堡 177g', category: '外食類', carbs: 35.5, protein: 21.8, fat: 14.2, kcal: 356.8, na: 492, k:'', p: ''},
  { name: 'Qburger鮪魚吐司 168g', category: '外食類', carbs: 50.2, protein: 14.4, fat: 222, kcal: 455.8, na: 557, k:'', p: ''},
  { name: 'Qburger里肌豬排吐司 175g', category: '外食類', carbs: 51.8, protein: 17.2, fat: 16.1, kcal: 420.3, na: 831, k:'', p: ''},
  { name: 'Qburger花生吐司 108g', category: '外食類', carbs: 49.1, protein: 11.2, fat: 12.8, kcal: 356.7, na: 368, k:'', p: ''},
  { name: 'Qburger鮪魚蛋餅 182g', category: '外食類', carbs: 31.2, protein: 19.7, fat: 26.3, kcal: 439.6, na: 824, k:'', p: ''},
  { name: 'Qburger黑胡椒麵鐵板麵 563g', category: '外食類', carbs: 75, protein: 26.2, fat: 19.6, kcal: 581.3, na: 1662, k:'', p: ''},
  { name: 'Qburger蘑菇麵鐵板麵 563g', category: '外食類', carbs: 64.3, protein: 25.9, fat: 18.5, kcal: 527, na: 1707, k:'', p: ''},
  { name: 'Qburger沙茶麵鐵板麵 549g', category: '外食類', carbs: 90.3, protein: 28, fat: 22.7, kcal: 677.4, na: 2396, k:'', p: ''},
  { name: 'Qburger原味蛋餅 132g', category: '外食類', carbs: 29, protein: 11.8, fat: 10, kcal: 253.4, na: 657, k:'', p: ''},
  { name: 'Qburger100%肉鬆蛋餅 147g', category: '外食類', carbs: 33.1, protein: 15.8, fat: 16.1, kcal: 340.5, na: 803, k:'', p: ''},
  { name: 'Qburger經典紅茶 320g', category: '外食類', carbs: 27.1, protein: 0, fat: 0, kcal: 108.4, na:'', k:'', p: ''},
  { name: 'Qburger美式黑咖啡 340g', category: '外食類', carbs: 2.38, protein: 0.68, fat: 0.34, kcal: 340, na: 3, k:'', p: ''},
  { name: 'Qburger拿鐵咖啡 345g', category: '外食類', carbs: 8, protein: 5.5, fat: 5.7, kcal: 105.5, na: 90, k:'', p: ''},
  { name: 'Qburger招牌奶茶 320g', category: '外食類', carbs: 34.7, protein: 1, fat: 2, kcal: 320, na: 14, k:'', p: ''},
  { name: 'Qburger柳橙汁 300g', category: '外食類', carbs: 33.9, protein: 1.5, fat: 0, kcal: 141.6, na: 60, k:'', p: ''},
  { name: 'Qburger阿華田 360g', category: '外食類', carbs: 33.9, protein: 1.5, fat: 0, kcal: 141.6, na: 60, k:'', p: ''},
  { name: 'Qburger100%肉鬆可朗芙 75g', category: '外食類', carbs: 25.8, protein: 7.2, fat: 20.2, kcal: 311.3, na: 358, k:'', p: ''},
  { name: 'Qburger蜂蜜芥末卡啦雞可朗芙 199g', category: '外食類', carbs: 37.6, protein: 21.4, fat: 42.1, kcal: 612.7, na: 977, k:'', p: ''},
  { name: 'Qburger鮪魚玉米可朗芙 123g', category: '外食類', carbs: 25.9, protein: 10.6, fat: 21.4, kcal: 336, na: 376, k:'', p: ''},
  { name: 'Qburger經典可朗芙 55g', category: '外食類', carbs: 21.7, protein: 4.4, fat: 8.8, kcal: 181.8, na: 235, k:'', p: ''},
  { name: 'Qburger花醬可朗芙 72g', category: '外食類', carbs: 26.3, protein: 7.5, fat: 17.1, kcal: 287.5, na: 276, k:'', p: ''},
  
  // 醬料類
  { name: '醬油膏 5g', category: '醬料類', carbs: 1, protein: 0.3, fat: 0, kcal: 5, na: 202.5, k: 16.4, p: 5.5 },
  { name: '鮮味露 5g', category: '醬料類', carbs: 0, protein: 1, fat: 0, kcal: 4, na: 390.2, k: 20.4, p: 1.1 },
  { name: '牛肉醬 5g', category: '醬料類', carbs: 1.1, protein: 0.8, fat: 1.9, kcal: 25, na: 49.5, k: 12.4, p: 7.5 },
  { name: '肉燥', category: '醬料類', carbs: 0.2, protein: 0.5, fat: 1.9, kcal: 20, na: 47.1, k: 14.7, p: 4.9 },
  { name: '素肉燥', category: '醬料類', carbs: 0.6, protein: 0.6, fat: 2.1, kcal: 24, na: 52.8, k: 5.7, p: 4.4 },
  { name: '芝麻醬 5g', category: '醬料類', carbs: 1.1, protein: 1, fat: 2.6, kcal: 32, na: 0.2, k: 26.5, p: 28.3 },
  { name: '沙茶醬 5g', category: '醬料類', carbs: 0.5, protein: 0.5, fat: 3.6, kcal: 36, na: 21, k: 17.7, p: 14.1 },
  { name: '千島沙拉醬 5g', category: '醬料類', carbs: 0.8, protein: 0, fat: 2.5, kcal: 26, na: 31.6, k: 3.1, p: 1 },
  { name: '和風沙拉醬 5g', category: '醬料類', carbs: 1.3, protein: 0.1, fat: 0.1, kcal: 7, na: 142.7, k: 7.9, p: 2.5 },
  { name: '凱撒沙拉醬 5g', category: '醬料類', carbs: 0.9, protein: 0.1, fat: 1.5, kcal: 18, na: 63.7, k: 3.7, p: 2.7 },
  { name: '味噌 5g', category: '醬料類', carbs: 1.7, protein: 0.5, fat: 0.2, kcal: 11, na: 207.6, k: 17.3, p: 7 },
  { name: '花生醬 5g', category: '醬料類', carbs: 0.9, protein: 1.2, fat: 2.7, kcal: 33, na: 15.3, k: 28.6, p: 18.9 },
  // 保健品
  { name: '亞培 腎補納/未洗腎 237ml', category: '保健品', carbs: 46.4, protein: 10.6, fat: 22.7, kcal: 432, na: 190, k: 270, p: 170 },
  { name: '艾益生 力增10%/未洗腎 237ml', category: '保健品', carbs: 46.4, protein: 10.6, fat: 22.7, kcal: 432, na: 190, k: 200, p: 170 },
  { name: '補體素 慎選/未洗腎 237ml', category: '保健品', carbs: 52.8, protein: 10.8, fat: 22.5, kcal: 457, na: 236, k: 300, p: 188 },
  { name: '三多補體康 低蛋白', category: '保健品', carbs: 51.8, protein: 8.5, fat: 21.3, kcal: 433, na: 190, k: 240, p: 170 },
  { name: '卡比 倍速力 200ml', category: '保健品', carbs: 55.2, protein: 6, fat: 17.8, kcal: 405, na: 136, k: 200, p: 110 },
  { name: '立攝適 盛健 10% 250ml', category: '保健品', carbs: 47.5, protein: 23, fat: 25, kcal: 507, na: 235, k: 205, p: 220 },
  { name: '三多勝補康LPF-N (2平匙,250cc)', category: '保健品', carbs: 36.6, protein: 5.9, fat: 9.7, kcal: 257, na: 105, k: 107, p: 74.3 },
  { name: '益富 益能充 45g/包', category: '保健品', carbs: 31.8, protein: 0.8, fat: 8.2, kcal: 204, na: 113, k: 108, p: 42 },
  { name: '補體素 慎選 45g/包', category: '保健品', carbs: 32.2, protein: 0.6, fat: 8.5, kcal: 208, na: 44, k: 90.9, p: 38.7 },
  { name: '亞培 葡勝納3重強護 52g/5匙', category: '保健品', carbs: 30.4, protein: 10.2, fat: 8.3, kcal: 237, na: 211, k: 370, p: 168 },
  { name: '思耐得 補體素鉻100 58g/5匙', category: '保健品', carbs: 31.3, protein: 12.8, fat: 9.5, kcal: 262, na: 220, k: 229, p: 165 },
  { name: '維維樂 加倍優糖尿病配方 40g/包', category: '保健品', carbs: 25.7, protein: 8.2, fat: 5.2, kcal: 182, na: 104, k: 257, p: 212 },
  { name: '益富 益力壯糖尿病配方 58g/7匙', category: '保健品', carbs: 28.7, protein: 12.6, fat: 10.5, kcal: 260, na: 262, k: 249, p: 134 },
  { name: '桂格 完膳糖尿病配方 60g/7匙', category: '保健品', carbs: 32.4, protein: 12, fat: 8, kcal: 250, na: 265, k: 260, p: 385 },
  { name: '亞培 葡勝納SR 200ml', category: '保健品', carbs: 24.5, protein: 9.3, fat: 6.8, kcal: 196, na: 178, k: 312, p: 120 },
  { name: '艾益生 力增飲鉻100 237ml', category: '保健品', carbs: 28.2, protein: 10, fat: 10.8, kcal: 250, na: 240, k: 290, p: 175 },
  { name: '思耐得 補體素鉻100 237ml', category: '保健品', carbs: 29, protein: 12, fat: 9, kcal: 245, na: 194, k: 237, p: 160 },
  { name: '益富 益力壯鉻112 250ml', category: '保健品', carbs: 28.5, protein: 12.5, fat: 10.5, kcal: 259, na: 263, k: 406, p: 175 },
  { name: '賀寶芙 草莓 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, na: 90, k: 284, p: '' },
  { name: '賀寶芙 薄荷巧克力 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, na: 90, k: 284, p: '' },
  { name: '賀寶芙 香草 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, na: 90, k: 284, p: '' },
  { name: '賀寶芙 巧克力 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, na: 90, k: 438, p: '' },
  { name: '賀寶芙 巧餅 260ml', category: '保健品', carbs: 13, protein: 9, fat: 1, kcal: 90, na: 160, k: 284, p: '' },
  { name: '賀寶芙 拿鐵 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, na: 95, k: 325, p: '' },
  { name: '賀寶芙 芒果 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, na: 90, k: 284, p: '' }
];

export const DIAG_DATA: DiagnosisData = {
  NI: {
    label: "NI (攝取領域)",
    problems: {
      "體重過輕": {
        etiologies: [
          "對食物與營養相關知識缺乏", "熱量攝取不足", "熱量需求增加", "活動量過高",
          "有食物攝取禁忌或限制", "飲食失調", "環境經濟因素",
          "胎兒體位小於懷孕週期應有體重、於子宮內生長遲緩或受限、或每日體重增加不足"
        ],
        symptoms: [
          "BMI < 18.5 kg/m^2 (成人)", "皮下脂肪厚度、中臂肌肉圍減少", "體瘦、缺乏體脂肪",
          "肌肉變少", "攝取量小於建議量", "食物供應不足", "節食、不良的飲食流行時尚",
          "長期饑餓", "拒絕進食", "活動量大於建議量", "使用影響食欲的藥物",
          "營養不良，維生素、礦物質缺乏", "有疾病或身心障礙", "有精神障礙或失智疾病",
          "新陳代謝率過高", "舞蹈、體操等運動員", "照顧不當之幼兒", "有飲食偏好"
        ]
      },
      "體重過重/肥胖": {
        etiologies: ["對食物與營養相關知識缺乏", "熱量攝取過多", "熱量需求降低", "活動量過低", "不當的飲食生活型態、尚未準備好進行飲食或生活型態的改變", "遺傳或是疾病因素", "心理及生活壓力過", "飲食失調"],
        symptoms: ["休息代謝率 < 預估或評估值", "男性腰圍 >= 90公分；女性腰圍 >= 80公分", "男性體脂肪 >= 25%；女性體脂肪 >= 30%", "三頭肌皮下脂肪厚度增加", "小兒重高指數 > 各性別及年齡層標準值", "高油脂、高熱量食物及飲料過量", "熱量攝取大於建議量", "活動量過低", "新陳代謝率過低", "無法透過控制飲食與運動顯著減少過多體重", "代謝症候群", "罹患影響體重控制的疾病", "患有慢性疾病或身心障礙", "飲食偏好嚴重", "照顧不當之幼兒"]
      },
      "體重正常": {
        etiologies: ["無"],
        symptoms: ["18.5 <= BMI < 24 kg/m^2 (成人)", "小兒符合生長曲線建議範圍", "無水腫、脫水、腹水情況", "熱量攝取合乎建議量"]
      },
      "明顯/嚴重體重減輕": {
        etiologies: ["對食物與營養相關知識缺乏", "食物攝取不足(自行進食能力不足)", "食物攝取不足(經濟、文化、宗教等影響)", "食物攝取不足(給予老人或幼童食物受限)", "營養素需求增加", "活動量過高", "疾病影響", "刻意減肥", "心理因素"],
        symptoms: ["明顯的體重減輕(一個月內 5%)", "嚴重的體重減輕(一個月內 > 5%)", "體瘦、缺乏體脂肪", "衣服變寬鬆", "進食習慣改變", "甲狀腺機能亢進、短腸症、癌症"]
      },
      "熱量攝取過多": {
        etiologies: ["沒有意願降低熱量攝取", "對食物與營養相關知識缺乏", "靜脈及腸道營養過度餵食", "心理因素或生活壓力過大"],
        symptoms: ["高血糖、高三酸甘油酯", "BMI >= 24 kg/m2", "體重增加", "攝取高熱量密度或加大份量食物或飲料"]
      },
      "熱量攝取不足": {
        etiologies: ["食物與營養相關知識缺乏", "需求增加", "無法獲得足夠食物", "心理因素", "口腔功能不良"],
        symptoms: ["體重減輕", "無法維持理想體重", "攝取量低於建議量", "食物禁忌"]
      },
      "碳水化合物攝取過多": {
        etiologies: ["食物與營養相關知識缺乏", "熱量需要增加，或無法攝取足夠的熱量", "有食物攝取禁忌或限制", "口腔功能不良或吞嚥困難", "心理因素", "不完全遵從醫師或營養師建議", "個人飲食喜好之偏差", "生理原因需調整(如:DM、乳糖酶缺乏)"],
        symptoms: ["TG > 150 mg/dL", "高血糖（AC > 126 mg/dL）", "糖化血色素 > 6%", "喜好高碳水化合物食物", "蛋白質或脂肪類食物攝取比例不足"]
      },
      "精製糖攝取過多": {
        etiologies: ["食物與營養相關知識缺乏", "飲食文化或個人偏好", "心理因素"],
        symptoms: ["攝取精製糖的熱量 > 10% 每日建議熱量", "碳水化合物攝取類別與建議不同", "偏好甜食"]
      },
      "脂肪攝取過多": {
        etiologies: ["食物與營養相關知識缺乏", "口味、食慾或喜好改變", "缺乏健康飲食選擇管道", "缺乏行為改變的價值觀"],
        symptoms: ["TC > 200 mg/dL", "LDL-C > 100 mg/dL", "脂肪攝取 > 35 % 建議熱量", "經常或大量攝取高脂肪食物"]
      },
      "脂肪攝取偏低": {
        etiologies: ["腸胃道結構或功能改變", "不適當的食物選擇", "心理因素", "不當的靜脈營養支持"],
        symptoms: ["體重減輕", "生長情況不足", "脂肪攝取 < 25 % 建議熱量", "長期嚴守極低油飲食"]
      },
      "飽和脂肪酸攝取過多": {
        etiologies: ["食物與營養觀念不正確", "缺乏獲取健康飲食之管道", "個人飲食喜好之偏差", "外食、應酬頻率高"],
        symptoms: ["TC > 200 mg/dL", "LDL-C > 100 mg/dL", "飽和脂肪酸攝取 > 7% 建議熱量", "喜好富含飽和脂肪酸食物"]
      },
      "蛋白質攝取過多": {
        etiologies: ["對食物及營養議題有錯誤認知", "特殊蛋白質補充品使用不當", "因疾病因素需降低攝取量者未調整"],
        symptoms: ["BUN增加，腎絲球過濾率降低", "蛋白質攝取 > 20% 建議熱量", "蛋白質攝取 > 1.5g/Kg BW"]
      },
      "蛋白質攝取偏低": {
        etiologies: ["食物與營養知識缺乏", "缺乏獲得食物管道", "生理因素(吸收不良、需求劇增)"],
        symptoms: ["水腫、肌肉發育不良", "蛋白質攝取 < 10% 建議熱量", "蛋白質攝取 < 0.8g/Kg BW"]
      },
      "膳食纖維質攝取過多": {
        etiologies: [
          "缺乏適當纖維攝取量的知識",
          "只準備或攝取高纖食物，而排除其他營養素豐富的食物",
          "食物及營養相關知識缺乏",
          "對食物及營養相關議題有錯誤認知及態度，例如：執著於排便次數與習慣"
        ],
        symptoms: [
          "腹脹、腸蠕動異常、噁心、嘔吐、腸胃大量脹氣、腹瀉、腹部絞痛、糞便量大或次數頻繁",
          "纖維攝取量高於耐受量或建議量",
          "膳食纖維質攝取 > 14 g/1000Kcal",
          "消化性潰瘍、大腸激躁症、發炎性腸道疾病、短腸症、憩室炎、阻塞性便秘、脫痔、腸道狹窄、飲食障礙、妄想強迫症傾向、腸阻塞、糞石"
        ]
      },
      "水份攝取過多": {
        etiologies: [
          "照顧者或本身缺乏食物與營養相關知識",
          "生理因素（如：因肝、腎或心臟衰竭等疾病造成ADH作用異常，降低液體與鈉的排出、沮喪或飲食失調）",
          "對營養相關建議不瞭解或不遵循",
          "過量攝取水分、湯或飲料",
          "食物過度調味",
          "誤食或強迫餵食"
        ],
        symptoms: [
          "血漿滲透壓偏低（270-280 mOsm/kg）",
          "抗利尿激素分泌不當症候群（SIADH）導致血鈉降低",
          "體重增加",
          "HD：二次透析間體重增加 > 5 %乾體重",
          "下肢水腫", "腹水", "肺積水", "噁心、嘔吐、厭食症、頭痛、肌肉痙攣、抽搐",
          "活動性或休息時呼吸短促或呼吸困難", "尿量減少",
          "末期腎臟病、腎病症候群、心臟衰竭、肝臟疾病"
        ]
      },
      "水分攝取不足": {
        etiologies: [
          "運動或發燒導致流失增加",
          "無法進食或進食受限",
          "高溫乾燥環境下長時間工作",
          "口渴敏感度降低",
          "照顧者開缺乏知識",
          "短腸症、慢性腹瀉、急慢性腸胃炎導致水分吸收減少"
        ],
        symptoms: [
          "血漿或血清滲透壓 > 290 mOsm/kg",
          "血清：BUN增加，血清鈉增加",
          "成人排尿量 < 30 mL/hr",
          "小兒尿液排出減少",
          "急性體重減輕",
          "皮膚與黏膜乾燥，皮膚無彈性",
          "口渴",
          "水份攝取量少於生理需求建議量"
        ]
      },
      "其他": {
        etiologies: ["其他"],
        symptoms: ["其他"]
      }
    }
  },
  NC: {
    label: "NC (臨床領域)",
    problems: {
      "吞嚥困難": {
        etiologies: ["發炎、手術、狹窄","口腔、咽喉、食道腫瘤及其外科手術治療、放射治療", "使用呼吸器", "肌肉運動因素", "改變吸吮、吞嚥、呼吸型態", "頸、頭部手術"],
        symptoms: ["吞嚥測試不正常","咀嚼或吞嚥時出現過多的口腔動作", "進餐中常出現咳嗽或嗆咳", "每口食物需嚥兩三回才能夠吞乾淨", "用餐過程有流涎的現象", "用餐後舌面或口腔內一側有食物堆積而不自覺", "喝水過後咽喉處發出咕嚕聲", "脫水或營養不良", "進食時間延長", "食物攝取量降低", "拒絕進食", "反覆上呼吸道感染或肺炎"]
      },
      "咀嚼困難": {
        etiologies: ["顱面畸形","面骨裂損", "口腔、牙科、面部手術", "神經肌肉功能異常", "缺牙或無牙", "全身性疾病之原發或口腔表徵之軟組織疾病", "口乾症"],
        symptoms: ["缺牙或無牙","腦神經功能改變", "口乾", "口腔病變影響進食能力", "舌運動障礙", "不合適或破損的假牙", "食物攝取量減少", "不食用不易形成食糰的食物", "不食用適齡質地的食物", "吐出食物或進食時間延長", "酗酒", "阿茲海默症", "頭頸癌、腦性麻痺", "唇顎裂、口腔軟組織感染", "化療伴隨之口腔副作用", "口腔放射線治療"]
      },
      "腸胃道功能改變": {
        etiologies: ["腸胃道結構及功能改變","腸胃道運動功能改變", "胰臟、肝臟功能受損", "正常功能之腸胃道長度變短"],
        symptoms: ["消化酵素及糞便脂肪試驗結果異常", "內視鏡或大腸鏡觀察結果", "貧血", "明顯的體重減輕", "脹氣", "厭食、噁心、嘔吐、腹瀉、脂肪瀉", "便秘、腹痛", "傾食症候群、胃炎", "腸胃道外科手術後"]
      },
      "生化數值改變": {
        etiologies: ["疾病狀態影響", "藥物副作用", "不當的營養素攝取"],
        symptoms: ["AC 血糖異常", "HbA1c 偏高", "血脂異常"]
      },
      "其他": {
        etiologies: ["其他"],
        symptoms: ["其他"]
      }
    }
  },
  NB: {
    label: "NB (行為環境領域)",
    problems: {
      "食物與營養相關知識缺乏": {
        etiologies: ["從未接受衛教", "錯誤資訊來源", "認知能力受限"],
        symptoms: ["無法正確辨識食物種類", "飲食習慣不符疾病需求", "錯誤執行治療餐次"]
      },
      "其他": {
        etiologies: ["其他"],
        symptoms: ["其他"]
      }
    }
  }
};

export const DIET_GUIDELINES: { [type: string]: GuidelineData } = {
  'DM': {
    '1200': { '低脂乳品類': 1.5, '全榖雜糧類': 7.5, '中脂豆魚蛋肉類': 2, '蔬菜類': 3, '水果類': 2, '油脂與堅果類': 2.5 },
    '1300': { '低脂乳品類': 1.5, '全榖雜糧類': 8.5, '中脂豆魚蛋肉類': 2, '蔬菜類': 3, '水果類': 2, '油脂與堅果類': 4 },
    '1400': { '低脂乳品類': 1.5, '全榖雜糧類': 9.5, '中脂豆魚蛋肉類': 2.5, '蔬菜類': 3, '水果類': 2, '油脂與堅果類': 4 },
    '1500': { '低脂乳品類': 1.5, '全榖雜糧類': 10, '中脂豆魚蛋肉類': 3, '蔬菜類': 4, '水果類': 2, '油脂與堅果類': 4 },
    '1600': { '低脂乳品類': 1.5, '全榖雜糧類': 11, '低脂豆魚蛋肉類': 1, '中脂豆魚蛋肉類': 2.5, '蔬菜類': 4, '水果類': 2, '油脂與堅果類': 4.5 },
    '1800': { '低脂乳品類': 1.5, '全榖雜糧類': 12, '中脂豆魚蛋肉類': 3.5, '蔬菜類': 4, '水果類': 3, '油脂與堅果類': 5 },
    '2000': { '低脂乳品類': 1.5, '全榖雜糧類': 14, '中脂豆魚蛋肉類': 4, '蔬菜類': 5, '水果類': 3, '油脂與堅果類': 5.5 },
    '2200': { '低脂乳品類': 1.5, '全榖雜糧類': 15, '中脂豆魚蛋肉類': 5, '蔬菜類': 6, '水果類': 3, '油脂與堅果類': 6 }
  },
  'CKD': {
    '1500': { '全榖雜糧類': 8, '低氮澱粉': 3.5, '中脂豆魚蛋肉類': 3, '蔬菜類': 3, '水果類': 2, '油脂與堅果類': 7 },
    '1650': { '全榖雜糧類': 9, '低氮澱粉': 4.5, '中脂豆魚蛋肉類': 3, '蔬菜類': 3, '水果類': 2, '油脂與堅果類': 6.5 },
    '1800': { '全榖雜糧類': 10, '低氮澱粉': 5, '中脂豆魚蛋肉類': 3.5, '蔬菜類': 3, '水果類': 2, '油脂與堅果類': 8 },
    '1950': { '全榖雜糧類': 10, '低氮澱粉': 7, '低脂豆魚蛋肉類': 1, '中脂豆魚蛋肉類': 3, '蔬菜類': 3.5, '水果類': 2, '油脂與堅果類': 8 },
    '2100': { '全榖雜糧類': 10, '低氮澱粉': 8, '低脂豆魚蛋肉類': 1.5, '中脂豆魚蛋肉類': 3, '蔬菜類': 3.5, '水果類': 2, '油脂與堅果類': 9 },
    '2250': { '全榖雜糧類': 10.5, '低氮澱粉': 9.5, '低脂豆魚蛋肉類': 1, '中脂豆魚蛋肉類': 4, '蔬菜類': 3.5, '水果類': 2.5, '油脂與堅果類': 8 },
    '2400': { '全榖雜糧類': 12, '低氮澱粉': 9.5, '中脂豆魚蛋肉類': 5, '蔬菜類': 4, '水果類': 2.5, '油脂與堅果類': 8 },
    '2550': { '全榖雜糧類': 12, '低氮澱粉': 10.5, '低脂豆魚蛋肉類': 0.5, '中脂豆魚蛋肉類': 5, '蔬菜類': 4, '水果類': 3, '油脂與堅果類': 8.5 },
    '2700': { '全榖雜糧類': 13, '低氮澱粉': 11, '低脂豆魚蛋肉類': 1, '中脂豆魚蛋肉類': 5, '蔬菜類': 5, '水果類': 3, '油脂與堅果類': 9 }
  }
};

export const EXCHANGE_VALUES = {
  '低脂乳品類': { carbs: 12, protein: 8, fat: 4, calories: 120, na: 120, k: 380, p: 250 },
  '全脂乳品類': { carbs: 12, protein: 8, fat: 8, calories: 150, na: 110, k: 350, p: 230 },
  '全榖雜糧類': { carbs: 15, protein: 2, fat: 0, calories: 70, na: 2, k: 30, p: 30 },
  '低氮澱粉': { carbs: 15, protein: 0, fat: 0, calories: 60, na: 1, k: 5, p: 5 },
  '低脂豆魚蛋肉類': { carbs: 0, protein: 7, fat: 3, calories: 55, na: 50, k: 100, p: 80 },
  '中脂豆魚蛋肉類': { carbs: 0, protein: 7, fat: 5, calories: 75, na: 60, k: 120, p: 100 },
  '高脂豆魚蛋肉類': { carbs: 0, protein: 7, fat: 10, calories: 120, na: 70, k: 110, p: 90 },
  '蔬菜類': { carbs: 5, protein: 1, fat: 0, calories: 25, na: 15, k: 200, p: 30 },
  '水果類': { carbs: 15, protein: 0, fat: 0, calories: 60, na: 2, k: 150, p: 15 },
  '油脂與堅果類': { carbs: 0, protein: 0, fat: 5, calories: 45, na: 1, k: 10, p: 5 },
  '外食類': { carbs: 20, protein: 5, fat: 10, calories: 190, na: 400, k: 150, p: 100 },
  '醬料類': { carbs: 5, protein: 0, fat: 0, calories: 20, na: 500, k: 50, p: 20 },
  '保健品': { carbs: 0, protein: 0, fat: 0, calories: 0, na: 0, k: 0, p: 0 }
};

export const MEALS = ['早餐', '早點', '午餐', '午點', '晚餐', '晚點'];
export const EXERCISE_TYPES = ['排球', '羽毛球', '爬山', '腳踏車', '游泳', '快走', '慢跑'];
export const ACTIVITY_FACTORS = ['無', '輕度', '中度', '重度'] as const;
export const INTERVENTION_CATEGORIES = ['低脂乳品類', '全脂乳品類', '全榖雜糧類', '低氮澱粉', '低脂豆魚蛋肉類', '中脂豆魚蛋肉類', '蔬菜類', '水果類', '油脂與堅果類'];
export const DIET_LOG_CATEGORIES = ['低脂奶類', '全脂奶類', '低脂豆魚蛋肉類', '中脂豆魚蛋肉類', '全穀雜糧類', '蔬菜類', '水果類', '油脂與堅果種子類', '外食類', '醬料類'];

export const BIO_RANGES: Record<string, { min?: number; max?: number; label: string }> = {
  HbA1c: { max: 5.7, label: '< 5.7' },
  UPCR: { max: 150, label: '< 150' },
  BUN: { min: 8, max: 26, label: '8-26' },
  Cr: { min: 0.6, max: 1.3, label: '0.6-1.3' },
  Na: { min: 136, max: 145, label: '136-145' },
  K: { min: 3.5, max: 5.1, label: '3.5-5.1' },
  TG: { max: 150, label: '< 150' },
  LDL: { max: 130, label: '< 130' },
  FPG: { min: 70, max: 100, label: '70-100' },
  eGFR: { min: 0, max: 100, label: '<13 | 15-29 | 30-44 | 45-59' },
  UricAcid: { min: 3.7, max: 7.7, label: '3.7-7.7' }
};

export const NUTRITION_EDUCATION_CONTENT: { [key: string]: string } = {
  '體重管理': `體重管理在現代預防醫學中佔據核心地位，其不僅是單一疾病的治療策略，更是糖尿病、高血壓及心血管疾病等代謝症候群的共同基礎。臨床營養教育的核心在於達成負能量平衡，即攝取的總熱量必須低於身體的總能量消耗量（TDEE）。研究顯示，有效的體重管理能顯著改善胰島素阻抗，並在肥胖合併糖尿病患者中，降低口服降血糖藥物的使用劑量 。

能量攝取目標與精準設定：
醫學建議以每週減輕 0.5 至 1 公斤為基準，短期目標應設定為在半年內減少原始體重的 5% 至 10% 。為達成此負平衡，每日能量攝取應較維持體重所需的量減少 500 至 750 大卡。針對性別差異，一般建議女性每日攝取 1,200 至 1,500 大卡，男性則為 1,500 至 1,800 大卡 。

行為修正技巧與認知重構：
減重成功的關鍵在於長期的行為修正，而非短期的飲食限制。營養教育應導入 SMART 原則，協助患者建立明確且可達成的行動計畫。此外，應鼓勵患者採用「朝向目標」（Approach goals）而非「避免目標」（Avoidance goals）。`,
  '糖尿病': `糖尿病營養教育的終極目標是藉由個別化的飲食計畫，將血糖、血脂與血壓維持在正常範圍內，從而預防或延緩視網膜病變、腎病變及神經病變等併發症 。

碳水化合物的質與量平衡：
糖尿病患者不須完全杜絕碳水化合物，關鍵在於「定時定量」與「選擇複雜醣類」 。衛教重點應放在識別高纖維、非加工的碳水化合物（如全穀類、豆類及新鮮水果），這些食物具有較低的升糖指數（GI），能有效減緩餐後血糖的上升速度 。

三少一多原則：
營養衛教應強調「三少一多」原則：少油、少鹽、少糖、多纖維 。少油飲食不僅有助於體重管理，更能降低低密度脂蛋白（LDL）與三酸甘油酯，減少心血管疾病風險。`,
  '腎臟病3a-3b': `對於尚未進入透析的慢性腎臟病（CKD 1-5 期）患者，教育核心在於「低蛋白飲食」與「電解質平衡」，旨在減輕腎臟過濾負擔，減少尿毒素產生 。

蛋白質攝取的階段性限制：
在 CKD 初期（第 1-3 期），應避免高蛋白餐食，建議每日攝取量為每公斤體重 0.8 至 1.0 公克 。進入第 3b 至 5 期後，必須轉向嚴格的低蛋白飲食（0.6-0.8 g/kg），且其中 50% 至 75% 應來自「高生理價值蛋白質」（如魚、肉、蛋、黃豆）。

低氮澱粉的概念：
教導患者使用冬粉、西谷米、粉圓、太白粉、玉米粉等幾乎不含蛋白質的主食來補足熱量，以避免因熱量攝取不足而導致身體組織分解。`,
  '末期腎臟病': `一旦患者進入血液透析（HD）或腹膜透析（PD），營養教育必須進行策略性轉向。透析患者面臨的是蛋白質的大量流失與代謝廢物的間歇性清除。

蛋白質流失的積極補償：
透析患者的蛋白質需求量提升至每公斤體重 1.2 至 1.4 公克。營養衛教應強調「高蛋白飲食」，並優先選擇高品質動物性蛋白或黃豆製品 。

液體與鹽分平衡：
血液透析患者的教育重點在於控制「兩次透析間的體重增加」，理想值應低於乾體重的 5% 。衛教技巧包括：使用有刻度的小量杯精確飲水；口渴時以稀釋檸檬水冰塊含服；嚴格限鈉以降低渴感。`,
  '血脂': `高血脂衛教的核心在於「降低低密度脂蛋白（LDL）」與「控制三酸甘油酯（TG）」。

脂肪酸品質與膽固醇管理：
應建議飽和脂肪攝取不超過總熱量的 7% 。避免：肥肉、豬皮、雞皮、牛油、豬油、椰子油、棕櫚油 。應選擇：富含單元不飽和脂肪酸（MUFA）的油脂，如橄欖油、芥花油、苦茶油，以及富含 Omega-3 的深海魚類。

反式脂肪與膳食纖維：
衛教應高度警覺「隱藏的反式脂肪」，這些常見於烘焙西點、炸薯條及植物性奶油中。高纖維飲食（每日 25-35 克）是自然的降脂藥，水溶性纖維能與腸道中的膽酸結合並排出。`,
  '血壓': `高血壓的營養衛教（如 DASH 飲食理念）側重於離子平衡與血管內皮保護。

鈉離子限制與隱性鹽分識別：
衛教應指導每日鈉攝取量低於 2,400 毫克（約 6 公克鹽）。除了烹調用鹽，應特別教育患者識別加工食品中的隱性鈉，例如蘇打餅乾、吐司、加工肉類、雞精及蜜餞 。

輔助性降壓營養素：
充足的鉀攝取有助於鈉的排泄並舒張血管。建議多食用新鮮蔬菜與水果。鎂與鈣參與血管舒縮，建議從低脂乳製品、全穀類與深綠色蔬菜中獲取 。`,
  '結石': `結石預防的營養教育常存在誤區。現代實證醫學強調的是「減少草酸」與「維持鈣質平衡」。

草酸與鈣的腸道螯合作用：
針對最常見的草酸鈣結石，營養衛教應強調「不宜限制鈣質攝取」。建議每日維持 1,000 至 1,200 毫克的鈣，讓鈣與草酸在腸道中結合形成不被吸收的草酸鈣結晶，直接從糞便排出。

尿液稀釋與酸鹼度調節：
多喝水是預防所有類型結石的黃金標準。衛教應要求每日飲水量達 2,000 至 3,000 毫升，確保尿量充足，稀釋尿中礦物質濃度 。特別是「睡前喝水」，能預防夜間尿液濃縮造成的結晶沉澱 。`,
  '痛風': `痛風衛教必須根據病程（急性發作期 vs. 慢性緩解期）進行精準調整。

急性發作期的極簡營養：
目標是「不增加血尿酸」。此時應採取「極低普林飲食」，蛋白質應完全由蛋、牛奶及其製品供給。此階段嚴格禁止減重，以免組織分解產生大量內源性尿酸。

慢性期與緩解期的預防策略：
避免高普林食物，如內臟類、部分海鮮、濃肉湯及雞精 。每日飲水應超過 3,000 毫升，以幫助尿酸溶解並排出。酒精與果糖會干擾尿酸排泄或加速尿酸產生，應強烈建議戒除。`
};
