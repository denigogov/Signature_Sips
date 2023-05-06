import { useState } from "react";
import SeasonItem from "./SeasonItems";

const List = ({ apiData }) => {
  //storing the value of select>option Value!
  const [drinks, setDrinks] = useState("");

  // onChange => eventListener
  const selectChangeHandler = (e) => {
    setDrinks(e.target.value);
  };

  // Taking the name of the coctails and add to the list
  const optList = apiData.map((items, i) => {
    return (
      <option key={i} value={items.name}>
        {items.name}
      </option>
    );
  });

  // Rendering the coctail from the optionList
  const filterListRender = apiData
    .filter((coctail) => {
      return coctail.name === drinks;
    })
    .map((coctail, i) => {
      return (
        <SeasonItem
          key={i}
          name={coctail.name}
          image={coctail.image}
          instuction={coctail.instructions}
        />
      );
    });

  // JSX
  return (
    <div>
      <select onChange={selectChangeHandler} className="vanco" name="testing">
        <option value="">...</option>
        {optList}
      </select>
      {filterListRender}
    </div>
  );
};

export default List;
