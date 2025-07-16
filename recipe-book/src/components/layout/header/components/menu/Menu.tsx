'use client'

import IconButton from "@/components/ui/button/iconButton/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { User } from "@prisma/client";
import { useMenu } from "../../hooks";
import NavDrawer from "../drawer/NavDrawer";



export default function Menu({
    user
}: {
    user: User
}) {

    const { drawerOpen, handleDrawerToggle, navigate } = useMenu();
    return (
        <>
            <IconButton
                icon={<MenuIcon />}
                color="inherit"
                aria-label="メニューを開く"
                edge="start"
                sx={{ mr: 2 }}
                onClick={handleDrawerToggle} />

            <NavDrawer
                user={user}
                navLinks={navLinks}
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                navigate={navigate} />
        </>
    )
}