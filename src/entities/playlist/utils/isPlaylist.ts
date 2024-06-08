import { Playlist } from '../types/Playlist';

function isPlaylist(data: unknown): data is Playlist {
  const playlist = data as Playlist;

  if (!playlist) {
    return false;
  }

  const hasTitle = typeof playlist.title === 'string';
  const hasAuthor = typeof playlist.author === 'string';
  const hasLength = typeof playlist.length === 'number';
  const hasImg = typeof playlist.img === 'string';
  const hasDescription = typeof playlist.description === 'string';
  const hasDate = typeof playlist.description === 'string';

  return (
    hasTitle && hasAuthor && hasLength && hasImg && hasDescription && hasDate
  );
}

export { isPlaylist };
