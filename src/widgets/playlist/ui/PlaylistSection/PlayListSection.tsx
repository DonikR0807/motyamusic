import { PlayListInfo, useGetPlaylistQuery } from 'src/entities/playlist';
import { AddToCollectionBtn } from 'src/features/addToCollection';
import { PlayAllSongsBtn } from 'src/features/playAllSongs';
import { useParams } from 'react-router-dom';
import { ConditionalRender } from 'src/shared/ui';

export const PlayListSection = () => {
  const { playlistId } = useParams<'playlistId'>();
  const { data, isLoading, isError, isSuccess } = useGetPlaylistQuery(
    playlistId as string,
  );

  return (
    <ConditionalRender
      isLoading={isLoading}
      isFailed={isError}
      isSuccess={isSuccess}
      renderOnSuccess={() => (
        <div>
          <PlayListInfo data={data}>
            <PlayAllSongsBtn></PlayAllSongsBtn>
            <AddToCollectionBtn></AddToCollectionBtn>
          </PlayListInfo>
        </div>
      )}
      renderOnFailed={() => <div>Ошибка</div>}
      renderOnLoading={() => <PlayListInfo data={undefined} isLoading={isLoading}></PlayListInfo>}
    ></ConditionalRender>
  );
};
