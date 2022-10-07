import Warmer from "./assets/headwear/warmer.png";
import WarmerSm from "./assets/headwear/warmersm.png";
import Peaky from "./assets/headwear/peaky.png";
import BucketHat from "./assets/headwear/buckethat.png";
import BucketHatSm from "./assets/headwear/buckethatsm.png";
import Cap from "./assets/headwear/cap.png";
import CapSm from "./assets/headwear/capsm.png";
import PeakySm from "./assets/headwear/peakysmall.png";

export type Head = {
  image: string;
};

export const HeadData: Head[] = [
  {
    image: Warmer,
  },
  {
    image: BucketHat,
  },
  {
    image: Peaky,
  },
  {
    image: Cap,
  },
];

export const HeadAvatar: Head[] = [
  {
    image: WarmerSm,
  },
  {
    image: BucketHatSm,
  },
  {
    image: PeakySm,
  },
  {
    image: CapSm,
  },
];
