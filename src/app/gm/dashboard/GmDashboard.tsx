import React, { useState } from "react";

const GMDashboard = () => {
  // Estado para as diferentes ferramentas
  const [activeTab, setActiveTab] = useState("npcs");
  const [selectedNPC, setSelectedNPC] = useState(null);
  const [rollResult, setRollResult] = useState(null);
  const [dv, setDV] = useState(15);

  // NPCs comuns em Cyberpunk RED
  const npcs = [
    {
      id: 1,
      name: "Segurança Corporativo",
      stats: { REF: 6, DEX: 5, BODY: 6, INT: 4, WILL: 5, COOL: 4, MOVE: 5 },
      skills: { "Arma de Fogo": 6, Observação: 5, Atletismo: 4 },
      hp: 30,
      armor: 11,
      weapons: [
        { name: "Pistola Pesada", damage: "3d6", rof: 2 },
        { name: "Bastão de Choque", damage: "1d6+stun", rof: 1 },
      ],
    },
    {
      id: 2,
      name: "Membro de Gangue",
      stats: { REF: 5, DEX: 5, BODY: 5, INT: 3, WILL: 5, COOL: 5, MOVE: 5 },
      skills: { "Arma de Fogo": 4, Briga: 5, Intimidação: 6 },
      hp: 25,
      armor: 7,
      weapons: [
        { name: "SMG", damage: "2d6", rof: 3 },
        { name: "Faca", damage: "1d6", rof: 2 },
      ],
    },
    {
      id: 3,
      name: "Técnico de Rua",
      stats: { REF: 4, DEX: 6, BODY: 3, INT: 7, WILL: 5, COOL: 5, MOVE: 4 },
      skills: { Eletrônica: 6, Criptografia: 5, Negociação: 4 },
      hp: 20,
      armor: 4,
      weapons: [
        { name: "Pistola Leve", damage: "2d6", rof: 2 },
        { name: "Ferramenta (Improvisado)", damage: "1d6", rof: 1 },
      ],
    },
    {
      id: 4,
      name: "Fixador",
      stats: { REF: 5, DEX: 5, BODY: 4, INT: 6, WILL: 6, COOL: 7, MOVE: 4 },
      skills: { Persuasão: 7, "Conhecimento de Rua": 6, "Arma de Fogo": 4 },
      hp: 25,
      armor: 7,
      weapons: [{ name: "Pistola com Silenciador", damage: "2d6", rof: 2 }],
    },
    {
      id: 5,
      name: "Executivo Corporativo",
      stats: { REF: 4, DEX: 4, BODY: 4, INT: 7, WILL: 6, COOL: 6, MOVE: 4 },
      skills: { "Recursos Humanos": 6, Educação: 6, Percepção: 5 },
      hp: 25,
      armor: 5,
      weapons: [{ name: "Pistola Leve", damage: "2d6", rof: 2 }],
    },
  ];

  // Locais importantes em Nova São Paulo
  const locations = [
    {
      name: "A Floresta (Balada)",
      description:
        "Clube noturno em Pinheiros onde se reúnem fixers, mercenários e contatos importantes.",
      ambience:
        "Música eletrônica alta, neons pulsantes, fumaça sintética colorida, dançarinos com implantes luminosos.",
      npcs: [
        "DJ Volt-8 (Fama local)",
        'Marília "Dados" (Fixer)',
        "Seguranças implantados",
      ],
    },
    {
      name: 'Hospital "A Caldeira"',
      description:
        "Hospital clandestino para quem não pode pagar pelos serviços da BionTech.",
      ambience:
        "Iluminação precária, equipamentos médicos improvisados, cheiro de desinfetante barato e sangue.",
      npcs: [
        "Dr. Keller (Medtech renegado)",
        "Enfermeira Delta",
        "Pacientes desesperados",
      ],
    },
    {
      name: "Laboratório de Jenkins",
      description:
        "Local de produção do CyberJenkins, uma droga sintética com estranhos efeitos psicoativos.",
      ambience:
        "Equipamentos químicos, luzes UV, fumaça colorida, forte odor químico, cápsulas brilhantes.",
      npcs: [
        "Alquimista (Químico)",
        "Sentinelas do Comando",
        "Viciados em teste",
      ],
    },
    {
      name: "Praça da Sé",
      description:
        "Antigo centro cultural transformado em zona de conflito e ponto de manifestações.",
      ambience:
        "Monumentos vandalizados, drones de vigilância, grafites políticos, barricadas improvisadas.",
      npcs: [
        "Agentes da Guardian",
        "Líderes de protestos",
        "Jornalistas independentes",
      ],
    },
    {
      name: "Torre SynthCorp",
      description:
        "Sede da maior corporação de tecnologia cibernética de Nova São Paulo.",
      ambience:
        "Vidro espelhado, segurança avançada, recepcionistas com implantes estéticos, executivos bem vestidos.",
      npcs: [
        "Seguranças corporativos",
        "Executivos de nível médio",
        "IAs de atendimento",
      ],
    },
  ];

  // Tabela de encontros aleatórios
  const randomEncounters = [
    "Confronto entre gangues rivais (TOs vs Comando)",
    "Batida policial da Guardian procurando por membros da resistência",
    "Mercado negro improvisado vendendo cyberware de procedência duvidosa",
    "Protesto violento contra o controle das fronteiras pela Guardian",
    "Overdose de CyberJenkins causando alucinações coletivas",
    "Drone de vigilância da MiliTech escaneando identidades",
    "Fixers negociando informações sobre o Projeto Omega",
    "Celebração de rua em memória de Well, interrompida pela Guardian",
    "Acidente com veículo aéreo causando caos no trânsito",
    "Médico de rua realizando implantes cibernéticos em uma van modificada",
    "Artista de rua criando um mural digital interativo sobre a guerra civil",
    "Sequestro de executivo por grupo radical anti-corporativo",
    "Viciados em Braindance compartilhando experiências em becos escuros",
    "Hackers testando novo vírus em terminais públicos",
    "Corpo abandonado com sinais de cyberpsicose",
    "Combate entre forças da Guardian e membros do Comando Cyberpunk",
    "Negociante oferecendo chips de habilidade pirateados",
    "Rito de iniciação de novos membros das TOs",
    "Netrunner fugindo de agentes corporativos",
    "Show clandestino de Rockerboy com mensagens contra o sistema",
  ];

  // Função para rolar dados (simula 1d10 + modificadores)
  const rollDice = () => {
    const d10 = Math.floor(Math.random() * 10) + 1;
    let result = d10;
    const rolls = [d10];

    // Crítico (10): explode o dado
    if (d10 === 10) {
      let extraRoll = Math.floor(Math.random() * 10) + 1;
      rolls.push(extraRoll);
      result += extraRoll;

      // Continua explodindo enquanto tirar 10
      while (extraRoll === 10) {
        extraRoll = Math.floor(Math.random() * 10) + 1;
        rolls.push(extraRoll);
        result += extraRoll;
      }
    }

    // Falha crítica (1): rola outro dado e subtrai
    if (d10 === 1) {
      const penalty = Math.floor(Math.random() * 10) + 1;
      rolls.push(-penalty);
      result -= penalty;
    }

    return { total: result, rolls, isSuccess: result >= dv };
  };

  // Renderiza o NPC selecionado
  const renderNPCDetails = () => {
    if (!selectedNPC)
      return (
        <div className="text-gray-400 italic">
          Selecione um NPC para ver detalhes
        </div>
      );

    return (
      <div className="bg-black border border-green-900  p-4">
        <h3 className="text-xl font-bold text-green-400 mb-2">
          {selectedNPC.name}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-green-500 text-sm font-bold mb-1">STATS</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(selectedNPC.stats).map(([stat, value]) => (
                <div key={stat} className="flex justify-between">
                  <span className="text-gray-400">{stat}</span>
                  <span className="text-white font-mono">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-green-500 text-sm font-bold mb-1">SKILLS</h4>
            <div className="space-y-1">
              {Object.entries(selectedNPC.skills).map(([skill, value]) => (
                <div key={skill} className="flex justify-between">
                  <span className="text-gray-400">{skill}</span>
                  <span className="text-white font-mono">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div>
            <span className="text-green-500 text-sm font-bold">HP</span>
            <span className="text-white ml-2 font-mono">{selectedNPC.hp}</span>
          </div>
          <div>
            <span className="text-green-500 text-sm font-bold">ARMOR (SP)</span>
            <span className="text-white ml-2 font-mono">
              {selectedNPC.armor}
            </span>
          </div>
        </div>

        <h4 className="text-green-500 text-sm font-bold mb-1">WEAPONS</h4>
        <div className="space-y-2">
          {selectedNPC.weapons.map((weapon, index) => (
            <div
              key={index}
              className="flex justify-between bg-green-900/20 p-2 rounded"
            >
              <span className="text-white">{weapon.name}</span>
              <div>
                <span className="text-gray-400 mr-2">DMG: {weapon.damage}</span>
                <span className="text-gray-400">ROF: {weapon.rof}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderiza os detalhes do local selecionado
  const renderLocationDetails = (location) => {
    return (
      <div className="bg-black border border-green-900  p-4 mb-4">
        <h3 className="text-xl font-bold text-green-400 mb-2">
          {location.name}
        </h3>
        <p className="text-gray-300 mb-3">{location.description}</p>

        <div className="mb-3">
          <h4 className="text-green-500 text-sm font-bold mb-1">AMBIENTE</h4>
          <p className="text-gray-400 italic">{location.ambience}</p>
        </div>

        <div>
          <h4 className="text-green-500 text-sm font-bold mb-1">
            NPCS PRESENTES
          </h4>
          <ul className="list-disc list-inside text-gray-400">
            {location.npcs.map((npc, index) => (
              <li key={index}>{npc}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Gera um encontro aleatório
  const generateRandomEncounter = () => {
    const index = Math.floor(Math.random() * randomEncounters.length);
    return randomEncounters[index];
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold text-green-400 mb-6">
        Dashboard do Mestre - Nova São Paulo
      </h1>

      {/* Tabs para diferentes ferramentas */}
      <div className="flex mb-4 border-b border-green-900">
        <button
          onClick={() => setActiveTab("npcs")}
          className={`px-4 py-2 mr-2 ${activeTab === "npcs" ? "bg-green-900 text-green-400" : "bg-black text-gray-400"} rounded-t-lg`}
        >
          NPCs
        </button>
        <button
          onClick={() => setActiveTab("locations")}
          className={`px-4 py-2 mr-2 ${activeTab === "locations" ? "bg-green-900 text-green-400" : "bg-black text-gray-400"} rounded-t-lg`}
        >
          Locais
        </button>
        <button
          onClick={() => setActiveTab("dice")}
          className={`px-4 py-2 mr-2 ${activeTab === "dice" ? "bg-green-900 text-green-400" : "bg-black text-gray-400"} rounded-t-lg`}
        >
          Rolagem de Dados
        </button>
        <button
          onClick={() => setActiveTab("encounters")}
          className={`px-4 py-2 ${activeTab === "encounters" ? "bg-green-900 text-green-400" : "bg-black text-gray-400"} rounded-t-lg`}
        >
          Encontros
        </button>
      </div>

      {/* Conteúdo da tab ativa */}
      <div className="bg-black border border-green-900  p-4">
        {activeTab === "npcs" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <h2 className="text-xl font-bold text-green-400 mb-3">
                NPCs Rápidos
              </h2>
              <div className="space-y-2">
                {npcs.map((npc) => (
                  <button
                    key={npc.id}
                    onClick={() => setSelectedNPC(npc)}
                    className={`w-full text-left p-2 rounded ${selectedNPC && selectedNPC.id === npc.id ? "bg-green-900 text-white" : "bg-black text-gray-400 border border-green-900"} hover:bg-green-900/50`}
                  >
                    {npc.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <h2 className="text-xl font-bold text-green-400 mb-3">
                Detalhes do NPC
              </h2>
              {renderNPCDetails()}
            </div>
          </div>
        )}

        {activeTab === "locations" && (
          <div>
            <h2 className="text-xl font-bold text-green-400 mb-3">
              Locais Importantes
            </h2>
            {locations.map((location, index) => (
              <div key={index} className="mb-4">
                {renderLocationDetails(location)}
              </div>
            ))}
          </div>
        )}

        {activeTab === "dice" && (
          <div>
            <h2 className="text-xl font-bold text-green-400 mb-3">
              Rolagem de Dados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black border border-green-900  p-4">
                <h3 className="text-lg font-bold text-green-400 mb-3">
                  Rolagem d10 (Sistema Cyberpunk)
                </h3>

                <div className="mb-4">
                  <label className="text-gray-400 block mb-2">
                    Dificuldade (DV)
                    <input
                      type="number"
                      value={dv}
                      onChange={(e) => setDV(parseInt(e.target.value))}
                      className="ml-2 bg-black border border-green-900 text-white p-1 w-16"
                    />
                  </label>

                  <button
                    onClick={() => setRollResult(rollDice())}
                    className="bg-green-900 text-green-400 px-4 py-2 rounded hover:bg-green-800"
                  >
                    Rolar 1d10
                  </button>
                </div>

                {rollResult && (
                  <div className="bg-green-900/20 p-3 rounded">
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-bold mr-2">Resultado:</span>
                      <span
                        className={`text-2xl font-mono ${rollResult.isSuccess ? "text-green-400" : "text-red-400"}`}
                      >
                        {rollResult.total}
                      </span>
                      <span className="ml-3 text-sm">
                        {rollResult.isSuccess ? "Sucesso!" : "Falha!"}
                      </span>
                    </div>

                    <div>
                      <span className="text-gray-400">Rolagens:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {rollResult.rolls.map((roll, index) => (
                          <span
                            key={index}
                            className={`inline-block w-8 h-8 flex items-center justify-center rounded-full 
                              ${
                                roll === 10
                                  ? "bg-green-700 text-white"
                                  : roll === -10
                                    ? "bg-red-700 text-white"
                                    : roll < 0
                                      ? "bg-red-900/50 text-red-400"
                                      : "bg-green-900/50 text-green-400"
                              }`}
                          >
                            {roll < 0 ? roll : roll}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-black border border-green-900  p-4">
                <h3 className="text-lg font-bold text-green-400 mb-3">
                  Referência de DVs
                </h3>

                <table className="w-full">
                  <thead className="bg-green-900/20">
                    <tr>
                      <th className="text-left p-2 text-green-400">
                        Dificuldade
                      </th>
                      <th className="text-center p-2 text-green-400">DV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-green-900/30">
                      <td className="p-2 text-gray-300">Muito fácil</td>
                      <td className="p-2 text-center font-mono text-gray-300">
                        8
                      </td>
                    </tr>
                    <tr className="border-b border-green-900/30">
                      <td className="p-2 text-gray-300">Fácil</td>
                      <td className="p-2 text-center font-mono text-gray-300">
                        10
                      </td>
                    </tr>
                    <tr className="border-b border-green-900/30">
                      <td className="p-2 text-gray-300">Moderado</td>
                      <td className="p-2 text-center font-mono text-gray-300">
                        13
                      </td>
                    </tr>
                    <tr className="border-b border-green-900/30">
                      <td className="p-2 text-gray-300">Difícil</td>
                      <td className="p-2 text-center font-mono text-gray-300">
                        15
                      </td>
                    </tr>
                    <tr className="border-b border-green-900/30">
                      <td className="p-2 text-gray-300">Muito difícil</td>
                      <td className="p-2 text-center font-mono text-gray-300">
                        17
                      </td>
                    </tr>
                    <tr className="border-b border-green-900/30">
                      <td className="p-2 text-gray-300">
                        Extremamente difícil
                      </td>
                      <td className="p-2 text-center font-mono text-gray-300">
                        20
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text-gray-300">Quase impossível</td>
                      <td className="p-2 text-center font-mono text-gray-300">
                        25+
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "encounters" && (
          <div>
            <h2 className="text-xl font-bold text-green-400 mb-3">
              Encontros Aleatórios
            </h2>

            <div className="bg-black border border-green-900  p-4 mb-4">
              <h3 className="text-lg font-bold text-green-400 mb-3">
                Gerador de Encontros
              </h3>

              <button
                onClick={() => setRandomEncounter(generateRandomEncounter())}
                className="bg-green-900 text-green-400 px-4 py-2 rounded hover:bg-green-800 mb-4"
              >
                Gerar Encontro Aleatório
              </button>

              {randomEncounter && (
                <div className="bg-green-900/20 p-4 rounded">
                  <h4 className="text-white font-bold mb-2">Encontro:</h4>
                  <p className="text-gray-300">{randomEncounter}</p>
                </div>
              )}
            </div>

            <div className="bg-black border border-green-900  p-4">
              <h3 className="text-lg font-bold text-green-400 mb-3">
                Lista de Encontros Possíveis
              </h3>

              <ul className="list-disc list-inside space-y-1">
                {randomEncounters.map((encounter, index) => (
                  <li key={index} className="text-gray-400">
                    {encounter}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GMDashboard;
