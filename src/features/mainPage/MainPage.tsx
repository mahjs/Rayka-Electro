import Navbar from "../../components/navbar/Navbar";
import FirstOfMain from "./FirstOfMain";

const MainPage = () => {
  return (
    <div>
      <div className="h-[100dvh] lg:px-48 md:px-20 px-4 bg-black">
        {" "}
        <Navbar />
        <FirstOfMain />
      </div>
    </div>
  );
};

export default MainPage;
