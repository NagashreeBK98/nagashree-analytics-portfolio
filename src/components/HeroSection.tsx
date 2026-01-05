import { ArrowDown, Download, Mail, ExternalLink, Database, Cloud, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm tracking-wide">Data Analytics Engineering</span>
            </div>

            {/* Name with Enhanced Typography */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-foreground">Nagashree</span>
                <span className="block gradient-text py-1">Bommenahalli</span>
                <span className="block text-foreground">Kumaraswamy</span>
              </h1>
            </div>

            {/* Job Title */}
            <p className="text-xl text-primary font-medium">
              Data Engineer | Azure • Power BI • Python
            </p>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Transforming complex data into <span className="text-foreground font-medium">actionable insights</span> using 
              cloud-native analytics. 5+ years building <span className="text-foreground font-medium">scalable data solutions</span>.
            </p>

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

            {/* Quick Stats */}
            <div className="flex items-center gap-8 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'SQL', 'Power BI', 'Snowflake', 'AWS', 'Azure'].map((tech, i) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary/80 border border-border/50 rounded-full text-muted-foreground backdrop-blur-sm hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Photo Section - Aligned with Name */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]">
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
                {/* Profile Photo - Replace src with your actual photo */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop&crop=face"
                  alt="Nagashree B K - Data Analytics Professional"
                  className="w-full h-full object-cover"
                />
                {/* Subtle Overlay */}
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

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 group hidden md:block">
                <div className="card-glass rounded-xl p-3 shadow-xl shadow-primary/5 border border-border/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Database className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Efficiency</p>
                      <p className="text-sm font-bold text-foreground">50%↑</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 group hidden md:block">
                <div className="card-glass rounded-xl p-3 shadow-xl shadow-primary/5 border border-border/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Experience</p>
                      <p className="text-sm font-bold text-foreground">5+ Yrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-8 group hidden md:block">
                <div className="card-glass rounded-xl p-3 shadow-xl shadow-primary/5 border border-border/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Cloud className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">Cloud</p>
                      <p className="text-sm font-bold text-foreground">AWS</p>
                    </div>
                  </div>
                </div>
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
