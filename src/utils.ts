import Maverick from "./svg/maverick.png";
import Jason from "./svg/jason.png";
import Lex from "./svg/Lex.png";
import Anthea from "./svg/anthea.png";
import Jerry from "./svg/jerry.png";
import Zeya from "./svg/Zeya.png";
import Maddison from "./svg/Maddison.png";
import Jay from "./svg/Jay.png";
import Mike from "./svg/Mike.png";
import GothAngel from "./svg/goth-angel.png";

export type NavbarType = {
  active: string;
};

export type TeamMemberType = {
  name: string;
  role: string;
  image: string;
  handle?: string;
};

export const data: TeamMemberType[] = [
  {
    name: "Maverick",
    role: "Co-Founder",
    image: Maverick,
    handle: "https://twitter.com/maverick6_6_6",
  },
  {
    name: "Jason",
    role: "Co-Founder",
    image: Jason,
  },
  {
    name: "LEX",
    role: "Lead Dev",
    image: Lex,
  },
  {
    name: "Jamal",
    role: "Artist",
    image: Anthea,
  },
  {
    name: "Zeya",
    role: "Community Lead",
    image: Zeya,
  },
  {
    name: "WhiteLion",
    role: "Communications",
    image: Mike,
  },
  {
    name: "Rocket Man",
    role: "Fashion Designer",
    image: GothAngel,
  },
  {
    name: "Jerry",
    role: "Web3 Dev",
    image: Jerry,
  },
  {
    name: "Jay",
    role: "Artist",
    image: Jay,
  },
  {
    name: "Maddison",
    role: "Community manager",
    image: Maddison,
  },
];
