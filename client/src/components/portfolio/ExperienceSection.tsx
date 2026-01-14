import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground font-mono">
            <span className="text-primary">{'<'}</span>Experience<span className="text-primary">{'/>'}</span>
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {/* Experience item */}
          <div className="relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-8 animate-slide-up">
            <div className="hidden md:flex md:justify-end md:pr-8">
              <div className="text-right">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Present</span>
                </div>
              </div>
            </div>

            <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary glow 
                          md:left-1/2 md:-translate-x-1/2" />

            {/* Right content */}
            <div className="md:pl-8">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 
                            transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      JUnior Developer
                    </h3>
                    <p className="text-sm text-primary">Seeking Opportunities</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate about building innovative software solutions. Experienced in full-stack 
                  developmentand competitive programming through hackathons. 
                  Looking for opportunities to contribute to impactful projects.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'Python', 'C/C++', 'Azure', 'MySQL'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full 
                               bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
