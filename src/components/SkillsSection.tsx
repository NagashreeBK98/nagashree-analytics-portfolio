import { Sparkles, Code2, Cloud, Database, BarChart3, Cpu, Wrench } from 'lucide-react';

const skillGroups = [
  {
    title: 'Data Engineering & Analytics',
    icon: Code2,
    skills: ['Python', 'SQL', 'PySpark', 'ETL Pipelines', 'Data Modeling', 'Medallion (Bronze–Silver–Gold) Architecture'],
  },
  {
    title: 'Cloud & Data Platforms',
    icon: Cloud,
    skills: ['Azure (Data Factory, Databricks, Synapse Analytics, Data Lake Gen2)', 'AWS (S3, Lambda)'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Relational & NoSQL Databases'],
  },
  {
    title: 'Analytics & Visualization',
    icon: BarChart3,
    skills: ['Power BI', 'Tableau', 'DAX', 'Data Visualization', 'Exploratory Data Analysis (EDA)'],
  },
  {
    title: 'Machine Learning & Data Science',
    icon: Cpu,
    skills: ['Machine Learning', 'MLOps', 'Clustering', 'Time-Series Forecasting'],
  },
  {
    title: 'Tools & Ecosystem',
    icon: Wrench,
    skills: ['Databricks', 'Jupyter Notebook', 'Git', 'GitHub', 'REST APIs', 'Kaggle Datasets', 'Linux (VM)', 'Windows'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end data solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 border bg-card/50 border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <group.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-4">{group.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;