import { ExternalLink, Github, Play } from 'lucide-react';
import { projects } from '@/data/portfolio';

const ProjectsSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground font-mono">
            <span className="text-primary">{'<'}</span>Projects<span className="text-primary">{'/>'}</span>
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative p-6 rounded-xl bg-card border border-border 
                         hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-start justify-between mb-4 relative z-10">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-red-600
                             text-muted-foreground hover:text-white transition-colors"


                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.long_description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-full 
                             bg-secondary text-muted-foreground
                             group-hover:bg-primary/10 group-hover:text-primary 
                             transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 
                              border-border group-hover:border-primary/50 transition-colors rounded-tr-lg" />
              </div>

              {project.demo_video && (
                <div className="mt-4">
                  <iframe
                    width="500"
                    height="315"
                    src={project.demo_video.replace('watch?v=', 'embed/')}
                    title="Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
