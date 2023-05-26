import '../sass/components/_seasonCoctals.scss';
import { useState } from 'react';
import ApiRenderData from './ApiRenderData';
import SeasonIconView from './SeasonIconView';

const SeasonCocktails = ({ apiData }) => {
  const [season, setSeason] = useState('spring');

  return (
    <section id="season" className="season__coctails--header">
      <div className="season__coctails">
        <h4>choose your cocktail by season</h4>
        <p>"Seasonal Sips: Perfect Cocktail Recipes for Every Time of Year"</p>

        <SeasonIconView season={season} setSeason={setSeason} />
      </div>
      <div className="season__coctails--cards">
        <ApiRenderData apiData={apiData} season={season} />
      </div>
    </section>
  );
};

export default SeasonCocktails;
