import React from 'react';
import { Navigation } from '../../../widgets/navigation';

export const MainPage = () => {
  return (
    <main className="flex gap-5">
      <div className="w-[62px]">
        <Navigation></Navigation>
      </div>
      <div className="grow"></div>
    </main>
  );
};
