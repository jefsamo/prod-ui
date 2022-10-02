import Blue from "./assets/pants/blue.png";
import Boyfriend from "./assets/pants/boyfriend.png";
import Joggers from "./assets/pants/joggers.png";
import PJ from "./assets/pants/pj.png";
import Short from "./assets/pants/short.png";
import Skiny from "./assets/pants/skiny.png";

export type Pant = {
  image: string;
};

export const PantsData: Pant[] = [
  {
    image: Blue,
  },
  {
    image: Boyfriend,
  },
  {
    image: Joggers,
  },
  {
    image: PJ,
  },
  {
    image: Short,
  },
  {
    image: Skiny,
  },
];
