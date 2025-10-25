import React from "react";
import { Database, GitBranch, Container, Code2, Server } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
    return (
        <section id="skills" className="min-h-full py-20 bg-secondary/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Tech Stack
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400">
                        Technologies I work with
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* React */}
                    <div className="text-center" style={{ animationDelay: "0.2s" }}>
                        <div className="bg-slate-800/60 p-6 rounded-2xl mb-4 flex justify-center items-center
                            hover:bg-slate-800 hover:scale-110
                           hover:shadow-[0_8px_20px_0_rgba(34,211,238,0.4)]
                            transition-all duration-500 ease-in-out">
                            <FaReact
                                style={{ stroke: "#06b6d4", strokeWidth: 15 }}
                                className="w-10 h-10 text-cyan-400 hover:scale-115 transition-all duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm text-slate-300 font-semibold">React</p>
                    </div>

                    {/* MongoDB */}
                    <div className="text-center" style={{ animationDelay: "0.3s" }}>
                        <div className="bg-slate-800/60 p-6 rounded-2xl mb-4 flex justify-center items-center
                            hover:bg-slate-800 hover:scale-110
                            hover:shadow-[0_8px_20px_0_rgba(34,197,94,0.3)]
                            transition-all duration-500 ease-in-out">
                            <Database className="w-10 h-10 text-green-500 hover:scale-115 transition-all duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm text-slate-300 font-semibold">MongoDB</p>
                    </div>

                    {/* JavaScript */}
                    <div className="text-center" style={{ animationDelay: "0.4s" }}>
                        <div className="bg-slate-800/60 p-6 rounded-2xl mb-4 flex justify-center items-center
                            hover:bg-slate-800 hover:scale-110
                            hover:shadow-[0_8px_20px_0_rgba(250,204,21,0.3)]
                            transition-all duration-500 ease-in-out">
                            <Code2 className="w-10 h-10 text-yellow-400 hover:scale-115 transition-all duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm text-slate-300 font-semibold">JavaScript</p>
                    </div>

                    {/* Node.js */}
                    <div className="text-center" style={{ animationDelay: "0.2s" }}>
                        <div className="bg-slate-800/60 p-6 rounded-2xl mb-4 flex justify-center items-center
                            hover:bg-slate-800 hover:scale-110
                            hover:shadow-[0_8px_20px_0_rgba(74,222,128,0.3)]
                            transition-all duration-500 ease-in-out">
                            <Server className="w-10 h-10 text-green-400 hover:scale-115 transition-all duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm text-slate-300 font-semibold">Node.js</p>
                    </div>



                    {/* Git */}
                    <div className="text-center" style={{ animationDelay: "0.5s" }}>
                        <div className="bg-slate-800/60 p-6 rounded-2xl mb-4 flex justify-center items-center
                            hover:bg-slate-800 hover:scale-110
                            hover:shadow-[0_8px_20px_0_rgba(249,115,22,0.3)]
                            transition-all duration-500 ease-in-out">
                            <GitBranch className="w-10 h-10 text-orange-500 hover:scale-115 transition-all duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm text-slate-300 font-semibold">Git</p>
                    </div>

                    {/* Docker */}
                    <div className="text-center" style={{ animationDelay: "0.6s" }}>
                        <div className="bg-slate-800/60 p-6 rounded-2xl mb-4 flex justify-center items-center
                            hover:bg-slate-800 hover:scale-110
                            hover:shadow-[0_8px_20px_0_rgba(59,130,246,0.3)]
                            transition-all duration-500 ease-in-out">
                            <RiTailwindCssFill className="w-10 h-10 text-blue-400 hover:scale-115 transition-all duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm text-slate-300 font-semibold">Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
