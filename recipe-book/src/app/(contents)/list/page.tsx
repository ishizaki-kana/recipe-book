import ItemList from "@/components/features/contents/list/itemList/ItemList";
import CenteredContainer from "@/components/layout/container/center/CenteredContainer";
import { getAllListCategories } from "@/repositories/listCategoryRepository";
import { getAllListItems } from "@/repositories/listItemRepository";
import { Box, Paper } from "@mui/material";

export default async function Home() {
    const listCategories = await getAllListCategories();
    const listItems = await getAllListItems();

    return (
        <CenteredContainer>
            <Paper elevation={5}
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    pl: 4,
                    pr: 3,
                }}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                        width: '100%',
                        height: '100%',
                        py: 4
                    }}
                >
                    <ItemList listItems={listItems} listCategories={listCategories} />
                </Box>
            </Paper>
        </CenteredContainer >
    )
}