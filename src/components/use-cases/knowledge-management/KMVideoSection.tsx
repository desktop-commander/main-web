const KMVideoSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Turn conversations into permanent knowledge
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how Desktop Commander transforms AI chats into organized, searchable documentation
          </p>
        </div>

        {/* Full-width video placeholder */}
        <div className="relative aspect-video w-full rounded-2xl border-2 border-dc-border bg-dc-card overflow-hidden group">
          {/* Video placeholder content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-dc-surface to-dc-card">
            {/* Play button */}
            <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cursor-pointer">
              <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[28px] border-l-primary border-b-[16px] border-b-transparent ml-2" />
            </div>
            <p className="text-xl font-medium text-foreground mb-2">Demo Video</p>
            <p className="text-muted-foreground">See knowledge management in action</p>
          </div>
          
          {/* Uncomment when video is ready */}
          {/* <video 
            className="w-full h-full object-cover" 
            autoPlay
            loop 
            muted 
            playsInline
            controls
          >
            <source src="/videos/knowledge-management-demo.mp4" type="video/mp4" />
            Your browser doesn't support video playback.
          </video> */}
        </div>
      </div>
    </section>
  );
};

export default KMVideoSection;
