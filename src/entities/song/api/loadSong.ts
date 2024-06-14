import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { isSong } from '../utils/isSong';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from 'src/shared/config';
import { Song } from '../types/Song';

export const loadSong = async (
  docSnapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
): Promise<Song> => {
  if (!docSnapshot.exists()) {
    throw new Error('Документа не существует');
  }

  const song = docSnapshot.data();
  song.id = docSnapshot.id;
  if (isSong(song)) {
    const [imgSrc, songSrc] = await Promise.all([getDownloadURL(ref(storage, song.img)), getDownloadURL(ref(storage, song.src))])
    song.src = songSrc;
    song.img = imgSrc;
  } else {
    throw new Error('Вернулись некорректные данные');
  }

  return song;
};
