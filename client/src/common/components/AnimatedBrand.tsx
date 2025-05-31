'use client';

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedBrand() {
  return (
    <TypeAnimation
      sequence={[
        'Deepfake Detector', 3000,
        'Kala Dhanda', 1000,
        'Asli Nakli', 500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
  style={{
    fontSize: '1.5rem', // 
    fontWeight: 'bold',
    color: '#e6051f', // Tailwind's blue-500 (lets try to make it dynamic later with different colors (currently issues with taiwain in sequences))
  }}    />
  );
}
