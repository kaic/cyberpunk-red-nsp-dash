import React, { useState } from "react";
import GlitchText from "../components/GlitchText";

import npcsData from "../data/npcs.json";

const NPCs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("amigos");
  const [activeNPC, setActiveNPC] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Encontra a categoria ativa
  const categoryAtual = npcsData.categories.find(c => c.id === activeCategory);
  
  // Filtra NPCs pela categoria ativa e termo de busca
  const npcsFiltered = npcsData.npcs.filter(npc => 
    (activeCategory === npc.categoria || activeCategory === "todos") && 
    (searchTerm === "" || npc.nome.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // Obter NPC selecionado
  const npcAtual = activeNPC ? npcsData.npcs.find(npc => npc.id === activeNPC) : null;

  // Navegação entre categorias
  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveNPC(null);
  };

  // Seleciona um NPC
  const handleSelectNPC = (id: string) => {
    setActiveNPC(id);
  };

  // Formata status do NPC com cor
  const formatStatus = (status: string) => {
    let color = "";
    switch (status.toLowerCase()) {
      case "aliado":
        color = "green";
        break;
      case "hostil":
        color = "red";
        break;
      case "morto":
        color = "gray";
        break;
      default:
        color = "yellow";
    }
    
    return (
      <span className={`bg-${color}-900/50 text-${color}-400 border border-${color}-700 px-2 py-1 rounded-full text-xs`}>
        {status}
      </span>
    );
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-purple-400 flex items-center border-b border-purple-900 pb-2">
        <span className="mr-2">👤</span>
        <GlitchText>NPCs</GlitchText>
      </h1>

      {/* Barra de busca */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar NPCs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-black border border-purple-900 rounded-lg text-gray-300 focus:border-purple-500 focus:outline-none"
          />
          <span className="absolute right-3 top-3 text-gray-500">🔍</span>
        </div>
      </div>

      {/* Categorias */}
      <div className="flex flex-wrap gap-2 mb-6">
        {npcsData.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`p-3 rounded-lg transition-all duration-200 ${
              activeCategory === category.id
                ? `bg-${category.corPrimaria}-900/70 text-${category.corPrimaria}-400 border border-${category.corPrimaria}-700`
                : "bg-black text-gray-400 border border-gray-800 hover:bg-purple-900/20 hover:text-purple-400 hover:border-purple-800"
            } flex items-center`}
          >
            <span className="mr-2 text-2xl">{category.icone}</span>
            <span className="font-bold">{category.nome}</span>
          </button>
        ))}
        <button
          onClick={() => handleCategoryChange("todos")}
          className={`p-3 rounded-lg transition-all duration-200 ${
            activeCategory === "todos"
              ? "bg-gray-900/70 text-gray-400 border border-gray-700"
              : "bg-black text-gray-400 border border-gray-800 hover:bg-gray-900/20 hover:text-gray-400 hover:border-gray-800"
          } flex items-center`}
        >
          <span className="mr-2 text-2xl">📋</span>
          <span className="font-bold">Todos</span>
        </button>
      </div>

      {/* Grid de NPCs ou Detalhes do NPC selecionado */}
      {!activeNPC ? (
        /* Grid de NPCs */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {npcsFiltered.map((npc) => (
            <div
              key={npc.id}
              onClick={() => handleSelectNPC(npc.id)}
              className="p-4 bg-black border border-purple-900 rounded-lg cursor-pointer hover:bg-purple-900/10 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-purple-400">{npc.nome}</h2>
                {formatStatus(npc.status)}
              </div>
              <p className="text-gray-400 mb-3 text-sm">{npc.profissao}</p>
              <p className="text-gray-300 mb-4">{npc.descricao}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{npc.idade}</span>
                <button
                  className="bg-purple-900/50 hover:bg-purple-900 text-purple-400 py-1 px-3 rounded text-sm"
                >
                  Ver Detalhes →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Detalhes do NPC */
        <div className="space-y-6">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setActiveNPC(null)}
              className="bg-purple-900/50 hover:bg-purple-900 text-purple-400 py-2 px-4 rounded flex items-center"
            >
              <span className="mr-1">←</span> Voltar
            </button>
            
            <div>
              {formatStatus(npcAtual?.status || "")}
            </div>
          </div>
          
          {/* Cabeçalho do NPC */}
          <div className="p-6 rounded-lg shadow-lg bg-black border border-purple-900 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <h2 className="text-2xl font-bold text-purple-400">{npcAtual?.nome}</h2>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-4">
                <span>{npcAtual?.idade}</span>
                <span>•</span>
                <span>{npcAtual?.profissao}</span>
              </div>
              
              <p className="mb-6 text-gray-300 bg-black/50 p-4 rounded-lg border-l-4 border-purple-700">
                {npcAtual?.descricaoLonga}
              </p>
            </div>
          </div>
          
          {/* Características e Detalhes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Características */}
            <div className="p-4 bg-black border border-purple-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-purple-400 border-b border-purple-900/50 pb-1">
                <span className="mr-2">👁️</span>Características
              </h3>
              {npcAtual?.caracteristicas && (
                <ul className="space-y-2">
                  {npcAtual.caracteristicas.map((carac, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-300">{carac}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Conexões */}
            {npcAtual?.conexoes && (
              <div className="p-4 bg-black border border-cyan-900 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-cyan-400 border-b border-cyan-900/50 pb-1">
                  <span className="mr-2">🔗</span>Conexões
                </h3>
                <div className="space-y-3">
                  {npcAtual.conexoes.map((conexao, idx) => (
                    <div key={idx} className="bg-black/30 p-3 rounded-lg border-l-2 border-cyan-700">
                      <div className="flex justify-between">
                        <h4 className="text-cyan-400 font-bold">{conexao.nome}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-900/50 text-cyan-400 border border-cyan-700">
                          {conexao.relacao}
                        </span>
                      </div>
                      {conexao.detalhes && (
                        <p className="text-gray-400 text-sm mt-1">{conexao.detalhes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Seções opcionais baseadas na categoria/tipo de NPC */}
          {/* Projetos (para membros do Cartel) */}
          {npcAtual?.projetos && (
            <div className="p-4 bg-black border border-blue-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-blue-400 border-b border-blue-900/50 pb-1">
                <span className="mr-2">📊</span>Projetos
              </h3>
              <ul className="space-y-2">
                {Array.isArray(npcAtual.projetos) ? (
                  npcAtual.projetos.map((projeto, idx) => (
                    <li key={idx} className="bg-black/30 p-3 rounded-lg border-l-2 border-blue-700">
                      <span className="text-gray-300">{projeto}</span>
                    </li>
                  ))
                ) : (
                  <li className="bg-black/30 p-3 rounded-lg border-l-2 border-blue-700">
                    <span className="text-gray-300">{npcAtual.projetos}</span>
                  </li>
                )}
              </ul>
            </div>
          )}
          
          {/* Operações (para gangues) */}
          {npcAtual?.operacoes && (
            <div className="p-4 bg-black border border-red-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-red-400 border-b border-red-900/50 pb-1">
                <span className="mr-2">🔍</span>Operações
              </h3>
              <ul className="space-y-2">
                {npcAtual.operacoes.map((op, idx) => (
                  <li key={idx} className="bg-black/30 p-3 rounded-lg border-l-2 border-red-700">
                    <span className="text-gray-300">{op}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Habilidades de Netrunner (para V) */}
          {npcAtual?.habilidadesNetrunner && (
            <div className="p-4 bg-black border border-cyan-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-cyan-400 border-b border-cyan-900/50 pb-1">
                <span className="mr-2">💻</span>Perfil de Netrunner
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-3 rounded-lg border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-2">Interface</h4>
                  <span className="text-3xl font-mono text-gray-300">{npcAtual.habilidadesNetrunner.interface}</span>
                </div>
                <div className="bg-black/30 p-3 rounded-lg border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-2">Armamento</h4>
                  <ul className="space-y-1">
                    {npcAtual.habilidadesNetrunner.armas.map((arma, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span>{arma}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-black/30 p-3 rounded-lg border-l-2 border-cyan-700">
                <h4 className="text-cyan-400 font-bold mb-2">Cyberware</h4>
                <div className="flex flex-wrap gap-2">
                  {npcAtual.habilidadesNetrunner.cyberware.map((cyber, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-cyan-900/50 text-cyan-400 border border-cyan-700">
                      {cyber}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Notas */}
          {npcAtual?.notas && (
            <div className="p-4 bg-black border border-yellow-900 rounded-lg">
              <h3 className="text-lg font-bold mb-3 text-yellow-400 border-b border-yellow-900/50 pb-1">
                <span className="mr-2">📝</span>Notas do Mestre
              </h3>
              <ul className="space-y-2">
                {npcAtual.notas.map((nota, idx) => (
                  <li key={idx} className="bg-black/30 p-3 rounded-lg border-l-2 border-yellow-700">
                    <span className="text-gray-300">{nota}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NPCs;