import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useGetAllPlaylistsQuery } from 'src/entities/playlist';
import { PlayListSlide } from 'src/entities/playlist';
import { Button } from 'src/shared/ui';
import PrevIcon from 'src/shared/assets/images/prev.svg?react';
import NextIcon from 'src/shared/assets/images/next.svg?react';
import Autoplay from 'embla-carousel-autoplay';

export const PlaylistCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { data, isLoading } = useGetAllPlaylistsQuery();

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
          {isLoading ? (
            <div className="min-w-0 flex-[0_0_100%]">
              <PlayListSlide isLoading={true}></PlayListSlide>
            </div>
          ) : (
            data?.map((playlist) => (
              <div className="min-w-0 flex-[0_0_100%]" key={playlist.id}>
                <PlayListSlide {...playlist}></PlayListSlide>
              </div>
            ))
          )}
        </div>
      </div>
      {!isLoading && (
        <>
          <Button
            className="embla__prev invisible absolute left-[-30px] top-1/2 -translate-y-1/2 group-hover:visible"
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
            className="embla__next invisible absolute right-[-30px] top-1/2 -translate-y-1/2 group-hover:visible"
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
        </>
      )}
    </div>
  );
};
