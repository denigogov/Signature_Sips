import '../sass/components/_seasonCoctals.scss';
import { useState, useEffect } from 'react';
import ApiRenderData from './ApiRenderData';
import SeasonIconView from './SeasonIconView';

const SeasonCocktails = ({ apiData }) => {
  const [season, setSeason] = useState('');

  useEffect(() => {
    autoSeasonSetup();
  }, []);

  const autoSeasonSetup = () => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();

    // Defining the start and end dates for each season
    const springStart = { month: 3, date: 20 };
    const springEnd = { month: 6, date: 20 };
    const summerStart = { month: 6, date: 21 };
    const summerEnd = { month: 9, date: 22 };
    const autumnStart = { month: 9, date: 23 };
    const autumnEnd = { month: 12, date: 20 };
    const winterStart = { month: 12, date: 21 };
    const winterEnd = { month: 3, date: 19 };

    // Checking if the current date falls within each season's range
    if (isDateInRange(month, date, springStart, springEnd)) {
      setSeason('spring');
    } else if (isDateInRange(month, date, summerStart, summerEnd)) {
      setSeason('summer');
    } else if (isDateInRange(month, date, autumnStart, autumnEnd)) {
      setSeason('autumn');
    } else {
      setSeason('winter');
    }
  };

  // Helper function to check if a date is within a given range
  const isDateInRange = (month, date, start, end) => {
    if (month > start.month && month < end.month) {
      return true;
    } else if (month === start.month && date >= start.date) {
      return true;
    } else if (month === end.month && date <= end.date) {
      return true;
    } else {
      return false;
    }
  };

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
