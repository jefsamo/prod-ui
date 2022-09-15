import Twitter from "./svg/twitter.png";
import Discord from "./svg/discord.png";
import Medium from "./svg/medium.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="rise-with-us">
        <h1>RISE WITH US</h1>
        <p>Connect With the Rapture, Don’t get left behind</p>
        <div className="quick-links">
          <a href="https://twitter.com/raptur3dsols">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://twitter.com">
            <img src={Discord} alt="" />
          </a>
          <a href="https://rptrdsolsnft.medium.com">
            <img src={Medium} alt="" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p> {new Date().getFullYear()}, RPTRD Sols</p>
        <p>Rapture is coming</p>
      </div>
      <div className="coolshit">
        <p>
          We’re Building a project that needs its community, we need you, we
          fucked around and found out, its your turn to fuck with us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
