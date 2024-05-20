import React from 'react';
import sad from '../../../shared/assets/images/sad.jpg';

interface PlayListInfoProps {
  children?: React.ReactNode;
}

export const PlayListInfo = ({ children }: PlayListInfoProps) => {
  return (
    <section className="flex items-center gap-6">
      <img
        src={sad}
        alt="image"
        className="h-[284px] w-[284px] rounded-3xl"
      ></img>
      <div className='grow'>
        <h1 className="font-quickSandBold mb-4 text-4xl text-altText max-w-[305px] truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste incidunt porro debitis alias, pariatur voluptate laborum eligendi omnis sequi labore eius, fuga animi! Eaque ad cumque ullam dolor corrupti!
        </h1>
        <p className="font-quickSandRegular text-sm text-lightText dark:text-darkText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio consequuntur doloremque, aut sunt temporibus excepturi non deserunt sequi ipsam tempora impedit corrupti soluta odio itaque maxime voluptatibus pariatur officiis.</p>
        <div className="mt-6 flex gap-3">{children}</div>
      </div>
    </section>
  );
};
