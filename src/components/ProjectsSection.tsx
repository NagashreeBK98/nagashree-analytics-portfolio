import { ExternalLink, Github, BarChart2, Users, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'HerdTrack NextGen Analytics',
    subtitle: 'Enterprise End-to-End Data Engineering & Power BI Analytics Platform',
    icon: BarChart2,
    description: 'Azure-based Bronze–Silver–Gold architecture for real-time cattle health, pregnancy, and productivity analytics.',
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
  },
  {
    title: 'Customer Segmentation RFM Analysis',
    subtitle: 'eCommerce Customer Analytics',
    icon: Users,
    description: 'RFM scoring combined with K-Means clustering to derive actionable marketing insights from Kaggle eCommerce dataset.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'K-Means'],
    metrics: [
      { label: 'Customer Segments', value: '5+' },
      { label: 'Accuracy', value: 'High' },
    ],
    links: {
      github: 'https://github.com/NagashreeBK98',
    },
    featured: false,
  },
  {
    title: 'EEG Classification Model',
    subtitle: 'Epileptic Seizure Detection',
    icon: Brain,
    description: 'ML classification for epileptic seizure detection using EEG signals with feature extraction and signal visualization.',
    technologies: ['Python', 'Signal Processing', 'ML Classification', 'Feature Engineering'],
    metrics: [
      { label: 'Detection Type', value: 'Multi-class' },
      { label: 'Future Scope', value: 'Deep Learning' },
    ],
    links: {
      github: 'https://github.com/NagashreeBK98',
    },
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Portfolio
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world data engineering and analytics solutions demonstrating end-to-end capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-glass rounded-2xl border transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 overflow-hidden ${
                project.featured ? 'border-primary/30' : 'border-border'
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                        project.featured ? 'bg-primary/20' : 'bg-secondary'
                      }`}>
                        <project.icon className={`w-7 h-7 ${project.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        {project.featured && (
                          <span className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full mb-2">
                            Featured Project
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      {project.links.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.links.demo && project.links.demo !== '#' && (
                        <Button variant="hero" size="sm" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="lg:w-64 shrink-0">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                      {project.metrics.map((metric, mIndex) => (
                        <div
                          key={mIndex}
                          className="p-4 rounded-xl bg-background/50 border border-border/50 text-center lg:text-left"
                        >
                          <p className="text-2xl font-bold text-primary">{metric.value}</p>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
