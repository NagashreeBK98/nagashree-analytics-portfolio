import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Science in Data Analytics Engineering',
    institution: 'Northeastern University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/NU_RGB_seal_R.png',
    location: 'Boston, MA, USA',
    period: 'Expected 2026',
    status: 'Currently Pursuing',
    current: true,
    coursework: 'Relevant Coursework: Data Management for Analytics, Foundations of Data Analytics Engineering, Computational & Data Visualization, MLOps',
  },
  {
    degree: 'Bachelor of Engineering in Telecommunication',
    institution: 'Dayananda Sagar College of Engineering',
    logo: 'https://dsu.edu.in/virtual-tour/images/thumbnail.png',
    location: 'Bangalore, India',
    period: '2019',
    status: null,
    current: false,
    coursework: 'Foundational Coursework: Probability & Statistics, Programming (C, C++, Python), Internet of Things (IoT), Digital Signal Processing',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in data analytics and engineering
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:scale-[1.01] ${
                edu.current 
                  ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30' 
                  : 'bg-card/50 border-border hover:border-primary/30'
              }`}
            >
              {/* Glow Effect */}
              {edu.current && (
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-50" />
              )}
              
              <div className="relative">
                {edu.current && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4 animate-pulse-glow">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {edu.status}
                  </span>
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Institution Logo */}
                  <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-border/50">
                    <img 
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-semibold mt-1">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Coursework */}
                    <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p>{edu.coursework}</p>
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

export default EducationSection;