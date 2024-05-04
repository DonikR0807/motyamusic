import { AppRouter } from '../../router';
import { ThemeProvider } from '../themeProvider/ThemeProvider';

export const Providers = () => {
  return (
    <ThemeProvider>
      <AppRouter></AppRouter>
    </ThemeProvider>
  );
};
