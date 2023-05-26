import { useState, useEffect } from 'react';
import sliderData from '../sliderData';
import '../sass/components/_statisticSlider.scss';

const StatisticSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = sliderData.length;

  const slideNext = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const slidePrev = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      slideNext();
      clearInterval(interval);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const left = () => {
    slidePrev();
  };

  const right = () => {
    slideNext();
  };

  return (
    <div className="statistic__container--list">
      <div className="statistic__container--title">
        <p>Mixology Mishaps: 10 Funny Tales from the Cocktail World</p>
      </div>
      {sliderData.map((data, i) => {
        return (
          <div key={data.id}>{i === currentSlide && <p>{data.text}</p>}</div>
        );
      })}
      <div className="sliderBtn">
        <p onClick={left}>previous</p>
        <p onClick={right}>next</p>
      </div>
    </div>
  );
};

export default StatisticSlider;
