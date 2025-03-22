import React, { useState, useEffect } from "react";
import GlitchText from "../components/GlitchText";

// Import your rules data
import rulesData from "../data/rules.json";

const Rules: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(
    rulesData.sections[0].id,
  );
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const currentSection = rulesData.sections.find(
    (section) => section.id === activeSection,
  );

  // Inicializa o estado para que o primeiro item de cada seção esteja expandido
  useEffect(() => {
    if (currentSection && currentSection.content.length > 0) {
      const initialExpandedState: Record<string, boolean> = {};
      // Expande o primeiro item de cada seção
      initialExpandedState[`${currentSection.id}-0`] = true;

      // Mantém os itens já expandidos em outras seções
      setExpandedItems((prev) => ({
        ...prev,
        ...initialExpandedState,
      }));
    }
  }, [activeSection, currentSection]);

  // Toggle expanded state for an item
  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  // Check if an item is expanded
  const isExpanded = (itemId: string) => {
    return expandedItems[itemId] || false;
  };

  // Toggle menu for mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">🎲</span>
        <GlitchText>Rules</GlitchText>
      </h1>

      {/* Menu para seções - responsivo */}
      <div className="mb-6">
        {/* Botão do menu para dispositivos móveis */}
        <div className="md:hidden mb-4">
          <button
            onClick={toggleMenu}
            className="w-full p-3 flex items-center justify-between bg-green-900/30 text-green-400  border border-green-700"
          >
            <span className="flex items-center">
              <span className="mr-2">{currentSection?.icon}</span>
              <span>{currentSection?.title}</span>
            </span>
            <span>{menuOpen ? "▲" : "▼"}</span>
          </button>
        </div>

        {/* Menu principal - visível em desktop, toggle em mobile */}
        <div
          className={`${menuOpen ? "block" : "hidden md:grid"} md:grid-cols-3 lg:grid-cols-4 gap-2 bg-black/90 p-3  border border-green-900/50`}
        >
          {rulesData.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setMenuOpen(false);
              }}
              className={`px-3 py-2  flex items-center mb-1 ${
                activeSection === section.id
                  ? "bg-green-900/70 text-green-400 border border-green-700"
                  : "bg-black text-gray-400 border border-gray-800 hover:border-green-800 hover:text-green-400"
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      {currentSection && (
        <div className="space-y-6">
          {currentSection.content.map((item, index) => (
            <div
              key={`${currentSection.id}-content-${index}`}
              className=" shadow-lg bg-black border border-green-900 relative overflow-hidden"
              id={`${currentSection.id}-${index}`}
            >
              {/* Background Matrix Effect for combat section */}
              {currentSection.id === "combat" && (
                <div className="absolute inset-0 opacity-5 overflow-hidden">
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
                                <span key={j}>
                                  {Math.random() > 0.5 ? "1" : "0"}
                                </span>
                              ))}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <button
                  onClick={() => toggleExpand(`${currentSection.id}-${index}`)}
                  className="w-full text-left p-4 border-b border-green-900/50 bg-gradient-to-r from-green-900/20 to-transparent"
                >
                  <h2 className="text-2xl font-bold text-green-400 flex items-center">
                    {"icon" in item && item.icon && (
                      <span className="mr-3 text-2xl">{item.icon}</span>
                    )}
                    <span className="flex-1">{item.title}</span>
                    <span className="ml-auto text-lg">
                      {isExpanded(`${currentSection.id}-${index}`) ? "▼" : "▶"}
                    </span>
                  </h2>
                </button>

                {/* Conteúdo colapsável */}
                <div
                  className={
                    isExpanded(`${currentSection.id}-${index}`)
                      ? "p-4"
                      : "hidden"
                  }
                >
                  {"description" in item && item.description && (
                    <div className="mb-6 text-gray-300 bg-green-900/10 p-4  border-l-4 border-green-700">
                      {Array.isArray(item.description) ? (
                        item.description.map((desc, i) => (
                          <p key={i} className="mb-2 last:mb-0">
                            {desc}
                          </p>
                        ))
                      ) : (
                        <p>{item.description}</p>
                      )}
                    </div>
                  )}

                  {/* Render subsections */}
                  {item.subsections && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {item.subsections.map((sub, subIndex) => (
                        <RenderSubsection
                          key={`subsection-${subIndex}`}
                          subsection={sub}
                          sectionId={currentSection.id}
                          itemIndex={index}
                          subIndex={subIndex}
                        />
                      ))}
                    </div>
                  )}

                  {/* Render tables */}
                  {"table" in item && item.table && (
                    <div className="overflow-x-auto mb-6  border border-green-800">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-green-800 bg-green-900/20">
                            {Object.keys(item.table[0]).map(
                              (header, headerIndex) => (
                                <th
                                  key={headerIndex}
                                  className="text-left py-2 px-4 text-green-400 font-mono"
                                >
                                  {header.charAt(0).toUpperCase() +
                                    header.slice(1)}
                                </th>
                              ),
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {item.table.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={`border-b border-green-900/30 ${rowIndex % 2 === 0 ? "bg-black" : "bg-green-900/10"}`}
                            >
                              {Object.values(row).map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className="text-left py-2 px-4 text-gray-300"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Render states */}
                  {"states" in item && item.states && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {item.states.map((state, stateIndex) => (
                        <div
                          key={stateIndex}
                          className="bg-black border border-green-800  p-4"
                        >
                          <h4 className="font-bold text-green-400 mb-2 text-lg border-b border-green-900/50 pb-2">
                            {state.state}
                          </h4>
                          <div className="space-y-2">
                            <p className="text-gray-400">
                              <span className="text-green-500 font-bold">
                                Condição:
                              </span>{" "}
                              {state.condition}
                            </p>
                            <p className="text-gray-400">
                              <span className="text-green-500 font-bold">
                                Efeitos:
                              </span>{" "}
                              {state.effects}
                            </p>
                            <p className="text-gray-400">
                              <span className="text-green-500 font-bold">
                                Cura:
                              </span>{" "}
                              {state.healing}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render conclusion/footer */}
                  {"conclusion" in item && item.conclusion && (
                    <div className="mt-6 p-4 bg-green-900/20 border border-green-800 ">
                      <p className="text-green-400">{item.conclusion}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Helper component to render subsections
const RenderSubsection = ({
  subsection,
  sectionId,
}: {
  subsection: any;
  sectionId: string;
  itemIndex: number;
  subIndex: number;
}) => {
  return (
    <div className="bg-black border border-green-900  overflow-hidden">
      {/* Subsection header */}
      <div className="p-4 border-b border-green-900/30 bg-green-900/20">
        <h3 className="text-xl font-bold text-green-400 flex items-center">
          {subsection.icon && <span className="mr-3">{subsection.icon}</span>}
          {subsection.title}
        </h3>
      </div>

      {/* Subsection content */}
      <div className="p-4">
        {subsection.description && (
          <p className="text-gray-300 mb-4">{subsection.description}</p>
        )}

        {subsection.formula && (
          <div className="bg-green-900/20 border border-green-800  p-3 mb-4 font-mono text-green-400 text-center">
            {subsection.formula}
          </div>
        )}

        {/* Lists */}
        {subsection.list && (
          <div className="mb-4 bg-black/50  p-3 border-l-2 border-green-700">
            <ul className="space-y-2 text-gray-400">
              {subsection.list.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Uses */}
        {subsection.uses && (
          <div className="mb-4 bg-black/50  p-3 border-l-2 border-green-700">
            <ul className="space-y-2 text-gray-400">
              {subsection.uses.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        {subsection.actions && (
          <div className="mb-4 grid grid-cols-1 gap-2">
            {subsection.actions.map((action, i) => (
              <div
                key={i}
                className="bg-green-900/10 p-3  border-l-2 border-green-700"
              >
                <span className="text-green-400 font-bold block mb-1">
                  {action.name}
                </span>
                <span className="text-gray-400">{action.description}</span>
              </div>
            ))}
          </div>
        )}

        {/* Parts */}
        {subsection.parts && (
          <div className="space-y-4 mb-4">
            {subsection.parts.map((part, i) => (
              <div
                key={i}
                className="bg-black/50  p-4 border-l-2 border-green-700"
              >
                <h4 className="font-bold text-green-400 mb-2 flex items-center">
                  {part.icon && <span className="mr-2">{part.icon}</span>}
                  {part.title}
                </h4>

                {part.description && (
                  <p className="text-gray-400 mb-3">{part.description}</p>
                )}

                {part.steps && (
                  <ul className="space-y-1 text-gray-400 mb-3">
                    {part.steps.map((step, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {part.example && (
                  <div className="bg-green-900/10 border border-green-800/50  p-3 mt-2">
                    <p className="text-gray-400 mb-2">
                      {part.example.scenario}
                    </p>
                    <p className="text-green-400 font-mono">
                      {part.example.result}
                    </p>
                    {part.example.note && (
                      <p className="text-gray-500 text-sm italic mt-1">
                        {part.example.note}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Example */}
        {subsection.example && (
          <div className="mb-4 bg-green-900/10 border border-green-800  p-4">
            <p className="text-gray-300 mb-2 border-b border-green-900/30 pb-2">
              {subsection.example.scenario}
            </p>

            {subsection.example.steps && (
              <ul className="space-y-1 text-gray-400 mb-3 pl-3 mt-3">
                {subsection.example.steps.map((step, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">→</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            )}

            <p className="text-green-400 font-mono bg-black/30 p-2 rounded">
              {subsection.example.result}
            </p>

            {subsection.example.conclusion && (
              <p className="text-green-400 font-mono mt-2">
                {subsection.example.conclusion}
              </p>
            )}

            {subsection.example.note && (
              <p className="text-gray-500 text-sm italic mt-2 border-t border-green-900/30 pt-2">
                {subsection.example.note}
              </p>
            )}
          </div>
        )}

        {/* Notes */}
        {subsection.notes && (
          <ul className="mb-4 space-y-1 text-gray-400">
            {subsection.notes.map((note, i) => (
              <li key={i} className="flex items-start text-sm">
                <span className="text-yellow-500 mr-2">※</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Single note */}
        {subsection.note && (
          <p className="text-gray-500 italic mb-4 bg-black/30 p-3  border-l-2 border-yellow-700">
            {subsection.note}
          </p>
        )}

        {/* Factors */}
        {subsection.factors && (
          <div className="mb-4">
            <ul className="space-y-3">
              {subsection.factors.map((factor, i) => (
                <li
                  key={i}
                  className="bg-black/30 p-3  border-l-2 border-green-700"
                >
                  <span className="text-green-400 font-bold block mb-1">
                    {factor.name}
                  </span>
                  <span className="text-gray-400">{factor.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Special case for reputation gaining/losing */}
        {subsection.gaining && (
          <div className="mb-4 space-y-3">
            <div className="bg-green-900/10 p-3  border-l-2 border-green-600">
              <h4 className="font-bold text-green-400 mb-2">
                Ganha reputação:
              </h4>
              <ul className="space-y-1 text-gray-400">
                {subsection.gaining.map((gain, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">+</span>
                    <span>{gain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {subsection.losing && (
              <div className="bg-red-900/10 p-3  border-l-2 border-red-700">
                <h4 className="font-bold text-red-400 mb-2">
                  Perde reputação:
                </h4>
                <p className="text-gray-400">{subsection.losing}</p>
              </div>
            )}
          </div>
        )}

        {/* Special tables and structured data */}
        {RenderSpecialContent(subsection)}
      </div>
    </div>
  );
};

// Helper function to render special content based on subsection data
const RenderSpecialContent = (subsection: any) => {
  // Handle how to buy steps
  if (subsection.howToBuy) {
    return (
      <div className="space-y-4">
        {Object.entries(subsection.howToBuy).map(([key, value]) => {
          const step = value as any;
          return (
            <div
              key={key}
              className="bg-black/40  overflow-hidden border border-green-900"
            >
              <div className="bg-green-900/30 p-3 border-b border-green-800">
                <h4 className="font-bold text-green-400">
                  Passo {key.slice(-1)}: {step.title}
                </h4>
              </div>

              <div className="p-3">
                {step.formula && (
                  <div className="bg-green-900/20 border border-green-800  p-2 mb-3 font-mono text-sm text-green-400 text-center">
                    {step.formula}
                  </div>
                )}

                {step.difficulties && (
                  <div className="mb-3 overflow-x-auto  border border-green-800/50">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-800/50 bg-green-900/20">
                          <th className="text-left py-2 px-3 text-green-400">
                            Raridade
                          </th>
                          <th className="text-center py-2 px-3 text-green-400">
                            DV
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {step.difficulties.map((diff, i) => (
                          <tr
                            key={i}
                            className={`border-b border-green-900/20 ${i % 2 === 0 ? "bg-black" : "bg-green-900/10"}`}
                          >
                            <td className="text-left py-2 px-3 text-gray-400">
                              {diff.rarity}
                            </td>
                            <td className="text-center py-2 px-3 text-gray-400">
                              {diff.dv}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {step.process && (
                  <div className="mb-3 bg-black/30 p-3 ">
                    <ul className="space-y-1 text-gray-400">
                      {step.process.map((proc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.deliveryTimes && (
                  <div className="mb-3 overflow-x-auto  border border-green-800/50">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-800/50 bg-green-900/20">
                          <th className="text-left py-2 px-3 text-green-400">
                            Raridade
                          </th>
                          <th className="text-center py-2 px-3 text-green-400">
                            Tempo
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {step.deliveryTimes.map((time, i) => (
                          <tr
                            key={i}
                            className={`border-b border-green-900/20 ${i % 2 === 0 ? "bg-black" : "bg-green-900/10"}`}
                          >
                            <td className="text-left py-2 px-3 text-gray-400">
                              {time.rarity}
                            </td>
                            <td className="text-center py-2 px-3 text-gray-400">
                              {time.time}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {step.description && (
                  <p className="text-gray-400 mb-3">{step.description}</p>
                )}

                {step.complications && (
                  <div className="mb-3 overflow-x-auto  border border-green-800/50">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-800/50 bg-green-900/20">
                          <th className="text-left py-2 px-3 text-green-400">
                            Dado
                          </th>
                          <th className="text-left py-2 px-3 text-green-400">
                            Evento
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {step.complications.map((comp, i) => (
                          <tr
                            key={i}
                            className={`border-b border-green-900/20 ${i % 2 === 0 ? "bg-black" : "bg-green-900/10"}`}
                          >
                            <td className="text-left py-2 px-3 text-gray-400">
                              {comp.roll}
                            </td>
                            <td className="text-left py-2 px-3 text-gray-400">
                              {comp.result}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {step.note && (
                  <p className="text-gray-500 text-sm italic">{step.note}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Handle black market items table
  if (subsection.blackMarketItems) {
    return (
      <div className="overflow-x-auto  border border-green-800/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-green-800 bg-green-900/20">
              <th className="text-left py-3 px-3 text-green-400">Item</th>
              <th className="text-center py-3 px-3 text-green-400">Raridade</th>
              <th className="text-center py-3 px-3 text-green-400">
                Preço (€$)
              </th>
              <th className="text-left py-3 px-3 text-green-400">Notas</th>
            </tr>
          </thead>
          <tbody>
            {subsection.blackMarketItems.map((item, i) => (
              <tr
                key={i}
                className={`border-b border-green-900/30 ${i % 2 === 0 ? "bg-black" : "bg-green-900/10"}`}
              >
                <td className="text-left py-2 px-3 text-gray-300 font-medium">
                  {item.item}
                </td>
                <td className="text-center py-2 px-3 text-gray-400">
                  {item.rarity}
                </td>
                <td className="text-center py-2 px-3 text-gray-400 font-mono">
                  {item.price}
                </td>
                <td className="text-left py-2 px-3 text-gray-400">
                  {item.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Handle cost of living table
  if (subsection.costOfLiving) {
    return (
      <div className="overflow-x-auto  border border-green-800/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-green-800 bg-green-900/20">
              <th className="text-left py-3 px-3 text-green-400">
                Estilo de Vida
              </th>
              <th className="text-center py-3 px-3 text-green-400">
                Custo mensal
              </th>
              <th className="text-left py-3 px-3 text-green-400">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {subsection.costOfLiving.map((style, i) => (
              <tr
                key={i}
                className={`border-b border-green-900/30 ${i % 2 === 0 ? "bg-black" : "bg-green-900/10"}`}
              >
                <td className="text-left py-2 px-3 text-gray-300 font-medium">
                  {style.style}
                </td>
                <td className="text-center py-2 px-3 text-green-400 font-mono">
                  {style.cost}
                </td>
                <td className="text-left py-2 px-3 text-gray-400">
                  {style.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // If none of the special cases, return null
  return null;
};

export default Rules;
