import React from 'react';
import { Button } from '../../../shared/ui';
import AddIcon from '../../../shared/assets/images/playlist.svg?react';

export const AddToCollectionBtn = () => {
  return (
    <Button
      variant="contained"
      icon={
        <AddIcon
          width={24}
          height={24}
          className="fill-yellowPrimary"
        ></AddIcon>
      }
      text="Add to collection"
    ></Button>
  );
};
