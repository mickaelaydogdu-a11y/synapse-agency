"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

interface WorkflowProps {
  steps: string[];
  className?: string;
}

export function Workflow({ steps, className }: WorkflowProps) {
  return (
    <div className={`flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 ${className ?? ""}`}>
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col md:flex-row items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="px-4 py-2.5 rounded-xl bg-surface-light border border-white/10 text-sm font-medium text-white text-center"
          >
            {step}
          </motion.div>
          {index < steps.length - 1 && (
            <>
              <ArrowDown className="w-4 h-4 text-primary md:hidden" />
              <ArrowRight className="w-4 h-4 text-primary hidden md:block" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
