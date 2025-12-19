"use client";

import { AlertCircle } from "lucide-react";

const NativeAIProblemSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="bg-gradient-to-br from-dc-card to-dc-surface rounded-2xl border border-dc-border p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 shrink-0">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              The software that made you productive is now making AI useless
            </h2>
          </div>
          <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
            <p>
              Every CRM, CMS, and project tool was built with the same assumption: non-technical people need simplified interfaces to work with software. That assumption created a $500B SaaS industry.
            </p>
            <p>
              It also created a massive problem. AI agents can write code, analyze data, and automate workflows — but they can't click through your HubSpot dashboard. They can't navigate your WordPress admin panel. They can't see the tribal knowledge buried in your Notion workspace.
            </p>
            <p className="text-foreground font-medium">
              The tools designed to help you now block the most powerful assistant you've ever had.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NativeAIProblemSection;
