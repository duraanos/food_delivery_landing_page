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
    <div className="max-w-[1180px] mx-auto p-4">
      {children}
    </div>
  );
}
