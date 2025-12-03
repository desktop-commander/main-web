import { CheckCircle, XCircle } from "lucide-react";

const BPComparisonSection = () => {
  const withDC = [
    "Describe what you want in plain English",
    "Get working code in minutes",
    'Iterate instantly—"make the button blue," "add a login page"',
    'Git tracking and rollback—"commit this version," "roll back to yesterday"',
    'Connect tools and services—"set up Google Analytics for my project"',
    "Build locally, deploy when ready"
  ];

  const withoutDC = [
    "Learn syntax, frameworks, and CLI commands first",
    "Hours of tutorials and writing code manually",
    "Copy-paste from Stack Overflow and pray it works",
    "Manual Git commands (or no version control at all)"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            With Desktop Commander vs. Without
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* With Desktop Commander - Green */}
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

          {/* Without Desktop Commander - Red */}
          <div className="flex items-start gap-4 p-6 rounded-xl bg-red-500/5 border-2 border-red-500/20">
            <div className="shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Without Desktop Commander
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

export default BPComparisonSection;
