import {
  DocumentData,
  QueryDocumentSnapshot,
  doc,
  getDoc,
} from 'firebase/firestore';
import { Playlist } from '../types/Playlist';
import { isPlaylist } from '../utils/isPlaylist';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, musicApi, storage } from 'src/shared/config';

export async function getPlaylist(
  docSnapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
): Promise<Playlist> {
  if (!docSnapshot.exists()) {
    throw new Error('Документа не существует');
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
    getPlaylist: build.query<Playlist, string>({
      queryFn: async (playlistId) => {
        try {
          const docRef = doc(db, 'playlists', playlistId);
          const docSnap = await getDoc(docRef);

          if (!docSnap.exists()) {
            throw new Error('Документа не существует');
          }

          const playlist: Playlist = await getPlaylist(docSnap);

          return { data: playlist };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetPlaylistQuery } = extendedApi;
