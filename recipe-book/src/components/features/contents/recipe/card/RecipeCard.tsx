import { iconMap } from "@/lib/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

export default function RecipeCard({
    recipe
}: {
    recipe: RecipeWithCategory
}) {

    const NO_IMG_URL = "https://res.cloudinary.com/drf6p5cyv/image/upload/v1750930122/no_image.png";

    // アイコン
    const icon = (
        <Avatar slotProps={{ root: { sx: { p: 1, bgcolor: recipe.category.color } } }}>
            <FontAwesomeIcon icon={iconMap[recipe.category.icon as keyof typeof iconMap]} />
        </Avatar>
    )


    return (
        <Card>
            <CardHeader avatar={icon} title={recipe.name} />
            <CardMedia
                component="img"
                height={194}
                alt={`${recipe.name}の画像`}
                image={
                    recipe.imageUrl && recipe.imageUrl !== "" ? recipe.imageUrl : NO_IMG_URL
                }
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {recipe.name}
                </Typography>
            </CardContent>
        </Card>
    )
}