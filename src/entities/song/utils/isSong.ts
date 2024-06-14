import { Song } from '../types/Song';

export const isSong = (data: unknown): data is Song => {
  const song = data as Song;

  const hasId = typeof song.id === 'string';
  const hasAuthor = typeof song.author === 'string';
  const hasDuration = typeof song.duration === 'number';
  const hasImg = typeof song.img === 'string';
  const hasSrc = typeof song.src === 'string';

  return hasId && hasAuthor && hasDuration && hasImg && hasSrc;
};
