import { useEffect, useState } from 'react';

import Header from './components/Header';
import Border from './components/Border';
import SeasonCocktails from './components/SeasonCocktails';
import List from './components/List';
import { apiData } from './cocktailsData';
import RandomCocktail from './components/RandomCocktail';

const App = () => {
  const [api, setApi] = useState([]);

  // API DATA
  const data = async () => {
    const res = await apiData();
    setApi(res.drinks);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <Header />
      <Border />
      <SeasonCocktails apiData={api} />
      <RandomCocktail apiData={api} />
      <List apiData={api} />
    </div>
  );
};

export default App;
