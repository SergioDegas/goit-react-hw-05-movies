import { useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Input, SearchBtn } from './Search.styled';

import PropTypes from 'prop-types';

function Search({onSubmit}) {
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
onSubmit(searchQuery);
    setSearchQuery('');
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="searchQuery"
        value={searchQuery}
        onChange={onChangeInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Movies"
      />
      <SearchBtn type="submit">
        <span>Search</span>
      </SearchBtn>
    </Form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Search;