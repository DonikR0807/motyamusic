import { Button } from 'src/shared/ui';
import AddIcon from 'src/shared/assets/images/playlist.svg?react';

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
