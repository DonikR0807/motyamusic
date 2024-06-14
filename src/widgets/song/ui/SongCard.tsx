import { SongInfo } from '../../../entities/song';
import { LikeSongBtn } from '../../../features/addToFavourite';
import { Song } from '../../../entities/song';

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
