import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header';

export const Layout = () => {
  return (
    <div className="bg-lightMain px-8 dark:bg-darkMain relative">
      <div className="box-border h-screen max-w-screen-2xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
