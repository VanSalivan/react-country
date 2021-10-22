import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { filterByCode } from '../../config';
import SkeletonDetails from '../Skeletons/SkeletonDetails'

import {
  Wrapper,
  InfoImage,
  InfoTitle,
  ListGroup,
  List,
  ListItem,
  Meta,
  TagGroup,
  Tag
} from './styled-components';

const Info = ({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  topLevelDomain,
  currencies = [],
  languages,
  borders = [],
  push,
}) => {
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length) {
      axios.get(filterByCode(borders))
        .then(({data}) => setNeighbors(data.map((country) => country.name)))
    }
  }, [borders])

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem><b>Native Name: </b> {nativeName}</ListItem>
            <ListItem><b>Population: </b> {population}</ListItem>
            <ListItem><b>Region: </b> {region}</ListItem>
            <ListItem><b>SubRegion: </b> {subregion}</ListItem>
            <ListItem><b>Capital: </b> {capital}</ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain :</b>{' '}
              {topLevelDomain.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </ListItem>

            <ListItem>
              <b>Currency :</b>{' '}
              {currencies.map((item) => (
                <span key={item.code}>{item.name} </span>
              ))}
            </ListItem>

            <ListItem>
              <b>Languages :</b>{' '}
              {languages.map((language) => (
                <span key={language.name}>{language.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!neighbors.length ? (<span>There is no border countries</span>
            ): (<TagGroup>
              {neighbors.map((country) => (
                <Tag onClick={() => push(`/country/${country}`)} key={country}> {country}</Tag>
              ))}
            </TagGroup>
            )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export { Info };
