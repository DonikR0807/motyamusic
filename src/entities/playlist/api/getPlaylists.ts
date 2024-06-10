import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
} from 'firebase/firestore';
import { db, musicApi, storage } from '../../../shared/config';
import { Playlist } from '../types/Playlist';
import { isPlaylist } from '../utils/isPlaylist';
import { getDownloadURL, ref } from 'firebase/storage';

async function getPlaylist(
  docSnapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
): Promise<Playlist> {
  if (!docSnapshot.exists()) {
    throw new Error("Документа не существует");
  }

  const doc = docSnapshot.data();
  doc.id = docSnapshot.id;
  if (isPlaylist(doc)) {
    const imgUrl = await getDownloadURL(ref(storage, doc.img));
    doc.img = imgUrl;
    return doc;
  } else {
    throw new Error('Вернулись некорректные данные');
  }
}

const extendedApi = musicApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query<Playlist[], void>({
      queryFn: async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'playlists'));
          const playlists: Playlist[] = await Promise.all(querySnapshot.docs.map(getPlaylist));
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
