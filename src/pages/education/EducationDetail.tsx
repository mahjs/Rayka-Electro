import React, { useState, useEffect, Suspense } from 'react';
import SwitchBtn from '../../components/ui/SwitchButton';
import EducationData, { EducationItem } from './EducationData';

// Lazy load the AparatVideo component
const AparatVideo = React.lazy(() => import('./AparatVideo'));

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

  // New SVG-based spinner
  const LoadingSpinner = () => (
    <div
      role="status"
      className="flex items-center justify-center h-full w-full  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    >
      <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 20"
      >
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <div className="flex lg:flex-row-reverse flex-col md:px-12 px-8 justify-start lg:gap-12 md:gap-14 gap-16 title-1 w-full">
      <div className="flex flex-col basis-2/5">
        <SwitchBtn onTabChange={handleTabChange} />
        <p className="body text-white pt-8">
          {selectedTab === 'app' ? selectedEducation.appText : selectedEducation.dnsText}
        </p>
      </div>
      <div className="flex basis-3/5 justify-center">
        <Suspense fallback={<LoadingSpinner />}>
          <AparatVideo srcVideo={selectedEducation.videoPath} />
        </Suspense>
      </div>
    </div>
  );
};

export default EducationDetail;
