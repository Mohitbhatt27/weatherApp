import HighlightRow from "./HighlightRow";
import WeekRow from "./WeekRow";
import TopRow from "./TopRow";

function MainData() {
  return (
    <div className="flex flex-col justify-between py-4 items-center basis-9/12 text-black h-full bg-[#f6f6f8] rounded-br-3xl rounded-tr-3xl">
      <TopRow />
      <WeekRow />
      <div>Today's Highlights</div>
      <HighlightRow />
    </div>
  );
}

export default MainData;
