import React from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  kind?: 'blue' | 'yellow' | 'skyblue' | 'white' | 'purple';
};

const Buttons: React.FC<ButtonProps> = ({ children, kind = 'blue' }) => {
  return (
    <>
      <button
        type="button"
        className={cn(
          'hover:text-white border rounded-[3rem] px-12 focus:ring-4 focus:outline-none font-medium text-sm py-2 text-center transition duration-500',
          {
            'text-[#0077ff] hover:bg-blue-[#0077ff] focus:ring-[#0077ff] dark:border-[#0077ff] dark:text-[#0077ff] dark:hover:text-white dark:hover:bg-[#0077ff] dark:focus:ring-[#0077ff]':
              kind === 'blue',
            'text-[#ff9100] border-[#ff9100] hover:bg-[#ff9100] focus:ring-[#ff9100] dark:border-[#ff9100] dark:text-[#ff9100] dark:hover:text-white dark:hover:bg-[#ff9100] dark:focus:ring-[#ff9100]':
              kind === 'yellow',
            '': kind === 'skyblue',
            '': kind === 'purple',
            '': kind === 'white',
          },
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;
