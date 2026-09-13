"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { elements, ElementData } from '@/data/elements';
import { X, Info, Layers, Zap, Flame, Droplets } from 'lucide-react';

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'diatomic nonmetal': return 'bg-sky-900/40 border-sky-500/50 text-sky-200';
      case 'noble gas': return 'bg-purple-900/40 border-purple-500/50 text-purple-200';
      case 'alkali metal': return 'bg-red-900/40 border-red-500/50 text-red-200';
      case 'alkaline earth metal': return 'bg-orange-900/40 border-orange-500/50 text-orange-200';
      case 'metalloid': return 'bg-emerald-900/40 border-emerald-500/50 text-emerald-200';
      case 'polyatomic nonmetal': return 'bg-teal-900/40 border-teal-500/50 text-teal-200';
      case 'post-transition metal': return 'bg-blue-900/40 border-blue-500/50 text-blue-200';
      case 'transition metal': return 'bg-indigo-900/40 border-indigo-500/50 text-indigo-200';
      case 'lanthanide': return 'bg-pink-900/40 border-pink-500/50 text-pink-200';
      case 'actinide': return 'bg-rose-900/40 border-rose-500/50 text-rose-200';
      default: return 'bg-gray-800/40 border-gray-500/50 text-gray-200';
    }
  };

  return (
    <div className="w-full relative mt-8 mb-16 select-none font-sans overflow-x-auto pb-4 custom-scrollbar" data-lenis-prevent="true">
      <div 
        className="grid gap-1 md:gap-2 min-w-[800px] w-max mx-auto" 
        style={{ 
          gridTemplateColumns: 'repeat(18, minmax(40px, 1fr))',
          gridTemplateRows: 'repeat(10, minmax(40px, 1fr))'
        }}
      >
        {elements.map((el) => (
          <motion.div
            key={el.number}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedElement(el)}
            className={`
              relative cursor-pointer border rounded-md p-1 md:p-2 flex flex-col justify-between items-center transition-colors
              ${getCategoryColor(el.category)} hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
            `}
            style={{
              gridColumn: el.xpos,
              gridRow: el.ypos,
            }}
          >
            <div className="w-full flex justify-between text-[8px] md:text-[10px] opacity-70 font-mono">
              <span>{el.number}</span>
              <span>{el.atomic_mass.toFixed(1)}</span>
            </div>
            <div className="text-sm md:text-xl font-bold">{el.symbol}</div>
            <div className="text-[8px] md:text-[10px] truncate w-full text-center">{el.name}</div>
          </motion.div>
        ))}
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {selectedElement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedElement(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto text-white shadow-2xl flex flex-col md:flex-row"
                data-lenis-prevent="true"
              >
              {/* Sidebar with basic element block */}
              <div className={`p-8 md:w-1/3 flex flex-col items-center justify-center ${getCategoryColor(selectedElement.category).split(' ')[0]} bg-opacity-20 border-b md:border-b-0 md:border-r border-zinc-700`}>
                <div className={`w-40 h-48 rounded-xl border-2 flex flex-col items-center justify-between p-4 ${getCategoryColor(selectedElement.category)}`}>
                  <div className="w-full flex justify-between text-sm opacity-80 font-mono">
                    <span>{selectedElement.number}</span>
                    <span>{selectedElement.atomic_mass}</span>
                  </div>
                  <div className="text-6xl font-bold">{selectedElement.symbol}</div>
                  <div className="text-xl capitalize">{selectedElement.name}</div>
                </div>
                
                <div className="mt-8 w-full space-y-4">
                  <div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Category & Block</div>
                    <div className="capitalize text-sm font-medium">{selectedElement.category} ({selectedElement.block}-block)</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Electron Config</div>
                    <div className="text-sm font-mono bg-black/30 p-2 rounded mb-1">{selectedElement.electron_configuration_semantic}</div>
                    <div className="text-[10px] font-mono text-zinc-400 truncate" title={selectedElement.electron_configuration}>{selectedElement.electron_configuration}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-400" />
                    <span className="text-sm">Shells: {selectedElement.shells.join(', ')}</span>
                  </div>
                  
                  {selectedElement.bohr_model_image && (
                    <div className="mt-4 pt-4 border-t border-zinc-700/50 flex flex-col items-center">
                      <div className="text-xs text-zinc-400 uppercase tracking-wider mb-2 text-center">Bohr Model</div>
                      <img src={selectedElement.bohr_model_image} alt={`${selectedElement.name} Bohr Model`} className="w-32 h-32 object-contain filter invert opacity-80" />
                    </div>
                  )}
                </div>
              </div>

              {/* Main content area */}
              <div className="p-8 md:w-2/3 relative">
                <button 
                  onClick={() => setSelectedElement(null)}
                  className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-blue-400" />
                  Overview
                </h2>
                <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-8">
                  {selectedElement.summary}
                </p>

                {selectedElement.image && (
                  <div className="mb-8 w-full rounded-xl overflow-hidden border border-zinc-700/50 shadow-lg relative bg-black">
                    <img src={selectedElement.image.url} alt={selectedElement.image.title} className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-xs text-zinc-300 flex justify-between items-end">
                      <span className="truncate pr-4">{selectedElement.image.title}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Physical Properties */}
                  <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-orange-400">
                      <Flame className="w-5 h-5" /> Physical
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Phase</span>
                        <span className="capitalize">{selectedElement.phase}</span>
                      </li>
                      {selectedElement.appearance && (
                        <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                          <span className="text-zinc-400">Appearance</span>
                          <span className="text-right ml-4 capitalize truncate" title={selectedElement.appearance}>{selectedElement.appearance}</span>
                        </li>
                      )}
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Melting Point</span>
                        <span>{selectedElement.melt ? `${selectedElement.melt} K` : 'Unknown'}</span>
                      </li>
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Boiling Point</span>
                        <span>{selectedElement.boil ? `${selectedElement.boil} K` : 'Unknown'}</span>
                      </li>
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Density</span>
                        <span>{selectedElement.density ? `${selectedElement.density} g/cm³` : 'Unknown'}</span>
                      </li>
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Molar Heat</span>
                        <span>{selectedElement.molar_heat ? `${selectedElement.molar_heat} J/(mol·K)` : 'Unknown'}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Chemical Properties */}
                  <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-teal-400">
                      <Zap className="w-5 h-5" /> Chemical
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Discovered By</span>
                        <span className="text-right truncate ml-4" title={selectedElement.discovered_by || 'Unknown'}>{selectedElement.discovered_by || 'Unknown'}</span>
                      </li>
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Electronegativity</span>
                        <span>{selectedElement.electronegativity_pauling || 'N/A'}</span>
                      </li>
                      <li className="flex justify-between border-b border-zinc-700/50 pb-1">
                        <span className="text-zinc-400">Electron Affinity</span>
                        <span>{selectedElement.electron_affinity ? `${selectedElement.electron_affinity} kJ/mol` : 'N/A'}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Ionization Energies */}
                {selectedElement.ionization_energies && selectedElement.ionization_energies.length > 0 && (
                  <div className="mt-6 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-yellow-400">
                      <Zap className="w-5 h-5" /> Ionization Energies (kJ/mol)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedElement.ionization_energies.slice(0, 5).map((energy, idx) => (
                        <div key={idx} className="bg-zinc-900 px-3 py-1 rounded text-xs border border-zinc-700">
                          {idx + 1}{['st','nd','rd','th','th'][idx]}: {Math.round(energy)}
                        </div>
                      ))}
                      {selectedElement.ionization_energies.length > 5 && (
                        <div className="px-3 py-1 text-xs text-zinc-500">
                          + {selectedElement.ionization_energies.length - 5} more
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
