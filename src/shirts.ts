import Baseball from "./assets/shirts/baseball.png";
import Coat from "./assets/shirts/coat.png";
import Gym from "./assets/shirts/gym.png";
import Hoodie from "./assets/shirts/hoodie.png";
import Jacket from "./assets/shirts/jacket.png";
import JeanJacket from "./assets/shirts/jean_jacket.png";
import PJ from "./assets/shirts/pj.png";
import RedSweat from "./assets/shirts/red_sweatshirt.png";
import RedTee from "./assets/shirts/red_tee.png";
import Tee from "./assets/shirts/tee-shirt.png";
import Vintage from "./assets/shirts/vintage.png";

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
    image: Vintage,
  },
  {
    image: Tee,
  },
];
