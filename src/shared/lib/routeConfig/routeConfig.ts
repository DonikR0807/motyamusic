export enum AppRoutes {
    MAIN = 'main',
    PLAYLIST = 'playlist',
    NOT_FOUND = 'not_found',
    PROFILE = 'profile',
    SIGN_UP = 'sign_up',
    SIGN_IN = 'sign_in',
    PLAYLISTS = 'playlists',
    LIKED = 'liked',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PLAYLIST]: '/playlist/:id',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.SIGN_IN]: '/sign-in',
    [AppRoutes.SIGN_UP]: '/sign-up',
    [AppRoutes.PLAYLISTS]: '/playlists',
    [AppRoutes.LIKED]: '/liked',
    [AppRoutes.NOT_FOUND]: '*',
};

