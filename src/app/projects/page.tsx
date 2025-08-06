"use client";
import ProjectsStack from "../../components/svg/ProjectsStack";
import { projects } from "../../data/projects";
import AnimatedCard from "../../components/ui/AnimatedCard";
import AnimatedButton from "../../components/ui/AnimatedButton";

export default function Projects() {
  return (
    <section className="w-full mx-auto py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Page Header */}
        <div className="text-center">
          <div className="w-full max-w-xs mx-auto mb-8">
            <ProjectsStack className="w-full h-auto max-h-24 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Recent Projects</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Here are some of the websites I&apos;ve built for clients. Each project is custom-coded 
            and designed to help businesses look professional online.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <AnimatedCard
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 space-y-4 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Project Image */}
              {project.image && project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={project.title + ' screenshot'}
                    className="w-full aspect-video object-cover rounded-md shadow-md border border-gray-200 hover:opacity-90 transition-opacity"
                  />
                </a>
              )}
              {project.image && !project.link && (
                <img
                  src={project.image}
                  alt={project.title + ' screenshot'}
                  className="w-full aspect-video object-cover rounded-md shadow-md border border-gray-200"
                />
              )}
              
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              
              {/* Project Description */}
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
              
              {/* Client Type and Tech Stack */}
              <div className="text-sm text-gray-600">
                <p><strong>Client:</strong> {project.clientType}</p>
                <p><strong>Tech:</strong> {project.techStack}</p>
              </div>
              
              {/* Unique Project Detail */}
              <p className="text-sm text-gray-600 italic">{project.uniqueDetail}</p>
              
              {/* View Project Link */}
              {project.link && (
                <a 
                  href={project.link} 
                  className="inline-block text-blue-600 hover:text-blue-700 font-medium transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              )}
            </AnimatedCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-xl p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Want a site like one of these?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Let&apos;s discuss your project and create something amazing for your business.
          </p>
          <AnimatedButton 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Your Project
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
} 