import React from "react";
import GlitchText from "../components/GlitchText";

const Gangues: React.FC = () => {
  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">💀</span>
        <GlitchText>Gangues</GlitchText>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 text-green-400">
              TOs - Torcidas Organizadas
            </h2>
            <div className="h-48 flex items-center justify-center mb-4 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-blue-900/40"></div>
              <span className="text-6xl relative z-10">🏆</span>
            </div>
            <p className="mb-4 text-gray-300">
              As TOs dominam os distritos populares e empobrecidos da cidade.
              Suas atividades vão além do fanatismo esportivo, tornando-se uma
              força criminosa significativa.
            </p>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Território
              </h3>
              <p className="text-sm text-gray-400">
                Distritos populares, estádios, zonas periféricas
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Atividades
              </h3>
              <p className="text-sm text-gray-400">
                Tráfico de drogas, extorsões, apostas ilícitas nos estádios
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Líder
              </h3>
              <p className="text-sm text-gray-400">
                "Ultras" - Figura carismática temida pelas autoridades
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-full bg-red-900/50 text-red-400 border border-red-700">
                Violência
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-400 border border-blue-700">
                União contra inimigos
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-700">
                Rituais de iniciação
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 text-green-400">
              Comando Cyberpunk
            </h2>
            <div className="h-48 flex items-center justify-center mb-4 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 to-yellow-900/40"></div>
              <span className="text-6xl relative z-10">🔥</span>
            </div>
            <p className="mb-4 text-gray-300">
              Máfia que controla as áreas mais sombrias de Nova São Paulo. Seu
              alcance vai desde o tráfico de drogas até esquemas de jogo ilegal
              e extorsões.
            </p>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Território
              </h3>
              <p className="text-sm text-gray-400">
                Áreas sombrias da cidade, favelas, zonas de conflito
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Hierarquia
              </h3>
              <p className="text-sm text-gray-400">
                Estrutura rígida, chefes para diferentes operações, traição
                punida com morte
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Código
              </h3>
              <p className="text-sm text-gray-400">
                Imposição de ordem nas ruas, lealdade acima de tudo
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-full bg-red-900/50 text-red-400 border border-red-700">
                Crueldade
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-yellow-900/50 text-yellow-400 border border-yellow-700">
                Controle
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-purple-900/50 text-purple-400 border border-purple-700">
                Infiltração
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 text-green-400">
              BitMarauders (Raul)
            </h2>
            <div className="h-48 flex items-center justify-center mb-4 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-cyan-900/40"></div>
              <span className="text-6xl relative z-10">💰</span>
            </div>
            <p className="mb-4 text-gray-300">
              Operam nas altas esferas financeiras de Nova São Paulo. Seus
              tentáculos se estendem por corporações e instituições bancárias.
            </p>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Território
              </h3>
              <p className="text-sm text-gray-400">
                Arranha-céus corporativos, distritos financeiros
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Identidade
              </h3>
              <p className="text-sm text-gray-400">
                Elegância e sofisticação ocultando crueldade impiedosa
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">
                Liderança
              </h3>
              <p className="text-sm text-gray-400">
                Visionário implacável manipulando engrenagens financeiras
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-700">
                Riqueza
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/50 text-cyan-400 border border-cyan-700">
                Manipulação
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-400 border border-indigo-700">
                Hacking
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-lg bg-black border border-red-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            Conflitos Territoriais
          </h2>
          <p className="mb-4 text-gray-300">
            Os territórios em Nova São Paulo são fluidos, com conflitos
            constantes entre gangues, corporações e forças de segurança. A
            mudança de controle sobre certas áreas pode ocorrer rapidamente,
            especialmente após confrontos significativos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-black border border-red-800 rounded-lg">
              <h3 className="text-lg font-bold text-red-400 mb-2">
                Zonas Quentes
              </h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Centro: Disputado entre TOs e forças policiais</li>
                <li>• Tatuapé: Território do Comando, alta vigilância</li>
                <li>• Tiradentes: Laboratórios de CyberJenkins</li>
                <li>• Pinheiros: Balada "A Floresta", ponto de encontro</li>
              </ul>
            </div>
            <div className="p-4 bg-black border border-red-800 rounded-lg">
              <h3 className="text-lg font-bold text-red-400 mb-2">
                Alianças Conhecidas
              </h3>
              <ul className="space-y-1 text-gray-400">
                <li>• Comando + MiliTech: Aliança secreta</li>
                <li>• Guardian + SynthCorp: Controle de fronteiras</li>
                <li>• TOs: Se unem contra inimigos comuns</li>
                <li>• BitMarauders: Rivalidade com o Comando</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gangues;
