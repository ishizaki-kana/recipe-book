import { User } from "@/generated/prisma";
import EggAltIcon from "@mui/icons-material/EggAlt";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Menu from "../menu/Menu";

export default function Header({
    user
}: {
    user: User
}) {

    return (
        <AppBar component={"nav"}>
            <Toolbar>
                <Menu user={user} />
                <Box display={"flex"} gap={1} alignItems={"center"}>
                    <EggAltIcon />
                    <Typography
                        variant="h6"
                        component={"div"}
                        sx={{ flexGrow: 1 }}>
                        RECIPE BOOK
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}