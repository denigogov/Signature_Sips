const SeasonItem = ({ name, image, ingredients, instuction }) => {
  return (
    <div className="season__coctails--card">
      <p className="season__coctails--card--name">{name}</p>
      <div className="season__coctails--card--img">
        <img src={image} alt={name} />
      </div>
      <div className="season__coctails--card--ingredients">
        <p className="ingredients__title">ingredients</p>
        <p>{ingredients}</p>
      </div>

      <div className="season__coctails--card--instructions">
        <p className="instructions__title">instructions</p>
        <p>{instuction}</p>
      </div>
    </div>
  );
};

export default SeasonItem;
