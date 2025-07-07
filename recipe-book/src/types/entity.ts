export type RecipeSummaryType = {
    id: number;
    name: string;
    imageUrl: string;
    shelfLife: string | null;
    calories: number | null;
    category: {
        id: number;
        name: string;
        icon: string;
        color: string;
    }
}

export type RecipeDetailType = {
    id: number;
    name: string;
    imageUrl: string;
    shelfLife: string | null;
    calories: number | null;
    category: {
        id: number;
        name: string;
        icon: string;
        color: string;
    },
    ingredients: {
        id: number;
        name: string;
        volume: string | null;
    }[],
    steps: {
        id: number;
        text: string;
        seasonings: {
            id: number;
            name: string;
            volume: string | null;
        }[] | null;
    }[]
}