import { FC } from 'react';

interface Props {
  active?: boolean;
}

const WifiIcon: FC<Props> = ({ active = false }) => {
  return (
    <svg
      style={{ verticalAlign: 'middle', fill: 'currentColor', overflow: 'hidden' }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      height="64px"
      width="64px"
    >
      <path
        style={{
          transition: 'all .8s ease-in-out',
          cursor: 'pointer',
          fill: active ? '#0077ffaa' : '#ffffff77',
        }}
        d="M512 192c-163 0-326 67.2-443 176.6-6.6 6-6.8 16.2-0.6 22.8l53.4 55.8c6.2 6.6 16.6 6.8 23.2 0.6 46.6-43.2 99.8-77.6 158.6-102 66-27.6 136.2-41.4 208.6-41.4s142.6 14 208.6 41.4c58.8 24.6 112 58.8 158.6 102 6.6 6.2 17 6 23.2-0.6l53.4-55.8c6.2-6.4 6-16.6-0.6-22.8C838 259.2 675 192 512 192z"
      />
      <path
        style={{
          transition: 'all .8s ease-in-out',
          cursor: 'pointer',
          fill: active ? '#0077ff' : '#ffffff',
        }}
        d="M226.4 555l57.2 56.6c6.2 6 16 6.4 22.4 0.6 56.6-50.2 129.2-77.8 205.8-77.8s149.2 27.4 205.8 77.8c6.4 5.8 16.2 5.4 22.4-0.6l57.2-56.6c6.6-6.6 6.4-17.2-0.6-23.4-75-67.8-175.2-109.2-285-109.2s-210 41.4-285 109.2c-6.6 6.2-6.8 16.8-0.2 23.4zM512 648.4c-46.8 0-89.2 19.6-118.8 51-6 6.4-5.8 16.2 0.4 22.4l106.8 105.4c6.4 6.4 16.8 6.4 23.2 0l106.8-105.4c6.2-6.2 6.4-16 0.4-22.4-29.6-31.2-72-51-118.8-51z"
      />
    </svg>
  );
};

export default WifiIcon;