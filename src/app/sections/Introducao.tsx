"use client";

import React from "react";
import GlitchText from "../components/GlitchText";
import Link from "next/link";

const Introducao: React.FC = () => {
  return (
    <div className="relative z-10">
          {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">🏛️</span>
              <GlitchText>NOVA SÃO PAULO 2133</GlitchText>
      </h1>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="bg-black p-3 rounded-lg border border-green-900 text-center">
                  <div className="text-green-400 font-mono text-sm">POPULAÇÃO</div>
                  <div className="text-white text-2xl font-bold">50M+</div>
              </div>
              <div className="bg-black p-3 rounded-lg border border-green-900 text-center">
                  <div className="text-green-400 font-mono text-sm">STATUS</div>
                  <div className="text-white text-2xl font-bold">INDEPENDENTE</div>
              </div>
              <div className="bg-black p-3 rounded-lg border border-green-900 text-center">
                  <div className="text-green-400 font-mono text-sm">SECESSÃO</div>
                  <div className="text-white text-2xl font-bold">2099</div>
              </div>
              <div className="bg-black p-3 rounded-lg border border-green-900 text-center">
                  <div className="text-green-400 font-mono text-sm">CONTROLE</div>
                  <div className="text-white text-2xl font-bold">DIVIDIDO</div>
              </div>
          </div>

          {/* Boas-vindas */}
          <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden mb-8">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/10 to-blue-900/5 -z-0"></div>
        <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                      <span className="mr-2">💊</span> Bem-vindo a Nova São Paulo
                  </h2>

                  <div className="mb-4 text-lg text-gray-300">
                      <p className="mb-4">
                          <span className="text-green-400 font-bold">Ano 2133</span>. O ar poluído paira sobre os arranha-céus de Nova São Paulo, uma cidade-estado que, há quase quatro décadas, rompeu com o Brasil em uma guerra civil sangrenta. A metrópole independente, uma vez vibrante e próspera, agora é um campo de batalha urbano, onde mais de 50 milhões de almas lutam pela sobrevivência em meio a uma paisagem de concreto e aço.
                      </p>
                      <p className="mb-4">
                          A cidade independente foi forjada nas chamas da guerra civil de secessão de 2099, um conflito que deixou cicatrizes profundas tanto na paisagem quanto na psique de seus habitantes. Hoje, é um labirinto metropolitano que se estende por quilômetros, onde o caos predomina e a sobrevivência é a única regra consistente.
                      </p>
                  </div>

                  <div className="flex justify-end">
                      <Link
                          href="/intro"
                          className="inline-block bg-green-900/50 hover:bg-green-900 text-green-400 py-2 px-4 rounded-lg border border-green-700"
                      >
                          Ler Capítulo Inicial →
                      </Link>
                  </div>
              </div>
          </div>

          {/* A Cidade */}
          <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative">
              <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                      <span className="mr-2">🏙️</span> A Cidade
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                          <div className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <p className="text-gray-300">
                                  <span className="text-green-400 font-bold">Megaestruturas</span> dominam o horizonte, com colossos arquitetônicos competindo por atenção com anúncios holográficos e letreiros de néon. Algumas corporações ostentam torres que tocam as nuvens, enquanto outras áreas são dominadas por estruturas abandonadas e decadentes.
                              </p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <p className="text-gray-300">
                                  <span className="text-green-400 font-bold">Névoa de poluição</span> permanente tinge o céu de tons acinzentados, enfatizando a atmosfera sombria. A chuva ácida ocasional corrói lentamente as fachadas dos edifícios, marcando a paisagem com sinais de deterioração química.
                              </p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <p className="text-gray-300">
                                  <span className="text-green-400 font-bold">Emaranhado urbano</span> de vias expressas elevadas, vielas escuras e becos que servem como território para gangues e contrabandistas. A vida nas alturas é movimentada, com o constante zumbido de veículos voadores e drones que patrulham os céus.
                              </p>
                          </div>
                      </div>
                      <div className="space-y-3">
                          <div className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <p className="text-gray-300">
                                  <span className="text-green-400 font-bold">Arte urbana</span> marca as paredes da cidade como canvas para manifestações de resistência. Grafites e murais narram a história do povo, frequentemente apagados e reescritos conforme o ciclo interminável de protestos e repressão continua.
                              </p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <p className="text-gray-300">
                                  <span className="text-green-400 font-bold">Abismo social</span> divide a população entre os beneficiados pelas corporações e os que lutam para sobreviver. A polarização política é evidente em cada esquina, com fronteiras fluidas entre territórios e conflitos constantes pelo controle de recursos.
                              </p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-green-500 mr-2 mt-1">•</span>
                              <p className="text-gray-300">
                                  <span className="text-green-400 font-bold">Distritos únicos</span>, cada um com identidade própria e características marcantes – de bairros corporativos reluzentes a zonas de quarentena controladas pelo estado, passando por distritos de entretenimento decadentes e guetos dominados por gangues.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Poder e Controle - Gangues e Corporações */}
          <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative">
              <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                      <span className="mr-2">⚔️</span> Poder e Controle
                  </h2>

                  <div className="mb-6">
                      <p className="text-gray-300 mb-4">
                          Em Nova São Paulo, o poder real está dividido entre entidades que se enfrentam constantemente por território, influência e recursos. Gangues controlam as ruas, corporações manipulam a economia, e forças de segurança mantêm uma ordem precária através de métodos questionáveis.
                      </p>
                  </div>

                  {/* Gangues */}
                  <h3 className="text-xl font-bold mb-3 text-red-400 border-b border-red-900/50 pb-1">GANGUES</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 bg-black/50 border border-red-900/50 rounded-lg">
                          <h4 className="text-red-400 font-bold mb-2">TOs - Torcidas Organizadas</h4>
                          <p className="text-gray-300 text-sm mb-2">
                              Dominam os distritos mais populares e empobrecidos. Suas atividades vão além do fanatismo esportivo, controlando tráfico de drogas, extorsões e apostas ilícitas.
                          </p>
                          <p className="text-gray-300 text-sm mb-2">
                              Cada TO tem suas próprias cores e símbolos, com rituais de iniciação brutais e códigos de lealdade extremos. Apesar da rivalidade entre as torcidas, elas se unem contra inimigos comuns.
                          </p>
                          <p className="text-gray-300 text-sm">
                              Lideradas por "Ultras", uma figura carismática que canaliza a raiva da população e é temida pelas autoridades.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-red-900/50 rounded-lg">
                          <h4 className="text-red-400 font-bold mb-2">Comando Cyberpunk</h4>
                          <p className="text-gray-300 text-sm mb-2">
                              Máfia que controla as áreas mais sombrias da cidade. Seu alcance vai desde o tráfico de drogas até esquemas de jogo ilegal e extorsões, com tentáculos infiltrados em negócios legítimos.
                          </p>
                          <p className="text-gray-300 text-sm mb-2">
                              Segue uma hierarquia estrita, com chefes que lideram diferentes aspectos do império criminoso. Traição é punida com extrema violência.
                          </p>
                          <p className="text-gray-300 text-sm">
                              Apesar de suas atividades ilícitas, o Comando segue códigos de conduta próprios, impondo sua versão de ordem nas áreas sob seu controle.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-red-900/50 rounded-lg">
                          <h4 className="text-red-400 font-bold mb-2">BitMarauders (Raul)</h4>
                          <p className="text-gray-300 text-sm mb-2">
                              Operam nas altas esferas financeiras, com tentáculos estendidos por corporações e instituições bancárias. Especializam-se em crimes financeiros sofisticados, lavagem de dinheiro e corrupção.
                          </p>
                          <p className="text-gray-300 text-sm mb-2">
                              Diferente das gangues convencionais, apresentam-se com elegância e sofisticação. Trajes caros escondem uma crueldade impiedosa.
                          </p>
                          <p className="text-gray-300 text-sm">
                              Liderados por um visionário implacável que manipula as engrenagens financeiras da cidade para seus próprios interesses.
                          </p>
                      </div>
                  </div>

                  {/* Corporações */}
                  <h3 className="text-xl font-bold mb-3 text-blue-400 border-b border-blue-900/50 pb-1">CORPORAÇÕES</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-black/50 border border-blue-900/50 rounded-lg">
                          <h4 className="text-blue-400 font-bold mb-2">SynthCorp</h4>
                          <p className="text-gray-300 text-sm mb-2">
                              Potência na vanguarda da tecnologia, especializada em inteligência artificial, cibernética avançada e realidade virtual. Controla grande parte do mercado de inovação tecnológica.
                          </p>
                          <p className="text-gray-300 text-sm">
                              Exerce influência significativa sobre o governo, moldando políticas que favorecem a expansão tecnológica. Sua sede imponente é uma torre futurista que domina o horizonte.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-blue-900/50 rounded-lg">
                          <h4 className="text-blue-400 font-bold mb-2">AgroGen</h4>
                          <p className="text-gray-300 text-sm mb-2">
                              Controla a cadeia alimentar da cidade, desde experimentação genética até produção em larga escala. Mantém um monopólio eficaz sobre os recursos agrícolas.
                          </p>
                          <p className="text-gray-300 text-sm">
                              Possui vastas áreas rurais controladas por drones e seguranças altamente treinados, além de instalações de pesquisa afastadas da metrópole.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-blue-900/50 rounded-lg">
                          <h4 className="text-blue-400 font-bold mb-2">BionTech</h4>
                          <p className="text-gray-300 text-sm mb-2">
                              Força dominante na indústria médica, controlando desde clínicas de alta tecnologia até pesquisa avançada em biotecnologia.
                          </p>
                          <p className="text-gray-300 text-sm">
                              Está na vanguarda da bioengenharia, oferecendo a clientes privilegiados melhorias genéticas e órgãos cultivados em laboratório, enquanto as massas enfrentam serviços de saúde básicos e superlotados.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-blue-900/50 rounded-lg">
                          <h4 className="text-blue-400 font-bold mb-2">MiliTech</h4>
                          <p className="text-gray-300 text-sm mb-2">
                              Líder indiscutível na produção de equipamentos de segurança e defesa. Fornece desde armaduras corporais até armas avançadas para forças policiais e privadas.
                          </p>
                          <p className="text-gray-300 text-sm">
                              Controla uma poderosa força de segurança privada que patrulha bairros corporativos e áreas de alto valor. Sua influência se estende além dos muros das empresas, moldando a própria paisagem urbana.
                          </p>
                      </div>
                  </div>

                  {/* Guardian */}
                  <h3 className="text-xl font-bold mb-3 text-yellow-400 border-b border-yellow-900/50 pb-1">FORÇAS DE SEGURANÇA</h3>
                  <div className="p-4 bg-black/50 border border-yellow-900/50 rounded-lg mb-6">
                      <h4 className="text-yellow-400 font-bold mb-2">Guardian</h4>
                      <p className="text-gray-300 mb-2">
                          Principal força policial de Nova São Paulo, a Guardian mantém uma ordem opressora através de métodos questionáveis. Recentemente ganhou controle absoluto sobre todas as entradas e saídas da cidade, intensificando sua influência.
                      </p>
                      <p className="text-gray-300">
                          Equipada com tecnologia militar fornecida pela MiliTech, seus agentes são temidos pela população, especialmente nas áreas mais pobres. Não é incomum que a Guardian ignore crimes cometidos por corporações ou por aqueles com influência política suficiente.
                      </p>
                  </div>
              </div>
          </div>

          {/* Conflito Atual */}
          <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative">
              <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                      <span className="mr-2">🔥</span> Tensões Atuais
                  </h2>

                  <div className="bg-gradient-to-r from-red-900/20 to-transparent p-4 rounded-lg mb-4">
                      <h3 className="text-red-400 font-bold mb-2">O Martírio de Well</h3>
                      <p className="text-gray-300 mb-2">
                          A morte trágica de Well, um talentoso estudante de engenharia psíquica, durante um protesto em Nova Pinheiros, tornou-se um símbolo de resistência. Seu grupo se opunha à recente lei que concedia à Guardian o controle absoluto sobre as entradas e saídas da cidade.
                      </p>
                      <p className="text-gray-300">
                          Desde sua morte, manifestações em seu nome começaram a eclodir em diversos distritos, com murais e grafites retratando seu rosto se tornando símbolos de resistência contra a opressão.
                      </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-4 rounded-lg mb-4">
                      <h3 className="text-blue-400 font-bold mb-2">O Controle das Fronteiras</h3>
                      <p className="text-gray-300 mb-2">
                          A Guardian recentemente ganhou controle absoluto sobre as entradas e saídas da cidade, gerando protestos e revoltas. Esta mudança beneficia diretamente as grandes corporações, que agora têm maior controle sobre o fluxo de mercadorias e pessoas.
                      </p>
                      <p className="text-gray-300">
                          Diversos grupos rebeldes surgiram, unindo-se contra o que veem como mais uma forma de opressão sobre a população. A tensão nas ruas cresce a cada dia, com confrontos cada vez mais frequentes.
                      </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-900/20 to-transparent p-4 rounded-lg">
                      <h3 className="text-green-400 font-bold mb-2">Projetos Misteriosos</h3>
                      <p className="text-gray-300 mb-2">
                          Rumores sobre os misteriosos "Projeto Omega" e "Projeto Alpha" começaram a circular nas ruas. Informações fragmentadas sugerem que estão relacionados à droga conhecida como "CyberJenkins", que tem causado efeitos psicoativos estranhos entre seus usuários.
                      </p>
                      <p className="text-gray-300">
                          Alguns falam sobre "O Cartel", uma suposta aliança secreta entre as principais corporações e organizações criminosas, com possível envolvimento na morte de figuras-chave como Marcos da ZL e potencialmente o próprio Well.
                      </p>
                  </div>
              </div>
          </div>

          {/* Locais Importantes */}
          <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative">
              <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                      <span className="mr-2">📍</span> Locais Importantes
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-black/50 border border-green-900/50 rounded-lg">
                          <h3 className="text-green-400 font-bold mb-2">Hospital "A Caldeira"</h3>
                          <p className="text-gray-300 text-sm">
                              Localizado em uma área disputada, este hospital clandestino oferece serviços médicos para aqueles que não podem pagar pelos preços exorbitantes da BionTech. Equipamentos improvisados e médicos que perderam suas licenças tornam cada procedimento uma roleta-russa, mas para muitos, é a única opção.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-green-900/50 rounded-lg">
                          <h3 className="text-green-400 font-bold mb-2">Laboratório de Jenkins</h3>
                          <p className="text-gray-300 text-sm">
                              Um dos principais locais de produção do CyberJenkins, droga sintética com estranhos efeitos psicoativos. O laboratório muda constantemente de localização para evitar as autoridades, mas seus produtos estão cada vez mais disponíveis nas ruas.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-green-900/50 rounded-lg">
                          <h3 className="text-green-400 font-bold mb-2">A Floresta (Balada)</h3>
                          <p className="text-gray-300 text-sm">
                              Um dos pontos centrais da vida noturna em Pinheiros, este clube serve como local de encontro para fixers, runners e mercenários. Por trás da fachada de entretenimento, negócios são feitos e informações valiosas trocam de mãos.
                          </p>
                      </div>

                      <div className="p-4 bg-black/50 border border-green-900/50 rounded-lg">
                          <h3 className="text-green-400 font-bold mb-2">Praça da Sé</h3>
                          <p className="text-gray-300 text-sm">
                              Antigo centro cultural agora transformado em zona de conflito constante. A praça se tornou ponto frequente de manifestações contra a Guardian e as corporações, frequentemente resultando em confrontos violentos.
                          </p>
                      </div>
          </div>
        </div>
      </div>

          {/* Vida Noturna */}
          <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-blue-900/10 -z-0"></div>
        <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                      <span className="mr-2">🌃</span> Vida Noturna
          </h2>

                  <p className="text-gray-300 mb-4">
                      À medida que o sol se põe, os neons ganham vida, revelando uma miríade de estabelecimentos noturnos. De clubes decadentes a mercados negros onde se pode encontrar de tudo, a vida noturna de Nova São Paulo é um espetáculo caótico onde perigo e oportunidade caminham lado a lado.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div className="bg-black/60 p-3 rounded border border-purple-900">
                          <h3 className="text-purple-400 font-bold mb-1">Clubes</h3>
                          <p className="text-gray-400 text-sm">
                              Música alta, drogas sintéticas e dançarinos aprimorados com cyberware entretêm os notívagos. Cada clube tem seu próprio nicho e clientela, desde estabelecimentos exclusivos para corporativos até boates subterrâneas.
                          </p>
                      </div>

                      <div className="bg-black/60 p-3 rounded border border-pink-900">
                          <h3 className="text-pink-400 font-bold mb-1">Mercados Negros</h3>
                          <p className="text-gray-400 text-sm">
                              Armas, drogas, cyberware e informações trocam de mãos em segredo nas sombras da cidade. Estes mercados são efêmeros, mudando constantemente de localização para evitar a Guardian.
                          </p>
                      </div>

                      <div className="bg-black/60 p-3 rounded border border-blue-900">
                          <h3 className="text-blue-400 font-bold mb-1">Bares</h3>
                          <p className="text-gray-400 text-sm">
                              Do luxuoso ao decadente, cada estabelecimento tem sua própria clientela e regras não escritas. Muitos servem como centros de informação e encontro para fixers, mercenários e todos que vivem às margens da sociedade.
                          </p>
                      </div>
                  </div>

          <p className="text-gray-300">
                      Para muitos habitantes da cidade, a noite é quando os verdadeiros negócios acontecem. Informações valiosas são trocadas, contatos são feitos, e aqueles com as habilidades certas podem encontrar trabalho lucrativo - embora frequentemente perigoso.
          </p>
        </div>
      </div>

          {/* Citação de conclusão */}
          <div className="mt-8 p-6 rounded-lg border border-green-900 bg-black relative">
              <div className="absolute inset-0 opacity-5 overflow-hidden">
                  <div className="h-full overflow-hidden">
                      <div className="h-full w-full">
                          {Array(10)
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
              <div className="relative z-10">
                  <blockquote className="text-xl text-gray-300 italic text-center">
                      "Nova São Paulo devora os fracos e corrompe os fortes.
                      <span className="block mt-2">
                          Escolha seu veneno com sabedoria, choom."
                      </span>
                  </blockquote>
                  <p className="text-right text-green-400 mt-4 font-mono">— Fixer anônimo</p>
              </div>
          </div>
    </div>
  );
};

export default Introducao;