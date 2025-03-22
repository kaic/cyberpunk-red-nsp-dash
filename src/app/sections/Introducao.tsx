"use client";

import React, { useEffect, useState } from "react";
import CyberpunkText from "../components/CyberpunkText";
import Link from "next/link";
import { neonTheme as theme } from "../theme";

import cyberpunkQuotes from "../data/quotes.json";


const Introducao: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    // Select a random quote when component mounts
    const randomIndex = Math.floor(Math.random() * cyberpunkQuotes.length);
    setRandomQuote(cyberpunkQuotes[randomIndex]);
  }, []);
  return (
    <div className="relative z-10">
      <h1
        className={`text-4xl font-bold mb-6 text-${theme.primary} flex items-center pb-2`}
      >
        <CyberpunkText>Nova São Paulo</CyberpunkText>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div
          className={`bg-black p-3  border border-${theme.accent2Dark} text-center`}
        >
          <div className={`text-${theme.accent1} font-mono text-sm`}>
            ANO
          </div>
          <div className="text-white text-lg font-bold">2133</div>
        </div>
        <div
          className={`bg-black p-3  border border-${theme.accent2Dark} text-center`}
        >
          <div className={`text-${theme.accent1} font-mono text-sm`}>
            SECESSÃO
          </div>
          <div className="text-white text-lg font-bold">2099</div>
        </div>
        <div
          className={`bg-black p-3  border border-${theme.accent2Dark} text-center`}
        >
          <div className={`text-${theme.accent1} font-mono text-sm`}>
            POPULAÇÃO
          </div>
          <div className="text-white text-lg font-bold">50M+</div>
        </div>
        <div
          className={`bg-black p-3  border border-${theme.accent2Dark} text-center`}
        >
          <div className={`text-${theme.accent1} font-mono text-sm`}>
            STATUS
          </div>
          <div className="text-white text-sm md:text-md font-bold">INDEPENDENTE</div>
        </div>
        <div
          className={`bg-black p-3  border border-${theme.accent2Dark} text-center`}
        >
          <div className={`text-${theme.accent1} font-mono text-sm`}>
            CONTROLE
          </div>
          <div className="text-white text-lg font-bold">DIVIDIDO</div>
        </div>
      </div>

      {/* Boas-vindas */}
      <section className={`p-6  mb-8 bg-black/90 border border-${theme.primaryDark} relative overflow-hidden`}>
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-${theme.primaryDark}/15 to-transparent -z-0`}></div>

        <div className="relative z-10">
          <h2 className={`text-2xl font-bold mb-4 text-${theme.primary} flex items-center`}>
            Bem-vindo ao Futuro
          </h2>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className={`text-${theme.primary} font-bold`}>2133</span>. O ar poluído paira sobre os arranha-céus de Nova São Paulo, uma
              cidade-estado que, há quase quatro décadas, rompeu com o Brasil em
              uma guerra civil sangrenta. A metrópole independente, uma vez
              vibrante e próspera, agora é um campo de batalha urbano, onde mais
              de 50 milhões de almas lutam pela sobrevivência em meio a uma
              paisagem de concreto e aço.
            </p>
            <p>
              Após a queda do governo federal em 2092, São Paulo declarou independência em meio ao caos. Os <span className={`text-${theme.accent1}`}>34 dias de fogo</span> que se seguiram transformaram a metrópole em uma cidade-estado controlada por corporações, onde tecnologia de ponta coexiste com miséria absoluta. A Guardian, força policial militarizada, mantém uma ordem frágil sob a fachada de "segurança para todos".
            </p>
            <p>
              Dizem que aqui os ricos vivem no céu e os pobres morrem no chão. No meio, fica todo mundo else — mercenários, fixers, runners e techs tentando subir ou, pelo menos, não afundar. A vida é uma moeda, choomba, e em Nova São Paulo, todo mundo tem seu preço.
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <Link
              href="/intro"
              className={`inline-block bg-${theme.primaryDark}/50 hover:bg-${theme.primaryDark} text-${theme.primary} py-2 px-4 rounded-md border border-${theme.primary}/50 transition-all duration-300 hover:shadow-glow-sm`}
            >
              Ler Capítulo Inicial →
            </Link>
          </div>
        </div>
      </section>

      {/* A Cidade */}
      <div
        className={`p-6  shadow-lg bg-black border border-${theme.primaryDark} mb-8 relative`}
      >
        <div className="relative z-10">
          <h2
            className={`text-2xl font-bold mb-4 text-${theme.primary} flex items-center`}
          >
            <span className="mr-2">🏙️</span> A Cidade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className={`text-${theme.primary} mr-2 mt-1`}>•</span>
                <p className="text-gray-300">
                  <span className={`text-${theme.primary} font-bold`}>
                    Megaestruturas
                  </span>{" "}
                  dominam o horizonte, com colossos arquitetônicos competindo
                  por atenção com anúncios holográficos e letreiros de néon.
                  Algumas corporações ostentam torres que tocam as nuvens,
                  enquanto outras áreas são dominadas por estruturas abandonadas
                  e decadentes.
                </p>
              </div>
              <div className="flex items-start">
                <span className={`text-${theme.primary} mr-2 mt-1`}>•</span>
                <p className="text-gray-300">
                  <span className={`text-${theme.primary} font-bold`}>
                    Névoa de poluição
                  </span>{" "}
                  permanente tinge o céu de tons acinzentados, enfatizando a
                  atmosfera sombria. A chuva ácida ocasional corrói lentamente
                  as fachadas dos edifícios, marcando a paisagem com sinais de
                  deterioração química.
                </p>
              </div>
              <div className="flex items-start">
                <span className={`text-${theme.primary} mr-2 mt-1`}>•</span>
                <p className="text-gray-300">
                  <span className={`text-${theme.primary} font-bold`}>
                    Emaranhado urbano
                  </span>{" "}
                  de vias expressas elevadas, vielas escuras e becos que servem
                  como território para gangues e contrabandistas. A vida nas
                  alturas é movimentada, com o constante zumbido de veículos
                  voadores e drones que patrulham os céus.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className={`text-${theme.primary} mr-2 mt-1`}>•</span>
                <p className="text-gray-300">
                  <span className={`text-${theme.primary} font-bold`}>
                    Arte urbana
                  </span>{" "}
                  marca as paredes da cidade como canvas para manifestações de
                  resistência. Grafites e murais narram a história do povo,
                  frequentemente apagados e reescritos conforme o ciclo
                  interminável de protestos e repressão continua.
                </p>
              </div>
              <div className="flex items-start">
                <span className={`text-${theme.primary} mr-2 mt-1`}>•</span>
                <p className="text-gray-300">
                  <span className={`text-${theme.primary} font-bold`}>
                    Abismo social
                  </span>{" "}
                  divide a população entre os beneficiados pelas corporações e
                  os que lutam para sobreviver. A polarização política é
                  evidente em cada esquina, com fronteiras fluidas entre
                  territórios e conflitos constantes pelo controle de recursos.
                </p>
              </div>
              <div className="flex items-start">
                <span className={`text-${theme.primary} mr-2 mt-1`}>•</span>
                <p className="text-gray-300">
                  <span className={`text-${theme.primary} font-bold`}>
                    Distritos únicos
                  </span>
                  , cada um com identidade própria e características marcantes –
                  de bairros corporativos reluzentes a zonas de quarentena
                  controladas pelo estado, passando por distritos de
                  entretenimento decadentes e guetos dominados por gangues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conflito Atual */}
      <section className={`p-6  mb-8 bg-black/90 border border-${theme.primaryDark} relative`}>
        <h2 className={`text-2xl font-bold mb-5 text-${theme.primary} flex items-center`}>
            <span className="mr-2">🔥</span> Tensões Atuais
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-md bg-gradient-to-b from-${theme.accent1Dark}/20 to-black/60 border border-${theme.accent1Dark}/50`}>
            <h3 className={`text-${theme.accent1} font-bold mb-2 border-b border-${theme.accent1Dark}/30 pb-1`}>
              O Martírio de Well
            </h3>
            <p className="text-gray-300 text-sm">
              A morte de Well durante um protesto pacífico tornou-se símbolo da resistência contra a Guardian. Seu rosto agora aparece em murais por toda cidade, unindo facções antes rivais contra a opressão crescente.
            </p>
          </div>

          <div className={`p-4 rounded-md bg-gradient-to-b from-${theme.secondaryDark}/20 to-black/60 border border-${theme.secondaryDark}/50`}>
            <h3 className={`text-${theme.secondary} font-bold mb-2 border-b border-${theme.secondaryDark}/30 pb-1`}>
              Controle das Fronteiras
            </h3>
            <p className="text-gray-300 text-sm">
              A Guardian assumiu controle total das entradas e saídas da cidade, criando um estado de quarentena virtual. Este movimento beneficia as corporações enquanto sufoca pequenos negócios e alimenta revoltas populares nos distritos periféricos.
            </p>
          </div>

          <div className={`p-4 rounded-md bg-gradient-to-b from-${theme.primaryDark}/20 to-black/60 border border-${theme.primaryDark}/50`}>
            <h3 className={`text-${theme.primary} font-bold mb-2 border-b border-${theme.primaryDark}/30 pb-1`}>
              Projetos Misteriosos
            </h3>
            <p className="text-gray-300 text-sm">
              "Omega" e "Alpha" — codinomes que circulam nos submundos da rede. Rumores os conectam à misteriosa droga "CyberJenkins" e às mortes de figuras-chave. Alguns sugerem ligação com "O Cartel", uma suposta aliança entre corporações e crime organizado.
            </p>
          </div>
        </div>
      </section>

      {/* Vida Noturna */}
      <div
        className={`p-6  shadow-lg bg-black border border-${theme.primaryDark} mb-8 relative`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-${theme.accent2Dark}/10 to-${theme.secondaryDark}/10 -z-0`}
        ></div>
        <div className="relative z-10">
          <h2
            className={`text-2xl font-bold mb-4 text-${theme.primary} flex items-center`}
          >
            <span className="mr-2">🌃</span> Vida Noturna
          </h2>

          <p className="text-gray-300 mb-4">
            À medida que o sol se põe, os neons ganham vida, revelando uma
            miríade de estabelecimentos noturnos. De clubes decadentes a
            mercados negros onde se pode encontrar de tudo, a vida noturna de
            Nova São Paulo é um espetáculo caótico onde perigo e oportunidade
            caminham lado a lado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div
              className={`bg-black/60 p-3 rounded border border-${theme.accent2Dark}`}
            >
              <h3 className={`text-${theme.accent2} font-bold mb-1`}>Clubes</h3>
              <p className="text-gray-400 text-sm">
                Música alta, drogas sintéticas e dançarinos aprimorados com
                cyberware entretêm os notívagos. Cada clube tem seu próprio
                nicho e clientela, desde estabelecimentos exclusivos para
                corporativos até boates subterrâneas.
              </p>
            </div>

            <div
              className={`bg-black/60 p-3 rounded border border-${theme.accent1Dark}`}
            >
              <h3 className={`text-${theme.accent1} font-bold mb-1`}>
                Mercados Negros
              </h3>
              <p className="text-gray-400 text-sm">
                Armas, drogas, cyberware e informações trocam de mãos em segredo
                nas sombras da cidade. Estes mercados são efêmeros, mudando
                constantemente de localização para evitar a Guardian.
              </p>
            </div>

            <div
              className={`bg-black/60 p-3 rounded border border-${theme.secondaryDark}`}
            >
              <h3 className={`text-${theme.secondary} font-bold mb-1`}>
                Bares
              </h3>
              <p className="text-gray-400 text-sm">
                Do luxuoso ao decadente, cada estabelecimento tem sua própria
                clientela e regras não escritas. Muitos servem como centros de
                informação e encontro para fixers, mercenários e todos que vivem
                às margens da sociedade.
              </p>
            </div>
          </div>

          <p className="text-gray-300">
            Para muitos habitantes da cidade, a noite é quando os verdadeiros
            negócios acontecem. Informações valiosas são trocadas, contatos são
            feitos, e aqueles com as habilidades certas podem encontrar trabalho
            lucrativo - embora frequentemente perigoso.
          </p>
        </div>
      </div>

      {/* Citação de conclusão */}
      <div
        className={`mt-8 p-6  border border-${theme.primaryDark} bg-black relative`}
      >
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div className="h-full overflow-hidden">
            <div className="h-full w-full">
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className={`text-${theme.primary} text-xs opacity-70 font-mono whitespace-nowrap`}
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
            {randomQuote.quote.split('. ').map((part, index, array) => (
              index < array.length - 1 ? (
                <span key={index}>
                  {part}.
                  {index === 0 && array.length > 1 && <span className="block mt-2"></span>}
                </span>
              ) : (
                <span key={index}>{part}</span>
              )
            ))}
          </blockquote>
          <p className={`text-right text-${theme.primary} mt-4 font-mono`}>
            — {randomQuote.author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introducao;



