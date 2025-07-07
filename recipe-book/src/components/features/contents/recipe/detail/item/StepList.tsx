import { Box, List, ListItem, Typography } from "@mui/material";

export default function StepList({
    steps
}: {
    steps: {
        id: number;
        text: string;
        seasonings: {
            id: number;
            name: string;
            volume: string | null;
        }[] | null;
    }[]
}) {

    return (
        <Box>
            {steps.map((step) => (
                <Box key={step.id} sx={{ mb: 2 }}>
                    <Typography variant="body1" fontWeight={600}>
                        {`Step ${step.id}: ${step.text}`}
                    </Typography>
                    {step.seasonings && step.seasonings.length > 0 && (
                        <List>
                            {step.seasonings.map(seasoning => (
                                <ListItem key={seasoning.id} disablePadding>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Typography variant="body2" sx={{ flexGrow: 1 }}>
                                            {seasoning.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {seasoning.volume}
                                        </Typography>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
            ))}
        </Box>
    )
}