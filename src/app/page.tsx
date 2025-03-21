"use client"

import React from "react";
import Introducao from "./sections/Introducao";
import Capitulos from "./sections/Capitulos";
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
        return (
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
              <span className="mr-2">💀</span>
              <GlitchText>Gangues</GlitchText>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-4 text-green-400">TOs - Torcidas Organizadas</h2>
                  <div className="h-48 flex items-center justify-center mb-4 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-blue-900/40"></div>
                    <span className="text-6xl relative z-10">🏆</span>
                  </div>
                  <p className="mb-4 text-gray-300">
                    As TOs dominam os distritos populares e empobrecidos da cidade. Suas atividades vão além do
                    fanatismo esportivo, tornando-se uma força criminosa significativa.
                  </p>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Território</h3>
                    <p className="text-sm text-gray-400">Distritos populares, estádios, zonas periféricas</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Atividades</h3>
                    <p className="text-sm text-gray-400">Tráfico de drogas, extorsões, apostas ilícitas nos estádios</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Líder</h3>
                    <p className="text-sm text-gray-400">"Ultras" - Figura carismática temida pelas autoridades</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-red-900/50 text-red-400 border border-red-700">Violência</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-400 border border-blue-700">União contra inimigos</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-700">Rituais de iniciação</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-4 text-green-400">Comando Cyberpunk</h2>
                  <div className="h-48 flex items-center justify-center mb-4 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 to-yellow-900/40"></div>
                    <span className="text-6xl relative z-10">🔥</span>
                  </div>
                  <p className="mb-4 text-gray-300">
                    Máfia que controla as áreas mais sombrias de Nova São Paulo. Seu alcance vai desde o tráfico
                    de drogas até esquemas de jogo ilegal e extorsões.
                  </p>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Território</h3>
                    <p className="text-sm text-gray-400">Áreas sombrias da cidade, favelas, zonas de conflito</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Hierarquia</h3>
                    <p className="text-sm text-gray-400">Estrutura rígida, chefes para diferentes operações, traição punida com morte</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Código</h3>
                    <p className="text-sm text-gray-400">Imposição de ordem nas ruas, lealdade acima de tudo</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-red-900/50 text-red-400 border border-red-700">Crueldade</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-900/50 text-yellow-400 border border-yellow-700">Controle</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900/50 text-purple-400 border border-purple-700">Infiltração</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-4 text-green-400">BitMarauders (Raul)</h2>
                  <div className="h-48 flex items-center justify-center mb-4 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-cyan-900/40"></div>
                    <span className="text-6xl relative z-10">💰</span>
                  </div>
                  <p className="mb-4 text-gray-300">
                    Operam nas altas esferas financeiras de Nova São Paulo. Seus tentáculos se estendem
                    por corporações e instituições bancárias.
                  </p>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Território</h3>
                    <p className="text-sm text-gray-400">Arranha-céus corporativos, distritos financeiros</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Identidade</h3>
                    <p className="text-sm text-gray-400">Elegância e sofisticação ocultando crueldade impiedosa</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Liderança</h3>
                    <p className="text-sm text-gray-400">Visionário implacável manipulando engrenagens financeiras</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-700">Riqueza</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/50 text-cyan-400 border border-cyan-700">Manipulação</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-400 border border-indigo-700">Hacking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-black border border-red-900 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-red-400">Conflitos Territoriais</h2>
                <p className="mb-4 text-gray-300">
                  Os territórios em Nova São Paulo são fluidos, com conflitos constantes entre gangues,
                  corporações e forças de segurança. A mudança de controle sobre certas áreas pode ocorrer rapidamente,
                  especialmente após confrontos significativos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-black border border-red-800 rounded-lg">
                    <h3 className="text-lg font-bold text-red-400 mb-2">Zonas Quentes</h3>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Centro: Disputado entre TOs e forças policiais</li>
                      <li>• Tatuapé: Território do Comando, alta vigilância</li>
                      <li>• Tiradentes: Laboratórios de CyberJenkins</li>
                      <li>• Pinheiros: Balada "A Floresta", ponto de encontro</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-black border border-red-800 rounded-lg">
                    <h3 className="text-lg font-bold text-red-400 mb-2">Alianças Conhecidas</h3>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Comando + MiliTech: Aliança secreta</li>
                      <li>• Guardian + SynthCorp: Controle de fronteiras</li>
                      <li>• TOs: Se unem contra inimigos comuns</li>
                      <li>• BitMarauders: Rivalidade com o Comando</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'lore':
        return (
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
              <span className="mr-2">📜</span>
              <GlitchText>Lore</GlitchText>
            </h1>
            <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-cover bg-center"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-green-400">História de Nova São Paulo</h2>
                <div className="border-l-2 border-green-700 pl-4 mb-6">
                  <p className="text-gray-300 mb-2">
                    A cidade-estado independente nasceu após a brutal repressão aos protestos de 2099,
                    culminando na Guerra Civil e na separação da federação brasileira. Desde então, a metrópole
                    tem vivido em um equilíbrio frágil entre caos e ordem.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Guerra Civil de 2099</h3>
                    <div className="border-l-2 border-green-700 pl-4 mb-4">
                      <p className="text-sm text-gray-400">
                        O conflito que separou a megalópole do restante do Brasil, deixando cicatrizes
                        profundas que até hoje moldam a cidade e seus habitantes.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Projeto Omega</h3>
                    <div className="border-l-2 border-green-700 pl-4 mb-4">
                      <p className="text-sm text-gray-400">
                        Operação secreta ainda em investigação. Aparentemente relacionada com o
                        CyberJenkins e diversos experimentos corporativos.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Projeto Alpha</h3>
                    <div className="border-l-2 border-green-700 pl-4 mb-4">
                      <p className="text-sm text-gray-400">
                        Operação misteriosa relacionada ao Omega. Detalhes ainda são escassos,
                        mas as consequências parecem de grande impacto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black border border-green-900 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br "></div>
                <div className="h-full overflow-hidden">
                  <div className="h-full w-full">
                    {Array(20).fill(null).map((_, i) => (
                      <div key={i} className="text-green-500 text-xs opacity-70 font-mono whitespace-nowrap">
                        {Array(100).fill(null).map((_, j) => (
                          <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative z-10 p-6">
                <p className="text-center font-mono text-lg mb-4 text-green-400">[ DADOS CONFIDENCIAIS ]</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-black border border-green-700 rounded-lg">
                    <h3 className="text-lg font-bold text-green-400 mb-2">CyberJenkins</h3>
                    <p className="text-sm text-gray-400">
                      Droga sintética com estranhos efeitos psicoativos. Aparentemente
                      relacionada aos projetos secretos Omega e Alpha. Pode causar visões
                      reveladoras, mas é altamente viciante.
                    </p>
                  </div>
                  <div className="p-4 bg-black border border-green-700 rounded-lg">
                    <h3 className="text-lg font-bold text-green-400 mb-2">O Cartel</h3>
                    <p className="text-sm text-gray-400">
                      Aliança secreta entre as principais corporações e organizações
                      criminosas. Aparente envolvimento na morte de Marcos da ZL e
                      possivelmente na morte de Well.
                    </p>
                  </div>
                  <div className="p-4 bg-black border border-green-700 rounded-lg">
                    <h3 className="text-lg font-bold text-green-400 mb-2">Well</h3>
                    <p className="text-sm text-gray-400">
                      Estudante de engenharia psíquica morto durante um protesto
                      em Nova Pinheiros. Tornou-se símbolo de resistência contra a
                      Guardian e seu controle sobre a cidade.
                    </p>
                  </div>
                </div>
                <p className="text-center font-mono text-sm mt-4 text-gray-500">
                  ACESSO RESTRITO - NÍVEL DE AUTORIZAÇÃO INSUFICIENTE
                </p>
              </div>
            </div>
          </div>
        );

      // Add additional case statements for other sections
      default:
        return (
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
              <span className="mr-2">{sections.find(s => s.id === activeSection)?.icon}</span>
              <GlitchText>{sections.find(s => s.id === activeSection)?.name}</GlitchText>
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