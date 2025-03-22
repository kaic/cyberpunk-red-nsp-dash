import React, { useState } from "react";
import GlitchText from "../components/GlitchText";

// Gangues data structure
const ganguesData = {
  gangues: [
    {
      id: "tos",
      nome: "TOs - Torcidas Organizadas",
      descricao: "As TOs dominam os distritos populares e empobrecidos da cidade. Suas atividades vão além do fanatismo esportivo, tornando-se uma força criminosa significativa.",
      descricaoLonga: "As TOs dominam os distritos mais populares e empobrecidos da cidade. Suas atividades vão além do fanatismo esportivo, tornando-se uma força criminosa significativa. Controlam o tráfico de drogas, extorsões e têm presença marcante em atividades ilegais nos estádios, onde jogos sangrentos e apostas ilícitas são comuns.",
      icone: "🏆",
      corPrimaria: "green",
      corSecundaria: "blue",
      territorio: "Distritos populares, estádios, zonas periféricas",
      atividades: "Tráfico de drogas, extorsões, apostas ilícitas nos estádios",
      caracteristicas: [
        "Cada TO tem suas próprias cores e símbolos que adornam suas roupas e territórios.",
        "São conhecidos por seus rituais de iniciação brutais e códigos de lealdade extremos.",
        "Mesmo existindo rivalidade entre as próprias torcidas e seus times, quando necessário as TOs se unem para combater outras gangues, policiais e rivais em comum."
      ],
      lider: {
        nome: "Ultras",
        descricao: "Um líder carismático conhecido como 'Ultras' é o rosto público das TOs. Sua habilidade em unir as massas e canalizar a raiva da população o torna uma figura temida pelas autoridades."
      },
      membrosConhecidos: [
        { nome: "Caveira", funcao: "Tenente de guerra", status: "Ativo", notas: "Conhecido por liderar ataques a territórios rivais." },
        { nome: "DJ Volt", funcao: "Informante", status: "Ativo", notas: "Trabalha em clubes noturnos e coleta informações." }
      ],
      tags: [
        { texto: "Violência", cor: "red" },
        { texto: "União contra inimigos", cor: "blue" },
        { texto: "Rituais de iniciação", cor: "green" }
      ],
      armas: "Armas brancas, pistolas de baixo calibre, explosivos caseiros",
      rivalidades: ["Comando Cyberpunk (em certos territórios)", "Guardian"],
      aliancas: ["Ocasionalmente cooperam com Raul"]
    },
    {
      id: "comando",
      nome: "Comando Cyberpunk",
      descricao: "Máfia que controla as áreas mais sombrias de Nova São Paulo. Seu alcance vai desde o tráfico de drogas até esquemas de jogo ilegal e extorsões.",
      descricaoLonga: "O Comando é uma máfia que controla as áreas mais sombrias de Nova São Paulo. Seu alcance vai desde o tráfico de drogas até esquemas de jogo ilegal e extorsões. Eles têm tentáculos infiltrados em negócios legítimos, usando-os como fachada para suas operações criminosas.",
      icone: "🔥",
      corPrimaria: "red",
      corSecundaria: "yellow",
      territorio: "Áreas sombrias da cidade, favelas, zonas de conflito",
      atividades: "Tráfico de drogas, extorsões, jogo ilegal, proteção",
      caracteristicas: [
        "O Comando segue uma hierarquia estrita, com chefes que lideram diferentes aspectos do império criminoso.",
        "Traição é punida com extrema violência, e a lealdade é a moeda mais valiosa.",
        "Apesar de suas atividades ilícitas, o Comando segue códigos de conduta próprios. Eles acreditam que, ao impor ordem nas ruas, estão cumprindo um papel que o próprio governo negligenciou."
      ],
      lider: {
        nome: "Conselho dos Oito",
        descricao: "Após a morte de Marcos da ZL, o poder está temporariamente nas mãos de um conselho de líderes territoriais."
      },
      membrosConhecidos: [
        { nome: "Marcos da ZL", funcao: "Antigo líder", status: "Morto", notas: "Assassinado na explosão do bar no Tatuapé." },
        { nome: "GB do JH", funcao: "Líder revolucionário", status: "Morto", notas: "Executado por Raposa durante o confronto na Praça da Sé." },
        { nome: "MC Kleber", funcao: "Ex-membro", status: "Neutro", notas: "Antigo membro que saiu após divergências ideológicas." }
      ],
      tags: [
        { texto: "Crueldade", cor: "red" },
        { texto: "Controle", cor: "yellow" },
        { texto: "Infiltração", cor: "purple" }
      ],
      armas: "Arsenal militar completo, acesso a armas automáticas e explosivos",
      rivalidades: ["TOs (disputas territoriais)", "Raul (competição por mercados de luxo)"],
      aliancas: ["MiliTech (aliança secreta recente)"]
    },
    {
      id: "Raul",
      nome: "Raul",
      descricao: "Operam nas altas esferas financeiras de Nova São Paulo. Seus tentáculos se estendem por corporações e instituições bancárias.",
      descricaoLonga: "Os Raul são uma máfia que opera nas altas esferas financeiras de Nova São Paulo. Seus tentáculos se estendem por corporações e instituições bancárias, usando esquemas complexos para manipular a economia da cidade. Eles estão envolvidos em crimes financeiros, lavagem de dinheiro e corrupção.",
      icone: "💰",
      corPrimaria: "green",
      corSecundaria: "cyan",
      territorio: "Arranha-céus corporativos, distritos financeiros",
      atividades: "Lavagem de dinheiro, manipulação do mercado, chantagem corporativa, tráfico de dados",
      caracteristicas: [
        "Ao contrário de gangues convencionais, os membros dos Raul se apresentam com elegância e sofisticação.",
        "Trajes caros escondem uma crueldade impiedosa, e seus negócios são realizados nos corredores dos arranha-céus corporativos.",
        "Especialistas em tecnologia financeira, utilizam criptomoedas e mercados paralelos para movimentar recursos."
      ],
      lider: {
        nome: "Raul",
        descricao: "Um visionário implacável que busca consolidar seu poder não apenas através da força bruta, mas também manipulando as engrenagens financeiras da cidade para favorecer seus interesses."
      },
      membrosConhecidos: [
        { nome: "BlingBling", funcao: "Fixer", status: "Aliado", notas: "Oferece ajuda aos jogadores em troca de favores, sempre vestido com roupas brilhantes e joias." },
        { nome: "Phantom", funcao: "Executor", status: "Ativo", notas: "Assassino da alta sociedade, elimina alvos durante eventos sociais de elite." }
      ],
      tags: [
        { texto: "Riqueza", cor: "green" },
        { texto: "Manipulação", cor: "cyan" },
        { texto: "Hacking", cor: "indigo" }
      ],
      armas: "Armas discretas, venenos sofisticados, sistemas de hackeamento avançados",
      rivalidades: ["Comando Cyberpunk", "SynthCorp (conflito de interesses financeiros)"],
      aliancas: ["Guardian (subornos periódicos)", "Ocasionalmente cooperam com TOs"]
    }
  ],
  conflitosTerritoriais: {
    titulo: "Conflitos Territoriais",
    descricao: "Os territórios em Nova São Paulo são fluidos, com conflitos constantes entre gangues, corporações e forças de segurança. A mudança de controle sobre certas áreas pode ocorrer rapidamente, especialmente após confrontos significativos.",
    zonasQuentes: [
      { local: "Centro", descricao: "Disputado entre TOs e forças policiais" },
      { local: "Tatuapé", descricao: "Território do Comando, alta vigilância" },
      { local: "Tiradentes", descricao: "Laboratórios de CyberJenkins" },
      { local: "Pinheiros", descricao: "Balada 'A Floresta', ponto de encontro" }
    ],
    aliancasConhecidas: [
      { aliados: "Comando + MiliTech", descricao: "Aliança secreta", notas: "Formada recentemente para objetivos comuns ainda desconhecidos." },
      { aliados: "Guardian + SynthCorp", descricao: "Controle de fronteiras", notas: "Cooperam no controle de entradas e saídas da cidade." },
      { aliados: "TOs", descricao: "Se unem contra inimigos comuns", notas: "Quando necessário, superam rivalidades entre torcidas." },
      { aliados: "Raul", descricao: "Rivalidade com o Comando", notas: "Competem por mercados lucrativos e zonas de influência." }
    ]
  }
};

