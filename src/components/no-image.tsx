import { PiImageBroken } from "react-icons/pi";

const NoImage = () => {
  return (
    <div className="full relative bg-white rounded-lg">
      <PiImageBroken className="full text-base-content/40" />
      <div className="absolute inset-0 flex-center">
        <h2 className="sm:text-lg md:text-xl font-bold text-center">No Image</h2>
      </div>
    </div>
  );
};

export default NoImage;
