import { CssBaseline, ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/nextjs';
import theme from '../src/styles/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    layout: 'centered',
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
  },
  tags: ['autodocs']
};

export default preview;