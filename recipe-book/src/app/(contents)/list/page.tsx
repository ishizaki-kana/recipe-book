import ItemListContainer from "@/components/features/contents/list/components/ItemListContainer";
import CenteredContainer from "@/components/layout/container/CenteredContainer";
import FlexContainer from "@/components/layout/container/FlexContainer";
import { Paper } from "@mui/material";

// TODO : テストデータ
const listCategories = [
    { id: 1, name: '野菜', icon: 'carrot', color: 'teal' },
    { id: 2, name: '肉', icon: 'bacon', color: 'red' },
    { id: 3, name: '魚', icon: 'fish', color: 'blue' },
    { id: 4, name: '乳製品', icon: 'cheese', color: 'orange' },
    { id: 5, name: '調味料', icon: 'seedling', color: 'brown' },
    { id: 6, name: 'その他', icon: 'cart', color: 'blueGrey' }
]

const listItems = [
    {
        id: 2,
        name: 'test',
        volume: '200g',
        recipeName: null,
        categoryId: 2,
        isDone: false
    },
    {
        id: 4,
        name: 'テスト',
        volume: '2本',
        recipeName: null,
        categoryId: 1,
        isDone: false
    },
    {
        id: 5,
        name: 'テスト',
        volume: '200g',
        recipeName: null,
        categoryId: 4,
        isDone: false
    },
    {
        id: 6,
        name: 'test',
        volume: '200g',
        recipeName: null,
        categoryId: 5,
        isDone: false
    },
    {
        id: 7,
        name: 'test',
        volume: '200g',
        recipeName: null,
        categoryId: 6,
        isDone: false
    },
    {
        id: 8,
        name: 'test',
        volume: '200g',
        recipeName: null,
        categoryId: 3,
        isDone: false
    },
    {
        id: 9,
        name: 'test',
        volume: '200g',
        recipeName: null,
        categoryId: 2,
        isDone: false
    }
]

export default async function ListPage() {
    //const listCategories = await getAllListCategories();
    //const listItems = await getAllListItems();

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

                <FlexContainer direction={'column'} gap={3} sx={{ py: 4 }}>
                    <ItemListContainer initialListItems={listItems} listCategories={listCategories} />
                </FlexContainer>

            </Paper>
        </CenteredContainer>
    )
}