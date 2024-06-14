import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgets/header';
import { Navigation } from 'src/widgets/navigation/ui/Navigation';

export const Layout = () => {
  return (
    <div className="relative bg-lightMain px-8 dark:bg-darkMain min-h-screen">
      <div className="mx-auto box-border max-w-screen-2xl">
        <Header></Header>
        <main className="flex gap-9 mt-10 pt-12">
          <div className="w-[62px] mt-12">
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
