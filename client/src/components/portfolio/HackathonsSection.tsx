import { Github, Medal, Trophy } from 'lucide-react';
import { hackathons } from '@/data/portfolio';

const getPositionBadge = (position: string) => {
  if (position.includes('1st')) {
    return {
      icon: <Trophy className="w-4 h-4" />,
      className: 'bg-primary text-primary-foreground',
      label: '1st Place'
    };
  }
  if (position.includes('2nd')) {
    return {
      icon: <Medal className="w-4 h-4" />,
      className: 'bg-muted text-foreground',
      label: '2nd Place'
    };
  }
  return {
    icon: null,
    className: 'bg-secondary text-muted-foreground',
    label: position
  };
};

const HackathonsSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold text-foreground font-mono">
            <span className="text-primary">{'<'}</span>Hackathons<span className="text-primary">{'/>'}</span>
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => {
            const badge = getPositionBadge(hackathon.position);
            
            return (
              <article
                key={hackathon.id}
                className="group relative rounded-xl bg-card border border-border 
                         hover:border-primary/50 transition-all duration-300 overflow-hidden
                         animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={hackathon.imageURL}
                    alt={hackathon.companyName}
                    className="w-full h-full object-cover transition-transform duration-500 
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  
                  <div className={`
                    absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 
                    rounded-full text-xs font-semibold ${badge.className}
                  `}>
                    {badge.icon}
                    {badge.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 
                               group-hover:text-primary transition-colors line-clamp-2">
                    {hackathon.companyName}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {hackathon.description}
                  </p>

                  {hackathon.github && (
                    <a
                      href={hackathon.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary 
                               hover:underline font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </a>
                  )}
                </div>

                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: 'inset 0 0 60px hsl(var(--primary) / 0.1)' }} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;
