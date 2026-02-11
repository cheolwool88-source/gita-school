
import React from 'react';
import { Guitarist } from '../types';

interface GuitaristCardProps {
  guitarist: Guitarist;
}

export const GuitaristCard: React.FC<GuitaristCardProps> = ({ guitarist }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img 
          src={guitarist.imageUrl} 
          alt={guitarist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg uppercase">
            {guitarist.style}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{guitarist.name}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {guitarist.description}
        </p>
      </div>
    </div>
  );
};
