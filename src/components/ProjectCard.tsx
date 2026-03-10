import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data';

interface Props {
  project: Project;
  index: number;
  key?: number | string;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-5 cursor-pointer"
    >
      <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-zinc-100">
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        {/* Hover Icon */}
        <div className="absolute top-4 right-4 bg-white p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-sm">
          <ArrowUpRight size={20} className="text-zinc-900" />
        </div>
      </div>
      
      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-zinc-400 font-medium tracking-wider">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-zinc-500 font-light">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
}
