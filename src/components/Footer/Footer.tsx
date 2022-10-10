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
          <a
            href="https://twitter.com/raptur3dsols"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="Twitter logo" />
          </a>
          <a
            href="https://discord.gg/A53A7jNvAT"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Discord} alt="Discord logo" />
          </a>
          <a
            href="https://rptrdsolsnft.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Medium} alt="Medium logo" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p> {new Date().getFullYear()}, RPTRD Sols</p>
        <p>Rapture is coming</p>
      </div>
      <div className="coolshit">
        <p>
          We’re building a project that needs its community.Yes, we need you. We
          messed around and figured stuff out, now its your turn to fuck with
          us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
