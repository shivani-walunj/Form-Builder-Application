import Link from "../../components/Link/Link";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer__logo_container">
          <Link to="xyx.com">
            <img src="./src/assets/logo.png" height="30px" width="30px" />
          </Link>

          <h4>Form bot</h4>
        </div>
        <p>
          made with ❤️ by<Link to="#">@cuvette</Link>
        </p>
      </div>
      <div className="footer2 footer__links">
        <h4>product</h4>
        <Link isExternal={true} to="https://www.instagram.com/">
          status
        </Link>
        <Link isExternal={true} to="https://www.instagram.com/">
          documentation
        </Link>
        <Link isExternal={true} to="https://www.instagram.com/">
          roadmap
        </Link>
        <Link to="#">Pricing</Link>
      </div>
      <div className="footer3 footer__links">
        <h4>community</h4>
        <Link isExternal={true} to="https://www.instagram.com/">
          discord
        </Link>
        <Link isExternal={true} to="https://www.instagram.com/">
          gitHub repository
        </Link>
        <Link isExternal={true} to="https://www.instagram.com/">
          twitter
        </Link>
        <Link isExternal={true} to="https://www.instagram.com/">
          linkedIn
        </Link>
        <Link to="#">@cuvette</Link>
      </div>
      <div className="footer4 footer__links">
        <h4>company</h4>
        <Link to="#">about</Link>
        <Link to="#">contact</Link>
        <Link to="#">terms of services</Link>
        <Link to="#">privecy policy</Link>
      </div>
    </div>
  );
};

export default Footer;
