// 1. Create a simple theme utility in /src/app/utils/theme.ts

export type NeonTheme = {
  primary: string; // Main color for headings, important text
  primaryDark: string; // Darker shade for borders
  primaryLight: string; // Lighter shade for highlights
  secondary: string; // Secondary color
  secondaryDark: string; // Darker secondary for borders
  accent1: string; // First accent color
  accent1Dark: string; // Darker accent1
  accent2: string; // Second accent color
  accent2Dark: string; // Darker accent2
  accent3: string; // Third accent color
  accent3Dark: string; // Darker accent3
  textPrimary: string; // Text on dark backgrounds
};

// Neon theme inspired by cyberpunk aesthetics
export const neonTheme: NeonTheme = {
  primary: "purple-400",
  primaryDark: "purple-900",
  primaryLight: "purple-300",
  secondary: "cyan-400",
  secondaryDark: "cyan-900",
  accent1: "pink-400",
  accent1Dark: "pink-900",
  accent2: "blue-400",
  accent2Dark: "blue-900",
  accent3: "indigo-400",
  accent3Dark: "indigo-900",
  textPrimary: "gray-300",
};

// 2. Create a component to apply theme values or directly use in components
// Example theme provider function (not necessary for Tailwind, but helpful for organization)
export const getThemeClass = (type: keyof NeonTheme) => {
  return neonTheme[type];
};

// This makes it easy to get classes for a specific theme element
// Example: text-${getThemeClass('primary')} -> text-purple-400
