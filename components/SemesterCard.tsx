import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { type Semester } from '../types';

interface SemesterCardProps {
  semester: Semester;
}

const SemesterCard: React.FC<SemesterCardProps> = ({ semester }) => {
  return (
    <Link to={`/semester/${semester.id}`}>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={`group relative p-8 h-56 flex flex-col justify-center items-center ${semester.color} rounded-lg cursor-pointer overflow-hidden border border-transparent hover:border-black transition-colors`}
      >
        <h3 className="text-4xl font-medium text-black uppercase tracking-tighter relative z-10">
          {semester.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 relative z-10 uppercase tracking-widest">View Subjects</p>
        <div className="absolute bottom-4 right-4 text-black opacity-20 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </motion.div>
    </Link>
  );
};

export default SemesterCard;