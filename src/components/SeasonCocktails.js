import '../sass/components/_seasonCoctals.scss';
import ApiRenderData from './ApiRenderData';
import SeasonIconView from './SeasonIconView';
import Loading from './Loading';

const SeasonCocktails = ({ apiData, season, setSeason }) => {
  console.log(apiData);
  return (
    <section id="season" className="season__coctails--header">
      <div className="season__coctails">
        <h4>choose your cocktail by season</h4>
        <p>"Seasonal Sips: Perfect Cocktail Recipes for Every Time of Year"</p>

        <SeasonIconView season={season} setSeason={setSeason} />
      </div>
      <div className="season__coctails--cards">
        {apiData.length ? (
          <ApiRenderData apiData={apiData} season={season} />
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default SeasonCocktails;
