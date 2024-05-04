import SearchIcon from '../../../shared/assets/images/search.svg?react';

export const Search = () => {
  return (
    <div
      className={`relative  
    rounded-3xl border-2
    border-lightAltText/25
    dark:border-darkText/25
    transition-colors
    hover:border-yellowPrimary
    hover:shadow-lg
    hover:shadow-yellowPrimary
    has-[:focus]:border-yellowPrimary
    has-[:focus]:shadow-lg
    has-[:focus]:shadow-yellowPrimary
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
        fill-lightAltText/25
        dark:fill-darkText
        opacity-25
        "
      ></SearchIcon>
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent py-6 
        pl-[54px] 
        pr-1
        font-quicksandBold text-lg text-lightText outline-none placeholder:font-quicksandBold placeholder:text-lg placeholder:text-lightAltText/25
      dark:text-darkText dark:placeholder:text-darkText/[.25]"
        aria-label="Search"
      ></input>
    </div>
  );
};
