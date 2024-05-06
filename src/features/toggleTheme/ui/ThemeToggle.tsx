import { Theme, useTheme } from '../../../shared/lib';
import SunIcon from '../../../shared/assets/images/sun.svg?react';
import MoonIcon from '../../../shared/assets/images/moon.svg?react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="rounded-full transition-colors items-center box-border flex h-[52px] w-[52px] justify-center hover:bg-lightAlt/25">
      <button onClick={() => toggleTheme()} className="border-none h-[36px] w-[36px]">
        {theme === Theme.DARK ? (
          <MoonIcon width={'100%'} height={'100%'} className='fill-darkText stroke-darkText' />
        ) : (
          <SunIcon width={'100%'} height={'100%'} />
        )}
      </button>
    </div>
  );
};
