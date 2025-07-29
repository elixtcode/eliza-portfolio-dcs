import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I am{" "}
            <span className="text-gradient">Ruth Eliza</span>
            <br />
            and this is my {" "}
            <span className="text-gradient">Second Sunrise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            From biology to eCommerce to computer science, this is a story of reinvention, resilience,
             and a mission to empower Filipino MSMEs through technology and heart-driven innovation.


          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="button-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon"
                className="hover-lift"
                asChild
              >
                <a href="mailto:elizaisworking@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="hover-lift"
                asChild
              >
                <a href="https://github.com/elixtcode" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon"
                className="hover-lift"
                asChild
              >
                <a href="https://www.linkedin.com/in/ruth-eliza-bausas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
  <ArrowDown className="h-6 w-6 text-muted-foreground" />
</div>
      </div>
    </section>
  );
};

export default Hero;