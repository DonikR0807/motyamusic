import { PlayListInfo, useGetPlaylistQuery } from '../../../entities/playlist';
import { AddToCollectionBtn } from '../../../features/addToCollection';
import { PlayAllSongsBtn } from '../../../features/playAllSongs';
import { useParams } from 'react-router-dom';
import { ConditionalRender } from '../../../shared/ui';

export const PlayListSection = () => {
  const { playlistId } = useParams<'playlistId'>();
  const { data, isFetching, isError, isSuccess } = useGetPlaylistQuery(
    playlistId as string,
  );
  
  return (
    <ConditionalRender
      isLoading={isFetching}
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
      renderOnLoading={() => <div>Идет Загрузка</div>}
    ></ConditionalRender>
  );
};
