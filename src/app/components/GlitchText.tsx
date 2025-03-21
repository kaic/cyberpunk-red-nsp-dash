import React from "react";

const GlitchText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <span className={`relative inline-block ${className || ""} text-green-400`}>
      {children}
      <span className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-0 hover:opacity-100 transition-opacity">
        <span className="absolute left-0 top-0" aria-hidden="true">
          {children}
        </span>
        <span className="absolute left-0 top-0" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
};

export default GlitchText;
