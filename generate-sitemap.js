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
    <!-- Use Cases Landing Pages -->
    <url>
        <loc>${baseUrl}/use-cases/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${baseUrl}/use-cases/file-management/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${baseUrl}/use-cases/knowledge-management/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${baseUrl}/use-cases/build-prototype/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <!-- Blog Pages -->
    <url>
        <loc>${baseUrl}/blog/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/about/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/contact/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
    <!-- Blog Posts -->
    <url>
        <loc>${baseUrl}/blog/2026/01/07/build-a-personal-ai-knowledge-base-with-local-files/</loc>
        <lastmod>2026-01-07</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2026/01/06/convert-heic-to-jpg-locally-with-desktop-commander/</loc>
        <lastmod>2026-01-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2025/12/30/automate-docker-workflows-with-ai/</loc>
        <lastmod>2025-12-30</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2025/12/08/markdown-best-practices-technical-documentation/</loc>
        <lastmod>2025-12-08</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2025/12/04/ai-code-review-with-desktop-commander-a-practical-guide/</loc>
        <lastmod>2025-12-04</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2025/11/28/how-to-read-and-process-csv-files-in-python-complete-guide/</loc>
        <lastmod>2025-11-28</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2025/11/25/best-mcp-servers/</loc>
        <lastmod>2025-11-25</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2025/10/28/what-is-an-mcp-server-and-how-it-works-in-plain-english/</loc>
        <lastmod>2025-10-28</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blog/2025/10/22/how-to-set-up-local-development-environment-with-ease/</loc>
        <lastmod>2025-10-22</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
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
