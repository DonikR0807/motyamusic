import {
  Route,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../shared/lib';
import { MainPage } from '../../pages/main/ui/MainPage';
import { PlaylistPage } from '../../pages/playlist';
import { ProfilePage } from '../../pages/profile';
import { SigninPage } from '../../pages/signin';
import { SignupPage } from '../../pages/signup';
import { NotFoundPage } from '../../pages/notFound';
import { Layout } from '../layout/Layout';
import { PlayListsPage } from '../../pages/playlists';
import { LikedPage } from '../../pages/liked';

const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage></MainPage>,
  },
  [AppRoutes.PLAYLIST]: {
    path: RoutePath.playlist,
    element: <PlaylistPage></PlaylistPage>,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage></ProfilePage>,
  },
  [AppRoutes.SIGN_IN]: {
    path: RoutePath.sign_in,
    element: <SigninPage></SigninPage>,
  },
  [AppRoutes.SIGN_UP]: {
    path: RoutePath.sign_up,
    element: <SignupPage></SignupPage>,
  },
  [AppRoutes.PLAYLISTS]: {
    path: RoutePath.playlists,
    element: <PlayListsPage></PlayListsPage>
  },
  [AppRoutes.LIKED]: {
    path: RoutePath.liked,
    element: <LikedPage></LikedPage>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage></NotFoundPage>,
  },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route element={element} path={path} key={path}></Route>
      ))}
    </Route>,
  ),
);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
