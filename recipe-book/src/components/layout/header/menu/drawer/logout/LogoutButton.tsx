'use client'
import IconButton from "@/components/ui/button/iconButton/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLogout } from "../../../hooks";

/**
 * ログアウトボタン
 */
export default function LogoutButton({
    onLogout
}: {
    onLogout?: () => void
}) {
    const { logout } = useLogout();
    const handleClick = () => onLogout && logout;

    return (
        <IconButton
            icon={<LogoutIcon />}
            tooltip
            tipTitle="ログアウト"
            tipOffset={[0, -14]}
            ariaLabel="ログアウト"
            onClick={handleClick} />
    )
}