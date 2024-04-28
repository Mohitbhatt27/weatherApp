function TopRow() {
  return (
    <div className="flex justify-between items-center w-full px-12 py-2">
      <div className="flex items-center justify-center text-xl font-semibold">
        {/* Today or week */}
        <div className="mr-4 hover:cursor-pointer">Today</div>
        <div className="ml-4 text-[#5598fd] hover:cursor-pointer">Week</div>
      </div>

      <div className="flex items-center justify-center">
        {/* C or F */}
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black text-white  hover:cursor-pointer">
          <p className="font-semibold">°C</p>
        </div>
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white text-black hover:cursor-pointer">
          <p className="font-semibold">°F</p>
        </div>
      </div>
    </div>
  );
}

export default TopRow;
