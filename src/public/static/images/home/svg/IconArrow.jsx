import React from 'react'
import { string } from 'prop-types';

const ArrowSvg = ({ transform }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
        transition: 'all 0.3s',
        transform,
    }}
  >
    <path d="M10.3282 17.5931C9.82731 18.1942 9.90852 19.0875 10.5096 19.5884C11.1106 20.0892 12.0039 20.008 12.5048 19.407L19.5804 10.9163C19.79 10.6693 19.9165 10.3495 19.9165 10.0001C19.9165 9.99485 19.9165 9.98959 19.9164 9.98437C19.9127 9.64359 19.7887 9.33168 19.5848 9.08912L12.5048 0.593116C12.0039 -0.00794289 11.1106 -0.0891522 10.5096 0.411731C9.90852 0.912612 9.82731 1.80591 10.3282 2.40697L15.4752 8.58341L1.49984 8.58341C0.717435 8.58341 0.0831728 9.21768 0.0831727 10.0001C0.0831726 10.7825 0.717435 11.4167 1.49984 11.4167L15.4752 11.4167L10.3282 17.5931Z" fill="#165BCC"/>
  </svg>
);

ArrowSvg.propTypes = {
  transform: string.isRequired,
};


const IconArrow = {
  Left: () => <ArrowSvg transform="rotate(180deg)" />,
  Right: () => <ArrowSvg transform="rotate(0deg)" />,
  Up: () => <ArrowSvg transform="rotate(-90deg)" />,
  Down: () => <ArrowSvg transform="rotate(90deg)" />,
};

export default IconArrow
