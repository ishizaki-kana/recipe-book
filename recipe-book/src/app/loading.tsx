'use client'

import CenteredContainer from '@/components/layout/container/CenteredContainer'
import { CircularProgress } from '@mui/material'

export default function Loading() {
    return (
        <CenteredContainer>
            <CircularProgress />
        </CenteredContainer>
    )
}
