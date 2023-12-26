import { FC } from 'react';

interface Props {
  name: string;
  premium: boolean;
  email: string;
  profile?: unknown;
}

const ProfileInfo: FC<Props> = ({ name, premium, email /*, profile */ }) => {
  return (
    <div className="flex gap-3">
      <div className="w-[50px] h-[50px] border-[2px] border-white bg-[#ffffff22] rounded-xl">
        {/* {profile && <img src={profile}/>} */}
      </div>
      <div className="flex flex-col">
        <h4 className="text-white text-[1.2rem]">{name}</h4>
        <p className="text-[#ffffff88] text-[.8rem]">{premium ? ' کاربر ویژه (یا ایمیل)' : email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
