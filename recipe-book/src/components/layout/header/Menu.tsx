'use client'

import IconButton from "@/components/ui/button/iconButton/IconButton";
import { User } from "@/generated/prisma";
import { apiGet } from "@/lib/fetch";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const drawerWidth = 240;
const navLinks = [
    { text: 'レシピ', path: '/recipe' },
    { text: 'カレンダー', path: '/calendar' },
    { text: '買い物リスト', path: '/list' }];

export default function Menu({
    user
}: {
    user: User
}) {
    const router = useRouter();

    //ドロワーの開閉状態
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    /**
     * ドロワー開閉イベント
     */
    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    /**
     * メニューリンククリックイベント
     */
    const handleMenuLinkClick = (path: string) => {
        router.push(path);
        setDrawerOpen(false);
    }

    /**
     * ログアウトボタンクリックイベント
     */
    const handleLogoutButton = async () => {
        await apiGet('/auth/logout');
        router.push('/login');
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
                {navLinks.map(link => (
                    <ListItem key={link.text} disablePadding>
                        <ListItemButton onClick={() => handleMenuLinkClick(link.path)}>
                            <ListItemText primary={link.text} sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Box display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ bgcolor: 'white', borderRadius: '5px', pl: 2, pr: 2, pt: 1, pb: 1 }}>
                <Typography>{user?.name}</Typography>

                <Tooltip title="ログアウト" arrow>
                    <IconButton
                        icon={<LogoutIcon />}
                        tooltip
                        tipTitle="ログアウト"
                        tipOffset={[0, -14]}
                        onClick={handleLogoutButton} />
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