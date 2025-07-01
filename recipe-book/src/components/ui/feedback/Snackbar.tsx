import { Alert } from '@mui/material';
import MuiSnackbar from '@mui/material/Snackbar';

export default function Snackbar({
    open,
    message,
    severity,
    handleClose,
}: {
    open?: boolean
    message?: string
    severity?: 'success' | 'info' | 'warning' | 'error'
    handleClose?: () => void
}) {

    return (
        <MuiSnackbar
            open={open}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={handleClose}>
            <Alert
                severity={severity}
                onClose={handleClose}>{message}</Alert>
        </MuiSnackbar>
    );
}