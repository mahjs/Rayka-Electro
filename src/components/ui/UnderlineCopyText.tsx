import { FC, useState } from 'react';
import Copy from '../../assets/images/copy.svg';

interface Props {
  text: string;
}

const UnderlineCopyText: FC<Props> = ({ text }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleClickText = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsClicked(true);
    });
  };

  return (
    <div
      onClick={handleClickText}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => {
        setShowTooltip(false);
        setIsClicked(false);
      }}
      className="flex justify-between cursor-pointer gap-5 bg-gradient-to-l  pr-8 pl-4 py-2 rounded-full from-[#8C39F3] to-[#9F52FF]"
    >
      <span className="relative text-white lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] hover:underline">
        {text}
        {showTooltip && (
          <span className="absolute text-[1rem] text-white -top-[150%] px-[1rem] py-[.5rem] bg-[#2d2d2d] rounded-md left-[50%] -translate-x-[50%] whitespace-nowrap">
            {isClicked ? 'کپی شد' : 'کلیک کنید'}
          </span>
        )}
      </span>
      <img
        loading="lazy"
        style={{
          marginRight: 'auto',
        }}
        src={Copy}
      />
    </div>
  );
};

export default UnderlineCopyText;
