import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header';
import { Navigation } from '../../widgets/navigation';

export const Layout = () => {
  return (
    <div className="relative bg-lightMain px-8 dark:bg-darkMain min-h-screen">
      <div className="mx-auto box-border max-w-screen-2xl">
        <Header></Header>
        <main className="flex gap-5 mt-10 pt-12">
          <div className="w-[62px]">
            <Navigation></Navigation>
          </div>
          <div className="grow">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    </div>
  );
};
