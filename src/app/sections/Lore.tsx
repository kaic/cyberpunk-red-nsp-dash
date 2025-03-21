import React from "react";
import GlitchText from "../components/GlitchText";

const Lore: React.FC = () => {
  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">📜</span>
        <GlitchText>Lore</GlitchText>
      </h1>
      <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 mb-8 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-cover bg-center"></div>
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-4 text-green-400">
            História de Nova São Paulo
          </h2>
          <div className="border-l-2 border-green-700 pl-4 mb-6">
            <p className="text-gray-300 mb-2">
              A cidade-estado independente nasceu após a brutal repressão aos
              protestos de 2099, culminando na Guerra Civil e na separação da
              federação brasileira. Desde então, a metrópole tem vivido em um
              equilíbrio frágil entre caos e ordem.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-400 mb-2">
                Guerra Civil de 2099
              </h3>
              <div className="border-l-2 border-green-700 pl-4 mb-4">
                <p className="text-sm text-gray-400">
                  O conflito que separou a megalópole do restante do Brasil,
                  deixando cicatrizes profundas que até hoje moldam a cidade e
                  seus habitantes.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-400 mb-2">
                Projeto Omega
              </h3>
              <div className="border-l-2 border-green-700 pl-4 mb-4">
                <p className="text-sm text-gray-400">
                  Operação secreta ainda em investigação. Aparentemente
                  relacionada com o CyberJenkins e diversos experimentos
                  corporativos.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-400 mb-2">
                Projeto Alpha
              </h3>
              <div className="border-l-2 border-green-700 pl-4 mb-4">
                <p className="text-sm text-gray-400">
                  Operação misteriosa relacionada ao Omega. Detalhes ainda são
                  escassos, mas as consequências parecem de grande impacto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black border border-green-900 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br "></div>
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
        <div className="relative z-10 p-6">
          <p className="text-center font-mono text-lg mb-4 text-green-400">
            [ DADOS CONFIDENCIAIS ]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-black border border-green-700 rounded-lg">
              <h3 className="text-lg font-bold text-green-400 mb-2">
                CyberJenkins
              </h3>
              <p className="text-sm text-gray-400">
                Droga sintética com estranhos efeitos psicoativos. Aparentemente
                relacionada aos projetos secretos Omega e Alpha. Pode causar
                visões reveladoras, mas é altamente viciante.
              </p>
            </div>
            <div className="p-4 bg-black border border-green-700 rounded-lg">
              <h3 className="text-lg font-bold text-green-400 mb-2">
                O Cartel
              </h3>
              <p className="text-sm text-gray-400">
                Aliança secreta entre as principais corporações e organizações
                criminosas. Aparente envolvimento na morte de Marcos da ZL e
                possivelmente na morte de Well.
              </p>
            </div>
            <div className="p-4 bg-black border border-green-700 rounded-lg">
              <h3 className="text-lg font-bold text-green-400 mb-2">Well</h3>
              <p className="text-sm text-gray-400">
                Estudante de engenharia psíquica morto durante um protesto em
                Nova Pinheiros. Tornou-se símbolo de resistência contra a
                Guardian e seu controle sobre a cidade.
              </p>
            </div>
          </div>
          <p className="text-center font-mono text-sm mt-4 text-gray-500">
            ACESSO RESTRITO - NÍVEL DE AUTORIZAÇÃO INSUFICIENTE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lore;
