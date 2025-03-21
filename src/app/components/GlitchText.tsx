import React from "react";
import { neonTheme as theme } from "../theme";

const GlitchText: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent1" | "accent2";
}> = ({ children, className, variant = "secondary" }) => {
  // Map variants to color values
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          textClass: "text-purple-400",
          textShadow: "0 0 5px rgba(167, 139, 250, 0.7)",
          layer1Color: "text-pink-500", // pink-500
          layer2Color: "text-cyan-400", // cyan-400
        };
      case "secondary":
        return {
          textClass: "text-cyan-400",
          textShadow: "0 0 5px rgba(34, 211, 238, 0.7)",
          layer1Color: "text-purple-500", // purple-500
          layer2Color: "text-pink-500", // pink-500
        };
      case "accent1":
        return {
          textClass: "text-pink-400",
          textShadow: "0 0 5px rgba(236, 72, 153, 0.7)",
          layer1Color: "text-cyan-400", // cyan-400
          layer2Color: "text-purple-500", // purple-500
        };
      case "accent2":
        return {
          textClass: "text-blue-400",
          textShadow: "0 0 5px rgba(96, 165, 250, 0.7)",
          layer1Color: "text-pink-500", // pink-500
          layer2Color: "text-cyan-400", // cyan-400
        };
      default:
        return {
          textClass: "text-cyan-400",
          textShadow: "0 0 5px rgba(34, 211, 238, 0.7)",
          layer1Color: "text-purple-500", // purple-500
          layer2Color: "text-pink-500", // pink-500
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <span
      className={`relative inline-block font-orbitron ${variantStyles.textClass} ${className || ""}`}
      style={{ textShadow: variantStyles.textShadow }}
    >
      {/* Main text */}
      <span className="relative z-10">{children}</span>

      {/* Glitch layer 1 */}
      <span
        className={`absolute top-0 left-0 w-full h-full overflow-hidden ${variantStyles.layer1Color} opacity-40 animate-glitch-text1 delay-200`}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Glitch layer 2 */}
      <span
        className={`absolute top-0 left-0 w-full h-full overflow-hidden ${variantStyles.layer2Color} opacity-40 animate-glitch-text2 delay-700`}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};

export default GlitchText;
