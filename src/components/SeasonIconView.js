import summerIcon from '../assets/summer-icon.png';
import autumnIcon from '../assets/autumn-icon.png';
import springIcon from '../assets/spring-icon.png';
import winterIcon from '../assets/winter-icon.png';
import '../sass/components/_seasonIconView.scss';

const SeasonIconView = ({ season, setSeason }) => {
  const winterHandler = () => {
    setSeason('winter');
  };
  const springHandler = () => {
    setSeason('spring');
  };
  const summerHandler = () => {
    setSeason('summer');
  };
  const autumnHandler = () => {
    setSeason('autumn');
  };

  /**
   *
   * @param {hardcoded, season name }
   * @returns {if the state === fn param than its return new class (underline under img) }
   */
  const seasonSetup = seasons => {
    return season === seasons ? 'season__coctails--icon--underLine' : '';
  };

  return (
    <div className="season__coctails--icon">
      <img
        className={seasonSetup('winter')}
        onClick={winterHandler}
        src={winterIcon}
        alt="winter icon"
      />
      <img
        className={seasonSetup('spring')}
        onClick={springHandler}
        src={springIcon}
        alt="spring icon"
      />
      <img
        className={seasonSetup('summer')}
        onClick={summerHandler}
        src={summerIcon}
        alt="summer icon"
      />
      <img
        className={seasonSetup('autumn')}
        onClick={autumnHandler}
        src={autumnIcon}
        alt="autumn icon"
      />
    </div>
  );
};

export default SeasonIconView;
