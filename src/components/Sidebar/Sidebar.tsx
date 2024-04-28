import Upperhalf from "./Upperhalf";
import Lowerhalf from "../Sidebar/Lowerhalf";

function Sidebar() {
  return (
      <div className="basis-3/12 flex flex-col items-center text-black h-full rounded-tl-3xl rounded-bl-3xl" style={{background: 'rgba(255,255,255,0.815'}}>
          <Upperhalf/>
          <Lowerhalf/>
      </div>
  )
}

export default Sidebar;