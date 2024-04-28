import Upperhalf from "./Upperhalf";
import Lowerhalf from "../Sidebar/Lowerhalf";

function Sidebar() {
  return (
    <div
      className="overflow-y-auto basis-auto flex flex-col items-center justify-center text-black  rounded-tl-3xl rounded-bl-3xl"
      style={{ background: "rgba(255,255,255,0.815" }}
    >
      <Upperhalf />

      <div className="h-[1px] w-[87%] bg-[#e9ecef] mt-8 rounded-md"></div>

      <Lowerhalf />
    </div>
  );
}

export default Sidebar;
