import { Pie } from 'react-chartjs-2';
// Don't remove it (chart.js/auto), its required to be imported this is how chart.js works
import { Colors, Chart as chartjs } from 'chart.js/auto';
import StatisticSlider from './StatisticSlider';
import '../sass/components/_statisticPieChart.scss';

const StatisticPieChart = ({ PieChartData, season }) => {
  return (
    <section id="statistic">
      <div className="statistic__title">
        <h4>Journey into Cocktail Statistics</h4>
        <p>"Sip & Discover: Unveipng the Cocktail Realm"</p>
      </div>

      <div className="statistic__container">
        <StatisticSlider />
        <div
          className="statistic__container--pieChart"
          style={{ width: '420px', height: '420px' }}
        >
          <p style={{ textAlign: 'center', textTransform: 'capitalize' }}>
            Top 10 Best-Selling {season} Cocktails for 2022
          </p>
          <Pie data={PieChartData} />
        </div>
      </div>
    </section>
  );
};
export default StatisticPieChart;
