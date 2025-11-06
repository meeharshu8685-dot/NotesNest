
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-200">
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-indigo-200/50 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
              transform: `translate(-50%, -50%)`,
            }}
          ></div>
        ))}
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -60%) scale(1.1); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
