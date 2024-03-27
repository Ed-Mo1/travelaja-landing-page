import { TiLocationArrow } from "react-icons/ti";

const DestinationCard = ({ img, title, rp, time }) => {
  return (
    <div className="w-full shadow-lg py- 4 px-3 rounded-[10px] overflow-hidden relative">
      <img src={img} alt={"img"} className="w-full object-cover" />
      <div className="text-title text-start p-5 ">
        <h4 className=" font-bold">{title}</h4>
        <div className="flex justify-between items-center pt-5 flex-wrap gap-5">
          <p className="text-secondary font-bold">Rp.{rp}</p>
          <p className="flex gap-2 items-center">
            <TiLocationArrow className="text-2xl" />
            <span className="text-sm "> {time} for trips</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
