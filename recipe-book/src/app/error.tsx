'use client'

import FlexContainer from '@/components/layout/container/FlexContainer'
import Button from '@/components/ui/button/Button'
import { Container, Typography } from '@mui/material'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <Container>
            <FlexContainer
                direction={'column'}
                gap={2}
                sx={{ pt: 8 }}>
                <Typography variant='h5' fontWeight={700}>エラーが発生しました</Typography>
                <Typography variant='body1'>{error.message}</Typography>

                <Button pt={3} onClick={() => reset()}>
                    再試行
                </Button>
            </FlexContainer>
        </Container>
    )
}
