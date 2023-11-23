import MyAccount from './MyAccount';
import { user } from './SideBar';

const MainContent = () => {
  return (
    <main className="bg-[#ffffff33] min-h-full px-8 py-7 rounded-2xl w-full backdrop-blur-[37px]">
      {/* My account component*/}
      <MyAccount premium={user.premium} />
    </main>
  );
};

export default MainContent;
