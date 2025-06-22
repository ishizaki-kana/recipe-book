'use client'

import CenteredContainer from '@/components/layout/container/center/CenteredContainer'
import { CircularProgress } from '@mui/material'

export default function Loading() {
    return (
        <CenteredContainer>
            <CircularProgress />
        </CenteredContainer>
    )
}
