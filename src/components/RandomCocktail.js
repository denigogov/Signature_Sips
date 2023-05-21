import { useState } from 'react';

const RandomCocktail = ({ apiData }) => {
  // Store the random number
  const [number, setNumber] = useState([]);

  // Generate random number who will be compare with apiData item ID
  const random = String(Math.trunc(Math.random() * apiData.length) + 1);

  // RANDOM BUTTON
  const handlerClick = () => {
    setNumber(random);

    //in case random number match, create new setNumber with new random number!
    number === random
      ? setNumber(String(Math.trunc(Math.random() * apiData.length) + 1))
      : '';
  };

  return (
    <section id="random" className="random__cocktail">
      <div className="random__cocktail--header">
        <h4>Sip & Surprise</h4>
        <p>"Unleash the Unexpected with Random Cocktails"</p>
      </div>

      {/* Looping over apiData //With filter and random number showing random cocktails! */}
      {apiData
        .filter(drink => {
          return drink.id === random;
        })
        .map((drink, i) => {
          return (
            <div key={i}>
              <div className="random__cocktail--main">
                {/* ingredients */}

                <div className="random__cocktail--main-ingredients">
                  <p className="random__cocktail--main-title">description</p>

                  <p>{drink.description}</p>
                </div>

                {/* IMAGE  */}
                <div className="random__cocktail--main--image">
                  <img src={drink.image} alt="image of cocktail" />
                  <p className="random__cocktail--main-title">{drink.name}</p>
                  <button
                    onClick={handlerClick}
                    className="random__cocktail--main--btn btn"
                  >
                    random
                  </button>
                </div>

                {/*instruction  */}
                <div className="random__cocktail--main--instruction">
                  <p className="random__cocktail--main-title">instructions</p>
                  <p>{drink.instructions}</p>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default RandomCocktail;
