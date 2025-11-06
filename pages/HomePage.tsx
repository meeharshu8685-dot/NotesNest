
import React from 'react';
import { motion } from 'framer-motion';
import { SEMESTERS } from '../constants';
import SemesterCard from '../components/SemesterCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-6xl md:text-8xl font-medium text-black uppercase tracking-tighter"
      >
        Welcome to NotesNest
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Your personal academic resource hub. <span className="bg-yellow-300/80 px-2 -skew-x-3 inline-block">Reimagined with focus and clarity.</span>
      </motion.p>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
      >
        {SEMESTERS.map((semester) => (
          <motion.div key={semester.id} variants={itemVariants}>
            <SemesterCard semester={semester} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
