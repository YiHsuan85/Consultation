 import { DiagnosisData, FoodItem, GuidelineData } from './types';

export const FOOD_DATABASE: FoodItem[] = [
  // 乳品類
  { name: '全脂牛奶 240 cc', category: '全脂乳品類', carbs: 12, protein: 8, fat: 8, kcal: 150, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '統一-營養強化高鈣牛乳 400ml', category: '全脂乳品類', carbs: 29.6, protein: 15.2, fat: 13.6, kcal: 301.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 252, k:'', p: ''},
  { name: '光泉-優質蛋白奶-無加糖燕麥 375ml', category: '全脂乳品類', carbs: 9.8, protein: 15, fat: 5.6, kcal: 149.6, fiber: 0, saturatedFat: 1.1, transFat: 0, cholesterol: 0, na: 150, k:'', p: ''},
  { name: '光泉-優質蛋白奶-杏仁堅果 375ml', category: '全脂乳品類', carbs: 22.9, protein: 14.2, fat: 9.8, kcal: 236.6, fiber: 0, saturatedFat: 1.5, transFat: 0, cholesterol: 0, na: 98, k:'', p: ''},
  { name: '統一-營養強化高鈣牛乳 400ml', category: '全脂乳品類', carbs: 29.6, protein: 15.2, fat: 13.6, kcal: 301.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 252, k:'', p: ''},
  { name: '光泉-優質蛋白牛乳 (巧克力口味) 400ml', category: '全脂乳品類', carbs: 28.4, protein: 20, fat: 2, kcal: 211.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 232, k:'', p: ''},
  { name: '福樂-超能蛋白營養牛乳(草莓口味) 375ml', category: '外食類', carbs: 27.8, protein: 21.8, fat: 1.1, kcal: 208, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 229.5, k:'', p: ''},
  { name: '福樂-超能蛋白營養牛乳(堅果可可口味) 375ml', category: '外食類', carbs: 24, protein: 21.4, fat: 2.6, kcal: 205, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 276.4, k:'', p: ''},
  { name: '林鳳營-全脂鮮乳 200ml', category: '全脂乳品類', carbs: 9.6, protein: 6.4, fat: 7.4, kcal: 131, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 90, k:'', p: ''},
  { name: '克寧-100%純生乳奶粉 (36g/份) ', category: '全脂乳品類', carbs: 15.1, protein: 8.5, fat: 9.2, kcal: 177, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 108, k:'', p: ''},
  { name: '克寧-100%純脫脂奶粉 (28g/份) ', category: '脫脂乳品類', carbs: 15.1, protein: 9.4, fat: 0.3, kcal: 101, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 109, k:'', p: ''},
  { name: '克寧-高鈣雙效(葡萄糖胺+Omega 3) 245ml ', category: '脫脂乳品類', carbs: 16.4, protein: 9.8, fat: 4.6, kcal: 146, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 108, k: 441, p: 262},
  { name: '克寧-UC-II優蛋白配方 (43g/包) 245ml', category: '保健品類', carbs: 24.3, protein: 12, fat: 2.3, kcal: 166, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 151, k:258, p: 280},
  { name: '克寧-穩均含鉻 (38g/份)200ml ', category: '保健品類', carbs: 20.7, protein: 8.8, fat: 1.8, kcal: 101, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 93, k:'', p: ''},
  { name: '安怡-優蛋白Ex 200ml ', category: '保健品類', carbs: 18.3, protein: 15, fat: 1.5, kcal: 145, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 70, k:380, p: 150},
  { name: '低脂起司片 2片', category: '低脂乳品類', carbs: 12, protein: 8, fat: 4, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '低脂牛奶 240 cc', category: '低脂乳品類', carbs: 12, protein: 8, fat: 4, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '優格 180g', category: '低脂乳品類', carbs: 32, protein: 8, fat: 4, kcal: 200, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '植物の優-鮮美橘瓣優格 200g', category: '低脂乳品類', carbs: 28.2, protein: 7, fat: 4.4, kcal: 180, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 56, k: '', p: '' },
  { name: '光泉 頂級優酪-莓果穀物脆片 200g', category: '低脂乳品類', carbs: 14.5, protein: 4.7, fat: 4.6, kcal: 119.1, fiber: 0, saturatedFat: 3, transFat: 0, cholesterol: 0, na: 101, k: 0, p: 0 },
  { name: '無糖優酪乳 200cc', category: '低脂乳品類', carbs: 27, protein: 8, fat: 4, kcal: 180, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '711 AB優洛乳（無加糖） 517ml', category: '低脂乳品類', carbs: 43.4, protein: 16, fat: 6.8, kcal: 298, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 268, k:'', p: ''},
  { name: '711 AB優洛乳（原味） 517ml', category: '低脂乳品類', carbs: 54.8, protein: 15.6, fat: 3.2, kcal: 310, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 268, k:'', p: ''},
  { name: '馬修嚴選-綜合莓優格百匯 125g', category: '低脂乳品類', carbs: 26.1, protein: 3.4, fat: 3.5, kcal: 150, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 70, k:'', p: ''},
  { name: '鮮乳坊 真優格-豐樂牧場鮮乳優格 450g', category: '低脂乳品類', carbs: 19.8, protein: 15.9, fat: 17.1, kcal: 296.1, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 170, k:'', p: ''},
  { name: '鮮乳坊 真優格-每日爽快 300g', category: '低脂乳品類', carbs: 27.7, protein: 9.3, fat: 11.4, kcal: 226.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 120, k:'', p: ''},
  
  // 低脂豆魚蛋肉類
  { name: '一般魚類 30g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '花枝 60g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '吻仔魚 80g（5湯匙）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '蚵仔 65g （3湯匙）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '劍蝦 4尾 （35g）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豬里肌肉片 30g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '雞胸肉 30g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '雞腿 40g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '牛腱 35g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豬肝 30g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豬心 45g', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '毛豆 50g (2湯匙）', category: '低脂豆魚蛋肉類', carbs: 5, protein: 7, fat: 3, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '黑豆 25g (2湯匙）', category: '低脂豆魚蛋肉類', carbs: 10, protein: 7, fat: 3, kcal: 95, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '干絲 40g ', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豆包 30g (2/3片）', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '麵腸 35g ', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '無糖豆漿 190cc', category: '低脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 3, kcal: 55, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '含糖豆漿 190cc', category: '低脂豆魚蛋肉類', carbs: 25, protein: 7, fat: 3, kcal: 155, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '統一-陽光無加糖超優蛋白豆漿(5.5超優) 375ml', category: '低脂豆魚蛋肉類', carbs: 12.8, protein: 20.6, fat: 11.6, kcal: 231, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 38, k:'', p: ''},
  { name: '統一-陽光無加糖高鮮豆漿 400ml', category: '低脂豆魚蛋肉類', carbs: 14, protein: 13.6, fat: 7.6, kcal: 162.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 88, k:'', p: ''},
  { name: '統一-陽光無加糖黑豆漿 400ml', category: '低脂豆魚蛋肉類', carbs: 6.8, protein: 15.2, fat: 8.4, kcal: 164, fiber: 0, saturatedFat: 1.6, transFat: 0, cholesterol: 0, na: 40, k:'', p: ''},
  { name: '光泉-燕麥高纖無加糖鮮豆漿 450ml', category: '低脂豆魚蛋肉類', carbs: 72, protein: 57.6, fat: 32.4, kcal: 738, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 648, k:'', p: ''},
  { name: '宜蘭有機豆漿 245ml', category: '低脂豆魚蛋肉類', carbs: 10, protein: 7.4, fat: 3.2, kcal: 98.2, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k:'', p: ''},
  { name: '羅董-特濃低糖台灣豆奶 245ml', category: '低脂豆魚蛋肉類', carbs: 8.8, protein: 8.6, fat: 3.9, kcal: 105, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k:'', p: ''},
  { name: '羅董-特濃無加糖台灣青仁黑豆奶 245ml', category: '低脂豆魚蛋肉類', carbs: 3.9, protein: 10.3, fat: 3.4, kcal: 88, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k:'', p: ''},
  { name: '魚丸（不包肉）55g', category: '低脂豆魚蛋肉類', carbs: 10, protein: 7, fat: 3, kcal: 95, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '牛肉乾 20g', category: '低脂豆魚蛋肉類', carbs: 5, protein: 7, fat: 3, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '火腿 45g', category: '低脂豆魚蛋肉類', carbs: 10, protein: 7, fat: 3, kcal: 95, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  
  // 中脂豆魚蛋肉類
  { name: '方形油豆腐 55g (2/3-1塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '板豆腐 80g (1/2塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '嫩豆腐 140g (半盒）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '黑豆乾 55g (1/3塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '中華花生豆花 150g (1盒）', category: '中脂豆魚蛋肉類', carbs: 18, protein: 2.4, fat: 1.5, kcal: 95, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 12, k: '', p: '' },
  { name: '中華水果豆花 150g (1盒）', category: '中脂豆魚蛋肉類', carbs: 18, protein: 2.1, fat: 1.1, kcal: 90, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 12, k: '', p: '' },
  { name: '義美厚豆花 160g (1盒）', category: '中脂豆魚蛋肉類', carbs: 13.2, protein: 5.8, fat: 3.8, kcal: 106, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 11.5, k: '', p: '' },
  { name: '小方豆乾 40g (1+1/3塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '五香豆乾 55g (2/3塊）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '肉魚 一隻(3份)', category: '中脂豆魚蛋肉類', carbs: 0, protein: 21, fat: 15, kcal: 225, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '虱目魚、鮭魚、烏魚 35g', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '魚肉鬆 25g', category: '中脂豆魚蛋肉類', carbs: 10, protein: 7, fat: 5, kcal: 135, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '雞翅、雞排 40g', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豬大排、豬小排 30g', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豬後腿肉、豬前腿肉 30g', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '羊肉、豬腳 30g', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '低脂培根 40g', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豆棗 60g', category: '中脂豆魚蛋肉類', carbs: 35, protein: 7, fat: 5, kcal: 215, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '雞蛋 55g (1顆）', category: '中脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 5, kcal: 75, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '花枝丸、虱目魚丸 50g', category: '中脂豆魚蛋肉類', carbs: 7, protein: 7, fat: 5, kcal: 103, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '21Plus 藜麥毛豆嫩雞丁 100g/包', category: '中脂豆魚蛋肉類', carbs: 10.6, protein: 11.3, fat: 8.2, kcal: 161, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 464, k: '', p: '' },
  
  // 高脂豆魚蛋肉類
  { name: '素火腿片 55g (4薄片）', category: '高脂豆魚蛋肉類', carbs: 4, protein: 7, fat: 8.5, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '素火腿丁 55g (4湯匙）', category: '高脂豆魚蛋肉類', carbs: 4, protein: 7, fat: 8.5, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '百頁豆腐 70g', category: '高脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 10, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '秋刀魚 35g', category: '高脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 10, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '香腸、臘肉 40g', category: '高脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 10, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '熱狗、五花肉 50g', category: '高脂豆魚蛋肉類', carbs: 0, protein: 7, fat: 10, kcal: 120, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  
  // 全榖雜糧類
  { name: '白飯 40g(1/4碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '稀飯 125g(半碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },  
  { name: '熟麵條 60g(1/2碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '鮮味關廟麵 100g (1捆/份)', category: '全榖雜糧類', carbs: 33.6, protein: 6.8, fat: 11.3, kcal: 262.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1210, k: '', p: '' },
  { name: '米粉 30-50g(1/4碗)', category: '全榖雜糧類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '冬粉 1/4碗', category: '全榖雜糧類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '地瓜 (小 1/2個)', category: '全榖雜糧類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '帶梗玉米 140g (2/3根)', category: '全榖雜糧類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '玉米粒 85g (5湯匙)', category: '全榖雜糧類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '南瓜 85g(1/4碗)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1.3, k: 402.5, p: 43.4 },
  { name: '菱角 8顆', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '綠豆 25g(熟3湯匙)', category: '全榖雜糧類', carbs: 15, protein: 5, fat: 0, kcal: 80, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '鷹嘴豆 25g(熟2湯匙)', category: '全榖雜糧類', carbs: 15, protein: 5, fat: 0, kcal: 91, fiber: 3.1, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: 146.5, p: '' },
  { name: '帶殼栗子 50g (4顆)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '薄片吐司 1片', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '厚片吐司 1片', category: '全榖雜糧類', carbs: 30, protein: 4, fat: 0, kcal: 140, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '市售饅頭 1顆', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豆舖子-無加糖豆漿饅頭 1顆(122g)', category: '全榖雜糧類', carbs: 55.8, protein: 9.7, fat: 1, kcal: 271, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 135, k: '', p: '' },
  { name: '豆舖子-黑糖饅頭 1顆(132g)', category: '全榖雜糧類', carbs: 62, protein: 8.7, fat: 0.9, kcal: 290.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2.5, k: '', p: '' },
  { name: '豆舖子-豆漿芝麻流沙包 1顆(136g)', category: '全榖雜糧類', carbs: 62.3, protein: 11.5, fat: 11, kcal: 394.2, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 5.9, k: '', p: '' },
  { name: '豆舖子-芋頭泥包 1顆(132g)', category: '全榖雜糧類', carbs: 55.2, protein: 7.4, fat: 5.5, kcal: 299.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 25.1, k: '', p: '' },
  { name: '豆舖子-豆漿黑芝麻紅豆包 1顆(122g)', category: '全榖雜糧類', carbs: 53.7, protein: 10.2, fat: 4.6, kcal: 297, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 9.7, k: '', p: '' },
  { name: '豆舖子-竹筍鮮肉包 1顆(132g)', category: '全榖雜糧類', carbs: 62, protein: 8.7, fat: 0.9, kcal: 290.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 262.4, k: '', p: '' },
  { name: '豆舖子-鮮肉包 1顆(120g)', category: '全榖雜糧類', carbs: 37.2, protein: 10.7, fat: 7.9, kcal: 262.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 238.2, k: '', p: '' },
  { name: '豆舖子-蔥花捲 1顆(114g)', category: '全榖雜糧類', carbs: 54.2, protein: 8.9, fat: 3.4, kcal: 283, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 198, k: '', p: '' },
  { name: '蓮藕粉 20g (2湯匙)', category: '全榖雜糧類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '五穀粉 20g (2湯匙)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '薏仁粉 20g (2湯匙)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '羅董-五穀飲 245ml', category: '全榖雜糧類', carbs: 21.8, protein: 2, fat: 1.47, kcal: 108, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '羅董-有機糙米奶 245ml', category: '全榖雜糧類', carbs: 17.2, protein: 1.2, fat: 0, kcal: 73.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '愛之味-純濃燕麥 340ml (1瓶) ', category: '油脂與堅果類', carbs: 28.2, protein: 4.8, fat: 3.4, kcal: 153.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 68, k: 105.4, p: '' },
  { name: '桂格-減糖黑十穀 38g (1包) ', category: '油脂與堅果類', carbs: 28, protein: 2.3, fat: 5.5, kcal: 166, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 45, k:'' , p: '' },
  { name: '燕麥片 20g (3湯匙)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '桂格-即沖即食大燕麥片 37.5g（1湯匙）', category: '全榖雜糧類', carbs: 25.3, protein:4.9 , fat: 3, kcal: 140, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2, k:'', p: ''},
  { name: '紅白小湯圓 (2湯匙)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '波霸粉圓 (2湯匙)', category: '全榖雜糧類', carbs: 15, protein: 2, fat: 0, kcal: 70, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  
  // 蔬菜類
  { name: '蔬菜100g(半碗)', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '胡瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 24.4, k: 838, p: 111.1 },
  { name: '絲瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1.7, k: 626.6, p: 115.1 },
  { name: '白玉苦瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 17.1, k: 1065.6, p: 162.3 },
  { name: '青苦瓜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 20.2, k: 1208, p: 120.3 },
  { name: '高麗菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 45.4, k: 805.9, p: 130.9 },
  { name: '花椰菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 61.9, k: 1146.1, p: 173.7 },
  { name: '茼蒿', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 438.9, k: 2300.6, p: 139.6 },
  { name: '白蘿蔔', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 262.4, k: 708.2, p: 95.9 },
  { name: '紅蘿蔔', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 232, k: 513.1, p: 75 },
  { name: '皎白筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 24.5, k: 1070.9, p: 186.5 },
  { name: '玉米筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 656.9, p: 133.4 },
  { name: '綠竹筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 5.5, k: 932.9, p: 151.5 },
  { name: '蘆筍', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 19.7, k: 1208.4, p: 236.9 },
  { name: '紅莧菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 56.4, k: 2017.3, p: 207.1 },
  { name: '菠菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 242.9, k: 2851.1, p: 246.3 },
  { name: '油菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 182.5, k: 3417.6, p: 196.3 },
  { name: '小白菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1052.4, k: 1050.1, p: 229.7 },
  { name: '青江菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 719.7, k: 1122.8, p: 322.3 },
  { name: '空心菜', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 768.5, k: 390.4, p: 112 },
  { name: '地瓜葉', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 141.1, k: 1441.8, p: 156.6 },
  { name: '金針菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 6.4, k: 1031.9, p: 241.8 },
  { name: '洋菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 74.7, k: 1338.5, p: 321.2 },
  { name: '草菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 7.9, k: 1150.3, p: 289.2 },
  { name: '香菇', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 3.8, k: 719.5, p: 218.2 },
  { name: '海帶', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1133.4, k: 33.7, p: 56.2 },
  { name: '木耳', category: '蔬菜類', carbs: 5, protein: 1, fat: 0, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 32.1, k: 147.4, p: 60 },
  
 // 水果類
  { name: '水果一份', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '紅西瓜（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2.6, k: 223.3, p: 21.5 },
  { name: '黃西瓜（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 3.3, k: 203.9, p: 20.2 },
  { name: '木瓜（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 5.3, k: 292.7, p: 17 },
  { name: '美濃香瓜（2/3顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 13.6, k: 550.7, p: 31.4 },
  { name: '愛文芒果（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2.1, k: 150.3, p: 16.7 },
  { name: '鳳梨6塊（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 184.9, p: 12.2 },
  { name: '白肉芭樂（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2.2, k: 240.7, p: 19.8 },
  { name: '奇異果（1.5顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2.9, k: 310, p: 32.2 },
  { name: '黃金奇異果（1.5顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2, k: 256.2, p: 23.2 },
  { name: '蓮霧1.5-2個（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2.9, k: 139.1, p: 11.9 },
  { name: '富士蘋果1顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 4.2, k: 138.4, p: 11.6 },
  { name: '柳丁1顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 7.3, k: 200.2, p: 28.7 },
  { name: '香蕉半根（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 259.5, p: 16.5 },
  { name: '聖女蕃茄13-15顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 16.9, k: 354.7, p: 46 },
  { name: '綠葡萄13顆（8分滿）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 3.8, k: 155, p: 20.2 },
  { name: '草莓16顆', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 10.5, k: 308, p: 35.5 },
  { name: '荔枝100g(9顆)', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1.1, k: 170.5, p: 22.9 },
  { name: '楊桃170g (3/4顆)', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0.6, k: 284.6, p: 17.3 },
  { name: '水蜜桃145g (1顆）', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2.9, k: 312.3, p: 32.5 },
  { name: '文旦', category: '水果類', carbs: 15, protein: 0, fat: 0, kcal: 60, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0.8, k: 250, p: 26.3 },
  
  // 油脂與堅果類
  { name: '植物油5g(1/3湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '豬油6g(1/3湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '去殼花生15g(1湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '黑（白）芝麻 10g(2茶匙)', category: '油脂與堅果類', carbs: 0, protein: 1, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '芝初 純黑芝麻醬 10g', category: '油脂與堅果類', carbs: 1.4, protein: 2.2, fat: 5.9, kcal: 67.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1, k: '', p: '' },
  { name: '純黑芝麻醬 20g', category: '油脂與堅果類', carbs: 3.2, protein: 4.3, fat: 11.5, kcal: 131.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '馬玉山-特濃核桃黑芝麻糊 37g (1包) ', category: '油脂與堅果類', carbs: 25.8, protein: 4.6, fat: 4.8, kcal: 158, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 3, k: 92, p: '' },
  { name: '南瓜子 30粒(1+1/3湯匙)', category: '油脂與堅果類', carbs: 0, protein: 2, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '西瓜子 50粒(2湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '開心果 11粒(1.5湯匙)', category: '油脂與堅果類', carbs: 0, protein: 2, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '杏仁果 5粒(1/3湯匙)', category: '油脂與堅果類', carbs: 0, protein: 2, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '腰果 5粒(1/3湯匙)', category: '油脂與堅果類', carbs: 0, protein: 2, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: 'Costco 科克蘭 無調味綜合堅果 9g (1/3湯匙) ', category: '油脂與堅果類', carbs: 2, protein: 1.6, fat: 5, kcal: 58.2, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0.3, k: '', p: '' },
  { name: 'Costco FRUIT&SEED 果乾葵花籽綜合點心 17g (1-1.5湯匙) ', category: '油脂與堅果類', carbs: 4.5, protein: 1.4, fat: 5, kcal: 68.6, na: 0.5, k: '', p: '' },
  { name: '花生醬9g(1湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '美乃滋10g(2/3湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '芝麻醬(1/2湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '沙茶醬(1/2湯匙)', category: '油脂與堅果類', carbs: 0, protein: 0, fat: 5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },


// 外食類
  { name: '統一木瓜牛奶 478cc', category: '外食類', carbs: 47.3, protein: 9.1, fat: 8.6, kcal: 303, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 277, k: '', p: '' },
  { name: '統一 純喫茶紅茶 650cc', category: '外食類', carbs: 71.2, protein: 0, fat: 0, kcal: 284, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 136, k: '', p: '' },
  { name: '統一 純喫茶檸檬紅茶 650cc', category: '外食類', carbs: 57.2, protein: 0, fat: 0, kcal: 228, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 46, k: '', p: '' },
  { name: '統一 純喫茶無糖綠茶 650cc', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 254, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 46, k: '', p: '' },
  { name: '統一 純喫茶檸檬綠茶 650cc', category: '外食類', carbs: 65, protein: 0, fat: 0, kcal: 260, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 52, k: '', p: '' },
  { name: '統一 純喫茶烏龍青茶 650cc', category: '外食類', carbs: 26.6, protein: 0, fat: 0, kcal: 106.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 32, k: '', p: '' },
  { name: '統一 純喫茶芭樂綠茶 650cc', category: '外食類', carbs: 66.4, protein: 0, fat: 0, kcal: 266, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 52, k: '', p: '' },
  { name: '統一 純喫茶香橙綠茶 650cc', category: '外食類', carbs: 63.6, protein: 0, fat: 0, kcal: 254, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 46, k: '', p: '' },
  { name: '統一 純喫茶青檸綠茶 650cc', category: '外食類', carbs: 63, protein: 0, fat: 0, kcal: 252, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 52, k: '', p: '' },
  { name: '純在 芒果甘露 400cc', category: '外食類', carbs: 45.1, protein: 0.7, fat: 0.4, kcal: 184.5, fiber: 0, saturatedFat: 0.3, transFat: 0, cholesterol: 0, na: 8, k: '', p: '' },
  { name: '純在 西瓜烏龍 400cc', category: '外食類', carbs: 36.1, protein: 0.8, fat: 0, kcal: 129.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0.4, k: '', p: '' },
  { name: '聖德科斯 綠暢活蔬果汁 280cc', category: '外食類', carbs: 33.6, protein: 1.4, fat: 0.3, kcal: 142.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 7, k: '', p: '' },
  { name: '聖德科斯 紫亮采蔬果汁 280cc', category: '外食類', carbs: 39.2, protein: 2, fat: 0.3, kcal: 167.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 16.8, k: '', p: '' },
  { name: '蘿蔔糕(香菇蝦米) (1塊)', category: '外食類', carbs: 18.8, protein: 2.5, fat: 2.8, kcal: 110, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k: '', p: '' },
  { name: '柳橙汁(100%)', category: '外食類', carbs: 10.7, protein: 0.6, fat: 0.3, kcal: 48, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 7.8, k: 179.9, p: 12.4 },
  { name: '蘋果汁(100%)', category: '外食類', carbs: 12.2, protein: 0.1, fat: 0.2, kcal: 51, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1.3, k: 96.2, p: 6.5 },
  { name: '享活-雪銀耳露 350ml', category: '外食類', carbs: 15.4, protein: 0, fat: 0, kcal: 61.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 35, k: 0, p: 0 },
  { name: '享活-黑木耳露 350ml', category: '外食類', carbs: 19.6, protein: 0, fat: 0, kcal: 81.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '泰山-紫米紅豆湯 330g', category: '外食類', carbs: 59.7, protein: 10.6, fat: 1.3, kcal: 293, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 40, k: 0, p: 0 },
  { name: '泰山-仙草蜜 330g', category: '外食類', carbs: 25, protein: 0, fat: 0, kcal: 100, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 139, k: 0, p: 0 },
  { name: '泰山-花生仁湯 320g', category: '外食類', carbs: 46.7, protein: 7.4, fat: 12.2, kcal: 326, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 114.6, k: 0, p: 0 },
  { name: '泰山-八寶粥 375g', category: '外食類', carbs: 60.4, protein: 6, fat: 0.4, kcal: 269, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 57, k: 0, p: 0 },
  { name: '愛之味-牛奶花生 340g', category: '外食類', carbs: 16.7, protein: 6.5, fat: 12.8, kcal: 280, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 56, k: 0, p: 0 },
  { name: '大茂-大土豆麵筋易開 170g', category: '外食類', carbs: 4, protein: 4, fat: 5, kcal: 71, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 185, k: 0, p: 0 },
  { name: '仙草蜜', category: '外食類', carbs: 8.8, protein: 0, fat: 0, kcal: 35, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 48, k: 15, p: 1 },
  { name: '麥茶', category: '外食類', carbs: 4.4, protein: 0, fat: 0, kcal: 18, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 18, k: 8.9, p: 5.9 },
  { name: '可樂', category: '外食類', carbs: 12.8, protein: 0, fat: 0, kcal: 51, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 6.6, k: 0, p: 15.8 },
  { name: '可樂(低熱量)', category: '外食類', carbs: 0.3, protein: 0, fat: 0, kcal: 1, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 9.6, k: 0, p: 7.9 },
  { name: '美式咖啡(無糖)', category: '外食類', carbs: 0.3, protein: 0.2, fat: 0.1, kcal: 3, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1.7, k: 62.1, p: 4 },
  { name: '拿鐵咖啡(無糖)', category: '外食類', carbs: 3.4, protein: 3, fat: 2, kcal: 44, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 28.3, k: 176.1, p: 81.2 },
  { name: '咖啡(三合一)', category: '外食類', carbs: 8.2, protein: 0.9, fat: 0.4, kcal: 40, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 25.1, k: 75, p: 20.8 },
  { name: '鮮奶茶(無糖)', category: '外食類', carbs: 1.4, protein: 2, fat: 1.4, kcal: 26, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 11.9, k: 61.6, p: 27.7 },
  { name: '奶茶(三合一)', category: '外食類', carbs: 9.5, protein: 0.5, fat: 0.3, kcal: 43, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 18, k: 34.7, p: 18.1 },
  { name: '桂格5-白銀耳薏仁榖飲 280ml', category: '外食類', carbs: 15.1, protein: 3.1, fat: 3.1, kcal: 95.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 14, k: 0, p: 0 },
  { name: '桂格5-黑芝麻多榖飲 280ml', category: '外食類', carbs: 17.9, protein: 3.6, fat: 4.5, kcal: 121.5, fiber: 2.5, saturatedFat: 0.8, transFat: 0, cholesterol: 0, na: 14, k: 0, p: 0 },
  { name: '桂格5-燕麥堅果飲 280ml', category: '外食類', carbs: 20.6, protein: 3.5, fat: 3.2, kcal: 121, fiber: 2.3, saturatedFat: 0.6, transFat: 0, cholesterol: 0, na: 12, k: 0, p: 0  },
  { name: '桂格5-喝的燕麥飲 280ml', category: '外食類', carbs: 22.9, protein: 3.8, fat: 3.2, kcal: 129.2, fiber: 3.2, saturatedFat: 0.6, transFat: 0, cholesterol: 0, na: 41, k: 0, p: 0  },
  { name: '桂格5-豆漿燕麥飲 290ml', category: '外食類', carbs: 14.5, protein: 6.1, fat: 4.4, kcal: 117, fiber: 2.6, saturatedFat: 0.6, transFat: 0, cholesterol: 0, na: 14, k: 0, p: 0  },
  { name: '新養樂多活菌發酵乳', category: '外食類', carbs: 17, protein: 1.6, fat: 0, kcal: 64.3, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 18, k: 34.7, p: 18.1 },
  { name: '統一杏仁茶 450ml', category: '外食類', carbs: 37.8, protein: 2.7, fat: 6.3, kcal: 219, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 68, k:'', p: ''},
  { name: '711聖德科斯芭樂檸檬汁280ml', category: '外食類', carbs: 33.6, protein: 0.6, fat: 0.3, kcal: 137.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 16, k: '', p: '' },
  { name: '711皇家醇濃伯爵紅茶拿鐵 360ml(中杯)', category: '外食類', carbs: 42.7, protein: 0, fat: 0, kcal: 365.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711皇家醇濃伯爵紅茶拿鐵 480ml(大杯)', category: '外食類', carbs: 44.3, protein: 0, fat: 0, kcal: 435.1, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711日本靜岡濃抹茶拿鐵 360ml(中杯)', category: '外食類', carbs: 34.8, protein: 0, fat: 0, kcal: 378.2, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711日本靜岡濃抹茶拿鐵 480ml(大杯)', category: '外食類', carbs: 38.6, protein: 0, fat: 0, kcal: 465.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711特選美式咖啡 480ml(大杯)', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 17.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711濃萃美式咖啡 480ml(大杯)', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 25.1, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711濃萃美式咖啡 655ml(特大杯)', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 31.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711濃萃拿鐵咖啡 480ml(冰大杯)', category: '外食類', carbs: 11.4, protein: 0, fat: 0, kcal: 186, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711濃萃拿鐵咖啡 480ml(熱大杯)', category: '外食類', carbs: 16.4, protein: 0, fat: 0, kcal: 244.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711濃萃拿鐵咖啡 655ml(冰特大杯)', category: '外食類', carbs: 15.2, protein: 0, fat: 0, kcal: 220.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '711濃萃拿鐵咖啡 655ml(熱特大杯)', category: '外食類', carbs: 23.7, protein: 0, fat: 0, kcal: 313.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-茉莉綠茶 (中杯)', category: '外食類', carbs: 28, protein: 0, fat: 0, kcal: 119, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-茉莉綠茶 (大杯)', category: '外食類', carbs: 40, protein: 0, fat: 0, kcal: 170, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-檸檬綠 (中杯)', category: '外食類', carbs: 34, protein: 0, fat: 0, kcal: 154, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-檸檬綠 (大杯)', category: '外食類', carbs: 48, protein: 0, fat: 0, kcal: 217, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-梅の綠 (中杯)', category: '外食類', carbs: 65, protein: 0, fat: 0, kcal: 276, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-梅の綠 (大杯)', category: '外食類', carbs: 93, protein: 0, fat: 0, kcal: 395, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-桔子綠 (中杯)', category: '外食類', carbs: 34, protein: 0, fat: 0, kcal: 155, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-桔子綠 (大杯)', category: '外食類', carbs: 48, protein: 0, fat: 0, kcal: 218, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-8冰綠 (中杯)', category: '外食類', carbs: 42, protein: 0, fat: 0, kcal: 186, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-8冰綠 (大杯)', category: '外食類', carbs: 67, protein: 0, fat: 0, kcal: 291, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-養樂多綠 (中杯)', category: '外食類', carbs: 53, protein: 0, fat: 0, kcal: 230, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-養樂多綠 (大杯)', category: '外食類', carbs: 73, protein: 0, fat: 0, kcal: 318, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-旺來紅 (中杯)', category: '外食類', carbs: 53, protein: 0, fat: 0, kcal: 228, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-旺來紅 (大杯)', category: '外食類', carbs: 75, protein: 0, fat: 0, kcal: 326, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-麵茶紅／烏龍/綠茶 (中杯)', category: '外食類', carbs: 42, protein: 0, fat: 0, kcal: 265, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-麵茶紅／烏龍/綠茶 (大杯)', category: '外食類', carbs: 61, protein: 0, fat: 0, kcal: 388, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-奶茶/奶綠 (中杯)', category: '外食類', carbs: 32, protein: 0, fat: 0, kcal: 372, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-奶茶/奶綠 (大杯)', category: '外食類', carbs: 46, protein: 0, fat: 0, kcal: 532, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-紅茶瑪奇朵 (中杯)', category: '外食類', carbs: 42, protein: 0, fat: 0, kcal: 452, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-紅茶瑪奇朵 (大杯)', category: '外食類', carbs: 60, protein: 0, fat: 0, kcal: 636, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-四季奶青 (中杯)', category: '外食類', carbs: 32, protein: 0, fat: 0, kcal: 372, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-四季奶青 (大杯)', category: '外食類', carbs: 46, protein: 0, fat: 0, kcal: 532, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-阿華田 (中杯)', category: '外食類', carbs: 33, protein: 0, fat: 0, kcal: 359, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-阿華田 (大杯)', category: '外食類', carbs: 47, protein: 0, fat: 0, kcal: 512, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-檸檬汁 (中杯)', category: '外食類', carbs: 34, protein: 0, fat: 0, kcal: 161, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-檸檬汁 (大杯)', category: '外食類', carbs: 48, protein: 0, fat: 0, kcal: 228, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-金桔檸檬 (中杯)', category: '外食類', carbs: 34, protein: 0, fat: 0, kcal: 161, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-金桔檸檬 (大杯)', category: '外食類', carbs: 48, protein: 0, fat: 0, kcal: 227, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '50嵐-檸檬梅汁（中杯）', category: '外食類', carbs: 55, protein: 0, fat: 0, kcal: 239, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-檸檬梅汁（大杯）', category: '外食類', carbs: 77, protein: 0, fat: 0, kcal: 338, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-檸檬養樂多（中杯）', category: '外食類', carbs: 77, protein: 0, fat: 0, kcal: 357, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-檸檬養樂多（大杯）', category: '外食類', carbs: 106, protein: 0, fat: 0, kcal: 490, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-8冰茶（中杯）', category: '外食類', carbs: 43, protein: 0, fat: 0, kcal: 187, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-8冰茶（大杯）', category: '外食類', carbs: 67, protein: 0, fat: 0, kcal: 291, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-鮮柚汁（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 158, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-鮮柚汁（大杯）', category: '外食類', carbs: 51, protein: 0, fat: 0, kcal: 226, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-葡萄柚多多（中杯）', category: '外食類', carbs: 61, protein: 0, fat: 0, kcal: 269, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-葡萄柚多多（大杯）', category: '外食類', carbs: 84, protein: 0, fat: 0, kcal: 374, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-柚子茶（中杯）', category: '外食類', carbs: 37, protein: 0, fat: 0, kcal: 214, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-柚子茶（大杯）', category: '外食類', carbs: 53, protein: 0, fat: 0, kcal: 301, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-冰淇淋紅茶（中杯）', category: '外食類', carbs: 39, protein: 0, fat: 0, kcal: 244, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-冰淇淋紅茶（大杯）', category: '外食類', carbs: 67, protein: 0, fat: 0, kcal: 436, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-冰淇淋綠茶（中杯）', category: '外食類', carbs: 39, protein: 0, fat: 0, kcal: 244, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-冰淇淋綠茶（大杯）', category: '外食類', carbs: 67, protein: 0, fat: 0, kcal: 436, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-芒果青（中杯）', category: '外食類', carbs: 41, protein: 0, fat: 0, kcal: 185, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-芒果青（大杯）', category: '外食類', carbs: 70, protein: 0, fat: 0, kcal: 319, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-荔枝烏龍（中杯）', category: '外食類', carbs: 39, protein: 0, fat: 0, kcal: 178, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-荔枝烏龍（大杯）', category: '外食類', carbs: 66, protein: 0, fat: 0, kcal: 304, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-重焙烏龍拿鐵（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 235, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-重焙烏龍拿鐵（大杯）', category: '外食類', carbs: 51, protein: 0, fat: 0, kcal: 334, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-紅茶拿鐵（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 235, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-紅茶拿鐵（大杯）', category: '外食類', carbs: 51, protein: 0, fat: 0, kcal: 334, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-綠茶拿鐵（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 235, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-綠茶拿鐵（大杯）', category: '外食類', carbs: 51, protein: 0, fat: 0, kcal: 334, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-四季拿鐵（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 235, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-四季拿鐵（大杯）', category: '外食類', carbs: 51, protein: 0, fat: 0, kcal: 334, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-黃金烏龍拿鐵（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 235, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-黃金烏龍拿鐵（大杯）', category: '外食類', carbs: 51, protein: 0, fat: 0, kcal: 334, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-阿華田拿鐵（中杯）', category: '外食類', carbs: 38, protein: 0, fat: 0, kcal: 301, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-阿華田拿鐵（大杯）', category: '外食類', carbs: 54, protein: 0, fat: 0, kcal: 428, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-麵茶拿鐵（中杯）', category: '外食類', carbs: 49, protein: 0, fat: 0, kcal: 367, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-麵茶拿鐵（大杯）', category: '外食類', carbs: 70, protein: 0, fat: 0, kcal: 524, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-紅茶／綠茶／四季（奶茶）（中杯）', category: '外食類', carbs: 49, protein: 0, fat: 0, kcal: 367, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-紅茶／綠茶／四季（奶茶）（大杯）', category: '外食類', carbs: 70, protein: 0, fat: 0, kcal: 524, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-黃金烏龍／重焙（奶茶）（中杯）', category: '外食類', carbs: 49, protein: 0, fat: 0, kcal: 367, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-黃金烏龍／重焙（奶茶）（大杯）', category: '外食類', carbs: 70, protein: 0, fat: 0, kcal: 524, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-50嵐一號（四季春+珍波椰）（中杯）', category: '外食類', carbs: 46, protein: 0, fat: 0, kcal: 291, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-50嵐一號（四季春+珍波椰）（大杯）', category: '外食類', carbs: 65, protein: 0, fat: 0, kcal: 413, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '波50嵐-霸紅茶／綠茶（中杯）', category: '外食類', carbs: 35, protein: 0, fat: 0, kcal: 299, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-波霸紅茶／綠茶（大杯）', category: '外食類', carbs: 49, protein: 0, fat: 0, kcal: 424, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-珍珠青茶／烏龍（中杯）', category: '外食類', carbs: 35, protein: 0, fat: 0, kcal: 292, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-珍珠青茶／烏龍（大杯）', category: '外食類', carbs: 49, protein: 0, fat: 0, kcal: 414, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-波霸奶茶／奶綠（中杯）', category: '外食類', carbs: 37, protein: 0, fat: 0, kcal: 480, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-波霸奶茶／奶綠（大杯）', category: '外食類', carbs: 53, protein: 0, fat: 0, kcal: 678, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-波霸烏龍奶茶（中杯）', category: '外食類', carbs: 37, protein: 0, fat: 0, kcal: 450, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-波霸烏龍奶茶（大杯）', category: '外食類', carbs: 52, protein: 0, fat: 0, kcal: 635, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-珍珠奶茶／奶綠（中杯）', category: '外食類', carbs: 38, protein: 0, fat: 0, kcal: 473, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-珍珠奶茶／奶綠（大杯）', category: '外食類', carbs: 53, protein: 0, fat: 0, kcal: 668, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-珍珠烏龍奶茶（中杯）', category: '外食類', carbs: 37, protein: 0, fat: 0, kcal: 443, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-珍珠烏龍奶茶（大杯）', category: '外食類', carbs: 53, protein: 0, fat: 0, kcal: 626, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-椰果奶茶（中杯）', category: '外食類', carbs: 72, protein: 0, fat: 0, kcal: 464, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-椰果奶茶（大杯）', category: '外食類', carbs: 102, protein: 0, fat: 0, kcal: 655, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-布丁奶茶／奶綠（中杯）', category: '外食類', carbs: 39, protein: 0, fat: 0, kcal: 376, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-布丁奶茶／奶綠（大杯）', category: '外食類', carbs: 64, protein: 0, fat: 0, kcal: 592, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-布丁紅茶／綠茶（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 195, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-布丁紅茶／綠茶（大杯）', category: '外食類', carbs: 60, protein: 0, fat: 0, kcal: 339, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-布丁青茶／烏龍（中杯）', category: '外食類', carbs: 36, protein: 0, fat: 0, kcal: 195, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '50嵐-布丁青茶／烏龍（大杯）', category: '外食類', carbs: 60, protein: 0, fat: 0, kcal: 339, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-奶蓋', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 203, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-西米露（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 165, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-粉粿（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 165, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-珍珠波霸（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 156, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-蜜地瓜／芋頭（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 150, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-蜜糖紅豆（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 140, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-包餡湯圓（2顆）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 140, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-小湯圓（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 130, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-粉條（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 131, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-芋圓（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 128, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-OREO脆片（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 116, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-布丁（1顆）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 110, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-椰果（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 76, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-蒟蒻（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 71, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-仙草凍（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 57, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-愛玉（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-寒天（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 42, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '加料-蘆薈（60g）', category: '飲料加料', carbs: 0, protein: 0, fat: 0, kcal: 31, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
 
  { name: '蛋塔', category: '外食類', carbs: 41.1, protein: 4.1, fat: 21.7, kcal: 376, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 85.4, k: 116.3, p: 153.7 },
  { name: '蛋塔(葡式)', category: '外食類', carbs: 31.9, protein: 3.7, fat: 25.8, kcal: 375, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 119.2, k: 96.2, p: 174.4 },
  { name: '鬆餅', category: '外食類', carbs: 55.1, protein: 3.2, fat: 2.6, kcal: 257, na: 227.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, k: 142.2, p: 211.9 },
  { name: '乳酪蛋糕', category: '外食類', carbs: 19.1, protein: 7, fat: 21.3, kcal: 296, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 153, k: 133.1, p: 138.8 },
  { name: '傳統豆花(未加糖)', category: '外食類', carbs: 2.1, protein: 3.2, fat: 1.9, kcal: 38, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 22, k: 123, p: 39 },
  { name: '蛋捲(芝麻)', category: '外食類', carbs: 55.5, protein: 6.8, fat: 33.3, kcal: 549, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 225, k: 114, p: 163 },
  { name: '煎餅', category: '外食類', carbs: 78.3, protein: 6.3, fat: 11.7, kcal: 444, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 162, k: 157, p: 115 },
  { name: '蘇打餅乾(蔬菜)', category: '外食類', carbs: 64.5, protein: 7.8, fat: 24.7, kcal: 512, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 388, k: 141, p: 93 },
  { name: '廣東粥', category: '外食類', carbs: 9.1, protein: 4.9, fat: 2.8, kcal: 81, na: 271, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, k: 53, p: 40 },
  { name: '冷凍火腿炒飯', category: '外食類', carbs: 29.7, protein: 5, fat: 5.6, kcal: 189, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 220, k: 57, p: 62 },
  { name: '冷凍蝦仁炒飯', category: '外食類', carbs: 24.6, protein: 4.7, fat: 3.4, kcal: 148, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 222, k: 44, p: 44 },
  { name: '豬血糕', category: '外食類', carbs: 37.8, protein: 8.6, fat: 0.9, kcal: 194, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 414, k: 83, p: 69 },
  { name: '清蒸蝦仁肉圓', category: '外食類', carbs: 16.7, protein: 4.6, fat: 7.4, kcal: 152, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 429, k: 58, p: 31 },
  { name: '冷凍芝麻湯圓', category: '外食類', carbs: 46.7, protein: 4.8, fat: 16.3, kcal: 353, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 3, k: 45, p: 398 },
  { name: '冷凍花生湯圓', category: '外食類', carbs: 47.1, protein: 5.2, fat: 15.6, kcal: 350, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 6, k: 55, p: 279 },
  { name: '白饅頭', category: '外食類', carbs: 51.3, protein: 8.1, fat: 1.2, kcal: 248, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 182, k: 66, p: 58 },
  { name: '肉包 126g/顆', category: '外食類', carbs: 48.6, protein: 11.3, fat: 4.7, kcal: 286, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '蔥油餅', category: '外食類', carbs: 46.9, protein: 8.3, fat: 9.3, kcal: 305, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 257, k: 63, p: 41 },
  { name: '燒餅', category: '外食類', carbs: 51.1, protein: 9.1, fat: 9.1, kcal: 323, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 458, k: 81, p: 65 },
  { name: '韭菜盒子', category: '外食類', carbs: 19.5, protein: 7.5, fat: 12.1, kcal: 217, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 287, k: 180, p: 66 },
  { name: '豆鋪子-蔥肉餡餅 1個(100g)', category: '外食類', carbs: 21.5, protein: 8.9, fat: 6.2, kcal: 177.4, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 300, k: 0, p: 0 },  
  { name: '水煎包', category: '外食類', carbs: 25.2, protein: 4.3, fat: 5.4, kcal: 167, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 310, k: 129, p: 48 },
  { name: '鮮奶起司爆漿包1個110g', category: '外食類', carbs: 51.5, protein: 12, fat: 8.6, kcal: 332.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 458, k: '', p: '' },
  { name: '蚵仔煎', category: '外食類', carbs: 19.7, protein: 4.9, fat: 10.4, kcal: 192, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 479, k: 91, p: 91 },
  { name: '肉羹', category: '外食類', carbs: 18.9, protein: 9.7, fat: 14.7, kcal: 247, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 512, k: 102, p: 198 },
  { name: '烤黑輪（沾醬5g）50g/隻', category: '外食類', carbs: 10.9, protein: 5.6, fat: 2.1, kcal: 84, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '蚵捲2個 55g', category: '外食類', carbs: 6.3, protein: 8.7, fat: 9.8, kcal: 147, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '蝦捲2個 73g', category: '外食類', carbs: 9.8, protein: 10.5, fat: 13.3, kcal: 200, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '薏仁湯 353g/碗', category: '外食類', carbs: 53.4, protein: 5.7, fat: 2, kcal: 253, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '綠豆湯 306g/碗', category: '外食類', carbs: 51.5, protein: 12.6, fat: 0.5, kcal: 254, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '豆花 340g/碗', category: '外食類', carbs: 28, protein: 7.4, fat: 3.8, kcal: 172, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '花生糖1塊 31g', category: '外食類', carbs: 13.1, protein: 6.6, fat: 10.4, kcal: 172, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '芝麻糖1塊 30g', category: '外食類', carbs: 14.3, protein: 5, fat: 9.7, kcal: 164, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0 },
  { name: '桂冠黃金起司球 30g', category: '外食類', carbs: 3.7, protein: 3.1, fat: 1.8, kcal: 43, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 169, k: '', p: '' },
  { name: '沙威瑪 1份', category: '外食類', carbs: 36.6, protein: 18.3, fat: 9.1, kcal: 300, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '北海-鱈魚香絲 青花椒辣味 30g', category: '外食類', carbs: 16.3, protein: 7.4, fat: 0.3, kcal: 97.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 553.6, k: '', p: '' },
  { name: '炸雞排（230g/片）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 622, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸三角骨（250g/份）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 587, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '鹹酥雞（100g/份）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 312, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸雞米花（100g/份）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 351, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸百頁豆腐（185g/條）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 497, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸雞蛋豆腐', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 321, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸豆干（3片）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 342, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸豆包（64g/片）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 316, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '銀絲卷（76g/個）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 352, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸小熱狗（3條）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 298, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸雞肉香腸（3條）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 297, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '小肉豆（45g/份）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 219, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '地瓜薯條（80g/份）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 295, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸薯條（80g/份）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 248, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸魷魚（100g/份）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 270, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸雞皮（45g/串）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 268, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸七里香（40g/串）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 249, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸貢丸（3顆）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 236, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸花枝丸（3顆）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 215, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸湯圓', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 247, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸甜不辣（2片）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 248, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸米血（80g/片）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 290, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸糯米腸（58g/條）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 218, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸芋頭簽（75g/個）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 198, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸魚板（75g/片）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 186, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸雞心（50g/串）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 163, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸柳葉魚（3條）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 255, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸雞胗（45g/串）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 108, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸雞脖子（2支）', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 130, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸四季豆', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 131, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸玉米筍', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 136, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸杏鮑菇', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 145, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸青花菜', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 150, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '炸青椒', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 140, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '純豆花（250g）', category: '甜品類', carbs: 0, protein: 0, fat: 0, kcal: 98, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '豆花-糖水（150g）', category: '甜品類', carbs: 0, protein: 0, fat: 0, kcal: 105, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '豆花-牛奶（150g）', category: '甜品類', carbs: 0, protein: 0, fat: 0, kcal: 95, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '豆花-無糖豆漿（150g）', category: '甜品類', carbs: 0, protein: 0, fat: 0, kcal: 53, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
  { name: '豆花-薑汁（150g）', category: '甜品類', carbs: 0, protein: 0, fat: 0, kcal: 42, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: 0, p: 0},
 
  { name: '好丘-原味小麥貝果 100g (1個)', category: '外食類', carbs: 53.1, protein: 9.6, fat: 5, kcal: 291, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 498, k: '', p: '' },
  { name: '好丘-芋頭鹹蛋黃貝果 120g (1個)', category: '外食類', carbs: 59.6, protein: 9.6, fat: 6.4, kcal: 334.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 442, k: '', p: '' },
  { name: '好丘-草莓奶香貝果 120g (1個)', category: '外食類', carbs: 64.8, protein: 10, fat: 5.8, kcal: 345.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 508, k: '', p: '' },
  { name: '好丘-地瓜乳酪貝果 116g (1個)', category: '外食類', carbs: 58.2, protein: 9.4, fat: 3.8, kcal: 305, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 500, k: '', p: '' },
  { name: '好丘-起司三重奏貝果 120g (1個)', category: '外食類', carbs: 55, protein: 14.6, fat: 8.2, kcal: 349.2, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 656, k: '', p: '' },
  { name: '好丘-花生可可貝果 120g (1個)', category: '外食類', carbs: 55.2, protein: 14.6, fat: 18.2, kcal: 434.2, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 424, k: '', p: '' },
  { name: '好丘-野生桑葚貝果 105g (1個)', category: '外食類', carbs: 60.9, protein: 9.7, fat: 2.1, kcal: 301, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 508.2, k: '', p: '' },
  { name: '好丘-四季春貝果 105g (1個)', category: '外食類', carbs: 59.1, protein: 10, fat: 1.2, kcal: 286.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 506.1, k: '', p: '' },
  { name: '鍋燒雞絲麵(當歸口味) 55g(1份)', category: '外食類', carbs: 33.6, protein: 6.8, fat: 11.3, kcal: 262.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1210, k: '', p: '' },
  { name: '鍋燒意麵 772g/碗', category: '外食類', carbs: 66.3, protein: 22.3, fat: 28.6, kcal: 607, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '意麵(湯) 375g/碗', category: '外食類', carbs: 59.8, protein: 12.1, fat: 5.5, kcal: 335, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '豆菜麵 273g/碗', category: '外食類', carbs: 64, protein: 11.4, fat: 3.2, kcal: 327, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '擔仔麵 355g/碗', category: '外食類', carbs: 47.5, protein: 14.6, fat: 9.8, kcal: 335, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '魚麵 284g/碗', category: '外食類', carbs: 10, protein: 8, fat: 6, kcal: 127, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '牛肉麵 834g/碗', category: '外食類', carbs: 107.9, protein: 44.6, fat: 8, kcal: 699, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '雞肉絲麵 341g/碗', category: '外食類', carbs: 96.1, protein: 21, fat: 9.3, kcal: 548, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '小卷米粉 586g/碗', category: '外食類', carbs: 73.1, protein: 14.1, fat: 1.2, kcal: 358, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '虱目魚鹹粥 349g/碗', category: '外食類', carbs: 28.4, protein: 11.6, fat: 16.9, kcal: 317, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '土魠魚羹 449g/碗', category: '外食類', carbs: 35.8, protein: 12.5, fat: 17.9, kcal: 349, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },   
  { name: '白北浮水魚羹 329g/碗', category: '外食類', carbs: 10.8, protein: 15.9, fat: 3.7, kcal: 142, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '浮水花枝羹 347g/碗', category: '外食類', carbs: 10.3, protein: 26.9, fat: 12.1, kcal: 263, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '羊肉湯 722g/碗', category: '外食類', carbs: 0.1, protein: 43.1, fat: 41.8, kcal: 561, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '牛肉湯 239g/碗', category: '外食類', carbs: 0.9, protein: 15.5, fat: 10.7, kcal: 164, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '豬心湯 265g/碗', category: '外食類', carbs: 0.5, protein: 8.8, fat: 3.5, kcal: 69, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '餛飩湯 459g/碗', category: '外食類', carbs: 35.5, protein: 17.4, fat: 28, kcal: 468, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '肉粽 240g/顆', category: '外食類', carbs: 62.5, protein: 14.8, fat: 21.6, kcal: 511, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '豬舌刈包 98g/顆', category: '外食類', carbs: 34, protein: 10.3, fat: 8, kcal: 251, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '肉圓 206g/顆', category: '外食類', carbs: 55.1, protein: 13.9, fat: 11.6, kcal: 364, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '蝦仁肉圓 154g/顆', category: '外食類', carbs: 28, protein: 11.8, fat: 22.9, kcal: 366, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '碗粿（沾醬15g） 233g/顆', category: '外食類', carbs: 41.2, protein: 6.8, fat: 4.6, kcal: 232, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '碗粿（沾醬33g） 234g/顆', category: '外食類', carbs: 39.5, protein: 8.5, fat: 8.6, kcal: 288, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '鴨片飯 219g/碗', category: '外食類', carbs: 57.4, protein: 13.5, fat: 8, kcal: 364, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '米糕 197g/碗', category: '外食類', carbs: 50.4, protein: 9.4, fat: 14.1, kcal: 369, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0, k: '', p: '' },
  { name: '八方雲集-招牌水餃 28g (1顆)', category: '外食類', carbs: 5.35, protein: 2.16, fat: 2.97, kcal: 56.73, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 934.1, k: '', p: '' },
  { name: '八方雲集-韭菜水餃 28g (1顆)', category: '外食類', carbs: 4.85, protein: 2.43, fat: 3.24, kcal: 58.28, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 806.9, k: '', p: '' },
  { name: '八方雲集-韓式辣味水餃 28g (1顆)', category: '外食類', carbs: 6.55, protein: 2.24, fat: 2.23, kcal: 55.27, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 135.8, k: '', p: '' },
  { name: '八方雲集-咖哩水餃 28g (1顆)', category: '外食類', carbs: 4.2, protein: 2.44, fat: 2.74, kcal: 51.24, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 107.44, k: '', p: '' },
  { name: '八方雲集-玉米水餃 28g (1顆)', category: '外食類', carbs: 5.9, protein: 1.7, fat: 1.8, kcal: 46.64, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 88.93, k: '', p: '' },
  { name: '八方雲集-新蔬食水餃 28g (1顆)', category: '外食類', carbs: 6.66, protein: 2.32, fat: 1.96, kcal: 53.59, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 98.31, k: '', p: '' },
  { name: '八方雲集-鮮蝦水餃 28g (1顆)', category: '外食類', carbs: 5.12, protein: 2.07, fat: 2.55, kcal: 51.72, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 109.17, k: '', p: '' },
  { name: '八方雲集-招牌鍋貼 27g (1顆)', category: '外食類', carbs: 6.1, protein: 1.94, fat: 4, kcal: 68, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 200, k: '', p: '' },
  { name: '八方雲集-韭菜鍋貼 27g (1顆)', category: '外食類', carbs: 6.31, protein: 2.16, fat: 4.4, kcal: 73, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 200, k: '', p: '' },
  { name: '八方雲集-韓式辣味鍋貼 27g (1顆)', category: '外食類', carbs: 6.7, protein: 2.4, fat: 3.5, kcal: 67.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 200, k: '', p: '' },
  { name: '八方雲集-咖哩鍋貼 27g (1顆)', category: '外食類', carbs: 6.47, protein: 2.2, fat: 3.6, kcal: 67, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 200, k: '', p: '' },
  { name: '八方雲集-玉米鍋貼 27g (1顆)', category: '外食類', carbs: 7, protein: 2.24, fat: 2.98, kcal: 63.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 200, k: '', p: '' },
  { name: '八方雲集-田園蔬菜鍋貼 27g (1顆)', category: '外食類', carbs: 7, protein: 0.8, fat: 1.5, kcal: 45, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 200, k: '', p: '' },
  { name: '池上便當-蒜蒜紅石班飯包', category: '外食類', carbs: 95, protein: 30.2, fat: 12.4, kcal: 613, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 952, k:'', p: ''},
  { name: '池上便當-鹽的花魚飯包', category: '外食類', carbs: 96.7, protein: 37.6, fat: 16.3, kcal: 691, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 463, k:'', p: ''},
  { name: '池上便當-油上油雞飯包', category: '外食類', carbs: 97.6, protein: 31.9, fat: 13.9, kcal: 643, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 933, k:'', p: ''},
  { name: '池上便當-雞滷飯', category: '外食類', carbs: 98.2, protein: 35.9, fat: 32.3, kcal: 828, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 740, k:'', p: ''},
  { name: '池上便當-經典池上飯包', category: '外食類', carbs: 103.4, protein: 35.3, fat: 20.7, kcal: 742, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1085, k:'', p: ''},
  { name: '池上便當-炭火烤肉飯包', category: '外食類', carbs: 102.9, protein: 29, fat: 13.4, kcal: 648, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 881, k:'', p: ''},
  { name: '池上便當-黃金豬排飯包', category: '外食類', carbs: 117.7, protein: 33.2, fat: 16.2, kcal: 749, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1139, k:'', p: ''},
  { name: '池上便當-悟饕經典排骨飯包', category: '外食類', carbs: 107.8, protein: 31.5, fat: 18.1, kcal: 720, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 843, k:'', p: ''},
  { name: '池上便當-鐵道排骨飯包', category: '外食類', carbs: 108.2, protein: 29.2, fat: 21.4, kcal: 742, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 999, k:'', p: ''},
  { name: '池上便當-土雞肉飯', category: '外食類', carbs: 95.2, protein: 30.5, fat: 29.5, kcal: 768, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 762, k:'', p: ''},
  { name: '池上便當-椒來麻雞腿飯包', category: '外食類', carbs: 103.3, protein: 59, fat: 26.3, kcal: 886, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1321, k:'', p: ''},
  { name: '池上便當-香酥雞腿飯包', category: '外食類', carbs: 97.7, protein: 62.3, fat: 29.3, kcal: 904, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 782, k:'', p: ''},
  { name: '池上便當-悟厚大G排飯包', category: '外食類', carbs: 146.1, protein: 65.9, fat: 14.1, kcal: 975, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1589, k:'', p: ''},
  { name: '池上便當-蒲燒鯛魚飯包', category: '外食類', carbs: 99, protein: 28, fat: 38.6, kcal: 855, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1036, k:'', p: ''},
  { name: '池上便當-養生飯包', category: '外食類', carbs: 119.5, protein: 33, fat: 10.6, kcal: 705, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 442, k:'', p: ''},
  { name: '池上便當-灶咖豬排飯包', category: '外食類', carbs: 102.5, protein: 30, fat: 10.7, kcal: 626, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 933, k:'', p: ''},
  { name: '池上便當-雙醬咖哩豚丼', category: '外食類', carbs: 102.5, protein: 22.3, fat: 20.6, kcal: 685, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 647, k:'', p: ''},
  { name: '池上便當-台式炕肉飯包', category: '外食類', carbs: 107.4, protein: 33.6, fat: 27.5, kcal: 812, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1100, k:'', p: ''},
  { name: '池上便當-蒜香雞菲力飯包', category: '外食類', carbs: 116.5, protein: 38.8, fat: 15.5, kcal: 723, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 690, k:'', p: ''},
  { name: '池上便當-薄鹽鯖魚飯包', category: '外食類', carbs: 99.7, protein: 36.4, fat: 16.4, kcal: 692, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 696, k:'', p: ''},
  { name: '天素地蔬-陽明春天菇菇毛豆飯糰 110g', category: '外食類', carbs: 35.3, protein: 4.4, fat: 4.8, kcal: 202, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 420, k:'', p: ''},
  { name: '天素地蔬-塔香杏鮑菇飯糰 110g', category: '外食類', carbs: 39.2, protein: 3.8, fat: 4.2, kcal: 210, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 437, k:'', p: ''},
  { name: '天素地蔬-陽明春天野菇炊飯飯糰 110g', category: '外食類', carbs: 39.5, protein: 3.9, fat: 3.9, kcal: 209, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 525, k:'', p: ''},
  { name: '711阜杭豆漿里肌肉紫米飯糰 207g', category: '外食類', carbs: 65.6, protein: 12.8, fat: 12, kcal: 422, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 511, k:'', p: ''},
  { name: '711星級饗宴-麻油雞飯糰 207g', category: '外食類', carbs:0 , protein: 0, fat: 0, kcal: 354, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711新極上飯糰-天使紅蝦 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711新極上飯糰-蔥鹽生鮭 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 210, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711新極上飯糰-明太子鮭魚 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 228, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711新極上飯糰-冠軍烏魚子 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711星宇新極上-胡同炭火牛小排 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711嫩烤里肌多彩便當 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711極饗-沙茶豬肉燴飯 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},  
  { name: '711黑金松露嫩雞胸 207g', category: '外食類', carbs: 0, protein: 0, fat: 0, kcal: 354, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: '', k:'', p: ''},
  { name: '711糖心蛋紐奧良風味烤雞 三明治 117g', category: '外食類', carbs: 20.7, protein: 15.3, fat: 10.1, kcal: 235, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 668, k:'', p: ''},
  { name: '711香檸優多 椰果晶凍 400g', category: '外食類', carbs: 52, protein: 0.4, fat: 0, kcal: 210, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 176, k:'', p: ''},
  { name: '711比菲多（寡糖配方）471ml', category: '外食類', carbs: 60.3, protein: 6.2, fat: 0, kcal: 198, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 89, k:'', p: ''},
  { name: '711比菲多（減醣30%）471ml', category: '外食類', carbs: 67.8, protein: 5.2, fat: 0, kcal: 278, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 52, k:'', p: ''},
  { name: '711寒天冬瓜檸檬QQ 400g', category: '外食類', carbs: 51, protein: 0.4, fat: 0.4, kcal: 208, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 73, k:'', p: ''},
 
  { name: 'Qburger-黃金脆雞鮮蔬堡 152g', category: '外食類', carbs: 6.1, protein: 17, fat: 9, kcal: 171.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 205, k:'', p: ''},
  { name: 'Qburger-里肌豬排堡 158g', category: '外食類', carbs: 38.1, protein: 14, fat: 11.9, kcal: 314.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 762, k:'', p: ''},
  { name: 'Qburger-牛肉起士漢堡 174g', category: '外食類', carbs: 35.6, protein: 15, fat: 24.1, kcal: 418.3, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 639, k:'', p: ''},
  { name: 'Qburger-卡啦雞腿漢堡 207g', category: '外食類', carbs: 46.4, protein: 21.9, fat: 33.4, kcal: 572.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 976, k:'', p: ''},
  { name: 'Qburger-麥香雞漢堡 157g', category: '外食類', carbs: 42.1, protein: 10.2, fat: 19.4, kcal: 383.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 756, k:'', p: ''},
  { name: 'Qburger-黃金脆雞堡 177g', category: '外食類', carbs: 35.5, protein: 21.8, fat: 14.2, kcal: 356.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 492, k:'', p: ''},
  { name: 'Qburger-鮪魚吐司 168g', category: '外食類', carbs: 50.2, protein: 14.4, fat: 222, kcal: 455.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 557, k:'', p: ''},
  { name: 'Qburger-里肌豬排吐司 175g', category: '外食類', carbs: 51.8, protein: 17.2, fat: 16.1, kcal: 420.3, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 831, k:'', p: ''},
  { name: 'Qburger-花生吐司 108g', category: '外食類', carbs: 49.1, protein: 11.2, fat: 12.8, kcal: 356.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 368, k:'', p: ''},
  { name: 'Qburger-鮪魚蛋餅 182g', category: '外食類', carbs: 31.2, protein: 19.7, fat: 26.3, kcal: 439.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 824, k:'', p: ''},
  { name: 'Qburger-黑胡椒麵鐵板麵 563g', category: '外食類', carbs: 75, protein: 26.2, fat: 19.6, kcal: 581.3, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1662, k:'', p: ''},
  { name: 'Qburger-蘑菇麵鐵板麵 563g', category: '外食類', carbs: 64.3, protein: 25.9, fat: 18.5, kcal: 527, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 1707, k:'', p: ''},
  { name: 'Qburger-沙茶麵鐵板麵 549g', category: '外食類', carbs: 90.3, protein: 28, fat: 22.7, kcal: 677.4, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2396, k:'', p: ''},
  { name: 'Qburger-原味蛋餅 132g', category: '外食類', carbs: 29, protein: 11.8, fat: 10, kcal: 253.4, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 657, k:'', p: ''},
  { name: 'Qburger-100%肉鬆蛋餅 147g', category: '外食類', carbs: 33.1, protein: 15.8, fat: 16.1, kcal: 340.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 803, k:'', p: ''},
  { name: 'Qburger-經典紅茶 320g', category: '外食類', carbs: 27.1, protein: 0, fat: 0, kcal: 108.4, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na:'', k:'', p: ''},
  { name: 'Qburger-美式黑咖啡 340g', category: '外食類', carbs: 2.38, protein: 0.68, fat: 0.34, kcal: 340, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 3, k:'', p: ''},
  { name: 'Qburger-拿鐵咖啡 345g', category: '外食類', carbs: 8, protein: 5.5, fat: 5.7, kcal: 105.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 90, k:'', p: ''},
  { name: 'Qburger-招牌奶茶 320g', category: '外食類', carbs: 34.7, protein: 1, fat: 2, kcal: 320, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 14, k:'', p: ''},
  { name: 'Qburger-柳橙汁 300g', category: '外食類', carbs: 33.9, protein: 1.5, fat: 0, kcal: 141.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 60, k:'', p: ''},
  { name: 'Qburger-阿華田 360g', category: '外食類', carbs: 33.9, protein: 1.5, fat: 0, kcal: 141.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 60, k:'', p: ''},
  { name: 'Qburger-100%肉鬆可朗芙 75g', category: '外食類', carbs: 25.8, protein: 7.2, fat: 20.2, kcal: 311.3, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 358, k:'', p: ''},
  { name: 'Qburger-蜂蜜芥末卡啦雞可朗芙 199g', category: '外食類', carbs: 37.6, protein: 21.4, fat: 42.1, kcal: 612.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 977, k:'', p: ''},
  { name: 'Qburger-鮪魚玉米可朗芙 123g', category: '外食類', carbs: 25.9, protein: 10.6, fat: 21.4, kcal: 336, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 376, k:'', p: ''},
  { name: 'Qburger-經典可朗芙 55g', category: '外食類', carbs: 21.7, protein: 4.4, fat: 8.8, kcal: 181.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 235, k:'', p: ''},
  { name: 'Qburger-花醬可朗芙 72g', category: '外食類', carbs: 26.3, protein: 7.5, fat: 17.1, kcal: 287.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 276, k:'', p: ''},
 
  { name: '品客-起司洋芋片 48g(小罐裝)', category: '外食類', carbs: 28.7, protein: 2.3 , fat: 14.8, kcal: 257, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 700, k:'', p: ''},
  { name: '品客-原味洋芋片 48g(小罐裝)', category: '外食類', carbs: 30.2, protein: 2.4 , fat: 13.4, kcal: 248, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 226, k:'', p: ''},
  { name: '品客-原味洋芋片 102g(大罐裝)', category: '外食類', carbs: 64, protein: 5.2 , fat: 28.4, kcal: 524, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 480, k:'', p: ''},
  { name: '樂事-原味洋芋片 83g/袋(2袋裝)', category: '外食類', carbs: 47, protein: 4.25 , fat: 27, kcal: 447.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 390, k:'', p: ''},
  { name: '樂事-雞汁洋芋片 83g/袋(2袋裝)', category: '外食類', carbs: 47, protein: 4.25 , fat: 27, kcal: 447.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 455, k:'', p: ''},
  { name: '樂事-海苔壽司洋芋片 83g/袋(2袋裝)', category: '外食類', carbs: 48.5, protein: 4.25 , fat: 26.5, kcal: 450, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 485, k:'', p: ''},
  { name: '樂事-奶焗香蔥洋芋片 83g/袋(2袋裝)', category: '外食類', carbs: 48.5, protein: 4.25 , fat: 27.5, kcal: 457.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 442.5, k:'', p: ''},
  { name: '樂事-蜜汁香烤肋排洋芋片 83g/袋(2袋裝)', category: '外食類', carbs: 47.3, protein: 5.25 , fat: 27.3, kcal: 455, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 477.5, k:'', p: ''},
  { name: '樂事-A5和牛洋芋片 83g/袋(2袋裝)', category: '外食類', carbs: 48.3, protein: 4.5 , fat: 27.3, kcal: 457.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 507.5, k:'', p: ''},
  { name: '樂事-日式串燒洋芋片 83g/袋(2袋裝)', category: '外食類', carbs: 48.3, protein: 4.5 , fat: 27.3, kcal: 457.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 480, k:'', p: ''},
  { name: '樂事-原味洋芋片 84.9g/袋(袋裝)', category: '外食類', carbs: 46.2, protein: 6 , fat: 30.6, kcal: 486, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 498, k:'', p: ''},
  { name: '樂事-九州岩燒海苔洋芋片 84.9g/袋(袋裝)', category: '外食類', carbs: 46.8, protein: 6 , fat: 29.7, kcal: 480, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 498, k:'', p: ''},
  { name: '樂事-香濃起司洋芋片 84.9g/袋(袋裝)', category: '外食類', carbs: 45.9, protein: 5.7 , fat: 30.6, kcal: 480, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 591, k:'', p: ''},
  { name: '樂事-奶焗香蔥洋芋片 69.9g/袋(袋裝)', category: '外食類', carbs: 37.5, protein: 4.5 , fat: 24.9, kcal: 393, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 432, k:'', p: ''},
  { name: '樂事-香酥雞腿洋芋片 84.9g/袋(袋裝)', category: '外食類', carbs: 47.4, protein: 6 , fat: 29.7, kcal: 480, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 468, k:'', p: ''},
  { name: '樂事 自然美味 薄切紫地瓜片 78.9g/袋(袋裝)', category: '外食類', carbs: 48, protein: 2.1, fat: 26.7, kcal: 441, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 285, k:'', p: ''},
  { name: '樂事 自然美味 薄切地瓜片 78.9g/袋(袋裝)', category: '外食類', carbs: 49.2, protein: 6 , fat: 26.1, kcal: 441, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 393, k:'', p: ''},
  { name: '樂事 自然美味 薄鹽海苔 69.9g/袋(袋裝)', category: '外食類', carbs: 39.6, protein: 4.5 , fat: 23.7, kcal: 390, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 168, k:'', p: ''},
  { name: '樂事 自然美味 海鹽 69.9g/袋(袋裝)', category: '外食類', carbs: 37.2, protein: 4.2, fat: 25.8, kcal: 399, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 372, k:'', p: ''},
  { name: '樂天小熊餅乾-草莓 48g(小包裝)', category: '外食類', carbs: 29.9, protein: 2 , fat: 14.1, kcal: 254.5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 116, k:'', p: ''},
  { name: '奇多-隨口脆玉米脆 28g(起司)', category: '外食類', carbs: 15.7, protein: 2, fat: 9.8, kcal: 159, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 206, k: '', p: '' },
  { name: '奇多-隨口脆玉米脆 28g（雞汁）', category: '外食類', carbs: 15.7, protein: 1.5, fat: 9.5, kcal: 155, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 178, k: '', p: '' },
  { name: '黑師傅-黑糖捲心酥 200g/罐 (塑膠罐)', category: '外食類', carbs: 109.28, protein: 11.04, fat: 36, kcal: 804.8, fiber: 0, saturatedFat: 30.88, transFat: 0, cholesterol: 0, na: 56, k: '', p: '' },
  { name: '黑師傅-牛奶捲心酥 200g/罐 (塑膠罐)', category: '外食類', carbs: 112.16, protein: 11.04, fat: 33.76, kcal: 796.8, fiber: 0, saturatedFat: 28.16, transFat: 0, cholesterol: 0, na: 40, k: '', p: '' },
  { name: '韓味不二-鹽烤海苔 5g', category: '外食類', carbs: 1.8, protein: 0.5, fat: 2.3, kcal: 29.9, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 96, k: '', p: '' },
  { name: 'Kokiri-哇象海苔捲原味 5g', category: '外食類', carbs: 4, protein: 1, fat: 0, kcal: 20, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 75, k: '', p: '' },
  { name: '元本山-味付對切海苔 23.7g', category: '外食類', carbs: 10.2, protein: 9.3, fat: 0.9, kcal: 72, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 318, k: '', p: '' },
  { name: 'Lindt EXCELLENCE 100% 黑巧克力 50g(21塊)', category: '外食類', carbs: 13.5, protein: 6.5, fat: 27, kcal: 310, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 5, k:'', p: ''},
  { name: 'VANINI 100% 醇黑可可製品 90g(21塊)', category: '外食類', carbs: 24.3, protein: 12.6, fat: 46.8, kcal: 543.6, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 18, k:'', p: ''},
  
  // 醬料類
  { name: '醬油膏 5g', category: '醬料類', carbs: 1, protein: 0.3, fat: 0, kcal: 5, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 202.5, k: 16.4, p: 5.5 },
  { name: '鮮味露 5g', category: '醬料類', carbs: 0, protein: 1, fat: 0, kcal: 4, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 390.2, k: 20.4, p: 1.1 },
  { name: '牛肉醬 5g', category: '醬料類', carbs: 1.1, protein: 0.8, fat: 1.9, kcal: 25, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 49.5, k: 12.4, p: 7.5 },
  { name: '肉燥', category: '醬料類', carbs: 0.2, protein: 0.5, fat: 1.9, kcal: 20, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 47.1, k: 14.7, p: 4.9 },
  { name: '素肉燥', category: '醬料類', carbs: 0.6, protein: 0.6, fat: 2.1, kcal: 24, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 52.8, k: 5.7, p: 4.4 },
  { name: '芝麻醬 5g', category: '醬料類', carbs: 1.1, protein: 1, fat: 2.6, kcal: 32, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 0.2, k: 26.5, p: 28.3 },
  { name: '沙茶醬 5g', category: '醬料類', carbs: 0.5, protein: 0.5, fat: 3.6, kcal: 36, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 21, k: 17.7, p: 14.1 },
  { name: '千島沙拉醬 5g', category: '醬料類', carbs: 0.8, protein: 0, fat: 2.5, kcal: 26, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 31.6, k: 3.1, p: 1 },
  { name: '和風沙拉醬 5g', category: '醬料類', carbs: 1.3, protein: 0.1, fat: 0.1, kcal: 7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 142.7, k: 7.9, p: 2.5 },
  { name: '凱撒沙拉醬 5g', category: '醬料類', carbs: 0.9, protein: 0.1, fat: 1.5, kcal: 18, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 63.7, k: 3.7, p: 2.7 },
  { name: '味噌 5g', category: '醬料類', carbs: 1.7, protein: 0.5, fat: 0.2, kcal: 11, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 207.6, k: 17.3, p: 7 },
  { name: '花生醬 5g', category: '醬料類', carbs: 0.9, protein: 1.2, fat: 2.7, kcal: 33, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 15.3, k: 28.6, p: 18.9 },
  
  // 保健品
  { name: '韓國熊津 不添加糖紅蔘飲 70ml/包', category: '保健品', carbs: 3.6, protein: 0.1, fat: 0, kcal: 14.8, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 6, k: 31.9, p: 0 },
  { name: '韓國熊津 紅蔘飲 70ml/包', category: '保健品', carbs: 7.4, protein: 0, fat: 0, kcal: 29.7, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 2, k: 0, p: 0 },
  { name: '亞培 腎補納/未洗腎 237ml', category: '保健品', carbs: 46.4, protein: 10.6, fat: 22.7, kcal: 432, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 190, k: 270, p: 170 },
  { name: '艾益生 力增10%/未洗腎 237ml', category: '保健品', carbs: 46.4, protein: 10.6, fat: 22.7, kcal: 432, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 190, k: 200, p: 170 },
  { name: '補體素 慎選/未洗腎 237ml', category: '保健品', carbs: 52.8, protein: 10.8, fat: 22.5, kcal: 457, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 236, k: 300, p: 188 },
  { name: '三多補體康 低蛋白', category: '保健品', carbs: 51.8, protein: 8.5, fat: 21.3, kcal: 433, na: 190, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, k: 240, p: 170 },
  { name: '卡比 倍速力 200ml', category: '保健品', carbs: 55.2, protein: 6, fat: 17.8, kcal: 405, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 136, k: 200, p: 110 },
  { name: '立攝適 盛健 10% 250ml', category: '保健品', carbs: 47.5, protein: 23, fat: 25, kcal: 507, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 235, k: 205, p: 220 },
  { name: '三多勝補康LPF-N (2平匙,250cc)', category: '保健品', carbs: 36.6, protein: 5.9, fat: 9.7, kcal: 257, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 105, k: 107, p: 74.3 },
  { name: '益富 益能充 45g/包', category: '保健品', carbs: 31.8, protein: 0.8, fat: 8.2, kcal: 204, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 113, k: 108, p: 42 },
  { name: '補體素 慎選 45g/包', category: '保健品', carbs: 32.2, protein: 0.6, fat: 8.5, kcal: 208, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 44, k: 90.9, p: 38.7 },
  { name: '亞培 葡勝納3重強護 52g/5匙', category: '保健品', carbs: 30.4, protein: 10.2, fat: 8.3, kcal: 237, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 211, k: 370, p: 168 },
  { name: '思耐得 補體素鉻100 58g/5匙', category: '保健品', carbs: 31.3, protein: 12.8, fat: 9.5, kcal: 262, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 220, k: 229, p: 165 },
  { name: '維維樂 加倍優糖尿病配方 40g/包', category: '保健品', carbs: 25.7, protein: 8.2, fat: 5.2, kcal: 182, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 104, k: 257, p: 212 },
  { name: '益富 益力壯糖尿病配方 58g/7匙', category: '保健品', carbs: 28.7, protein: 12.6, fat: 10.5, kcal: 260, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 262, k: 249, p: 134 },
  { name: '桂格 完膳糖尿病配方 60g/7匙', category: '保健品', carbs: 32.4, protein: 12, fat: 8, kcal: 250, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 265, k: 260, p: 385 },
  { name: '亞培 葡勝納SR 200ml', category: '保健品', carbs: 24.5, protein: 9.3, fat: 6.8, kcal: 196, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 178, k: 312, p: 120 },
  { name: '艾益生 力增飲鉻100 237ml', category: '保健品', carbs: 28.2, protein: 10, fat: 10.8, kcal: 250, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 240, k: 290, p: 175 },
  { name: '思耐得 補體素鉻100 237ml', category: '保健品', carbs: 29, protein: 12, fat: 9, kcal: 245, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 194, k: 237, p: 160 },
  { name: '益富 益力壯鉻112 250ml', category: '保健品', carbs: 28.5, protein: 12.5, fat: 10.5, kcal: 259, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 263, k: 406, p: 175 },
  { name: '賀寶芙 草莓 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 90, k: 284, p: '' },
  { name: '賀寶芙 薄荷巧克力 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 90, k: 284, p: '' },
  { name: '賀寶芙 香草 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 90, k: 284, p: '' },
  { name: '賀寶芙 巧克力 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 90, k: 438, p: '' },
  { name: '賀寶芙 巧餅 260ml', category: '保健品', carbs: 13, protein: 9, fat: 1, kcal: 90, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 160, k: 284, p: '' },
  { name: '賀寶芙 拿鐵 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 95, k: 325, p: '' },
  { name: '賀寶芙 芒果 260ml', category: '保健品', carbs: 13, protein: 9, fat: 0.8, kcal: 88, fiber: 0, saturatedFat: 0, transFat: 0, cholesterol: 0, na: 90, k: 284, p: '' }
];

export const DIAG_DATA: DiagnosisData = {
  NI: {
    label: "NI (攝取領域)",
    problems: {
      "熱量消耗增加(NI1.1)": {
        etiologies: ["同化作用、成長、體溫維持等導致營養素需要增加的生理因素", "自主或不自主之身體活動/行動"],
        symptoms: [ "非計畫性體重減輕：6 個月內減輕≧10%，或1個月內減輕≧5%(成人及小兒科)", "非計畫性體重減輕：1週內減輕＞2% (小兒科)", "兒童有需要加速或趕上生長進度或增重之證據；未能正常生長", "瘦體組織比例增加", "發燒", "RMR 測量值＞RMR 估算/期望值", "體能活動增加，如：耐力型運動員",  "藥物造成能量消耗增加", "與疾病診斷或治療有關的情況如：帕金森氏症、腦性麻痺、阿茲海默症、囊腫纖維症、COPD" ]
      },
      "熱量攝取不足(NI1.2)": {
        etiologies: ["食物與營養相關知識缺乏", "需求增加，如：因代謝異化性疾病", "攝取足夠熱量的能力下降", "心理因素", "食物或人工營養獲取管道不足，如：經濟上的限制、老人及/或孩童的食物配給量不足", "文化習俗影響食物的獲取" ],
        symptoms: ["無法增加或維持適當的體重", "牙齒功能不良", "攝取量低於建議量", "食物禁忌", "飲食限制或排除熱量密度高的食物", "無法自行進食/喝水 (因腕部、手部或手指關節等活動功能下降)", "過量飲酒或其他藥物導致飢餓感降低", "影響食慾的藥物", "與疾病診斷或治療有關的情況，如：精神障礙、攝食異常、失智症、酗酒、藥物濫用、急慢性疼痛治療等"]
      },
      "熱量攝取過多(NI1.3)": {
        etiologies: ["對於食物、營養及營養相關議題的信念/態度不具科學證據", "對食物與營養相關知識缺乏", "選擇健康食物的管道缺乏或受限，如：照顧者或父母未提供健康食物的選擇，遊民", "缺乏行為改變及競爭的價值觀", "使用增加食慾的藥物，如類固醇、抗憂鬱藥物", "靜脈及腸道營養過度餵食", "未考量靜脈輸液或藥物提供的熱量", "對減少熱量的攝取，無意願也沒興趣", "對生活型態改變及新陳代謝率降低未能適度調整，如：老化", "對創傷、手術後，或其他狀況導致的活動受限未能適度調整", "高代謝期後，攝取量未隨之減少"],
        symptoms: ["持續PN供應 3~6 週以上，出現肝功能異常", "↑ 呼吸商 (RQ)＞1.0", "男性體脂肪＞25%，女性＞32%", "BMI＞25 (成人)；BMI＞95 百分位 (孩童)", "體重增加", "體脂肪增加", "呼吸速度增加", "熱量攝取超過建議量", "攝取高密度熱量或大份量的食物/飲料", "EN/PN供應超過熱量需求的估計值或測量值"]
      },
      "預期熱量攝取不足(NI1.4)": {
        etiologies: ["排定或計畫好的醫療檢測或治療，預期會增加個案熱量需求", "排定或計畫好的治療或藥物，預期會降低熱量攝取的能力", "預期工作或休閒活動上，個案的體能需求改變 (如，更換工作、競賽型運動訓練)", "過去經歷壓力大的生活變故 (如，家屬死亡、離婚、無家可歸等)所導致熱量攝取不足" ],
        symptoms: ["無法增加或維持適當的體重", "急、慢性疾病的盛行率為基準所顯示的熱量攝取不足", "攝取量低於建議量", "曾經處於邊緣的，或真正的熱量攝取不足", "採買、製備、和/或攝取足夠熱量的能力預期會改變", "預期藥物將減低食慾或影響個案攝取足夠熱量的能力", "沒有食物和營養需要量的相關建議知識", "預期身體活動強度增加", "排定好的已知會增加熱量需求，或改變其攝取足夠熱量能力的外科手術或內科治療", "個案過去或現階段存在的某一現象會增加其熱量消耗增多的發生率", "個案過去或現階段存在的某一現象會增加其熱量攝取不足的發生率", "個案近期報告或預期其生活有壓力或變故"]
      },
      "預期熱量攝取過多(NI1.5)": {
        etiologies: ["預期將受制於無法動或身體活動量減少之體能需求改變 ", "家庭或社交史，或文化上的飲食過量 ", "過重/肥胖遺傳體質", "代謝改變之生理情況", "排定或計畫好的治療或藥物，預期會降低個案之新陳代謝率 ", "過去經歷壓力大的生活變故(如，家屬死亡、離婚、無家可歸等)所導致的熱量攝取過多" ],
        symptoms: ["熱量攝取過多", "所有來源的熱量攝取估計值超過新陳代謝下降後的預期需求", "所有來源的熱量攝取估計值超過身體活動下降後的預期需求", "過去曾發生熱量攝取超過之前的代謝需求", "過去曾發生熱量攝取超過之前的身體活動需要", "活動量及/或從事體能活動能力的近期改變，或規劃的改變", "規劃的採買及/或製備食物能力的改變", "導致食慾增加的藥物", "身體活動量近期或規劃的改變", "未曾接受過食物和營養需要的相關建議和知識", "排定好的已知會降低熱量需求的外科手術或內科治療", "研究顯示個案過去或現階段存在的某一現象會增加其熱量消耗下降的發生率", "研究顯示個案過去或現階段存在的某一現象會增加其熱量攝取過多的發生率"]
      },
       "經口攝取不足(NI2.1)": {
        etiologies: [ "生理因素造成營養素需求量增加,如:長期代謝性疾病", "攝取足夠熱量的能力減少,如:長期代謝性疾病導致營養素需求增加", "獲取食物管道缺乏或受限,如:經濟困難、限制供給老年人和/或孩童的食物", "由於生理因素或行為問題、對食物厭惡,或存有不具科學證據的信念/態度,以致造成食物接受度受限", "文化習俗影響食物取得", "適當食物/飲品攝取的食物與營養相關知識不足", "心理因素,如:憂鬱和攝食異常" ],
        symptoms: [ "體重減輕,生長速度不足", "皮膚、黏膜乾燥、皮膚彈性差", "厭食、噁心、嘔吐、食慾或味覺改變", "維生素/礦物質缺乏的臨床證據", "與需要量比較,熱量或高品質的蛋白質攝取估算值不足", "經濟困難限制食物的取得", "過量飲酒或服用其他藥物致飢餓感下降", "藥物引起厭食", "有限的食物/飲品攝取,與食物型態、種類、飲食品質之營養參考基準不一致", "合適的各類食物及營養補充品或營養支持欠缺", "分解代謝性疾病如:AIDS, 肺結核, 神經性厭食, 近期手術引起感染或敗血症、憂鬱、急性或慢性疼痛的診斷或治療", "蛋白質及/或營養素吸收不良" ]
      },
      "經口攝取過多(NI2.2)": {
        etiologies: [ "對於食物或營養相關議題存有未經科學證實的信念/態度", "對於適當進食的營養相關知識不足", "選擇健康食物的管道缺乏或受限,如:照顧者或父母未提供健康食物的選擇,遊民", "缺乏行為改變及競爭的價值觀", "對於贈與的食物沒有能力拒絕", "缺乏規劃、採買和製備食物的技能", "缺乏控制食慾的自覺", "服用增加食慾的藥物,如:類固醇,抗憂鬱劑", "心理因素,如憂鬱症或攝食異常", "不願意或沒有興趣減少食量" ],
        symptoms: [ "不是水分蓄積或正常生長所造成的體重增加", "正餐及/或點心時間攝取高熱量密度的食物/飲品(果汁、汽水或酒)", "攝取大份量的食物/飲品,或某些特定的食物", "攝取的熱量估計值超過需要的估計值或測量值", "每日熱量攝取的估計值差異很大", "有暴食的飲食型態", "速食或至餐廳用餐頻率過多", "肥胖、過重、代謝症候群、憂鬱症、焦慮症等狀況的診斷或治療" ]
      },
      "腸道營養灌食不足(NI2.3)": {
        etiologies: [ "營養素之代謝或吸收改變(如藥物引起)", "對於施予適當的腸道營養(EN)配方之食物與營養相關知識不足", "施予EN時,缺乏適當的灌食途徑或途徑不理想、不正確 ", "生理因素造成營養素需求增加,如:快速的成長、傷口癒合、慢性發炎、多重骨折等", "對EN 不耐受", "灌食中斷,灌食量未達預計量" ],
        symptoms: [ "能量測定法(indirect calorimetry)數值,如呼吸商(RQ)<0.7", "維生素/礦物質異常: Ca<9.2 mg/dL, Vit K-INR異常, Copper<70 µg/dL, Zinc<78 µg/dL, Iron<50 µg/dL, iron-binding capacity<250 µg/dL", "生長遲緩(依據生長曲線圖)及胎兒發育遲滯", "孕婦體重增加不足或計畫增加的體重不足", "非意願之體重減輕:成年人≥5%/1個月,或≥10%/6個月", "嬰兒及幼童任何狀況之體重減輕", "體重過輕(BMI < 18.5)", "維生素/礦物質缺乏之臨床證據(如:掉髮、牙齦出血、指甲蒼白無血色、神經性病變)", "脫水之徵象,如:黏膜乾燥、皮膚彈性差", "皮膚不完整、傷口癒合差或壓瘡", "肌肉組織及皮下脂肪流失", "噁心、嘔吐、腹瀉", "EN量不足,低於估計或IC實際測量的需求量", "餵食管插管位置錯誤或被移除", "身體活動或運動能力改變,無法達到預期強度,活動量增加即容易疲倦", "不適當的灌食姿勢", "曾有小腸切除、Crohn's disease, HIV/AIDS, 灼傷, 早產, 營養不良等的診斷或治療相關狀況" ]
      },
      "腸道營養灌食過多(NI2.4)": {
        etiologies: [ "生理因素,如:重症或器官衰竭導致活動量低,需求量下降", "對EN適當施予量之食物與營養相關知識不足" ],
        symptoms: [ "↑ BUN: creatinine ratio (蛋白質)", "高血糖(CHO)", "高碳酸血症", "體重增加超過瘦組織增加幅度", "水分給予過多而水腫", "由腸道攝取的醣類、蛋白質、脂肪等持續高於建議量", "使用會使熱量、蛋白質、脂肪或水分需求量降低或代謝減弱的藥物", "對於體重增加或達理想體重有不切實際的期望" ]
      },
      "腸道營養組成與需求不一致(NI2.5)": {
        etiologies: [ "生理因素,如:病情進展,病人可恢復全部或部分經口進食;病情的改變導致餵食及/或營養素需求量的改變等", "對EN 商品之食物與營養相關知識不足", "安寧照護中的病人或家屬不希望營養支持" ],
        symptoms: [ "營養素相關的特定生化指標異常(如:使用高磷配方導致高血磷，使用低鉀配方導致低血鉀) ", "體重增加超過瘦組織增加的幅度", "體重流失", "水分供應過多導致水腫", "皮下脂肪及肌肉儲存減少", "腹瀉、便秘", "估計由腸道灌注的醣類、蛋白質或胺基酸、脂肪或脂肪酸以及/或微量元素等持續高於或低於建議量", "配方組成不符合病人消化及吸收營養素的能力", "配方組成或濃度不符合實證基礎的應用", "腸道營養配方所開立的處方,口述或書面資料不正確或不完整", "有腸胃道功能進步或減弱的改變史", "曾有外科大手術、創傷、燒燙傷、頭頸癌、重症病人、急性肺損傷、呼吸窘迫症候群等診斷或治療的狀況" ]
      },
      "腸道營養的施予與需求不一致(NI2.6)": {
        etiologies: [ "生理因素,如:病情進展,病人可恢復全部或部分經口進食;因病情改變導致需調整給食", "腸道營養配方供應之食物與營養相關知識不足", "安寧照護中的病人/或家屬沒有意願接受營養支持" ],
        symptoms: [ "↑或↓血糖", "噁心、嘔吐、腹瀉、胃殘餘量高", "易有飽足感", "插管途徑或插管型態可能需調整", "EN 施予方式可能影響由口進食", "EN 施予方式可能影響治療(包括藥物)或療程", "EN 可能導致營養生活品質差", "對批式(bolus feeding)灌食無法耐受", "對灌食速度無法耐受", "腸道營養施予方式所開立的處方,口述或書面資料不正確或不完整", "過去有EN 耐受差的紀錄", "有腸胃道功能進步或減弱的改變史", "曾有外科大手術、創傷、燒燙傷、頭頸癌、重症病人、急性肺損傷、呼吸窘迫症候群等診斷或治療的狀況" ]
      },
      "靜脈營養不足(NI2.7)": {
        etiologies: [ "營養素的吸收或代謝改變,如:藥物導致", "對於靜脈營養配方之食物與營養相關知識不足", "靜脈營養給予途徑缺乏或不當", "生理因素導致營養需求增加,如:快速成長、傷口癒合、慢性感染、多處骨折", "靜脈營養耐受力差", "輸液量不足,或輸注因故中斷" ],
        symptoms: [ "↓ 代謝車(metabolic cart)或間接能量測定(IC)測量值,如:RQ<0.7", "維生素/礦物質異常: ↓ Ca<9.2 mg/dL, Vit K-INR異常, ↓銅<70 µg/dL, ↓鋅<78 µg/dL, ↓鐵<50 µg/dL, iron-binding capacity<250 µg/dL", "生長停滯(依據生長曲線圖)及胎兒生長停滯", "懷孕期的體重增加不足或計畫增加的體重不足", "成人非意願的體重減輕,一個月≥5%或6個月≥10%", "嬰兒及幼童任何狀況之體重減輕", "體重不足(BMI < 18.5) ", "維生素/礦物質缺乏的臨床證據〔如:掉髮、牙齦出血、指甲蒼白無血色、神經性病變〕", "脫水的徵象,如:黏膜乾燥、皮膚彈性差", "皮膚不完整,傷口癒合差,或壓瘡", "肌肉組織和/或皮下脂肪流失", "噁心、嘔吐、腹瀉", "靜脈營養輸入量少於估計的或測量出來的需求量", "輸注管或靜脈途徑的位置錯誤或被移除", "身體活動或運動能力改變,無法達到預期強度,活動量增加即容易疲倦", "曾有小腸切除、Crohn's disease, HIV/AIDS, 灼傷, 早產, 營養不良等的診斷或治療相關狀況" ]
      },
      "靜脈營養過多(NI2.8)": {
        etiologies: [ "生理因素造成的,如:重症或器官衰竭個案活動量低,致使營養素需求減少", "對於靜脈營養適當劑量之食物與營養相關知識不足" ],
        symptoms: [ "↑ BUN:creatinine 比值 ", "高血糖 ", "高碳酸血症", "↑ 肝臟酵素指數上升", "體重增加超過瘦組織增加幅度", "水分給予過多導致水腫", "估計靜脈營養輸入的醣類、蛋白質及脂肪量持續高於建議量", "使用會使熱量、蛋白質、脂肪或水分需求量降低或代謝減弱的藥物", "對於體重增加或達理想體重有不切實際的期望" ]
      },
      "靜脈營養組成與需求不一致(NI2.9)": {
        etiologies: [ "生理因素,如:病情進展,病人/個案可恢復全部或部分經口進食或腸道營養;因病情改變需調整給食及/或營養素的需求", "對靜脈營養組成之食物與營養相關知識不足", "安寧照護中的病人/或家屬沒有意願接受營養支持" ],
        symptoms: [ "↑ 長期(3-6週以上)營養支持個案的肝功能檢測", "營養素相關的特定生化指標異常 (如:使用高磷配方導致高血磷, 使用低鉀配方導致低血鉀) ", "體重增加大於瘦組織增生的幅度", "體重流失", "水分供應過多導致水腫", "皮下脂肪及肌肉儲存減少", "噁心", "估計由靜脈輸入的醣類、蛋白質或胺基酸、脂肪或脂肪酸、維生素以及/或礦物質等持續高於或低於建議量", "估計其他營養素持續高於或低於建議量", "配方組成或型態不符合實證基礎的應用", "靜脈營養輸液所開立的處方,口述或書面資料不正確或不完整", "曾有靜脈營養耐受差的紀錄", "沒有其他病因時,曾出現脂肪肝", "有腸胃道功能問題曾被解決或改善", "曾有外科大手術、創傷、燒燙傷、頭頸癌、重症病人、急性肺損傷、呼吸窘迫症候群等診斷或治療的狀況" ]
      },
      "靜脈營養的施予與需求不一致(NI2.10)": {
        etiologies: [ "生理因素,如:病情進展,個案可恢復全部或部分經口進食或腸道營養;因病情改變需調整給食的供應量", "對靜脈營養供應之食物與營養相關知識不足", "安寧照護中的病人/或家屬沒有意願接受營養支持" ],
        symptoms: [ "↑長期(3-6週以上)營養支持個案的肝功能檢測", "輸注处感染", "噁心", "輸注途徑或輸注方式可能需要調整", "PN可能影響由口進食或腸道營養", "PN 可能影響治療或療程", "PN可能導致營養生活品質差", "對PN輸注速度無法耐受", "靜脈營養施予方式所開立的處方,口述或書面資料不正確或不完整", "過去有PN 耐受差的紀錄", "沒有其他病因時,曾出現脂肪肝 ", "有腸胃道功能問題曾被解決或改善", "曾有外科大手術、創傷、燒燙傷、頭頸癌、重症病人、急性肺損傷、呼吸窘迫症候群等診斷或治療的狀況" ]
       },
      "可接受的食物受限(NI2.11)": {
        etiologies: [ "生理因素,如:疼痛、不舒服,腸胃功能問題、發育遲緩,神經障礙等", "食物/飲品在口中、咽喉或手中時感到厭惡", "對食物的偏好造成多種食物/食物類別的自我限制", "照顧者的問題及個案進食行為等因素導致食物供應不以營養身體為目的", "不具科學證據的信念及態度" ],
        symptoms: [ "體重下降、生長速率不足,體重若上升是因捕食某些少數種類或不理想的食物 ", "具維生素/礦物質缺乏的臨床表徵", "食慾不穩定", "食物/飲品的攝取有限,其型態、種類或品質不符合參考標準", "對多種食物、某些類別的食物、營養補充品或營養支持不信任", "具某些診斷或治療的相關情況,如:發育障礙、感官異常、自閉症、齲齒、長期的營養支持、早產兒、神經障礙、精神狀態改變、大腦受影響的研究(MRI)等 " ]
       },
      "水分補給不足(NI3.1)": {
        etiologies: [ "生理因素造成,如:氣候/氣溫改變、運動增加或任何狀況導致水分需求增加;發燒所導致無感性水分流失增加;口渴敏感度下降或使用造成口渴感覺下降的藥物", "水分獲取管道缺乏或受限,如:經濟困難、沒有獨立取得水分的能力,如老年人或孩童", "文化習俗影響水分的取得", "對於適當水分攝取之食物及營養相關知識不足", "心理因素,如:憂鬱症或攝食異常", "認知能力不足,包括學習障礙、神經性或感覺器官受損,及/或失智症" ],
        symptoms: [ "血漿或血清滲透壓大於 290 mOsm/kg", "BUN、Na 異常", "↓尿量", "↑ 尿液比重", "糖尿病人出現高血糖", "體重快速減輕", "皮膚與黏膜乾燥,皮膚失去彈性、心跳加快或正常、低血壓、發燒、呼吸頻率增加、頸部靜脈扁平(flattened neck vein) ", "口渴", "吞嚥困難", "無感性水分流失增加", "估算的水分攝取低於需求量(幼兒依單位體表面積計算) ", "使用造成口渴感覺下降的藥物", "有下列疾病診斷或治療相關的狀況，如：失智症導致口渴的認知下降、脫水、糖尿病、腎功能異常、腹瀉、嘔吐、迴腸造口、結腸造口、感染" ]
      },
      "水分攝取過量(NI3.2)": {
        etiologies: [ "生理因素造成,如:腎臟、肝臟、心臟、內分泌、神經的或肺臟的功能異常;氣候或運動改變導致水分和鈉的流失減少,抗利尿激素分泌異常症候群(SIADH)", "對於適當水分攝取之食物及營養相關知識不足", "心理因素造成,如:憂鬱症和攝食異常" ],
        symptoms: [ "↓ 血漿滲透壓(270-280 mOsm/kg),只有水分正平衡超過鈉的正平衡時", "↓血鈉(SIADH 時)", "↓ 尿比重", "體重增加", "腿部、薦骨處、或全身性水腫;下肢滲出液體", "腹水", "肺水腫致呼吸短促;端坐呼吸(orthopnea);呼吸有不連續音或胸部羅音", "噁心、嘔吐、厭食、頭痛、肌肉痙攣、抽搐", "費力或休息時呼吸短促或呼吸困難", "給藥時使用大量水分", "使用會影響水分的排出的藥物", "估算水分的攝取量超過需求量(幼兒依單位體表面積計算)", "估算鹽的攝取超過建議量", "有下列疾病診斷或治療相關的狀況 如:末期腎臟病、腎病症候群、心臟衰竭或肝臟疾病", "昏迷(SIADH)" ]
      },
      "生物活性成份攝取不足(需指明) (NI4.1)": {
        etiologies: [ "對於生物活性成份建議攝取量之食物營養相關知識不足", "含生物活性成份的食物獲取管道缺乏或受限", "腸胃道結構或功能改變" ],
        symptoms: [ "估計含有下列成分的植物性食品攝取量低於建議量：水溶性纖維(如:洋車前子)、大豆蛋白、β-葡聚糖(如:全燕麥產品)、植物固醇和植物酯、其他有科學證據之物質", "對於生物活性成份,無法正確說明或知識不完整", "有下列疾病診斷或治療相關的狀況 如:心血管疾病、血膽固醇上升" ]
      },
      "生物活性成份攝取過多(需指明) (NI4.2)": {
        etiologies: [ "對於生物活性成份,包含食品添加物,攝取建議量之食物與營養相關知識不足", "汙染、錯誤名稱、錯誤或沒有標示、使用錯誤、近期商標變更、劑量增加、近期配方組合變更", "經常攝取富含生物活性成份的食品", "腸胃道結構及/或功能改變", "適當食物取得受限,如:具食品標示產品之商店不足" ],
        symptoms: [ "生化報告顯示特定物質攝取過量,如:同時攝取植物固醇或植物酯及降血脂藥物 statin 且同步飲食改變或服用其他藥物,導致快速↓膽固醇", "↑ 肝臟酵素升高反應出肝細胞受損", "消化或吸收不良導致體重下降", "便秘、腹瀉、噁心、胃痛、產氣、腹部絞痛或脹氣、嘔吐、心灼熱", "神經病變,如:焦慮、精神狀態改變", "心臟血管的改變,如:心跳速率、血壓", "攝取過多生物活性成份如:水溶性纖維、β-葡聚糖和大豆蛋白導致的不適或疼痛", "頭痛/偏頭痛", "蕁麻疹、臉潮紅", "激動或神經質", "攝食大量富含大豆蛋白、β-葡聚糖、植物固醇和植物酯等之植物性食品", "攝取到食物中含有干擾消化、吸收的成份", "方便取得含生物活性成份之食物/產品,如:來自膳食補充品供應商", "企圖使用含生物活性成份的補充品減重、治療便秘、預防或治療急慢性疾病等", "個案攝取到無法耐受之食品添加物(如:黃色5、6號、黃樟素、FD&C Red #4號、胭脂紅、味精、亞硫酸鹽等)", "對於生物活性成份,無法正確說明或知識不完整", "有下列疾病診斷或治療相關的狀況，如：心血管疾病、膽固醇升高、高血壓、氣喘", "心血管功能改變,如:EKG 異常" ]
      },
      "酒精攝取過多 (NI4.3)": {
        etiologies: [ "對於食物或營養相關議題的信念/態度沒有科學證據", "對於適量酒精攝取之食物與營養相關知識不足", "缺乏行為改變的核心價值,有競爭的價值觀", "酒精成癮" ],
        symptoms: [ "↑ AST、GGT、糖基缺乏轉鐵蛋白(CDT)、平均血球體積(MCV)、血液酒精濃度", "男性攝取量大於2個酒精當量/天，女性攝取量大於1個酒精當量/天", "有一次大量飲酒的行為(binge drinking)", "有不能喝酒的狀況但仍然飲酒,如懷孕", "有下列疾病診斷或治療相關的狀況,如:嚴重的高三酸甘油酯血症、血壓上升、憂鬱症、肝臟疾病、胰臟炎", "出現新醫療診斷或過去診斷或病情改變", "曾有飲酒過量的紀錄", "生過出現新生兒酒精症候群的孩子" ]
      },
      "營養素需求增加(需指明) (NI5.1)": {
        etiologies: [ "營養素的吸收或代謝改變,如:藥物引起", "與腸胃功能相關的器官受損,如:胰、肝", "具功能的小腸長度變短,如:短腸症", "腸道功能降低或受損,如:乳糜瀉(celiac disease)、克隆氏症(Crohn's disease) ", "營養素需求增加,如:快速成長、傷口癒合中、慢性感染等" ],
        symptoms: [ "↓ 總膽固醇<160mg/dL, 白蛋白、前白蛋白、CRP顯示生理壓力及代謝需求增加", "電質解/礦物質(如:K、Mg、P等)異常", "尿液或糞便中流失特定的或相關的營養素(如:糞便油脂、d-xylose test) ", "維生素及/或礦物質缺乏", "生長遲緩(依據生長曲線圖)及胎兒發育遲滯 ", "非計畫性體重減少,於一個月內大於5%或六個月大於10%", "體重過輕(BMI<18.5)", "體脂肪和肌肉質量佔比低 ", "維生素/礦物質缺乏的臨床表徵(如: 掉髮、牙齦出血、蒼白指甲) ", "皮膚組織流失、傷口癒合延遲、或壓瘡", "肌肉組織及皮下脂肪流失", "估算食物/營養補充品所攝取之營養素低於評估之需求量", "攝取之食物所含的營養素量不足(如: 過度加工、過度烹煮或儲存不當) ", "食物與營養相關知識不足,如:資訊缺乏或不正確,或對於攝取所需營養素不願遵從", "藥物影響所需營養素的吸收或代謝", "運動員或從事激烈體能活動的人", "有下列疾病診斷或治療的狀況,如:截腸手術、克隆氏症、愛滋病、燒傷、早產及營養不良" ]
      },
      "蛋白質-熱量攝取不足(NI5.2)": {
        etiologies: [ "代謝性疾病、吸收不良等的生理原因導致營養素需求增加", "攝取足夠蛋白質和熱量的能力下降", "食物獲取管道缺乏或受限制,如:經濟拮据、食物供給或選擇受限", "文化或宗教習俗影響獲取食物的能力", "對於適當量及型態的脂肪及/或蛋白質攝取之食物與營養相關知識不足", "心理因素造成,如憂鬱症或攝食異常" ],
        symptoms: [ "血白蛋白值正常(蛋白質-熱量攝取減少,但肝功能正常)", "孕婦的體重增加不足(輕度)", "成人體重減輕,3個月內7%、1個月內>5%,或1週1-2%;孩童任何體重減輕或沒有增加體重", "孩童生長遲緩", "壓瘡或手術後傷口癒合慢", "估算的熱量攝取低於估計或測量的RMR,或建議量", "某些類別食物受限或去除,如乳品或肉類(蛋白質);穀類(熱量)等", "近期對食物迴避或缺乏興趣", "製備食物能力不足", "酒精或降低飢餓感的藥物過量", "無法獲取足夠食物致常感飢餓", "有下列疾病診斷或治療相關的狀況:中度蛋白質-熱量攝取不足;近期疾病(如:肺部或心臟衰竭、流行性感冒、感染、手術等)", "營養素吸收不良(如:胃間隔手術、腹瀉、脂肪痢) ", "缺乏購買適當食物的款項" ]
      },
      "營養素需求減少(需指明)(NI5.3)": {
        etiologies: [ "腎臟功能異常", "肝臟功能異常", "膽固醇代謝/調節異常", "心臟衰竭", "食物耐受不良,如:腸激躁症" ],
        symptoms: [ "↑總膽固醇 >200 mg/dL, ↑ LDL-C >100 mg/dL, ↓ HDL-C <40 mg/dL, ↑ TG >150 mg/dL", "↑ 血磷值 >5.5 mg/dL", "↓腎絲球過濾率(GFR) <90 mL/min/1.73 m2", "↑ BUN、肌酸酐、血鉀", "↑ 肝功能檢驗呈現嚴重肝病", "兩次透析間體重增加大於預期", "水腫/水分滯留", "脂肪、磷、鈉、蛋白質或纖維等估計的攝取量大於建議量", "有下列疾病診斷或治療相關的狀況，如：心血管疾病、早期腎病、末期腎病、嚴重肝病、心衰竭、腸激躁症/克隆氏病發作", "診斷出高血壓、肝臟疾病相關的迷亂" ]
      },
      "營養素不均衡(NI5.4)": {
        etiologies: [ "進食高劑量的營養補充品", "對於營養素間交互作用之食物與營養相關知識不足", "對於食物或營養相關資訊的信念/態度沒有科學證據", "追隨流行食物", "開始給食(PN/EN,包括經口進食)的初期,電解質不足" ],
        symptoms: [ "嚴重低血磷症(醣類增加時) ", "嚴重低血鉀症(蛋白質增加時)", "嚴重低血鎂症(醣類增加時)", "腹瀉或便秘(補充鐵劑) ", "上腹痛、噁心、嘔吐或腹瀉(鋅補充劑) ", "鐵劑攝取大於建議量(鋅的吸收降低) ",  "鋅補充劑攝取大於建議量(銅含量降低)", "鎂攝取大於建議量(鐵含量降低) ", "再餵食症候群" ]
      },
      "脂肪攝取不足(NI5.5.1)": {
        etiologies: [ "腸胃道結構及/或功能改變", "食物選擇不理想,如:經濟的拮据、老人或兒童的食物配給有所限制、特殊的食物抉擇", "文化習俗影響選擇適當食物的能力", "對於適當的脂肪攝取量之食物與營養素相關知識不足", "心理因素,如憂鬱症或攝食異常" ],
        symptoms: [ "↑三烯酸:四烯酸比(Triene-tetraene ratio)> 0.2", "生長遲滯", "若熱量攝取不足則體重減輕", "EFA缺乏的鱗狀皮膚及皮膚炎 ", "EFA攝取低於總熱量10%(主要是靜脈營養相關)", "對相關知識說明不正確或不完整", "文化或宗教上的實踐影響食物攝取 ", "有下列疾病診斷或治療相關狀況,如:長期的代謝分解性疾病(如:愛滋病、結核病、神經性厭食症、敗血症或手術造成的嚴重感染)", "腸道切除、胰臟功能不足或肝病併發脂肪瀉造成嚴重的脂肪吸收不良" ]
      },
      "脂肪攝取過多(NI5.5.2)": {
        etiologies: [ "對於適當脂肪攝取之食物與營養相關知識不足", "對於食物、營養及其相關議題的信念/態度缺乏科學證據", "健康食物選擇的管道缺乏或受限,如:照護者或父母未提供健康食物的選擇、遊民", "口味、食慾或喜好改變", "缺乏行為改變的核心價值,有競爭性的價值觀", "生理因素造成脂肪需求或建議量減少" ],
        symptoms: [ "↑總膽固醇 >200 mg/dL, ↑ LDL-C >100 mg/dL, ↓ HDL-C <40 mg/dL, ↑ TG >150 mg/dL", "↑ 肝功能檢測值(LFTs)或總膽紅素", "↑ 血清澱粉酶及/或脂肪酶", "↑ 糞便脂肪 >7g/24 小時", "黃色瘤(xanthoma) ", "腹瀉、痙攣、脂肪瀉、上腹部疼痛 ", "經常或大量攝取高脂肪食物", "食物製備經常添加脂肪 ", "經常攝取高風險的脂肪(如:飽和脂肪、反式脂肪或膽固醇)", "自述食物所含脂肪量高於飲食處方", "使用藥物如:胰臟酵素、降膽固醇或降血脂藥物", "相關知識的敘述不正確或不完整", "闡述的信念或態度沒有科學證據", "有以下疾病診斷或治療的相關症狀,如:高脂血症、囊胞性纖維症、心絞痛、動脈粥狀硬化、胰肝膽等疾病、移植手術後、乳糜胸漏", "具下列家族病史:高脂血症、動脈粥狀硬化,或胰臟炎" ]
      },
      "脂肪型態攝取不符合需求(需指明) (NI5.5.3)": {
        etiologies: [ "對於脂肪型態之食物與營養相關知識不足(如:食物、配方/母奶中所添加的油脂)", "對於食物、營養,及營養相關議題的信念/態度沒有科學證據", "對健康食物選擇的管道缺乏或受限,如:照護者或父母未能提供健康食物的選擇、遊民", "口味、食慾或喜好改變", "缺乏行為改變的核心價值,具競爭性的價值觀", "生理因素造成脂肪酸需求或建議量改變" ],
        symptoms: [ "↑總膽固醇 >200 mg/dL, ↑ LDL-C >100 mg/dL, ↓男性 HDL-C <40mg/dL, ↓女性 HDL-C <50mg/dL, ↑ TG >150 mg/dL", "↑ 血清澱粉酶及/或脂肪酶", "↑ 肝功能檢測值(LFTs)、總膽紅素, C反應蛋白(CRP)", "酰基肉鹼(acylcarnitine)、肉鹼、及其他脂肪酸代謝物的改變", "三烯酸:四烯酸比(Triene-tetraene ratio)增高(>0.2) ", "血清或血漿粒線體 C8-C18、C2-C22、C22-C26 的脂肪酸鑲版改變", "皮膚炎(dermatitis)的證據", "腹瀉、痙攣、脂肪瀉、上腹部疼痛", "經常於食物製備時添加非期望型態之脂肪", "經常食用並不想食用之脂肪(如:飽和脂肪、反式脂肪、膽固醇、n-6脂肪酸、長鏈脂肪酸等)", "估計單元、多元不飽和脂肪、n-3脂肪酸,或DHA/ARA等食用量低於建議量或比例不理想 ", "口述的知識不準確或不完整", "闡述的信念或態度沒有科學證據", "有以下疾病診斷或治療相關的狀況,如:糖尿病、心臟病、肥胖、肝膽疾病、乳糜胸漏", "具下列家族病史:糖尿病相關心臟病、高脂血症、動脈粥狀硬化,或胰臟炎" ]
      },
      "蛋白質攝取不足(NI5.6.1)": {
        etiologies: [ "長期的代謝疾病、吸收不良,年老等生理因素所導致的營養需求增加", "攝取足夠蛋白質的能力降低", "食物的取得受限或缺乏,如:經濟拮据、供給年長者或孩童的食物有所限制等", "文化習俗影響食物取得能力", "對於蛋白質量之食物與營養相關知識不足", "心理因素造成,如:憂鬱症和攝食異常等" ],
        symptoms: [ "水腫、發育停滯(嬰兒/孩童), 肌肉組織不全, 皮膚失去光澤, 頭髮變細及脆弱", "估算攝取的蛋白質未達到需求量", "文化或是宗教習俗限制了蛋白質的攝取", "經濟拮据限制食物取得", "長時間進行極低蛋白的減重餐", "口述的知識不準確或不完整", "有下列疾病診斷或治療的相關狀況,如:截腸手術後的蛋白質嚴重吸收不良" ]
      },
      "蛋白質攝取過多(NI5.6.2)": {
        etiologies: [ "肝臟功能異常", "腎臟功能異常", "對於食物與營養相關議題的信念/態度不具科學證據", "食物與營養相關知識不足", "特殊的蛋白質產品取得受限或不足", "代謝異常", "追隨流行食物" ],
        symptoms: [ "生化數值異常,如: ↑ BUN, ↓ 腎絲球過濾率(腎功能異常) ", "依國家健康數據中心之生長曲線圖判定為生長停滯(代謝異常) ", "攝取之總蛋白質高於建議量,如:早期腎病變、出現迷亂的嚴重肝臟病變", "不適當的營養補充", "口述的知識不準確或不完整 ", "敘述食物的信念或態度不具科學證據", "有下列疾病診斷或治療的相關狀況,如:早期腎病變、出現迷亂的嚴重肝臟病變" ]
      },
      "蛋白質類別攝取不符合所需(需指明) (NI5.6.3)": {
        etiologies: [ "肝臟功能異常", "腎臟功能異常", "食物、營養及其相關議題的信念/態度不具科學證據", "特殊的蛋白質產品使用不正確", "代謝異常", "偏好流行食物", "先天性代謝異常", "乳糜瀉、庖疹樣皮膚炎,或其他腸胃疾病", "文化或宗教習俗影響調節所攝取之蛋白質類別或胺基酸的能力", "對於某特定類別之蛋白質或胺基酸攝取量的食物與營養相關知識不足", "對食物與營養遵從性受限,如:缺乏意願或無法回應營養師、醫生或照顧者的建議,調整蛋白質或胺基酸的攝取", "缺乏適當蛋白質來源的管道" ],
        symptoms: [ "生化值改變,如: ↑ BUN, ↓ 腎絲球過濾率(腎功能異常) ", "↑ 某特定的胺基酸(先天性代謝異常) ", "↑ 同胱胺酸(homocysteine)或氨 ", "自我免疫抗體陽性反應(Anti-tTG 抗體, EmA IgA) ", "小腸切片檢查,乳糜瀉或其他腸道疾病呈陽性反應 ", "體重減輕、體重無法增加、生長遲緩", "身體或神經性變化(先天性代謝異常)", "某種醣類造成之腹瀉", "腹痛、腹脹、便秘、迴流、GERD、嘔吐", "估算的蛋白質攝取量高於或低於建議量", "估算的熱量攝取低於建議量", "某些特定類別的蛋白質補充不恰當 ", "對蛋白質組成或其代謝的知識不足", "慢性用藥中含有不建議的蛋白質", "需要 EN/PN的疾病診斷或治療狀況、乳糜瀉、庖疹樣皮膚炎、過敏,以及先天性代謝異常 ", "尿毒症,氮質血症(腎臟病人) " ]
      },
      "胺基酸攝取類別不符合需求(需指明) (NI5.7.1)": {
        etiologies: [ "肝臟功能異常", "腎臟功能異常",  "食物、營養及其相關議題的信念/態度不具科學證據", "特殊的胺基酸產品使用不當", "代謝上需求或異常", "藥物與胺基酸交互作用", "先天性代謝異常", "對於某特定胺基酸適量攝取的食物與營養相關知識不足", "對食物與營養遵從性受限,如:缺乏意願或無法回應營養師、醫生或照顧者的建議,調整胺基酸的攝取", "缺乏適當胺基酸來源的管道" ],
        symptoms: [ "↑或↓ 血清、血漿或尿液中的特定胺基酸", "↑ 血清中的氨", "體重減輕、體重無法增加、生長遲緩", "身體或神經性的變化", "嘔吐、腹瀉、發揮", "估算胺基酸攝取量高於或低於建議量", "不恰當的胺基酸補充", "對胺基酸組成或其代謝的知識不足", "估算的熱量攝取低於建議量", "需要 EN/PN的疾病診斷或治療狀況、食物過敏或食物不耐症、先天性代謝異常、肝臟疾病、腎臟疾病" ]
      },
      "醣類攝取不足(NI5.8.1)": {
        etiologies: [ "生理因素造成,如:活動量增加、代謝改變或吸收不良導致熱量需求增加", "食物獲取管道缺乏或受限,如:經濟拮拒、老人及/或孩童的食物給予受限", "文化習俗影響食物的取得", "對於適當醣類攝取之食物與營養相關知識不足", "心理因素造成,如憂鬱症、攝食異常" ],
        symptoms: [ "呼吸中有酮體味", "估算醣類攝取低於建議量", "無法自行攝取食物/液體,如:手部關節或手腕活動力下降", "口述的知識不準確或不完整", "有下列疾病診斷或治療的相關狀況,如:胰臟功能不全、肝臟疾病、乳糜瀉(Celiac disease)、癲癇發作或醣類吸收不良" ]
      },
      "醣類攝取過多(NI5.8.2)": {
        etiologies: [ "生理因素需調整醣類攝取量,如:糖尿病、乳糖酶缺乏、蔗糖-異麥芽糖酶缺乏、醛縮酶-B缺乏", "文化習俗影響醣類攝取的能力", "對於適當醣類攝取之飲食與營養相關知識不足", "飲食與營養遵從性差,如:缺乏意願或無法執行營養師或醫師建議之醣類攝取", "心理因素造成,如:憂鬱症、攝食異常" ],
        symptoms: [ "高血糖(↑空腹血糖 >126mg/dl) ", "↑ HbA1c>6%", "↑ OGTT異常(2小時後血糖 >200mg/dl)", "齲齒", "腹瀉", "文化或宗教習俗不支持調整醣類攝取量", "估算醣類攝取量均高於建議量", "長期使用會引起高血糖的藥物,如:類固醇藥物", "口述的知識不準確或不完整", "有下列疾病診斷或治療的相關狀況,如:糖尿病、先天性醣類代謝異常、乳糖酶缺乏、嚴重感染、敗血症或肥胖", "胰臟功能不全造成胰島素分泌量降低 ", "經濟因素限制了適當食物的取得" ]
      },
      "醣類攝取型態不符合需要(需指明) (NI5.8.3)": {
        etiologies: [ "生理因素改變了醣類的消化與代謝,如:食物不耐症、先天性的醣類代謝異常", "文化或宗教習俗影響所攝取之醣類型態的調整", "對於某種型態醣類適量攝取之飲食與營養相關知識不足", "飲食與營養遵從性差,如:缺乏意願或無法執行營養師、醫師或照顧者之建議調整醣類攝取", "心理因素造成,如:憂鬱、攝食異常" ],
        symptoms: [ "高血糖或低血糖", "↓紅血球中半乳糖-1-磷酸鹽, ↓尿苷轉移酶半乳糖-1-磷酸鹽, ↓果糖", "體重流失、體重無法增加、生長遲滯", "體重增加", "攝取某些型態的醣類所引起的腹瀉", "腹部疼痛、腹脹、便秘、逆流、胃食道逆流", "商取某不同型態的醣類,或其攝取量超出建議量", "對食物中醣類的組成或醣類代謝的知識不足", "長期使用造成血糖值異常的藥物;如:類固醇、糖尿病用藥、抗憂鬱藥物、精神疾病用藥,或藥物中含有不建議型態的醣類", "文化或宗教習俗影響醣類攝取", "有下列疾病診斷或治療的相關狀況,如:食物不耐症、先天性醣類代謝異常", "某些醣類或含醣食物所引起的過敏反應或耐受不良", "經濟因素導致適當食物取得受限" ]
      },
      "醣類攝取不一致(NI5.8.4)": {
        etiologies: [ "生理上的原因需要醣類攝取定時定量,如:糖尿病、低血糖症、施予PN/EN時", "文化習俗影響醣類在固定時間攝取", "對於適當時間攝取醣類之飲食與營養相關知識不足", "飲食與營養遵從性差,如:缺乏意願或是無法按照營養師、醫師或照顧者所建議,調整醣類攝取時間", "心理因素造成,如:憂鬱症、攝食異常" ],
        symptoms: [ "與醣類攝取不一致相關的低血糖或高血糖", "血糖值變化大", "估算的醣類攝取與建議的醣類型態不同,或進食時間不規則", "使用胰島素或類胰島素", "長期使用使血糖值異常的藥物,如:類固醇、抗憂鬱劑、精神病用藥", "口述相關知識不準確或不完整", "文化或宗教習俗影響醣類攝取量", "有以下疾病診斷或治療相關的狀況,如:糖尿病、肥胖、代謝症候群、低血糖症", "經濟因素導致適當食物取得受限" ]
      },
      "纖維質攝取不足(NI5.8.5)": {
        etiologies: [ "含纖維質食物/飲品的獲取管道缺乏或受限", "對於理想纖維質攝取量之飲食與營養相關知識不足", "心理因素造成,如:憂鬱症及攝食異常", "長期使用低纖維質或低渣飲食", "對於高纖維食物咀嚼或吞嚥困難", "經濟因素造成適當食物取得受限", "沒能力或無意願採買富含纖維質的食物", "食物製備習慣不理想,如:依賴過度加工食品、過度烹調食物等" ],
        symptoms: [ "糞便量不足", "估算膳食纖維質攝取量無法達到建議量(男性38克/天,女性25克/天) ", "口述相關知識不準確不完整", "有以下疾病診斷或治療的相關狀況,如:潰瘍、發炎性腸病、短腸症候群使用低纖維飲食" ]
      },
      "纖維質攝取過多(NI5.8.6)": {
        etiologies: [ "對於攝取理想纖維質量之食物與營養相關知識不足", "或營養相關議題的信念或態度不具有科學證據,如:過度堅持排便的頻率與習慣", "缺乏攝取適當纖維量的知識", "製備食物或飲食型態只接受高纖食物,排除其他營養素密度高的食物" ],
        symptoms: [ "噁心、嘔吐、過多的脹氣、腹瀉、腹部絞痛、糞便量或次數過多導致不適", "估計纖維攝入量高於所能耐受,或現階段醫學上的建議", "口述相關知識不準確或不完整", "口述對食物的信念或態度不具科學證據", "有以下疾病診斷或治療的相關狀況,如:潰瘍疾病、腸躁症、發炎性腸病、短腸症候群、憩室炎、阻塞性便秘、脫垂型痔瘡、腸胃道狹窄、進食異常或是精神疾病伴隨強迫性傾向", "腸阻塞、植物性糞石(phytobezoar) " ]
      },
      "維生素攝取不足(需指明) (NI5.9.1)": {
        etiologies: [ "生理因素導致營養素需求增加,如:長期異化代謝的疾病、病中、吸收不良,或藥物影響等", "攝取足夠維生素的能力下降", "食物獲取管道缺乏或受限,如:經濟拮拒、老人及/或孩童的食物給予受限", "文化習俗影響食物的獲取能力", "對於含維生素的食物和營養補充品來源之食物與營養相關知識不足", "心理因素造成,如:憂鬱症或攝食異常", "季節、地理環境、陽光不足的獲得不足" ],
        symptoms: [ "生化數值異常（如：維生素A、C、D、E、K及B群、葉酸、泛酸、生物素之血清、血漿濃度或酵素活性異常變動）" ]
      },
      "其他": {
        etiologies: ["其他"],
        symptoms: ["其他"]
      }
    } //NI - Problem
  }, //NI
  
  NC: {
    label: "NC (臨床領域)",
    problems: {
      "吞嚥困難(NC1.1)": {
        etiologies: ["機械性的原因，如：發炎、手術、通道狹窄，或口腔、咽喉及食道的腫瘤；使用過呼吸器","運動性原因，如：神經性的或肌肉性的異常，如：腦性麻痺、中風、多發性硬化症、硬皮症；或早產、吸吮、吞嚥及呼吸型態的改變"],
        symptoms: ["吞嚥測試不正常", "脫水的徵象，如：黏膜乾燥、皮膚缺少彈性", "腦神經及顏面表情肌肉異常、作嘔反射 (gag reflex)、吞嚥和舌頭移動範圍不正常、咳嗽反射、流口水、顏面麻木、吞嚥太乾或太濕的食物都出現異常現象", "咳嗽、嗆到、咀嚼時間延長、食物滯留、胃酸迴流、進食時面部表情異樣、流口水、進食後發聲有濡濕音 (咕嚕咕嚕聲)、感覺食物塞住、吞嚥時疼痛", "進食時間延長", "估計食物攝取量減少", "迴避某些食物", "抗拒進餐時間", "有以下疾病診斷或治療相關的狀況，如：吞嚥困難、賁門弛緩不能", "上呼吸道反覆感染及/或發生肺炎" ]
      },
      "撕咬/咀嚼困難(NC1.2)": {
        etiologies: ["顱面畸形","口腔手術", "神經肌肉功能異常", "部分或完全沒有牙齒", "軟組織疾病 (原發性的或系統性疾病的口腔表徵)", "口乾症"],
        symptoms: ["缺牙或無牙","腦神經功能改變", "口乾", "口腔病變影響進食能力", "舌運動障礙", "不合適或破損的假牙", "食物攝取量減少", "不食用不易形成食糰的食物", "不食用適齡質地的食物", "吐出食物或進食時間延長", "酗酒", "阿茲海默症", "頭頸癌、腦性麻痺", "唇顎裂、口腔軟組織感染", "化療伴隨之口腔副作用", "口腔放射線治療"]
      },
      "腸胃道功能異常(NC1.4)": {
        etiologies: ["腸胃道結構及功能改變","腸胃道運動功能改變", "胰臟、肝臟功能受損", "正常功能之腸胃道長度變短"],
        symptoms: ["消化酵素及糞便脂肪試驗結果異常", "內視鏡或大腸鏡觀察結果", "貧血", "明顯的體重減輕", "脹氣", "厭食、噁心、嘔吐、腹瀉、脂肪瀉", "便秘、腹痛", "傾食症候群、胃炎", "腸胃道外科手術後"]
      },
      "預期母乳哺餵困難(NC1.5)": {
        etiologies: [ "預期乳汁分泌受干擾或不充足（例如：母親與嬰兒分離、母親因重病插管、接受特定藥物或手術治療）", "預期嬰兒吸吮能力受限（例如：早產兒、唇顎裂、神經系統發育不全）", "研究顯示個案過去或現階段存在的某一現象會增加其母乳哺餵困難的發生率（例如：缺乏哺餵母乳知識或支持系統）" ],
        symptoms: [ "可能阻礙母乳哺育，以群體為基礎的生化數據", "可能阻礙母乳哺育，以群體為基礎的體位測量數據", "可能阻礙母乳哺育，以群體為基礎的身體檢查預期結果", "過去曾發生母乳哺育的障礙或困難", "可能阻礙母乳哺育的藥物", "食物與營養知識不正確或不完整", "對食物營養的信念和態度不具科學證據", "預計要執行的療程，研究顯示其會造成母乳哺育障礙", "曾發生或目前的狀況，研究顯示會造成母乳哺育障礙", "可能造成母乳哺育障礙的政策是否制訂", "文化或宗教的規範或慣例", "家庭及/或社會對母乳哺育支持的缺乏或不足", "預期的生活壓力與變化" ]
      }, 
      "營養素利用障礙(NC2.1)": {
        etiologies: [ "危及腸胃相關器官的內分泌功能，如：胰臟、肝臟、腦下垂體及副甲狀腺", "代謝障礙，包含先天性代謝異常", "影響營養素代謝的藥物", "酒精或藥物成癮" ],
        symptoms: [ "蛋白質、脂肪酸或醣類代謝套組檢測異常", "肝功能異常", "貧血套組檢測異常", "腦下垂體荷爾蒙異常 (GH、ACTH、LH、FSH)", "維生素及/或礦物質缺乏", "低血糖、高血糖", "PTH異常", "尿液紫質(porphyrins)檢出", "體重流失 (1個月≧5％、6個月內≧10％)", "孩童生長遲緩或停滯", "骨礦物質密度檢測異常", "維生素及/或礦物質缺乏的證據，如：舌炎、口角炎、口腔病變", "外觀瘦弱", "身體症狀導致某些特定食物/整類食物之攝取不足或受限", "酒精或藥物的使用", "有以下疾病診斷或治療的相關狀況，如：纖維性囊腫、乳糜瀉、克隆氏症、感染、放射線治療、先天性代謝異常，腦下垂體異常、腎衰竭、肝衰竭、酒精或藥物濫用、內分泌異常、腦下垂體異常、腎衰竭、肝衰竭、急性或遺傳性紫質症、短腸症" ]
      },
      "營養相關的檢驗值改變(NC2.2)": {
        etiologies: [ "腎臟、肝臟、心臟、內分泌、神經的及/或肺臟的功能異常", "早產", "其他器官功能異常所導致的生化值改變", "代謝性異常，包含先天性代謝異常" ],
        symptoms: [ "↑ AST、ALT、T. bili、serum ammonia (肝臟疾病)", "↑ BUN, ↑ Cr, ↑ K, ↑ P, ↓ GFR (腎臟疾病)", "pO2及pCO2 異常 (肺部疾病)", "↑ 血脂肪", "↑ 血糖及/或糖化血色素", "血糖控制不當", "↑ 尿液微白蛋白", "蛋白質、脂肪酸或醣類代謝檢測異常", "其他急、慢性疾病的檢測異常發現，是源自營養相關的原因", "急速體重改變", "其他體位測量值的改變", "黃疸、水腫、腹水、搔癢症 (肝臟疾病)", "水腫、呼吸短促 (心臟疾病)", "藍指甲、杵狀指 (肺部疾病)", "厭食、噁心、嘔吐", "攝取過多蛋白質、鉀、磷、鈉或水分高的食物", "估計微量營養素的攝取量低於建議量", "食物與營養相關知識不足，如：資訊缺乏、資訊錯誤，或對調整飲食遵從性差", "有以下疾病診斷或治療相關的狀況，如：腎臟或肝臟疾病、酒精性中毒、心肺疾病、DM、先天性代謝異常" ]
      },
      "食物-藥物交互作用(NC2.3)": {
        etiologies: [ "容易導致交互作用的食物及藥物一併服用或施予" ],
        symptoms: [ "受到藥物影響或病人本身狀況所導致的生化檢驗值改變）", "受到藥物影響或病人本身狀況所導致的體位測量值改變，如：類固醇使用與體重增加", "食慾或味覺改變", "因攝取OTC、處方用藥、草藥、植物性藥物及營養補充品所產生的問題或不協調反應，如：魚油與出血時間延長、口服抗凝血劑與富含維生素K的食物、服用降膽固醇藥物時攝取高脂飲食、服用鐵補充劑、便秘，與低纖維飲食", "服用不能取代或緩和的OTC、處方藥、草藥、植物性藥物及營養補充品等的影響", "使用多種已知會導致食物-藥物交互作用的藥物 (OTC、處方藥、草藥、植物性藥物及營養補充品)", "使用需營養素補充的藥物，卻無法由所攝取的食物達成，如: isoniazid (結核病用藥)與維生素B6的補充" ]
      },
      "預期食物-藥物交互作用(NC2.4)": {
        etiologies: [ "容易導致交互作用的藥物與食物一併服用或施予" ],
        symptoms: [ "因攝取OTC、處方用藥、草藥、植物性藥物及營養補充品所產生的問題或不協調反應，如：魚油與出血時間延長、口服抗凝血劑與富含維生素K的食物、服用降膽固醇藥物時攝取高脂飲食、服用鐵補充劑、便秘，與低纖維飲食", "服用不能取代或緩和的OTC、處方藥、草藥、植物性藥物及營養補充品等的影響", "使用多種已知會導致食物-藥物交互作用的藥物 (OTC、處方藥、草藥、植物性藥物及營養補充品)", "使用需營養素補充的藥物，卻無法由所攝取的食物達成，如: isoniazid (結核病用藥)與維生素B6的補充" ]
      },
       "體重減輕(NC3.1)": {
        etiologies: [ "飲食型態異常", "身體活動過多", "對於食物、營養及營養相關議題的信念/態度不具科學證據", "熱量攝取不足", "熱量需求增加", "食物獲取受限", "胎兒小於妊娠年齡 (SGA)、胎兒生長遲滯/受限及/或胎兒體重不增加" ],
        symptoms: [ "↑ RMR 測量值高於期望值及/或評估值", "皮下脂肪厚度及中臂圍減少", "成人 BMI <18.5", "65歲以上老年人 BMI <22", "出生~2歲(年齡相對應的體重 <5th百分位、身高相對應的體重 <5th百分位)", "2~20歲(身高相對應的體重 <5th百分位、BMI < 5 th百分位 (2-20歲使用者)、年齡相對應的體重 <5th百分位)", "肌肉量減少、肌肉耗損 (臀部、太陽穴)", "飢餓", "估算食物攝取量低於需求的估計或測量值", "家中食物的供應有限", "節食，食物潮流", "拒食", "體能活動超過建議量", "影響食慾的藥物，如：治療 ADHD的刺激劑", "營養不良", "生病或行動不便", "精神疾病、失智症、心智混亂", "運動員、舞者、體操運動員", "維生素/礦物質缺乏" ]
      },
       "非意願性體重減輕(NC3.1)": {
        etiologies: [ "生理因素導致營養素需求增加，如：長期處於異化代謝的疾病、創傷、吸收不良等", "攝取足夠熱量的能力下降", "食物獲取管道缺乏或受限，如：經濟拮拒、老人及/或孩童的食物給予受限", "文化習俗影響食物的取得", "長期的住院治療", "心理因素，如：憂鬱症或攝食異常", "自我餵食的能力不足" ],
        symptoms: [ "成人體重減輕，1個月內≧5%，3個月≧7.5%，或6個月≧10%", "幼兒體重未如預期增加；6個月減輕5％及/或生長曲線百分位下移兩個百分位 (含)以上", "發燒", "感官功能減退，如：嗅覺、味覺、視覺", "心跳加快", "呼吸速率增加", "皮下脂肪與肌肉貯存減少", "衣服變得不合身", "精神狀態或功能改變，如：憂鬱症", "即使身體不適，但攝食仍正常", "攝食差，進食習慣改變，提早飽足，跳過正餐不吃", "藥物相關的體重減輕，如：某些抗憂鬱症藥物", "有下列疾病診斷或治療相關的狀況，如：愛滋病、燒傷、COPD、吞嚥困難、髖部或長骨骨折、感染、手術、創傷，甲狀腺機能亢進 (治療前或沒有治療) 、某些類的癌症或轉移 (需指明)，藥物濫用", "癌症化學治療" ]
      },
       "體重過重/肥胖(NC3.3)": {
        etiologies: [ "熱量需求減少", "攝取足夠熱量的能力下降", "攝食型態異常", "熱量攝取過量", "食物與營養相關知識不足", "尚未準備好執行食物/生活型態的調整", "身體活動量過低", "心理/生活壓力增加" ],
        symptoms: [ "↓ RMR 測量值低於期望值及/或估算值", "BMI 超過同年齡、同性別的正常標準", "腰圍超過同年齡、同性別的正常標準", "皮下脂肪厚度增加", "男性體脂肪>25%，女性體脂肪>32%", "身高相對應體重高於同年齡、同性別的正常標準", "體脂肪組織增加", "過度攝取高脂肪及/或熱量密度高的食物或飲品", "食物份量大 (份量超過建議量的2倍)", "估算的熱量攝取過多", "體能活動頻率低，持續時間及/或強度都低", "大量靜態活動，如：看電視、閱讀，閒暇及工作/就學時間都在使用電腦", "對營養相關建議疑惑", "沒有能力執行營養相關建議", "對營養相關建議沒有意願或沒興趣執行", "經由傳統的減重方式，無法明顯減去過多的體重", "使用影響RMR 的藥物，如midazolam (鎮靜劑)、propranalol、glipizide (糖尿病用藥) 等", "有下列疾病診斷或治療的相關狀況，如：甲狀腺機能低下、代謝症候群、非特異性的攝食異常、憂鬱症等", "身體殘障或活動受限制", "肥胖家族史", "幼童肥胖史", "曾經遭遇身體的、性的，或情緒的傷害"]
      },
       "非計劃性體重增加(NC3.4)": {
        etiologies: [ "疾病引起非預期的體重增加，如：頭部創傷、行動不便、癱瘓或相關的狀況、庫欣氏症候群 (Cushings's syndrome)、甲狀腺機能低下、其他內分泌疾病", "長期服用會導致體重增加的藥物，如：某些抗憂鬱藥物、抗精神病藥物、皮質類固醇、某些HIV用藥", "會造成水分滯留致體重增加的情況", "尚未準備好執行飲食/生活型態的調整" ],
        symptoms: [ "↓ 血清白蛋白", "↓ 血鈉", "↑ 空腹血脂肪濃度", "↑ 空腹血糖濃度", "波動的荷爾蒙濃度", "↑ 皮質醇", "↑ 生長激素", "↑ 促甲狀腺激素", "↓甲狀腺素(T4)",  "體重增加,任何不是期望的或計劃的增加", "體重增加,1個月內>5%、3個月>7.5%、6個月>10%(成人)", "脂肪囤積、皮下脂肪儲存過量、明顯的體脂肪分佈改變", "伴隨或並沒有心悸、顫抖、出汗的極度飢餓", "水腫", "呼吸短促", "肌肉無力", "疲倦", "其攝取量估計值與預估或實際測量的熱量需求值不一致", "近期食物攝取量改變", "水分給予超過需求量", "使用酒精、麻醉劑", "藥物導致食慾增加", "體能活動量不足或強度改變", "有以下疾病診斷或治療的相關狀況，如：氣喘、精神疾病、風濕性疾病、庫欣氏症候群、肥胖、Prader-willi syndrome (普拉德威力症候群) 、唐氏症、脊柱裂、甲狀腺機能不足、腦下垂體問題" ]
      },
       "生長速度低於預期(NC3.5)": {
        etiologies: [ "生理因素導致營養素需求增加 (如：急重症或創傷；懷孕；代謝性疾病，如：T1DM；吸收不良等)", "攝取足夠熱量的能力下降", "食物獲取管道缺乏或受限", "心理因素，如：憂鬱症或攝食異常", "食物接受度差", "食物與營養相關知識不足", "對於食物與營養相關議題的信念或態度不具科學證據", "胎兒小於妊娠年齡 (SGA)、胎兒生長受限/遲滯、 體重增加不適當、妊辰劇吐症" ],
        symptoms: [ "尿酮陽性、↑空腹或飯後血糖濃度", "懷孕期的荷爾蒙濃度波動", "鋅缺乏", "鐵缺乏", "蛋白質、脂肪酸、醣類代謝檢測異常", "年齡相對應體重的生長曲線下修2個百分位 (含)以上", "體重增加速率低於預期，以既定參考標準及/或指標建議為基準", "年齡相對應身高的生長曲線下修2個百分位 (含)以上", "身高增加速率低於預期，以既定參考標準及/或指標建議為基準", "肌肉量減少、肌肉耗損 (臀部、太陽穴)", "飢餓", "脂肪組織減少", "估算其熱量攝取不符合預估或測量需求值", "水份的限制導致無法達到營養需求", "母乳哺餵困難，如：不易唅住乳頭", "食物接受度差，如：沒有進展到期望的或建議的食物", "使用導致食慾減退或體重下降的藥物", "懷孕期間酗酒或吸毒", "身體活動強度增加" , "生病時期攝食量仍照常", "攝食量不足、飲食習慣改變、提早有飽足感，或跳過正餐", "有以下影響生長的診斷或治療相關狀況，包括：AIDS/HIV、燒傷、肺部疾病、吞嚥困難、長骨骨折、感染、手術、創傷、甲狀腺機能亢進、甲狀腺機能低下、藥物濫用、某些癌症或其轉移之疾病、先天性代謝異常", "食物不安全"]
      },
       "生長速度過快(NC3.6)": {
        etiologies: [ "熱量攝取過多", "經常攝取熱量密度高的食物", "食物與營養相關知識不足", "身體活動量不足", "尚未準備好執行飲食/生活型態的調整", "長期使用某些藥物，如：抗憂鬱症藥物、抗精神病藥物、及皮質類固醇" ],
        symptoms: [ "↑ 皮質醇", "↑ 生長激素", "↑ 促甲狀腺激素", "↓甲狀腺素(T4)", "以參考標準值、建議值,或對生長型態的瞭解為基準,體重增加量高於預期", "以參考標準值及/或指標為基準,體重增加速率高於預期", "身長相對應體重或年齡-BMI值增加超過預期", "孕期體重增加速率高於預期", "恥骨到子宮頂的高度 (宮高)超過妊娠週數正常值", "估算攝取熱量不符合預估或測量值所需", "藥物相關的食慾增加或體重上升", "身體活動量下降", "由信念、態度或行為顯示，尚未做好改變的準備", "有以下影響生長的診斷或治療相關狀況，如：普拉德威力症候群 (Prader-willi- syndrome)、唐氏症、 脊柱裂 (spina- bifida)、巨人症、腦下垂體腫瘤、庫欣氏症候群、甲狀腺機能低下與影響飽足感的神經性病變等" ]
      },
       "營養不良(NC4.1)": {
        etiologies: [ "生理因素導致營養素的需求增加，如：早產、遺傳/先天疾病、生病不適、急、慢性的或外傷/創傷", "腸胃道的構造及/或功能異常", "食物獲取管道缺乏或受限，如：經濟拮拒、老人及/或孩童的食物給予受限、受虐或被忽視、自資源匱乏或長期戰亂的國家近期被領養/移民/難民等", "文化或宗教習俗影響食物的取得能力", "對於熱量與飲食蛋白質型態及份量的食物與營養相關知識缺乏", "心理因素，如：憂鬱或攝食異常"],
        symptoms: [ "成人：營養不良可能發生在任何體重/BMI", "孕母體重增加不足", 
                  "成人：非計畫性的體重下降，一年內>20%，六個月內>10%，三個月內>7.5%，一個月內>5%，一週內>1～2%",
                  "兒童：身高/身長相對應的體重、年齡相對應的BM，或上臂中圍的z score≦ -1", 
                  "兒童：年齡相對應的身高/身長的z score≦ -3", 
                  "(A)皮下脂肪減少，如：眼窩的、三頭肌皮下脂肪、覆蓋肋骨的脂肪",
                  "(A)肌肉量減少，如：太陽穴 (顳肌)、鎖骨 (胸大肌與三角肌)、肩膀 (三角肌)、骨間肌肉、肩胛骨 (背闊肌、斜方肌、三角肌)、大腿 (股四頭肌)與小腿 (腓腸肌)的耗損", 
                  "(A)局部或全身性的水分蓄積 (四肢、外陰/陰囊、腹水）", 
                  "(P)坦納氏期進展停滯 (青春期性徵分期)",  
                  "(A)熱量攝取估計<50~75%的熱量需求估算值或實際測量值", 
                  "(A)功能指標改變，如：手握力或其他身體活動及/或強度的測量值", 
                  "(P)當可取得二個 (含)以上：熱量攝取估計值：<75%的熱量需求估算值或實際測量值+蛋白質攝取估計值：<年齡對應的RDA", 
                  "(A) AN、良性食道狹窄、受虐、被忽視、貧窮、虛弱、任何會造成食物取得受限的因素 (因週遭社會與環境因素導致的營養不良)", 
                  "(A)器官衰竭、惡性腫瘤、類風濕性疾病、腸胃道疾病、肌少型肥胖症、吸收不良症候群、與其他涵蓋卻非僅限於的病因：糖尿病、鬱血性心衰竭與慢性阻塞性肺病 (因慢性疾病/狀況因素導致的營養不良)", 
                  "(A)重大感染，如：敗血症、肺炎、腹膜炎與傷口感染、較嚴重的燙傷、創傷、閉鎖型頭部外傷、急性肺部損傷、成人急性呼吸窘迫症候群、某些大型外科手術 (與急性損傷/疾病導致的營養不良相關)", 
                  "(A)目前的營養不良醫學診斷包含：急性損傷/疾病、慢性疾病/狀況的背景下的營養不良，以及環境與社會氛圍因素下的營養不良", 
                  "(P)有早產、先天性出生缺損 (心臟、腎臟、腸胃、神經、肺部)的病史", 
                  "(P)遺傳或後天導致的狀況：腦性麻痺、纖維化囊腫、癲癇、代謝性疾病、IBD", 
                  "(P)生長遲緩、餵食困難、食物過敏、嗜酸性腸炎" ]
      }
    } //NC-Problem
  }, //NC
  
  NB: {
    label: "NB (行為環境領域)",
    problems: {
      "食物與營養相關知識缺乏(NB1.1)": {
        etiologies: ["對於食物與營養相關議題的信念或態度沒有科學證據", "未接受過飲食衛教", "不瞭解嬰幼兒發出飢餓的訊號", "文化背景與信念影響學習或應用資訊的能力", "認知能力受損，包括學習障礙、神經或感覺受損及／或失智症", "過去接受到錯誤的訊息", "不願意或沒興趣學習或應用相關資訊", "不確定如何應用營養相關資訊" ],
        symptoms: ["口述的知識不正確或不完整", "針對需填寫的問卷或書面文件回答不正確或不完整", "無法閱讀文字資料", "未曾接受食物與營養相關需求的建議", "從未接受如何應用食物與營養訊息的教育", "應用食物與營養相關資訊的能力不足", "涉及過去學習新知的企圖", "口述沒意願或沒興趣學習新知", "有某種疾病診斷或治療的相關狀況", "有新的醫療診斷或既有病況改變", "種族或文化相關議題影響新知應用"]
      },
     "對於食物或營養相關議題的信念／態度不具科學證據(NB1.2)": {
        etiologies: ["不信任以科學為根據的食物和營養資訊", "之前未接收到正確的營養相關資訊", "飲食行為是為了不是營養的其他目的（如：異食症）", "期待使用替代療法治癒某種慢性疾病" ],
        symptoms: ["偏好流行食物", "估算攝食量反映出營養素或食物類別攝取不均衡", "對某些食物或某些類別食物迴避（如：糖、小麥、熟食等）", "攝食非食品品項", "使用可能對健康無益的補充療法、另類療法產品或膳食補充品", "與疾病診斷或治療有關的狀況（如：肥胖、糖尿病、癌症、心血管疾病、精神疾病）", "異食癖", "食物癖好"]
      },
     "尚未準備好飲食／生活型態的改變(NB1.3)": {
        etiologies: ["對於食物、營養及其相關議題的信念或態度不具科學證據", "認知能力受損，包括學習障礙、神經或感官受損及／或失智", "缺乏執行改變的社會支持", "否定改變的需要", "自覺在時間、人際關係或財務上的限制阻礙改變", "無意願或沒興趣學習或應用資訊", "缺乏改變的自我效能", "曾有失敗經驗而士氣低落" ],
        symptoms: [ "負面的肢體語言（如：皺眉、缺乏眼神接觸、防禦姿態、注意力不集中、坐立不安）", "否定食物或營養相關改變的需要性", "無法了解改變的需要性", "未依約進行後續追蹤或諮詢", "先前有行為改變失敗的經驗", "對改變具防禦性、敵意或抗拒", "缺少改變的效益感", "無法克服改變的障礙", "影響身體活動進行的因子"]
      },
     "自我監測不足(NB1.4)": {
        etiologies: [ "對於自我監測之食物與營養相關知識不足", "缺乏執行自我改變的社會支持", "缺乏行為改變或力爭上游的價值觀", "自覺缺乏資源（如：時間、經濟或人際關係等）而阻礙改變", "文化習俗影響個人改變進展的追蹤", "認知能力受損，包括學習障礙、神經或感官受損及／或失智", "先前接收過有矛盾的資訊", "尚未準備好飲食或生活型態的改變", "不願意或無興趣追蹤改變進度", "不注意細節，時間管理或組織能力有困難"],
        symptoms: [ "紀錄的資料和生化檢驗值不一致，如：估算的飲食攝取量和生化檢驗值不一致", "自我監測紀錄不完整，如：血糖、食物、水分攝取、體重、體能活動、人工造廔輸出量紀錄等", "估計的食物攝取量和體重或生長數據資料不一致", "對於需要自我監測覺得難堪或生氣", "不確定如何完成監測紀錄", "不確定所能或所應做的修正一定會反應在自我監測的數據上", "沒有自我管理的儀器裝備，如：沒有血糖機、計步器等", "口述不準確或知識不完整", "文化或宗教慣例影響攝取量", "有需要自我監測的相關疾病診斷，如：糖尿病、肥胖、新增人工造廔等", "有新的疾病診斷或過去的診斷與病況改變", "缺乏社會與家庭的支持"]
     },
      "攝食異常(NB1.5)": {
        etiologies: [ "家族、社會、生物或遺傳因素，以及環境因素影響，導致對『纖細/瘦身』的過度渴望", "體重控制與自尊高度連結，體像認知扭曲影響自我評價", "對體重與身形有過度關注與先入為主的價值觀", "慢性節食或飲食限制行為作為主要飲食模式", "情緒、焦慮或人格特質異常影響飲食行為（如憂鬱、強迫傾向）", "家族中存在攝食異常、焦慮或憂鬱等精神疾病史"],
        symptoms: [ "體重過低（BMI <17.5）或體重低於預期體重85%（AN）", "體重明顯起伏（BN）或BMI過高（>29，EDNOS）", "生長遲滯或發育停滯（青少年）", "脂肪組織與體蛋白質嚴重耗損（AN）或正常/過多（BN）", "低血糖、低血鉀、低血氯與代謝性鹼中毒（AN/BN）", "低血鈉、甲狀腺功能減退、BUN上升（AN）", "尿酮體出現（AN）", "心跳緩慢（<60 bpm）、低血壓、直立性低血壓（AN）", "心律不整（AN/BN）", "體溫偏低、長期覺得寒冷（AN）", "肌肉減少、無力、疲倦、脫水（AN/BN）", "注意力不集中與認知功能下降（AN）", "皮膚乾燥、手腳青紫、胎毛增加、頭髮易斷（AN）", "Russell’s sign（催吐造成手背胼胝）（BN）",
    "牙齒琺瑯質受損（BN）", "腮腺腫大（BN）", "周邊水腫（BN）", "便秘、腹脹、嗝氣（BN）", "自行催吐、使用瀉劑、利尿劑或其他藥物濫用（BN/AN）", "過度運動與體能活動（AN/BN/EDNOS）", "拒食或拒絕含熱量飲品（AN/BN）", "否認飢餓感（AN）", "對食物恐懼或認知扭曲（AN/BN）", "過度關注飲食、營養資訊與流行飲食（AN/BN/EDNOS）", "快速進食、暴食行為或失控進食（BN/EDNOS）", "暴食後罪惡感或私下進食（BN/EDNOS）", "飲食行為刻板化、缺乏彈性（AN/BN）", "使用瀉藥、灌腸劑、興奮劑或代謝促進藥物（AN/BN）", "情緒不穩、焦慮或憂鬱症狀", "貧血、白血球減少等血液學異常", "社交退縮與避免含食物的社交活動" ]
     }
    } //Problem
  } //NB
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
export const EXERCISE_TYPES = ['排球', '羽毛球', '爬山', '腳踏車', '游泳', '快走', '慢跑', '瑜珈', '肌力訓練'];
export const ACTIVITY_FACTORS = ['無', '輕度', '中度', '重度'] as const;
export const INTERVENTION_CATEGORIES = ['低脂乳品類', '全脂乳品類', '全榖雜糧類', '低氮澱粉', '低脂豆魚蛋肉類', '中脂豆魚蛋肉類', '蔬菜類', '水果類', '油脂與堅果類'];
export const DIET_LOG_CATEGORIES = ['低脂奶類', '全脂奶類', '低脂豆魚蛋肉類', '中脂豆魚蛋肉類', '全穀雜糧類', '蔬菜類', '水果類', '油脂與堅果種子類', '外食類', '醬料類'];

export const BIO_RANGES: Record<string, { min?: number; max?: number; label: string }> = {
  HbA1c: { max: 5.7, label: '< 5.7' },
  AC: { max: 110, label: '< 110' },
  PC: { max: 140, label: '< 140' },
  FPG: { max: 200, label: '< 200' },
  UPCR: { max: 150, label: '< 150' },
  BUN: { min: 8, max: 26, label: '8-26' },
  Cr: { min: 0.6, max: 1.3, label: '0.6-1.3' },
  Na: { min: 136, max: 145, label: '136-145' },
  K: { min: 3.5, max: 5.1, label: '3.5-5.1' },
  TC: { max: 200, label: '< 200' },
  HDL: { label: '男>40|女>50' },
  AST: { max: 40, label: '< 40' },
  ALT: { max: 40, label: '< 40' },
  TG: { max: 150, label: '< 150' },
  LDL: { max: 130, label: '<100(理想)' },
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
