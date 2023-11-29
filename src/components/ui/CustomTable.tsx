import React from 'react';
import { user } from '../../pages/dashboard/SideBar';

type UserRow = {
  id: number;
  userName: string;
  position: string;
  email: string;
  date: string;
  images: string[];
};
type HistoryRow = {
  code: number;
  name: string;
  status: string;
  discrib: string;
  date: string;
  images: string;
};
interface Props {
  cellHeaders: string[];
  userRows?: UserRow[];
  historyRows?: HistoryRow[];
  isUser?: boolean;
}
const CustomTable: React.FC<Props> = ({ cellHeaders, userRows, isUser, historyRows }) => {
  return (
    <div className="w-full p-6 rounded-xl border-2 border-[#ffffff18] h-[600px] 	body-2">
      <table className="table-fix transition duration-500 ease-in-out w-full text-white ">
        <thead className="border-none ">
          {isUser ? (
            <tr className=" flex bg-[#ffffff18] backdrop-blur-[37px] rounded-lg h-[50px] items-center">
              {cellHeaders.map((header, index) => (
                <th
                  key={index}
                  className={
                    index === 0
                      ? 'flex-[0.5]'
                      : index === 1
                        ? 'flex-[0.5]'
                        : index === 3
                          ? 'flex-1 text-right'
                          : index === 4
                            ? 'flex-[0.5]'
                            : index === 5
                              ? 'flex-[0.5]'
                              : 'flex-1'
                  }
                >
                  {header}
                </th>
              ))}
            </tr>
          ) : (
            <tr className=" flex bg-[#ffffff18] backdrop-blur-[37px] rounded-lg h-[50px] items-center">
              {cellHeaders.map((header, index) => (
                <th key={index} className={index === 5 ? 'flex-[0.5]' : 'flex-1'}>
                  {header}
                </th>
              ))}
            </tr>
          )}
        </thead>
        {isUser ? (
          <div className="flex h-[500px] overflow-y-scroll w-full ">
            <tbody className="w-full">
              {userRows?.map((userRows, index) => (
                <>
                  <tr className=" flex  text-center rounded-2xl items-center  h-[70px]" key={index}>
                    <th className="flex-[0.5]">{userRows.id}</th>
                    <th className="flex-[0.5]">{userRows.userName}</th>
                    <th className="flex-1">{userRows.position}</th>
                    <th className="flex-1 text-right">{userRows.email}</th>
                    <th className="flex-[0.5]">{userRows.date}</th>
                    <th className="flex-[0.5] flex justify-center gap-3">
                      {userRows.images?.map((images, index) => {
                        return <img src={images} alt="" key={index} />;
                      })}
                    </th>
                  </tr>
                  <div className="h-[1px] bg-[#ffffff44] mx-auto w-[100%]" />
                </>
              ))}
            </tbody>
          </div>
        ) : (
          <div className="flex h-[500px] overflow-y-scroll w-full">
            <tbody className="w-full">
              {historyRows?.map((historyRows, index) => (
                <>
                  <tr className=" flex  text-center rounded-2xl items-center  h-[70px]" key={index}>
                    <th className="flex-1">{historyRows.code}</th>
                    <th className="flex-1">{historyRows.name}</th>
                    <th className="flex-1">{historyRows.status}</th>
                    <th className="flex-1 ">{historyRows.discrib}</th>
                    <th className="flex-1">{historyRows.date}</th>
                    <th className="flex-[0.5] flex justify-center">
                      <img src={historyRows.images} alt="images" />
                    </th>
                  </tr>
                  <div className="h-[1px] bg-[#ffffff44] mx-auto w-[100%]" />
                </>
              ))}
            </tbody>
          </div>
        )}
      </table>
    </div>
  );
};

export default CustomTable;
