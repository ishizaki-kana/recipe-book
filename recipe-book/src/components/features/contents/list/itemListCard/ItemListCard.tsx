import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import ItemList from "../itemList/ItemList";

export default function ItemListCard({
    category,
    color,
    icon,
}: {
    category: string
    color: string
    icon: IconProp
}) {

    return (
        <Card
            variant="outlined"
            raised
            sx={{ borderColor: color }}
        >
            <CardHeader
                title={category}
                slotProps={{ title: { variant: 'h6' } }}
                avatar={<Avatar sx={{ bgcolor: color, p: 1, width: 32, height: 32 }}>
                    <FontAwesomeIcon icon={icon} color={"white"} size="2xs" />
                </Avatar>}
            />
            <CardContent>
                <ItemList />
            </CardContent>
        </Card>
    )
}