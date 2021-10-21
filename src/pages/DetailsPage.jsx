import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';

import Info from '../components/Info';
import { searchByCountry } from '../config';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0 1rem;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);

  border: none;
  cursor: pointer;
`;

export const DetailsPage = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  const { push, goBack } = useHistory();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={push} {...country} />}
    </div>
  );
};
