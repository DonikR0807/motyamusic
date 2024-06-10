import { Playlist } from '../types/Playlist';

function isPlaylist(data: unknown): data is Playlist {
  const playlist = data as Playlist;

  if (!playlist) {
    return false;
  }

  const hadId = typeof playlist.id === 'string';
  const hasTitle = typeof playlist.title === 'string';
  const hasAuthor = typeof playlist.author === 'string';
  const hasLength = typeof playlist.length === 'number';
  const hasImg = typeof playlist.img === 'string';
  const hasDescription = typeof playlist.description === 'string';
  const hasDate =
    playlist.date &&
    typeof playlist.date.seconds === 'number' &&
    typeof playlist.date.nanoseconds === 'number';

  return (
    hasTitle && hasAuthor && hasLength && hasImg && hasDescription && hasDate && hadId
  );
}

export { isPlaylist };
