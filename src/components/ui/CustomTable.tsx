import React from 'react';
import { user } from '../../pages/dashboard/SideBar';

type UserRow = {
  id: number;
  userName: string;
  position: string;
  email: string;
  date: string;
  option: string;
};
type HistoryRow = {
  code: number;
  name: string;
  status: string;
  discrib: string;
  date: string;
  option: string;
};
interface Props {
  cellHeaders: string[];
  userRows?: UserRow[];
  historyRows?: HistoryRow[];
  isUser?: boolean;
}
const CustomTable: React.FC<Props> = ({ cellHeaders, userRows, isUser, historyRows }) => {
  return (
    <div className="w-full p-6 rounded-xl border-2 border-[#ffffff18] h-[480px] 	">
      <table className="table-fix transition duration-500 ease-in-out w-full text-white">
        <thead className="border-none ">
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
                        ? 'flex-[1.5] text-right'
                        : index === 4
                          ? 'flex-[0.5]'
                          : 'flex-1'
                }
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {isUser ? (
          <div className="flex h-[400px] overflow-y-scroll w-full">
            <tbody className="w-full">
              {userRows?.map((userRows, index) => (
                <>
                  <tr className=" flex  text-center rounded-2xl items-center  h-[70px]" key={index}>
                    <th className="flex-[0.5]">{userRows.id}</th>
                    <th className="flex-[0.5]">{userRows.userName}</th>
                    <th className="flex-1">{userRows.position}</th>
                    <th className="flex-[1.5] text-right">{userRows.email}</th>
                    <th className="flex-[0.5]">{userRows.date}</th>
                    <th className="flex-1">{userRows.option}</th>
                  </tr>
                  <div className="h-[1px] bg-[#ffffff44] mx-auto w-[100%]" />
                </>
              ))}
            </tbody>
          </div>
        ) : (
          <div className="flex h-[400px] overflow-y-scroll w-full">
            <tbody className="w-full">
              {historyRows?.map((historyRows, index) => (
                <>
                  <tr className=" flex  text-center rounded-2xl items-center  h-[70px]" key={index}>
                    <th className="flex-[0.5]">{historyRows.code}</th>
                    <th className="flex-[0.5]">{historyRows.name}</th>
                    <th className="flex-1">{historyRows.status}</th>
                    <th className="flex-[1.5] text-right">{historyRows.discrib}</th>
                    <th className="flex-[0.5]">{historyRows.date}</th>
                    <th className="flex-1">{historyRows.option}</th>
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
