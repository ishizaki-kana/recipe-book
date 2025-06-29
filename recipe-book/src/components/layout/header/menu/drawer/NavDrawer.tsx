'use client'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import LogoutButton from "./logout/LogoutButton";

export default function NavDrawer({
    user,
    navLinks,
    drawerOpen,
    handleDrawerToggle,
    closeDrawer
}: {
    user: User,
    navLinks: { text: string, path: string }[],
    drawerOpen: boolean,
    handleDrawerToggle: () => void
    closeDrawer: () => void
}) {
    const router = useRouter();

    /**
     * メニューリンククリックイベント
     * 
     * @param path リンクのパス
     */
    const handleMenuLinkClick = (path: string) => {
        router.push(path);
        closeDrawer();
    }

    return (

        <nav>
            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
                }}>

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
                        <Typography>{user?.userName}</Typography>

                        <LogoutButton />
                    </Box>
                </Box>
            </Drawer>
        </nav >
    )
}