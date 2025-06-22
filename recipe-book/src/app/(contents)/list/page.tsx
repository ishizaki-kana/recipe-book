import ItemListCard from "@/components/features/contents/list/itemListCard/ItemListCard";
import { faBacon, faCarrot, faCartShopping, faCheese, faFish, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { Box, Container } from "@mui/material";
import { blue, brown, grey, red, teal, yellow } from "@mui/material/colors";

export default function Home() {
    return (
        <Container>
            <Box display={"grid"} sx={{ p: 3, placeItems: "center" }}>
                <Box display={"flex"} flexWrap={"wrap"} gap={3} sx={{ py: 3, maxWidth: "100%" }}>
                    <ItemListCard
                        category="野菜"
                        color={teal[800]}
                        icon={faCarrot} />
                    <ItemListCard
                        category="肉"
                        color={red[800]}
                        icon={faBacon} />
                    <ItemListCard
                        category="魚"
                        color={blue[800]}
                        icon={faFish} />
                    <ItemListCard
                        category="乳製品"
                        color={yellow[800]}
                        icon={faCheese} />
                    <ItemListCard
                        category="調味料"
                        color={brown[800]}
                        icon={faSeedling} />
                    <ItemListCard
                        category="その他"
                        color={grey[800]}
                        icon={faCartShopping} />
                </Box>
            </Box>
        </Container>
    )
}