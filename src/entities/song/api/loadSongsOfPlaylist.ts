import { collection, getDocs } from 'firebase/firestore';
import { db, musicApi } from '../../../shared/config';
import { Song } from '../types/Song';
import { loadSong } from './loadSong';

export const loadSongsOfPlaylist = async (
  playlistId: string,
): Promise<Song[]> => {
  const querySnapshot = await getDocs(
    collection(db, 'playlists', playlistId, 'songs'),
  );

  const songs: Song[] = await Promise.all(querySnapshot.docs.map(loadSong));
  return songs;
};

const extendedApi = musicApi.injectEndpoints({
  endpoints: (build) => ({
    getSongsOfPlaylist: build.query<Song[], string>({
      queryFn: async (playlistId) => {
        try {
          const songs = await loadSongsOfPlaylist(playlistId);
          return { data: songs };
        } catch (error) {
          console.log(error);
          return { error };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetSongsOfPlaylistQuery } = extendedApi;
