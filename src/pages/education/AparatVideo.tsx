import React from 'react';

interface AparatVideoProps {
  srcVideo: string;
  onLoad?: () => void;
}

const AparatVideo: React.FC<AparatVideoProps> = ({ srcVideo, onLoad }) => {
  return (
    <div className="w-full h-full aspect-video rounded-2xl">
      <iframe
        className="w-full h-full rounded-2xl"
        src={srcVideo}
        title="AparatVideo"
        allowFullScreen
        onLoad={onLoad}
      ></iframe>
    </div>
  );
};

export default AparatVideo;
