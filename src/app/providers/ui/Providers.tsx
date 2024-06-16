import { Provider } from 'react-redux';
import { AppRouter } from '../../router';
import { ThemeProvider } from '../themeProvider/ThemeProvider';
import { store } from 'src/shared/config/store';
import { SkeletonTheme } from 'react-loading-skeleton';

export const Providers = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SkeletonTheme baseColor="#bdbdbd" highlightColor="#ecebeb">
          <AppRouter></AppRouter>
        </SkeletonTheme>
      </ThemeProvider>
    </Provider>
  );
};
