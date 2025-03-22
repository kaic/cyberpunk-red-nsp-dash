"use client";

import React from "react";
import Link from "next/link";
import CyberpunkText from "../components/CyberpunkText";
import { neonTheme as theme } from "../theme";

const CapituloUmIntroducao = () => {
  return (
    <div className="p-6 relative z-10 max-w-4xl mx-auto">
      {/* Header with Title and Back Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-5xl font-bold text-${theme.primary} flex items-center`}>
          <span className="mr-3">📚</span>
          <CyberpunkText>Introdução</CyberpunkText>
        </h1>
        <Link
          href="/"
          className={`bg-${theme.primaryDark}/50 hover:bg-${theme.primaryDark} text-${theme.primary} py-2 px-4 rounded-md border border-${theme.primary}/70 transition-all duration-300 hover:shadow-glow-sm`}
        >
          Voltar
        </Link>
      </div>

      {/* Main Content */}
      <div className={`p-6  shadow-lg bg-black/90 border border-${theme.primaryDark} relative overflow-hidden mb-8`}>
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-${theme.primaryDark}/15 to-transparent -z-0`}></div>

        <div className="relative z-10">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className={`text-${theme.primary} font-bold`}>Ano 2133</span>. O ar poluído paira sobre os arranha-céus de Nova São
              Paulo, uma cidade que, há quase quatro décadas, rompeu os laços
              com o Brasil em uma guerra civil sangrenta. A metrópole
              independente, uma vez vibrante e próspera, agora é um campo de
              batalha urbano, onde mais de 50 milhões de almas lutam pela
              sobrevivência em meio a uma paisagem de concreto e aço.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Nova São Paulo, a cidade independente forjada nas chamas da <span className={`text-${theme.accent1}`}>guerra
                civil de secessão de 2099</span>, é um labirinto metropolitano que se
              estende por quilômetros de concreto, aço e neon. O panorama urbano
              é uma fusão caótica de arranha-céus imponentes, viadutos
              congestionados, e favelas verticais que se agarram às estruturas
              como parasitas urbanos.
            </p>

            <div className={`my-8 p-5 rounded-md bg-black/70`}>
              <h3 className={`text-xl font-bold mb-4 text-${theme.accent2} border-b border-${theme.accent2Dark}/50 pb-2`}>
                PAISAGEM URBANA
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className={`text-${theme.accent2} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.accent2} font-bold`}>Colossos arquitetônicos</span> dominam o horizonte, competindo pela
                    atenção com anúncios holográficos e letreiros de néon. Algumas
                    corporações ostentam torres que tocam as nuvens, enquanto
                    outras áreas urbanas são dominadas por estruturas abandonadas
                    e decadentes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`text-${theme.accent2} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.accent2} font-bold`}>Névoa perpétua</span> de poluição paira sobre a cidade, tingindo
                    o céu de tons acinzentados e enfatizando a atmosfera sombria.
                    A chuva ácida ocasionalmente cai, corroendo lentamente as
                    fachadas dos edifícios.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`text-${theme.accent2} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.accent2} font-bold`}>Distritos únicos</span> - cada área com identidade própria. De bairros corporativos reluzentes a zonas de
                    quarentena controladas pelo estado, passando por distritos de
                    entretenimento decadentes e guetos dominados por gangues, cada
                    território conta uma história distinta de desigualdade e desespero.
                  </span>
                </li>
              </ul>
            </div>

            <div className={`my-8 p-5 rounded-md bg-black/70`}>
              <h3 className={`text-xl font-bold mb-4 text-${theme.secondary} border-b border-${theme.secondaryDark}/50 pb-2`}>
                VIDA NAS RUAS
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className={`text-${theme.secondary} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.secondary} font-bold`}>Arte urbana</span> transforma as paredes da cidade em manifestos visuais, muitas vezes com mensagens de resistência contra as
                    corporações e o controle estatal. Grafites e murais narram a
                    história do povo, apagados e reescritos no ciclo interminável de protestos e repressão.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`text-${theme.secondary} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.secondary} font-bold`}>Rede viária caótica</span> - vias
                    expressas elevadas, vielas escuras e becos que servem como
                    território para gangues e contrabandistas. A vida nas alturas
                    é movimentada, com o constante zumbido de veículos voadores e
                    drones de vigilância.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`text-${theme.secondary} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.secondary} font-bold`}>Divisão social</span> - a cidade está fraturada entre ricos e pobres, entre aqueles que
                    se beneficiam das corporações e aqueles que lutam para
                    sobreviver. A polarização política é evidente em cada esquina, com grafites, pichações e cartazes clamando por justiça.
                  </span>
                </li>
              </ul>
            </div>

            <div className={`my-8 p-5 rounded-md bg-black/70`}>
              <h3 className={`text-xl font-bold mb-4 text-${theme.accent1} border-b border-${theme.accent1Dark}/50 pb-2`}>
                CONTROLE TERRITORIAL
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className={`text-${theme.accent1} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.accent1} font-bold`}>Território em disputa</span> - algumas áreas são controladas por gangues impiedosas, enquanto
                    outras estão sob o domínio direto de corporações poderosas. As
                    fronteiras entre esses territórios são fluidas, com conflitos
                    constantes pelo controle de recursos e influência.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`text-${theme.accent1} mr-3 text-xl`}>•</span>
                  <span>
                    <span className={`text-${theme.accent1} font-bold`}>Vida noturna</span> - à medida que o sol se põe, os neons ganham vida, revelando uma
                    miríade de estabelecimentos noturnos. De clubes decadentes a
                    mercados negros onde se pode encontrar de tudo, a vida noturna
                    de Nova São Paulo é um espetáculo caótico de luzes, sons e perigos.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A guerra deixou cicatrizes profundas na cidade, transformando sua
              paisagem e a psique de seus habitantes. Nova São Paulo é uma terra
              de oportunidades e perigos, onde predomina o caos. Gangues
              controlam ruas escuras e becos, corporações exercem sua influência
              nos bastidores do poder, a <span className={`text-${theme.accent2} font-bold`}>Guardian</span> mantém uma ordem
              opressora, enquanto forças privadas agem com interesses próprios.
              Em cada esquina, o crime floresce, alimentando-se do desespero de
              uma população que luta para sobreviver.
            </p>

            <div className={`my-6 p-5 rounded-md bg-gradient-to-r from-${theme.primaryDark}/20 to-transparent`}>
              <p className="text-gray-300 italic mb-0">
                A centelha da revolta se acendeu ainda mais com a morte trágica de
                <span className={`text-${theme.primary} font-bold`}> Well</span>, um talentoso estudante de engenharia psíquica, durante um
                protesto em Nova Pinheiros. Seu grupo, formado por mentes rebeldes
                que se opunham à recente lei que concedia à Guardian o controle
                absoluto sobre as entradas e saídas da cidade, agora se tornou um
                símbolo de resistência contra a opressão corporativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapituloUmIntroducao;