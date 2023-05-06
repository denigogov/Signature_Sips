import SeasonItem from "./SeasonItems";
import { useState } from "react";

const SeasonCocktails = ({ apiData }) => {
  // UnderLine
  const [season, setSeason] = useState("spring");

  // Season click handlers! on every clcik we change the state !!
  const winterHandler = () => {
    setSeason("winter");
  };
  const springHandler = () => {
    setSeason("spring");
  };
  const summerHandler = () => {
    setSeason("summer");
  };
  const autumnHandler = () => {
    setSeason("autumn");
  };

  /**
   *
   * @returns {data from API}
   * filtering with STATE by default set to winter .. on every click STATE is Change according to the img season!
   */
  const apiRenderData = () => {
    return (
      <div className="season__coctails--cards">
        {apiData
          .filter((ses) => {
            return ses.season === `${season}`;
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

  //I can't use direcly state in fn, thats why I add this variable with name border to use the state inside
  let border = season;
  /**
   *
   * @param {hardcoded, season name }
   * @returns {if the state === fn param than its return new class (underline under img) }
   */
  const seasonSetup = (season) => {
    return border === `${season}` ? "season__coctails--icon--underLine" : "";
  };

  // JSX
  return (
    <section className="season__coctails--header">
      <div className="season__coctails">
        <div className="season__coctails--title">
          <h4>choose your cocktail by season</h4>
          <p>
            "Seasonal Sips: Perfect Cocktail Recipes for Every Time of Year"
          </p>
        </div>

        <div className="season__coctails--icon">
          <img
            className={seasonSetup("winter")}
            onClick={winterHandler}
            src="./assets/winter-icon.png"
            alt="winter icon"
          />
          <img
            className={seasonSetup("spring")}
            onClick={springHandler}
            src="./assets/spring-icon.png"
            alt="spring icon"
          />
          <img
            className={seasonSetup("summer")}
            onClick={summerHandler}
            src="./assets/summer-icon.png"
            alt="summer icon"
          />
          <img
            className={seasonSetup("autumn")}
            onClick={autumnHandler}
            src="./assets/autumn-icon.png"
            alt="autumn icon"
          />
        </div>
      </div>
      <div className="season__coctails--cards">
        {/* already filter and map only calling here*/}
        {apiRenderData()}
      </div>
    </section>
  );
};

export default SeasonCocktails;
