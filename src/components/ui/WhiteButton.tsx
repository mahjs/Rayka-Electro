import { FC } from 'react';

interface Props {
  text: string;
  onClick?: () => void;
}

const WhiteButton: FC<Props> = ({ text, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-900 bg-white px-5 py-2 hover:bg-[#2d2d2d] hover:text-white rounded-full transition-all duration-300"
    >
      {text}
    </button>
  );
};

export default WhiteButton;
