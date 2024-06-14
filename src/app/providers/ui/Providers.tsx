import { Provider } from 'react-redux';
import { AppRouter } from '../../router';
import { ThemeProvider } from '../themeProvider/ThemeProvider';
import { store } from 'src/shared/config/store';

export const Providers = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter></AppRouter>
      </ThemeProvider>
    </Provider>
  );
};
