import React, { useState } from "react";
import GlitchText from "../components/GlitchText";

// Corps data structure
const corpsData = {
  corporations: [
    {
      id: "synthcorp",
      nome: "SynthCorp",
      descricao: "Potência na vanguarda da tecnologia em Nova São Paulo. Especializada em IA, cibernética avançada e realidade virtual.",
      descricaoLonga: "A SynthCorp é uma potência na vanguarda da tecnologia em Nova São Paulo. Especializada em desenvolvimento de inteligência artificial, cibernética avançada e realidade virtual, a SynthCorp controla grande parte do mercado de inovação tecnológica na cidade. Seus produtos vão desde próteses cibernéticas de última geração até sistemas de segurança de ponta.",
      icone: "🧠",
      corPrimaria: "blue",
      corSecundaria: "cyan",
      setor: "Tecnologia avançada, IA, cibernética, realidade virtual",
      influencia: "Significativa influência política, moldando leis de tecnologia e privacidade",
      caracteristicas: [
        "Sua sede imponente é uma torre futurista que domina o horizonte, simbolizando seu domínio sobre o futuro digital de Nova São Paulo.",
        "Conta com mais de 20.000 funcionários apenas em Nova São Paulo, muitos com implantes de fidelidade corporativa.",
        "Mantém uma força de segurança privada de elite equipada com tecnologia experimental."
      ],
      lider: {
        nome: "Vincent 'Vince' Almeida",
        descricao: "CEO de 45 anos, conhecido por sua ambição desmedida e visão futurista. Possui múltiplos implantes neurais e é rumores que tem acesso direto a protótipos de IA avançada."
      },
      membrosConhecidos: [
        { nome: "Dr. Kael Medeiros", funcao: "Cientista Chefe", status: "Ativo", notas: "Gênio tecnológico responsável pelo Projeto Omega." },
        { nome: "Sofia K.", funcao: "Diretora de Segurança", status: "Ativa", notas: "Ex-militar com implantes de combate extensivos, raramente vista em público." }
      ],
      tags: [
        { texto: "Influência política", cor: "blue" },
        { texto: "IA avançada", cor: "cyan" },
        { texto: "Controle social", cor: "purple" }
      ],
      projetos: "Projeto Omega (confidencial), Interface Neural Direta, Nova Rede de Vigilância Urbana",
      rivalidades: ["BionTech (disputa por patentes)", "BitMarauders (espionagem industrial)"],
      aliancas: ["Guardian (controle de fronteiras)", "MiliTech (projetos conjuntos de defesa)"]
    },
    {
      id: "agrogen",
      nome: "AgroGen",
      descricao: "Controla a cadeia alimentar da cidade através de experimentação genética e produção em larga escala.",
      descricaoLonga: "A AgroGen controla a cadeia alimentar de Nova São Paulo. Desde experimentação genética até a produção em larga escala de alimentos, a corporação mantém um monopólio eficaz sobre os recursos agrícolas da cidade. Seus produtos geneticamente modificados são onipresentes, alimentando a população enquanto mantém um controle rígido sobre o acesso aos alimentos.",
      icone: "🌱",
      corPrimaria: "green",
      corSecundaria: "yellow",
      setor: "Alimentos, biotecnologia agrícola, distribuição alimentar",
      influencia: "Controle sobre recursos essenciais, manipulação de mercados alimentares",
      caracteristicas: [
        "Apesar de sua presença urbana, a AgroGen também possui vastas áreas rurais controladas por drones e seguranças altamente treinados.",
        "Sua sede urbana é apenas a ponta do iceberg de uma operação que se estende por plantações e instalações de pesquisa afastadas.",
        "Pioneira em alimentos sintéticos e geneticamente modificados, essenciais para alimentar a superpopulação urbana."
      ],
      lider: {
        nome: "Dra. Elisa Vega",
        descricao: "CEO de 58 anos, especialista em biotecnologia. Formou-se na Universidade de Princeton e carrega a missão de 'alimentar as massas a qualquer custo'."
      },
      membrosConhecidos: [
        { nome: "Marco Treves", funcao: "Diretor de Operações", status: "Ativo", notas: "Ex-militar, supervisiona segurança das instalações rurais." },
        { nome: "Dr. Paulo Wu", funcao: "Chefe de Bioengenharia", status: "Ativo", notas: "Responsável pelos controversos projetos de modificação genética." }
      ],
      tags: [
        { texto: "Biotecnologia", cor: "green" },
        { texto: "Recursos essenciais", cor: "yellow" },
        { texto: "Monopólio", cor: "red" }
      ],
      projetos: "Alimentos Sintéticos VitaPlus, Drone-polinizadores, Cultivo Vertical Urbano",
      rivalidades: ["Pequenos agricultores (extermínio sistemático)", "Ativistas ambientais"],
      aliancas: ["SynthCorp (tecnologia de drones agrícolas)", "Guardian (proteção de instalações)"]
    },
    {
      id: "biontech",
      nome: "BionTech",
      descricao: "Força dominante na indústria médica, oferecendo biotecnologia exclusiva para os ricos enquanto as massas recebem o básico.",
      descricaoLonga: "A BionTech Solutions é a força dominante na indústria médica de Nova São Paulo. Desde clínicas de alta tecnologia até pesquisa avançada em biotecnologia, a BionTech tem o controle virtual sobre a saúde da população. Suas instalações oferecem tratamentos exclusivos para os ricos e poderosos, enquanto as massas enfrentam serviços de saúde básicos e superlotados.",
      icone: "💉",
      corPrimaria: "purple",
      corSecundaria: "pink",
      setor: "Medicina avançada, bioengenharia, farmacêuticos",
      influencia: "Controle sobre sistemas de saúde, pesquisa médica avançada",
      caracteristicas: [
        "Está na vanguarda da bioengenharia, oferecendo a clientes privilegiados melhorias genéticas e órgãos cultivados em laboratório.",
        "Cria uma divisão acentuada entre aqueles que podem pagar por aprimoramentos biotecnológicos e aqueles que não podem.",
        "Mantém uma rede de hospitais premium com acesso extremamente restrito."
      ],
      lider: {
        nome: "Dr. Gabriel Stern",
        descricao: "CEO e fundador, médico brilhante com visão capitalista radical sobre saúde. Rumores indicam que ele mesmo é um experimento vivo, com mais de 80 anos mas aparência de 40."
      },
      membrosConhecidos: [
        { nome: "Dra. Ana Oksana", funcao: "Diretora de Bioética", status: "Ativa", notas: "Responsável por determinar quais produtos são 'aceitáveis' para o mercado." },
        { nome: "Dr. Keller", funcao: "Médico renegado", status: "Desertor", notas: "Ex-pesquisador que agora opera no Hospital 'A Caldeira', atendendo pessoas sem recursos." }
      ],
      tags: [
        { texto: "Medicina avançada", cor: "purple" },
        { texto: "Divisão de classes", cor: "pink" },
        { texto: "Experimentação", cor: "blue" }
      ],
      projetos: "Regeneração de Órgãos, Implantes Neurais Médicos, Vacina Seletiva Classe-11",
      rivalidades: ["Hospital 'A Caldeira'", "SynthCorp (disputa por patentes de neuroimplantes)"],
      aliancas: ["Executivos corporativos de alto escalão", "Guardian (acesso a tecnologia médica)"]
    },
    {
      id: "militech",
      nome: "MiliTech",
      descricao: "Líder indiscutível na produção de equipamentos de segurança e defesa. Fornece desde armaduras corporais até armas avançadas.",
      descricaoLonga: "A MiliTech é a líder indiscutível na produção de equipamentos de segurança e defesa no mundo todo. Desde armaduras corporais de última geração até armas avançadas, a MiliTech fornece tanto para forças policiais quanto para forças privadas. Seus produtos são essenciais para aqueles que buscam segurança em uma cidade tomada pelo crime.",
      icone: "⚔️",
      corPrimaria: "red",
      corSecundaria: "gray",
      setor: "Armamento, segurança privada, tecnologia militar",
      influencia: "Controle sobre forças de segurança, mercado de armas e equipamentos militares",
      caracteristicas: [
        "Além de suas operações no mercado de equipamentos de segurança, também controla uma poderosa força de segurança privada.",
        "Patrulha bairros corporativos e áreas de alto valor, com autoridade que frequentemente excede a da polícia local.",
        "Possui laboratórios secretos onde desenvolve armas experimentais e testa em sujeitos involuntários."
      ],
      lider: {
        nome: "Nathan 'Steel' Turner",
        descricao: "VP de Operações, ex-general durante a Guerra Civil de 2099. Conhecido por sua brutalidade e eficiência, tem um braço cibernético com armas integradas."
      },
      membrosConhecidos: [
        { nome: "Ricardo 'Rick' Silva", funcao: "Chefe de Segurança de Informação", status: "Ativo", notas: "Ex-hacker contratado após quase derrubar os sistemas da empresa." },
        { nome: "Capitão Alex Mercer", funcao: "Comandante de Operações Especiais", status: "Ativo", notas: "Lidera um esquadrão de soldados aprimorados com ciberware militar." }
      ],
      tags: [
        { texto: "Força militar", cor: "red" },
        { texto: "Segurança privada", cor: "gray" },
        { texto: "Tecnologia letal", cor: "orange" }
      ],
      projetos: "Projeto Omega (com SynthCorp), Armadura Exoesquelética Mk4, Sistema de Drones Autônomos",
      rivalidades: ["Guardian (disputa de territórios)", "Ativistas anti-violência"],
      aliancas: ["Comando Cyberpunk (aliança secreta)", "SynthCorp (tecnologia para armamentos)"]
    },
    {
      id: "guardian",
      nome: "Guardian",
      descricao: "Principal força policial de Nova São Paulo, com controle absoluto sobre todas as entradas e saídas da cidade.",
      descricaoLonga: "Guardian é a corporação responsável pelo controle de entradas e saídas da cidade. Recentemente recebeu autoridade absoluta sobre as fronteiras através de uma lei controversa, cuja oposição resultou na morte de Well, um estudante de engenharia psíquica durante um protesto em Nova Pinheiros. Equipada com tecnologia militar e poderes legais extensos.",
      icone: "🛡️",
      corPrimaria: "yellow",
      corSecundaria: "blue",
      setor: "Segurança pública, controle de fronteiras, vigilância urbana",
      influencia: "Autoridade quase absoluta sobre movimento de pessoas e mercadorias",
      caracteristicas: [
        "Forças policiais militarizadas que atuam com impunidade nas áreas mais pobres da cidade.",
        "Controle total de fronteiras e capacidade de negar entrada e saída sem explicações.",
        "Sistemas de vigilância em massa espalhados por toda Nova São Paulo."
      ],
      lider: {
        nome: "Comissário Daniel Freitas",
        descricao: "Ex-militar com conexões políticas profundas. Publicamente defende a 'segurança acima de tudo', mas secretamente trabalha para agradar interesses corporativos."
      },
      membrosConhecidos: [
        { nome: "Capitã Miranda Torres", funcao: "Chefe de Operações Internas", status: "Ativa", notas: "Responsável pelo incidente que matou Well, promovida logo depois." },
        { nome: "Inspetor Lucas Vega", funcao: "Investigações Especiais", status: "Ativo", notas: "Um dos poucos oficiais incorruptíveis, sob constante ameaça interna." }
      ],
      tags: [
        { texto: "Autoridade", cor: "yellow" },
        { texto: "Repressão", cor: "red" },
        { texto: "Vigilância", cor: "blue" }
      ],
      projetos: "Sistema de Identificação Obrigatória, Rede Neural de Reconhecimento Facial, Isolamento Distrital",
      rivalidades: ["Ativistas pelos direitos civis", "BitMarauders (resistem ao controle)"],
      aliancas: ["SynthCorp (tecnologia de vigilância)", "Governador Gerald (controle político)"]
    }
  ],
  cartel: {
    titulo: "O Cartel - Aliança Corporativa Secreta",
    descricao: "Uma aliança oculta entre as principais corporações e o submundo criminoso, formada para implementar o Projeto Omega e consolidar controle sobre Nova São Paulo.",
    membrosConhecidos: [
      { nome: "Vincent 'Vince' Almeida (SynthCorp)", descricao: "Ambição desmedida e recursos tecnológicos" },
      { nome: "Nathan 'Steel' Turner (MiliTech)", descricao: "Estratégia militar e força bruta" },
      { nome: "Rafael 'Chefe' Oliveira (Comando)", descricao: "Controle das ruas e distribuição" },
      { nome: "Dr. Kael Medeiros (SynthCorp)", descricao: "Gênio científico por trás do Projeto Omega" },
      { nome: "Ricardo 'Rick' Silva (MiliTech)", descricao: "Operações tecnológicas e segurança digital" }
    ],
    projetos: [
      { nome: "Projeto Omega", descricao: "Tecnologia de controle neural em massa através de implantes e drogas" },
      { nome: "Projeto Alpha", descricao: "Testes controlados em áreas urbanas selecionadas" },
      { nome: "CyberJenkins", descricao: "Droga sintética que serve como veículo para a tecnologia de controle" },
      { nome: "Assassinato de Marcos da ZL", descricao: "Eliminação de obstáculos internos ao plano" },
      { nome: "Cerco urbano", descricao: "Consolidação de controle territorial através das forças de segurança" }
    ]
  },
  politica: {
    titulo: "Política e Poder",
    descricao: "As corporações exercem influência política massiva em Nova São Paulo, moldando políticas e manipulando o governo.",
    governador: {
      nome: "Gerald Fontana",
      descricao: "O governador da cidade é chantageado pelas corporações devido a um crime pessoal - o assassinato de sua ex-mulher. Originalmente um defensor dos direitos civis e crítico da influência corporativa, agora é forçado a ceder às pressões do Cartel."
    },
    guardianLei: {
      titulo: "Lei de Controle de Fronteiras",
      descricao: "Recentemente, a Guardian recebeu autoridade absoluta sobre as fronteiras através de uma lei controversa, cuja oposição resultou na morte de Well, um estudante de engenharia psíquica durante um protesto em Nova Pinheiros."
    }
  }
};

