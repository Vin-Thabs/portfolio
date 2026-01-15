import { Code2, Terminal } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-muted-foreground">
            ~/portfolio <span className="text-primary">$</span> whoami
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-foreground">Vincent </span>
          <span className="text-gradient">Thabiso</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
          Software Developer
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Building through code.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
