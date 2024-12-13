import React from 'react';

interface CategorySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function CategorySection({ title, description, children }: CategorySectionProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  );
}