import { SongCard } from './SongCard';
import { useGetSongsOfPlaylistQuery } from 'src/entities/song/api/loadSongsOfPlaylist';
import { useParams } from 'react-router-dom';
import { ConditionalRender } from 'src/shared/ui';

export const SongsOfPlaylist = () => {
  const { playlistId } = useParams<'playlistId'>();
  const { data, isLoading, isError, isSuccess } = useGetSongsOfPlaylistQuery(
    playlistId as string,
  );
  return (
    <ConditionalRender
      isFailed={isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
      renderOnSuccess={() => (
        <ul className="flex flex-col gap-5">
          {data?.map((song) => (
            <li key={song.id}>
              <SongCard data={song}></SongCard>
            </li>
          ))}
        </ul>
      )}
      renderOnFailed={() => <div>failed to load</div>}
      renderOnLoading={() => <ul className="flex flex-col gap-5">
        {[...new Array(8)].map((_, index) => (
          <li key={index}>
            <SongCard data={undefined} isLoading={true}></SongCard>
          </li>
        ))}
      </ul>}
    ></ConditionalRender>
  );
};
