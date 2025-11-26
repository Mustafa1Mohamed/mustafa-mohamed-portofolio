import { motion } from "framer-motion";

export default function SkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700 hover:border-cyan-500 transition-colors"
    >
      {skill}
    </motion.span>
  );
}
