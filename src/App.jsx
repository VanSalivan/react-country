import React, { useState } from 'react';
import { Switch, Route } from 'react-router';

import Header from './layout/Header';
import Main from './layout/Main';
import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import { NotFounds } from './pages/NotFounds';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/'>
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path='/country/:name' component={DetailsPage} />
          <Route component={NotFounds} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
