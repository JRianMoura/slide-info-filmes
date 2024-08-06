import { motion } from "framer-motion";
import { Data, CurrentSlideData } from "../data";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

const BackgroundImage = ({ transitionData, currentSlideData }: Props) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={transitionData.bgImg}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData + "transition"}
        src={currentSlideData.data?.bgImg}
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
};

export default BackgroundImage;
