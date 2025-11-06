import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-16 py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-sm text-black">Made by Harshu with ❤️</p>
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} NotesNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
