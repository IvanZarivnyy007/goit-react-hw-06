const SearchBox = ({ handleChange, inputValue }) => {
  return (
    <div className="searchbox-container">
      <p className="searchbox-title">Find contacts by name</p>
      <input
        className="searchbox-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
