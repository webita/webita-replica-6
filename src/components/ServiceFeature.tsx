import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const ServiceFeature = ({ icon: Icon, title, description, color }: ServiceFeatureProps) => {
  return (
    <div className="mb-8">
      <div className={`inline-block p-3 rounded-full ${color} mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceFeature;
