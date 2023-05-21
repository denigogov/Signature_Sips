import { Pie } from 'react-chartjs-2';
// Don't remove it (chart.js/auto), its required to be imported this is how chart.js works
import { Colors, Chart as chartjs } from 'chart.js/auto';
import sliderData from '../sliderData';
import { useEffect, useState } from 'react';
import StatisticSlider from './StatisticSlider';

const StatisticPieChart = ({ PieChartData }) => {
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
          <p style={{ textAlign: 'center' }}>Placeholder</p>
          <Pie data={PieChartData} />
        </div>
      </div>
    </section>
  );
};
export default StatisticPieChart;