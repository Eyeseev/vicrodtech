"use client";
import ProjectsStack from "../../components/svg/ProjectsStack";
import { projects } from "../../data/projects";
import AnimatedCard from "../../components/ui/AnimatedCard";
import AnimatedAnchor from "../../components/ui/AnimatedAnchor";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";

export default function Projects() {
  return (
    <section className="w-full mx-auto py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Page Header */}
        <div className="text-center">
          <div className="w-full max-w-xs mx-auto mb-8">
            <ProjectsStack className="w-full h-auto max-h-24 mx-auto" />
          </div>
          <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-gray-900">
            Recent Projects
          </AnimatedHeading>
          <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            A few clean, modern websites I&apos;ve built for real clients. Each one was custom-coded to meet their unique goals — no builders, no templates.
          </AnimatedParagraph>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 space-y-8">
          {projects.map((project, idx) => (
            <AnimatedCard
              key={idx}
              className="border rounded-xl p-6 bg-gray-50/50 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Project Image */}
              {project.image && (
                <div className="mb-4">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={project.image}
                        alt={project.title + ' screenshot'}
                        className="w-full aspect-video object-cover rounded-md shadow-md border border-gray-200 hover:opacity-90 transition-opacity"
                      />
                    </a>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title + ' screenshot'}
                      className="w-full aspect-video object-cover rounded-md shadow-md border border-gray-200"
                    />
                  )}
                </div>
              )}
              
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
              
              {/* Project Description */}
              <p className="mt-2 text-gray-700 leading-relaxed">
                {project.description}
              </p>
              
              {/* Client Type and Tech Stack */}
              <div className="mt-4 text-sm text-gray-600">
                <p><strong>Client:</strong> {project.clientType}</p>
                <p><strong>Tech:</strong> {project.techStack}</p>
              </div>
              
              {/* Unique Project Detail */}
              <p className="mt-2 text-sm text-gray-600 italic">{project.uniqueDetail}</p>
              
              {/* View Project Link */}
              {project.link && (
                <div className="mt-4 flex gap-4">
                  <AnimatedAnchor 
                    href={project.link} 
                    className="inline-block text-blue-600 hover:text-blue-700 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded w-full sm:w-auto text-center py-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Live Site
                  </AnimatedAnchor>
                </div>
              )}
            </AnimatedCard>
          ))}
        </div>

        {/* Projects CTA Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-xl text-center space-y-4">
          <AnimatedHeading as="h3" className="text-2xl font-semibold text-gray-900">
            Ready to Build Something Clean & Custom?
          </AnimatedHeading>
          <AnimatedParagraph className="text-gray-700">
            Whether you&apos;re launching a brand, upgrading an outdated site, or finally going pro — let&apos;s make your next website the one you&apos;re proud to show off.
          </AnimatedParagraph>
          <AnimatedAnchor 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto"
          >
            Start My Website
          </AnimatedAnchor>
        </div>
      </div>
    </section>
  );
} 