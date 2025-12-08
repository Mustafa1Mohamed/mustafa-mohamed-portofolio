// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "mustafamahany459@gmail.com",
      link: "mailto:mustafamahany459@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/Mustafa1Mohamed/",
      link: "https://github.com/Mustafa1Mohamed/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/mustafa-mohamed22/",
      link: "https://www.linkedin.com/in/mustafa-mohamed22/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get In{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <p className="text-center text-slate-300 text-lg mb-8">
              I am always open to new opportunities and collaborations. Feel
              free to reach out!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-6 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    <Icon size={32} className="text-cyan-400 mb-3" />
                    <h3 className="font-semibold mb-1">{c.label}</h3>
                    <p className="text-sm text-slate-400 text-center">
                      {c.value}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
