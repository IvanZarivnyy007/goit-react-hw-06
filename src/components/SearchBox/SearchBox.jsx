import { useDispatch } from 'react-redux';
import changeFilter from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className="searchbox-container">
      <p className="searchbox-title">Find contacts by name</p>
      <input
        className="searchbox-input"
        type="text"
        onChange={dispatch(changeFilter)}
      />
    </div>
  );
};

export default SearchBox;
