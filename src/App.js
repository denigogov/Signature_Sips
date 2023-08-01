import { useEffect, useState } from 'react';
import Header from './components/Header';
import Border from './components/Border';
import SeasonCocktails from './components/SeasonCocktails';
import List from './components/List';
import { apiData } from './cocktailsData';
import RandomCocktail from './components/RandomCocktail';
import StatisticPieChart from './components/StatisticPieChart';
import Footer from './components/Footer';
import cocktailPieData from './pieChartData';
import Loading from './components/Loading';

const App = () => {
  const [api, setApi] = useState([]);
  const [season, setSeason] = useState('');

  // Pie Chart Login
  const [pieChartData, setPieChartData] = useState({
    labels: cocktailPieData.map(data => data.name),
    datasets: [
      {
        label: 'global sale in €',
        data: cocktailPieData.map(data => data[season]),
        rotation: 90,
        spacing: 7,
        hoverOffset: 30,
        cutout: '30%',
      },
    ],
  });

  // API DATA
  const data = async () => {
    const res = await apiData();
    setApi(res.drinks);
  };

  useEffect(() => {
    data();
    autoSeasonSetup();
  }, []);

  // making the PIE CHART synchronization with the season state
  useEffect(() => {
    const data = cocktailPieData.map(data => data[season]);
    setPieChartData(prevState => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          data,
        },
      ],
    }));
  }, [season, cocktailPieData]);

  // auto synchronization with the current season
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
    // const winterStart = { month: 12, date: 21 };
    // const winterEnd = { month: 3, date: 19 };

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
    <div>
      <Header />
      <Border />
      <SeasonCocktails apiData={api} season={season} setSeason={setSeason} />
      <RandomCocktail apiData={api} />
      <StatisticPieChart PieChartData={pieChartData} season={season} />
      <Footer />

      {/* <List apiData={api} /> */}
    </div>
  );
};

export default App;
