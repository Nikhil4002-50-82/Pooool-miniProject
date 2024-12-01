import React, { useRef, useEffect } from 'react';

import TitleHomeComponent from './TitleHomeComponent';
import SortSearchComponent from './SortSearchComponent';

const Search = () => {

  return (
    <div>
      <div className="pt-[5em] h-[9.5em] p-3 fixed bg-white z-10">
        <TitleHomeComponent />
      </div>
      <div className="pt-[9em] bg-[#f3f1f1cb]">
        <div className="p-6 grid grid-cols-[3fr_6fr] gap-10">
          <SortSearchComponent />
          <div className="">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
