import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Science in Data Analytics Engineering',
    institution: 'Northeastern University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/NU_RGB_seal_R.png',
    location: 'Boston, MA',
    period: 'Sep 2025 – May 2027',
    status: 'Currently Pursuing',
    current: true,
    coursework: ['Data Management for Analytics', 'Data Mining', 'Machine Learning & Operations'],
    bgColor: '#0E2A26', // Swapped: now teal/green
  },
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'Dayananda Sagar College of Engineering',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG2rmJHXi1ZfP6UXmXLwlcyWeX0DUAC3gFw&s',
    location: 'Bangalore, India',
    period: 'Aug 2016 – Jul 2019',
    status: 'Completed',
    current: false,
    coursework: ['Probability & Statistics', 'Programming (C, C++, Python)', 'Engineering Mathematics'],
    bgColor: '#0B1F2E', // Swapped: now navy
  },
];

// Decorative graduation caps - positioned in specific empty gaps
const decorativeCaps = [
  // Right gap between Master's and Bachelor's cards
  { top: '48%', right: '6%', size: 'w-16 h-16', opacity: 'opacity-35', rotation: 'rotate-6' },
  // Lower-left gap below Master's card
  { top: '72%', left: '6%', size: 'w-14 h-14', opacity: 'opacity-30', rotation: '-rotate-12' },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0F14' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Decorative Graduation Caps */}
      {decorativeCaps.map((cap, index) => (
        <div
          key={index}
          className={`absolute ${cap.size} ${cap.opacity} ${cap.rotation} hidden md:block pointer-events-none`}
          style={{ top: cap.top, left: cap.left, right: cap.right }}
        >
          <GraduationCap className="w-full h-full" style={{ color: '#1FB6C9' }} />
        </div>
      ))}

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

        {/* Staggered Education Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Timeline Line - Centered */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: 'rgba(31, 182, 201, 0.4)' }}
          />

          {/* Decorative Graduation Cap on Timeline Center */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10"
            style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="animate-float" style={{ animationDuration: '4s' }}>
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(31, 182, 201, 0.2)',
                  border: '2px solid rgba(31, 182, 201, 0.5)'
                }}
              >
                <GraduationCap className="w-6 h-6" style={{ color: '#5EE7F0' }} />
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-0">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex items-start ${
                  index === 0 
                    ? 'md:justify-start md:pr-[52%]' 
                    : 'md:justify-end md:pl-[52%] md:mt-16'
                }`}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block z-10"
                  style={{
                    backgroundColor: edu.current ? '#5EE7F0' : '#0E1A28',
                    borderColor: edu.current ? '#5EE7F0' : '#2C7F8A',
                    top: index === 0 ? '2rem' : '2rem',
                  }}
                />

                {/* Card */}
                <div 
                  className="w-full rounded-3xl p-6 md:p-8 border transition-all duration-500 hover:scale-[1.01]"
                  style={{
                    backgroundColor: edu.bgColor,
                    borderColor: 'rgba(31, 182, 201, 0.3)',
                    boxShadow: edu.current ? '0 0 30px rgba(31, 182, 201, 0.1)' : '0 0 20px rgba(31, 182, 201, 0.05)',
                  }}
                >
                  {/* Status Badge */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full"
                      style={{ 
                        backgroundColor: edu.current ? 'rgba(34, 211, 238, 0.15)' : 'rgba(52, 211, 153, 0.15)', 
                        color: edu.current ? '#22D3EE' : '#34D399',
                        border: edu.current ? '1px solid rgba(34, 211, 238, 0.3)' : '1px solid rgba(52, 211, 153, 0.3)'
                      }}
                    >
                      {edu.current && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                      {edu.status}
                    </span>
                  </div>

                  {/* Logo and Degree Info */}
                  <div className="flex items-start gap-4">
                    {/* Institution Logo */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-border/30">
                      <img 
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      {/* Degree Name */}
                      <h4 
                        className="text-xl md:text-2xl font-bold leading-tight"
                        style={{ color: '#EAFBFF' }}
                      >
                        {edu.degree}
                      </h4>
                      
                      {/* Institution Name */}
                      <p 
                        className="text-lg font-semibold mt-1"
                        style={{ color: '#22D3EE' }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Location and Period Pills */}
                  <div className="flex flex-wrap items-center gap-3 mt-5">
                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#9CA3AF'
                      }}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#9CA3AF'
                      }}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Key Coursework */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4" style={{ color: '#22D3EE' }} />
                      <span className="text-sm font-semibold" style={{ color: '#EAFBFF' }}>Key Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg"
                          style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            color: '#B6C6D3',
                            border: '1px solid rgba(255, 255, 255, 0.08)'
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;