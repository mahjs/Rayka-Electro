import AparatVideo from './AparatVideo';
import SwitchBtn from '../../components/ui/SwitchButton';
import { useState } from 'react';

const EducationDetail = ({ selectedIndex }) => {
  const [selectedTab, setSelectedTab] = useState<string>('app');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const education = [
    {
      dnsText: 'لورم ایپسوم متن ساختگی با تولید سادگی',
      appText: 'لورم ایپسوم متن ساختگی با تولیدsdfsdvsdvsdv سادگی',
      aparat: <AparatVideo />,
    },
    {
      dnsText: 'لورم ایپسوم  ساختگی با تولید سادگی',
      appText: 'لورم ایپسوم متن  با تولید سادگی',
      aparat: <AparatVideo />,
    },
    {
      dnsText: 'لورم ایپسوم متن  با تولید سادگی',
      appText: 'لورم ایپسوم متن ساختگی با تولید سادگی',
      aparat: <AparatVideo />,
    },
    {
      dnsText: 'لورم ایپسوم متن ساختگی با  سادگی',
      appText: 'لورم ایپسوم  ساختگی با تولید سادگی',
      aparat: <AparatVideo />,
    },
    {
      dnsText: 'لورم ایپسوم متن ساختگی با تولید سادگی',
      appText: 'لورم ایپسوم متن ساختگی با تولیدsdfsdvsdvsdv سادگی',
      aparat: <AparatVideo />,
    },
    {
      dnsText: 'لورم ایپسوم  ساختگی با تولید سادگی',
      appText: 'لورم ایپسوم متن  با تولید سادگی',
      aparat: <AparatVideo />,
    },
    {
      dnsText: 'لورم ایپسوم متن  با تولید سادگی',
      appText: 'لورم ایپسوم متن ساختگی با تولید سادگی',
      aparat: <AparatVideo />,
    },
    {
      dnsText: 'لورم ایپسوم متن ساختگی با  سادگی',
      appText: 'لورم ایپسوم  ساختگی با تولید سادگی',
      aparat: <AparatVideo />,
    },
  ];
  const selectedEducation = education[selectedIndex];

  return (
    <div className="flex justify-start gap-10 title-1 w-full">
      <div className="flex basis-3/5  w-[20rem] h-[29rem]">{selectedEducation.aparat}</div>
      <div className="flex flex-col  basis-2/5">
        <SwitchBtn onTabChange={handleTabChange} />
        <p className="body text-white pt-8">
          {selectedTab === 'app' ? selectedEducation.appText : selectedEducation.dnsText}
        </p>
      </div>
    </div>
  );
};

export default EducationDetail;
