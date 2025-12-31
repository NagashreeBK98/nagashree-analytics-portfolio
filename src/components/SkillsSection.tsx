import { 
  Code2, 
  Database, 
  BarChart3, 
  Cloud, 
  Activity, 
  Cpu,
  Award,
  TrendingUp
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Query',
    icon: Code2,
    skills: ['Python', 'SQL', 'DAX', 'PySpark'],
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    title: 'Visualization & BI',
    icon: BarChart3,
    skills: ['Power BI', 'Excel Advanced', 'Matplotlib', 'Data Storytelling'],
    color: 'from-purple-500/20 to-purple-600/5',
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: ['Azure Data Factory', 'Azure Data Lake', 'Azure SQL', 'AWS S3', 'AWS Lambda'],
    color: 'from-cyan-500/20 to-cyan-600/5',
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: ['ETL Pipelines', 'Data Modeling', 'Databricks', 'Azure Synapse'],
    color: 'from-green-500/20 to-green-600/5',
  },
  {
    title: 'Monitoring & Analytics',
    icon: Activity,
    skills: ['Azure Monitor', 'Splunk', 'ServiceNow', 'Log Analytics'],
    color: 'from-orange-500/20 to-orange-600/5',
  },
  {
    title: 'MLOps & Advanced',
    icon: Cpu,
    skills: ['Scikit-learn', 'Feature Engineering', 'Model Deployment', 'Six Sigma'],
    color: 'from-pink-500/20 to-pink-600/5',
  },
];

const certifications = [
  'Azure Fundamentals',
  'Power BI Data Analyst',
  'Six Sigma Green Belt',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Technical Expertise
          </p>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building end-to-end data solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group card-glass rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border/50 hover:border-primary/50 hover:text-foreground transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-2xl mx-auto">
          <div className="card-glass rounded-xl p-8 border border-border text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg"
                >
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
