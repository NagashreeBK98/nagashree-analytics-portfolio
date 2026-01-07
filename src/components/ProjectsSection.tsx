import { ExternalLink, Layers, ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import projectCustomerSegmentation from '@/assets/project-customer-segmentation.png';
import projectStockNetwork from '@/assets/project-stock-network.png';
import projectEegClassification from '@/assets/project-eeg-classification.png';
import projectCrimeAnalysis from '@/assets/project-crime-analysis.png';

const projects = [
  {
    title: 'HerdTrack – NextGen Analytics',
    subtitle: 'Enterprise end-to-end cloud data engineering & analytics platform',
    image: 'https://raw.githubusercontent.com/NagashreeBK98/herdtrack-azure-data-engineering/main/architecture/herdtrack_architecture.png',
    description: 'Designed and built an Azure-based Bronze–Silver–Gold data architecture using Kaggle datasets and external APIs to address manual cattle monitoring and delayed decision-making, enabling real-time analytics with Databricks, Synapse, and Power BI.',
    technologies: ['Azure Data Factory', 'Databricks', 'PySpark', 'Azure Data Lake Gen2', 'Azure Synapse', 'Power BI', 'Python', 'SQL', 'Kaggle Datasets', 'REST APIs'],
    link: 'https://github.com/NagashreeBK98/herdtrack-azure-data-engineering',
  },
  {
    title: 'Customer Segmentation Using RFM Analysis',
    subtitle: 'Customer analytics and behavioral segmentation using eCommerce data',
    image: projectCustomerSegmentation,
    description: 'Built a customer segmentation analytics pipeline using RFM (Recency, Frequency, Monetary) analysis and clustering to identify high-value, at-risk, and low-engagement customer groups from eCommerce transaction data.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook', 'Matplotlib', 'Seaborn', 'Kaggle Dataset'],
    link: 'https://github.com/NagashreeBK98/Customer-Segmentation-RFM',
  },
  {
    title: 'Correlation-Weighted Network Analysis of Stock Prices',
    subtitle: 'Financial market network analysis using stock price correlations',
    image: projectStockNetwork,
    description: 'Built a correlation-weighted stock network using daily market data to uncover relationships, clusters, and dependencies across major U.S. equities, supporting market structure analysis and diversification insights.',
    technologies: ['Python', 'Pandas', 'NumPy', 'NetworkX', 'Matplotlib', 'yFinance', 'Jupyter Notebook'],
    link: 'https://github.com/NagashreeBK98/Correlation-Weighted-Stock-Network',
  },
  {
    title: 'EEG Classification Model for Epileptic Seizure Detection',
    subtitle: 'Machine learning–based EEG signal classification for healthcare analytics',
    image: projectEegClassification,
    description: 'Built a machine learning–based EEG signal classification pipeline to detect epileptic seizure activity by preprocessing signals, extracting features, and evaluating models on benchmark EEG datasets.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook', 'CHB-MIT EEG Dataset', 'Bonn EEG Dataset'],
    link: 'https://github.com/NagashreeBK98/EEG-Classification-Model',
  },
  {
    title: 'U.S. Crime Data Analysis & Forecasting (2020–2025)',
    subtitle: 'Exploratory data analysis and time-series forecasting on real-world crime data',
    image: projectCrimeAnalysis,
    description: 'Analyzed real-world U.S. crime data from 2020–2025 to uncover trends, seasonal patterns, regional variations, and socioeconomic correlations, and applied time-series forecasting to predict future crime trends.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn', 'Statsmodels', 'Jupyter Notebook'],
    link: 'https://github.com/NagashreeBK98/crime-data-analysis',
  },
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
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

        {/* Projects Grid - 3 per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative rounded-2xl border overflow-hidden transition-all duration-500 flex flex-col h-full ${
                hoveredIndex === index
                  ? 'bg-gradient-to-br from-card via-card to-primary/5 border-primary/40 shadow-xl shadow-primary/10 scale-[1.02]'
                  : 'bg-card/50 border-border hover:border-primary/30'
              }`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Technology Used:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-1 text-xs font-medium rounded bg-secondary/50 border border-border/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 text-xs font-medium rounded bg-primary/10 border border-primary/20 text-primary">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="w-full group/btn"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project Details
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
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