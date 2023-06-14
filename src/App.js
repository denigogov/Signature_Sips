import { useEffect, useState } from 'react';
import Header from './components/Header';
import Border from './components/Border';
import SeasonCocktails from './components/SeasonCocktails';
import List from './components/List';
import { apiData } from './cocktailsData';
import RandomCocktail from './components/RandomCocktail';
import StatisticPieChart from './components/StatisticPieChart';
import Footer from './components/Footer';
import user from './components/dataTest';

const App = () => {
  const [api, setApi] = useState([]);

  const [pieChartData, setPieChartData] = useState({
    labels: user.map(data => data.year),
    datasets: [
      {
        label: 'Users userLost',
        data: user.map(data => data.userLost),
        rotation: 90,
        spacing: 4,
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
  }, []);

  return (
    <div>
      <Header />
      <Border />
      <SeasonCocktails apiData={api} />
      <RandomCocktail apiData={api} />
      <StatisticPieChart PieChartData={pieChartData} />
      <Footer />

      {/* <List apiData={api} /> */}
    </div>
  );
};

export default App;
