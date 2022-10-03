import Typewriter from "typewriter-effect";
import Navbar from "../../components/Navbar/Navbar";
import Poster from "./svg/poster.png";
import RL from "./svg/rptrd-reeb.png";
import { data, TeamMemberType } from "../../utils";
import TeamMember from "../../components/TeamMember/TeamMember";
import Footer from "../../components/Footer/Footer";
import "./haven.scss";

const Haven = () => {
  return (
    <div className="haven">
      <Navbar active="haven" />

      <div className="haven-section">
        <div className="haven-story">
          <h1>Y[OUR] HAVEN</h1>
          <h2>
            Rest you weary souls, <br />
            <Typewriter
              options={{
                strings: ["Rapture is coming.", "Rapture is here."],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p>
            An amazing brand created for extraordinary people. <br />
            <br /> We live in a world defined by good and bad, right and wrong,
            heaven and hell, success and failure. Amidst it all, we find
            Rapture. In the center of chaos, Your Haven comes to life. Where
            there is no torment, only euphoria. Where it is okay to live. <br />
            <br /> A flawless collection of 6,666 souls gives you unquestionable
            access to Your Haven. Along with exclusive merch drops for members
            only, live events, outdoor campaigns, and NFT drops. <br />
            <br />
            Your Haven becomes that corner of the world where community, art,
            culture, and life surge to their peak. Nothing can hold you back and
            everything can help you rise. Together, we build a society that
            transforms your digital world into reality.
          </p>
          <div className="medium">
            <a
              href="https://rptrdsolsnft.medium.com"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="haven-image">
          <img src={Poster} alt="" />
          <div className="bottom-text">
            <p>We were tired of derivatives. And shit Merch</p>
            <p> - Maverick</p>
          </div>
        </div>
      </div>
      <div className="society">
        <h1 className="title">SOUL SOCIETY</h1>
        <div className="profile-card">
          {data.map((member: TeamMemberType, i): any => {
            return <TeamMember member={member} key={i} />;
          })}
        </div>
      </div>
      <div className="rise">
        <div className="rise-content">
          <div className="levitate">
            <img src={RL} alt="" className="levitate-img" />
          </div>
          <div className="right-content">
            <h1>YOU'LL RISE TOO</h1>
            <p>
              Our brand grows through the community. Together, we create a
              sanctum. Where like-minded souls can come together and rise
              together. To those who dare to be part of the rapture. One that
              takes you beyond the real world, to a land of euphoria. We await
              you.
            </p>
            <a href="https://twitter.com/raptur3dsols">Join Us</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Haven;
