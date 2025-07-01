type RecipeSummaryType = {
    id: number;
    name: string;
    imageUrl: string | null;
    shelfLife: string | null;
    calories: number | null;
    category: {
        id: number;
        name: string;
        icon: string;
        color: string;
    }
}

type RecipeDetailType = {
    id: number;
    name: string;
    imageUrl: string | null;
    shelfLife: string | null;
    calories: number | null;
    category: {
        id: number;
        name: string;
        icon: string;
        color: string;
    }
}