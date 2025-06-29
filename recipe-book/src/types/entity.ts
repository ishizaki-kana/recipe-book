type RecipeWithCategory = {
    id: number;
    name: string;
    imageUrl: string | null;
    category: {
        name: string;
        id: number;
        icon: string;
        color: string;
    }
}