// src/components/LoadingSpinner.tsx
import spinner from '../../public/tealSpinner.svg';
import Image from 'next/image';

const LoadingSpinner = () => (
  <div className="flex justify-center items-start mt-10">
    <Image className="w-24 h-24 animate-spin" src={spinner} alt="Loading spinner"/>
  </div>
);

export default LoadingSpinner;