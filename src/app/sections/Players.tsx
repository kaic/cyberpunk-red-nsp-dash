import React, { useState, useEffect } from 'react';
import { Search, Zap, Cpu, GitBranch, Shield, X, ChevronDown, ChevronUp, Users, BriefcaseMedical, Computer, Mic2, Wrench, Crosshair, FileText, Award, UserCircle2, DollarSign, Skull } from 'lucide-react';
import GlitchText from "../components/GlitchText";

// Dados mockados para jogadores - substituir por importação de arquivo JSON real
const playersData = [
  {
    id: "nico",
    name: "Nico Buyanov",
    player: "Bill",
    role: "Fixer",
    roleSkill: "Reputação 6",
    avatar: "/images/players/nico.jpg", // Caminho para a imagem do avatar
    tagline: "Dinheiro fala mais alto que o chumbo. Felizmente, eu tenho os dois.",
    background: "Nascido no submundo dos negócios ilícitos de Nova São Paulo, Nico rapidamente aprendeu a transformar contatos em lucro. Com habilidades sociais refinadas e uma memória excepcional para dívidas e favores, ele se tornou um dos Fixers mais confiáveis da cidade - desde que o preço seja justo.",
    stats: {
      INT: 6,
      REF: 5,
      DEX: 6,
      TECH: 3,
      COOL: 8,
      WILL: 5,
      LUCK: 7,
      MOVE: 6,
      BODY: 5,
      EMP: 7
    },
    keyAbilities: [
      "Habilidades sociais avançadas",
      "Conhecimento extensivo de negócios",
      "Especialista em arrombamento de fechaduras",
      "Barganha e negociação de preços",
      "Passagem despercebida em situações tensas"
    ],
    cyberware: [
      { name: "Interface neural básica", description: "Permite conexão com dispositivos eletrônicos" },
      { name: "Neurophone", description: "Comunicação direta sem dispositivo externo" },
      { name: "Cyberolho esquerdo", description: "Escaneamento de documentos e rastreamento de informações" }
    ],
    weapons: [
      { name: "Pistola Federated Arms X-22", damage: "3d6", notes: "Confiável e discreta" },
      { name: "Faca retrátil de titanium", damage: "1d6", notes: "Escondida na bota" }
    ],
    contacts: [
      { name: "BlingBling", type: "Aliado", description: "Membro dos BitMarauders, fonte de trabalhos e informações privilegiadas" },
      { name: "Dr. Sombra", type: "Associado", description: "Médico d'A Caldeira, realiza procedimentos sem perguntas" }
    ],
    enemies: [
      { name: "Gangue não identificada", description: "Tentam forçá-lo a trabalhar exclusivamente para eles" }
    ],
    notes: [
      "Possui um safehouse seguro e bem abastecido",
      "Acesso privilegiado ao mercado negro",
      "Pode conseguir praticamente qualquer item por um preço",
      "Especialista em fazer as pessoas falarem"
    ],
    accent: "green" // Para estilização diferenciada
  },
  {
    id: "ellie",
    name: "Ellie",
    player: "Eric",
    role: "Netrunner",
    roleSkill: "Interface 6",
    avatar: "/images/players/ellie.jpg",
    tagline: "Na NET, não existem muros. Apenas portas que ainda não encontrei.",
    background: "Uma prodigiosa hacker desde a adolescência, Ellie vive pela adrenalina de invadir sistemas 'impenetráveis'. Prefere trabalhar sozinha, navegando pelo abismo digital em busca de dados valiosos e senhas protegidas. O mundo real é apenas um inconveniente que ela tolera entre sessões de netrunning.",
    stats: {
      INT: 8,
      REF: 6,
      DEX: 5,
      TECH: 7,
      COOL: 5,
      WILL: 6,
      LUCK: 6,
      MOVE: 5,
      BODY: 4,
      EMP: 4
    },
    keyAbilities: [
      "Habilidade elevada de revelar/ocultar objetos",
      "Furtividade avançada",
      "Conhecimento acadêmico extenso",
      "Criptografia",
      "Manuseio de pistolas",
      "Pesquisa em bibliotecas de dados"
    ],
    cyberware: [
      { name: "Interface Neural Avançada", description: "Permitindo conexão direta com a NET" },
      { name: "Processador Multitarefa", description: "Execução de até três programas simultaneamente" },
      { name: "Datajack Militarizado", description: "Conector de alto desempenho para dispositivos externos" },
      { name: "Chip de Tradução", description: "Tradução instantânea de códigos e linguagens" }
    ],
    weapons: [
      { name: "Pistola Biotechnica Signet", damage: "2d6", notes: "Leve e precisa" },
      { name: "Programas Ofensivos", damage: "Variado", notes: "Sword, Hellbolt, Vrizzbolt" }
    ],
    deck: {
      model: "Militech Viper-7",
      slots: 7,
      programas: ["Sword", "Armor", "Worm", "See-Ya", "Banhammer", "Hellbolt", "Vrizzbolt"]
    },
    contacts: [
      { name: "Contato Misterioso", type: "Aliado", description: "Alguém importante que ainda surgirá durante a campanha" }
    ],
    enemies: [
      { name: "Corporação SynthCorp", description: "Alvo frequente de suas invasões, está ativamente procurando sua identidade" }
    ],
    notes: [
      "Hackeia mais por diversão que por dinheiro",
      "Possui um arquivo extensivo de backdoors em sistemas corporativos",
      "Prefere operações remotas a visitas pessoais",
      "Mantém uma identidade digital alternativa como consultora de segurança legítima"
    ],
    accent: "blue" // Para estilização diferenciada
  },
  {
    id: "carlos",
    name: "Carlos Silva",
    player: "Dinei",
    role: "Medtech",
    roleSkill: "Medicina 6",
    avatar: "/images/players/carlos.jpg",
    tagline: "Já vi pessoas demais morrerem. Não vou deixar isso acontecer hoje.",
    background: "Veterano da brutal Guerra Civil de 2099, Carlos abandonou a carreira militar após testemunhar atrocidades que ainda assombram seus pesadelos. Hoje, usa suas habilidades médicas para consertar os quebrados e feridos de Nova São Paulo, tentando equilibrar os horrores que viu com as vidas que agora salva.",
    stats: {
      INT: 7,
      REF: 5,
      DEX: 7,
      TECH: 8,
      COOL: 5,
      WILL: 7,
      LUCK: 5,
      MOVE: 5,
      BODY: 6,
      EMP: 6
    },
    keyAbilities: [
      "Medicina de combate",
      "Diagnóstico avançado",
      "Cirurgia de trauma",
      "Farmacologia",
      "Primeiros socorros",
      "Instalação e manutenção de cyberware"
    ],
    cyberware: [
      { name: "Mãos Cibernéticas", description: "Precisão cirúrgica aumentada" },
      { name: "Scanner Médico Integrado", description: "Diagnóstico em tempo real" },
      { name: "Reservatório de medicamentos", description: "Acessível por comando neural" },
      { name: "Immunobooster", description: "Proteção contra agentes patogênicos" }
    ],
    weapons: [
      { name: "Pistola Médica", damage: "Especial", notes: "Dispara dardos de estabilização ou sedativos" },
      { name: "Bisturi Militarizado", damage: "1d6+2", notes: "Feito para cortar rapidamente em situações de combate" }
    ],
    medkit: {
      model: "TechMedics ProCare 3000",
      contents: ["Estimulantes de combate", "Estabilizadores de trauma", "Kit cirúrgico", "Nanoinjetores", "SpeedHeal"]
    },
    contacts: [
      { name: "Veterano da MiliTech", type: "Aliado", description: "Ex-companheiro de guerra, agora em posição influente" },
      { name: "Dr. Sombra", type: "Associado", description: "Colega que opera no hospital clandestino A Caldeira" }
    ],
    enemies: [
      { name: "Unidade Especial da Guardian", description: "Grupo responsável por atrocidades durante a Guerra Civil" }
    ],
    notes: [
      "Tem acesso a A Caldeira e conhece a senha",
      "Carrega um estojo médico completo a todo momento",
      "Sofre de PTSD relacionado à Guerra Civil",
      "Conhece em detalhes a anatomia humana - tanto para curar quanto para ferir"
    ],
    accent: "red" // Para estilização diferenciada
  },
  {
    id: "onar",
    name: "Onar",
    player: "Narvana",
    role: "Techie",
    roleSkill: "Maker 5",
    avatar: "/images/players/onar.jpg",
    tagline: "Se tem circuitos, eu posso fazer cantar. Se tem metal, posso fazer dançar.",
    background: "Um gênio da engenharia que prefere máquinas à companhia humana. Onar cresceu remendando equipamentos descartados e aperfeiçoando técnicas de improvisação. Seu talento para criar ferramentas a partir de sucata o tornou valioso tanto para gangues quanto para fixers que precisam de soluções técnicas inovadoras.",
    stats: {
      INT: 8,
      REF: 5,
      DEX: 7,
      TECH: 9,
      COOL: 4,
      WILL: 6,
      LUCK: 5,
      MOVE: 5,
      BODY: 5,
      EMP: 5
    },
    keyAbilities: [
      "Fabricação de dispositivos",
      "Reparo de eletrônicos",
      "Improvisação de ferramentas",
      "Conhecimento de engenharia",
      "Upgrade de equipamentos",
      "Compreensão de cyberware"
    ],
    cyberware: [
      { name: "Multifocais Oculares", description: "Zoom óptico e microscópico" },
      { name: "Dedos sensores", description: "Detecção de corrente elétrica e diagnóstico de circuitos" },
      { name: "Compartimentos subcutâneos", description: "Para ferramentas essenciais" },
      { name: "Interface Neural Técnica", description: "Conexão direta com dispositivos eletrônicos" }
    ],
    weapons: [
      { name: "Pistola modificada", damage: "2d6+1", notes: "Personalizada com mira laser e silenciador" },
      { name: "Multi-tool armado", damage: "1d6", notes: "Ferramenta com funções de arma improvisada" }
    ],
    toolKit: {
      model: "Kit personalizado",
      contents: ["Nanossoldador", "Multímetro avançado", "Componentes modulares", "Mini-drone diagnóstico", "Ferramenta multiuso tática"]
    },
    contacts: [
      { name: "Fornecedor de peças raras", type: "Aliado", description: "Conexão com mercado de componentes de alta tecnologia" }
    ],
    enemies: [
      { name: "Engenheiro corporativo", description: "Alegou que Onar roubou suas ideias" }
    ],
    notes: [
      "Será envolvido em uma trama relacionada ao CyberJenkins",
      "Terá que consertar o personagem de Rica",
      "Pode improvisar dispositivos com peças disponíveis",
      "Fascínio por tecnologias experimentais"
    ],
    accent: "yellow" // Para estilização diferenciada
  },
  {
    id: "thomas",
    name: "Thomas Turbando",
    player: "Patrick",
    role: "Rockerboy",
    roleSkill: "Carisma 5",
    avatar: "/images/players/thomas.jpg",
    tagline: "As palavras são minhas balas, o microfone é minha arma.",
    background: "Um Trapper nascido nas favelas de Nova São Paulo, Thomas Turbando transformou sua raiva e frustração em letras afiadas e batidas viciantes. Seu alter-ego artístico se tornou um símbolo cultural entre os jovens marginalizados, usando sua música para expor as verdades incômodas sobre a desigualdade e controle corporativo da cidade.",
    stats: {
      INT: 6,
      REF: 6,
      DEX: 7,
      TECH: 4,
      COOL: 8,
      WILL: 7,
      LUCK: 7,
      MOVE: 6,
      BODY: 5,
      EMP: 8
    },
    keyAbilities: [
      "Performance de palco",
      "Composição musical",
      "Influência sobre multidões",
      "Retórica persuasiva",
      "Conhecimento cultural",
      "Carisma natural"
    ],
    cyberware: [
      { name: "Amplificador vocal", description: "Modulação e efeitos de voz integrados" },
      { name: "Audio Vox", description: "Reprodução e manipulação de sons" },
      { name: "Chip de ritmo", description: "Sincronização perfeita com batidas" },
      { name: "Implante de memória musical", description: "Armazenamento de músicas e letras" }
    ],
    weapons: [
      { name: "Microfone eletrificado", damage: "1d6+3", notes: "Equipamento de performance modificado como arma" },
      { name: "Pistola chamariz", damage: "2d6", notes: "Decorada com cores vibrantes e detalhes personalizados" }
    ],
    gear: {
      model: "Equipamento de performance",
      contents: ["Holo-projetor portátil", "Sintetizador neural", "Amplificador de Charisma", "Drone de luz e som", "Interface de músicas"]
    },
    contacts: [
      { name: "Produtora independente", type: "Aliado", description: "Divulga seu trabalho nos círculos underground" },
      { name: "Fanbase dedicada", type: "Recurso", description: "Rede de jovens que o seguem e podem ser mobilizados" }
    ],
    enemies: [
      { name: "Corporação de mídia", description: "Tentou silenciá-lo através de ameaças legais e físicas" },
      { name: "Trapper rival", description: "Competidor no mesmo espaço cultural" }
    ],
    notes: [
      "Usa performances para transmitir mensagens codificadas",
      "Tem uma rede de fãs que servem como informantes",
      "Conhecido em clubes e festas clandestinas",
      "Símbolo da resistência cultural contra a repressão"
    ],
    accent: "pink" // Para estilização diferenciada
  },
  {
    id: "alyx",
    name: "Alyx",
    player: "Ceara",
    role: "Solo",
    roleSkill: "Consciência de Combate 6",
    avatar: "/images/players/alyx.jpg",
    tagline: "Quem precisa de palavras quando as balas falam mais alto?",
    background: "Ex-agente de segurança corporativa, Alyx saiu após descobrir os verdadeiros objetivos de seus empregadores. Agora, vende suas habilidades letais ao melhor pagador, equilibrando-se na linha tênue entre mercenária e protetora. Por trás da fachada fria de profissional, existe um código de honra rígido que nem mesmo ela admite seguir.",
    stats: {
      INT: 5,
      REF: 8,
      DEX: 7,
      TECH: 5,
      COOL: 7,
      WILL: 7,
      LUCK: 6,
      MOVE: 7,
      BODY: 8,
      EMP: 3
    },
    keyAbilities: [
      "Combate tático",
      "Consciência situacional",
      "Tiro de precisão",
      "Combate corpo a corpo",
      "Operações furtivas",
      "Sobrevivência urbana"
    ],
    cyberware: [
      { name: "Reflexos aprimorados", description: "Tempo de reação aumentado" },
      { name: "Braço cibernético direito", description: "Com estabilizador para tiro e compartimento para arma" },
      { name: "Implante de mira ótica", description: "Cálculos balísticos automáticos" },
      { name: "Subdermal de kevlar", description: "Proteção interna contra projéteis" }
    ],
    weapons: [
      { name: "Pistola Militech 'Executiva'", damage: "3d6", notes: "Personalizada para disparos silenciosos" },
      { name: "Rifle de precisão Tsunami", damage: "5d6", notes: "Desmontável para transporte discreto" },
      { name: "Lâminas mono", damage: "2d6", notes: "Integradas ao antebraço cibernético" }
    ],
    armor: {
      model: "Roupa balística discreta",
      protection: "SP 11/15",
      features: ["Aparência de roupas normais", "Reforço nas áreas vitais", "Dissipação de calor"]
    },
    contacts: [
      { name: "Agente de contratação", type: "Associado", description: "Encontra trabalhos legítimos de segurança" }
    ],
    enemies: [
      { name: "Ex-empregadores", description: "Corporação que considera sua saída uma traição" }
    ],
    notes: [
      "Desapareceu misteriosamente durante a missão na Praça da Sé",
      "Deixou seu laptop ativo por segundos antes de ser desconectado à força",
      "Tem um código moral não admitido publicamente",
      "Conhecimento interno sobre procedimentos de segurança corporativa"
    ],
    accent: "orange" // Para estilização diferenciada
  },
  {
    id: "raposa",
    name: "Raposa",
    player: "Rica",
    role: "Media",
    roleSkill: "Credibilidade 5",
    avatar: "/images/players/raposa.jpg",
    tagline: "A verdade está lá fora, e eu vou encontrá-la - não importa quem tente escondê-la.",
    background: "Jornalista investigativa que se especializa em expor segredos corporativos e governamentais. Trabalha na delicada linha entre revelar a verdade e se manter viva, usando uma rede de informantes e sua habilidade com tecnologia para desenterrar as histórias que poderosos prefeririam manter ocultas.",
    stats: {
      INT: 8,
      REF: 6,
      DEX: 5,
      TECH: 6,
      COOL: 8,
      WILL: 7,
      LUCK: 6,
      MOVE: 5,
      BODY: 4,
      EMP: 7
    },
    keyAbilities: [
      "Investigação",
      "Persuasão",
      "Entrevista",
      "Fotografia e edição",
      "Hacking básico",
      "Disfarce"
    ],
    cyberware: [
      { name: "Olhos cibernéticos", description: "Com gravação de vídeo e fotografia" },
      { name: "Gravador neural", description: "Captura tudo que vê e ouve" },
      { name: "Memória expandida", description: "Armazenamento extra para dados e evidências" },
      { name: "Link com drone", description: "Controle de mini-drones de reportagem" }
    ],
    weapons: [
      { name: "Pistola compacta", damage: "2d6", notes: "Facilmente ocultável" },
      { name: "Caneta taser", damage: "1d6+stun", notes: "Disfarçada como instrumento de escrita" }
    ],
    equipment: {
      model: "Kit de jornalista investigativo",
      contents: ["Mini-drones de gravação", "Analisador de dados", "Ferramentas de contra-vigilância", "Dispositivos de escuta", "Credenciais falsificadas"]
    },
    contacts: [
      { name: "Fonte anônima", type: "Informante", description: "Alguém de dentro do governo ou corporação" },
      { name: "Editor independente", type: "Aliado", description: "Publica suas histórias quando são muito perigosas" }
    ],
    enemies: [
      { name: "Oficial de informação da Guardian", description: "Tenta constantemente rastrear e silenciar suas reportagens" }
    ],
    notes: [
      "Teve visões intensas após contato com CyberJenkins",
      "Executou GB do JH antes que ele revelasse segredos importantes",
      "Está descobrindo conexões entre o CyberJenkins e os projetos Omega e Alpha",
      "Mantém um arquivo criptografado com evidências incriminatórias como seguro de vida"
    ],
    accent: "purple" // Para estilização diferenciada
  },
  {
    id: "dominic",
    name: "Dominic",
    player: "Pedro",
    role: "Exec",
    roleSkill: "Equipe 5",
    avatar: "/images/players/dominic.jpg",
    tagline: "O poder não está nos eurodólares, mas em quem você conhece e o que sabe sobre eles.",
    background: "Ex-executivo de médio escalão da SynthCorp que descobriu detalhes comprometedores sobre os projetos da empresa. Agora, navega nos círculos corporativos como consultor independente, usando seu conhecimento interno e rede de contatos para manipular o jogo corporativo de fora - enquanto tenta manter sua identidade anterior oculta.",
    stats: {
      INT: 7,
      REF: 5,
      DEX: 5,
      TECH: 6,
      COOL: 8,
      WILL: 7,
      LUCK: 6,
      MOVE: 5,
      BODY: 6,
      EMP: 7
    },
    keyAbilities: [
      "Recursos humanos",
      "Etiqueta corporativa",
      "Finanças",
      "Negociação",
      "Liderança",
      "Análise de dados"
    ],
    cyberware: [
      { name: "Implante de reconhecimento facial", description: "Identifica e recupera informações sobre contatos corporativos" },
      { name: "Neurophone executivo", description: "Comunicação segura e filtro de chamadas" },
      { name: "Regulador de feromônios", description: "Sutil manipulação de interações sociais" },
      { name: "Chip de Etiqueta", description: "Adaptação instantânea a protocolos sociais diferentes" }
    ],
    weapons: [
      { name: "Pistola executiva", damage: "2d6", notes: "Elegante e discreta" },
      { name: "Caneta injetora", damage: "Veneno", notes: "Dispositivo de último recurso camuflado" }
    ],
    team: {
      model: "Equipe executiva",
      members: ["Assistente pessoal", "Especialista em segurança", "Técnico de TI", "Analista financeiro", "Motorista/guarda-costas"]
    },
    contacts: [
      { name: "Diretora de RH", type: "Informante", description: "Ainda trabalha na SynthCorp, fornece informações internas" },
      { name: "Cônsul corporativo", type: "Aliado", description: "Ajuda com documentação e identidades" }
    ],
    enemies: [
      { name: "VP de Segurança", description: "Suspeita de seu envolvimento no vazamento de informações" },
      { name: "Headhunter corporativo", description: "Contratado para localizá-lo" }
    ],
    notes: [
      "Mantém uma fachada de consultor legítimo enquanto opera nos bastidores",
      "Tem conhecimento parcial sobre o Projeto Alpha",
      "Acessos ainda válidos a algumas instalações corporativas",
      "Coleção de segredos corporativos usados como moeda de troca"
    ],
    accent: "indigo" // Para estilização diferenciada
  }
];

