import { StepSummary } from "@/types/entity";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function StepList({
    steps
}: {
    steps: StepSummary[]
}) {

    return (
        <List>
            {steps.map((step) => (
                <div key={step.id}>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar sx={{ width: 28, height: 28, bgcolor: 'primary.main' }}>{step.stepNumber}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={step.text}
                            secondary={step.seasonings && step.seasonings.length > 0 && (
                                <List>
                                    {step.seasonings.map(seasoning => (
                                        <ListItem key={seasoning.id} disablePadding>
                                            <ListItemText secondary={`${seasoning.name} - ${seasoning.volume}`} />
                                        </ListItem>
                                    ))}
                                </List>
                            )} />
                    </ListItem>
                    <Divider />
                </div>
            ))}
        </List>
    )
}