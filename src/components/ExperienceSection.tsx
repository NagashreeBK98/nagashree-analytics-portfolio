import { Briefcase, TrendingUp, Zap, Database, Cloud, BarChart3 } from 'lucide-react';

const experiences = [
  {
    title: 'Analyst I',
    company: 'DXC Technology',
    location: 'Bangalore, India',
    period: 'Nov 2022 – Jul 2025',
    highlights: [
      {
        icon: BarChart3,
        text: 'Designed Power BI dashboards integrating ServiceNow & Azure SQL, achieving 15% SLA improvement',
      },
      {
        icon: Zap,
        text: 'Automated ETL pipelines using Python, SQL, and Azure Data Factory, reducing manual reporting by 50%',
      },
      {
        icon: Cloud,
        text: 'Implemented AWS–Azure integration (S3, Lambda, Data Lake) for cross-cloud data workflows',
      },
      {
        icon: TrendingUp,
        text: 'Applied Six Sigma methodologies for incident optimization and advanced DAX-based KPI analytics',
      },
    ],
  },
  {
    title: 'Associate Professional Software Engineer',
    company: 'DXC Technology',
    location: 'Bangalore, India',
    period: 'Mar 2020 – Oct 2022',
    highlights: [
      {
        icon: Zap,
        text: 'Built infrastructure monitoring automation, reducing operational effort by 70%',
      },
      {
        icon: Database,
        text: 'Developed centralized multi-cloud log analytics for unified visibility across platforms',
      },
      {
        icon: BarChart3,
        text: 'Implemented predictive analytics on cloud logs and created Power BI & Excel performance dashboards',
      },
      {
        icon: TrendingUp,
        text: 'Maintained 99.9% system availability through proactive monitoring and incident response',
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-muted/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.03) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Career Journey
          </p>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building scalable data solutions and driving analytics excellence across enterprise environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                {index !== experiences.length - 1 && (
                  <div className="absolute top-12 bottom-0 w-full bg-gradient-to-b from-primary/50 to-transparent" />
                )}
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30" />

              {/* Content Card */}
              <div className="card-glass rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-foreground font-medium">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <highlight.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
