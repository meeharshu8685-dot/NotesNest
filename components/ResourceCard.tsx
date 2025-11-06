import React from 'react';
import { motion } from 'framer-motion';
import { type ResourceItem } from '../types';
import { ExternalLinkIcon } from './icons';

interface ResourceCardProps {
  resource: ResourceItem;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="block p-6 bg-white rounded-lg border border-gray-200 h-full group transition-all hover:border-black"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-medium text-black">
          {resource.name}
        </h3>
        <ExternalLinkIcon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0 ml-2" />
      </div>
      <p className="mt-2 text-gray-600 text-sm">{resource.description}</p>
    </motion.a>
  );
};

export default ResourceCard;