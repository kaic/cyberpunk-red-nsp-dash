import React from 'react';
import GlitchText from '../components/GlitchText';

const Introducao: React.FC = () => {
  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">🏛️</span>
        <GlitchText>Introdução</GlitchText>
      </h1>

      <div className="mb-8 p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden">
        <div className="relative z-10">
          <p className="mb-4 text-lg text-gray-300">
            Ano 2133. O ar poluído paira sobre os arranha-céus de Nova São Paulo, uma cidade que,
            há quase quatro décadas, rompeu os laços com o Brasil em uma guerra civil sangrenta.
            A metrópole independente, uma vez vibrante e próspera, agora é um campo de batalha urbano,
            onde mais de 50 milhões de almas lutam pela sobrevivência em meio a uma paisagem de concreto e aço.
          </p>
          <p className="mb-4 text-gray-300">
            Nova São Paulo, a cidade independente forjada nas chamas da guerra civil de secessão de 2099,
            é um labirinto metropolitano que se estende por quilômetros de concreto, aço e neon. O panorama urbano
            é uma fusão caótica de arranha-céus imponentes, viadutos congestionados, e favelas verticais
            que se agarram às estruturas como parasitas urbanos.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/10 to-blue-900/5 -z-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 text-green-400">A Cidade</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Colossos arquitetônicos dominam o horizonte, competindo pela atenção com anúncios holográficos e letreiros de néon.</li>
              <li>• Uma névoa perpétua de poluição paira sobre a cidade, tingindo o céu de tons acinzentados.</li>
              <li>• Cada distrito tem sua própria identidade, desde bairros corporativos reluzentes até guetos dominados por gangues.</li>
              <li>• A chuva ácida ocasionalmente cai, corroendo lentamente as fachadas dos edifícios.</li>
              <li>• As ruas são um emaranhado complexo de vias expressas elevadas, vielas escuras e becos controlados por gangues.</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r "></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 text-green-400">A Situação</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• A cidade está dividida entre ricos e pobres, entre beneficiários das corporações e sobreviventes.</li>
              <li>• As paredes são canvas para manifestações de arte de rua com mensagens de resistência.</li>
              <li>• As fronteiras entre territórios são fluidas, com conflitos constantes pelo controle.</li>
              <li>• A morte de Well, estudante de engenharia psíquica, durante protesto tornou-se símbolo de resistência.</li>
              <li>• A Guardian recentemente ganhou controle absoluto sobre entradas e saídas da cidade, gerando protestos.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg bg-black border border-blue-900 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-rß"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">A Vida Noturna</h2>
          <p className="mb-4 text-gray-300">
            À medida que o sol se põe, os neons ganham vida, revelando uma miríade de estabelecimentos noturnos.
            De clubes decadentes a mercados negros onde se pode encontrar de tudo, a vida noturna de Nova São Paulo é um espetáculo caótico.
          </p>
          <p className="text-gray-300">
            A guerra deixou cicatrizes profundas na cidade, transformando sua paisagem e a psique de seus habitantes.
            É uma terra de oportunidades e perigos, onde predomina o caos. Gangues controlam ruas escuras e becos,
            corporações exercem sua influência nos bastidores do poder, a polícia do estado mantém uma ordem opressora,
            enquanto forças privadas agem com interesses próprios. Em cada esquina, o crime floresce.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introducao;
