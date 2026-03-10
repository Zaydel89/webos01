import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-900 selection:bg-zinc-200">
      <nav className="fixed top-0 left-0 right-0 p-6 md:px-12 lg:px-24 flex justify-between items-center z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-zinc-100">
        <div className="font-medium text-lg tracking-tight">
          Portfolio<span className="text-zinc-400">.</span>
        </div>
        <div className="text-sm font-medium">
          <a href="mailto:hello@example.com" className="text-zinc-500 hover:text-zinc-900 transition-colors">
            Get in touch
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        
        <section className="px-6 md:px-12 lg:px-24 py-24 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {projects.map((project, index) => (
                <div key={project.id} className={index % 2 !== 0 ? "md:mt-32" : ""}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-50 py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-100">
        <div className="font-medium text-xl tracking-tight text-zinc-300">
          PORTFOLIO<span className="text-zinc-200">.</span>
        </div>
        <p className="text-zinc-400 text-sm font-medium">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}
