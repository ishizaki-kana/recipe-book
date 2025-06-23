import MuiAlert from "@mui/material/Alert";
import { ReactNode } from "react";

export default function Alert({
    children,
    severity,
    visible
}: {
    children: ReactNode
    severity?: 'success' | 'info' | 'warning' | 'error'
    visible: boolean
}) {

    if (!visible) return null;

    return (
        <MuiAlert
            severity={severity}>
            {children}
        </MuiAlert>
    );
}