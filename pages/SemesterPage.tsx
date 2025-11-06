
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEMESTERS } from '../constants';
import SubjectCard from '../components/SubjectCard';

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

const SemesterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const semester = SEMESTERS.find(s => s.id === Number(id));

  if (!semester) {
    return <Navigate to="/" replace />;
  }

  const term1Subjects = semester.subjects.filter(s => s.term === 1);
  const term2Subjects = semester.subjects.filter(s => s.term === 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-black hover:underline mb-8 inline-block uppercase text-xs tracking-wider">
        &larr; Back to Home
      </Link>
      <h1 className="text-6xl md:text-7xl font-medium text-black mb-10 text-center uppercase tracking-tighter">
        {semester.title}
      </h1>

      {term1Subjects.length > 0 && (
        <section className="mb-16">
          <h2 className={`text-3xl font-medium text-black mb-6 p-4 rounded-lg uppercase tracking-tighter ${semester.color}`}>
            Term 1
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {term1Subjects.map(subject => (
              <motion.div key={subject.id} variants={itemVariants}>
                <SubjectCard subject={subject} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {term2Subjects.length > 0 && (
        <section>
          <h2 className={`text-3xl font-medium text-black mb-6 p-4 rounded-lg uppercase tracking-tighter ${semester.color}`}>
            Term 2
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {term2Subjects.map(subject => (
              <motion.div key={subject.id} variants={itemVariants}>
                <SubjectCard subject={subject} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </motion.div>
  );
};

export default SemesterPage;
