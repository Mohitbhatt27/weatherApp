import { AiOutlineSearch } from "react-icons/ai";
import CloudyNight from "../../assets/CloudyNight.png";
function Upperhalf() {
  return (
    <div className="h-[60%] w-full p-4 flex flex-col justify-center items-start basis-[55%]">
      <div className="flex flex-start w-full mt-12">
        {/* Search bar div */}
        <input
          placeholder="Search..."
          className="px-2 py-2 rounded-tl-md rounded-bl-md block basis-[90%] bg-white text-black"
          type="text"
        />

        <button className="block basis-[10%] p-4 text-white text-lg font-semibold bg-sky-500 rounded-tr-md rounded-br-md">
          <AiOutlineSearch />
        </button>
      </div>

      <div className="w-full h-[60%] flex justify-center mt-8">
        {/* image container */}
        <img src={CloudyNight} className="w-[60%]" />
      </div>

      <div className="flex flex-col">
        {/* Temperature data */}
        <div className="text-7xl text-black flex items-start">
          <div>25.4</div>
          <div className="text-5xl mt-1">°C</div>
        </div>
        <div className="text-black text-md">Friday, 09:34</div>
      </div>
    </div>
  );
}

export default Upperhalf;
