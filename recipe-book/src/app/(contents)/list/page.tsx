import ItemListContainer from "@/components/features/contents/list/components/ItemListContainer";
import CenteredContainer from "@/components/layout/container/center/CenteredContainer";
import { apiGetServer } from "@/lib/fetchServer";
import { Paper, Stack } from "@mui/material";
import { ListCategory, ListItem } from "@prisma/client";

export const dynamic = 'force-dynamic';

export default async function ListPage() {
    const listCategories: ListCategory[] = await apiGetServer('/list-category/find?all=true');
    const listItems: ListItem[] = await apiGetServer('/list-item/find?all=true');

    return (
        <CenteredContainer sx={{ py: 2 }}>
            <Paper elevation={5}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
                    height: '100%',
                    pt: { xs: 2 },
                    pl: 4,
                    pr: 3,
                }}>

                <Stack direction='column' gap={3} sx={{ py: 4 }}>
                    <ItemListContainer initialListItems={listItems} listCategories={listCategories} />
                </Stack>

            </Paper>
        </CenteredContainer>
    )
}