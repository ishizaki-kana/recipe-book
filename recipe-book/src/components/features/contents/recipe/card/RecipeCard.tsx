'use client'
import FlexContainer from "@/components/layout/container/FlexContainer";
import Chip, { ChipColors } from "@/components/ui/display/Chip";
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getFullImageUrl } from "../util";

export default function RecipeCard({
    recipe
}: {
    recipe: RecipeSummaryType
}) {
    const router = useRouter();

    // 選択状態管理
    const [selected, setSelected] = useState(false);

    // 画像のURL
    const imageUrl = getFullImageUrl(recipe.imageUrl);

    // クリックイベント
    const handleClick = () => {
        setSelected(!selected);
        router.push(`/recipe/${recipe.id}`);
    }

    return (
        <Card raised
            sx={{ width: '100%', height: '300px', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea
                data-active={selected}
                onClick={handleClick}
                sx={{
                    height: '100%', display: 'flex', flexDirection: 'column',
                    alignItems: 'flex-start', justifyContent: 'flex-start'
                }}>

                <CardHeader
                    title={recipe.name}
                    slotProps={{
                        title: {
                            variant: 'body1'
                        }
                    }} />

                <CardMedia
                    component="img"
                    width={'100%'}
                    height={165}
                    alt={`${recipe.name}の画像`}
                    image={imageUrl}
                    sx={{ objectFit: 'cover' }}
                />

                <CardContent>
                    <Chip label={recipe.category.name} color={recipe.category.color as ChipColors} />
                    <FlexContainer direction="row" justifyContent="flex-start" gap={1}>

                        {recipe.shelfLife &&
                            <Typography variant="body2" color="text.secondary">
                                {recipe.shelfLife}
                            </Typography>
                        }
                        {recipe.shelfLife && recipe.calories &&
                            <Typography variant="body2" color="text.secondary">/</Typography>
                        }
                        {recipe.calories &&
                            <Typography variant="body2" color="text.secondary">
                                {recipe.calories}kcal
                            </Typography>
                        }
                    </FlexContainer>
                </CardContent>

            </CardActionArea>
        </Card>
    )
}