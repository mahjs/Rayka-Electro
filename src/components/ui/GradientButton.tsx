import {FC, useState} from "react";

interface Props {
  text: string;
}

const GradientButton: FC<Props> = ({text}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundImage: `linear-gradient(to right, #36D1DC 0%, #5B86E5 51%, #36D1DC 100%)`,
        backgroundSize: "200% 100%",
        backgroundPosition: isHovering ? "100% 0" : "initial",
        transition: "all .2s linear",
      }}
      className="py-1 px-6 text-[1.2rem] max-w-[11rem] rounded-full text-white"
    >
      {text}
    </button>
  );
};

export default GradientButton;
