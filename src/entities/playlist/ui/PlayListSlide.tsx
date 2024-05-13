import { Link } from 'react-router-dom';
import sad from '../../../shared/assets/images/sad.jpg';

export const PlayListSlide = () => {
  return (
    <Link to={"/"}>
      <div className="card flex h-[100%] w-[100%] items-center rounded-[40px]">
        <div className="relative ml-6 grow">
          <h3 className="font-quickSandBold mb-2 text-4xl text-lightText dark:text-darkText max-w-[250px] truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt illo dolorem fugiat. Fugiat quae doloribus error similique quisquam ipsam voluptatem labore. Neque reiciendis voluptatum aliquid perspiciatis iste necessitatibus. Explicabo.
          </h3>
          <p className="font-quickSandRegular h-[76px] max-w-[276px] overflow-hidden text-sm text-lightText dark:text-darkText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            pariatur provident et sapiente sequi laudantium tenetur quidem. Ab
            modi repellendus nam ratione, impedit dolore nihil a maiores
            aliquid. Expedita, eos. lore
          </p>
        </div>
        <img
          src={sad}
          alt="sad"
          className="h-[380px] w-[380px] rounded-[40px] object-cover"
        ></img>
      </div>
    </Link>
  );
};
