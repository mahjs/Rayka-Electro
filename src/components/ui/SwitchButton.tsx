import { useState } from 'react';
import { Tab } from '@headlessui/react';

interface SwitchButtonProps {
  onTabChange: (tab: string) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SwitchButton({ onTabChange }: SwitchButtonProps) {
  let [categories] = useState({ app: 'اپلیکیشن', dns: 'دی ان اس' });

  return (
    <div className="w-full flex flex-col items-center  ">
      <Tab.Group onChange={(index) => onTabChange(Object.keys(categories)[index])}>
        <Tab.List className="flex justify-center max-w-md w-3/5  rounded-3xl bg-[#ffffff18] ">
          {Object.entries(categories).map(([category, label]) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full bg-transparent rounded-2xl  py-2.5 text-sm font-medium leading-5',
                  'ring-[#2D0172] ring-offset-2  focus:outline-none focus:ring-2',
                  selected ? 'bg-white text-[#2D0172] shadow' : 'text-white  hover:text-white',
                )
              }
            >
              {label}
            </Tab>
          ))}
        </Tab.List>
        {/*  */}
      </Tab.Group>
    </div>
  );
}
