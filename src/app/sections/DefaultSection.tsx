import React from 'react';
import GlitchText from '../components/GlitchText';

const DefaultSection: React.FC<{ icon: string, name: string }> = ({ icon, name }) => {
  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">{icon}</span>
        <GlitchText>{name}</GlitchText>
      </h1>
      <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-cover bg-center"></div>
        <div className="animate-pulse flex space-x-4 relative z-10">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 bg-green-900/50 rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-green-900/50 rounded"></div>
              <div className="h-4 bg-green-900/50 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <p className="text-center mt-6 italic text-gray-500 font-mono">
            &lt;ACCESS_DENIED&gt; Dados criptografados. Contacte seu Mestre para acesso.
          </p>
          <div className="flex justify-center mt-2">
            <span className="inline-block h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultSection;
