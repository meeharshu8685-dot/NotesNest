import React from 'react';
import { motion } from 'framer-motion';
import { RESOURCES } from '../constants';
import ResourceCard from '../components/ResourceCard';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

const ResourcesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl md:text-7xl font-medium text-black mb-10 text-center uppercase tracking-tighter">
        Learning Resources
      </h1>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {RESOURCES.map(category => (
          <motion.section key={category.category} variants={itemVariants}>
            <h2 className="text-4xl font-medium text-black mb-6 pb-2 border-b-2 border-black uppercase tracking-tighter">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {category.items.map(item => (
                <ResourceCard key={item.name} resource={item} />
              ))}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ResourcesPage;