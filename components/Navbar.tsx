import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEMESTERS } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isSemesterActive = location.pathname.startsWith('/semester/');

  const navLinkClasses = (isActive: boolean) =>
    `text-sm uppercase tracking-wider transition-all px-3 py-2 rounded-md ${
      isActive ? 'bg-gray-100' : 'hover:bg-gray-100'
    }`;


  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20"
      >
        <div className="flex-1 flex justify-start">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="text-3xl font-medium tracking-tighter">NotesNest</span>
          </NavLink>
        </div>

        <div className="flex-1 flex justify-center items-center gap-8">
          <NavLink to="/" className={({ isActive }) => navLinkClasses(isActive)}>
            Home
          </NavLink>
          <div className="group relative">
            <span className={navLinkClasses(isSemesterActive) + ' cursor-pointer'}>
              Semesters
            </span>
            <div className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 min-w-[12rem] bg-white rounded-md shadow-lg border border-gray-200 py-2 mt-2 z-10">
              {SEMESTERS.map((sem) => (
                <NavLink key={sem.id} to={`/semester/${sem.id}`} className="block px-4 py-2 text-center hover:bg-gray-100">
                  {sem.title}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/resources" className={({ isActive }) => navLinkClasses(isActive)}>
            Resources
          </NavLink>
        </div>
        <div className="flex-1"></div>
      </motion.nav>
    </header>
  );
};

export default Navbar;