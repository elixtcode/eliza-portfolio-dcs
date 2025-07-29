import { useState } from "react";
import { BookOpen, Heart, Lightbulb } from "lucide-react";
import OblationImage from "@/assets/UPOU Rites Disney.png"; // ensure correct path

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timeline = [
    {
      year: "2005–2009",
      event: "BS Biology — University of Santo Tomas (UST)",
      detail: "Built a strong foundation in the sciences, research methods, and critical thinking.",
    },
    {
      year: "2010–2014",
      event: "Research Assistant — St. Luke's Medical Center",
      detail: "Conducted clinical studies and statistical analysis; refined my attention to detail and analytical thinking.",
    },
    {
      year: "2015–Present",
      event: "Digital Product Manager",
      detail: "Led digital transformation initiatives — eCommerce platforms, SEO strategies, and early adoption of AI tools.",
    },
    {
      year: "2025 (Ongoing)",
      event: "Certificates & Tech Transition",
      detail: "Pursuing self-study in AI (ChatGPT, Gemini), Python scripting, and Web Development while transitioning into tech formally.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        {/* Top: Ella card + Image trigger */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Story text */}
          <div className="card-elevated p-8 hover-lift space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Ella and the Second Sunrise</h3>
            </div>

            <p className="text-muted-foreground italic mb-4">
              "A parallel story that mirrors my own — resilience, reinvention, and rediscovery through tech."
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              This digitally illustrated children's story was created using <strong>Sora AI</strong> and <strong>ChatGPT</strong>,
              inspired by my journey towards pursuing a long-held dream: earning a formal degree in Computer Science
              through the <strong>Diploma in Computer Science (DCS)</strong> at the <strong>University of the Philippines Open University</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              It was sparked by a photo of me standing in front of the <strong>Oblation</strong> the day before the
              <strong> UPOU Commencement Rites</strong>. That quiet moment, filled with reflection and anticipation,
              became the seed for this story.
            </p>

            <p className="font-medium text-foreground mb-6">
              <em>Ella and the Second Sunrise</em> reflects my belief that it's never too late to begin again —
              especially when you're choosing the path that's always been in your heart.
            </p>
          </div>

          {/* Right: Image preview (clickable) */}
          <div className="flex items-center justify-center relative group">
            <img
              src={OblationImage}
              alt="Ella and the Second Sunrise preview"
              onClick={() => setIsModalOpen(true)}
              className="rounded-xl shadow-lg max-w-full cursor-pointer hover:brightness-110 transition duration-300"
            />
            {/* Tooltip on hover */}
            <div className="absolute bottom-4 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Click to Read
            </div>
          </div>
        </div>

        {/* Timeline and Focus Box Side-by-Side */}
        <div className="card-elevated p-8 hover-lift flex flex-col lg:flex-row gap-8">
          {/* Left: Timeline */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Turning Adversity into Adaptability</h3>
            </div>

            <p className="text-lg font-medium mb-4">Medicine → eCommerce → Tech</p>

            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-primary font-mono text-sm min-w-[120px]">{item.year}</span>
                <div>
                  <p className="font-medium">{item.event}</p>
                  {item.detail && (
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Current Focus + Why This Matters */}
          <div className="flex-1 flex items-center justify-center">
  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-md w-full space-y-6 text-center">
    <div className="flex items-start gap-3 text-left">
      <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
      <div>
        <p className="text-sm font-medium mb-2">Current Focus</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Through detours, hardship, and reinvention, I've discovered technology as my anchor —
          a tool that fuels my creativity and resilience. Now, I'm formalizing that journey through the
          <strong> Diploma in Computer Science at UPOU</strong>, with a vision to help Filipino MSMEs digitize and thrive.
        </p>
      </div>
    </div>

              <div className="pt-4 border-t border-primary/20">
      <p className="text-sm font-medium mb-2">Why This Matters</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        This isn't just an academic goal — it's my path to creating meaningful impact in the Philippine tech economy and beyond.
      </p>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Flipbook Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <iframe
              src="https://heyzine.com/flip-book/f629bfb721.html#page/1"
              className="w-full h-[600px] rounded-b-xl"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
