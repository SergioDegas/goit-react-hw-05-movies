import { searchByName } from 'Api/Api';
import { useState } from 'react';
import toast from 'react-hot-toast';
export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeInput = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('write something');
      return;
    }
   fetch()
    setSearchQuery('');
    e.target.reset();
  };
  const fetch = async () => {
    const {results} = await searchByName(searchQuery);
   
   console.log(results);
  }


  return (
    
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          value={searchQuery}
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </header>
    
  );
};
