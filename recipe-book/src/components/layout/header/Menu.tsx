'use client'

import IconButton from "@/components/ui/button/iconButton/IconButton";
import { useAppContext } from "@/hooks/useAppContext";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;
const navItems: string[] = ['レシピ', 'カレンダー', '買い物リスト'];

export default function Menu() {
    const { loginUser } = useAppContext();

    //ドロワーの開閉状態
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{
                height: '100%',
                p: 2,
                bgcolor: 'primary.main'
            }}>
            <List>
                {navItems.map(item => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item} sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ bgcolor: 'white', borderRadius: '5px', pl: 2, pr: 2, pt: 1, pb: 1 }}>
                <Typography>{loginUser?.name}</Typography>

                <Tooltip title="ログアウト" arrow>
                    <IconButton
                        icon={<LogoutIcon />}
                        tooltip
                        tipTitle="ログアウト"
                        tipOffset={[0, -14]} />
                </Tooltip>
            </Box>
        </Box>
    );

    return (
        <>
            <IconButton
                icon={<MenuIcon />}
                color="inherit"
                aria-label="メニューを開く"
                edge="start"
                sx={{ mr: 2 }}
                onClick={handleDrawerToggle} />

            <nav>
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}>
                    {drawer}
                </Drawer>
            </nav>
        </>
    )
}