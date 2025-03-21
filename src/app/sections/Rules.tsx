import React, { useState } from "react";
import GlitchText from "../components/GlitchText";

import rulesData from "../data/rules.json";

const Rules: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(rulesData.sections[0].id);

  const currentSection = rulesData.sections.find(section => section.id === activeSection);

  return (
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-6 text-green-400 flex items-center border-b border-green-900 pb-2">
        <span className="mr-2">⚡</span>
        <GlitchText>Rules</GlitchText>
      </h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {rulesData.sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 flex items-center ${
              activeSection === section.id
                ? "bg-green-900/50 text-green-400 border border-green-700"
                : "bg-black text-gray-400 border border-gray-800 hover:border-green-800 hover:text-green-400"
            }`}
          >
            <span className="mr-2">{section.icon}</span>
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      {currentSection && (
        <div className="space-y-6">
          {currentSection.content.map((item, index) => (
            <div 
              key={`${currentSection.id}-content-${index}`}
              className="p-6 rounded-lg shadow-lg bg-black border border-green-900 relative"
            >
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                </h2>
                
                {item.description && (
                  <div className="mb-4 text-gray-300">
                    {Array.isArray(item.description) 
                      ? item.description.map((desc, i) => <p key={i} className="mb-2">{desc}</p>)
                      : <p>{item.description}</p>
                    }
                  </div>
                )}

                {/* Render subsections */}
                {item.subsections && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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
                {item.table && (
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-green-800">
                          {Object.keys(item.table[0]).map((header, headerIndex) => (
                            <th key={headerIndex} className="text-left py-2 px-4 text-green-400">
                              {header.charAt(0).toUpperCase() + header.slice(1)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {item.table.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-b border-green-900/30">
                            {Object.values(row).map((cell, cellIndex) => (
                              <td key={cellIndex} className="text-left py-2 px-4 text-gray-300">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Render states (special case for critical injury states) */}
                {item.states && (
                  <div className="space-y-3 mb-4">
                    {item.states.map((state, stateIndex) => (
                      <div key={stateIndex} className="bg-black border border-green-800 rounded-lg p-3">
                        <h4 className="font-bold text-green-400 mb-1">{state.state}</h4>
                        <p className="text-sm text-gray-400 mb-1">{state.condition}</p>
                        <p className="text-sm text-gray-400 mb-1">Efeitos: {state.effects}</p>
                        <p className="text-sm text-gray-400">Cura: {state.healing}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Render conclusion/footer */}
                {item.conclusion && (
                  <div className="mt-4 p-3 bg-green-900/20 border border-green-800 rounded-lg">
                    <p className="text-green-400">{item.conclusion}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Helper component to render subsections
const RenderSubsection = ({ subsection, sectionId, itemIndex, subIndex }) => {
  return (
    <div className="bg-black border border-green-900 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-2 text-green-400 flex items-center">
        {subsection.icon && <span className="mr-2">{subsection.icon}</span>}
        {subsection.title}
      </h3>

      {subsection.description && (
        <p className="text-gray-300 mb-2">
          {subsection.description}
        </p>
      )}

      {subsection.formula && (
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 mb-3 font-mono text-green-400">
          {subsection.formula}
        </div>
      )}

      {/* Lists */}
      {subsection.list && (
        <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
          {subsection.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* Uses */}
      {subsection.uses && (
        <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
          {subsection.uses.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* Actions */}
      {subsection.actions && (
        <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
          {subsection.actions.map((action, i) => (
            <li key={i}>
              <span className="text-green-400 font-bold">{action.name}: </span>
              {action.description}
            </li>
          ))}
        </ul>
      )}

      {/* Parts with titles */}
      {subsection.parts && (
        <div className="space-y-3 mb-3">
          {subsection.parts.map((part, i) => (
            <div key={i} className="border-l-2 border-green-700 pl-3">
              <h4 className="font-bold text-green-400 mb-1 flex items-center">
                {part.icon && <span className="mr-1">{part.icon}</span>}
                {part.title}
              </h4>
              <p className="text-gray-400 mb-1">{part.description}</p>
              
              {part.steps && (
                <ul className="list-disc list-inside text-gray-400 mb-2 pl-2 space-y-0.5">
                  {part.steps.map((step, j) => (
                    <li key={j}>{step}</li>
                  ))}
                </ul>
              )}

              {part.example && (
                <div className="bg-green-900/10 border border-green-800/50 rounded p-2 mt-1">
                  <p className="text-gray-400 text-sm">{part.example.scenario}</p>
                  <p className="text-green-400 text-sm font-mono">{part.example.result}</p>
                  {part.example.note && (
                    <p className="text-gray-500 text-xs italic mt-1">{part.example.note}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Example */}
      {subsection.example && (
        <div className="mt-2 bg-green-900/10 border border-green-800/50 rounded p-3">
          <p className="text-gray-400 mb-1">{subsection.example.scenario}</p>
          {subsection.example.steps && (
            <ul className="list-disc list-inside text-gray-400 mb-2 pl-2 space-y-0.5">
              {subsection.example.steps.map((step, i) => (
                <li key={i} className="text-sm">{step}</li>
              ))}
            </ul>
          )}
          <p className="text-green-400 font-mono">{subsection.example.result}</p>
          {subsection.example.conclusion && (
            <p className="text-green-400 font-mono">{subsection.example.conclusion}</p>
          )}
          {subsection.example.note && (
            <p className="text-gray-500 text-xs italic mt-1">{subsection.example.note}</p>
          )}
        </div>
      )}

      {/* Notes */}
      {subsection.notes && (
        <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
          {subsection.notes.map((note, i) => (
            <li key={i} className="text-sm">{note}</li>
          ))}
        </ul>
      )}

      {/* Note (single) */}
      {subsection.note && (
        <p className="text-gray-500 text-sm italic mt-2">{subsection.note}</p>
      )}

      {/* Factors */}
      {subsection.factors && (
        <ul className="space-y-2 mt-2">
          {subsection.factors.map((factor, i) => (
            <li key={i} className="text-gray-400">
              <span className="text-green-400 font-bold">{factor.name}: </span>
              {factor.description}
            </li>
          ))}
        </ul>
      )}

      {/* Special case for reputation gaining/losing */}
      {subsection.gaining && (
        <>
          <h4 className="font-bold text-green-400 mt-2 mb-1">Ganha reputação:</h4>
          <ul className="list-disc list-inside text-gray-400 mb-2 space-y-0.5">
            {subsection.gaining.map((gain, i) => (
              <li key={i}>{gain}</li>
            ))}
          </ul>
          {subsection.losing && (
            <>
              <h4 className="font-bold text-green-400 mb-1">Perde reputação:</h4>
              <p className="text-gray-400">{subsection.losing}</p>
            </>
          )}
        </>
      )}

      {/* Special case for howToBuy steps */}
      {subsection.howToBuy && (
        <div className="space-y-3 mt-2">
          {Object.entries(subsection.howToBuy).map(([key, value]) => {
            const step = value as any;
            return (
              <div key={key} className="border-l-2 border-green-700 pl-3">
                <h4 className="font-bold text-green-400 mb-1">Passo {key.slice(-1)}: {step.title}</h4>
                
                {step.formula && (
                  <div className="bg-green-900/20 border border-green-800 rounded-lg p-2 mb-2 font-mono text-sm text-green-400">
                    {step.formula}
                  </div>
                )}
                
                {step.difficulties && (
                  <div className="mb-2">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-800/50">
                          <th className="text-left py-1 px-2 text-green-400">Raridade</th>
                          <th className="text-center py-1 px-2 text-green-400">DV</th>
                        </tr>
                      </thead>
                      <tbody>
                        {step.difficulties.map((diff, i) => (
                          <tr key={i} className="border-b border-green-900/20">
                            <td className="text-left py-1 px-2 text-gray-400">{diff.rarity}</td>
                            <td className="text-center py-1 px-2 text-gray-400">{diff.dv}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                
                {step.process && (
                  <ul className="list-disc list-inside text-gray-400 mb-2 space-y-0.5">
                    {step.process.map((proc, i) => (
                      <li key={i}>{proc}</li>
                    ))}
                  </ul>
                )}
                
                {step.deliveryTimes && (
                  <div className="mb-2">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-800/50">
                          <th className="text-left py-1 px-2 text-green-400">Raridade</th>
                          <th className="text-center py-1 px-2 text-green-400">Tempo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {step.deliveryTimes.map((time, i) => (
                          <tr key={i} className="border-b border-green-900/20">
                            <td className="text-left py-1 px-2 text-gray-400">{time.rarity}</td>
                            <td className="text-center py-1 px-2 text-gray-400">{time.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                
                {step.description && (
                  <p className="text-gray-400 mb-1">{step.description}</p>
                )}
                
                {step.complications && (
                  <div className="mb-2">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-green-800/50">
                          <th className="text-left py-1 px-2 text-green-400">Dado</th>
                          <th className="text-left py-1 px-2 text-green-400">Evento</th>
                        </tr>
                      </thead>
                      <tbody>
                        {step.complications.map((comp, i) => (
                          <tr key={i} className="border-b border-green-900/20">
                            <td className="text-left py-1 px-2 text-gray-400">{comp.roll}</td>
                            <td className="text-left py-1 px-2 text-gray-400">{comp.result}</td>
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
            );
          })}
        </div>
      )}

      {/* For categories in cyberware */}
      {subsection.categories && (
        <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
          {subsection.categories.map((cat, i) => (
            <li key={i}>{cat}</li>
          ))}
        </ul>
      )}

      {/* For effects of cyberware */}
      {subsection.effects && (
        <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
          {subsection.effects.map((effect, i) => (
            <li key={i}>{effect}</li>
          ))}
        </ul>
      )}

      {/* For tips */}
      {subsection.tips && (
        <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
          {subsection.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      )}

      {/* Warning note for cyberware */}
      {subsection.warning && (
        <p className="text-red-400 text-sm italic mt-2">{subsection.warning}</p>
      )}

      {/* For items you can buy in the black market */}
      {subsection.whatToBuy && (
        <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
          {subsection.whatToBuy.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* For black market items table */}
      {subsection.blackMarketItems && (
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-green-800">
                <th className="text-left py-1 px-2 text-green-400">Item</th>
                <th className="text-center py-1 px-2 text-green-400">Raridade</th>
                <th className="text-center py-1 px-2 text-green-400">Preço (€$)</th>
                <th className="text-left py-1 px-2 text-green-400">Notas</th>
              </tr>
            </thead>
            <tbody>
              {subsection.blackMarketItems.map((item, i) => (
                <tr key={i} className="border-b border-green-900/30">
                  <td className="text-left py-1 px-2 text-gray-400">{item.item}</td>
                  <td className="text-center py-1 px-2 text-gray-400">{item.rarity}</td>
                  <td className="text-center py-1 px-2 text-gray-400">{item.price}</td>
                  <td className="text-left py-1 px-2 text-gray-400">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* For cost of living table */}
      {subsection.costOfLiving && (
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-green-800">
                <th className="text-left py-1 px-2 text-green-400">Estilo de Vida</th>
                <th className="text-center py-1 px-2 text-green-400">Custo mensal</th>
                <th className="text-left py-1 px-2 text-green-400">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {subsection.costOfLiving.map((style, i) => (
                <tr key={i} className="border-b border-green-900/30">
                  <td className="text-left py-1 px-2 text-gray-400">{style.style}</td>
                  <td className="text-center py-1 px-2 text-gray-400">{style.cost}</td>
                  <td className="text-left py-1 px-2 text-gray-400">{style.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Rules;