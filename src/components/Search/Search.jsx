import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  display: flex;
  align-item: center;

  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;

  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  box-shadow: var(--shadow);

  @media (min-width: 767px) {
    width: 280px;
    margin-bottom: 0;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country',
})`
  margin-left: 2rem;

  background-color: var(--colors-ui-base);
  color: var(--color-text);
  border: none;
  outline: none;
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export { Search };
