import React, { useState, useEffect } from 'react';
import AparatVideo from './AparatVideo';
import SwitchBtn from '../../components/ui/SwitchButton';
import EducationData, { EducationItem } from './EducationData';

interface EducationDetailProps {
  selectedId: string;
}

const EducationDetail: React.FC<EducationDetailProps> = ({ selectedId }) => {
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>('app');

  useEffect(() => {
    const foundEducation = EducationData.find((e) => e.id === selectedId);
    setSelectedEducation(foundEducation || null);
  }, [selectedId]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  if (!selectedEducation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex lg:flex-row flex-col md:px-12 px-8 justify-start lg:gap-12 md:gap-14 gap-16 title-1 w-full">
      <div className="flex basis-3/5">
        <AparatVideo srcVideo={selectedEducation.videoPath} />
      </div>
      <div className="flex flex-col basis-2/5">
        <SwitchBtn onTabChange={handleTabChange} />
        <p className="body text-white pt-8">
          {selectedTab === 'app' ? selectedEducation.appText : selectedEducation.dnsText}
        </p>
      </div>
    </div>
  );
};

export default EducationDetail;
