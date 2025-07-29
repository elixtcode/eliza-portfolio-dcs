import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss technology, collaboration opportunities, 
            or how we can help Filipino businesses thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-elevated p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">
              Let's discuss your ideas or potential collaborations
            </p>
            <Button 
              className="w-full button-glow bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:elizaisworking@gmail.com">
                Send Message
              </a>
            </Button>
          </div>
          
          <div className="card-elevated p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <Github className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground mb-4">
              Explore my code and open source contributions
            </p>
            <Button 
              variant="outline" 
              className="w-full hover-lift"
              asChild
            >
              <a href="https://github.com/elixtcode" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </Button>
          </div>
          
          <div className="card-elevated p-8 hover-lift group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
              <Linkedin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground mb-4">
              Connect with me professionally
            </p>
            <Button 
              variant="outline" 
              className="w-full hover-lift"
              asChild
            >
              <a href="https://www.linkedin.com/in/ruth-eliza-bausas/" target="_blank" rel="noopener noreferrer">
                Connect
              </a>
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg border border-primary/20 p-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Thank you for visiting!</span>
          </div>
          <p className="text-muted-foreground">
            This portfolio represents not just my technical growth, but my commitment to using technology 
            for meaningful impact. Whether you're a fellow developer, potential collaborator, or someone 
            interested in digital transformation for Philippine businesses, I'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;