const Gangues: React.FC = () => {
  const [activeGangue, setActiveGangue] = useState("tos");
  const [showConflitos, setShowConflitos] = useState(false);

  // Encontra a gangue ativa
  const gangueAtual = ganguesData.gangues.find(g => g.id === activeGangue);

  // Navegação entre gangues
  const handleGangueChange = (id) => {
    setActiveGangue(id);
    setShowConflitos(false);
  };

  // Renderiza a seção de membros conhecidos
  const renderMembrosConhecidos = (membros) => {
    return (
      <div className="p-4 bg-black border border-pink-900 ">
        <h3 className="text-lg font-bold mb-3 text-pink-400 border-b border-pink-900/50 pb-1">
          <span className="mr-2">👤</span>Membros Conhecidos
        </h3>
        <div className="space-y-3">
          {membros.map((membro, idx) => (
            <div key={idx} className="bg-black/30 border border-pink-900/30  p-3">
              <div className="flex justify-between">
                <h4 className="text-pink-400 font-bold">{membro.nome}</h4>
                <span className={`text - xs px - 2 py - 0.5 rounded - full ${membro.status === "Aliado"
                    ? "bg-green-900/50 text-green-400"
                    : membro.status === "Inimigo"
                      ? "bg-red-900/50 text-red-400"
                      : membro.status === "Morto"
                        ? "bg-gray-900/50 text-gray-400"
                        : "bg-yellow-900/50 text-yellow-400"
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

  // Renderiza a seção de conflitos territoriais
  const renderConflitosTerritoriais = () => {
    const conflitos = ganguesData.conflitosTerritoriais;
    return (
      <div className="p-6  shadow-lg bg-black border border-red-900 relative overflow-hidden mt-6">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-red-400">
            {conflitos.titulo}
          </h2>
          <p className="mb-4 text-gray-300 border-l-4 border-red-700 pl-4 bg-black/30 p-2 rounded-r-lg">
            {conflitos.descricao}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-black border border-red-800 ">
              <h3 className="text-lg font-bold text-red-400 mb-3 border-b border-red-900/50 pb-1">
                Zonas Quentes
              </h3>
              <div className="space-y-2">
                {conflitos.zonasQuentes.map((zona, idx) => (
                  <div key={idx} className="flex">
                    <span className="text-red-500 mr-2">•</span>
                    <div>
                      <span className="text-red-400 font-bold">{zona.local}:</span>
                      <span className="text-gray-400 ml-1">{zona.descricao}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 bg-black border border-red-800 ">
              <h3 className="text-lg font-bold text-red-400 mb-3 border-b border-red-900/50 pb-1">
                Alianças & Rivalidades
              </h3>
              <div className="space-y-2">
                {conflitos.aliancasConhecidas.map((alianca, idx) => (
                  <div key={idx} className="bg-black/30 p-2  border-l-2 border-red-700">
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-bold">{alianca.aliados}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-900/50 text-red-400 border border-red-700">
                        {alianca.descricao}
                      </span>
                    </div>
                    {alianca.notas && <p className="text-gray-400 text-sm mt-1">{alianca.notas}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">💀</span>
        <GlitchText>Gangues</GlitchText>
      </h1>

      {/* Navegação entre gangues */}
      <div className="flex flex-wrap gap-2 mb-6">
        {ganguesData.gangues.map((gangue) => (
          <button
            key={gangue.id}
            onClick={() => handleGangueChange(gangue.id)}
            className={`p - 3 rounded - lg transition - all duration - 200 ${activeGangue === gangue.id
                ? `bg-${gangue.corPrimaria}-900/70 text-${gangue.corPrimaria}-400 border border-${gangue.corPrimaria}-700`
                : "bg-black text-gray-400 border border-gray-800 hover:bg-green-900/20 hover:text-green-400 hover:border-green-800"
              } flex items - center`}
          >
            <span className="mr-2 text-2xl">{gangue.icone}</span>
            <span className="font-bold">{gangue.nome}</span>
          </button>
        ))}

        {/* Botão para conflitos territoriais */}
        <button
          onClick={() => setShowConflitos(!showConflitos)}
          className={`p - 3 rounded - lg transition - all duration - 200 ${showConflitos
              ? "bg-red-900/70 text-red-400 border border-red-700"
              : "bg-black text-gray-400 border border-gray-800 hover:bg-red-900/20 hover:text-red-400 hover:border-red-800"
            } flex items - center`}
        >
          <span className="mr-2 text-2xl">🗺️</span>
          <span className="font-bold">Conflitos Territoriais</span>
        </button>
      </div>

      {/* Exibe o conteúdo principal (gangue ou conflitos) */}
      {!showConflitos && gangueAtual && (
        <div>
          {/* Cabeçalho da gangue */}
          <div className={`p - 6 rounded - lg shadow - lg bg - black border border - ${gangueAtual.corPrimaria} -900 relative overflow - hidden mb - 6`}>
            <div className={`absolute top - 0 left - 0 w - full h - 2 bg - ${gangueAtual.corPrimaria} -500`}></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{gangueAtual.icone}</span>
                <h2 className={`text - 2xl font - bold text - ${gangueAtual.corPrimaria} -400`}>
                  {gangueAtual.nome}
                </h2>
              </div>

              <p className="mb-6 text-gray-300 bg-black/50 p-4  border-l-4 border-green-700">
                {gangueAtual.descricaoLonga}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {gangueAtual.tags.map((tag, idx) => (
                  <span key={idx} className={`text - xs px - 2 py - 1 rounded - full bg - ${tag.cor} -900 / 50 text - ${tag.cor} -400 border border - ${tag.cor} -700`}>
                    {tag.texto}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Informações sobre território e atividades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-black border border-cyan-900 ">
              <h3 className="text-lg font-bold mb-3 text-cyan-400 border-b border-cyan-900/50 pb-1">
                <span className="mr-2">📍</span>Território & Atividades
              </h3>
              <div className="space-y-4">
                <div className="bg-black/30 p-3  border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-1">Território</h4>
                  <p className="text-gray-300">{gangueAtual.territorio}</p>
                </div>
                <div className="bg-black/30 p-3  border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-1">Atividades</h4>
                  <p className="text-gray-300">{gangueAtual.atividades}</p>
                </div>
                <div className="bg-black/30 p-3  border-l-2 border-cyan-700">
                  <h4 className="text-cyan-400 font-bold mb-1">Armamento</h4>
                  <p className="text-gray-300">{gangueAtual.armas}</p>
                </div>
              </div>
            </div>

            {/* Liderança */}
            <div className="p-4 bg-black border border-yellow-900 ">
              <h3 className="text-lg font-bold mb-3 text-yellow-400 border-b border-yellow-900/50 pb-1">
                <span className="mr-2">👑</span>Liderança
              </h3>
              <div className="bg-black/30 p-4  border-l-2 border-yellow-700">
                <h4 className="text-yellow-400 font-bold mb-2">{gangueAtual.lider.nome}</h4>
                <p className="text-gray-300 italic">{gangueAtual.lider.descricao}</p>
              </div>

              <h4 className="text-lg font-bold mt-4 mb-2 text-yellow-400">Conexões</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-black/30 p-3  border-l-2 border-red-700">
                  <h5 className="text-red-400 font-bold mb-1 text-sm">Rivalidades</h5>
                  <ul className="text-gray-400 text-sm">
                    {gangueAtual.rivalidades.map((rival, idx) => (
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
                    {gangueAtual.aliancas.map((aliado, idx) => (
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
            {renderCaracteristicas(gangueAtual.caracteristicas)}
            {renderMembrosConhecidos(gangueAtual.membrosConhecidos)}
          </div>
        </div>
      )}

      {/* Exibe os conflitos territoriais se o botão estiver ativo */}
      {showConflitos && renderConflitosTerritoriais()}
    </div>
  );
};

export default Gangues;