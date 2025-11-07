import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the use cases data
const useCasesPath = path.join(__dirname, 'src/data/library/useCases.json');
const useCasesData = JSON.parse(fs.readFileSync(useCasesPath, 'utf8'));

// Read the jobs data
const jobsPath = path.join(__dirname, 'src/data/jobs.json');
const jobsData = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));

// Extract categories for category pages
const categories = Array.from(new Set(useCasesData.useCases.map(uc => uc.category))).sort();

const generateSitemap = () => {
  const baseUrl = 'https://desktopcommander.app';
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Main Website Pages -->
    <url>
        <loc>${baseUrl}/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${baseUrl}/careers/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <!-- Library Pages -->
    <url>
        <loc>${baseUrl}/library/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${baseUrl}/library/prompts/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
`;

  // Add individual prompt URLs with slugs
  useCasesData.useCases.forEach(useCase => {
    const slug = useCase.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    
    sitemap += `    <url>
        <loc>${baseUrl}/library/prompts/${slug}/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
`;
  });

  // Add job posting URLs for active jobs
  const activeJobs = jobsData.jobs.filter(job => job.isActive);
  activeJobs.forEach(job => {
    sitemap += `    <url>
        <loc>${baseUrl}/careers/jobs/${job.id}/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
`;
  });

  // Close the sitemap
  sitemap += `</urlset>
`;

  return sitemap;
};

// Generate and write the sitemap
const sitemapContent = generateSitemap();
const outputPath = path.join(__dirname, 'docs/sitemap.xml');

// Ensure docs directory exists
if (!fs.existsSync(path.join(__dirname, 'docs'))) {
  fs.mkdirSync(path.join(__dirname, 'docs'), { recursive: true });
}

fs.writeFileSync(outputPath, sitemapContent, 'utf8');

const activeJobsCount = jobsData.jobs.filter(job => job.isActive).length;
console.log(`Sitemap generated with ${useCasesData.useCases.length} individual prompt URLs and ${activeJobsCount} job posting URLs`);
console.log(`Sitemap saved to: ${outputPath}`);
