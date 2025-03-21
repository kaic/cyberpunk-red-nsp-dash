import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlitchText from "../components/GlitchText";

const CapituloUmIntroducao: React.FC = () => {
  // Estado para renderização client-side
  const [isClient, setIsClient] = useState(false);
  
  // Executar apenas no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="p-6 relative z-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-green-400 flex items-center">
          <span className="mr-2">📚</span>
          <GlitchText>Introdução</GlitchText>
        </h1>
        <Link
          href="/"
          className="bg-green-900/50 hover:bg-green-900 text-green-400 py-2 px-4 rounded-lg border border-green-700"
        >
          Voltar
        </Link>
      </div>

      {/* Conteúdo principal */}
      <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden mb-8">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/10 to-blue-900/5 -z-0"></div>
        <div className="relative z-10">
          <div className="prose prose-invert prose-green max-w-none">
            <p className="text-gray-300 mb-6">
              Ano 2133. O ar poluído paira sobre os arranha-céus de Nova São Paulo, uma cidade que, há quase quatro décadas, rompeu os laços com o Brasil em uma guerra civil sangrenta. A metrópole independente, uma vez vibrante e próspera, agora é um campo de batalha urbano, onde mais de 50 milhões de almas lutam pela sobrevivência em meio a uma paisagem de concreto e aço.
            </p>

            <p className="text-gray-300 mb-6">
              Nova São Paulo, a cidade independente forjada nas chamas da guerra civil de secessão de 2099, é um labirinto metropolitano que se estende por quilômetros de concreto, aço e neon. O panorama urbano é uma fusão caótica de arranha-céus imponentes, viadutos congestionados, e favelas verticais que se agarram às estruturas como parasitas urbanos.
            </p>

            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Colossos arquitetônicos dominam o horizonte, competindo pela atenção com anúncios holográficos e letreiros de néon. Algumas corporações ostentam torres que tocam as nuvens, enquanto outras áreas urbanas são dominadas por estruturas abandonadas e decadentes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Uma névoa perpétua de poluição paira sobre a cidade, tingindo o céu de tons acinzentados e enfatizando a atmosfera sombria. A chuva ácida ocasionalmente cai, corroendo lentamente as fachadas dos edifícios.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Cada distrito tem sua própria identidade e características únicas. De bairros corporativos reluzentes a zonas de quarentena controladas pelo estado, passando por distritos de entretenimento decadentes e guetos dominados por gangues, cada área conta uma história distinta de desigualdade e desespero.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>As paredes da cidade são o canvas para manifestações de arte de rua, muitas vezes com mensagens de resistência contra as corporações e o controle estatal. Grafites e murais narram a história do povo, muitas vezes apagados e reescritos conforme o ciclo interminável de protestos e repressão continua.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>As ruas de Nova São Paulo são um emaranhado complexo, com vias expressas elevadas, vielas escuras e becos que servem como território para gangues e contrabandistas. A vida nas alturas é movimentada, com o constante zumbido de veículos voadores e drones que patrulham os céus.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>A cidade está dividida entre ricos e pobres, entre aqueles que se beneficiam das corporações e aqueles que lutam para sobreviver. A polarização política é evidente, manifestando-se em grafites, pichações e cartazes que clamam por justiça e liberdade.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>Algumas áreas são controladas por gangues impiedosas, enquanto outras estão sob o domínio direto de corporações poderosas. As fronteiras entre esses territórios são fluidas, com conflitos constantes pelo controle de recursos e influência.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">•</span>
                <span>À medida que o sol se põe, os neons ganham vida, revelando uma miríade de estabelecimentos noturnos. De clubes decadentes a mercados negros onde se pode encontrar de tudo, a vida noturna de Nova São Paulo é um espetáculo caótico.</span>
              </li>
            </ul>

            <p className="text-gray-300 mb-6">
              A guerra deixou cicatrizes profundas na cidade, transformando sua paisagem e a psique de seus habitantes. Nova São Paulo é uma terra de oportunidades e perigos, onde predomina o caos. Gangues controlam ruas escuras e becos, corporações exercem sua influência nos bastidores do poder, a polícia do estado mantém uma ordem opressora, enquanto forças privadas agem com interesses próprios. Em cada esquina, o crime floresce, alimentando-se do desespero de uma população que luta para sobreviver.
            </p>

            <p className="text-gray-300">
              A centelha da revolta se acendeu ainda mais com a morte trágica de Well, um talentoso estudante de engenharia psíquica, durante um protesto em Nova Pinheiros. Seu grupo, formado por mentes rebeldes que se opunham à recente lei que concedia à Guardian o controle absoluto sobre as entradas e saídas da cidade, agora se tornou um símbolo de resistência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapituloUmIntroducao;