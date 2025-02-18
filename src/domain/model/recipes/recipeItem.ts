export interface RecipesData {
    recipes: RecipeItem[]
}

export interface RecipeItem {
    id: number;
    image: string;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: null;
    cookingMinutes: null;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license: null;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    summary: string;
    cuisines: any[];
    dishTypes: string[];
    diets: string[];
    occasions: any[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
    originalId: null;
    spoonacularScore: number;
    spoonacularSourceUrl: string;
}

interface AnalyzedInstruction {
    name: string;
    steps: Step[];
}

interface Step {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Ingredient[];
    length: Length;
}

interface Length {
    number: number;
    unit: string;
}

interface Ingredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

interface ExtendedIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: Measures;
}

interface Measures {
    us: Us;
    metric: Us;
}

interface Us {
    amount: number;
    unitShort: string;
    unitLong: string;
}