export interface Food {
  name: string;
  macroNutrients: MacroNutrients;
}

export interface MacroNutrients {
  fat: number;
  carbohydrate: number;
  protein: number;
}
