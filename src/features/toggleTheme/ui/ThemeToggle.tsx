import { Theme, useTheme } from 'src/shared/lib';
import SunIcon from 'src/shared/assets/images/sun.svg?react';
import MoonIcon from 'src/shared/assets/images/moon.svg?react';
import { Button } from 'src/shared/ui';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      onClick={() => toggleTheme()}
      variant="text"
      icon={
        theme === Theme.DARK ? (
          <MoonIcon
            width={'36px'}
            height={'36px'}
            className="fill-darkText stroke-darkText"
          />
        ) : (
          <SunIcon width={'36px'} height={'36px'} />
        )
      }
    ></Button>
  );
};
