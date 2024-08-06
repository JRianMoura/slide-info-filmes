import { Data } from "../data";
import SliderCard from "./SliderCard";

type Props = {
  data: Data[];
};

const Slides = ({ data }: Props) => {
  return (
    <div className="flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
};

export default Slides;
