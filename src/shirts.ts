import Baseball from "./assets/shirts/baseball.png";
import BaseballSm from "./assets/shirts/baseballsm.png";
import Coat from "./assets/shirts/coat.png";
import CoatSm from "./assets/shirts/coatsm.png";
import Gym from "./assets/shirts/gym.png";
import GymSm from "./assets/shirts/gymsm.png";
import Hoodie from "./assets/shirts/hoodie.png";
import HoodieSm from "./assets/shirts/hoodiesm.png";
import Jacket from "./assets/shirts/jacket.png";
import JacketSm from "./assets/shirts/jacketsm.png";
import JeanJacket from "./assets/shirts/jean_jacket.png";
import JeanJacketSm from "./assets/shirts/jean_jacketsm.png";
import PJ from "./assets/shirts/pj.png";
import PJSm from "./assets/shirts/pjsm.png";
import RedSweat from "./assets/shirts/red_sweatshirt.png";
import RedSweatSm from "./assets/shirts/red_sweatshirtsm.png";
import RedTee from "./assets/shirts/red_tee.png";
import RedTeeSm from "./assets/shirts/red_teesm.png";
import Tee from "./assets/shirts/tee-shirt.png";
import TeeSm from "./assets/shirts/tee-shirtsm.png";
import Vintage from "./assets/shirts/vintage.png";
import VintageSm from "./assets/shirts/vintagesm.png";
import Goofy from "./assets/shirts/goofy.png";
import GoofySm from "./assets/shirts/goofysm.png";
import Varsity from "./assets/shirts/varsity.png";
import VarsitySm from "./assets/shirts/varsitysm.png";

export type Shirt = {
  image: string;
};

export const ShirtsData: Shirt[] = [
  {
    image: Baseball,
  },
  {
    image: Coat,
  },
  {
    image: Gym,
  },
  {
    image: Hoodie,
  },
  {
    image: Jacket,
  },
  {
    image: JeanJacket,
  },
  {
    image: PJ,
  },
  {
    image: RedSweat,
  },
  {
    image: RedTee,
  },
  {
    image: Tee,
  },
  {
    image: Vintage,
  },
  {
    image: Goofy,
  },
  {
    image: Varsity,
  },
];

export const ShirtsAvatar: Shirt[] = [
  {
    image: BaseballSm,
  },
  {
    image: CoatSm,
  },
  {
    image: GymSm,
  },
  {
    image: HoodieSm,
  },
  {
    image: JacketSm,
  },
  {
    image: JeanJacketSm,
  },
  {
    image: PJSm,
  },
  {
    image: RedSweatSm,
  },
  {
    image: RedTeeSm,
  },
  {
    image: TeeSm,
  },
  {
    image: VintageSm,
  },
  {
    image: GoofySm,
  },
  {
    image: VarsitySm,
  },
];
