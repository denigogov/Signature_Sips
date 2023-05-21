import SeasonItem from './SeasonItems';
import '../sass/_main.scss';

const Header = () => {
  return (
    <header>
      <div className="left">
        <nav>
          <ul className="navList">
            <li className="navLink">
              <a href="#">Home</a>
            </li>
            <li className="navLink">
              <a href="#season">Season</a>
            </li>
            <li>
              <img className="logo" src="./assets/logo.png" alt="" />
            </li>
            <li className="navLink">
              <a href="#statistic">Statistic</a>
            </li>
            <li className="navLink">
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="hero">
          <p className="heroText__Title">Signature Sips</p>
          <p className="heroText__underTitle">
            "Signature Sips: Crafting Unique and Delicious Cocktails for Every
            Occasion"
          </p>

          <a className="hero__btn" href="#random">
            Mix it Up!
          </a>
        </div>
      </div>

      <div className="heroRight">
        <img src="../assets/Old Fashioned—Studio Bon.jpg" alt="" />

        {/* <!-- PopUp btn --> */}
        <div className="info-PopUp">
          <button className="info-popUp__btn"></button>
          <div className="popUp hidden">
            <p>Explore more</p>
            <p>$ 50</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
