// components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { skills as skillsData } from "@/data/skills";
import SkillBadge from "../ui/SkillsBadge";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-full h-130 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-slate-300 text-lg leading-relaxed">
                I’m a passionate Frontend and cross-platform developer with a
                strong focus on building clean, intuitive, and user-centered
                applications. With hands-on experience in React, React Native,
                and Flutter—and a growing foundation in TypeScript and modern
                web technologies—I enjoy turning ideas into smooth, responsive
                experiences across both web and mobile platforms.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                I’m always exploring new tools, refining my development
                practices, and staying curious about how great interfaces are
                built. Outside of coding, I love diving into new technologies,
                contributing to open-source projects, and sharing knowledge with
                the developer community.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillsData.map((skill, i) => (
                    <SkillBadge key={skill} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
