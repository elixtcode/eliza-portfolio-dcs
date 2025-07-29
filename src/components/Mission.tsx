const Mission = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="card-inner-glow-orange p-8 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary text-center">
                Why I Created This Website
              </h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                I built this portfolio to showcase my projects, track my progress in programming, 
                and support my goal of lifting my probationary status. It highlights the works I've done for myself, 
                my community, and my workplace, each project a reflection of my commitment to learning 
                and applying computer science meaningfully.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-justify">
                At the core of it all is a desire to learn, grow, and contribute not just to my own development, 
                but to the digital progress of my community and, ultimately, our country.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card-inner-glow-orange p-8 hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary text-center">
                Why I'm Learning Computer Science
              </h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                The Philippines is on the cusp of the Age of AI but many MSMEs are still far behind. 
                As someone who has seen both the promise and the challenges of digital commerce, 
                I'm committed to helping Filipino businesses transform through accessible, scalable tech.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-justify">
                Through the UPOU Diploma in Computer Science, I aim to bridge the gap for small businesses, 
                empowering them to compete in a global, AI-driven economy.
              </p>
              <p className="font-medium text-foreground mt-6 text-center">
                This portfolio is part of that journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
