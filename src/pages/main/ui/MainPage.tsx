import { PlayListCard, PlayListSlide } from '../../../entities/playlist/';
import { SongList } from '../../../widgets/song/ui/SongList';

export const MainPage = () => {
  return (
    <div>
      <section className="flex gap-6">
        <div className="grow self-start">
          <PlayListSlide></PlayListSlide>
        </div>
        <div className="grow">
          <h2 className="sectionHeader">Top releases</h2>
          <div className="flex flex-col gap-4">
            <SongList></SongList>
          </div>
        </div>
      </section>
      <section className='mt-6'>
        <h2 className="sectionHeader">New releases</h2>
        <div className="flex gap-4">
          <PlayListCard></PlayListCard>
          <PlayListCard></PlayListCard>
          <PlayListCard></PlayListCard>
          <PlayListCard></PlayListCard>
        </div>
      </section>
      <section className='mt-6'>
        <h2 className='sectionHeader'>Newest Songs</h2>
        <SongList></SongList>
      </section>
    </div>
  );
};
