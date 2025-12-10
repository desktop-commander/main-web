import { AlertCircle } from "lucide-react";

const CAProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              You're spending more time in dashboards than doing actual work.
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Every tool has its own interface to learn, its own menus to navigate. You spend hours clicking through settings, switching tabs, and copying data between platforms. The tools meant to help you are slowing you down.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CAProblemSection;
