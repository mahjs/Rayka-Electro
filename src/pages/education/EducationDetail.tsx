import React from 'react';
import AparatVideo from './AparatVideo';

const EducationDetail = () => {
  return (
    <div className="flex  justify-start gap-10 title-1 w-full">
      <div className="flex basis-3/5  w-[20rem] h-[29rem]">
        <AparatVideo />
      </div>
      <div className="flex basis-2/5"></div>
    </div>
  );
};

export default EducationDetail;
