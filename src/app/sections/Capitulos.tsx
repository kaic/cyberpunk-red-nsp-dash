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
      summary: "A campanha inicia-se em um momento crítico em Nova São Paulo, quando uma explosão no bar do Tatuapé resulta na morte de Marcos da ZL, um influente líder do Comando. Os jogadores, presentes no local errado na hora errada, são falsamente acusados. Esse incidente desencadeia uma série de eventos que os leva a descobrir conspirações profundas na cidade.",
      keyEvents: [
        "A explosão mata duas pessoas próximo à janela do bar.",
        "Membros do Comando chegam acusando os jogadores do assassinato.",
        "BlingBling, um fixer dos BitMarauders, contata oferecendo ajuda.",
        "Para ganhar sua confiança, o grupo precisa recuperar um laboratório de CyberJenkins."
      ],
      locations: [
        { name: "Bar no Tatuapé", description: "Bar bem localizado em um prédio alto, frequentado pela elite local. Do lado de fora, pode-se ver a cidade em todo seu esplendor e caos, com veículos aéreos e o metrô passando próximo." },
        { name: "Agência de Carros", description: "Fachada para operações de lavagem de dinheiro dos BitMarauders. Apresenta modelos de carros de luxo, mas seu verdadeiro negócio ocorre nos fundos, onde dados e dinheiro são processados." },
        { name: "Laboratório de Jenkins", description: "Base de produção de CyberJenkins, controlada pelos TO do Palmeiras. Escondido em uma área industrial abandonada, o laboratório é protegido por gangsters e possui equipamentos químicos avançados." }
      ],
      npcs: [
        { name: "Marcos da ZL", faction: "Comando", status: "Morto", notes: "Líder do Comando assassinado pela bomba. Era conhecido por sua brutalidade, mas também por um código de honra nas ruas." },
        { name: "BlingBling", faction: "BitMarauders", status: "Aliado", notes: "Fixer que oferece ajuda em troca de favores. Exuberante e extravagante, sempre vestido com roupas brilhantes e joias, possui uma rede de contatos invejável." },
        { name: "MC Kleber", faction: "Ex-Comando", status: "Neutro", notes: "Pode ajudar a marcar reunião com o Tribunal do Crime. Antigo membro que saiu após divergências ideológicas e agora vive como artista de rua e informante." }
      ],
      loot: [
        { name: "300EB", type: "Dinheiro", source: "Corpo de Marcos da ZL" },
        { name: "Teen Dreen Vermelha", type: "Item", source: "Corpo de Marcos da ZL", description: "Item de valor desconhecido, parece ser um chip ou crédito especial usado em certas transações no submundo." }
      ],
      challenges: [
        { type: "Combate", description: "Enfrentar os membros do Comando que aparecem no bar acusando os jogadores.", difficulty: "Média" },
        { type: "Social", description: "Convencer a polícia na agência de carros de que tudo está normal.", difficulty: "Difícil" },
        { type: "Infiltração", description: "Recuperar o laboratório de CyberJenkins dos TOs do Palmeiras.", difficulty: "Muito Difícil" }
      ]
    },
    {
      id: "cap2",
      number: "02",
      title: "Jacks e Jenkins",
      status: "complete",
      description: "MC Kleber é sequestrado pela MiliTech, revelando uma conspiração maior entre a corporação e o Comando.",
      summary: "Após estabelecer contato com MC Kleber, o grupo descobre que ele foi sequestrado pela MiliTech. Esta revelação aponta para uma aliança secreta entre a corporação e o Comando, complicando ainda mais a situação dos jogadores. A investigação leva à perigosa balada 'A Floresta' e às bases da MiliTech, onde segredos sombrios começam a ser revelados.",
      keyEvents: [
        "BlingBling avisa que MC Kleber foi sequestrado.",
        "A balada 'A Floresta' em Pinheiros é a última localização conhecida.",
        "Investigação leva a duas bases da MiliTech: Brás e Capão.",
        "Descoberta da aliança entre MiliTech e Comando para esconder o Cartel."
      ],
      locations: [
        { name: "A Floresta", description: "Balada em Pinheiros, ponto de encontro para fixers e mercenários. Um festival de luzes neon, música alta e negócios clandestinos sendo feitos em cantos escuros entre drinks caros." },
        { name: "Base MiliTech - Brás", description: "Instalação em distrito industrial com informações cruciais. Protegida por segurança moderada e sistemas automatizados, esconde documentos sobre operações secretas." },
        { name: "Base MiliTech - Capão", description: "Instalação fortemente protegida onde MC Kleber está detido. Uma fortaleza moderna com múltiplas camadas de segurança, guardas armados e sistemas antiintrusão avançados." }
      ],
      npcs: [
        { name: "Will", faction: "Civil", status: "Neutro", notes: "Bartender de A Floresta com informações úteis. Ouvidos atentos e boa memória, mas cauteloso ao compartilhar o que sabe." },
        { name: "Z", faction: "Civil", status: "Possível Aliado", notes: "Segurança da balada insatisfeito com seus chefes. Busca uma saída de sua situação atual e pode ser persuadido a ajudar por um preço." },
        { name: "Raposa", faction: "Independente", status: "Aliado", notes: "Sofre efeitos do CyberJenkins após contato com V. As visões que experimenta podem conter pistas cruciais sobre os projetos secretos." },
        { name: "V", faction: "Desconhecida", status: "Misteriosa", notes: "Envenenou Raposa com CyberJenkins. Suas motivações são obscuras, mas parece ter conhecimento interno sobre as corporações." }
      ],
      loot: [
        { name: "Planta da Base do Capão", type: "Informação", source: "Base MiliTech - Brás", description: "Diagrama detalhado mostrando pontos de acesso, localização de câmeras e rota até as celas de detenção." },
        { name: "Cyberarm", type: "Cyberware", source: "Base MiliTech - Brás", description: "Braço cibernético de alta qualidade com aumento de força e compartimento oculto." },
        { name: "Arasaka WSSA Sniper System", type: "Arma", source: "Base MiliTech - Brás", description: "Sistema de sniper avançado com mira inteligente e munição especializada." }
      ],
      challenges: [
        { type: "Investigação", description: "Descobrir o paradeiro de MC Kleber através de pistas na balada.", difficulty: "Média" },
        { type: "Infiltração", description: "Entrar na base da MiliTech no Brás sem ser detectado.", difficulty: "Difícil" },
        { type: "Resgate", description: "Libertar MC Kleber da instalação de segurança máxima no Capão.", difficulty: "Muito Difícil" }
      ]
    },
    {
      id: "cap3",
      number: "03",
      title: "Cidade dos Sonhos",
      status: "complete",
      description: "As visões causadas pelo CyberJenkins revelam projetos secretos e a verdadeira natureza da conspiração.",
      summary: "As visões experimentadas por Raposa após o contato com CyberJenkins abrem uma janela para os projetos secretos da MiliTech e SynthCorp. A realidade distorcida das alucinações revela verdades ocultas sobre os projetos Omega e Alpha, levando o grupo a confrontar um poderoso cyborgue da MiliTech, o Executor de Ferro. Neste capítulo, a verdadeira extensão da conspiração começa a tomar forma.",
      keyEvents: [
        "Raposa tem visões intensas após contato com CyberJenkins.",
        "Aparecem pistas sobre os projetos Omega e Alpha.",
        "Confronto com o 'Executor de Ferro', um cyborg da MiliTech.",
        "Revelações sobre conexões entre o governo, MiliTech e o Cartel."
      ],
      locations: [
        { name: "Hideout dos Players", description: "Esconderijo temporário enquanto são caçados. Um apartamento apertado em um prédio decadente, com recursos limitados mas relativamente seguro das autoridades." },
        { name: "Sede SynthCorp", description: "Mencionada nas visões, conectada ao Projeto Omega. Torre imponente no distrito financeiro, símbolo do poder corporativo, com sistemas de segurança de última geração." }
      ],
      npcs: [
        { name: "Eco", faction: "Mídia", status: "Aliado", notes: "Amigo de infância de Ellie, jornalista investigativo. Dedicado a expor a corrupção corporativa, possui recursos de mídia e contatos que podem ajudar a espalhar a verdade." },
        { name: "Executor de Ferro", faction: "MiliTech", status: "Inimigo", notes: "Cyborg com armadura pesada e armas integradas. Um soldado aprimorado com implantes militares experimentais, praticamente uma máquina de matar." }
      ],
      loot: [
        { name: "Dados do Projeto Omega", type: "Informação", source: "Visões de Raposa", description: "Fragmentos de informação sobre um sistema de controle neural em desenvolvimento que poderia suprimir a resistência em massa." }
      ],
      challenges: [
        { type: "Mental", description: "Interpretar corretamente as visões de Raposa para extrair informações úteis.", difficulty: "Difícil" },
        { type: "Combate", description: "Enfrentar o Executor de Ferro, um inimigo com capacidades muito superiores.", difficulty: "Extrema" },
        { type: "Investigação", description: "Conectar os pontos entre os projetos Omega/Alpha e as atitudes das corporações.", difficulty: "Muito Difícil" }
      ]
    },
    {
      id: "cap4",
      number: "04",
      title: "O Desaparecimento",
      status: "in-progress",
      description: "Após uma emboscada na Praça da Sé, Alyx desaparece misteriosamente, deixando apenas pistas enigmáticas.",
      summary: "O capítulo atual começa com as consequências da emboscada na Praça da Sé, onde o grupo foi atraído para uma armadilha. No caos que se seguiu, Alyx desapareceu misteriosamente, deixando apenas pistas fragmentadas. Enquanto isso, surge El Rato, um agiota que exige pagamento, complicando ainda mais a situação dos jogadores. A caçada por respostas sobre Alyx e o misterioso 'Jardim do Silêncio' se intensifica.",
      keyEvents: [
        "O Cartel marca um encontro falso para eliminar o grupo.",
        "GB do JH é executado por Raposa antes de revelar segredos importantes.",
        "O laptop de Alyx ficou ativo por segundos antes de ser desconectado à força.",
        "Aparecimento de El Rato, um agiota que exige pagamento ou um 'carro inteiro'."
      ],
      locations: [
        { name: "Praça da Sé", description: "Local da emboscada, centro de protestos e confrontos. Uma vez símbolo do poder público, agora é campo de batalha urbano com barricadas improvisadas e monitoramento constante." },
        { name: "Jardim do Silêncio", description: "Local misterioso mencionado em mensagem criptografada. Referências sugerem que pode ser tanto um lugar físico quanto um espaço virtual no NET onde consciências são aprisionadas." }
      ],
      npcs: [
        { name: "Alyx", faction: "Edgerunner", status: "Desaparecido", notes: "Membro do grupo que desapareceu misteriosamente. Especialista em tecnologia com conhecimentos que podem ter causado seu desaparecimento." },
        { name: "GB do JH", faction: "Comando", status: "Morto", notes: "Líder revolucionário do Comando, executado por Raposa. Tinha informações valiosas sobre o Cartel e conexões corporativas que morreram com ele." },
        { name: "El Rato", faction: "Independente", status: "Credor", notes: "Agiota que exige pagamento ou um serviço arriscado. Conhecido por sua crueldade com devedores, mas também por sua ampla rede de contatos no submundo." },
        { name: "Nathan Steel", faction: "MiliTech", status: "Antagonista", notes: "Chefe de segurança da MiliTech, menciona o grupo. Estrategista implacável responsável pelas operações secretas relacionadas aos projetos Omega e Alpha." }
      ],
      loot: [
        { name: "Porsche Avariada", type: "Veículo", source: "Fuga da base do Brás", description: "Potencial pagamento para El Rato. Danificada mas valiosa, necessita reparos para ser totalmente operacional." }
      ],
      challenges: [
        { type: "Negociação", description: "Lidar com El Rato e sua dívida sem comprometer a segurança do grupo.", difficulty: "Difícil" },
        { type: "Investigação", description: "Descobrir pistas sobre o paradeiro de Alyx e o significado do Jardim do Silêncio.", difficulty: "Muito Difícil" },
        { type: "Sobrevivência", description: "Evitar caçadores de recompensas e agentes corporativos enquanto são procurados.", difficulty: "Extrema" }
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
  ],
};

