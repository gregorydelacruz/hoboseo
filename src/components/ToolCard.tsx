import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
}

export function ToolCard({ title, description, icon, comingSoon = false }: ToolCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg ${comingSoon ? 'opacity-60' : 'hover:-translate-y-1'}`}>
      <div className="flex items-start justify-between">
        <div className="text-indigo-600 p-2 bg-indigo-50 rounded-lg">
          {icon}
        </div>
        {!comingSoon && <ExternalLink className="w-5 h-5 text-gray-400" />}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {comingSoon && (
        <span className="mt-3 inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full">
          Coming Soon
        </span>
      )}
    </div>
  );
}