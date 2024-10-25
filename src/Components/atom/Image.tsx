import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  unOptimized?: boolean;
  onClick?: () => void;
}

const ImageAtom: FC<ImageProps> = ({ src, alt, unOptimized, width, height, className = '', onClick }) => {
  return (
    <Image
      unoptimized={unOptimized}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onClick={onClick} 
    />
  );
};

export default ImageAtom;
