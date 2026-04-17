import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClientHistory, Anthropometry, Biochemistry, Clinical, DietHistory, FoodEntry } from "@/src/types/nutrition";
import { FOOD_DATABASE, EXCHANGE_VALUES } from "@/src/constants/food";
import { Search, Plus, Trash2 } from "lucide-react";

interface Props {
  assessment: any;
  onChange: (path: string, value: any) => void;
}

export function NutritionAssessment({ assessment, onChange }: Props) {
  const { clientHx, anthropometry, biochemistry, clinical, diet, foodEntries, waterIntake } = assessment;

  // Calculations
  const calculateStandardWeight = (height: number, gender: string) => {
    if (!height) return 0;
    const hInM = height / 100;
    return gender === 'male' ? 22 * hInM * hInM : 22 * hInM * hInM; // Simplified for now
  };

  const calculateAdjustedWeight = (weight: number, standardWeight: number) => {
    if (!weight || !standardWeight) return 0;
    return (weight - standardWeight) / 4 + standardWeight;
  };

  const calculateBMI = (weight: number, height: number) => {
    if (!weight || !height) return 0;
    const hInM = height / 100;
    return weight / (hInM * hInM);
  };

  const handleAnthropometryChange = (field: keyof Anthropometry, value: any) => {
    const newValues = { ...anthropometry, [field]: value };
    if (field === 'height' || field === 'weight') {
      const sw = calculateStandardWeight(newValues.height, clientHx.gender);
      const aw = calculateAdjustedWeight(newValues.weight, sw);
      const bmi = calculateBMI(newValues.weight, newValues.height);
      newValues.standardWeight = Number(sw.toFixed(1));
      newValues.adjustedWeight = Number(aw.toFixed(1));
      newValues.bmi = Number(bmi.toFixed(1));
    }
    onChange('assessment.anthropometry', newValues);
  };

  const addFoodEntry = (food: typeof FOOD_DATABASE[0]) => {
    const entry: FoodEntry = {
      id: Math.random().toString(36).substr(2, 9),
      name: food.name,
      category: food.category,
      portions: 1,
      carbs: food.carbs,
      protein: food.protein,
      fat: food.fat,
      na: food.na,
      k: food.k,
      p: food.p,
      calories: (food.carbs * 4) + (food.protein * 4) + (food.fat * 9),
      meal: 'lunch'
    };
    onChange('assessment.foodEntries', [...foodEntries, entry]);
  };

  const removeFoodEntry = (id: string) => {
    onChange('assessment.foodEntries', foodEntries.filter((e: FoodEntry) => e.id !== id));
  };

  const updateFoodPortion = (id: string, portions: number) => {
    onChange('assessment.foodEntries', foodEntries.map((e: FoodEntry) => {
      if (e.id === id) {
        const factor = portions / e.portions;
        return {
          ...e,
          portions,
          carbs: Number((e.carbs * factor).toFixed(1)),
          protein: Number((e.protein * factor).toFixed(1)),
          fat: Number((e.fat * factor).toFixed(1)),
          na: Number((e.na * factor).toFixed(1)),
          k: Number((e.k * factor).toFixed(1)),
          p: Number((e.p * factor).toFixed(1)),
          calories: Number((e.calories * factor).toFixed(1))
        };
      }
      return e;
    }));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="client" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="client">個案史</TabsTrigger>
          <TabsTrigger value="anthropometry">體位測量</TabsTrigger>
          <TabsTrigger value="biochemistry">生化數值</TabsTrigger>
          <TabsTrigger value="clinical">臨床狀況</TabsTrigger>
          <TabsTrigger value="diet">飲食評估</TabsTrigger>
          <TabsTrigger value="intake">飲食攝取</TabsTrigger>
        </TabsList>

        <TabsContent value="client">
          <Card>
            <CardHeader>
              <CardTitle>個案史 (Client Hx)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>姓名</Label>
                <Input value={clientHx.name} onChange={(e) => onChange('assessment.clientHx.name', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>性別</Label>
                <Select value={clientHx.gender} onValueChange={(v) => onChange('assessment.clientHx.gender', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇性別" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">男</SelectItem>
                    <SelectItem value="female">女</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>生日</Label>
                <Input type="date" value={clientHx.birthday} onChange={(e) => onChange('assessment.clientHx.birthday', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>工作狀況</Label>
                <Select value={clientHx.workStatus} onValueChange={(v) => onChange('assessment.clientHx.workStatus', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇狀況" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="working">在職中</SelectItem>
                    <SelectItem value="retired">退休</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>活動因子</Label>
                <Select value={clientHx.activityFactor} onValueChange={(v) => onChange('assessment.clientHx.activityFactor', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇活動因子" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">無</SelectItem>
                    <SelectItem value="light">輕度</SelectItem>
                    <SelectItem value="moderate">中度</SelectItem>
                    <SelectItem value="heavy">重度</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-full space-y-2">
                <Label>Medical Hx / Surgical Hx</Label>
                <div className="flex flex-wrap gap-4">
                  {['糖尿病', '腎臟病', '心血管', '痛風', '腎結石', '高血脂'].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox
                        id={item}
                        checked={clientHx.medicalHistory.includes(item)}
                        onCheckedChange={(checked) => {
                          const newHx = checked
                            ? [...clientHx.medicalHistory, item]
                            : clientHx.medicalHistory.filter((i: string) => i !== item);
                          onChange('assessment.clientHx.medicalHistory', newHx);
                        }}
                      />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                </div>
              </div>
              {clientHx.medicalHistory.includes('腎臟病') && (
                <div className="space-y-2">
                  <Label>腎臟病期別</Label>
                  <Input value={clientHx.kidneyStage} onChange={(e) => onChange('assessment.clientHx.kidneyStage', e.target.value)} placeholder="第幾期" />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anthropometry">
          <Card>
            <CardHeader>
              <CardTitle>體位測量 (Anthropometry)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label>身高 (cm)</Label>
                <Input type="number" value={anthropometry.height} onChange={(e) => handleAnthropometryChange('height', Number(e.target.value))} />
              </div>
              <div className="space-y-2">
                <Label>體重 (kg)</Label>
                <Input type="number" value={anthropometry.weight} onChange={(e) => handleAnthropometryChange('weight', Number(e.target.value))} />
              </div>
              <div className="space-y-2">
                <Label>標準體重 (kg)</Label>
                <Input type="number" value={anthropometry.standardWeight} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>調整體重 (kg)</Label>
                <Input type="number" value={anthropometry.adjustedWeight} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>BMI</Label>
                <Input type="number" value={anthropometry.bmi} readOnly className="bg-muted" />
              </div>
              <div className="space-y-2">
                <Label>體脂率 (%)</Label>
                <Input type="number" value={anthropometry.bodyFat} onChange={(e) => handleAnthropometryChange('bodyFat', Number(e.target.value))} />
              </div>
              <div className="flex items-center space-x-2 pt-8">
                <Checkbox id="edema" checked={anthropometry.edema} onCheckedChange={(v) => handleAnthropometryChange('edema', !!v)} />
                <Label htmlFor="edema">有無水腫</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biochemistry">
          <Card>
            <CardHeader>
              <CardTitle>生化數值 (Biochemistry)</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <Label>血壓 (BP)</Label>
                <Input value={biochemistry.bp} onChange={(e) => onChange('assessment.biochemistry.bp', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>FPG</Label>
                <Input value={biochemistry.fpg} onChange={(e) => onChange('assessment.biochemistry.fpg', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>HbA1c (%)</Label>
                <Input value={biochemistry.hba1c} onChange={(e) => onChange('assessment.biochemistry.hba1c', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>BUN</Label>
                <Input value={biochemistry.bun} onChange={(e) => onChange('assessment.biochemistry.bun', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Cr</Label>
                <Input value={biochemistry.cr} onChange={(e) => onChange('assessment.biochemistry.cr', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>eGFR</Label>
                <Input value={biochemistry.egfr} onChange={(e) => onChange('assessment.biochemistry.egfr', e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Alb</Label>
                <Input value={biochemistry.alb} onChange={(e) => onChange('assessment.biochemistry.alb', e.target.value)} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diet">
          <Card>
            <CardHeader>
              <CardTitle>飲食評估 (Diet)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>飲食型態</Label>
                <Select value={diet.pattern} onValueChange={(v) => onChange('assessment.diet.pattern', v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇型態" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oral">經口進食</SelectItem>
                    <SelectItem value="special">特殊飲食</SelectItem>
                    <SelectItem value="tube">管灌飲食</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>飲食偏好</Label>
                <Input value={diet.preference} onChange={(e) => onChange('assessment.diet.preference', e.target.value)} placeholder="如：葷食、素食、蛋奶素等" />
              </div>
              <div className="space-y-2">
                <Label>飲食史紀錄</Label>
                <Input value={diet.dietaryHistory} onChange={(e) => onChange('assessment.diet.dietaryHistory', e.target.value)} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intake">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>飲食攝取紀錄</CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="搜尋食物資料庫..." className="pl-8" />
                </div>
                <Select onValueChange={(v) => {
                  const food = FOOD_DATABASE.find(f => f.name === v);
                  if (food) addFoodEntry(food);
                }}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="新增食物" />
                  </SelectTrigger>
                  <SelectContent>
                    {FOOD_DATABASE.map(f => (
                      <SelectItem key={f.name} value={f.name}>{f.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full border rounded-md">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>餐次</TableHead>
                      <TableHead>食物名稱</TableHead>
                      <TableHead>份量</TableHead>
                      <TableHead>熱量</TableHead>
                      <TableHead>醣類</TableHead>
                      <TableHead>蛋白質</TableHead>
                      <TableHead>脂肪</TableHead>
                      <TableHead>鈉</TableHead>
                      <TableHead>鉀</TableHead>
                      <TableHead>磷</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {foodEntries.map((entry: FoodEntry) => (
                      <TableRow key={entry.id}>
                        <TableCell>
                          <Select value={entry.meal} onValueChange={(v) => {
                            onChange('assessment.foodEntries', foodEntries.map((e: FoodEntry) => e.id === entry.id ? { ...e, meal: v } : e));
                          }}>
                            <SelectTrigger className="w-24">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="breakfast">早餐</SelectItem>
                              <SelectItem value="lunch">午餐</SelectItem>
                              <SelectItem value="dinner">晚餐</SelectItem>
                              <SelectItem value="morningSnack">早點</SelectItem>
                              <SelectItem value="afternoonSnack">午點</SelectItem>
                              <SelectItem value="eveningSnack">晚點</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="font-medium">{entry.name}</TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={entry.portions}
                            onChange={(e) => updateFoodPortion(entry.id, Number(e.target.value))}
                            className="w-20"
                          />
                        </TableCell>
                        <TableCell>{entry.calories}</TableCell>
                        <TableCell>{entry.carbs}</TableCell>
                        <TableCell>{entry.protein}</TableCell>
                        <TableCell>{entry.fat}</TableCell>
                        <TableCell>{entry.na}</TableCell>
                        <TableCell>{entry.k}</TableCell>
                        <TableCell>{entry.p}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => removeFoodEntry(entry.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4 bg-muted rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">總熱量</p>
                  <p className="text-xl font-bold">{foodEntries.reduce((acc: number, e: FoodEntry) => acc + e.calories, 0).toFixed(0)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">總醣類</p>
                  <p className="text-xl font-bold">{foodEntries.reduce((acc: number, e: FoodEntry) => acc + e.carbs, 0).toFixed(1)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">總蛋白</p>
                  <p className="text-xl font-bold">{foodEntries.reduce((acc: number, e: FoodEntry) => acc + e.protein, 0).toFixed(1)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">總脂肪</p>
                  <p className="text-xl font-bold">{foodEntries.reduce((acc: number, e: FoodEntry) => acc + e.fat, 0).toFixed(1)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">總鈉</p>
                  <p className="text-xl font-bold">{foodEntries.reduce((acc: number, e: FoodEntry) => acc + e.na, 0).toFixed(0)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">總鉀</p>
                  <p className="text-xl font-bold">{foodEntries.reduce((acc: number, e: FoodEntry) => acc + e.k, 0).toFixed(0)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">總磷</p>
                  <p className="text-xl font-bold">{foodEntries.reduce((acc: number, e: FoodEntry) => acc + e.p, 0).toFixed(0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
