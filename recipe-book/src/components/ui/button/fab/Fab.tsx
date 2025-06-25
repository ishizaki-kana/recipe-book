import MuiFab from '@mui/material/Fab';
import { ReactNode } from 'react';

export default function Fab({
    children,
    size,
}: {
    children: ReactNode
    size?: "small" | "medium" | "large"
}) {

    return (
        <MuiFab
            color='primary'
            size={size}>
            {children}
        </MuiFab>
    )
}