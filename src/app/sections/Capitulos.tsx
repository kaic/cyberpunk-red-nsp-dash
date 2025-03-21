import React, { useState } from "react";
import GlitchText from "../components/GlitchText";

// Campaign data structure
const chaptersData = {
  chapters: [
    {
      id: "cap1",
      number: "01",
      title: "O Bar",
      status: "complete",
      description: "Tudo começa em um bar no Tatuapé, quando uma bomba explode e mata Marcos da ZL, um líder do Comando. Os jogadores são falsamente acusados do assassinato e precisam fugir.",
      keyEvents: [
        "A explosão mata duas pessoas próximo à janela do bar.",
        "Membros do Comando chegam acusando os jogadores do assassinato.",
        "BlingBling, um fixer dos BitMarauders, contata oferecendo ajuda.",
        "Para ganhar sua confiança, o grupo precisa recuperar um laboratório de CyberJenkins."
      ],
      locations: [
        { name: "Bar no Tatuapé", description: "Bar bem localizado em um prédio alto, frequentado pela elite local." },
        { name: "Agência de Carros", description: "Fachada para operações de lavagem de dinheiro dos BitMarauders." },
        { name: "Laboratório de Jenkins", description: "Base de produção de CyberJenkins, controlada pelos TO do Palmeiras." }
      ],
      npcs: [
        { name: "Marcos da ZL", faction: "Comando", status: "Morto", notes: "Líder do Comando assassinado pela bomba." },
        { name: "BlingBling", faction: "BitMarauders", status: "Aliado", notes: "Fixer que oferece ajuda em troca de favores." },
        { name: "MC Kleber", faction: "Ex-Comando", status: "Neutro", notes: "Pode ajudar a marcar reunião com o Tribunal do Crime." }
      ],
      loot: [
        { name: "300EB", type: "Dinheiro", source: "Corpo de Marcos da ZL" },
        { name: "Teen Dreen Vermelha", type: "Item", source: "Corpo de Marcos da ZL", description: "Item de valor desconhecido." }
      ]
    },
    {
      id: "cap2",
      number: "02",
      title: "Jacks e Jenkins",
      status: "complete",
      description: "MC Kleber é sequestrado pela MiliTech, revelando uma conspiração maior entre a corporação e o Comando.",
      keyEvents: [
        "BlingBling avisa que MC Kleber foi sequestrado.",
        "A balada 'A Floresta' em Pinheiros é a última localização conhecida.",
        "Investigação leva a duas bases da MiliTech: Brás e Capão.",
        "Descoberta da aliança entre MiliTech e Comando para esconder o Cartel."
      ],
      locations: [
        { name: "A Floresta", description: "Balada em Pinheiros, ponto de encontro para fixers e mercenários." },
        { name: "Base MiliTech - Brás", description: "Instalação em distrito industrial com informações cruciais." },
        { name: "Base MiliTech - Capão", description: "Instalação fortemente protegida onde MC Kleber está detido." }
      ],
      npcs: [
        { name: "Will", faction: "Civil", status: "Neutro", notes: "Bartender de A Floresta com informações úteis." },
        { name: "Z", faction: "Civil", status: "Possível Aliado", notes: "Segurança da balada insatisfeito com seus chefes." },
        { name: "Raposa", faction: "Independente", status: "Aliado", notes: "Sofre efeitos do CyberJenkins após contato com V." },
        { name: "V", faction: "Desconhecida", status: "Misteriosa", notes: "Envenenou Raposa com CyberJenkins." }
      ],
      loot: [
        { name: "Planta da Base do Capão", type: "Informação", source: "Base MiliTech - Brás" },
        { name: "Cyberarm", type: "Cyberware", source: "Base MiliTech - Brás", description: "Braço cibernético de alta qualidade." },
        { name: "Arasaka WSSA Sniper System", type: "Arma", source: "Base MiliTech - Brás", description: "Sistema de sniper avançado." }
      ]
    },
    {
      id: "cap3",
      number: "03",
      title: "Cidade dos Sonhos",
      status: "complete",
      description: "As visões causadas pelo CyberJenkins revelam projetos secretos e a verdadeira natureza da conspiração.",
      keyEvents: [
        "Raposa tem visões intensas após contato com CyberJenkins.",
        "Aparecem pistas sobre os projetos Omega e Alpha.",
        "Confronto com o 'Executor de Ferro', um cyborg da MiliTech.",
        "Revelações sobre conexões entre o governo, MiliTech e o Cartel."
      ],
      locations: [
        { name: "Hideout dos Players", description: "Esconderijo temporário enquanto são caçados." },
        { name: "Sede SynthCorp", description: "Mencionada nas visões, conectada ao Projeto Omega." }
      ],
      npcs: [
        { name: "Eco", faction: "Mídia", status: "Aliado", notes: "Amigo de infância de Ellie, jornalista investigativo." },
        { name: "Executor de Ferro", faction: "MiliTech", status: "Inimigo", notes: "Cyborg com armadura pesada e armas integradas." }
      ],
      loot: [
        { name: "Dados do Projeto Omega", type: "Informação", source: "Visões de Raposa" }
      ]
    },
    {
      id: "cap4",
      number: "04",
      title: "O Desaparecimento",
      status: "in-progress",
      description: "Após uma emboscada na Praça da Sé, Alyx desaparece misteriosamente, deixando apenas pistas enigmáticas.",
      keyEvents: [
        "O Cartel marca um encontro falso para eliminar o grupo.",
        "GB do JH é executado por Raposa antes de revelar segredos importantes.",
        "O laptop de Alyx ficou ativo por segundos antes de ser desconectado à força.",
        "Aparecimento de El Rato, um agiota que exige pagamento ou um 'carro inteiro'."
      ],
      locations: [
        { name: "Praça da Sé", description: "Local da emboscada, centro de protestos e confrontos." },
        { name: "Jardim do Silêncio", description: "Local misterioso mencionado em mensagem criptografada." }
      ],
      npcs: [
        { name: "Alyx", faction: "Edgerunner", status: "Desaparecido", notes: "Membro do grupo que desapareceu misteriosamente." },
        { name: "GB do JH", faction: "Comando", status: "Morto", notes: "Líder revolucionário do Comando, executado por Raposa." },
        { name: "El Rato", faction: "Independente", status: "Credor", notes: "Agiota que exige pagamento ou um serviço arriscado." },
        { name: "Nathan Steel", faction: "MiliTech", status: "Antagonista", notes: "Chefe de segurança da MiliTech, menciona o grupo." }
      ],
      loot: [
        { name: "Porsche Avariada", type: "Veículo", source: "Fuga da base do Brás", description: "Potencial pagamento para El Rato." }
      ]
    }
  ],
  timeline: [
    { day: "DIA 1", event: "Explosão no bar mata Marcos da ZL, jogadores são acusados.", chapter: 1 },
    { day: "DIA 1-2", event: "Encontro com BlingBling e missão na agência de carros.", chapter: 1 },
    { day: "DIA 3", event: "Missão para recuperar o laboratório de CyberJenkins.", chapter: 1 },
    { day: "DIA 5", event: "Descoberta do sequestro de MC Kleber pela MiliTech.", chapter: 2 },
    { day: "DIA 7", event: "Investigação na balada 'A Floresta' e bases da MiliTech.", chapter: 2 },
    { day: "DIA 10", event: "Raposa tem visões do CyberJenkins e revelações.", chapter: 3 },
    { day: "DIA 12", event: "Emboscada na Praça da Sé e desaparecimento de Alyx.", chapter: 4 },
    { day: "DIA 13", event: "Descoberta de vídeo misterioso e laptop desconectado...", chapter: 4 }
  ]
};

