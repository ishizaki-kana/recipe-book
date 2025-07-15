'use client'
import Button from "@/components/ui/button/button/Button";
import { useRouter } from "next/navigation";

export default function StartButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/login');
    }

    return (
        <Button onClick={handleClick}>
            はじめる
        </Button>
    )
}