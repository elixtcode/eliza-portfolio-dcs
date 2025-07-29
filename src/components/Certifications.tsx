import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Certified AI Associate",
      provider: "Salesforce",
      date: "Apr 2025",
      description: "Passed with strong scores: AI Fundamentals (100%), CRM Capabilities (100%), Ethics (86%), Data for AI (86%)",
      type: "certification",
      highlight: true,
      certificateUrl: "https://drive.google.com/file/d/1CO1ZKp66YyOJky5kGz3LlNrcFxSxezk0/view?usp=sharing"
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      provider: "Udemy / The App Brewery",
      date: "Mar 2025",
      description: "Completed hands-on coding challenges daily. Gained fluency in Python and became more confident applying it to real-world tasks and technical problem solving.",
      type: "certification",
      highlight: true,
      certificateUrl: "https://www.udemy.com/certificate/UC-3194b34f-515c-4946-8033-2017bc11e9eb/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
    },
    {
      title: "Principles of Graphic Design",
      provider: "University of the Philippines Open University (UPOU)",
      date: "Mar 2025",
      description: "Studied design theory, color, typography, and layout. Applied concepts to build branding assets and visual interfaces.",
      type: "course"
    },
    {
      title: "Risk Analysis for Project Management",
      provider: "University of the Philippines Open University (UPOU)",
      date: "Mar 2025",
      description: "Learned project risk assessment and mitigation strategies to apply to real world projects.",
      type: "course"
    },
    {
      title: "Digital Marketing for Entrepreneurs",
      provider: "University of the Philippines Open University (UPOU)",
      date: "Jun 2025",
      description: "Built and pitched a full digital marketing plan for a real business. Covered social media marketing, customer journey and branding.",      distinction: "Highest Distinction",
      grade: "103.1 / 100",
      type: "certification",
      highlight: true,
      certificateUrl: "https://drive.google.com/file/d/1OAj7ifIBPG0zidDY7gkbehjVbmt0EM-9/view?usp=sharing"
    },
    {
      title: "Digital Product Management: From Strategy to Launch",
      provider: "National University of Singapore",
      date: "Jan 2025",
      description: "Developed a mock product launch with GTM strategy, stakeholder mapping, MVP definition, and success KPIs.",
      type: "certification",
      highlight: true,
      certificateUrl: "https://nusingapore.credential.getsmarter.com/705d7784-ab0c-4103-bfbe-199ab5fbc71e#acc.CHMh69Pc"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey of continuous learning and professional development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow hidden md:block"></div>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className={`relative flex gap-8 items-start animate-slide-up ${cert.highlight ? 'card-glow' : 'card-elevated'} p-6 hover-lift`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full m-auto"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 md:ml-16">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cert.distinction && (
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            {cert.distinction}
                          </Badge>
                        )}
                        {cert.highlight && cert.certificateUrl ? (
  <a
    href={cert.certificateUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex"
  >
    <Badge className="bg-primary text-primary-foreground hover:brightness-110 transition">
      <Award className="h-3 w-3 mr-1" />
      View Certificate
    </Badge>
  </a>
) : cert.highlight ? (
  <Badge className="bg-primary text-primary-foreground">
    <Award className="h-3 w-3 mr-1" />
    Certified
  </Badge>
) : null}

                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="font-medium">{cert.provider}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                      {cert.grade && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Grade: {cert.grade}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Link to external portfolio */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              This linked page is one of my early prototype websites created with just HTML and CSS where I first documented my learning journey and certificates:
            </p>
            <a 
              href="https://elizaislearning.github.io/eliza-pinkgrey/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors font-medium"
            >
              elizaislearning.github.io/eliza-pinkgrey
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;