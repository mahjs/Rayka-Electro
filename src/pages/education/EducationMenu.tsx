// EducationMenu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import educationData from './EducationData';

const EducationMenu: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-10 title-1">
      {educationData.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/education/${item.id}`)}
          className="hoverable-div bg-[#ffffff18] rounded-2xl w-[380px] flex flex-col py-14 justify-between items-center gap-4 text-white hover:bg-white hover:text-[#2D0172] transition duration-500"
        >
          <img src={item.image} alt={item.text} className="svg-image w-[76px]" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationMenu;
