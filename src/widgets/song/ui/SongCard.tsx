import { SongInfo } from 'src/entities/song';
import { LikeSongBtn } from 'src/features/addToFavourite';
import { Song } from 'src/entities/song';

interface SongsCardProps {
  data: Song | undefined;
  isLoading?: boolean
}

export const SongCard = ({ data, isLoading = false }: SongsCardProps) => {
  return (
    <SongInfo data={data} isLoading={isLoading}>
      <LikeSongBtn></LikeSongBtn>
    </SongInfo>
  );
};
