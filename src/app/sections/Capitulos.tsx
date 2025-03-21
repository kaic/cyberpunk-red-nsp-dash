import React from "react";
import GlitchText from "../components/GlitchText";

const Capitulos: React.FC = () => {
  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">📚</span>
        <GlitchText>Capítulos</GlitchText>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <h2 className="text-xl font-bold mb-2 text-green-400">
            <span className="mr-2">01</span>
            Capítulo 1 - O Bar
          </h2>
          <p className="mb-4 text-gray-300">
            Tudo começa em um bar no Tatuapé, quando uma bomba explode e mata
            Marcos da ZL, um líder do Comando. Vocês são falsamente acusados do
            assassinato e precisam fugir.
          </p>
          <div className="mb-4 border-l-2 border-green-700 pl-3">
            <p className="text-sm text-gray-400 mb-2">
              • A explosão mata duas pessoas próximo à janela do bar.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              • Membros do Comando chegam acusando vocês do assassinato.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              • BlingBling, um fixer dos BitMarauders, contata vocês oferecendo
              ajuda.
            </p>
            <p className="text-sm text-gray-400">
              • Para ganhar sua confiança, vocês precisam recuperar um
              laboratório de CyberJenkins.
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-700">
            Completo
          </span>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <h2 className="text-xl font-bold mb-2 text-green-400">
            <span className="mr-2">02</span>
            Capítulo 2 - Jacks e Jenkins
          </h2>
          <p className="mb-4 text-gray-300">
            MC Kleber é sequestrado pela MiliTech, revelando uma conspiração
            maior entre a corporação e o Comando.
          </p>
          <div className="mb-4 border-l-2 border-green-700 pl-3">
            <p className="text-sm text-gray-400 mb-2">
              • BlingBling avisa que MC Kleber foi sequestrado.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              • A balada "A Floresta" em Pinheiros é a última localização
              conhecida.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              • Investigação leva a duas bases da MiliTech: Brás e Capão.
            </p>
            <p className="text-sm text-gray-400">
              • Descoberta da aliança entre MiliTech e Comando para esconder o
              Cartel.
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-700">
            Completo
          </span>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <h2 className="text-xl font-bold mb-2 text-green-400">
            <span className="mr-2">03</span>
            Capítulo 3 - Cidade dos Sonhos
          </h2>
          <p className="mb-4 text-gray-300">
            As visões causadas pelo CyberJenkins revelam projetos secretos e a
            verdadeira natureza da conspiração.
          </p>
          <div className="mb-4 border-l-2 border-green-700 pl-3">
            <p className="text-sm text-gray-400 mb-2">
              • Raposa tem visões intensas após contato com CyberJenkins.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              • Aparecem pistas sobre os projetos Omega e Alpha.
            </p>
            <p className="text-sm text-gray-400">
              • Confronto com soldados e revelação de segredos sombrios.
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-700">
            Completo
          </span>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-black border border-blue-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
          <h2 className="text-xl font-bold mb-2 text-blue-400">
            <span className="mr-2">04</span>
            Capítulo 4 - O Desaparecimento
          </h2>
          <p className="mb-4 text-gray-300">
            Após uma emboscada na Praça da Sé, Alyx desaparece misteriosamente,
            deixando apenas pistas enigmáticas.
          </p>
          <div className="mb-4 border-l-2 border-blue-700 pl-3">
            <p className="text-sm text-gray-400 mb-2">
              • O Cartel marca um encontro falso para eliminar o grupo.
            </p>
            <p className="text-sm text-gray-400 mb-2">
              • GB do JH é executado por Raposa antes de revelar segredos
              importantes.
            </p>
            <p className="text-sm text-gray-400">
              • O laptop de Alyx ficou ativo por segundos antes de ser
              desconectado à força.
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-400 border border-blue-700">
            Em progresso
          </span>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg shadow-lg bg-black border border-red-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Linha do Tempo da Campanha
          </h2>
          <div className="relative border-l-2 border-red-800 pl-6">
            <div className="mb-6 relative">
              <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-red-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 1
                </span>
                <p className="text-gray-300">
                  Explosão no bar mata Marcos da ZL, vocês são acusados.
                </p>
              </div>
            </div>
            <div className="mb-6 relative">
              <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-red-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 1-2
                </span>
                <p className="text-gray-300">
                  Encontro com BlingBling e missão na agência de carros.
                </p>
              </div>
            </div>
            <div className="mb-6 relative">
              <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-red-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 3
                </span>
                <p className="text-gray-300">
                  Missão para recuperar o laboratório de CyberJenkins.
                </p>
              </div>
            </div>
            <div className="mb-6 relative">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-blue-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 5
                </span>
                <p className="text-gray-300">
                  Descoberta do sequestro de MC Kleber pela MiliTech.
                </p>
              </div>
            </div>
            <div className="mb-6 relative">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-blue-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 7
                </span>
                <p className="text-gray-300">
                  Investigação na balada "A Floresta" e bases da MiliTech.
                </p>
              </div>
            </div>
            <div className="mb-6 relative">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-green-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 10
                </span>
                <p className="text-gray-300">
                  Raposa tem visões do CyberJenkins e revelações.
                </p>
              </div>
            </div>
            <div className="mb-6 relative">
              <div className="absolute w-4 h-4 bg-yellow-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-yellow-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 12
                </span>
                <p className="text-gray-300">
                  Emboscada na Praça da Sé e desaparecimento de Alyx.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-yellow-600 rounded-full -left-8 top-0"></div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="text-yellow-400 font-mono mb-2 md:mb-0 md:mr-4">
                  DIA 13
                </span>
                <p className="text-gray-300">
                  Descoberta de vídeo misterioso e laptop desconectado...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capitulos;
