import React from 'react';
import ElectroSection from './ElectroSection';
import ElectroPlan from './ElectroPlan';
import SelectButton from '../../components/ui/SelectButton';

const Content = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-start gap-6">
        <SelectButton basis="large">
          <option>بخش دی ان اس</option>
          <option>پلن‌های اکترو</option>
          <option>3</option>
        </SelectButton>
        <button
          type="button"
          className="text-[#511A79]  h-[3rem] bg-gray-100 hover:bg-gray-200   font-medium rounded-lg text-sm px-14 py-2.5 text-center inline-flex items-center  me-2 mb-2"
        >
          خروجی اکسل
        </button>
      </div>
      {/* <ElectroSection /> */}
      <ElectroPlan />
    </div>
  );
};

export default Content;
