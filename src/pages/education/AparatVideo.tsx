interface AparatVideoProps {
  srcVideo: string;
}

const AparatVideo: React.FC<AparatVideoProps> = ({ srcVideo }) => {
  return (
    <div className="w-full h-full aspect-video rounded-2xl">
      <iframe className="w-full h-full rounded-2xl" src={srcVideo} title="YouTuvbe Video" allowFullScreen></iframe>
    </div>
  );
};

export default AparatVideo;
