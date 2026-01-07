import { ArrowDown, Download, Mail, ExternalLink, Sparkles, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const roles = [
  "Analytics Engineer",
  "Power BI Engineer",
  "Azure Data Engineer"
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2750);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.08) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] animate-float animation-delay-400" />
        
        {/* Decorative Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30%" x2="100%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="100%" y1="20%" x2="0" y2="80%" stroke="url(#line-gradient)" strokeWidth="1" />
        </svg>

        {/* Particle Dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center justify-between w-full py-20">
          {/* Content */}
          <div className={`space-y-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm tracking-wide">Data Analytics Engineer</span>
            </div>

            {/* Name - Single line on desktop */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight">
                <span className="text-foreground whitespace-nowrap hidden md:inline">
                  Nagashree Bommenahalli Kumaraswamy
                </span>
                <span className="text-foreground md:hidden">
                  Nagashree<br />
                  <span className="text-cyan-400/80">Bommenahalli</span><br />
                  Kumaraswamy
                </span>
              </h1>
            </div>

            {/* Animated Role */}
            <div className="h-7 overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateY(-${currentRole * 28}px)` }}
              >
                {roles.map((role, index) => (
                  <p key={index} className="text-lg text-primary font-medium h-7 flex items-center">
                    {role}
                  </p>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base text-cyan-400/70 font-medium italic">
              Driven by Data, Powered by Curiosity.
            </p>

            {/* Summary */}
            <div className="space-y-2">
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                From raw ingestion to analytics and Power BI dashboards, 5+ years of industry experience building and owning cloud data pipelines across Azure and AWS.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Currently pursuing a Master's in Data Analytics Engineering at Northeastern University.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#projects">
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="group" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  Resume
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="group" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/nagashreebk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/NagashreeBK98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:bommenahallikumara.n@northeastern.edu"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 pt-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for Summer & Fall 2026 Internships.</span>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'SQL', 'Azure', 'AWS', 'Databricks', 'Power BI'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary/80 border border-border/50 rounded-full text-muted-foreground backdrop-blur-sm hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent animate-spin-slow" 
                style={{ animationDuration: '20s' }} 
              />
              
              {/* Pulsing Ring */}
              <div className="absolute inset-2 rounded-full border-2 border-primary/30 animate-pulse-glow" />
              
              {/* Decorative Ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/20 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              
              {/* Inner Circle with Photo */}
              <div className="absolute inset-5 rounded-full bg-gradient-to-br from-card via-card to-secondary border-2 border-border/50 overflow-hidden shadow-2xl shadow-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop&crop=face"
                  alt="Nagashree B K - Data Analytics Professional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Orbiting Dots */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
              </div>
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary/60 rounded-full" />
              </div>
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '25s' }}>
                <div className="absolute top-1/4 right-0 w-2.5 h-2.5 bg-cyan-400/80 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-sm text-muted-foreground/60 tracking-wider uppercase">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;