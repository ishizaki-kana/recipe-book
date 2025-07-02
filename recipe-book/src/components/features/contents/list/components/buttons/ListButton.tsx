import Button from "@/components/ui/button/Button"
import { CircularProgress, ListItemIcon, ListItemText, MenuItem } from "@mui/material"
import { MouseEventHandler, ReactNode } from "react"

export default function ListButton({
    text,
    icon,
    loading,
    isMobile,
    onClick
}: {
    text: string
    icon: ReactNode
    loading?: boolean
    isMobile: boolean
    onClick: MouseEventHandler<HTMLElement> | undefined
}) {

    if (isMobile) return (
        <MenuItem dense onClick={onClick}>
            <ListItemIcon>
                {loading ? <CircularProgress size={16} color="ui" /> : icon}
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>
        </MenuItem>
    )

    return (
        <Button
            variant="outlined"
            startIcon={icon}
            loading={loading}
            onClick={onClick}>
            {text}
        </Button>
    )
}