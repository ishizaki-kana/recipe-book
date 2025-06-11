'use client'
import Button from "@/components/ui/button/button/Button";
import Textbox from "@/components/ui/input/text/TextBox";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function StartButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/login');
    }

    return (
        <Box>
            <Textbox />
            <Button onClick={handleClick}>
                はじめる
            </Button>
        </Box>
    )
}