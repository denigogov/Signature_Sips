import SeasonItem from './SeasonItems';

const ApiRenderData = ({ apiData, season }) => {
  return (
    <div className="season__coctails--cards">
      {apiData
        .filter(ses => {
          return ses.season === season;
        })
        .map((season, i) => {
          return (
            <SeasonItem
              key={i}
              name={season.name}
              image={season.image}
              ingredients={season.description}
              instuction={season.instructions}
            />
          );
        })}
    </div>
  );
};

export default ApiRenderData;
