import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface InstructionLinkProps {
    startAnimation: boolean;
}

const InstructionLink: React.FC<InstructionLinkProps> = ({ startAnimation }) => {
    const [hover, setHover] = useState(false);
    const transitionStyle = hover
        ? 'color 0.5s ease'
        : 'opacity 0.5s ease 2.3s, transform 0.5s ease 2.3s';
    const svgFill = hover ? '#8C39F3' : '#F8F8F8';
    const svgTransition = 'fill 0.7s ease';
    return (
        <Link
            to="/education"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                opacity: startAnimation ? 1 : 0,
                transform: startAnimation ? 'translateY(0)' : 'translateY(2rem)',
                transition: transitionStyle,
                color: hover ? '#8C39F3' : '#fff',
            }}
            className="text-right mt-2 w-[13rem] flex items-center justify-between"
        >
            آموزش استفاده از اپلیکیشن
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" className='mt-1' viewBox="0 0 10 17" fill={svgFill} style={{ transition: svgTransition }}>
                <path d="M9.88 15.06L3.77333 8.94L9.88 2.82L8 0.940002L-3.49691e-07 8.94L8 16.94L9.88 15.06Z" />
            </svg>
        </Link>
    );
};

export default InstructionLink;
