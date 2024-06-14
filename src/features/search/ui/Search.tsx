import SearchIcon from 'src/shared/assets/images/search.svg?react';

export const Search = () => {
  return (
    <div
      className={`hover:btn-primary  
      has-[:focus]:btn-primary
      relative
      transition-colors
    rounded-3xl
    border-2
    border-lightText
    dark:border-darkText/25
    `}
    >
      <SearchIcon
        className="absolute
        left-[10px]
        top-[50%] 
        z-10
        h-[24px] 
        w-[24px] 
        -translate-y-1/2 
        fill-lightAltText
        opacity-25
        dark:fill-darkAltText
        "
      ></SearchIcon>
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent py-3
        pl-[54px] 
        pr-1
        font-quicksandBold text-lg text-lightText outline-none placeholder:font-quicksandBold placeholder:text-lg placeholder:text-lightText/25
      dark:text-darkText dark:placeholder:text-darkText/25"
        aria-label="Search"
      ></input>
    </div>
  );
};
