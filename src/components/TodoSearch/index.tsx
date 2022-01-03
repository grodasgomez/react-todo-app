import './TodoSearch.css'

import { Search } from 'tabler-icons-react';
function TodoSearch(props: {
  searchValue: string
  setSearchValue: (value: string) => void;
}) {

  const { searchValue, setSearchValue } = props;
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  return (
    <section className="search-wrapper">

      <input type="text" placeholder="Search..." value={searchValue} className="search-input" onChange={onChangeSearch} />

      <button type="button" className="search-button">
        <span className="search-icon">
          <Search />
        </span>
      </button>

    </section>
  )
}

export default TodoSearch
