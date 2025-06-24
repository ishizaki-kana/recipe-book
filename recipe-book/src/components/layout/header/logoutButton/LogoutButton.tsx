import IconButton from "@/components/ui/button/iconButton/IconButton";
import { apiGet } from "@/lib/fetch";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    /**
     * クリックイベント
     */
    const handleLogoutButton = async () => {
        await apiGet('/auth/logout');
        router.push('/login');
    };

    return (
        <IconButton
            icon={<LogoutIcon />}
            tooltip
            tipTitle="ログアウト"
            tipOffset={[0, -14]}
            onClick={handleLogoutButton} />
    )
}