import { ExternalLink, Github, BarChart2, Users, Brain, Sparkles, ArrowUpRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const projects = [
  {
    title: 'HerdTrack NextGen Analytics',
    subtitle: 'Enterprise End-to-End Data Engineering & Power BI Analytics Platform',
    icon: BarChart2,
    description: 'Azure-based Bronze–Silver–Gold architecture for real-time cattle health, pregnancy, and productivity analytics. Built complete data pipelines from ingestion to visualization.',
    technologies: ['Azure Data Factory', 'Databricks', 'PySpark', 'Azure Synapse', 'Power BI'],
    metrics: [
      { label: 'Manual Monitoring Reduction', value: '40-60%' },
      { label: 'Cost Optimization', value: '15-25%' },
    ],
    links: {
      github: 'https://github.com/NagashreeBK98',
      demo: '#',
    },
    featured: true,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
  },
  {
    title: 'Customer Segmentation RFM Analysis',
    subtitle: 'eCommerce Customer Analytics',
    icon: Users,
    description: 'RFM scoring combined with K-Means clustering to derive actionable marketing insights from Kaggle eCommerce dataset. Identified key customer segments for targeted campaigns.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'K-Means'],
    metrics: [
      { label: 'Customer Segments', value: '5+' },
      { label: 'Accuracy', value: 'High' },
    ],
    links: {
      github: 'https://github.com/NagashreeBK98',
    },
    featured: false,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
  },
  {
    title: 'EEG Classification Model',
    subtitle: 'Epileptic Seizure Detection',
    icon: Brain,
    description: 'ML classification for epileptic seizure detection using EEG signals with advanced feature extraction and signal visualization. Exploring deep learning for future enhancement.',
    technologies: ['Python', 'Signal Processing', 'ML Classification', 'Feature Engineering'],
    metrics: [
      { label: 'Detection Type', value: 'Multi-class' },
      { label: 'Future Scope', value: 'Deep Learning' },
    ],
    links: {
      github: 'https://github.com/NagashreeBK98',
    },
    featured: false,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Decorative Shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border border-primary/10 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-primary/10 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world data engineering and analytics solutions demonstrating end-to-end capabilities
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Featured Glow */}
              {project.featured && (
                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${project.gradient} opacity-20 blur-lg group-hover:opacity-30 transition-opacity`} />
              )}

              <div className={`relative rounded-3xl border overflow-hidden transition-all duration-500 ${
                project.featured 
                  ? 'bg-gradient-to-br from-card via-card to-primary/5 border-primary/30' 
                  : 'bg-card/50 border-border hover:border-primary/30'
              } ${hoveredIndex === index ? 'shadow-2xl shadow-primary/10 scale-[1.01]' : ''}`}>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-primary text-background rounded-full shadow-lg shadow-primary/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Info */}
                    <div className="flex-1 space-y-5">
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                          project.featured 
                            ? `bg-gradient-to-br ${project.gradient} shadow-lg`
                            : hoveredIndex === index
                              ? 'bg-primary/20 scale-110'
                              : 'bg-secondary'
                        }`}>
                          <project.icon className={`w-8 h-8 ${project.featured ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <div className="pt-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mt-1">{project.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all ${
                              project.featured
                                ? 'bg-primary/10 border-primary/30 text-foreground'
                                : 'bg-secondary/50 border-border text-muted-foreground hover:border-primary/30'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-2">
                        {project.links.github && (
                          <Button 
                            variant={project.featured ? "hero" : "outline"} 
                            size="lg" 
                            asChild
                            className="group/btn"
                          >
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-5 h-5 mr-2" />
                              View Code
                              <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            </a>
                          </Button>
                        )}
                        {project.links.demo && project.links.demo !== '#' && (
                          <Button variant="glow" size="lg" asChild>
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-5 h-5 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Metrics Panel */}
                    <div className="lg:w-72 shrink-0">
                      <div className="p-6 rounded-2xl bg-background/50 border border-border/50 space-y-4">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Key Metrics
                        </h4>
                        {project.metrics.map((metric, mIndex) => (
                          <div
                            key={mIndex}
                            className="group/metric p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all"
                          >
                            <p className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {metric.value}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/NagashreeBK98"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all"
          >
            <Github className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              View more on <span className="text-primary font-semibold">GitHub</span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
