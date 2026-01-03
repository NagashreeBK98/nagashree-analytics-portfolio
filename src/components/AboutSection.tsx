import { GraduationCap, Calendar, MapPin, Sparkles, Code2, Database, Cloud } from 'lucide-react';
import { useEffect, useState } from 'react';

const educationData = [
  {
    degree: 'MS in Data Analytics Engineering',
    institution: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Expected 2027',
    current: true,
  },
  {
    degree: 'Bachelor of Engineering',
    institution: 'Dayananda Sagar College of Engineering',
    field: 'Telecommunication',
    location: 'Bangalore, India',
    period: '2019',
    current: false,
  },
];

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience', icon: Code2 },
  { value: 50, suffix: '%', label: 'Efficiency Gains', icon: Database },
  { value: 99.9, suffix: '%', label: 'System Uptime', icon: Cloud },
];

const AboutSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const stepValue = stat.value / steps;
            let current = 0;

            const interval = setInterval(() => {
              current += stepValue;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(interval);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = current;
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Driven by Data,
                <br />
                <span className="gradient-text">Powered by Curiosity</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I'm a <span className="text-foreground font-medium">Data Analytics Engineering graduate student</span> at 
                Northeastern University, bringing over <span className="text-primary font-semibold">5+ years of industry 
                experience</span> from my tenure at DXC Technology.
              </p>
              <p>
                My passion lies at the intersection of <span className="text-cyan-400">data engineering</span>, 
                <span className="text-cyan-400"> cloud platforms</span>, and <span className="text-cyan-400">analytics</span>. 
                I specialize in building scalable ETL pipelines, designing insightful dashboards, and implementing 
                cloud-native data solutions.
              </p>
              <p>
                With hands-on experience in AWS, Azure, Power BI, Python, and SQL, I transform complex datasets 
                into actionable business intelligence.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group p-4 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <stat.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-3xl font-bold text-primary">
                      {counters[index].toFixed(stat.value % 1 !== 0 ? 1 : 0)}{stat.suffix}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground">Academic Journey</p>
              </div>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-6 border transition-all duration-500 hover:scale-[1.02] ${
                    edu.current 
                      ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30' 
                      : 'bg-card/50 border-border hover:border-primary/30'
                  }`}
                >
                  {/* Glow Effect */}
                  {edu.current && (
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-50" />
                  )}
                  
                  <div className="relative">
                    {edu.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-3 animate-pulse-glow">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Currently Pursuing
                      </span>
                    )}
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    {edu.field && (
                      <p className="text-muted-foreground text-sm mt-1">{edu.field}</p>
                    )}
                    <p className="text-primary font-semibold mt-2">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Data Visualization */}
            <div className="relative h-40 mt-8 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-gradient-to-t from-primary/20 to-primary/60 rounded-full transition-all duration-500"
                    style={{
                      height: `${20 + Math.sin(i * 0.8) * 40 + Math.random() * 20}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
              <div className="absolute bottom-4 left-4 text-xs text-muted-foreground">
                <span className="text-primary font-medium">Career Progress</span> • Data-Driven Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
