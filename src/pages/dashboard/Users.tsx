import { useState } from 'react';
import CustomTable from '../../components/ui/CustomTable';

const cellHeaders = ['ایدی', 'نام کاربری', 'دسترسی پلان', 'ایمیل', 'تاریخ ساخت', 'گزینه‌ها'];
const userRows = [
  {
    id: 1,
    userName: 'محمدرضا',
    position: 'کاربر معمولی-رایگان',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 2,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 3,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 4,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
  {
    id: 5,
    userName: 'محمدرضا',
    position: 'مدیر',
    email: 'amir.hosein.clan@gmail.com',
    date: '1400/01/01',
    option: 'حذف',
  },
];
const Users = () => {
  return (
    <div>
      <CustomTable userRows={userRows} isUser={true} cellHeaders={cellHeaders} />
    </div>
  );
};

export default Users;
