import StartButton from "@/components/features/index/StartButton";
import CenteredContainer from "@/components/layout/container/center/CenteredContainer";
import { Typography } from "@mui/material";

/**
 * 初期画面
 * 
 * @returns 初期画面
 */
export default function Home() {
    return (
        <CenteredContainer>
            <CenteredContainer direction="column">
                <Typography>RECIPE BOOK</Typography>
                <StartButton />
            </CenteredContainer>
        </CenteredContainer>
    )
}