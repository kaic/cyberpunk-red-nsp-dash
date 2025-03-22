import React, { useState } from "react";
import CyberpunkText from "../components/CyberpunkText";
import { ChevronDown, ChevronUp, AlertTriangle, History, Users, Command, Radio, Skull, Zap, Eye, X, Filter } from 'lucide-react';

const Lore = () => {
  const [expandedSection, setExpandedSection] = useState({
    history: true,
    factions: false,
    mysteries: false,
    rumors: false
  });

  // Função para alternar expansão de seção
  const toggleSection = (section) => {
    setExpandedSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Efeito Matrix para fundo
  const MatrixEffect = () => (
    <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
      <div className="absolute inset-0 bg-gradient-to-br"></div>
      <div className="h-full overflow-hidden">
        <div className="h-full w-full">
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="text-green-500 text-xs opacity-70 font-mono whitespace-nowrap"
              >
                {Array(100)
                  .fill(null)
                  .map((_, j) => (
                    <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <CyberpunkText>📜 Lore</CyberpunkText>
      </h1>

      {/* História de Nova São Paulo */}
      <div className="mb-6">
        <div className="p-6  shadow-lg bg-black border border-green-900 relative overflow-hidden">
          <button
            onClick={() => toggleSection('history')}
            className="flex justify-between items-center w-full text-left"
          >
            <h2 className="text-xl font-bold text-green-400 flex items-center">
              <History className="w-5 h-5 mr-2" /> História de Nova São Paulo
            </h2>
            {expandedSection.history ?
              <ChevronUp className="w-5 h-5 text-green-400" /> :
              <ChevronDown className="w-5 h-5 text-green-400" />
            }
          </button>

          {expandedSection.history && (
            <div className="mt-4">
              <div className="border-l-2 border-green-700 pl-4 mb-6">
                <p className="text-gray-300 mb-2">
                  A cidade-estado independente nasceu dos escombros da brutal Guerra Civil de 2099, quando São Paulo, após anos de exploração econômica e repressão política, rompeu com o Brasil. Desde então, a metrópole tem vivido em um equilíbrio frágil entre caos e ordem, com corporações, gangues e um governo fragilizado disputando o controle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black border border-green-900/40 p-4 ">
                  <h3 className="text-lg font-bold text-green-400 mb-2 flex items-center">
                    <Radio className="w-4 h-4 mr-2" /> O Estopim
                  </h3>
                  <div className="border-l-2 border-green-700 pl-4">
                    <p className="text-sm text-gray-400">
                      O <span className="text-green-400">Massacre da Avenida Paulista (2097)</span> foi o catalisador quando forças federais abriram fogo contra manifestantes pacíficos, matando centenas. A indignação popular alimentou o movimento separatista que, dois anos depois, culminaria na declaração de independência.
                    </p>
                  </div>
                </div>

                <div className="bg-black border border-green-900/40 p-4 ">
                  <h3 className="text-lg font-bold text-green-400 mb-2 flex items-center">
                    <Radio className="w-4 h-4 mr-2" /> A Guerra Civil
                  </h3>
                  <div className="border-l-2 border-green-700 pl-4">
                    <p className="text-sm text-gray-400">
                      A guerra durou três anos sangrentos (2099-2102). As forças separatistas – uma coalizão de milícias civis, gangues locais, mercenários e forças privadas corporativas – enfrentaram o exército federal em uma brutal guerra urbana que transformou ruas em campos de batalha e prédios em fortalezas.
                    </p>
                  </div>
                </div>

                <div className="bg-black border border-green-900/40 p-4 ">
                  <h3 className="text-lg font-bold text-green-400 mb-2 flex items-center">
                    <Radio className="w-4 h-4 mr-2" /> Independência
                  </h3>
                  <div className="border-l-2 border-green-700 pl-4">
                    <p className="text-sm text-gray-400">
                      A <span className="text-green-400">Batalha pelo Porto de Santos</span> marcou o ponto de virada. Com a vitória dos separatistas, o bloqueio econômico foi quebrado, forçando o governo federal a negociar. O Tratado de Independência foi assinado em 2102, reconhecendo Nova São Paulo como nação soberana.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">
                  Nova São Paulo Hoje (2133)
                </h3>
                <div className="border-l-2 border-green-700 pl-4">
                  <p className="text-gray-300 mb-2">
                    Três décadas após a guerra, a cidade é um paradoxo de avanço tecnológico e decadência social. Arranha-céus reluzentes onde a elite corporativa vive em luxo contrastam com favelas verticais onde 50 milhões lutam pela sobrevivência. O controle da cidade é fragmentado entre o governo oficial, as megacorporações que salvaram e escravizaram a economia, e as gangues que dominam as ruas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-black/50 p-3 ">
                      <span className="text-green-400 font-bold block mb-1">Cicatrizes da Guerra</span>
                      <p className="text-sm text-gray-400">
                        Distritos inteiros permanecem em ruínas, transformados em zonas de exclusão. Os "Campos de Batalha" do Centro e da Zona Leste são labirintos mortais de concreto destroçado, habitados por gangues e os esquecidos da sociedade.
                      </p>
                    </div>
                    <div className="bg-black/50 p-3 ">
                      <span className="text-green-400 font-bold block mb-1">Nova Realidade</span>
                      <p className="text-sm text-gray-400">
                        As linhas entre governo, corporações e crime organizado se tornaram tão borradas que alguns dizem que não há mais diferença. A cada dia, a tensão cresce e muitos temem que uma nova guerra esteja se formando nas sombras.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fenômenos e Mistérios Recentes */}
      <div className="mb-6">
        <div className="p-6  shadow-lg bg-black border border-blue-900 relative overflow-hidden">
          <button
            onClick={() => toggleSection('mysteries')}
            className="flex justify-between items-center w-full text-left"
          >
            <h2 className="text-xl font-bold text-blue-400 flex items-center">
              <Eye className="w-5 h-5 mr-2" /> Fenômenos Recentes
            </h2>
            {expandedSection.mysteries ?
              <ChevronUp className="w-5 h-5 text-blue-400" /> :
              <ChevronDown className="w-5 h-5 text-blue-400" />
            }
          </button>

          {expandedSection.mysteries && (
            <div className="mt-4">
              <div className="border-l-2 border-blue-700 pl-4 mb-6">
                <p className="text-gray-300">
                  Os últimos anos têm sido marcados por eventos estranhos e perturbadores em Nova São Paulo. Novas drogas, mortes misteriosas e um clima de paranoia crescente permeiam as ruas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black border border-blue-900/70 p-4 ">
                  <h3 className="text-lg font-bold text-blue-400 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2" /> CyberJenkins
                  </h3>
                  <p className="text-sm text-gray-400">
                    Uma nova droga sintética que está varrendo os clubes e becos de Nova São Paulo. Consumida através de implantes cibernéticos, provoca euforia, sensação de poder e, mais perturbadoramente, visões que os usuários descrevem como "reveladoras". É altamente viciante e causa sintomas severos de abstinência.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Relatos indicam que algumas "visões" sob influência da droga revelam informações que o usuário não teria como saber. Alguns acreditam que a droga esteja relacionada a experimentos corporativos secretos.
                  </p>
                </div>

                <div className="bg-black border border-blue-900/70 p-4 ">
                  <h3 className="text-lg font-bold text-blue-400 mb-2 flex items-center">
                    <Skull className="w-4 h-4 mr-2" /> O Martírio de Well
                  </h3>
                  <p className="text-sm text-gray-400">
                    Well, um brilhante estudante de engenharia psíquica da Universidade de Nova Pinheiros, foi morto durante um protesto contra o controle da Guardian nas fronteiras da cidade. Sua morte brutal, transmitida ao vivo, transformou-o em um símbolo de resistência.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Antes de sua morte, Well trabalhava em tecnologias que poderiam "democratizar o acesso à Rede". Muitos acreditam que sua pesquisa foi o verdadeiro motivo de seu assassinato.
                  </p>
                </div>

                <div className="bg-black border border-blue-900/70 p-4 ">
                  <h3 className="text-lg font-bold text-blue-400 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" /> Desaparecimentos
                  </h3>
                  <p className="text-sm text-gray-400">
                    Um número preocupante de netrunners e técnicos de elite tem desaparecido nos últimos meses. As autoridades classificam como fugas voluntárias, mas a comunidade tech acredita em algo mais sinistro.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Alguns dos desaparecidos enviaram mensagens crípticas antes de sumir, mencionando "invasões reversas" e "mentes sequestradas" – termos que muitos descartam como delírios paranoicos.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 border border-blue-900  bg-black/50">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Falhas na Rede</h3>
                <p className="text-gray-300 mb-2">
                  Nos últimos 8 meses, Nova São Paulo tem experimentado falhas inexplicáveis em suas redes. Blecautes digitais momentâneos afetam bairros inteiros, com relatos de comportamento errático em implantes neurais e dispositivos conectados.
                </p>
                <p className="text-gray-300">
                  As corporações atribuem os problemas a "atualizações de infraestrutura", mas o timing e o padrão das falhas levantam suspeitas. Curiosamente, cada falha é seguida por um aumento nos casos de perturbações mentais e comportamentos irracionais na região afetada.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dados Confidenciais */}
      <div className="bg-black border border-red-900  relative overflow-hidden">
        <MatrixEffect />
        <div className="relative z-10 p-6">
          <button
            onClick={() => toggleSection('rumors')}
            className="flex justify-between items-center w-full text-left"
          >
            <h2 className="text-xl font-bold text-red-400 flex items-center">
              <Filter className="w-5 h-5 mr-2" /> Rumores das Ruas
            </h2>
            {expandedSection.rumors ?
              <ChevronUp className="w-5 h-5 text-red-400" /> :
              <ChevronDown className="w-5 h-5 text-red-400" />
            }
          </button>

          {expandedSection.rumors && (
            <div className="mt-4">
              <p className="text-center font-mono text-lg mb-4 text-red-400">
                [ INFORMAÇÕES NÃO VERIFICADAS ]
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-black border border-red-700 ">
                  <h3 className="text-lg font-bold text-red-400 mb-2">
                    Projeto Omega
                  </h3>
                  <p className="text-sm text-gray-400">
                    Nome de código sussurrado com medo nos becos e clubes subterrâneos. Dizem que é uma operação secreta corporativa que envolve controle mental através de redes neurais. Alguns afirmam que as falhas na rede são testes para algo maior.
                  </p>
                  <div className="mt-2 px-3 py-1 bg-red-900/30 border border-red-800 rounded text-xs text-gray-400 italic">
                    "Quando a rede cair de vez, não serão apenas as máquinas que eles controlarão."
                  </div>
                </div>

                <div className="p-4 bg-black border border-red-700 ">
                  <h3 className="text-lg font-bold text-red-400 mb-2">
                    Projeto Alpha
                  </h3>
                  <p className="text-sm text-gray-400">
                    Rumores apontam para uma série de testes secretos realizados em áreas específicas da cidade. Testemunhas relatam comportamentos estranhos em massa, seguidos por amnésia coletiva. Aparentemente relacionado ao Omega, mas detalhes são contraditórios.
                  </p>
                  <div className="mt-2 px-3 py-1 bg-red-900/30 border border-red-800 rounded text-xs text-gray-400 italic">
                    "Três fases. Estamos na terceira."
                  </div>
                </div>

                <div className="p-4 bg-black border border-red-700 ">
                  <h3 className="text-lg font-bold text-red-400 mb-2">
                    O Cerco Silencioso
                  </h3>
                  <p className="text-sm text-gray-400">
                    Alguns observadores notaram um padrão inquietante: distritos específicos estão sendo sistematicamente isolados através de "melhorias de infraestrutura", novos postos de controle da Guardian, e aquisições estratégicas de propriedades por um consórcio anônimo.
                  </p>
                  <div className="mt-2 px-3 py-1 bg-red-900/30 border border-red-800 rounded text-xs text-gray-400 italic">
                    "Eles estão cercando a cidade de dentro para fora."
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black border border-red-900/70  mb-4">
                <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center">
                  <Skull className="w-4 h-4 mr-2" /> A Morte de Marcos da ZL
                </h3>
                <p className="text-gray-400">
                  O assassinato de Marcos, importante líder do Comando, em um bar no Tatuapé permanece sem solução. A explosão atingiu precisamente sua mesa, matando-o instantaneamente junto com outro membro do Comando. As câmeras de segurança foram desativadas momentos antes, e apenas um bartender com olho biônico pode ter registrado o ocorrido.
                </p>
                <p className="text-gray-400 mt-2">
                  As versões oficiais apontam para rivalidades internas no Comando, mas rumores persistentes ligam sua morte a oposição a um "cerco" planejado por forças maiores. A morte aconteceu poucos dias após Marcos supostamente ter expressado descontentamento com novas diretrizes em uma reunião fechada.
                </p>
              </div>

              <p className="text-center font-mono text-sm text-gray-500">
                ALERTAS DE CREDIBILIDADE BAIXA - VERIFIQUE FONTES
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lore;