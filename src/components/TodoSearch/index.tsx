import './TodoSearch.css'

import { Search } from 'tabler-icons-react';
import { useContext } from 'react';
import { TodoContext } from 'context/todoContext';
function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  return (
    <section className="search-wrapper">
      <div className="input-container">
        <input type="text" placeholder="Search..." value={searchValue} className="search-input" onChange={onChangeSearch} />
        <span className="search-icon">
          <Search />
        </span>
      </div>

    </section>
  )
}

export default TodoSearch
