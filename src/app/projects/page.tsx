"use client";
import ProjectsStack from "../../components/svg/ProjectsStack";
import { projects } from "../../data/projects";
import AnimatedCard from "../../components/ui/AnimatedCard";

export default function Projects() {
  return (
    <section className="w-full mx-auto py-32">
      <div className="w-full max-w-xs mx-auto mb-8">
        <ProjectsStack className="w-full h-auto max-h-24 mx-auto" />
      </div>
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900">Projects</h2>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <AnimatedCard
            key={idx}
            className="card flex flex-col gap-4 p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title + ' screenshot'}
                className="w-full aspect-video object-cover rounded-lg mb-4 border border-gray-200 shadow-sm max-h-48"
              />
            )}
            <h3 className="text-2xl font-bold text-gray-900 !opacity-100">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 !opacity-100">{project.description}</p>
            <span className="text-primary text-sm font-medium !opacity-100">{project.tech}</span>
            {project.link && (
              <a href={project.link} className="text-primary underline mt-2" target="_blank" rel="noopener noreferrer">View Project</a>
            )}
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
} 