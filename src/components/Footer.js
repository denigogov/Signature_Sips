import githubIcon from '../assets/githubIcon.svg';
import linkedInIcon from '../assets/linkedin-logo-svgrepo-com.svg';
import '../sass/components/_footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__icons">
        <a target="_blank" href="https://github.com/denigogov">
          <img className="githubLogo" src={githubIcon} alt="github Logo" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/dejan-gogov-571871270/"
        >
          <img
            className="linkedInLogo"
            src={linkedInIcon}
            alt="linkedIn Logo"
          />
        </a>
      </div>
      <p>Signature Sips by DejanGogov</p>
    </footer>
  );
};

export default Footer;
