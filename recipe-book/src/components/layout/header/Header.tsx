
import EggAltIcon from "@mui/icons-material/EggAlt";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Menu from "./Menu";

export default function Header() {

    return (
        <AppBar component={"nav"}>
            <Toolbar>
                <Menu />
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