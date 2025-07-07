import Chip, { ChipColors } from "@/components/ui/display/Chip";
import { Stack, Typography } from "@mui/material";
import { RecipeCategory } from "@prisma/client";

export default function RecipeTitle({
    title,
    category
}: {
    title: string
    category: RecipeCategory
}) {

    return (
        <>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Typography variant="h6" component="h2" fontWeight={500}>{title}</Typography>
                <Chip
                    label={category.name}
                    color={category.color as ChipColors} />
            </Stack>
        </>
    )
}