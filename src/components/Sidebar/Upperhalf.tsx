import { AiOutlineSearch } from "react-icons/ai";
import CloudyNight from "../../assets/CloudyNight.png";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";
import { useState } from "react";
function Upperhalf() {

  const [search, setSearch] = useState<string>("");

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {

    setSearch(e.target.value);

  }

  const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);
  return (
    <div className="max-h-[30rem] w-full p-4 flex flex-col justify-center items-start basis-[65%]">
      <div className="flex flex-start w-full mt-8">
        {/* Search bar div */}
        <input
          placeholder="Search..."
          className="px-2 py-2 rounded-tl-md rounded-bl-md block basis-[90%] bg-white text-black"
          type="text"
          onChange={handleOnChange}
        />

        <button className="block basis-[10%] p-4 text-white text-lg font-semibold bg-sky-500 rounded-tr-md rounded-br-md" onClick={() => setSearch(search)}>
          <AiOutlineSearch />
        </button>
      </div>

      <div className="w-full h-[60%] flex justify-center mt-12">
        {/* image container */}
        <img src={CloudyNight} className="w-[60%] h-full" />
      </div>

      <div className="flex flex-col mt-4">
        {/* Tempreature data */}
        <div className="text-7xl text-black flex items-start">
          <div>{currentData.temp_c}</div>
          <div className="text-5xl mt-1">°C</div>
        </div>
        <div className="text-black text-md">Friday, 09:34</div>
      </div>
    </div>
  );
}

export default Upperhalf;
