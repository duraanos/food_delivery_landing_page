import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className="container mx-auto w-full xl:px-0 xl:max-w-xl">
      {children}
    </div>
  );
}
