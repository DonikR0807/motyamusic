import React from 'react';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { AppRoutes, RoutePath } from '../../shared/lib';
import { MainPage } from '../../pages/main/ui/MainPage';
import { PlaylistPage } from '../../pages/playlist';
import { ProfilePage } from '../../pages/profile';
import { SigninPage } from '../../pages/signin';
import { SignupPage } from '../../pages/signup';
import { NotFoundPage } from '../../pages/notFound';

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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage></NotFoundPage>,
  },
};

const router = createBrowserRouter(Object.values(routeConfig));

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
