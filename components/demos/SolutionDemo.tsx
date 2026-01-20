"use client";

import { useState } from "react";
import { Upload, FileText, CheckCircle, Loader2, Sparkles, Percent } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type DemoState = "idle" | "processing" | "complete";

interface ExtractedData {
  field: string;
  value: string;
  confidence: number;
}

const mockData: ExtractedData[] = [
  { field: "Numéro de facture", value: "FAC-2024-0847", confidence: 99 },
  { field: "Date d'émission", value: "15/01/2024", confidence: 98 },
  { field: "Client", value: "Entreprise ABC", confidence: 97 },
  { field: "Montant HT", value: "2 450,00 €", confidence: 99 },
  { field: "TVA (20%)", value: "490,00 €", confidence: 98 },
  { field: "Montant TTC", value: "2 940,00 €", confidence: 99 },
  { field: "Date d'échéance", value: "15/02/2024", confidence: 95 },
  { field: "IBAN", value: "FR76 •••• •••• ••78", confidence: 96 },
];

export function SolutionDemo() {
  const [state, setState] = useState<DemoState>("idle");
  const [progress, setProgress] = useState(0);
  const [extractedData, setExtractedData] = useState<ExtractedData[]>([]);

  const handleDemo = async () => {
    setState("processing");
    setProgress(0);
    setExtractedData([]);

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 150));
      setProgress(i);
    }

    setState("complete");
    for (let i = 0; i < mockData.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setExtractedData((prev) => [...prev, mockData[i]]);
    }
  };

  const reset = () => {
    setState("idle");
    setProgress(0);
    setExtractedData([]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-accent p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Extraction IA de Documents</h3>
            <p className="text-white/70 text-sm">Analyse automatique de factures</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Drop zone */}
                <div
                  onClick={handleDemo}
                  className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center cursor-pointer hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
                >
                  <Upload className="w-16 h-16 text-slate-500 mx-auto mb-4 group-hover:text-secondary transition-colors" />
                  <p className="text-white font-medium mb-2">
                    Cliquez pour simuler un upload
                  </p>
                  <p className="text-slate-400 text-sm">
                    Démo avec une facture exemple
                  </p>
                </div>

                {/* Sample document preview */}
                <div className="mt-6 p-4 bg-surface-light rounded-xl flex items-center gap-4">
                  <FileText className="w-10 h-10 text-secondary" />
                  <div>
                    <p className="text-white font-medium">facture_exemple.pdf</p>
                    <p className="text-slate-400 text-sm">Document de démonstration</p>
                  </div>
                </div>
              </motion.div>
            )}

            {state === "processing" && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Loader2 className="w-24 h-24 text-secondary animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{progress}%</span>
                  </div>
                </div>
                <p className="text-white font-medium mb-2">Analyse en cours...</p>
                <p className="text-slate-400 text-sm">
                  {progress < 30 && "Lecture du document..."}
                  {progress >= 30 && progress < 60 && "Détection des champs..."}
                  {progress >= 60 && progress < 90 && "Extraction des données..."}
                  {progress >= 90 && "Validation..."}
                </p>

                {/* Progress bar */}
                <div className="mt-6 max-w-md mx-auto">
                  <div className="h-2 bg-surface-light rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-secondary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {state === "complete" && (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Success header */}
                <div className="flex items-center gap-3 mb-6 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-white font-medium">Extraction terminée</p>
                    <p className="text-slate-400 text-sm">
                      {extractedData.length} champs extraits en 2.3 secondes
                    </p>
                  </div>
                </div>

                {/* Extracted data table */}
                <div className="space-y-2">
                  {extractedData.map((item, index) => (
                    <motion.div
                      key={item.field}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center justify-between p-3 bg-surface-light rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">{item.field}</p>
                          <p className="text-white font-medium">{item.value}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <Percent className="w-3 h-3" />
                        {item.confidence}%
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Reset button */}
                <button
                  onClick={reset}
                  className="mt-6 w-full py-3 bg-surface-light rounded-xl text-white hover:bg-white/10 transition-colors"
                >
                  Recommencer la démo
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
