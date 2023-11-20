import {FC, useState} from "react";

interface Props {
  text: string;
}

const UnderlineCopyText: FC<Props> = ({text}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleClickText = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsClicked(true);
    });
  };

  return (
    <div>
      <span
        className="relative text-[1.5rem] hover:underline"
        onClick={handleClickText}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => {
          setShowTooltip(false);
          setIsClicked(false);
        }}
      >
        {text}
        {showTooltip && (
          <span className="absolute text-[1rem] text-white -top-[150%] px-[1rem] py-[.5rem] bg-[#2d2d2d] rounded-md left-[50%] -translate-x-[50%] whitespace-nowrap">
            {isClicked ? "کپی شد" : "کلیک کنید"}
          </span>
        )}
      </span>
    </div>
  );
};

export default UnderlineCopyText;
