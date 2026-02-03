import { CheckCircle, XCircle } from "lucide-react";

const PPComparisonSection = () => {
  const withDC = [
    "Convert specific pages or entire PDFs",
    "High-resolution output for any use",
    "100% local — sensitive docs stay private",
    "No watermarks, no limits",
    "Free, no account required"
  ];

  const withoutDC = [
    "Limited pages per document",
    "Watermarks on free versions",
    "Upload confidential documents to servers",
    "Low-resolution output",
    "Pay for premium or deal with ads"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Desktop Commander vs. Online Converters
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* With Desktop Commander */}
          <div className="flex items-start gap-4 p-6 rounded-xl bg-green-500/5 border-2 border-green-500/20">
            <div className="shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                With Desktop Commander
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {withDC.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Online Converters */}
          <div className="flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20">
            <div className="shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Online Converters
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {withoutDC.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPComparisonSection;
