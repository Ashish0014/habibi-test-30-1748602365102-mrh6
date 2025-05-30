import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`bg-white shadow-md rounded p-4 ${className}`}>{children}</div>;
};

export default Card;