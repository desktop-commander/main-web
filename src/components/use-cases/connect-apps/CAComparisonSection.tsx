import { CheckCircle, XCircle } from "lucide-react";

const CAComparisonSection = () => {
  const withDC = [
    "One conversation to control all your tools",
    "Ask for data in plain English",
    "Save 3+ hours every week on dashboard navigation",
    "Automate across services without code",
    "No UI to learn, no tabs to manage"
  ];

  const withoutDC = [
    "Switch between 10+ dashboards daily",
    "Click through menus to find what you need",
    "Export/import data between tools manually",
    "Learn each platform's interface separately"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-dc-card/30">
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

export default CAComparisonSection;
