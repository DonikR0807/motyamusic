import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useGetPlaylistsQuery } from '../../../entities/playlist/api/getPlaylists';
import { PlayListSlide } from '../../../entities/playlist';
import { Button } from '../../../shared/ui';
import PrevIcon from '../../../shared/assets/images/prev.svg?react';
import NextIcon from '../../../shared/assets/images/next.svg?react';
import Autoplay from 'embla-carousel-autoplay';

export const PlaylistCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { data } = useGetPlaylistsQuery();

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla group relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {data?.map((playlist) => (
            <div className="min-w-0 flex-[0_0_100%]" key={playlist.id}>
              <PlayListSlide {...playlist}></PlayListSlide>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="embla__prev absolute left-[-30px] top-1/2 invisible -translate-y-1/2 group-hover:visible"
        variant="text"
        onClick={scrollPrev}
        icon={
          <PrevIcon
            width={16}
            height={16}
            className="fill-lightText dark:fill-darkText"
          />
        }
      ></Button>
      <Button
        className="embla__next absolute right-[-30px] top-1/2 invisible -translate-y-1/2 group-hover:visible"
        variant="text"
        onClick={scrollNext}
        icon={
          <NextIcon
            width={16}
            height={16}
            className="fill-lightText dark:fill-darkText"
          />
        }
      ></Button>
    </div>
  );
};
