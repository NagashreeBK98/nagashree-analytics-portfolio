import { Sparkles, Code2, Cloud, Database, BarChart3, Cpu, Zap } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming & Data',
    icon: Code2,
    skills: ['Python', 'SQL', 'R', 'Bash', 'Jupyter Notebook'],
  },
  {
    title: 'Cloud & Data Platforms',
    icon: Cloud,
    skills: ['Azure (Data Factory, Databricks, Synapse, ADLS Gen2)', 'AWS (S3, EC2, Lambda, IAM)', 'Linux'],
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Relational & NoSQL Databases'],
  },
  {
    title: 'Analytics & Visualization',
    icon: BarChart3,
    skills: ['Power BI', 'Tableau', 'Excel'],
  },
  {
    title: 'Big Data & Streaming',
    icon: Zap,
    skills: ['Apache Spark', 'Apache Kafka'],
  },
  {
    title: 'Machine Learning & MLOps',
    icon: Cpu,
    skills: ['Scikit-learn', 'TensorFlow', 'Time-Series Forecasting', 'Clustering', 'Docker', 'Jenkins'],
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

        {/* Skills Grid - 3 per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#111827',
                borderColor: 'rgba(255, 255, 255, 0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.25)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(34, 211, 238, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon - Small, subtle */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <group.icon className="w-5 h-5" style={{ color: '#22D3EE' }} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-4" style={{ color: '#22D3EE' }}>{group.title}</h3>

              {/* Skills - Clean text/chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-sm rounded-lg border transition-all cursor-default"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      color: '#9CA3AF'
                    }}
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