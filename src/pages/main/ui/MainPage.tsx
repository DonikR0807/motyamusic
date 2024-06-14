import { PlaylistCarousel } from 'src/widgets/playlist';

export const MainPage = () => {
  return (
    <div>
      <section>
          <h2 className='sectionHeader'>New Playlists</h2>
          <PlaylistCarousel></PlaylistCarousel>
      </section>
      <section className='mt-6'>
        <h2 className='sectionHeader'>Newest Songs</h2>
        {/* <SongList></SongList> */}
      </section>
    </div>
  );
};
