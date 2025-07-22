import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { RecipeCategory } from '@prisma/client';
import { RecipeSearchInput } from '../types';
import SearchForm from './SearchForm';

export default function SearchContainer({
    categories,
    searchInput
}: {
    categories: RecipeCategory[]
    searchInput: RecipeSearchInput
}) {

    const isSearch = searchInput.keyword !== '' && searchInput.categoryIds.length !== 0;

    return (
        <Box sx={{ px: 3 }}>
            <Accordion slotProps={{ root: { variant: 'outlined' } }} defaultExpanded={isSearch}>
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}>
                    <SearchIcon />
                    <Typography component={'span'}>検索</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ px: 2 }}>
                        <SearchForm categories={categories} searchInput={searchInput} />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}