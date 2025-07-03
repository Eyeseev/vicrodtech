"use client";
import ProjectsStack from "../../components/svg/ProjectsStack";
import { projects } from "../../data/projects";
import AnimatedCard from "../../components/ui/AnimatedCard";

export default function Projects() {
  return (
    <section className="w-full max-w-4xl mx-auto py-32 bg-grid">
      <div className="w-full max-w-xs mx-auto mb-8">
        <ProjectsStack className="w-full h-auto max-h-24 mx-auto" />
      </div>
      <h2 className="text-4xl font-extrabold mb-12 text-center text-primary">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <AnimatedCard
            key={idx}
            className="card flex flex-col gap-2 p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            <span className="text-primary text-sm font-medium">{project.tech}</span>
            {/* {project.link && (
              <a href={project.link} className="text-primary underline mt-2" target="_blank" rel="noopener noreferrer">View Project</a>
            )} */}
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
} 