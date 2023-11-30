import React, { useState } from 'react';
import ElectroSection from './ElectroSection';
import ElectroPlan from './ElectroPlan';
import SelectButton from '../../components/ui/SelectButton';

const Content = () => {
  const [selectedOption, setSelectedOption] = useState<string>('پخش دی ان اس');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-start gap-6">
        <SelectButton basis="large" onChange={handleSelectChange} value={selectedOption}>
          <option value="پخش دی ان اس">بخش دی ان اس</option>
          <option value="پلن الکترو">پلن‌های اکترو</option>
          <option>3</option>
        </SelectButton>
        <button
          type="button"
          className="text-[#511A79] btn  bg-gray-100 hover:bg-gray-200 whitespace-nowrap	  font-medium rounded-lg  lg:px-14 px-10 py-2.5 text-center inline-flex items-center  "
        >
          اعمال تغییرات{' '}
        </button>
      </div>
      {selectedOption === 'پخش دی ان اس' && <ElectroSection />}
      {selectedOption === 'پلن الکترو' && <ElectroPlan />}
    </div>
  );
};

export default Content;
