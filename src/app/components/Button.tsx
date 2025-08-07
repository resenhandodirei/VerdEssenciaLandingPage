import React from 'react';
import Link from 'next/link';
// Simple utility to join class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ href, children, className, ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium transition-all duration-300 bg-gradient-to-r from-green-500 to-purple-600 hover:from-purple-600 hover:to-green-500 shadow-lg';

  if (href) {
    return (
      <Link href={href}>
        <a className={cn(baseClasses, className)}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, className)} {...props}>
      {children}
    </button>
  );
};
