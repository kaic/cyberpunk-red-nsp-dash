"use client"

import React from "react";
import Introducao from "./sections/Introducao";
import Capitulos from "./sections/Capitulos";
import Gangues from "./sections/Gangues";
import DefaultSection from "./sections/DefaultSection";
import Lore from "./sections/Lore";
import GlitchText from './components/GlitchText';


export default function Home() {
  const [activeSection, setActiveSection] = React.useState('introducao');
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavigation = (section: React.SetStateAction<string>) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Sections data
  const sections = [
    { id: 'introducao', name: 'Introdução', icon: '🏛️' },
    { id: 'capitulos', name: 'Capítulos', icon: '📚' },
    { id: 'lore', name: 'Lore', icon: '📜' },
    { id: 'rules', name: 'Rules', icon: '⚡' },
    { id: 'players', name: 'Players', icon: '🎮' },
    { id: 'locais', name: 'Locais', icon: '📍' },
    { id: 'npcs', name: 'NPCs', icon: '👤' },
    { id: 'gangues', name: 'Gangues', icon: '💀' },
    { id: 'corps', name: 'Corps', icon: '🏢' },
    { id: 'loot', name: 'Loot', icon: '🔫' },
    { id: 'screamsheets', name: 'Screamsheets', icon: '📰' }
  ];

  // Example section content (add your own content here)
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'introducao':
        return <Introducao />;
      case 'capitulos':
        return <Capitulos />;

      case 'gangues':
        return <Gangues />;

      case 'lore':
        return <Lore />;

      // Add additional case statements for other sections
      default:
        const section = sections.find(s => s.id === activeSection);
        return <DefaultSection icon={section?.icon || ''} name={section?.name || ''} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-100 bg-black relative">
      {/* Header with neon effect */}
      <header className="sticky top-0 z-50">
        <div className="w-full bg-black/80 backdrop-blur-md border-b border-green-900">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div
              className="text-2xl font-bold cursor-pointer flex items-center"
              onClick={() => handleNavigation('introducao')}
            >
              <span className="text-green-400">NOVA SÃO PAULO</span>
              <div className="relative mx-1">
                <span className="absolute -inset-1 rounded-full blur animate-pulse bg-green-600/50"></span>
                <span className="relative text-green-500 text-3xl">2133</span>
              </div>
            </div>

            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded transition-colors bg-black hover:bg-green-900/20 focus:outline-none border border-green-800"
                aria-label="Menu"
              >
                {menuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute w-full bg-black/90 border-b border-green-800 shadow-lg z-50">
            <div className="container mx-auto px-4 py-2">
              <nav className="grid grid-cols-2 gap-2 py-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavigation(section.id)}
                    className={`flex items-center p-3 rounded-lg transition ${activeSection === section.id
                      ? 'bg-green-900/30 text-green-400 border border-green-800'
                      : 'hover:bg-green-900/10 text-gray-300 border border-transparent'
                      }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    <span>{section.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      <div className="flex min-h-screen">
        {/* Sidebar - Desktop Only */}
        <aside className="hidden md:block w-64 bg-black border-r border-green-900 p-6 sticky top-[73px] h-[calc(100vh-73px)] overflow-auto">
          <nav className="space-y-1">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`${activeSection === section.id ? 'bg-green-900/20' : ''} rounded-lg overflow-hidden`}
              >
                <button
                  onClick={() => handleNavigation(section.id)}
                  className={`flex items-center w-full px-4 py-3 text-left transition ${activeSection === section.id
                    ? 'text-green-400 font-bold'
                    : 'text-gray-400 hover:text-green-400'
                    }`}
                >
                  <span className={`mr-3 ${activeSection === section.id ? 'text-xl' : ''}`}>{section.icon}</span>
                  <span>{section.name}</span>
                </button>
              </div>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-green-900/50">
            <div className="p-4 rounded-lg bg-black shadow-inner border border-green-900">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-green-500 opacity-70">Mensagem do Mestre</h3>
              <p className="text-sm italic text-gray-400">
                "A verdade está obscurecida pelos neons. Confie em poucos, questione tudo, sobreviva."
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
      <footer className="py-4 bg-black border-t border-green-900/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-green-600 font-mono">CYBERPUNK RED - NOVA SÃO PAULO © 2133</p>
        </div>
      </footer>
    </div>
  );
}