import { Download, Star } from "lucide-react";
import { GITHUB_URL, NPM_URL, STATS } from "./links";

/**
 * Weekly npm downloads and GitHub stars, as shown under hero CTAs.
 * Numbers come from STATS in links.ts, so every hero updates together.
 */
const ITEMS = [
  { href: NPM_URL, icon: Download, value: STATS.weeklyDownloads, label: "weekly npm downloads" },
  { href: GITHUB_URL, icon: Star, value: STATS.githubStars, label: "GitHub stars" },
];

const HeroStats = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center lg:justify-start gap-8 flex-wrap ${className}`}>
    {ITEMS.map(({ href, icon: Icon, value, label }) => (
      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
        <Icon className="h-5 w-5 text-primary" />
        <span className="text-left">
          <span className="block text-xl font-bold text-foreground leading-tight">{value}</span>
          <span className="block text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            {label}
          </span>
        </span>
      </a>
    ))}
  </div>
);

export default HeroStats;
