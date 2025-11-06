import React from 'react';
import { motion } from 'framer-motion';
import { type Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full flex flex-col p-6 bg-white rounded-lg border border-gray-200"
    >
      <div className="flex-grow mb-6">
        <h3 className="text-2xl font-medium text-black">{subject.name}</h3>
        <p className="mt-2 text-gray-600 text-sm">{subject.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a href={subject.links.weekNotes} target="_blank" rel="noopener noreferrer" className="text-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
          Week Notes
        </a>
        <a href={subject.links.fullNotes} target="_blank" rel="noopener noreferrer" className="text-center px-4 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors text-sm">
          Full Notes
        </a>
        <a href={subject.links.books} target="_blank" rel="noopener noreferrer" className="text-center px-4 py-3 bg-white text-black rounded-md border border-gray-300 hover:bg-gray-100 transition-colors text-sm">
          Books
        </a>
        <a href={subject.links.more} target="_blank" rel="noopener noreferrer" className="text-center px-4 py-3 bg-white text-black rounded-md border border-gray-300 hover:bg-gray-100 transition-colors text-sm">
          More
        </a>
      </div>
    </motion.div>
  );
};

export default SubjectCard;