const Capitulos: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState("cap4");
  const [showTimeline, setShowTimeline] = useState(true);

  // Find the active chapter data
  const currentChapter = chaptersData.chapters.find(
    (chapter) => chapter.id === activeChapter
  );

  // Chapter navigation function
  const handleChapterChange = (chapterId) => {
    setActiveChapter(chapterId);
  };

  // Render timeline events
  const renderTimeline = () => {
    return (
      <div className="relative border-l-2 border-red-800 pl-6">
        {chaptersData.timeline.map((item, index) => (
          <div key={index} className="mb-6 relative">
            <div
              className={`absolute w-4 h-4 rounded-full -left-8 top-0 ${item.chapter === 1
                  ? "bg-red-600"
                  : item.chapter === 2
                    ? "bg-blue-600"
                    : item.chapter === 3
                      ? "bg-green-600"
                      : "bg-yellow-600"
                }`}
            ></div>
            <div className="flex flex-col md:flex-row md:items-center">
              <span className={`font-mono mb-2 md:mb-0 md:mr-4 ${item.chapter === 1
                  ? "text-red-400"
                  : item.chapter === 2
                    ? "text-blue-400"
                    : item.chapter === 3
                      ? "text-green-400"
                      : "text-yellow-400"
                }`}>
                {item.day}
              </span>
              <p className="text-gray-300">
                {item.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">📚</span>
        <GlitchText>Capítulos</GlitchText>
      </h1>

      {/* Chapter Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {chaptersData.chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => handleChapterChange(chapter.id)}
            className={`p-2 rounded ${activeChapter === chapter.id
                ? chapter.status === "complete"
                  ? "bg-green-900/70 text-green-400 border border-green-700"
                  : "bg-blue-900/70 text-blue-400 border border-blue-700"
                : "bg-black text-gray-400 border border-gray-800 hover:border-green-800 hover:text-green-400"
              }`}
          >
            <span className="block text-xs md:text-sm">Capítulo {chapter.number}</span>
            <span className="block font-bold truncate">{chapter.title}</span>
          </button>
        ))}
      </div>

      {/* Current Chapter Details */}
      {currentChapter && (
        <div className={`p-6 rounded-lg shadow-lg bg-black border ${currentChapter.status === "complete" ? "border-green-900" : "border-blue-900"
          } relative overflow-hidden mb-8`}>
          <div className={`absolute top-0 left-0 w-full h-2 ${currentChapter.status === "complete" ? "bg-green-500" : "bg-blue-500"
            }`}></div>
          <h2 className={`text-xl font-bold mb-2 ${currentChapter.status === "complete" ? "text-green-400" : "text-blue-400"
            }`}>
            <span className="mr-2">{currentChapter.number}</span>
            Capítulo {currentChapter.number} - {currentChapter.title}
          </h2>
          <p className="mb-4 text-gray-300">
            {currentChapter.description}
          </p>

          <h3 className="text-lg font-bold mb-2 text-purple-400 border-b border-purple-900 pb-1">
            Eventos Principais
          </h3>
          <div className="mb-4 border-l-2 border-purple-700 pl-3">
            {currentChapter.keyEvents.map((event, idx) => (
              <p key={idx} className="text-sm text-gray-400 mb-2">
                • {event}
              </p>
            ))}
          </div>

          <span className={`text-xs px-2 py-1 rounded-full ${currentChapter.status === "complete"
              ? "bg-green-900/50 text-green-400 border border-green-700"
              : "bg-blue-900/50 text-blue-400 border border-blue-700"
            }`}>
            {currentChapter.status === "complete" ? "Completo" : "Em progresso"}
          </span>
        </div>
      )}

      {/* Locations and NPCs */}
      {currentChapter && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Locations */}
          <div className="p-4 bg-black border border-cyan-900 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-cyan-400 border-b border-cyan-900/50 pb-1">
              <span className="mr-2">📍</span>Locais
            </h3>
            {currentChapter.locations.map((location, idx) => (
              <div key={idx} className="mb-3 last:mb-0">
                <h4 className="text-cyan-400 font-bold">{location.name}</h4>
                <p className="text-gray-400 text-sm">{location.description}</p>
              </div>
            ))}
          </div>

          {/* NPCs */}
          <div className="p-4 bg-black border border-pink-900 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-pink-400 border-b border-pink-900/50 pb-1">
              <span className="mr-2">👤</span>NPCs
            </h3>
            {currentChapter.npcs.map((npc, idx) => (
              <div key={idx} className="mb-3 last:mb-0">
                <div className="flex justify-between">
                  <h4 className="text-pink-400 font-bold">{npc.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${npc.status === "Aliado"
                      ? "bg-green-900/50 text-green-400"
                      : npc.status === "Inimigo"
                        ? "bg-red-900/50 text-red-400"
                        : npc.status === "Morto"
                          ? "bg-gray-900/50 text-gray-400"
                          : "bg-yellow-900/50 text-yellow-400"
                    }`}>
                    {npc.status}
                  </span>
                </div>
                <p className="text-gray-500 text-xs">{npc.faction}</p>
                <p className="text-gray-400 text-sm">{npc.notes}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Loot */}
      {currentChapter && currentChapter.loot.length > 0 && (
        <div className="p-4 bg-black border border-yellow-900 rounded-lg mb-6">
          <h3 className="text-lg font-bold mb-3 text-yellow-400 border-b border-yellow-900/50 pb-1">
            <span className="mr-2">💰</span>Loot Encontrado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentChapter.loot.map((item, idx) => (
              <div key={idx} className="bg-black/30 border border-yellow-900/50 rounded p-2">
                <div className="flex justify-between">
                  <h4 className="text-yellow-400 font-bold">{item.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-900/50 text-yellow-400">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-500 text-xs">Fonte: {item.source}</p>
                {item.description && (
                  <p className="text-gray-400 text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline toggle */}
      <button
        onClick={() => setShowTimeline(!showTimeline)}
        className="mb-4 px-4 py-2 bg-red-900/50 text-red-400 rounded-lg border border-red-900 hover:bg-red-900/70 transition-colors"
      >
        {showTimeline ? "Esconder Linha do Tempo" : "Mostrar Linha do Tempo"}
      </button>

      {/* Timeline */}
      {showTimeline && (
        <div className="p-6 rounded-lg shadow-lg bg-black border border-red-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-red-400">
              Linha do Tempo da Campanha
            </h2>
            {renderTimeline()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Capitulos;