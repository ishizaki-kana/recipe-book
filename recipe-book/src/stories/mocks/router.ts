import { fn } from 'storybook/test';

export const mockRouter = {
    push: fn((url: string) => {
        console.log(`[mockRouter] push: ${url}`);
    }),
    back: fn(() => console.log('[mockRouter] back')),
    forward: fn(() => console.log('[mockRouter] forward')),
    refresh: fn(() => console.log('[mockRouter] refresh')),
    replace: fn((url: string) => console.log(`[mockRouter] replace: ${url}`)),
    prefetch: fn((url: string) => console.log(`[mockRouter] prefetch: ${url}`)),
}