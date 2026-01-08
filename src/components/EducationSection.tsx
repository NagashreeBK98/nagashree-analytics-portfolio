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
    coursework: 'Relevant Coursework: Data Management for Analytics, Foundations of Data Analytics Engineering, Computational & Data Visualization, Machine Learning Operations, Data Mining',
  },
  {
    degree: 'Bachelor of Engineering in Telecommunication',
    institution: 'Dayananda Sagar College of Engineering',
    logo: 'https://dsu.edu.in/virtual-tour/images/thumbnail.png',
    location: 'Bangalore, India',
    period: '2019',
    status: null,
    current: false,
    coursework: 'Foundational Coursework: Probability & Statistics, Engineering Mathematics, Programming (C, C++, Python), Internet of Things (IoT), Digital Signal Processing',
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

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: 'rgba(31, 182, 201, 0.4)' }}
          />

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div 
                  className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block z-10"
                  style={{
                    backgroundColor: edu.current ? '#5EE7F0' : '#0E1A28',
                    borderColor: edu.current ? '#5EE7F0' : '#2C7F8A',
                    top: '2rem'
                  }}
                />

                {/* Card */}
                <div 
                  className={`md:ml-16 rounded-2xl p-6 md:p-8 border transition-all duration-500 hover:scale-[1.01] ${
                    edu.current 
                      ? 'border-opacity-30' 
                      : 'border-opacity-20 hover:border-opacity-30'
                  }`}
                  style={{
                    backgroundColor: edu.current ? '#0F1E2E' : '#0E1A28',
                    borderColor: edu.current ? '#1FB6C9' : '#1AA3B3',
                  }}
                >
                  {/* Glow Effect for current */}
                  {edu.current && (
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl opacity-30 -z-10" />
                  )}
                  
                  <div className="relative">
                    {edu.current && (
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full mb-4"
                        style={{ backgroundColor: 'rgba(31, 182, 201, 0.2)', color: '#5EE7F0' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {edu.status}
                      </span>
                    )}

                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Institution Logo */}
                      <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-border/50">
                        <img 
                          src={edu.logo}
                          alt={edu.institution}
                          className={`w-full h-full object-contain ${!edu.current ? 'scale-110' : ''}`}
                        />
                      </div>

                      <div className="flex-1">
                        <h4 
                          className="text-xl font-bold transition-colors"
                          style={{ color: edu.current ? '#EAFBFF' : '#E5F6FA' }}
                        >
                          {edu.degree}
                        </h4>
                        <p 
                          className="font-semibold mt-1"
                          style={{ color: edu.current ? '#5EE7F0' : '#4FD1E0' }}
                        >
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                          <span 
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                            style={{ 
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              color: edu.current ? '#B6C6D3' : '#AFC1CF'
                            }}
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            {edu.location}
                          </span>
                          <span 
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                            style={{ 
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              color: edu.current ? '#B6C6D3' : '#AFC1CF'
                            }}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.period}
                          </span>
                        </div>

                        {/* Coursework */}
                        <div className="mt-4 flex items-start gap-2 text-sm" style={{ color: edu.current ? '#B6C6D3' : '#AFC1CF' }}>
                          <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <p>{edu.coursework}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Graduation Cap Animation between cards */}
                {index === 0 && educationData.length > 1 && (
                  <div className="hidden md:flex justify-center my-4 relative">
                    <div 
                      className="absolute left-8 -translate-x-1/2"
                      style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                      <div className="animate-float" style={{ animationDuration: '5s' }}>
                        <GraduationCap 
                          className="w-5 h-5 opacity-60" 
                          style={{ color: '#5EE7F0' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;