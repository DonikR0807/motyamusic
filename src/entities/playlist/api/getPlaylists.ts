import { collection, getDocs } from 'firebase/firestore';
import { db, musicApi, storage } from '../../../shared/config';
import { Playlist } from '../types/Playlist';
import { isPlaylist } from '../utils/isPlaylist';
import { getDownloadURL, ref } from 'firebase/storage';

const extendedApi = musicApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query<Playlist[], void>({
      queryFn: async () => {
        try {
          const playlists: Playlist[] = [];
          const querySnapshot = await getDocs(collection(db, 'playlists'));
          querySnapshot.docs.forEach(async (doc) => {
            if (isPlaylist(doc)) {
                const imgUrl = await getDownloadURL(ref(storage, doc.img));
                doc.img = imgUrl;
                playlists.push(doc);
            } else {
                throw new Error("Вернулись некорректные данные");
            }
          });
          return { data: playlists };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetPlaylistsQuery } = extendedApi;
