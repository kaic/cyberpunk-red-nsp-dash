import React, { useState, useEffect } from 'react';
import { Search, MapPin, Users, Info, X, Layers, ChevronDown, ChevronUp, Building, AlertTriangle } from 'lucide-react';
import GlitchText from "../components/GlitchText";

import locationsData from "../data/locations.json";

const LocationsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locationsData);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    details: true,
    contacts: true,
    secrets: true,
    warnings: true
  });

  // Filtrar localizações com base no termo de busca
  useEffect(() => {
    if (searchTerm) {
      const filtered = locationsData.filter(location => 
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locationsData);
    }
  }, [searchTerm]);

  // Selecionar um local
  const handleSelectLocation = (id) => {
    const location = locationsData.find(loc => loc.id === id);
    setSelectedLocation(location);
  };

  // Alternar expansão de seções
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Cor baseada no tipo de local
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'hospital': return 'cyan';
      case 'laboratório': return 'red';
      case 'entretenimento': return 'green';
      case 'corporativo': return 'blue';
      case 'público': return 'purple';
      default: return 'gray';
    }
  };

  // Cor baseada no nível de segurança
  const getSecurityColor = (level) => {
    switch (level.toLowerCase()) {
      case 'baixa': return 'green';
      case 'média': 
      case 'baixa-média': return 'yellow';
      case 'alta': return 'orange';
      case 'extrema': return 'red';
      case 'variável': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-cyan-400 flex items-center border-b border-cyan-900 pb-2">
        <span className="mr-2">📍</span>
        <GlitchText variant="secondary">Locais</GlitchText>
      </h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar locais por nome, distrito, tipo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-black border border-cyan-900  text-gray-300 focus:border-cyan-500 focus:outline-none pr-10"
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
      </div>

      {/* Grid de locais ou Detalhes do local selecionado */}
      {!selectedLocation ? (
        /* Grid de locais */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              onClick={() => handleSelectLocation(location.id)}
              className={`p-4 bg-black border border-${location.accentColor || 'cyan'}-900  cursor-pointer hover:bg-${location.accentColor || 'cyan'}-900/10 transition-all duration-200`}
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className={`text-xl font-bold text-${location.accentColor || 'cyan'}-400`}>{location.name}</h2>
                <div className={`text-xs px-2 py-0.5 rounded-full bg-${getTypeColor(location.type)}-900/50 text-${getTypeColor(location.type)}-400 border border-${getTypeColor(location.type)}-700`}>
                  {location.type}
                </div>
              </div>
              <div className="flex items-center text-gray-400 mb-3 text-sm">
                <MapPin className="h-3 w-3 mr-1" /> {location.district}
                <span className="mx-2">•</span>
                <div className={`text-xs px-2 py-0.5 rounded-full bg-${getSecurityColor(location.security)}-900/50 text-${getSecurityColor(location.security)}-400 border border-${getSecurityColor(location.security)}-700`}>
                  Segurança: {location.security}
                </div>
              </div>
              <p className="text-gray-300 mb-4 line-clamp-3">{location.description}</p>
              
              <div className="flex justify-end">
                <button
                  className={`bg-${location.accentColor || 'cyan'}-900/50 hover:bg-${location.accentColor || 'cyan'}-900 text-${location.accentColor || 'cyan'}-400 py-1 px-3 rounded text-sm`}
                >
                  Ver Detalhes →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Detalhes do local */
        <div className="space-y-6">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setSelectedLocation(null)}
              className={`bg-${selectedLocation.accentColor || 'cyan'}-900/50 hover:bg-${selectedLocation.accentColor || 'cyan'}-900 text-${selectedLocation.accentColor || 'cyan'}-400 py-2 px-4 rounded flex items-center`}
            >
              <span className="mr-1">←</span> Voltar
            </button>
            
            <div className="flex items-center gap-2">
              <div className={`text-xs px-2 py-0.5 rounded-full bg-${getTypeColor(selectedLocation.type)}-900/50 text-${getTypeColor(selectedLocation.type)}-400 border border-${getTypeColor(selectedLocation.type)}-700`}>
                {selectedLocation.type}
              </div>
              <div className={`text-xs px-2 py-0.5 rounded-full bg-${getSecurityColor(selectedLocation.security)}-900/50 text-${getSecurityColor(selectedLocation.security)}-400 border border-${getSecurityColor(selectedLocation.security)}-700`}>
                Segurança: {selectedLocation.security}
              </div>
            </div>
          </div>
          
          {/* Cabeçalho do local */}
            <div className={`p-6  shadow-lg bg-black border border-${selectedLocation.accentColor || 'cyan'}-900 relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-full h-2 bg-${selectedLocation.accentColor || 'cyan'}-500`}></div>
            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <h2 className={`text-2xl font-bold text-${selectedLocation.accentColor || 'cyan'}-400`}>{selectedLocation.name}</h2>
              </div>
              <div className="flex items-center text-gray-400 mb-4 text-sm">
                <MapPin className="h-4 w-4 mr-1" /> {selectedLocation.district}
                <span className="mx-2">•</span>
                <Building className="h-4 w-4 mr-1" /> {selectedLocation.type}
              </div>
              
                <p className="mb-6 text-gray-300 bg-black/50 p-4  border-l-4 border-cyan-700">
                {selectedLocation.detailedDescription}
              </p>

              {/* Imagem do local, se disponível */}
              {selectedLocation.imageUrl && (
                  <div className="mb-6 overflow-hidden  border border-gray-800">
                  <img 
                    src={selectedLocation.imageUrl}
                    alt={selectedLocation.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Contatos */}
          {selectedLocation.contacts && selectedLocation.contacts.length > 0 && (
              <div className={`p-4 bg-black border border-${selectedLocation.accentColor || 'cyan'}-900 `}>
              <button 
                onClick={() => toggleSection('contacts')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className={`text-lg font-bold text-${selectedLocation.accentColor || 'cyan'}-400 flex items-center`}>
                  <Users className="mr-2 h-5 w-5" /> Contatos
                </h3>
                {expandedSections.contacts ? 
                  <ChevronUp className={`h-5 w-5 text-${selectedLocation.accentColor || 'cyan'}-400`} /> : 
                  <ChevronDown className={`h-5 w-5 text-${selectedLocation.accentColor || 'cyan'}-400`} />
                }
              </button>
              
              {expandedSections.contacts && (
                <div className="mt-3 space-y-3">
                  {selectedLocation.contacts.map((contact, index) => (
                    <div key={index} className={`bg-${selectedLocation.accentColor || 'cyan'}-900/20 p-3  border-l-2 border-${selectedLocation.accentColor || 'cyan'}-700`}>
                      <div className="flex justify-between">
                        <h4 className={`text-${selectedLocation.accentColor || 'cyan'}-400 font-bold`}>{contact.name}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-300">
                          {contact.role}
                        </span>
                      </div>
                      {contact.note && (
                        <p className="text-gray-400 text-sm mt-1">{contact.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Detalhes */}
          {selectedLocation.details && selectedLocation.details.length > 0 && (
              <div className={`p-4 bg-black border border-${selectedLocation.accentColor || 'cyan'}-900 `}>
              <button 
                onClick={() => toggleSection('details')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className={`text-lg font-bold text-${selectedLocation.accentColor || 'cyan'}-400 flex items-center`}>
                  <Info className="mr-2 h-5 w-5" /> Detalhes
                </h3>
                {expandedSections.details ? 
                  <ChevronUp className={`h-5 w-5 text-${selectedLocation.accentColor || 'cyan'}-400`} /> : 
                  <ChevronDown className={`h-5 w-5 text-${selectedLocation.accentColor || 'cyan'}-400`} />
                }
              </button>
              
              {expandedSections.details && (
                <ul className="mt-3 space-y-2">
                  {selectedLocation.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`text-${selectedLocation.accentColor || 'cyan'}-500 mr-2`}>•</span>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          
          {/* Segredos (para o Mestre) */}
          {selectedLocation.secrets && selectedLocation.secrets.length > 0 && (
              <div className="p-4 bg-black border border-purple-900 ">
              <button 
                onClick={() => toggleSection('secrets')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-bold text-purple-400 flex items-center">
                  <Layers className="mr-2 h-5 w-5" /> Segredos (Apenas para o Mestre)
                </h3>
                {expandedSections.secrets ? 
                  <ChevronUp className="h-5 w-5 text-purple-400" /> : 
                  <ChevronDown className="h-5 w-5 text-purple-400" />
                }
              </button>
              
              {expandedSections.secrets && (
                  <ul className="mt-3 space-y-2 bg-purple-900/10 p-3  border-l-2 border-purple-700">
                  {selectedLocation.secrets.map((secret, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-300">{secret}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          
          {/* Avisos */}
          {selectedLocation.warnings && selectedLocation.warnings.length > 0 && (
              <div className="p-4 bg-black border border-red-900 ">
              <button 
                onClick={() => toggleSection('warnings')}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-bold text-red-400 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5" /> Avisos
                </h3>
                {expandedSections.warnings ? 
                  <ChevronUp className="h-5 w-5 text-red-400" /> : 
                  <ChevronDown className="h-5 w-5 text-red-400" />
                }
              </button>
              
              {expandedSections.warnings && (
                  <ul className="mt-3 space-y-2 bg-red-900/10 p-3  border-l-2 border-red-700">
                  {selectedLocation.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">!</span>
                      <span className="text-gray-300">{warning}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationsSection;