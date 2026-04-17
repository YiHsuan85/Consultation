import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Trash2, Plus } from "lucide-react";
import { DIAGNOSIS_DATA } from "@/src/constants/diagnosis";
import { PES } from "@/src/types/nutrition";

interface Props {
  diagnosis: PES[];
  onChange: (path: string, value: any) => void;
}

export function NutritionDiagnosis({ diagnosis, onChange }: Props) {
  const addDiagnosis = () => {
    const newPes: PES = {
      id: Math.random().toString(36).substr(2, 9),
      domain: "",
      problem: "",
      etiology: "",
      symptoms: ""
    };
    onChange('diagnosis', [...diagnosis, newPes]);
  };

  const removeDiagnosis = (id: string) => {
    onChange('diagnosis', diagnosis.filter(d => d.id !== id));
  };

  const updateDiagnosis = (id: string, field: keyof PES, value: string) => {
    onChange('diagnosis', diagnosis.map(d => {
      if (d.id === id) {
        const updated = { ...d, [field]: value };
        // Reset dependent fields if domain or problem changes
        if (field === 'domain') {
          updated.problem = "";
          updated.etiology = "";
          updated.symptoms = "";
        } else if (field === 'problem') {
          updated.etiology = "";
          updated.symptoms = "";
        }
        return updated;
      }
      return d;
    }));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>營養診斷 (Nutrition Diagnosis)</CardTitle>
        <Button onClick={addDiagnosis} size="sm">
          <Plus className="mr-2 h-4 w-4" /> 新增診斷
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {diagnosis.map((pes, index) => {
          const domainData = DIAGNOSIS_DATA.find(d => d.label === pes.domain);
          const problemData = domainData?.problems[pes.problem as keyof typeof domainData.problems];

          return (
            <div key={pes.id} className="p-4 border rounded-lg space-y-4 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => removeDiagnosis(pes.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>領域 (Domain)</Label>
                  <Select value={pes.domain} onValueChange={(v) => updateDiagnosis(pes.id, 'domain', v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="選擇領域" />
                    </SelectTrigger>
                    <SelectContent>
                      {DIAGNOSIS_DATA.map(d => (
                        <SelectItem key={d.label} value={d.label}>{d.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>問題 (Problem)</Label>
                  <Select
                    value={pes.problem}
                    onValueChange={(v) => updateDiagnosis(pes.id, 'problem', v)}
                    disabled={!pes.domain}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="選擇問題" />
                    </SelectTrigger>
                    <SelectContent>
                      {domainData && Object.keys(domainData.problems).map(p => (
                        <SelectItem key={p} value={p}>{p}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>原因 (Etiology)</Label>
                  <Select
                    value={pes.etiology}
                    onValueChange={(v) => updateDiagnosis(pes.id, 'etiology', v)}
                    disabled={!pes.problem}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="選擇原因" />
                    </SelectTrigger>
                    <SelectContent>
                      {problemData?.etiologies.map(e => (
                        <SelectItem key={e} value={e}>{e}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>症狀 (Symptoms)</Label>
                  <Select
                    value={pes.symptoms}
                    onValueChange={(v) => updateDiagnosis(pes.id, 'symptoms', v)}
                    disabled={!pes.problem}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="選擇症狀" />
                    </SelectTrigger>
                    <SelectContent>
                      {problemData?.symptoms.map(s => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded text-sm font-medium">
                PES Statement: {pes.problem || "P"} related to {pes.etiology || "E"} as evidenced by {pes.symptoms || "S"}
              </div>
            </div>
          );
        })}
        {diagnosis.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            尚未新增任何營養診斷。點擊「新增診斷」開始。
          </div>
        )}
      </CardContent>
    </Card>
  );
}
