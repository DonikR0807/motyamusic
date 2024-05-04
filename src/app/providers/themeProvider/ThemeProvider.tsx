import React, { useMemo } from 'react';
import { Theme, ThemeContext } from '../../../shared/lib';
import { LOCAL_STORAGE_THEME_KEY } from '../../../shared/lib/theme/themeContext';
import clsx from 'clsx';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      <div className={clsx(theme === Theme.DARK ? 'dark' : '')}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
