import { useState, useEffect, useRef } from "react";

const capabilities = [
  "Build apps and websites without coding",
  "Automate repetitive tasks in plain English",
  "Organize files and folders instantly",
  "Create scripts that run on your machine",
  "Connect and operate any tool you have installed",
];

const CapabilityProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Quote */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-medium max-w-4xl mx-auto leading-relaxed">
            While most AI assistants can discuss what to do,
            <br className="hidden sm:block" />
            <span className="text-primary"> Desktop Commander actually executes the tasks.</span>
          </p>
        </div>

        {/* Video */}
        <div className={`mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface/50 overflow-hidden shadow-elegant">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                title="Desktop Commander App Demo - AI executing tasks on your computer"
              >
                <source src="/videos/desktop-commander-app-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Capabilities list */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-dc-surface border border-dc-border rounded-full text-sm md:text-base text-muted-foreground"
              >
                <span className="text-primary">•</span>
                {capability}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityProof;
