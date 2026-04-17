import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MonitoringRecord } from "@/src/types/nutrition";
import { Plus, Trash2, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Props {
  monitoring: MonitoringRecord[];
  onChange: (path: string, value: any) => void;
}

export function NutritionMonitoring({ monitoring, onChange }: Props) {
  const addRecord = () => {
    const newRecord: MonitoringRecord = {
      date: new Date().toISOString().split('T')[0],
      weight: 0,
      hba1c: 0,
      egfr: 0,
      tg: 0,
      ldl: 0
    };
    onChange('monitoring', [...monitoring, newRecord]);
  };

  const removeRecord = (index: number) => {
    onChange('monitoring', monitoring.filter((_, i) => i !== index));
  };

  const updateRecord = (index: number, field: keyof MonitoringRecord, value: any) => {
    onChange('monitoring', monitoring.map((r, i) => i === index ? { ...r, [field]: value } : r));
  };

  const getTrendIcon = (current: number, previous: number) => {
    if (!previous) return <Minus className="h-4 w-4 text-muted-foreground" />;
    if (current > previous) return <TrendingUp className="h-4 w-4 text-destructive" />;
    if (current < previous) return <TrendingDown className="h-4 w-4 text-green-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>營養監測 (Nutrition Monitoring)</CardTitle>
          <Button onClick={addRecord} size="sm">
            <Plus className="mr-2 h-4 w-4" /> 新增監測紀錄
          </Button>
        </CardHeader>
        <CardContent className="space-y-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>日期</TableHead>
                <TableHead>體重 (kg)</TableHead>
                <TableHead>HbA1c (%)</TableHead>
                <TableHead>eGFR</TableHead>
                <TableHead>TG</TableHead>
                <TableHead>LDL</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {monitoring.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Input
                      type="date"
                      value={record.date}
                      onChange={(e) => updateRecord(index, 'date', e.target.value)}
                      className="w-32"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={record.weight}
                        onChange={(e) => updateRecord(index, 'weight', Number(e.target.value))}
                        className="w-20"
                      />
                      {index > 0 && getTrendIcon(record.weight, monitoring[index - 1].weight)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        value={record.hba1c}
                        onChange={(e) => updateRecord(index, 'hba1c', Number(e.target.value))}
                        className="w-20"
                      />
                      {index > 0 && getTrendIcon(record.hba1c, monitoring[index - 1].hba1c)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={record.egfr}
                      onChange={(e) => updateRecord(index, 'egfr', Number(e.target.value))}
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={record.tg}
                      onChange={(e) => updateRecord(index, 'tg', Number(e.target.value))}
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={record.ldl}
                      onChange={(e) => updateRecord(index, 'ldl', Number(e.target.value))}
                      className="w-20"
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => removeRecord(index)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {monitoring.length > 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-4">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-sm font-medium">體重變化趨勢</CardTitle>
                </CardHeader>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monitoring}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="weight" stroke="#8884d8" name="體重 (kg)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
              <Card className="p-4">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-sm font-medium">血糖變化趨勢 (HbA1c)</CardTitle>
                </CardHeader>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monitoring}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="hba1c" stroke="#82ca9d" name="HbA1c (%)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
