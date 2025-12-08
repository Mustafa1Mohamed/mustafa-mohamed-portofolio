"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  video?: string;
}

export default function ProjectCard({
  project,
  i,
}: {
  project: Project;
  i: number;
}) {
  return (
    <Link href={project.link} target="_blank">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        whileHover={{ y: -8 }}
        className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 
                   transition-all cursor-pointer group min-h-[320px] flex flex-col"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <ExternalLink
            size={20}
            className="text-slate-500 group-hover:text-cyan-400"
          />
        </div>

        <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-slate-700 rounded-full text-cyan-400"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
