import { FC } from 'react';

interface Props {
  active?: boolean;
}

const CheckIcon: FC<Props> = ({ active = false }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64px" height="64px">
      <path
        style={{
          transition: 'all .8s ease-in-out',
          cursor: 'pointer',
          fill: active ? '#44a832' : '#ffffff',
        }}
        d="M5.268,10.732c-0.976-0.976-2.559-0.976-3.536,0s-0.976,2.559,0,3.536l4.645,4.645	c1.449,1.449,3.797,1.449,5.246,0L12.536,18L5.268,10.732z"
        opacity=".95"
      />
      <path
        style={{
          transition: 'all .8s ease-in-out',
          cursor: 'pointer',
          fill: active ? '#44a832' : '#ffffff',
        }}
        d="M22.268,4.732c-0.976-0.976-2.559-0.976-3.536,0L9,14.464L12.536,18l9.732-9.732C23.244,7.291,23.244,5.708,22.268,4.732z"
        opacity=".55"
      />
    </svg>
  );
};

export default CheckIcon;
