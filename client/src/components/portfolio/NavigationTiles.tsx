import { Briefcase, Code, Trophy, Wrench } from 'lucide-react';
import { items_tiles } from '@/data/portfolio';

interface NavigationTilesProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Projects: <Code className="w-6 h-6" />,
  Skills: <Wrench className="w-6 h-6" />,
  WorkingExperience: <Briefcase className="w-6 h-6" />,
  Hackathons: <Trophy className="w-6 h-6" />,
};

const NavigationTiles = ({ activeSection, onSectionChange }: NavigationTilesProps) => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items_tiles.map((tile, index) => (
            <button
              key={tile.id}
              onClick={() => onSectionChange(tile.name)}
              className={`
                group relative p-6 rounded-xl border transition-all duration-300
                animate-slide-up text-left
                ${activeSection === tile.name 
                  ? 'bg-primary/10 border-primary glow' 
                  : 'bg-card border-border hover:border-primary/50 hover:bg-card/80'
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`
                mb-4 p-3 rounded-lg inline-block transition-colors duration-300
                ${activeSection === tile.name 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                }
              `}>
                {iconMap[tile.name]}
              </div>

              <h3 className={`
                text-lg font-semibold mb-2 transition-colors duration-300
                ${activeSection === tile.name ? 'text-primary' : 'text-foreground group-hover:text-primary'}
              `}>
                {tile.name === 'WorkingExperience' ? 'Experience' : tile.name}
              </h3>

              <p className="text-sm text-muted-foreground">
                {tile.description}
              </p>

              {activeSection === tile.name && (
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationTiles;
