import React, { useState, useEffect } from 'react';
import { Calendar, Search, ArrowUpDown, Clock, ChevronDown, ChevronUp, X } from 'lucide-react';
import CyberpunkText from "../components/CyberpunkText";

// Importe seus dados - presumindo este formato
import screamsheetData from "../data/screensheets.json";

const ScreamsheetsViewer = () => {
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' ou 'oldest'
  const [filteredSheets, setFilteredSheets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSheet, setExpandedSheet] = useState(null); // ID do screamsheet expandido

  // Processar e ordenar os dados ao carregar ou quando as configurações mudarem
  useEffect(() => {
    let sorted = [...screamsheetData];
    
    // Converter datas para objetos Date para ordenação correta (presumindo formato DD/MM/YYYY)
    sorted.sort((a, b) => {
      const datePartsA = a.date.split('/').map(Number);
      const datePartsB = b.date.split('/').map(Number);
      
      const dateA = new Date(datePartsA[2], datePartsA[1] - 1, datePartsA[0]);
      const dateB = new Date(datePartsB[2], datePartsB[1] - 1, datePartsB[0]);
      
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    // Aplicar filtragem por termo de pesquisa
    if (searchTerm) {
      sorted = sorted.filter(sheet => 
        sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sheet.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sheet.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (sheet.source && sheet.source.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredSheets(sorted);
  }, [sortOrder, searchTerm]);

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest');
  };

  const toggleExpandSheet = (id) => {
    setExpandedSheet(prevId => prevId === id ? null : id);
  };

  // Renderiza o cartão resumido de um screamsheet
  const renderScreamsheetCard = (sheet) => {
    // Define cores padrão caso o screamsheet não tenha especificado
    const accentColor = sheet.accentColor || 'purple-700';
    const bgColor = sheet.bgColor || 'purple-900/50';
    const isExpanded = expandedSheet === sheet.id;
    
    return (
      <div 
        key={sheet.id} 
        className={`border border-${accentColor}  overflow-hidden transition-all duration-300 bg-black`}
      >
        {/* Cabeçalho */}
        <div 
          className={`bg-${bgColor} p-4 text-white border-b border-${accentColor} cursor-pointer`}
          onClick={() => toggleExpandSheet(sheet.id)}
        >
          <div className="flex flex-wrap justify-between items-center mb-2">
            <div className="font-bold text-lg">{sheet.source}</div>
            <div className="text-sm flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> {sheet.date}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold tracking-tight">{sheet.title}</h2>
            {isExpanded ? 
              <ChevronUp className="w-5 h-5 flex-shrink-0" /> : 
              <ChevronDown className="w-5 h-5 flex-shrink-0" />
            }
          </div>
        </div>

        {/* Preview do conteúdo (sempre visível) */}
        <div className="p-4 border-b border-gray-800">
          <p className="text-gray-300 line-clamp-3">{sheet.summary}</p>
        </div>

        {/* Conteúdo detalhado (visível apenas quando expandido) */}
        {isExpanded && (
          <div className="p-4">
            <h3 className="text-xl font-bold mb-4 text-purple-400">{sheet.headline}</h3>

            {sheet.imageUrl && (
              <div className="mb-6">
                <img 
                  src={sheet.imageUrl} 
                  alt={sheet.title} 
                  className="w-full h-48 object-cover rounded-md mb-2" 
                />
                <p className="text-sm text-gray-400 italic">Imagem relacionada ao incidente</p>
              </div>
            )}

            {sheet.details && sheet.details.length > 0 && (
              <div className="mb-6 bg-black/30 p-4  border-l-4 border-purple-700">
                <h4 className="text-lg font-bold mb-2 text-purple-400">Detalhes:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {sheet.details.map((detail, index) => (
                    <li key={index} className="text-gray-300">{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {sheet.testimonials && sheet.testimonials.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2 text-purple-400">O que Sabemos:</h4>
                <div className="space-y-4">
                  {sheet.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-purple-900/20 p-4 rounded-md border-l-4 border-purple-700">
                      <p className="font-bold text-purple-300 mb-1">{testimonial.name}</p>
                      <p className="italic text-gray-300">"{testimonial.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {sheet.officialStatement && (
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2 text-purple-400">Declaração Oficial:</h4>
                <div className="bg-purple-900/20 p-4 rounded-md border-l-4 border-purple-700">
                  <p className="italic text-gray-300">"{sheet.officialStatement}"</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {sheet.expertAnalysis && (
                <div className="bg-purple-900/20 rounded-md p-4 border border-purple-800">
                  <h4 className="text-md font-bold mb-2 text-purple-400">Análise de Especialistas:</h4>
                  <p className="text-gray-300 text-sm">{sheet.expertAnalysis}</p>
                </div>
              )}

              {sheet.publicOpinion && (
                <div className="bg-purple-900/20 rounded-md p-4 border border-purple-800">
                  <h4 className="text-md font-bold mb-2 text-purple-400">Opinião Popular:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Positivo:</span>
                      <span className="text-green-400 text-sm">{sheet.publicOpinion.positive}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${sheet.publicOpinion.positive}%` }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Negativo:</span>
                      <span className="text-red-400 text-sm">{sheet.publicOpinion.negative}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${sheet.publicOpinion.negative}%` }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Indiferente:</span>
                      <span className="text-gray-400 text-sm">{sheet.publicOpinion.indifferent}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: `${sheet.publicOpinion.indifferent}%` }}></div>
                    </div>
                  </div>
                </div>
              )}

              {sheet.adText && (
                <div className="bg-yellow-900/20 rounded-md p-4 border border-yellow-800">
                  <h4 className="text-md font-bold mb-2 text-yellow-400">Publicidade:</h4>
                  <p className="text-gray-300 italic text-sm">{sheet.adText}</p>
                </div>
              )}
            </div>
            
            {sheet.footer && (
              <div className="bg-purple-900/20 rounded-md p-4 border border-purple-800 mt-4">
                <h4 className="text-md font-bold mb-2 text-purple-400">Fique Atento!</h4>
                <p className="text-gray-300 text-sm">{sheet.footer}</p>
              </div>
            )}

            <div className="flex justify-center mt-4">
              <button 
                onClick={() => toggleExpandSheet(sheet.id)}
                className="bg-black border border-purple-700 hover:bg-purple-900/30 text-purple-400 px-4 py-2 rounded-md flex items-center"
              >
                <ChevronUp className="mr-1 h-5 w-5" />
                Recolher
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Não prosseguir se não houver dados filtrados
  if (filteredSheets.length === 0) {
    return (
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-purple-400 flex items-center border-b border-purple-900 pb-2">
          <span className="mr-2">📰</span>
          <CyberpunkText variant="primary">Screamsheets</CyberpunkText>
        </h1>
        
        <div className="p-6  shadow-lg bg-black border border-purple-900 relative">
          <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
            {/* Barra de busca */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Buscar screamsheets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 bg-black border border-purple-900  text-gray-300 focus:border-purple-500 focus:outline-none pr-10"
              />
              <Search className="absolute right-3 top-3 text-gray-500 h-5 w-5" />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-10 top-3 text-gray-500 hover:text-gray-300"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            <button 
              onClick={toggleSortOrder}
              className="bg-black border border-purple-700 hover:bg-purple-900/30 text-purple-400 p-3  flex items-center"
            >
              <ArrowUpDown className="mr-2 h-4 w-4" />
              {sortOrder === 'newest' ? 'Mais recente primeiro' : 'Mais antigo primeiro'}
            </button>
          </div>
          
          <div className="text-center py-10 text-gray-400">
            <p className="text-xl mb-2">Nenhum screamsheet encontrado</p>
            <p>Tente ajustar seus filtros de busca</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-purple-400 flex items-center border-b border-purple-900 pb-2">
        <CyberpunkText variant="primary">📰 Screamsheets</CyberpunkText>
      </h1>
      
      <div className="p-6  shadow-lg bg-black border border-purple-900 relative">
        <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
          {/* Barra de busca */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar screamsheets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 bg-black border border-purple-900  text-gray-300 focus:border-purple-500 focus:outline-none pr-10"
            />
            <Search className="absolute right-3 top-3 text-gray-500 h-5 w-5" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="absolute right-10 top-3 text-gray-500 hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <button 
            onClick={toggleSortOrder}
            className="bg-black border border-purple-700 hover:bg-purple-900/30 text-purple-400 p-3  flex items-center"
          >
            <ArrowUpDown className="mr-2 h-4 w-4" />
            {sortOrder === 'newest' ? 'Mais recente primeiro' : 'Mais antigo primeiro'}
          </button>
          
          <div className="w-full md:w-auto flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">Mostrando {filteredSheets.length} screamsheets</span>
          </div>
        </div>
        
        {/* Grid de Screamsheets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSheets.map(sheet => renderScreamsheetCard(sheet))}
        </div>
      </div>
    </div>
  );
};

export default ScreamsheetsViewer;