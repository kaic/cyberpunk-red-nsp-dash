"use client";

import React from "react";
import Introducao from "./sections/Introducao";
import Capitulos from "./sections/Capitulos";
import Gangues from "./sections/Gangues";
import DefaultSection from "./sections/DefaultSection";
import Lore from "./sections/Lore";
import Rules from "./sections/Rules";
import Corps from "./sections/Corps";

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("introducao");
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavigation = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Sections data
  const sections = [
    { id: "introducao", name: "Introdução", icon: "🏛️" },
    { id: "capitulos", name: "Capítulos", icon: "📚" },
    { id: "lore", name: "Lore", icon: "📜" },
    { id: "rules", name: "Rules", icon: "🎲" },
    { id: "players", name: "Players", icon: "🎮" },
    { id: "locais", name: "Localizações", icon: "📍" },
    { id: "npcs", name: "NPCs", icon: "👤" },
    { id: "gangues", name: "Gangues", icon: "💀" },
    { id: "corps", name: "Corps", icon: "🏢" },
    { id: "loot", name: "Equipamentos", icon: "🖥️" },
    { id: "screamsheets", name: "Screamsheets", icon: "📰" },
  ];

  // Example section content (add your own content here)
  const renderSectionContent = () => {
    switch (activeSection) {
      case "introducao":
        return <Introducao />;
      case "capitulos":
        return <Capitulos />;
      case "gangues":
        return <Gangues />;
      case "lore":
        return <Lore />;
      case "corps":
        return <Corps />;
      case "rules":
        return <Rules />;
      // Add additional case statements for other sections
      default:
        const section = sections.find((s) => s.id === activeSection);
        return (
          <DefaultSection
            icon={section?.icon || ""}
            name={section?.name || ""}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-gray-100 bg-black relative">
      {/* Header with neon effect */}
      <header className="sticky top-0 z-50">
        <div className="w-full bg-black/90 backdrop-blur-md border-b border-cyan-900 relative overflow-hidden">
          {/* Animated background lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/0 to-cyan-900/20"></div>

          {/* Enhanced horizontal neon line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]"></div>

          <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
            <div
              className="cursor-pointer flex items-center group"
              onClick={() => handleNavigation("introducao")}
            >
              <span
                className="text-2xl font-orbitron font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:from-pink-400 group-hover:to-cyan-500"
                data-text="NOVA SÃO PAULO"
              >
                CYBERPUNK RED
              </span>
            </div>

            <div className="flex items-center">
              {/* Mobile menu button with enhanced neon effect */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded relative overflow-hidden transition-all bg-black/60 hover:bg-cyan-900/20 focus:outline-none border border-cyan-800 group"
                aria-label="Menu"
              >
                {/* Button glow effect */}
                <span className="absolute inset-0 bg-cyan-800/0 group-hover:bg-cyan-800/20 transition-colors duration-300"></span>

                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_3px_rgba(34,211,238,0.7)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_3px_rgba(34,211,238,0.7)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}

                {/* Button highlight effect */}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </div>
          </div>

          {/* Optional scanline effect for more cyberpunk feel */}
          <div className="absolute inset-0 pointer-events-none scanline opacity-10"></div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute w-full bg-black/90 border-b border-cyan-900 shadow-lg z-50">
            <div className="container mx-auto px-4 py-2">
              <nav className="grid grid-cols-2 gap-2 py-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigation(section.id)}
                    className={`flex items-center p-3 rounded-lg transition ${
                      activeSection === section.id
                        ? "bg-purple-900/30 text-cyan-400 border border-purple-800 shadow-[0_0_8px_rgba(124,58,237,0.3)]"
                        : "hover:bg-purple-900/10 text-gray-300 border border-transparent hover:border-purple-900/50"
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    <span className="font-orbitron tracking-wide text-sm">
                      {section.name}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar - Desktop Only */}
        <aside className="hidden md:block w-64 bg-black border-r border-cyan-900 p-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-auto">
          <nav className="space-y-1">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`${
                  activeSection === section.id ? "bg-purple-900/20" : ""
                } rounded-lg overflow-hidden group transition-colors duration-300 hover:bg-purple-900/10`}
              >
                <button
                  onClick={() => handleNavigation(section.id)}
                  className={`flex items-center w-full px-4 py-3 text-left transition ${
                    activeSection === section.id
                      ? "text-cyan-400 font-bold"
                      : "text-gray-400 hover:text-cyan-400"
                  }`}
                >
                  <span
                    className={`mr-3 ${activeSection === section.id ? "text-xl" : ""}`}
                  >
                    {section.icon}
                  </span>
                  <span
                    className={
                      activeSection === section.id
                        ? "font-orbitron tracking-wide"
                        : ""
                    }
                  >
                    {section.name}
                  </span>

                  {/* Add subtle glow effect for active item */}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-cyan-400/50"></span>
                  )}
                </button>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-purple-900/50">
            <div className="p-4 rounded-lg bg-black shadow-inner border border-purple-900 relative overflow-hidden group">
              {/* Add subtle glowing border effect on hover */}
              <div className="absolute inset-0 bg-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h3 className="font-orbitron font-bold text-sm uppercase tracking-wider mb-2 text-pink-500 opacity-80">
                Mensagem do Mestre
              </h3>
              <p className="text-sm italic text-gray-400">
                "A verdade está obscurecida pelos neons. Confie em poucos,
                questione tudo, sobreviva."
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 md:px-8 relative">
          {renderSectionContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="py-4 bg-black border-t border-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-cyan-600 font-mono">
            CYBERPUNK RED - NOVA SÃO PAULO © 2133
          </p>
        </div>
      </footer>
    </div>
  );
}
