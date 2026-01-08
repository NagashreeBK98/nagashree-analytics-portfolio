import { Briefcase, TrendingUp, Zap, Cloud, BarChart3, Sparkles, Trophy } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    title: 'Analyst I',
    company: 'DXC Technology',
    location: 'Bangalore, India',
    period: 'Nov 2022 – Jul 2025',
    duration: '2+ years',
    signatureImpact: 'From raw ingestion to executive dashboards, owned and scaled cloud analytics pipelines across Azure and AWS.',
    recognition: {
      title: 'FY24 Q3 Champs Award',
      description: 'Awarded for high-impact analytics delivery, automation initiatives, and measurable business outcomes.',
    },
    highlights: [
      {
        icon: BarChart3,
        title: 'Power BI & SLA Impact – 15%',
        text: 'Designed Power BI dashboards integrating ServiceNow and Azure SQL, improving SLA performance by 15% and enabling data-driven operational decisions.',
      },
      {
        icon: Zap,
        title: 'ETL Automation – 50%',
        text: 'Built and automated end-to-end ETL pipelines using Python, SQL, and Azure Data Factory, reducing manual reporting effort by 50%.',
      },
      {
        icon: Cloud,
        title: 'Multi-Cloud Analytics',
        text: 'Implemented AWS–Azure data workflows (S3, Lambda, Data Lake) to enable cross-cloud analytics and scalable data ingestion.',
      },
    ],
    tags: ['Six Sigma', 'KPI Optimization', 'DAX Analytics'],
  },
  {
    title: 'Associate Professional Software Engineer',
    company: 'DXC Technology',
    location: 'Bangalore, India',
    period: 'Mar 2020 – Oct 2022',
    duration: '2+ years',
    signatureImpact: 'Strengthened system reliability and observability through automation, monitoring, and predictive analytics.',
    recognition: {
      title: 'FY24 H1 Collaborators Award',
      description: 'Recognized for cross-team collaboration, delivery excellence, and consistent performance.',
    },
    highlights: [
      {
        icon: Zap,
        title: 'Automation & Monitoring – 70%',
        text: 'Built infrastructure monitoring automation, reducing operational effort by 70% and improving incident response efficiency.',
      },
      {
        icon: BarChart3,
        title: 'Predictive Analytics & Dashboards',
        text: 'Implemented predictive analytics on cloud logs and created Power BI and Excel dashboards for performance monitoring.',
      },
      {
        icon: TrendingUp,
        title: 'System Reliability – 99.9%',
        text: 'Maintained 99.9% system availability through proactive monitoring, alerting, and incident management.',
      },
    ],
    tags: [],
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B1220' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
        
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
                <div 
                  className="absolute left-6 md:left-8 top-20 bottom-0 w-px"
                  style={{ backgroundColor: 'rgba(31, 182, 201, 0.4)' }}
                />
              )}

              <div className="flex gap-6 md:gap-8 pb-16 last:pb-0">
                {/* Timeline Node */}
                <div className="relative shrink-0">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index
                      ? 'bg-primary shadow-md shadow-primary/20 scale-110'
                      : 'bg-primary/10 border border-primary/30'
                  }`}>
                    <Briefcase className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
                      activeIndex === index ? 'text-background' : 'text-primary'
                    }`} />
                  </div>
                  {/* Subtle active dot indicator */}
                  {activeIndex === index && (
                    <div 
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#5EE7F0' }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <div 
                  className={`flex-1 rounded-2xl p-6 md:p-8 border transition-all duration-500 ${
                    activeIndex === index
                      ? 'border-primary/30 shadow-lg shadow-primary/5 scale-[1.01]'
                      : 'border-border/50 hover:border-primary/20'
                  }`}
                  style={{ backgroundColor: '#0E1A28' }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#EAFBFF' }}>
                          {exp.title}
                        </h3>
                        {index === 0 && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                            Latest
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/DXC-Veritcal-Tagline-Full-Color-Dark.png"
                          alt="DXC Technology"
                          className="h-6 w-auto object-contain"
                        />
                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span 
                        className="px-4 py-1.5 rounded-full text-sm font-normal"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#B6C6D3' }}
                      >
                        {exp.period}
                      </span>
                      <span className="text-xs" style={{ color: '#B6C6D3' }}>{exp.location}</span>
                    </div>
                  </div>

                  {/* Signature Impact */}
                  <p className="text-base font-semibold mb-6 leading-relaxed" style={{ color: '#EAFBFF' }}>
                    {exp.signatureImpact}
                  </p>

                  {/* Highlights Grid - 3 cards only */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="group relative p-4 rounded-xl border border-border/30 hover:border-primary/20 transition-all duration-300"
                        style={{ backgroundColor: 'rgba(11, 18, 32, 0.5)' }}
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <highlight.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-bold text-primary">
                              {highlight.title}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: '#B6C6D3' }}>
                            {highlight.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  {exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="px-2 py-1 text-xs font-medium rounded border border-border/30"
                          style={{ backgroundColor: '#0F2430', color: '#5EE7F0' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Recognition - Reduced padding */}
                  <div 
                    className="flex items-start gap-3 p-3 rounded-xl border"
                    style={{ 
                      backgroundColor: '#0F2430',
                      borderColor: 'rgba(234, 179, 8, 0.15)'
                    }}
                  >
                    <Trophy className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#5EE7F0' }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#B6C6D3' }}>{exp.recognition.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{exp.recognition.description}</p>
                    </div>
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