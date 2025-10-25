import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Award, BookCheck } from "lucide-react";
import { color } from "framer-motion";

const skills = [
  // 🧠 Frontend
  { name: "HTML/CSS", level: 95, colorClass: "bg-red-300" },
  { name: "JavaScript", level: 90, colorClass: "bg-yellow-300" },
  { name: "React", level: 90, colorClass: "bg-blue-300" },
  { name: "Tailwind CSS", level: 90, colorClass: "bg-cyan-300" },

  // ⚙️ Backend
  { name: "Node.js", level: 80, colorClass: "bg-green-300" },
  { name: "Express", level: 75, colorClass: "bg-lime-300" },
  { name: "MongoDB", level: 70, colorClass: "bg-emerald-300" },

  // 🧰 Tools & Misc
  { name: "Git/GitHub", level: 80, colorClass: "bg-orange-300" },
  { name: "Figma", level: 85, colorClass: "bg-pink-300" },
  { name: "VS Code", level: 95, colorClass: "bg-violet-300" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-8 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl bg-slate-800/60 hover:bg-slate-800"
              )}
            >

              <div className="flex justify-between items-center mb-3 ">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                <div
                  className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${skill.colorClass}`}
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );


};
