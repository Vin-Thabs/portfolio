import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{'>'}</span> © {currentYear} Vincent Thabiso
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Built with passion and code
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Vin-Thabs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border 
                       hover:border-primary/50 hover:bg-primary/10
                       text-muted-foreground hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-card border border-border 
                       hover:border-primary/50 hover:bg-primary/10
                       text-muted-foreground hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mahlaolathabiso@gmail.com"
              className="p-3 rounded-lg bg-card border border-border 
                       hover:border-primary/50 hover:bg-primary/10
                       text-muted-foreground hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
