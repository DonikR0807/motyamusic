import { collection, getDocs } from 'firebase/firestore';
import { db, musicApi } from 'src/shared/config';
import { Playlist } from '../types/Playlist';
import { getPlaylist } from './getPlaylist';

async function getAllPlaylists() {
  const querySnapshot = await getDocs(collection(db, 'playlists'));
  const playlists: Playlist[] = await Promise.all(
    querySnapshot.docs.map(getPlaylist),
  );
  return playlists;
}

const extendedApi = musicApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPlaylists: build.query<Playlist[], void>({
      queryFn: async () => {
        try {
          return { data: await getAllPlaylists() };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllPlaylistsQuery } = extendedApi;
