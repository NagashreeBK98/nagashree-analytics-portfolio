import { Briefcase, TrendingUp, Zap, Database, Cloud, BarChart3, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    title: 'Analyst I',
    company: 'DXC Technology',
    location: 'Bangalore, India',
    period: 'Nov 2022 – Jul 2025',
    duration: '2+ years',
    highlights: [
      {
        icon: BarChart3,
        text: 'Designed Power BI dashboards integrating ServiceNow & Azure SQL, achieving 15% SLA improvement',
        metric: '15%',
      },
      {
        icon: Zap,
        text: 'Automated ETL pipelines using Python, SQL, and Azure Data Factory, reducing manual reporting by 50%',
        metric: '50%',
      },
      {
        icon: Cloud,
        text: 'Implemented AWS–Azure integration (S3, Lambda, Data Lake) for cross-cloud data workflows',
        metric: 'Multi-cloud',
      },
      {
        icon: TrendingUp,
        text: 'Applied Six Sigma methodologies for incident optimization and advanced DAX-based KPI analytics',
        metric: 'Six Sigma',
      },
    ],
  },
  {
    title: 'Associate Professional Software Engineer',
    company: 'DXC Technology',
    location: 'Bangalore, India',
    period: 'Mar 2020 – Oct 2022',
    duration: '2+ years',
    highlights: [
      {
        icon: Zap,
        text: 'Built infrastructure monitoring automation, reducing operational effort by 70%',
        metric: '70%',
      },
      {
        icon: Database,
        text: 'Developed centralized multi-cloud log analytics for unified visibility across platforms',
        metric: 'Unified',
      },
      {
        icon: BarChart3,
        text: 'Implemented predictive analytics on cloud logs and created Power BI & Excel performance dashboards',
        metric: 'Predictive',
      },
      {
        icon: TrendingUp,
        text: 'Maintained 99.9% system availability through proactive monitoring and incident response',
        metric: '99.9%',
      },
    ],
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
        
        {/* Diagonal Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{
                top: `${i * 12}%`,
                transform: 'rotate(-5deg) translateX(-10%)',
              }}
            />
          ))}
        </div>

        {/* Floating Dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable data solutions and driving analytics excellence across enterprise environments
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Connection Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 md:left-8 top-20 bottom-0 w-px">
                  <div className="h-full w-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
                  {/* Animated Pulse */}
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary to-transparent animate-pulse-glow" />
                </div>
              )}

              <div className="flex gap-6 md:gap-8 pb-16 last:pb-0">
                {/* Timeline Node */}
                <div className="relative shrink-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index
                      ? 'bg-primary shadow-lg shadow-primary/30 scale-110'
                      : 'bg-primary/10 border border-primary/30'
                  }`}>
                    <Briefcase className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                      activeIndex === index ? 'text-background' : 'text-primary'
                    }`} />
                  </div>
                  {/* Glow Ring */}
                  {activeIndex === index && (
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl animate-pulse-glow" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`flex-1 rounded-2xl p-6 md:p-8 border transition-all duration-500 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-primary/10 via-card to-card border-primary/40 shadow-xl shadow-primary/10 scale-[1.02]'
                    : 'bg-card/50 border-border hover:border-primary/20'
                }`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        {index === 0 && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                            Latest
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-4 py-1.5 rounded-full bg-secondary/80 text-sm font-medium text-foreground">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="group relative p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <highlight.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="inline-block px-2 py-0.5 text-xs font-bold text-primary bg-primary/10 rounded mb-2">
                              {highlight.metric}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {highlight.text}
                            </p>
                          </div>
                        </div>
                        {/* Hover Arrow */}
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">5+ years</span> of transforming data into insights
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
