import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4 opacity-0 animate-fade-up">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Data Analytics Engineering
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Nagashree
                <br />
                <span className="gradient-text">Bommenahalli</span>
                <br />
                Kumaraswamy
              </h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-up animation-delay-200">
              Data Analytics Engineering Graduate Student | Data Engineer & Analytics Professional
            </p>

            <p className="text-muted-foreground max-w-xl opacity-0 animate-fade-up animation-delay-400">
              Transforming complex data into actionable insights using cloud-native analytics. 
              5+ years of experience building scalable data solutions.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up animation-delay-600">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image & Dashboard Cards */}
          <div className="relative lg:pl-12">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 animate-pulse-glow" />
                <div className="absolute inset-2 rounded-full bg-card border border-border overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">N</span>
                  </div>
                </div>
              </div>

              {/* Floating Dashboard Cards */}
              <div className="absolute -top-4 -right-4 md:right-0 card-glass rounded-lg p-3 animate-float shadow-lg">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-muted-foreground">Data Pipelines</span>
                </div>
                <p className="text-lg font-semibold text-foreground mt-1">50% <span className="text-primary text-xs">↑</span></p>
                <p className="text-xs text-muted-foreground">Efficiency Gain</p>
              </div>

              <div className="absolute -bottom-4 -left-4 md:left-0 card-glass rounded-lg p-3 animate-float animation-delay-400 shadow-lg">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Experience</span>
                </div>
                <p className="text-lg font-semibold text-foreground mt-1">5+ Years</p>
                <p className="text-xs text-muted-foreground">Industry Work</p>
              </div>

              <div className="absolute top-1/2 -right-8 md:-right-4 card-glass rounded-lg p-3 animate-float animation-delay-200 shadow-lg">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-muted-foreground">Cloud</span>
                </div>
                <p className="text-lg font-semibold text-foreground mt-1">AWS + Azure</p>
                <p className="text-xs text-muted-foreground">Multi-Cloud</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
