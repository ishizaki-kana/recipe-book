import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { RecipeCategory } from '@prisma/client';
import SearchForm from './SearchForm';

export default function SearchContainer({
    categories
}: {
    categories: RecipeCategory[]
}) {

    return (
        <Box sx={{ px: 3 }}>
            <Accordion slotProps={{ root: { variant: 'outlined' } }}>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}>
                    <Typography component={'span'}>検索</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ px: 2 }}>
                        <SearchForm categories={categories} />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}