// Mapeamento de classes para ícones
const roleIcons = {
  "Fixer": <DollarSign />,
  "Netrunner": <Computer />,
  "Medtech": <BriefcaseMedical />,
  "Techie": <Wrench />,
  "Rockerboy": <Mic2 />,
  "Solo": <Crosshair />,
  "Media": <FileText />,
  "Exec": <Users />
};

// Componente principal de Players
const PlayersSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(playersData);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    stats: true,
    abilities: true,
    cyberware: true,
    weapons: true,
    contacts: true,
    notes: true
  });

  // Filtrar jogadores com base no termo de busca
  useEffect(() => {
    if (searchTerm) {
      const filtered = playersData.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.player.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPlayers(filtered);
    } else {
      setFilteredPlayers(playersData);
    }
  }, [searchTerm]);

  // Selecionar um jogador
  const handleSelectPlayer = (id) => {
    const player = playersData.find(p => p.id === id);
    setSelectedPlayer(player);
  };

  // Alternar expansão de seções
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-pink-400 flex items-center border-b border-pink-900 pb-2">
        <span className="mr-2">🎮</span>
        <GlitchText variant="accent1">Players</GlitchText>
      </h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar jogadores por nome, role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-black border border-pink-900 rounded-lg text-gray-300 focus:border-pink-500 focus:outline-none pr-10"
          />
          <Search className="absolute right-3 top-3 text-gray-500 h-5 w-5" />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm("")}
              className="absolute right-10 top-3 text-gray-500 hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid de jogadores ou Detalhes do jogador selecionado */}
      {!selectedPlayer ? (
        /* Grid de jogadores */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              onClick={() => handleSelectPlayer(player.id)}
              className={`p-4 bg-black border border-${player.accent || 'pink'}-900 rounded-lg cursor-pointer hover:bg-${player.accent || 'pink'}-900/10 transition-all duration-200`}
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className={`text-xl font-bold text-${player.accent || 'pink'}-400`}>{player.name}</h2>
                <div className={`text-xs px-2 py-0.5 rounded-full bg-${player.accent || 'pink'}-900/50 text-${player.accent || 'pink'}-400 border border-${player.accent || 'pink'}-700 flex items-center`}>
                  {roleIcons[player.role]} <span className="ml-1">{player.role}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-3 text-sm">Jogador: {player.player}</p>
              <p className="text-gray-300 mb-4 italic">"{player.tagline}"</p>
              
              <div className="flex justify-between items-center text-sm">
                <span className={`text-${player.accent || 'pink'}-400`}>{player.roleSkill}</span>
                <button
                  className={`bg-${player.accent || 'pink'}-900/50 hover:bg-${player.accent || 'pink'}-900 text-${player.accent || 'pink'}-400 py-1 px-3 rounded text-sm`}
                >
                  Ver Perfil →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Detalhes do jogador */
        <div className="space-y-6">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setSelectedPlayer(null)}
              className={`bg-${selectedPlayer.accent || 'pink'}-900/50 hover:bg-${selectedPlayer.accent || 'pink'}-900 text-${selectedPlayer.accent || 'pink'}-400 py-2 px-4 rounded flex items-center`}
            >
              <span className="mr-1">←</span> Voltar
            </button>
            
            <div className={`text-xs px-2 py-0.5 rounded-full bg-${selectedPlayer.accent || 'pink'}-900/50 text-${selectedPlayer.accent || 'pink'}-400 border border-${selectedPlayer.accent || 'pink'}-700 flex items-center`}>
              {roleIcons[selectedPlayer.role]} <span className="ml-1">{selectedPlayer.role}</span>
            </div>
          </div>
          
          {/* Cabeçalho do jogador */}
          <div className={`p-6 rounded-lg shadow-lg bg-black border border-${selectedPlayer.accent || 'pink'}-900 relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-full h-2 bg-${selectedPlayer.accent || 'pink'}-500`}></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h2 className={`text-2xl font-bold text-${selectedPlayer.accent || 'pink'}-400`}>{selectedPlayer.name}</h2>
                  <p className="text-gray-400 text-sm">Jogador: {selectedPlayer.player}</p>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center">
                  <span className={`text-${selectedPlayer.accent || 'pink'}-400 text-sm mr-2`}>{selectedPlayer.roleSkill}</span>
                  <UserCircle2 className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} />
                </div>
              </div>
              
              <div className={`p-4 rounded-lg border border-${selectedPlayer.accent || 'pink'}-900/50 mb-4`}>
                <p className="text-gray-300 italic">"{selectedPlayer.tagline}"</p>
              </div>
              
              <p className="mb-4 text-gray-300">{selectedPlayer.background}</p>
            </div>
          </div>
          
          {/* Estatísticas */}
          <div className={`p-4 bg-black border border-${selectedPlayer.accent || 'pink'}-900 rounded-lg`}>
            <button 
              onClick={() => toggleSection('stats')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg font-bold text-${selectedPlayer.accent || 'pink'}-400 flex items-center`}>
                <GitBranch className="mr-2 h-5 w-5" /> Stats
              </h3>
              {expandedSections.stats ? 
                <ChevronUp className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} /> : 
                <ChevronDown className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} />
              }
            </button>
            
            {expandedSections.stats && selectedPlayer.stats && (
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-3">
                {Object.entries(selectedPlayer.stats).map(([stat, value]) => (
                  <div key={stat} className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg text-center`}>
                    <div className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold`}>{stat}</div>
                    <div className="text-2xl font-mono text-gray-300">{value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Habilidades */}
          <div className={`p-4 bg-black border border-${selectedPlayer.accent || 'pink'}-900 rounded-lg`}>
            <button 
              onClick={() => toggleSection('abilities')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg font-bold text-${selectedPlayer.accent || 'pink'}-400 flex items-center`}>
                <Zap className="mr-2 h-5 w-5" /> Habilidades principais
              </h3>
              {expandedSections.abilities ? 
                <ChevronUp className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} /> : 
                <ChevronDown className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} />
              }
            </button>
            
            {expandedSections.abilities && selectedPlayer.keyAbilities && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPlayer.keyAbilities.map((ability, index) => (
                  <div key={index} className="flex items-start">
                    <span className={`text-${selectedPlayer.accent || 'pink'}-500 mr-2`}>•</span>
                    <span className="text-gray-300">{ability}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cyberware */}
          <div className={`p-4 bg-black border border-${selectedPlayer.accent || 'pink'}-900 rounded-lg`}>
            <button 
              onClick={() => toggleSection('cyberware')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg font-bold text-${selectedPlayer.accent || 'pink'}-400 flex items-center`}>
                <Cpu className="mr-2 h-5 w-5" /> Cyberware
              </h3>
              {expandedSections.cyberware ? 
                <ChevronUp className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} /> : 
                <ChevronDown className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} />
              }
            </button>
            
            {expandedSections.cyberware && selectedPlayer.cyberware && (
              <div className="mt-3 space-y-2">
                {selectedPlayer.cyberware.map((item, index) => (
                  <div key={index} className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg`}>
                    <div className="flex justify-between">
                      <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold`}>{item.name}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Armas */}
          <div className={`p-4 bg-black border border-${selectedPlayer.accent || 'pink'}-900 rounded-lg`}>
            <button 
              onClick={() => toggleSection('weapons')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg font-bold text-${selectedPlayer.accent || 'pink'}-400 flex items-center`}>
                <Shield className="mr-2 h-5 w-5" /> Armas e Equipamento
              </h3>
              {expandedSections.weapons ? 
                <ChevronUp className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} /> : 
                <ChevronDown className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} />
              }
            </button>
            
            {expandedSections.weapons && (
              <div className="mt-3 space-y-3">
                {selectedPlayer.weapons && (
                  <div>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>Armas</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedPlayer.weapons.map((weapon, index) => (
                        <div key={index} className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg`}>
                          <div className="flex justify-between">
                            <h5 className="text-gray-300 font-bold">{weapon.name}</h5>
                            <span className={`text-${selectedPlayer.accent || 'pink'}-400`}>{weapon.damage}</span>
                          </div>
                          <p className="text-gray-400 text-sm">{weapon.notes}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Equipamento especial da classe */}
                {selectedPlayer.deck && (
                  <div className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg mt-3`}>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>Cyberdeck: {selectedPlayer.deck.model}</h4>
                    <div className="text-gray-300">
                      <div className="mb-1">Slots: {selectedPlayer.deck.slots}</div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedPlayer.deck.programas.map((prog, idx) => (
                          <span key={idx} className={`text-xs px-2 py-1 rounded-full bg-${selectedPlayer.accent || 'pink'}-900/50 text-${selectedPlayer.accent || 'pink'}-400 border border-${selectedPlayer.accent || 'pink'}-700`}>
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedPlayer.medkit && (
                  <div className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg mt-3`}>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>Kit Médico: {selectedPlayer.medkit.model}</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedPlayer.medkit.contents.map((item, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded-full bg-${selectedPlayer.accent || 'pink'}-900/50 text-${selectedPlayer.accent || 'pink'}-400 border border-${selectedPlayer.accent || 'pink'}-700`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedPlayer.toolKit && (
                  <div className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg mt-3`}>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>Kit de Ferramentas: {selectedPlayer.toolKit.model}</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedPlayer.toolKit.contents.map((item, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded-full bg-${selectedPlayer.accent || 'pink'}-900/50 text-${selectedPlayer.accent || 'pink'}-400 border border-${selectedPlayer.accent || 'pink'}-700`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedPlayer.gear && (
                  <div className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg mt-3`}>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>{selectedPlayer.gear.model}</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedPlayer.gear.contents.map((item, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded-full bg-${selectedPlayer.accent || 'pink'}-900/50 text-${selectedPlayer.accent || 'pink'}-400 border border-${selectedPlayer.accent || 'pink'}-700`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedPlayer.team && (
                  <div className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg mt-3`}>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>{selectedPlayer.team.model}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {selectedPlayer.team.members.map((member, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className={`text-${selectedPlayer.accent || 'pink'}-500 mr-2`}>•</span>
                          <span className="text-gray-300">{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedPlayer.armor && (
                  <div className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg mt-3`}>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>Armadura: {selectedPlayer.armor.model}</h4>
                    <div className="text-gray-300 mb-2">Proteção: {selectedPlayer.armor.protection}</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedPlayer.armor.features.map((feature, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded-full bg-${selectedPlayer.accent || 'pink'}-900/50 text-${selectedPlayer.accent || 'pink'}-400 border border-${selectedPlayer.accent || 'pink'}-700`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedPlayer.equipment && (
                  <div className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg mt-3`}>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>{selectedPlayer.equipment.model}</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedPlayer.equipment.contents.map((item, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded-full bg-${selectedPlayer.accent || 'pink'}-900/50 text-${selectedPlayer.accent || 'pink'}-400 border border-${selectedPlayer.accent || 'pink'}-700`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Contatos */}
          <div className={`p-4 bg-black border border-${selectedPlayer.accent || 'pink'}-900 rounded-lg`}>
            <button 
              onClick={() => toggleSection('contacts')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg font-bold text-${selectedPlayer.accent || 'pink'}-400 flex items-center`}>
                <Users className="mr-2 h-5 w-5" /> Contatos e Inimigos
              </h3>
              {expandedSections.contacts ? 
                <ChevronUp className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} /> : 
                <ChevronDown className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} />
              }
            </button>
            
            {expandedSections.contacts && (
              <div className="mt-3 space-y-4">
                {selectedPlayer.contacts && selectedPlayer.contacts.length > 0 && (
                  <div>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>Contatos</h4>
                    <div className="space-y-2">
                      {selectedPlayer.contacts.map((contact, index) => (
                        <div key={index} className={`p-3 bg-${selectedPlayer.accent || 'pink'}-900/20 rounded-lg border-l-2 border-${selectedPlayer.accent || 'pink'}-700`}>
                          <div className="flex justify-between">
                            <h5 className="text-gray-300 font-bold">{contact.name}</h5>
                            <span className={`text-xs px-2 py-0.5 rounded-full bg-green-900/50 text-green-400 border border-green-700`}>
                              {contact.type}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm">{contact.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedPlayer.enemies && selectedPlayer.enemies.length > 0 && (
                  <div>
                    <h4 className={`text-${selectedPlayer.accent || 'pink'}-400 font-bold mb-2`}>Inimigos</h4>
                    <div className="space-y-2">
                      {selectedPlayer.enemies.map((enemy, index) => (
                        <div key={index} className="p-3 bg-red-900/20 rounded-lg border-l-2 border-red-700">
                          <div className="flex justify-between">
                            <h5 className="text-gray-300 font-bold">{enemy.name}</h5>
                            <Skull className="text-red-400 h-4 w-4" />
                          </div>
                          <p className="text-gray-400 text-sm">{enemy.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Notas */}
          <div className={`p-4 bg-black border border-${selectedPlayer.accent || 'pink'}-900 rounded-lg`}>
            <button 
              onClick={() => toggleSection('notes')}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg font-bold text-${selectedPlayer.accent || 'pink'}-400 flex items-center`}>
                <Award className="mr-2 h-5 w-5" /> Notas e recursos do Mestre
              </h3>
              {expandedSections.notes ? 
                <ChevronUp className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} /> : 
                <ChevronDown className={`h-5 w-5 text-${selectedPlayer.accent || 'pink'}-400`} />
              }
            </button>
            
            {expandedSections.notes && selectedPlayer.notes && (
              <div className="mt-3 p-3 bg-purple-900/20 rounded-lg border-l-2 border-purple-700">
                <h4 className="text-purple-400 font-bold mb-2">Notas para o Mestre</h4>
                <ul className="space-y-2">
                  {selectedPlayer.notes.map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-300">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayersSection;