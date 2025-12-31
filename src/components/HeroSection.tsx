import { ArrowDown, Download, Mail, ExternalLink, Database, Cloud, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const roles = [
  "Data Engineer",
  "Analytics Professional", 
  "Cloud Architect",
  "BI Developer"
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
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

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm tracking-wide">Data Analytics Engineering</span>
            </div>

            {/* Name with Enhanced Typography */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-foreground">Nagashree</span>
                <span className="block gradient-text py-1">Bommenahalli</span>
                <span className="block text-foreground">Kumaraswamy</span>
              </h1>
            </div>

            {/* Animated Role */}
            <div className="h-8 overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateY(-${currentRole * 32}px)` }}
              >
                {roles.map((role, index) => (
                  <p key={index} className="text-xl text-primary font-medium h-8 flex items-center">
                    {role}
                  </p>
                ))}
              </div>
            </div>

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
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Section */}
          <div className={`relative lg:pl-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent animate-spin-slow" 
                  style={{ animationDuration: '20s' }} 
                />
                
                {/* Pulsing Ring */}
                <div className="absolute inset-2 rounded-full border-2 border-primary/30 animate-pulse-glow" />
                
                {/* Inner Circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-card via-card to-secondary border border-border/50 overflow-hidden shadow-2xl shadow-primary/10">
                  <div className="w-full h-full flex items-center justify-center relative">
                    {/* Abstract Data Visualization Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        <defs>
                          <linearGradient id="bar-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                        {[...Array(8)].map((_, i) => (
                          <rect
                            key={i}
                            x={30 + i * 18}
                            y={200 - 40 - Math.random() * 80}
                            width="12"
                            height={40 + Math.random() * 80}
                            fill="url(#bar-gradient)"
                            rx="2"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </svg>
                    </div>
                    <span className="text-8xl font-bold gradient-text relative z-10">N</span>
                  </div>
                </div>

                {/* Orbiting Dots */}
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '15s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary/60 rounded-full" />
                </div>
              </div>

              {/* Enhanced Floating Cards */}
              <div className="absolute -top-6 right-0 md:right-8 group">
                <div className="card-glass rounded-xl p-4 shadow-xl shadow-primary/5 border border-border/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <Database className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Data Pipelines</p>
                      <p className="text-xl font-bold text-foreground">50% <span className="text-green-400 text-sm">↑</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-0 md:left-8 group">
                <div className="card-glass rounded-xl p-4 shadow-xl shadow-primary/5 border border-border/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>
                      <p className="text-xl font-bold text-foreground">5+ Years</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-0 group">
                <div className="card-glass rounded-xl p-4 shadow-xl shadow-primary/5 border border-border/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Cloud</p>
                      <p className="text-lg font-bold text-foreground">AWS + Azure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {['Python', 'SQL', 'Power BI'].map((tech, i) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary/80 border border-border/50 rounded-full text-muted-foreground backdrop-blur-sm"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
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