const Corps: React.FC = () => {
  const [activeCorp, setActiveCorp] = useState("synthcorp");
  const [showCartel, setShowCartel] = useState(false);
  const [showPolitica, setShowPolitica] = useState(false);

  // Encontra a corporação ativa
  const corpAtual = corpsData.corporations.find(c => c.id === activeCorp);

  // Navegação entre corporações
  const handleCorpChange = (id) => {
    setActiveCorp(id);
    setShowCartel(false);
    setShowPolitica(false);
  };

  // Renderiza a seção de membros conhecidos
  const renderMembrosConhecidos = (membros) => {
    return (
      <div className="p-4 bg-black border border-pink-900 ">
        <h3 className="text-lg font-bold mb-3 text-pink-400 border-b border-pink-900/50 pb-1">
          <span className="mr-2">👤</span>Executivos Conhecidos
        </h3>
        <div className="space-y-3">
          {membros.map((membro, idx) => (
            <div key={idx} className="bg-black/30 border border-pink-900/30  p-3">
              <div className="flex justify-between">
                <h4 className="text-pink-400 font-bold">{membro.nome}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  membro.status === "Aliado" 
                    ? "bg-green-900/50 text-green-400" 
                    : membro.status === "Inimigo" 
                      ? "bg-red-900/50 text-red-400" 
                      : membro.status === "Desertor" 
                        ? "bg-yellow-900/50 text-yellow-400"
                        : "bg-blue-900/50 text-blue-400"
                }`}>
                  {membro.status}
                </span>
              </div>
              <p className="text-gray-500 text-xs">{membro.funcao}</p>
              <p className="text-gray-400 text-sm">{membro.notas}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderiza a seção de características
  const renderCaracteristicas = (carac) => {
    return (
      <div className="p-4 bg-black border border-purple-900 ">
        <h3 className="text-lg font-bold mb-3 text-purple-400 border-b border-purple-900/50 pb-1">
          <span className="mr-2">⚡</span>Características
        </h3>
        <div className="space-y-2">
          {carac.map((item, idx) => (
            <div key={idx} className="bg-black/30 p-3  border-l-2 border-purple-700">
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Renderiza a seção do Cartel
  const renderCartel = () => {
    const cartel = corpsData.cartel;
    return (
      <div className="p-6  shadow-lg bg-black border border-blue-900 relative overflow-hidden mt-6">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            {cartel.titulo}
          </h2>
          <p className="mb-4 text-gray-300 border-l-4 border-blue-700 pl-4 bg-black/30 p-2 rounded-r-lg">
            {cartel.descricao}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-black border border-blue-800 ">
              <h3 className="text-lg font-bold text-blue-400 mb-3 border-b border-blue-900/50 pb-1">
                Membros Conhecidos
              </h3>
              <div className="space-y-2">
                {cartel.membrosConhecidos.map((membro, idx) => (
                  <div key={idx} className="bg-black/30 p-3  border-l-2 border-blue-700">
                    <h4 className="text-blue-400 font-bold">{membro.nome}</h4>
                    <p className="text-gray-400 text-sm">{membro.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-black border border-blue-800 ">
              <h3 className="text-lg font-bold text-blue-400 mb-3 border-b border-blue-900/50 pb-1">
                Projetos e Operações
              </h3>
              <div className="space-y-2">
                {cartel.projetos.map((projeto, idx) => (
                  <div key={idx} className="bg-black/30 p-3  border-l-2 border-blue-700">
                    <h4 className="text-blue-400 font-bold">{projeto.nome}</h4>
                    <p className="text-gray-400 text-sm">{projeto.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Renderiza a seção de política
  const renderPolitica = () => {
    const politica = corpsData.politica;
    return (
      <div className="p-6  shadow-lg bg-black border border-yellow-900 relative overflow-hidden mt-6">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            {politica.titulo}
          </h2>
          <p className="mb-4 text-gray-300 border-l-4 border-yellow-700 pl-4 bg-black/30 p-2 rounded-r-lg">
            {politica.descricao}
          </p>
          
          <div className="p-4 bg-black border border-yellow-800  mb-4">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">
              Governador {politica.governador.nome}
            </h3>
            <p className="text-gray-400">
              {politica.governador.descricao}
            </p>
          </div>
          
          <div className="p-4 bg-black border border-yellow-800 ">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">
              {politica.guardianLei.titulo}
            </h3>
            <p className="text-gray-400">
              {politica.guardianLei.descricao}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-400 flex items-center border-b border-blue-900 pb-2">
        <span className="mr-2">🏢</span>
        <GlitchText>Corporações</GlitchText>
      </h1>

      {/* Navegação entre corporações */}
      <div className="flex flex-wrap gap-2 mb-6">
        {corpsData.corporations.map((corp) => (
          <button
            key={corp.id}
            onClick={() => handleCorpChange(corp.id)}
            className={`p-3  transition-all duration-200 ${
              activeCorp === corp.id
                ? `bg-${corp.corPrimaria}-900/70 text-${corp.corPrimaria}-400 border border-${corp.corPrimaria}-700`
                : "bg-black text-gray-400 border border-gray-800 hover:bg-blue-900/20 hover:text-blue-400 hover:border-blue-800"
            } flex items-center`}
          >
            <span className="mr-2 text-2xl">{corp.icone}</span>
            <span className="font-bold">{corp.nome}</span>
          </button>
        ))}

        {/* Botão para O Cartel */}
        <button
          onClick={() => {
            setShowCartel(!showCartel);
            setShowPolitica(false);
          }}
          className={`p-3  transition-all duration-200 ${
            showCartel
              ? "bg-blue-900/70 text-blue-400 border border-blue-700"
              : "bg-black text-gray-400 border border-gray-800 hover:bg-blue-900/20 hover:text-blue-400 hover:border-blue-800"
          } flex items-center`}
        >
          <span className="mr-2 text-2xl">🔍</span>
          <span className="font-bold">O Cartel</span>
        </button>

        {/* Botão para Política e Poder */}
        <button
          onClick={() => {
            setShowPolitica(!showPolitica);
            setShowCartel(false);
          }}
          className={`p-3  transition-all duration-200 ${
            showPolitica
              ? "bg-yellow-900/70 text-yellow-400 border border-yellow-700"
              : "bg-black text-gray-400 border border-gray-800 hover:bg-yellow-900/20 hover:text-yellow-400 hover:border-yellow-800"
          } flex items-center`}
        >
          <span className="mr-2 text-2xl">👑</span>
          <span className="font-bold">Política & Poder</span>
        </button>
      </div>

      {/* Exibe o conteúdo principal (corporação, cartel ou política) */}
      {!showCartel && !showPolitica && corpAtual && (
        <div>
          {/* Cabeçalho da corporação */}
          <div className={`p-6  shadow-lg bg-black border border-${corpAtual.corPrimaria}-900 relative overflow-hidden mb-6`}>
            <div className={`absolute top-0 left-0 w-full h-2 bg-${corpAtual.corPrimaria}-500`}></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{corpAtual.icone}</span>
                <h2 className={`text-2xl font-bold text-${corpAtual.corPrimaria}-400`}>
                  {corpAtual.nome}
                </h2>
              </div>

              <p className="mb-6 text-gray-300 bg-black/50 p-4  border-l-4 border-blue-700">
                {corpAtual.descricaoLonga}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {corpAtual.tags.map((tag, idx) => (
                  <span key={idx} className={`text-xs px-2 py-1 rounded-full bg-${tag.cor}-900/50 text-${tag.cor}-400 border border-${tag.cor}-700`}>
                    {tag.texto}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Informações sobre setor e influência */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-black border border-cyan-900 ">
              <h3 className="text-lg font-bold mb-3 text-cyan-400 border-b border-cyan-900/50 pb-1">
                <span className="mr-2">📊</span>Setor & Influência
              </h3>
              <div className="space-y-4">
                <div className="bg-black/30 p-3  border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-1">Setor de Atuação</h4>
                  <p className="text-gray-300">{corpAtual.setor}</p>
                </div>
                <div className="bg-black/30 p-3  border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-1">Influência</h4>
                  <p className="text-gray-300">{corpAtual.influencia}</p>
                </div>
                <div className="bg-black/30 p-3  border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-1">Projetos Ativos</h4>
                  <p className="text-gray-300">{corpAtual.projetos}</p>
                </div>
              </div>
            </div>

            {/* Liderança */}
            <div className="p-4 bg-black border border-yellow-900 ">
              <h3 className="text-lg font-bold mb-3 text-yellow-400 border-b border-yellow-900/50 pb-1">
                <span className="mr-2">👑</span>Liderança
              </h3>
              <div className="bg-black/30 p-4  border-l-2 border-yellow-700">
                <h4 className="text-yellow-400 font-bold mb-2">{corpAtual.lider.nome}</h4>
                <p className="text-gray-300 italic">{corpAtual.lider.descricao}</p>
              </div>

              <h4 className="text-lg font-bold mt-4 mb-2 text-yellow-400">Relações Corporativas</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-black/30 p-3  border-l-2 border-red-700">
                  <h5 className="text-red-400 font-bold mb-1 text-sm">Rivalidades</h5>
                  <ul className="text-gray-400 text-sm">
                    {corpAtual.rivalidades.map((rival, idx) => (
                      <li key={idx} className="flex items-start mb-1">
                        <span className="text-red-500 mr-1">•</span>
                        <span>{rival}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/30 p-3  border-l-2 border-green-700">
                  <h5 className="text-green-400 font-bold mb-1 text-sm">Alianças</h5>
                  <ul className="text-gray-400 text-sm">
                    {corpAtual.aliancas.map((aliado, idx) => (
                      <li key={idx} className="flex items-start mb-1">
                        <span className="text-green-500 mr-1">•</span>
                        <span>{aliado}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Grid para características e membros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {renderCaracteristicas(corpAtual.caracteristicas)}
            {renderMembrosConhecidos(corpAtual.membrosConhecidos)}
          </div>
        </div>
      )}

      {/* Exibe o Cartel se o botão estiver ativo */}
      {showCartel && renderCartel()}

      {/* Exibe a Política se o botão estiver ativo */}
      {showPolitica && renderPolitica()}
    </div>
  );
};

export default Corps;