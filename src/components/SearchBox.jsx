import React from "react";

const SearchBox = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); // Trigger search when input changes
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Cari berdasarkan nama atau IMEI"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
