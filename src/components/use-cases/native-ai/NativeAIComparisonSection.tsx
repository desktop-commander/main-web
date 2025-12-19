"use client";

import { CheckCircle, XCircle } from "lucide-react";

const withDC = [
  '"Update the CRM" → AI edits a local database',
  '"Publish the blog post" → AI commits markdown to Git, triggers deploy',
  '"Generate the weekly report" → AI pulls data, formats it, saves to /reports',
  "Every change versioned in Git — reviewable, reversible",
  "Your stack becomes AI-operable",
];

const withoutDC = [
  "Log into HubSpot, navigate to contacts, click through forms",
  "Log into WordPress, paste content, configure settings, hit publish",
  "Export CSVs, open Excel, format manually, email it out",
  "No version history — hope you didn't break anything",
  "AI can answer questions about the work — but can't do the work",
];

const NativeAIComparisonSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            The difference is <span className="text-primary">night and day</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* With DC - Green */}
          <div className="p-8 rounded-2xl bg-green-500/5 border-2 border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-400">With Desktop Commander</h3>
            </div>
            <ul className="space-y-4">
              {withDC.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Without DC - Red */}
          <div className="p-8 rounded-2xl bg-red-500/5 border-2 border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-red-400">Without Desktop Commander</h3>
            </div>
            <ul className="space-y-4">
              {withoutDC.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NativeAIComparisonSection;
