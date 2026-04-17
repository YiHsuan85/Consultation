import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DM_REFERENCE, CKD_REFERENCE, EDUCATION_TOPICS } from "@/src/constants/intervention";

interface Props {
  intervention: any;
  onChange: (path: string, value: any) => void;
}

export function NutritionIntervention({ intervention, onChange }: Props) {
  const { plan, education } = intervention;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>營養介入 (Nutrition Intervention)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="dm" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dm">糖尿病 (DM) 建議份量</TabsTrigger>
              <TabsTrigger value="ckd">慢性腎臟病 (CKD) 建議份量</TabsTrigger>
            </TabsList>
            <TabsContent value="dm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>熱量 (kcal)</TableHead>
                    <TableHead>乳品</TableHead>
                    <TableHead>蛋豆魚肉</TableHead>
                    <TableHead>全榖雜糧</TableHead>
                    <TableHead>蔬菜</TableHead>
                    <TableHead>水果</TableHead>
                    <TableHead>油脂</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(DM_REFERENCE).map(([kcal, values]) => (
                    <TableRow key={kcal}>
                      <TableCell className="font-bold">{kcal}</TableCell>
                      <TableCell>{values.dairy}</TableCell>
                      <TableCell>{values.protein}</TableCell>
                      <TableCell>{values.grains}</TableCell>
                      <TableCell>{values.veg}</TableCell>
                      <TableCell>{values.fruit}</TableCell>
                      <TableCell>{values.oil}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="ckd">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>熱量 (kcal)</TableHead>
                    <TableHead>蛋豆魚肉</TableHead>
                    <TableHead>全榖雜糧</TableHead>
                    <TableHead>低氮澱粉</TableHead>
                    <TableHead>蔬菜</TableHead>
                    <TableHead>水果</TableHead>
                    <TableHead>油脂</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(CKD_REFERENCE).map(([kcal, values]) => (
                    <TableRow key={kcal}>
                      <TableCell className="font-bold">{kcal}</TableCell>
                      <TableCell>{values.protein}</TableCell>
                      <TableCell>{values.grains}</TableCell>
                      <TableCell>{values.lowN}</TableCell>
                      <TableCell>{values.veg}</TableCell>
                      <TableCell>{values.fruit}</TableCell>
                      <TableCell>{values.oil}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>

          <div className="space-y-4">
            <Label className="text-lg font-bold">衛教重點</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {EDUCATION_TOPICS.map((topic) => (
                <div key={topic} className="flex items-center space-x-2">
                  <Checkbox
                    id={topic}
                    checked={education.includes(topic)}
                    onCheckedChange={(checked) => {
                      const newEdu = checked
                        ? [...education, topic]
                        : education.filter((t: string) => t !== topic);
                      onChange('intervention.education', newEdu);
                    }}
                  />
                  <Label htmlFor={topic} className="text-sm">{topic}</Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
