import CenteredContainer from '@/components/layout/container/center/CenteredContainer';
import { RecipeDetail } from '@/types/entity';
import { Box, Divider, Paper, Stack } from '@mui/material';
import RecipeContent from '../../content/RecipeContent';
import RecipeTitle from '../../content/item/title/RecipeTitle';

/**
 * レシピ詳細カード
 */
export default function RecipeDetailCard({
    recipe
}: {
    recipe: RecipeDetail
}) {

    return (
        <CenteredContainer sx={{ py: 2 }}>
            <Paper elevation={10}
                component={Stack}
                sx={{ height: '100%', width: '100%', overflow: 'auto' }}>

                {/* title */}
                <Box sx={{ px: 3, py: 2 }}>
                    <RecipeTitle recipe={recipe} />
                </Box>
                <Divider />

                {/* content */}
                <RecipeContent recipe={recipe} />
            </Paper>
        </CenteredContainer>
    )
}