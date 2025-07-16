import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/nextjs';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockRouter } from '../src/stories/mocks/router';
import theme from '../src/styles/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppRouterContext.Provider value={mockRouter}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </AppRouterContext.Provider>
    )
  ],
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#333' },
        light: { name: 'light', value: '#f7f9f2' }
      }
    },
    initialGlobals: {
      backgrounds: { value: 'light' }
    },
    docs: {
      autodocs: true,
      source: {
        type: 'code'
      },
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextRouter: {
      Provider: RouterContext.Provider,
      value: mockRouter,
    },
  },
  tags: ['autodocs']
};

export default preview;