"use client";

import { useState } from "react";
import { Plus, Check, Trash2, Smartphone, Calendar, Bell, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

const initialTasks: Task[] = [
  { id: 1, title: "Réunion équipe projet", completed: false, priority: "high", dueDate: "Aujourd'hui" },
  { id: 2, title: "Réviser la proposition commerciale", completed: true, priority: "medium", dueDate: "Hier" },
  { id: 3, title: "Appeler le client Dupont", completed: false, priority: "medium", dueDate: "Demain" },
  { id: 4, title: "Mettre à jour la documentation", completed: false, priority: "low", dueDate: "Cette semaine" },
];

const priorityColors = {
  low: "bg-slate-500",
  medium: "bg-amber-500",
  high: "bg-red-500",
};

export function AppDemo() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks([
      {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: "medium",
        dueDate: "Aujourd'hui",
      },
      ...tasks,
    ]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Phone frame */}
      <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="bg-background rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-8 pt-4 pb-2">
            <span className="text-white text-sm font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-white rounded-sm">
                <div className="w-2/3 h-full bg-white rounded-sm" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="px-6 pb-8">
            {/* Header */}
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-slate-400 text-sm">Bienvenue 👋</p>
                <h2 className="text-white text-xl font-bold">Mes Tâches</h2>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Progress card */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-white/80 text-sm">Progression du jour</p>
                <span className="text-white font-bold">{completedCount}/{tasks.length}</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Add task input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
                placeholder="Nouvelle tâche..."
                className="flex-1 bg-surface rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={addTask}
                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Tasks list */}
            <div className="space-y-2 max-h-64 overflow-y-auto">
              <AnimatePresence>
                {tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className={cn(
                      "bg-surface rounded-xl p-3 flex items-center gap-3",
                      task.completed && "opacity-60"
                    )}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                        task.completed
                          ? "bg-primary border-primary"
                          : "border-slate-500"
                      )}
                    >
                      {task.completed && <Check className="w-4 h-4 text-white" />}
                    </button>

                    {/* Task info */}
                    <div className="flex-1 min-w-0">
                      <p
                        className={cn(
                          "text-white text-sm truncate",
                          task.completed && "line-through text-slate-400"
                        )}
                      >
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={cn("w-2 h-2 rounded-full", priorityColors[task.priority])} />
                        <span className="text-slate-500 text-xs">{task.dueDate}</span>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="w-8 h-8 rounded-lg hover:bg-red-500/20 flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-around mt-6 pt-4 border-t border-white/5">
              <button className="flex flex-col items-center gap-1 text-primary">
                <Check className="w-5 h-5" />
                <span className="text-xs">Tâches</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-slate-500">
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Calendrier</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-slate-500">
                <Bell className="w-5 h-5" />
                <span className="text-xs">Alertes</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-slate-500">
                <User className="w-5 h-5" />
                <span className="text-xs">Profil</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full">
          <Smartphone className="w-4 h-4 text-primary" />
          <span className="text-slate-400 text-sm">Prototype interactif</span>
        </div>
      </div>
    </div>
  );
}
