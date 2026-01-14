import { skills } from '@/data/portfolio';

const SkillsSection = () => {
  const categories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Tools & Platforms', items: skills.tools },
    { title: 'Concepts', items: skills.concepts },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground font-mono">
            <span className="text-primary">{'<'}</span>Skills<span className="text-primary">{'/>'}</span>
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border 
                       hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-lg bg-secondary text-foreground
                             hover:bg-primary/20 hover:text-primary transition-colors
                             cursor-default animate-fade-in"
                    style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
