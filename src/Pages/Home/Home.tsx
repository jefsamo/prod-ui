import Navbar from "../../components/Navbar/Navbar";
import Home_Img from "./svg/home_img.png";
import Video from "./svg/rptrd.mp4";
import Balaclava from "./svg/balaclava.png";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Navbar active="home" />
        <div className="home-content">
          <div className="heading">
            <h1>RPTRD</h1>
            <h1>SOLS</h1>
          </div>
          <div className="image-content">
            <img src={Home_Img} alt="" />
            <video src={Video} autoPlay muted loop className="gif" />
            <p>
              We did it for the art. Want to <br /> learn more?
            </p>
            <a href="/">F*ck around and find out</a>
          </div>
        </div>
        <div className="bottom-content">
          <div className="image-container">
            <img src={Balaclava} alt="" style={{ height: "300px" }} />
          </div>
          <div className="copyright">
            <p>{new Date().getFullYear()}, RPTRD Sols</p>
            <p>Rapture is coming</p>
          </div>
        </div>

        <div className="home-mobile">
          <div className="rapture-text">
            <a href="https://rptrdsolsnft.medium.com">
              F*ck around and find out
            </a>
            <div className="copy">
              <p>{new Date().getFullYear()}, RPTRD Sols</p>
              <p>Rapture is coming</p>
            </div>
          </div>
          <div className="image">
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
