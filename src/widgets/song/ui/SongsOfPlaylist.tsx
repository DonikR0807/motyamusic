import { SongCard } from './SongCard';
import { useGetSongsOfPlaylistQuery } from '../../../entities/song/api/loadSongsOfPlaylist';
import { useParams } from 'react-router-dom';
import { ConditionalRender } from '../../../shared/ui';

export const SongsOfPlaylist = () => {
  const { playlistId } = useParams<'playlistId'>();
  const { data, isFetching, isError, isSuccess } = useGetSongsOfPlaylistQuery(
    playlistId as string,
  );
  return (
    <ConditionalRender
      isFailed={isError}
      isLoading={isFetching}
      isSuccess={isSuccess}
      renderOnSuccess={() => (
        <ul className="flex flex-col gap-5">
          {data?.map((song) => (
            <li key={song.id}>
              <SongCard song={song}></SongCard>
            </li>
          ))}
        </ul>
      )}
      renderOnFailed={() => <div>failed to load</div>}
      renderOnLoading={() => <div>loading</div>}
    ></ConditionalRender>
  );
};
