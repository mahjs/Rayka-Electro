import ProfileInfo from './ProfileInfo';
import SmallCrown from '../../assets/images/small-crown.svg';
import Profile from '../../assets/images/profile.svg';
import Logout from '../../assets/images/logout.svg';
import LeftArrow from '../../assets/images/left-arrow.svg';
import StarPremium from '../../assets/images/star-premium.svg';
import Bell from '../../assets/images/bell.svg';
import { FC, useState } from 'react';
import { Tabs } from './Dashboard';
import { useNavigate } from 'react-router-dom';

export const user = {
  name: 'Alireza_AH191238',
  email: 'alireza_asda1234@gmail.com',
  premium: true,
};

const tabs = [
  {
    name: 'my-account',
    title: 'سطح حساب من',
    image: SmallCrown,
  },
  {
    name: 'my-info',
    title: 'مشخصات من',
    image: Profile,
  },
];

interface Props {
  selectedTab: string;
  handleSelectTab: (tab: Tabs) => void;
}

const SideBar: FC<Props> = ({ selectedTab, handleSelectTab }) => {
  const navigate = useNavigate();
  const [openExitModal, setOpenExitModal] = useState<boolean>(false);

  return (
    <>
      <aside className="bg-[#ffffff18] rounded-2xl min-w-[380px] md:min-w-full lg:min-w-[350px]  backdrop-blur-[37px] flex flex-col px-6 py-5 gap-4">
        <ProfileInfo name={user.name} email={user.email} premium={user.premium} />
        <div className="h-[1px] bg-[#ffffff44] mx-auto w-[100%]" />
        <div className="flex flex-col gap-1">
          {tabs.map((tab) => (
            <button
              onClick={() => handleSelectTab(tab.name as Tabs)}
              key={tab.name}
              className="flex gap-3 items-center p-2 rounded-lg"
              style={{
                background: selectedTab === tab.name ? 'white' : 'none',
              }}
            >
              <img loading="lazy" src={tab.image} alt={tab.name} className="bg-[#ffffff88] p-[2px] rounded-md" />
              <p
                style={{
                  color: selectedTab === tab.name ? '#541A79' : 'white',
                }}
              >
                {tab.title}
              </p>
            </button>
          ))}
          <button onClick={() => setOpenExitModal(true)} className="flex gap-3 text-white items-center p-2 rounded-lg">
            <img loading="lazy" src={Logout} alt="exit" className="bg-[#ffffff88] p-[2px] rounded-md" />
            <p>خروج از حساب</p>
          </button>
        </div>

        {/* Premium card */}
        <div className="relative flex flex-col gap-5 py-2 px-4 text-white bg-[#ffffff22] rounded-xl overflow-hidden mt-auto">
          <img
            loading="lazy"
            src={StarPremium}
            className="absolute w-[145px] h-[145px] opacity-10 -top-[60%] -left-[15%]"
          />
          <button onClick={() => handleSelectTab('upgrade')} className="flex gap-3 items-center ">
            <img loading="lazy" src={StarPremium} />
            <p>نوع حساب شما</p>
            <img loading="lazy" src={LeftArrow} className="mr-auto" />
          </button>

          <div className="flex flex-col">
            <p className="text-[1.5rem] font-bold">حساب کاربری ویژه</p>
            <span className="text-[#ffffff88]">{29} روز باقی مانده</span>
          </div>
        </div>

        <button className="flex items-center gap-3 text-white  bg-[#ffffff22] py-2 px-4 rounded-xl">
          <img loading="lazy" src={Bell} />
          <span className="font-bold">اعلانات</span>
          <span className="mr-auto py-1 px-2 text-[.8rem] rounded-full bg-white text-[#511A79]">{2}</span>
        </button>
      </aside>
      {openExitModal && (
        <div className="fixed flex justify-center items-center text-white backdrop-blur-[20px] z-50 top-0 left-0 right-0 bottom-0 bg-[#000000aa] w-[100vw] h-[100vh]">
          <div className="flex flex-col gap-5 justify-center items-center">
            <p>آیا میخواهید از حسابتان خارج شوید؟</p>
            <div className="flex justify-between w-full">
              <button
                onClick={() => setOpenExitModal(false)}
                className="bg-green-400 text-[#511A79] py-5 px-8 rounded-2xl"
              >
                خیر
              </button>
              <button onClick={() => navigate('/')} className="bg-red-400 text-[#511A79] py-5 px-8 rounded-2xl">
                بله
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
