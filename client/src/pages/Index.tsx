import { useState } from 'react';
import HeroSection from '@/components/portfolio/HeroSection';
import NavigationTiles from '@/components/portfolio/NavigationTiles';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import HackathonsSection from '@/components/portfolio/HackathonsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('Projects');

  const renderSection = () => {
    switch (activeSection) {
      case 'Projects':
        return <ProjectsSection />;
      case 'Hackathons':
        return <HackathonsSection />;
      case 'Skills':
        return <SkillsSection />;
      case 'WorkingExperience':
        return <ExperienceSection />;
      default:
        return <ProjectsSection />;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <NavigationTiles 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      {renderSection()}
      <Footer />
    </main>
  );
};

export default Index;
