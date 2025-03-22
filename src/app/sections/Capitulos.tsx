import React, { useState } from "react";
import GlitchText from "../components/GlitchText";

import chaptersData from "../data/chapters.json";

const Capitulos: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState("cap4");

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

  // Render challenges section
  const renderChallenges = (challenges) => {
    return (
      <div className="p-4 bg-black border border-purple-900  mb-6">
        <h3 className="text-lg font-bold mb-3 text-purple-400 border-b border-purple-900/50 pb-1">
          <span className="mr-2">⚔️</span>Desafios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className={`bg-black/30 border rounded p-3 ${challenge.difficulty === "Extrema"
                ? "border-red-900/80"
                : challenge.difficulty === "Muito Difícil"
                  ? "border-orange-900/80"
                  : challenge.difficulty === "Difícil"
                    ? "border-yellow-900/80"
                    : "border-green-900/80"
                }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-purple-400 font-bold">{challenge.type}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full ${challenge.difficulty === "Extrema"
                  ? "bg-red-900/50 text-red-400"
                  : challenge.difficulty === "Muito Difícil"
                    ? "bg-orange-900/50 text-orange-400"
                    : challenge.difficulty === "Difícil"
                      ? "bg-yellow-900/50 text-yellow-400"
                      : "bg-green-900/50 text-green-400"
                  }`}>
                  {challenge.difficulty}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">📖</span>
        <GlitchText>Capítulos</GlitchText>
      </h1>

      {/* Chapter Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {chaptersData.chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => handleChapterChange(chapter.id)}
            className={`p-2 rounded transition-all duration-200 ${activeChapter === chapter.id
              ? chapter.status === "complete"
                ? "bg-green-900/70 text-green-400 border border-green-700"
                : "bg-blue-900/70 text-blue-400 border border-blue-700"
              : "bg-black text-gray-400 border border-gray-800 hover:border-green-800 hover:text-green-400 hover:bg-green-900/20"
              }`}
          >
            <span className="block text-xs md:text-sm">Capítulo {chapter.number}</span>
            <span className="block font-bold truncate">{chapter.title}</span>
          </button>
        ))}
      </div>

      {/* Current Chapter Details */}
      {currentChapter && (
        <div className={`p-6  shadow-lg bg-black border ${currentChapter.status === "complete" ? "border-green-900" : "border-blue-900"
          } relative overflow-hidden mb-8`}>
          <div className={`absolute top-0 left-0 w-full h-2 ${currentChapter.status === "complete" ? "bg-green-500" : "bg-blue-500"
            }`}></div>

          <h2 className={`text-2xl font-bold mb-4 ${currentChapter.status === "complete" ? "text-green-400" : "text-blue-400"
            } flex items-center`}>
            Capítulo {currentChapter.number} - {currentChapter.title}
            <span className={`ml-auto text-xs px-2 py-1 rounded-full ${currentChapter.status === "complete"
              ? "bg-green-900/50 text-green-400 border border-green-700"
              : "bg-blue-900/50 text-blue-400 border border-blue-700"
              }`}>
              {currentChapter.status === "complete" ? "Completo" : "Em progresso"}
            </span>
          </h2>

          <div className="mb-6 text-gray-300 bg-black/50 p-4">
            <p className="italic text-lg">
              {currentChapter.summary}
            </p>
          </div>

          <h3 className="text-lg font-bold mb-3 text-purple-400 border-b border-purple-900/50 pb-1">
            Eventos Principais
          </h3>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentChapter.keyEvents.map((event, idx) => (
              <div key={idx} className="bg-black/30 border border-purple-900/30  p-3">
                <p className="text-gray-300 flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">•</span>
                  {event}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges Section */}
      {currentChapter && (
        renderChallenges(currentChapter.challenges)
      )}

      {/* Locations and NPCs */}
      {currentChapter && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Locations */}
          <div className="p-4 bg-black border border-cyan-900 ">
            <h3 className="text-lg font-bold mb-3 text-cyan-400 border-b border-cyan-900/50 pb-1">
              <span className="mr-2">📍</span>Locais
            </h3>
            <div className="space-y-4">
              {currentChapter.locations.map((location, idx) => (
                <div key={idx} className="bg-black/30 border border-cyan-900/30  p-3">
                  <h4 className="text-cyan-400 font-bold mb-1">{location.name}</h4>
                  <p className="text-gray-400 text-sm">{location.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NPCs */}
          <div className="p-4 bg-black border border-pink-900 ">
            <h3 className="text-lg font-bold mb-3 text-pink-400 border-b border-pink-900/50 pb-1">
              <span className="mr-2">👤</span>NPCs
            </h3>
            <div className="space-y-4">
              {currentChapter.npcs.map((npc, idx) => (
                <div key={idx} className="bg-black/30 border border-pink-900/30  p-3">
                  <div className="flex justify-between mb-1">
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
                  <p className="text-gray-500 text-xs mb-1">{npc.faction}</p>
                  <p className="text-gray-400 text-sm italic border-l-2 border-pink-700 pl-2">{npc.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Loot */}
      {currentChapter && currentChapter.loot.length > 0 && (
        <div className="p-4 bg-black border border-yellow-900  mb-6">
          <h3 className="text-lg font-bold mb-3 text-yellow-400 border-b border-yellow-900/50 pb-1">
            <span className="mr-2">💰</span>Loot Encontrado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentChapter.loot.map((item, idx) => (
              <div key={idx} className="bg-black/30 border border-yellow-900/50  p-3">
                <div className="flex justify-between mb-1">
                  <h4 className="text-yellow-400 font-bold">{item.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-900/50 text-yellow-400">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mb-1">Fonte: {item.source}</p>
                {item.description && (
                  <p className="text-gray-400 text-sm italic border-l-2 border-yellow-700 pl-2">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="p-6  shadow-lg bg-black border border-red-900 relative overflow-hidden mb-6">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Linha do Tempo da Campanha
          </h2>
          {renderTimeline()}
        </div>
      </div>
    </div>
  );
};

export default Capitulos;