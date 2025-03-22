import React, { ReactNode } from "react";

interface CyberpunkTextProps {
  children: ReactNode;
}

const CyberpunkText: React.FC<CyberpunkTextProps> = ({ children }) => {
  return (
    <div className={`relative font-mono text-green-500`}>

      <div className="bg-black border-2 border-green-500 p-4">
        <p className="font-mono text-green-500 animate-pulse">
          {">"} {children}<br />
        </p>
      </div>
    </div>
  );
};

export default CyberpunkText;