import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Science in Data Analytics Engineering',
    institution: 'Northeastern University',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/NU_RGB_seal_R.png',
    location: 'Boston, MA',
    period: 'Sept 2023 - Dec 2025',
    status: 'In Progress',
    gpa: '3.8',
    current: true,
    coursework: ['Data Mining', 'Data Management for Analytics', 'Machine Learning Operations', 'Natural Language Processing', 'Neural Networks'],
    bgColor: '#0B1F2E',
  },
  {
    degree: 'Bachelor of Engineering in Telecommunication',
    institution: 'Dayananda Sagar College of Engineering',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG2rmJHXi1ZfP6UXmXLwlcyWeX0DUAC3gFw&s',
    location: 'Bangalore, India',
    period: 'Jul 2015 - Jul 2019',
    status: 'Completed',
    gpa: '3.8',
    current: false,
    coursework: ['Operating Systems', 'Data Structures and Algorithms', 'Database Management', 'Computer Networks', 'Software Engineering'],
    bgColor: '#0E2A26',
  },
];

// Decorative graduation caps positioned around the timeline
const decorativeCaps = [
  { top: '5%', left: '15%', size: 'w-12 h-12', opacity: 'opacity-20', rotation: '-rotate-12' },
  { top: '25%', right: '10%', size: 'w-16 h-16', opacity: 'opacity-15', rotation: 'rotate-6' },
  { top: '55%', left: '8%', size: 'w-14 h-14', opacity: 'opacity-20', rotation: 'rotate-12' },
  { top: '75%', right: '15%', size: 'w-10 h-10', opacity: 'opacity-25', rotation: '-rotate-6' },
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
          className={`absolute ${cap.size} ${cap.opacity} ${cap.rotation} hidden md:block`}
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

        {/* Education Timeline - Vertical layout with timeline on left, cards on right */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div 
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ backgroundColor: 'rgba(31, 182, 201, 0.4)' }}
          />

          <div className="space-y-12 md:space-y-16">
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div 
                  className="absolute left-4 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block z-10"
                  style={{
                    backgroundColor: edu.current ? '#5EE7F0' : '#0E1A28',
                    borderColor: edu.current ? '#5EE7F0' : '#2C7F8A',
                    top: '2rem'
                  }}
                />

                {/* Card - Aligned to right of timeline */}
                <div 
                  className="w-full md:ml-20 rounded-3xl p-6 md:p-8 border transition-all duration-500 hover:scale-[1.01]"
                  style={{
                    backgroundColor: edu.bgColor,
                    borderColor: edu.current ? 'rgba(31, 182, 201, 0.4)' : 'rgba(31, 182, 201, 0.25)',
                    boxShadow: edu.current ? '0 0 30px rgba(31, 182, 201, 0.1)' : 'none',
                  }}
                >
                  {/* Status and GPA Badges */}
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
                    <span 
                      className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full"
                      style={{ 
                        backgroundColor: 'rgba(34, 211, 238, 0.1)', 
                        color: '#22D3EE',
                        border: '1px solid rgba(34, 211, 238, 0.25)'
                      }}
                    >
                      GPA: {edu.gpa}
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

          {/* Decorative Graduation Cap on Timeline - Between cards */}
          <div 
            className="absolute left-4 md:left-8 -translate-x-1/2 hidden md:flex items-center justify-center"
            style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="animate-float" style={{ animationDuration: '4s' }}>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(31, 182, 201, 0.15)',
                  border: '1px solid rgba(31, 182, 201, 0.3)'
                }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: '#5EE7F0' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;