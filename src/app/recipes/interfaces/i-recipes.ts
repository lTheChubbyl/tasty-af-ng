export interface IRecipes {
    extendedIngredients: { original: string }[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    image: string;
    summary: string;
    dishTypes: string[];
    analyzedInstructions: { steps: string[] };
    author?: string;
}
