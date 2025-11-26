// components/layout/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        <p>
          © {new Date().getFullYear()} Your Name. Built with Next.js & Framer
          Motion.
        </p>
      </div>
    </footer>
  );
}
