export interface IRecipes {
    extendedIngredients: string[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    image: string;
    summary: string;
    dishTypes: string[];
    analyzedInstructions: string[];
    authorName?: string;
}
