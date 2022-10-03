import Navbar from "../../components/Navbar/Navbar";
import Home_Img from "./svg/home_img.png";
import Video from "./svg/rptrd.mp4";
import Balaclava from "./svg/desktop.png";
import Mobile from "./svg/mobile.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar active="home" />
      <div className="main-content">
        <div className="left-content">
          <img src={Balaclava} alt="" />
        </div>
        <div className="center-content">
          <div className="header-text">
            <h1>RPTRD</h1>
            <h1>SOLS</h1>
          </div>
          <div className="image">
            <div className="inner-image">
              <div className="content-img">
                <img src={Home_Img} alt="" />
                <video src={Video} autoPlay muted loop className="gif" />
              </div>
              <p>We did it for the art. Want to learn More?</p>
              <a href="https://rptrdsolsnft.medium.com">
                F*ck around and find out.
              </a>
            </div>
          </div>
        </div>
        <div className="right-content">
          <p>{new Date().getFullYear()}, RPTRD Sols</p>
          <p>Rapture is coming</p>
        </div>
      </div>
      <div className="home-mobile">
        <div className="rapture-text">
          <a
            href="https://rptrdsolsnft.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            F*ck around and find out
          </a>
          <div className="copy">
            <p>{new Date().getFullYear()}, RPTRD Sols</p>
            <p>Rapture is coming</p>
          </div>
        </div>
        <div className="image">
          <div className="img-container">
            <img
              src={Balaclava}
              alt=""
              // style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
