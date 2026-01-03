import { 
  Code2, 
  Database, 
  BarChart3, 
  Cloud, 
  Activity, 
  Cpu,
  Award,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Programming & Query',
    icon: Code2,
    skills: ['Python', 'SQL', 'DAX', 'PySpark'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    title: 'Visualization & BI',
    icon: BarChart3,
    skills: ['Power BI', 'Excel Advanced', 'Matplotlib', 'Data Storytelling'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/20 to-pink-500/10',
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['Azure Data Factory', 'Azure Data Lake', 'Azure SQL', 'AWS S3', 'AWS Lambda'],
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: ['ETL Pipelines', 'Data Modeling', 'Databricks', 'Azure Synapse'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-500/20 to-emerald-500/10',
  },
  {
    title: 'Monitoring & Analytics',
    icon: Activity,
    skills: ['Azure Monitor', 'Splunk', 'ServiceNow', 'Log Analytics'],
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'from-orange-500/20 to-yellow-500/10',
  },
  {
    title: 'MLOps & Advanced',
    icon: Cpu,
    skills: ['Scikit-learn', 'Feature Engineering', 'Model Deployment', 'Six Sigma'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-500/20 to-rose-500/10',
  },
];

const certifications = [
  { name: 'Azure Fundamentals', issuer: 'Microsoft', icon: Cloud },
  { name: 'Power BI Data Analyst', issuer: 'Microsoft', icon: BarChart3 },
  { name: 'Six Sigma Green Belt', issuer: 'Certified', icon: Award },
];

const SkillsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        
        {/* Hexagonal Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Icons */}
        {[Code2, Database, Cloud, BarChart3, Cpu].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-primary/5 animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          >
            <Icon className="w-16 h-16" />
          </div>
        ))}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative rounded-2xl p-6 border transition-all duration-500 h-full ${
                hoveredIndex === index
                  ? 'bg-gradient-to-br from-card via-card to-primary/5 border-primary/40 shadow-xl shadow-primary/10 scale-[1.02]'
                  : 'bg-card/50 border-border hover:border-primary/20'
              }`}>
                {/* Gradient Glow on Hover */}
                {hoveredIndex === index && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.bgColor} opacity-50 blur-xl`} />
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.bgColor} flex items-center justify-center mb-5 transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : ''
                  }`}>
                    <category.icon className={`w-7 h-7 bg-gradient-to-r ${category.color} text-transparent bg-clip-text`} style={{ color: 'hsl(var(--primary))' }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-300 cursor-default ${
                          hoveredIndex === index
                            ? 'bg-primary/10 border-primary/30 text-foreground'
                            : 'bg-secondary/50 border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Skill Count Badge */}
                  <div className="absolute top-0 right-0">
                    <span className={`inline-flex items-center justify-center w-8 h-8 text-xs font-bold rounded-lg transition-all ${
                      hoveredIndex === index
                        ? 'bg-primary text-background'
                        : 'bg-secondary/80 text-muted-foreground'
                    }`}>
                      {category.skills.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                  <p className="text-sm text-muted-foreground">Professional Credentials</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">{cert.name}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
            {['Python', 'SQL', 'Power BI', 'Azure', 'AWS', 'Databricks', 'ETL', 'DAX'].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