const Capitulos: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState("cap4");
  const [showTimeline, setShowTimeline] = useState(true);
  const [activeFaction, setActiveFaction] = useState(0);

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

  // Render challenges section
  const renderChallenges = (challenges) => {
    return (
      <div className="p-4 bg-black border border-purple-900 rounded-lg mb-6">
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
        <span className="mr-2">📚</span>
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
        <div className={`p-6 rounded-lg shadow-lg bg-black border ${currentChapter.status === "complete" ? "border-green-900" : "border-blue-900"
          } relative overflow-hidden mb-8`}>
          <div className={`absolute top-0 left-0 w-full h-2 ${currentChapter.status === "complete" ? "bg-green-500" : "bg-blue-500"
            }`}></div>

          <h2 className={`text-2xl font-bold mb-4 ${currentChapter.status === "complete" ? "text-green-400" : "text-blue-400"
            } flex items-center`}>
            <span className="mr-2">{currentChapter.number}</span>
            Capítulo {currentChapter.number} - {currentChapter.title}
            <span className={`ml-auto text-xs px-2 py-1 rounded-full ${currentChapter.status === "complete"
              ? "bg-green-900/50 text-green-400 border border-green-700"
              : "bg-blue-900/50 text-blue-400 border border-blue-700"
              }`}>
              {currentChapter.status === "complete" ? "Completo" : "Em progresso"}
            </span>
          </h2>

          <div className="mb-6 text-gray-300 bg-black/50 p-4 rounded-lg border-l-4 border-purple-700">
            <p className="italic text-lg">
              {currentChapter.summary}
            </p>
          </div>

          <h3 className="text-lg font-bold mb-3 text-purple-400 border-b border-purple-900/50 pb-1">
            Eventos Principais
          </h3>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentChapter.keyEvents.map((event, idx) => (
              <div key={idx} className="bg-black/30 border border-purple-900/30 rounded-lg p-3">
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
          <div className="p-4 bg-black border border-cyan-900 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-cyan-400 border-b border-cyan-900/50 pb-1">
              <span className="mr-2">📍</span>Locais
            </h3>
            <div className="space-y-4">
              {currentChapter.locations.map((location, idx) => (
                <div key={idx} className="bg-black/30 border border-cyan-900/30 rounded-lg p-3">
                  <h4 className="text-cyan-400 font-bold mb-1">{location.name}</h4>
                  <p className="text-gray-400 text-sm">{location.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NPCs */}
          <div className="p-4 bg-black border border-pink-900 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-pink-400 border-b border-pink-900/50 pb-1">
              <span className="mr-2">👤</span>NPCs
            </h3>
            <div className="space-y-4">
              {currentChapter.npcs.map((npc, idx) => (
                <div key={idx} className="bg-black/30 border border-pink-900/30 rounded-lg p-3">
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
        <div className="p-4 bg-black border border-yellow-900 rounded-lg mb-6">
          <h3 className="text-lg font-bold mb-3 text-yellow-400 border-b border-yellow-900/50 pb-1">
            <span className="mr-2">💰</span>Loot Encontrado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentChapter.loot.map((item, idx) => (
              <div key={idx} className="bg-black/30 border border-yellow-900/50 rounded-lg p-3">
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

      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={() => setShowTimeline(!showTimeline)}
          className={`px-4 py-2 rounded-lg border transition-colors ${showTimeline
            ? "bg-red-900/50 text-red-400 border-red-900 hover:bg-red-900/30"
            : "bg-black text-gray-400 border-gray-800 hover:text-red-400 hover:border-red-900"
            }`}
        >
          {showTimeline ? "Esconder Linha do Tempo" : "Mostrar Linha do Tempo"}
        </button>
      </div>

      {/* Timeline */}
      {showTimeline && (
        <div className="p-6 rounded-lg shadow-lg bg-black border border-red-900 relative overflow-hidden mb-6">
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