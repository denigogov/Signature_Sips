import SeasonItem from './SeasonItems';
import '../sass/components/_header.scss';
import logo from '../assets/logo.png';
import heroImg from '../assets/Old Fashioned—Studio Bon.jpg';

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
              <img className="logo" src={logo} alt="website logo" />
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
        <img src={heroImg} alt="hero image bottles abstract" />

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
