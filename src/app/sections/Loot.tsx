import React, { useState, useEffect } from 'react';
import { Search, X, ChevronDown, ChevronUp, Zap, Shield, Crosshair, Package, Cpu, ShoppingBag, Percent, PlusCircle, DollarSign, Info } from 'lucide-react';
import GlitchText from "../components/GlitchText";

// Dados mockados de equipamentos - substituir por importação de arquivo JSON real
const equipmentData = {
  categories: [
    { id: "armas", name: "Armas", icon: <Crosshair />, color: "red" },
    { id: "equipamentos", name: "Equipamentos", icon: <Package />, color: "blue" },
    { id: "roupas", name: "Roupas e Estilo", icon: <ShoppingBag />, color: "purple" },
    { id: "cyberware", name: "Cyberware", icon: <Cpu />, color: "green" }
  ],
  priceCategories: [
    { id: "cheap", name: "Barato", value: "10eb", color: "gray" },
    { id: "everyday", name: "Comum", value: "20eb", color: "blue" },
    { id: "costly", name: "Caro", value: "50eb", color: "green" },
    { id: "premium", name: "Premium", value: "100eb", color: "yellow" },
    { id: "expensive", name: "Muito Caro", value: "500eb", color: "orange" },
    { id: "veryExpensive", name: "Caríssimo", value: "1.000eb", color: "red" },
    { id: "luxury", name: "Luxo", value: "5.000eb", color: "pink" },
    { id: "superLuxury", name: "Super Luxo", value: "10.000eb+", color: "purple" }
  ],
  items: [
    {
      id: "mediumPistol",
      name: "Medium Pistol",
      category: "armas",
      price: 100,
      priceCategory: "premium",
      damage: "2d6",
      rof: 2,
      features: ["Comum", "Equilibrado", "Fácil de ocultar"],
      description: "Pistola padrão, popular entre civis e oficiais por seu equilíbrio entre poder de fogo e portabilidade.",
      imageUrl: "/images/equipment/medium-pistol.jpg",
      availability: "Facilmente encontrado",
      stats: {
        damage: "2d6",
        rof: "2",
        hands: "1"
      }
    },
    {
      id: "heavyPistol",
      name: "Heavy Pistol",
      category: "armas",
      price: 500,
      priceCategory: "expensive",
      damage: "3d6",
      rof: 2,
      features: ["Potente", "Recuo mais forte", "Intimidadora"],
      description: "Pistola de alto calibre, preferida por mercenários e executivos paranóicos. Causa dano considerável com boa taxa de disparo.",
      imageUrl: "/images/equipment/heavy-pistol.jpg",
      availability: "Comum em lojas especializadas",
      stats: {
        damage: "3d6",
        rof: "2",
        hands: "1"
      }
    },
    {
      id: "veryHeavyPistol",
      name: "Very Heavy Pistol",
      category: "armas",
      price: 1000,
      priceCategory: "veryExpensive",
      damage: "4d6",
      rof: 1,
      features: ["Extremamente potente", "Recuo acentuado", "Difícil de ocultar"],
      description: "Verdadeiro canhão portátil, essas pistolas de calibre massivo são capazes de derrubar um alvo com um único tiro bem posicionado.",
      imageUrl: "/images/equipment/very-heavy-pistol.jpg",
      availability: "Raro, geralmente mercado negro",
      stats: {
        damage: "4d6",
        rof: "1",
        hands: "1"
      }
    },
    {
      id: "smg",
      name: "SMG",
      category: "armas",
      price: 500,
      priceCategory: "expensive",
      damage: "2d6",
      rof: 1,
      features: ["Fogo automático", "Compacto", "Alta taxa de disparo"],
      description: "Submetralhadora compacta, ideal para combate em espaços fechados. Combina portabilidade com uma taxa de disparo elevada.",
      imageUrl: "/images/equipment/smg.jpg",
      availability: "Restrito, mercado negro ou contatos militares",
      stats: {
        damage: "2d6",
        rof: "1 (automático)",
        hands: "1-2"
      }
    },
    {
      id: "assaultRifle",
      name: "Assault Rifle",
      category: "armas",
      price: 2000,
      priceCategory: "luxury",
      damage: "5d6",
      rof: 1,
      features: ["Longo alcance", "Penetração de armadura", "Personalizável"],
      description: "Rifle de assalto militar, poderoso e versátil. Eficaz em médias e longas distâncias, com excelente poder de fogo.",
      imageUrl: "/images/equipment/assault-rifle.jpg",
      availability: "Altamente restrito, contatos militares/criminosos",
      stats: {
        damage: "5d6",
        rof: "1 (automático)",
        hands: "2"
      }
    },
    {
      id: "arasakaWSSniper",
      name: "Arasaka WSSA Sniper System",
      category: "armas",
      price: 500,
      priceCategory: "expensive",
      damage: "5d6+1",
      rof: 1,
      features: ["Precisão extrema", "Alcance de 800m", "Personalização avançada"],
      description: "Rifle sniper de alta precisão fabricado pela Arasaka. O sistema completo inclui bipé, mira telescópica de alta potência e capacidade para 8 projéteis por carregador.",
      longDescription: "O Arasaka WSSA Sniper System é projetado para ser incrivelmente preciso, permitindo ao atirador atingir alvos pequenos a longas distâncias com alta confiabilidade. Suas balas de alto calibre podem penetrar armaduras leves e médias, causando dano significativo mesmo contra inimigos bem protegidos. Inclui suportes e amortecedores que reduzem o recuo, melhorando a estabilidade e a precisão do tiro.",
      imageUrl: "/images/equipment/arasaka-sniper.jpg",
      availability: "Raro, contatos especializados ou militares",
      stats: {
        damage: "5d6+1",
        rof: "1",
        hands: "2",
        ammo: "8",
        range: "800m"
      },
      source: "Livro Básico, Página 94"
    },
    {
      id: "medkit",
      name: "Kit Médico",
      category: "equipamentos",
      price: 100,
      priceCategory: "premium",
      features: ["Primeiros socorros", "Estabilização", "Tratamento de ferimentos"],
      description: "Kit com equipamentos médicos básicos para emergências. Inclui bandagens, anticoagulantes, analgésicos e ferramentas básicas de sutura.",
      imageUrl: "/images/equipment/medkit.jpg",
      availability: "Facilmente encontrado",
      stats: {
        healing: "1d6 HP",
        uses: "5"
      }
    },
    {
      id: "techToolkit",
      name: "Kit de Ferramentas Techie",
      category: "equipamentos",
      price: 300,
      priceCategory: "expensive",
      features: ["Reparo de equipamentos", "Modificação de armas", "Hackeamento físico"],
      description: "Conjunto completo de ferramentas para manutenção e modificação de equipamentos eletrônicos, armas e veículos.",
      imageUrl: "/images/equipment/tech-toolkit.jpg",
      availability: "Comum em lojas especializadas",
      stats: {
        bonus: "+1 em testes de Reparo",
        durability: "Permanente"
      }
    },
    {
      id: "lockbreaker",
      name: "Lockbreaker",
      category: "equipamentos",
      price: 100,
      priceCategory: "premium",
      features: ["Abre fechaduras eletrônicas", "Portátil", "Difícil de rastrear"],
      description: "Dispositivo compacto que pode quebrar a segurança de fechaduras eletrônicas comuns. Muito utilizado por ladrões e infiltradores profissionais.",
      imageUrl: "/images/equipment/lockbreaker.jpg",
      availability: "Mercado negro",
      stats: {
        bonus: "Teste contra DV da fechadura",
        charges: "10 usos"
      }
    },
    {
      id: "formalOutfit",
      name: "Roupa Formal Corporativa",
      category: "roupas",
      price: 500,
      priceCategory: "expensive",
      features: ["Alta qualidade", "Impressiona executivos", "Disfarce corporativo"],
      description: "Traje formal de alta qualidade, perfeito para se infiltrar em ambientes corporativos ou participar de eventos de alto escalão.",
      imageUrl: "/images/equipment/formal-outfit.jpg",
      availability: "Lojas de departamento premium",
      stats: {
        style: "Corporativo",
        bonus: "+2 em testes sociais com executivos"
      }
    },
    {
      id: "streetwear",
      name: "Streetwear Urbano",
      category: "roupas",
      price: 50,
      priceCategory: "costly",
      features: ["Estiloso", "Durável", "Identidade urbana"],
      description: "Roupas urbanas com estilo distintivo, combinando moda de rua com elementos de proteção sutil. Popular entre fixers e edgerunners.",
      imageUrl: "/images/equipment/streetwear.jpg",
      availability: "Comum em áreas urbanas",
      stats: {
        style: "Rua",
        bonus: "+1 em interações com gangues urbanas"
      }
    },
    {
      id: "neonFashion",
      name: "Moda Neon",
      category: "roupas",
      price: 200,
      priceCategory: "expensive",
      features: ["Chamativo", "Iluminado", "Impressiona na vida noturna"],
      description: "Roupas com elementos luminosos integrados, perfeitas para clubes noturnos e casas de shows. Garante que você será notado.",
      imageUrl: "/images/equipment/neon-fashion.jpg",
      availability: "Boutiques de moda alternativa",
      stats: {
        style: "Neokitsch",
        bonus: "+2 em testes sociais em vida noturna",
        power: "Requer bateria (24h)"
      }
    },
    {
      id: "cyberarm",
      name: "Cyberarm Premium",
      category: "cyberware",
      price: 100,
      priceCategory: "premium",
      features: ["Força aumentada", "Personalizável", "Espaço para armas integradas"],
      description: "Braço cibernético de alta qualidade que oferece força substancialmente maior que um braço natural, além de possibilidades de personalização.",
      longDescription: "O Cyberarm Premium oferece substancial aumento de força, permitindo ao usuário exercer maior força que com um braço natural. Dependendo da configuração escolhida, pode vir equipado com armas integradas como lâminas retráteis, armas de fogo ocultas ou armas de combate corpo a corpo. Construído com materiais avançados projetados para resistir a danos e oferecer proteção ao usuário.",
      imageUrl: "/images/equipment/cyberarm.jpg",
      availability: "Clínicas de implantes certificadas",
      stats: {
        humanity: "-7 ou -2d6",
        strength: "+2",
        damage: "+1d6 em ataques corpo a corpo"
      },
      source: "Livro Básico, Página 115",
      installLocation: "Hospital especializado (ex: A Caldeira)",
      installRequirements: "Médico especializado (Medtech)"
    },
    {
      id: "cybereye",
      name: "Olho Cibernético",
      category: "cyberware",
      price: 500,
      priceCategory: "expensive",
      features: ["Melhor visão", "Zoom óptico", "Gravação visual"],
      description: "Substituto cibernético para o olho humano, oferecendo capacidades visuais aprimoradas e a possibilidade de instalar módulos adicionais.",
      imageUrl: "/images/equipment/cybereye.jpg",
      availability: "Clínicas de implantes certificadas",
      stats: {
        humanity: "-4",
        vision: "+2 em testes de Percepção visual",
        features: "Zoom óptico 2x"
      }
    },
    {
      id: "neuralLink",
      name: "Neural Link",
      category: "cyberware",
      price: 1000,
      priceCategory: "veryExpensive",
      features: ["Processamento neural acelerado", "Conexão com rede", "Base para outros implantes"],
      description: "Implante cerebral que permite conexão direta com sistemas digitais e serve como base para outros implantes neurais mais avançados.",
      imageUrl: "/images/equipment/neural-link.jpg",
      availability: "Clínicas especializadas de alto nível",
      stats: {
        humanity: "-6",
        processing: "+1 em testes relacionados a Interface",
        requirement: "Necessário para maioria dos cyberware avançados"
      }
    }
  ]
};

const EquipmentSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedItem, setExpandedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState(equipmentData.items);
  const [expandedSections, setExpandedSections] = useState({
    guide: false,
    availability: false
  });

  // Filtrar itens com base na pesquisa e categoria
  useEffect(() => {
    let filtered = equipmentData.items;
    
    // Filtrar por categoria
    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filtrar por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.features && item.features.some(feature => 
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    }
    
    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory]);

  // Alternar expansão de seções
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Alternar visualização detalhada de um item
  const toggleItemDetails = (id) => {
    setExpandedItem(prev => prev === id ? null : id);
  };

  // Obter cor baseada na categoria de preço
  const getPriceColor = (priceCategory) => {
    const category = equipmentData.priceCategories.find(cat => cat.id === priceCategory);
    return category ? category.color : "gray";
  };

  // Cor baseada na categoria
  const getCategoryColor = (categoryId) => {
    const category = equipmentData.categories.find(cat => cat.id === categoryId);
    return category ? category.color : "gray";
  };

  // Formatar nome da categoria
  const getCategoryName = (categoryId) => {
    const category = equipmentData.categories.find(cat => cat.id === categoryId);
    return category ? category.name : "Não categorizado";
  };

  // Renderizar card de item
  const renderItemCard = (item) => {
    const isExpanded = expandedItem === item.id;
    const categoryColor = getCategoryColor(item.category);
    const priceColor = getPriceColor(item.priceCategory);
    
    return (
      <div 
        key={item.id}
        className={`bg-black border border-${categoryColor}-900  overflow-hidden transition-all duration-300 ${isExpanded ? 'col-span-full' : ''}`}
      >
        <div 
          className={`p-4 bg-${categoryColor}-900/20 cursor-pointer`}
          onClick={() => toggleItemDetails(item.id)}
        >
          <div className="flex justify-between items-start mb-1">
            <h3 className={`text-lg font-bold text-${categoryColor}-400`}>{item.name}</h3>
            <div className={`flex items-center text-${priceColor}-400 text-sm`}>
              <DollarSign className="w-3 h-3 mr-1" />
              <span>{item.price}eb</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className={`text-${categoryColor}-400/70 text-xs`}>{getCategoryName(item.category)}</span>
            <div>
              {isExpanded ? 
                <ChevronUp className={`w-5 h-5 text-${categoryColor}-400`} /> : 
                <ChevronDown className={`w-5 h-5 text-${categoryColor}-400`} />
              }
            </div>
          </div>
        </div>
        
        <div className={`p-4 ${isExpanded ? 'block' : 'hidden'}`}>
          {/* Preview sempre visível */}
          <p className="text-gray-300 mb-4">{item.description}</p>
          
          {/* Detalhes quando expandido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Características */}
            <div className={`p-3 bg-${categoryColor}-900/10  border border-${categoryColor}-900/40`}>
              <h4 className={`text-${categoryColor}-400 font-bold mb-2 flex items-center`}>
                <Info className="w-4 h-4 mr-2" /> Características
              </h4>
              <ul className="space-y-1">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className={`text-${categoryColor}-500 mr-2`}>•</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Estatísticas */}
            {item.stats && (
              <div className={`p-3 bg-${categoryColor}-900/10  border border-${categoryColor}-900/40`}>
                <h4 className={`text-${categoryColor}-400 font-bold mb-2 flex items-center`}>
                  <Zap className="w-4 h-4 mr-2" /> Estatísticas
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(item.stats).map(([stat, value]) => (
                    <div key={stat} className="flex justify-between">
                      <span className="text-gray-400 text-sm capitalize">{stat}:</span>
                      <span className={`text-${categoryColor}-400 text-sm font-mono`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Informações adicionais para alguns itens */}
          {item.longDescription && (
            <div className={`p-3 bg-${categoryColor}-900/10  border border-${categoryColor}-900/40 mb-4`}>
              <h4 className={`text-${categoryColor}-400 font-bold mb-2`}>Descrição Detalhada</h4>
              <p className="text-gray-300 text-sm">{item.longDescription}</p>
            </div>
          )}
          
          {/* Informação de instalação para cyberware */}
          {item.category === "cyberware" && (
            <div className="p-3 bg-red-900/10  border border-red-900/40 mb-4">
              <h4 className="text-red-400 font-bold mb-2 flex items-center">
                 Requisitos de Instalação
              </h4>
              <div className="space-y-1 text-sm">
                <p className="text-gray-300">
                  <span className="text-red-400 font-bold mr-1">Local:</span> 
                  {item.installLocation || "Clínica especializada em cyberware"}
                </p>
                <p className="text-gray-300">
                  <span className="text-red-400 font-bold mr-1">Requisito:</span> 
                  {item.installRequirements || "Médico ou técnico certificado"}
                </p>
                <p className="text-gray-300">
                  <span className="text-red-400 font-bold mr-1">Custo Humanidade:</span> 
                  {item.stats.humanity || "Varia de acordo com a instalação"}
                </p>
              </div>
            </div>
          )}
          
          {/* Fonte do item */}
          {item.source && (
            <div className="text-right mt-2">
              <span className="text-xs text-gray-500">{item.source}</span>
            </div>
          )}
          
          <div className="flex justify-center mt-4">
            <button 
              onClick={() => toggleItemDetails(item.id)}
              className={`bg-black border border-${categoryColor}-700 hover:bg-${categoryColor}-900/30 text-${categoryColor}-400 px-4 py-2 rounded-md flex items-center`}
            >
              <ChevronUp className="mr-1 h-5 w-5" />
              Recolher
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-orange-400 flex items-center border-b border-orange-900 pb-2">
        <span className="mr-2">🔫</span>
        <GlitchText variant="accent2">Equipamentos</GlitchText>
      </h1>
      
      {/* Guia de Preços e Compras */}
      <div className="mb-6">
        <div className="p-4  shadow-lg bg-black border border-orange-900 relative overflow-hidden">
          <button 
            onClick={() => toggleSection('guide')}
            className="flex justify-between items-center w-full text-left"
          >
            <h2 className="text-xl font-bold text-orange-400 flex items-center">
              <DollarSign className="w-5 h-5 mr-2" /> Guia de Preços e Compras
            </h2>
            {expandedSections.guide ? 
              <ChevronUp className="w-5 h-5 text-orange-400" /> : 
              <ChevronDown className="w-5 h-5 text-orange-400" />
            }
          </button>
          
          {expandedSections.guide && (
            <div className="mt-4">
              <div className="border-l-2 border-orange-700 pl-4 mb-6">
                <p className="text-gray-300 mb-3">
                  Em Cyberpunk RED, tudo tem um preço - geralmente em eurodollars (eb). A raridade, qualidade e demanda determinam o custo, e conhecer as categorias de preço pode te ajudar a planejar seus gastos e negociações.
                </p>
              </div>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-900/30 border-b border-orange-900/50">
                      <th className="text-left p-2 text-orange-400">Categoria</th>
                      <th className="text-center p-2 text-orange-400">Preço Base</th>
                      <th className="text-left p-2 text-orange-400">O que você consegue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-orange-900/30">
                      <td className="p-2 text-gray-300">Barato (Cheap)</td>
                      <td className="p-2 text-center text-gray-400 font-mono">10eb</td>
                      <td className="p-2 text-gray-300">Itens básicos, de baixa qualidade</td>
                    </tr>
                    <tr className="border-b border-orange-900/30 bg-black/30">
                      <td className="p-2 text-gray-300">Comum (Everyday)</td>
                      <td className="p-2 text-center text-blue-400 font-mono">20eb</td>
                      <td className="p-2 text-gray-300">Itens padrão do dia a dia</td>
                    </tr>
                    <tr className="border-b border-orange-900/30">
                      <td className="p-2 text-gray-300">Caro (Costly)</td>
                      <td className="p-2 text-center text-green-400 font-mono">50eb</td>
                      <td className="p-2 text-gray-300">Itens de qualidade acima da média</td>
                    </tr>
                    <tr className="border-b border-orange-900/30 bg-black/30">
                      <td className="p-2 text-gray-300">Premium</td>
                      <td className="p-2 text-center text-yellow-400 font-mono">100eb</td>
                      <td className="p-2 text-gray-300">Alta qualidade, armas comuns, cyberware básico</td>
                    </tr>
                    <tr className="border-b border-orange-900/30">
                      <td className="p-2 text-gray-300">Muito Caro (Expensive)</td>
                      <td className="p-2 text-center text-orange-400 font-mono">500eb</td>
                      <td className="p-2 text-gray-300">Equipamento especializado, armas pesadas</td>
                    </tr>
                    <tr className="border-b border-orange-900/30 bg-black/30">
                      <td className="p-2 text-gray-300">Caríssimo (Very Expensive)</td>
                      <td className="p-2 text-center text-red-400 font-mono">1.000eb</td>
                      <td className="p-2 text-gray-300">Armas militares, cyberware avançado</td>
                    </tr>
                    <tr className="border-b border-orange-900/30">
                      <td className="p-2 text-gray-300">Luxo (Luxury)</td>
                      <td className="p-2 text-center text-pink-400 font-mono">5.000eb</td>
                      <td className="p-2 text-gray-300">Itens raros, tecnologia de ponta</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-gray-300">Super Luxo (Super Luxury)</td>
                      <td className="p-2 text-center text-purple-400 font-mono">10.000eb+</td>
                      <td className="p-2 text-gray-300">Itens exclusivos, acessíveis apenas à elite</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-orange-900/10  border border-orange-900/40">
                  <h3 className="text-orange-400 font-bold mb-2 flex items-center">
                    <Percent className="w-4 h-4 mr-2" /> Negociação
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Os preços listados são apenas base de referência. O valor real pode variar dependendo de:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start text-sm">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-300">Sua reputação e relacionamento com o vendedor</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-300">Escassez do item na região</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-300">Habilidades de barganha (rolagem de Trading)</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-300">Contexto da compra (emergência, local perigoso)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-3 bg-orange-900/10  border border-orange-900/40">
                  <h3 className="text-orange-400 font-bold mb-2 flex items-center">
                    <PlusCircle className="w-4 h-4 mr-2" /> Testes para Compra
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    Para itens mais raros ou ilegais, o Mestre pode exigir testes específicos:
                  </p>
                  <div className="space-y-2">
                    <div className="bg-black/40 p-2 rounded border border-orange-900/30">
                      <span className="text-orange-400 font-mono block mb-1">Streetwise + INT + 1d10 vs DV</span>
                      <span className="text-gray-400 text-sm">Para encontrar onde comprar</span>
                    </div>
                    <div className="bg-black/40 p-2 rounded border border-orange-900/30">
                      <span className="text-orange-400 font-mono block mb-1">Persuasion ou Bribery vs DV</span>
                      <span className="text-gray-400 text-sm">Para convencer o vendedor</span>
                    </div>
                    <div className="bg-black/40 p-2 rounded border border-orange-900/30">
                      <span className="text-orange-400 font-mono block mb-1">Trading vs DV</span>
                      <span className="text-gray-400 text-sm">Para negociar preço</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Disponibilidade e Mercado Negro */}
      <div className="mb-6">
        <div className="p-4  shadow-lg bg-black border border-red-900 relative overflow-hidden">
          <button 
            onClick={() => toggleSection('availability')}
            className="flex justify-between items-center w-full text-left"
          >
            <h2 className="text-xl font-bold text-red-400 flex items-center">
              <Shield className="w-5 h-5 mr-2" /> Disponibilidade e Mercado Negro
            </h2>
            {expandedSections.availability ? 
              <ChevronUp className="w-5 h-5 text-red-400" /> : 
              <ChevronDown className="w-5 h-5 text-red-400" />
            }
          </button>
          
          {expandedSections.availability && (
            <div className="mt-4">
              <div className="border-l-2 border-red-700 pl-4 mb-6">
                <p className="text-gray-300">
                  Nem todo equipamento é legalmente disponível em Nova São Paulo. Muitos itens, especialmente armas potentes e cyberware avançado, requerem licenças especiais ou só podem ser adquiridos através de canais alternativos.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-green-900/20  border border-green-900">
                  <h3 className="text-green-400 font-bold mb-2">Legal e Comum</h3>
                  <ul className="space-y-1">
                    <li className="flex items-start text-sm">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">Pistolas de pequeno calibre</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">Ferramentas básicas</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">Roupas estilizadas</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-300">Cyberware cosmético</span>
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-400 text-xs italic">
                    Encontrado facilmente em lojas comuns
                  </p>
                </div>
                
                <div className="p-3 bg-yellow-900/20  border border-yellow-900">
                  <h3 className="text-yellow-400 font-bold mb-2">Restrito</h3>
                  <ul className="space-y-1">
                    <li className="flex items-start text-sm">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="text-gray-300">Armas militares</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="text-gray-300">Equipamento de espionagem</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="text-gray-300">Cyberware militar</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span className="text-gray-300">Dispositivos hackers</span>
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-400 text-xs italic">
                    Requer contatos ou licenças especiais
                  </p>
                </div>
                
                <div className="p-3 bg-red-900/20  border border-red-900">
                  <h3 className="text-red-400 font-bold mb-2">Ilegal</h3>
                  <ul className="space-y-1">
                    <li className="flex items-start text-sm">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">Armas de destruição em massa</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">Cyberware experimental</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">Netrunners militares</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-300">Drogas sintéticas avançadas</span>
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-400 text-xs italic">
                    Apenas mercado negro e contatos criminosos
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-black/30 border border-red-900/60 ">
                <h3 className="text-red-400 font-bold mb-2">O Mercado Negro</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Para itens ilegais ou raros, o mercado negro é uma opção, mas vem com riscos adicionais:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-black/40 p-2 rounded-md">
                    <h4 className="text-red-400 text-sm font-bold mb-1">Sobretaxas</h4>
                    <p className="text-gray-400 text-xs">
                      Itens ilegais geralmente custam 20-100% a mais que seu preço base
                    </p>
                  </div>
                  <div className="bg-black/40 p-2 rounded-md">
                    <h4 className="text-red-400 text-sm font-bold mb-1">Qualidade Duvidosa</h4>
                    <p className="text-gray-400 text-xs">
                      25% de chance de falhas ou defeitos não declarados
                    </p>
                  </div>
                  <div className="bg-black/40 p-2 rounded-md">
                    <h4 className="text-red-400 text-sm font-bold mb-1">Armadilhas</h4>
                    <p className="text-gray-400 text-xs">
                      Risco de emboscadas, golpes ou atenção policial
                    </p>
                  </div>
                  <div className="bg-black/40 p-2 rounded-md">
                    <h4 className="text-red-400 text-sm font-bold mb-1">Contatos Necessários</h4>
                    <p className="text-gray-400 text-xs">
                      Fixer ou Streetwise elevado requeridos para acesso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Pesquisa e Filtro */}
      <div className="mb-6">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Buscar equipamentos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-black border border-orange-900  text-gray-300 focus:border-orange-500 focus:outline-none pr-10"
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
        
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              selectedCategory === "all" 
                ? "bg-orange-900/50 text-orange-400 border border-orange-700" 
                : "bg-black text-gray-400 border border-gray-800 hover:bg-orange-900/20 hover:border-orange-900/50"
            }`}
          >
            Todos
          </button>
          
          {equipmentData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center ${
                selectedCategory === category.id 
                  ? `bg-${category.color}-900/50 text-${category.color}-400 border border-${category.color}-700`
                  : `bg-black text-gray-400 border border-gray-800 hover:bg-${category.color}-900/20 hover:border-${category.color}-900/50`
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Lista de Equipamentos */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map(item => renderItemCard(item))}
        </div>
      ) : (
          <div className="p-10 text-center border border-orange-900 ">
          <p className="text-xl text-orange-400 mb-2">Nenhum equipamento encontrado</p>
          <p className="text-gray-500">Tente ajustar seus filtros ou termos de busca</p>
        </div>
      )}
    </div>
  );
};

export default EquipmentSection;