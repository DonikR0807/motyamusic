import { SongInfo } from 'src/entities/song';
import { LikeSongBtn } from 'src/features/addToFavourite';
import { Song } from 'src/entities/song';

interface SongsCardProps {
  song: Song;
}

export const SongCard = ({ song }: SongsCardProps) => {
  return (
    <SongInfo {...song}>
      <LikeSongBtn></LikeSongBtn>
    </SongInfo>
  );
};
