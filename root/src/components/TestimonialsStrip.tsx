import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialsStripProps {
  testimonials: Testimonial[];
}

const TestimonialsStrip = ({ testimonials }: TestimonialsStripProps) => {
  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
    const rotation = index % 4 === 0 ? 'rotate-2' : index % 4 === 1 ? '-rotate-2' : index % 4 === 2 ? 'rotate-4' : '-rotate-4';
    
    return (
      <div className={`flex-shrink-0 w-96 ${rotation} hover:rotate-0 transition-transform duration-300`}>
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                {testimonial.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
            <div>
              <div className="text-white font-medium text-sm">{testimonial.author}</div>
              <div className="text-gray-400 text-xs">17/04/2025, 21:28</div>
            </div>
          </div>
          <div className="text-white text-sm leading-relaxed mb-3">
            {testimonial.quote}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-gray-700 rounded-full px-2 py-1">
              <span className="text-red-500">❤️</span>
              <span className="text-white text-xs">{Math.floor(Math.random() * 10) + 1}</span>
            </div>
            <div className="text-gray-400 text-xs">😊</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      {/* First Row - Moving Right */}
      <div className="flex mb-2 pt-8">
        <div className="flex gap-6 animate-marquee-right">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} />
          ))}
          {/* Duplicate for seamless loop */}
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={`row1-dup-${index}`} testimonial={testimonial} index={index + firstRow.length} />
          ))}
        </div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="flex pt-8">
        <div className="flex gap-6 animate-marquee-left">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} />
          ))}
          {/* Duplicate for seamless loop */}
          {secondRow.map((testimonial, index) => (
            <TestimonialCard key={`row2-dup-${index}`} testimonial={testimonial} index={index + secondRow.length} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsStrip;