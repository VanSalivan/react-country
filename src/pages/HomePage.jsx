import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';
import SkeletonCard from '../components/Skeletons/SkeletonCard';

import { ALL_COUNTRIES } from '../config';

export const HomePage = ({ countries, setCountries }) => {
  const [filtredCountries, setFiltredCountries] = useState(countries);
  const { push } = useHistory();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFiltredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();

    // eslint-disable-next-line
  }, [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {!filtredCountries.length
          ? Array.from({ length: 10 }).map((item) => <SkeletonCard />)
          : filtredCountries.map((country) => {
              const countryInfo = {
                img: country.flags.png,
                name: country.name,
                info: [
                  {
                    title: 'Population',
                    description: country.population,
                  },
                  {
                    title: 'Region',
                    description: country.region,
                  },
                  {
                    title: 'Capital',
                    description: country.capital,
                  },
                ],
              };
              return (
                <Card
                  key={country.name}
                  onClick={() => push(`/country/${country.name}`)}
                  {...countryInfo}
                />
              );
            })}
      </List>
    </>
  );
};
