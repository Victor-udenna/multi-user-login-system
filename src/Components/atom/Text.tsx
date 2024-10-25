import React, { FC, ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text: FC<TextProps> = ({ children, className = '' }) => {
  return <p className={className}>{children}</p>;
};

export default Text;
