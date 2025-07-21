import EggAltIcon from '@mui/icons-material/EggAlt';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { User } from '@prisma/client';
import Menu from './menu/Menu';

/**
 * ヘッダー
 */
export default function Header({
    user
}: {
    user: User
}) {

    return (
        <AppBar component='nav'>
            <Toolbar>
                <Menu user={user} />
                <Box display='flex' alignItems='center' gap={1}>
                    <EggAltIcon />
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        RECIPE BOOK
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}