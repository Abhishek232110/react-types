import React, { useState } from "react";

const FilterData = ({ onQueryChange }: { onQueryChange: Function }) => {
  const [searchQuery, setSearchQuery] = useState<string>();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    setSearchQuery(query);
    onQueryChange(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="outline-none ring-1 ring-zinc-500 rounded-sm w-full py-1 pl-2"
      />
    </div>
  );
};

export default FilterData;
