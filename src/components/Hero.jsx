import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Rocket, FileDown, Linkedin, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient veil for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.8),_rgba(255,255,255,0.2)_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/70 backdrop-blur text-slate-600 text-sm">
          <Sparkles className="h-4 w-4 text-purple-600" />
          <span>AI Voice Agent Aura • Futuristic • Minimal</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Sorav Sharma
        </h1>
        <p className="mt-2 text-lg md:text-2xl font-medium text-slate-700">
          Data Scientist • AI Developer
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
          I build machine learning and generative AI systems that turn raw data into measurable business outcomes. My focus: reliable MLOps, clear storytelling, and products users love.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-3 shadow-md hover:shadow-lg transition-shadow"
          >
            <Rocket className="h-5 w-5" /> Explore Projects
          </a>
          <a
            href="/Sorav_Sharma_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
          >
            <FileDown className="h-5 w-5" /> Download Resume
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-slate-600">
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-slate-900">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com" aria-label="GitHub" className="hover:text-slate-900">
            <Github className="h-5 w-5" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-slate-900">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          Python • TensorFlow • PyTorch • LangChain • FastAPI • SQL • Supabase
        </div>
      </div>
    </section>
  );
}
