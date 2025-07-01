import StartButton from "@/components/features/index/StartButton";
import CenteredContainer from "@/components/layout/container/CenteredContainer";
import { Typography } from "@mui/material";

export default function IndexPage() {
    return (
        <CenteredContainer direction="column" gap={2}>
            <Typography variant="h5">RECIPE BOOK</Typography>
            <StartButton />
        </CenteredContainer>
    )
}