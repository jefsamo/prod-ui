import Chelsea from "./svg/chelsea.png";
import ChelseaSm from "./assets/kicks/chelseasm.png";
import Boot from "./assets/kicks/boot.png";
import BootSm from "./assets/kicks/bootsm.png";
import Crocs from "./assets/kicks/crocs.png";
import Crocsm from "./assets/kicks/crocsm.png";
import Duramo from "./assets/kicks/duramo.png";
import DuramoSm from "./assets/kicks/duramosm.png";
import Loafer from "./assets/kicks/loafers.png";
import Loafersm from "./assets/kicks/loafersm.png";
import Trainers from "./assets/kicks/trainers.png";
import Trainersm from "./assets/kicks/trainersm.png";
import Vans from "./assets/kicks/vans.png";
import Vansm from "./assets/kicks/vansm.png";
import White from "./assets/kicks/white.png";
import WhiteSm from "./assets/kicks/whitesm.png";

export type Kick = {
  image: string;
};

export const KicksData: Kick[] = [
  {
    image: Chelsea,
  },
  {
    image: Boot,
  },
  {
    image: Crocs,
  },
  {
    image: Duramo,
  },
  {
    image: Loafer,
  },
  {
    image: Trainers,
  },
  {
    image: Vans,
  },
  {
    image: White,
  },
];

export const KicksAvatar: Kick[] = [
  {
    image: ChelseaSm,
  },
  {
    image: BootSm,
  },
  {
    image: Crocsm,
  },
  {
    image: DuramoSm,
  },
  {
    image: Loafersm,
  },
  {
    image: Trainersm,
  },
  {
    image: Vansm,
  },
  {
    image: WhiteSm,
  },
];
