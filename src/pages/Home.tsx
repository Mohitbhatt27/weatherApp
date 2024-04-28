import MainData from "../components/MainData/MainData";
import Sidebar from "../components/Sidebar/Sidebar";
import NightImage from "../assets/night.jpg";
function Home() {
  return (
    <div
      className="min-h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch"
      style={{
        backgroundSize: "cover",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NightImage})`,
      }}
    >
      <Sidebar />
      <MainData />
    </div>
  );
}

export default Home;
