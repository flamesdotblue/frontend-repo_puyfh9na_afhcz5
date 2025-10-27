import React from 'react';
import { Github, Linkedin, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h4 className="text-lg font-semibold">Let’s collaborate</h4>
            <p className="mt-2 text-slate-300">
              Open to roles and projects in Machine Learning, Generative AI, and Data Platforms.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Links</h4>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#skills" className="hover:text-white">Skills & Credentials</a></li>
              <li><a href="/Sorav_Sharma_Resume.pdf" className="hover:text-white">Resume (PDF)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@example.com</li>
              <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> sorav.dev</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Sorav Sharma. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="https://github.com" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
