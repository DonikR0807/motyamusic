import { PlayListSection } from 'src/widgets/playlist/';
import { SongsOfPlaylist } from 'src/widgets/song';

export const PlaylistPage = () => {
  return (
    <div className='mt-12'>
      <div className="mb-8">
        <PlayListSection></PlayListSection>
      </div>
      <SongsOfPlaylist />
    </div>
  );
};
