import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the use cases data
const useCasesPath = path.join(__dirname, 'src/data/library/useCases.json');
const useCasesData = JSON.parse(fs.readFileSync(useCasesPath, 'utf8'));

// Read the base index.html template
const indexPath = path.join(__dirname, 'index.html');
const baseTemplate = fs.readFileSync(indexPath, 'utf8');

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

const generateMetaHTML = (useCase) => {
  const baseUrl = 'https://desktopcommander.app';
  const slug = generateSlug(useCase.title);
  const pageUrl = `${baseUrl}/library/prompts/${slug}`;
  
  // Create enhanced meta description
  const metaDescription = useCase.description.length > 155 
    ? useCase.description.substring(0, 152) + '...'
    : useCase.description;
  
  // Generate categories text for richer descriptions
  const categoriesText = useCase.categories && useCase.categories.length > 0 
    ? ` Perfect for ${useCase.categories.join(', ')} workflows.`
    : '';
  
  const enhancedDescription = `${metaDescription}${categoriesText}`.substring(0, 155);
  
  // Create title with branding
  const pageTitle = `${useCase.title} - Desktop Commander Prompt Library`;
  
  // Replace the meta tags in the template
  let html = baseTemplate;
  
  // Replace title
  html = html.replace(
    /<title>.*<\/title>/,
    `<title>${pageTitle}</title>`
  );
  
  // Replace general description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${enhancedDescription}"`
  );
  
  // Replace Open Graph tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${pageTitle}"`
  );
  
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${enhancedDescription}"`
  );
  
  // Add canonical URL
  html = html.replace(
    /<meta property="og:type"/,
    `<link rel="canonical" href="${pageUrl}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:type"`
  );
  
  // Add structured data for the prompt
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": useCase.title,
    "description": useCase.description,
    "author": {
      "@type": "Organization",
      "name": "Desktop Commander"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Desktop Commander",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon-32x32.png`
      }
    },
    "datePublished": useCase.dateAdded || "2025-01-01",
    "dateModified": useCase.dateAdded || "2025-01-01",
    "url": pageUrl,
    "keywords": useCase.categories ? useCase.categories.join(', ') : '',
    "articleSection": "Developer Tools",
    "inLanguage": "en-US"
  };
  
  // Add the structured data script before closing head
  html = html.replace(
    /<\/head>/,
    `    <script type="application/ld+json">
${JSON.stringify(structuredData, null, 2)}
    </script>
</head>`
  );
  
  return html;
};

const generateMetaPages = () => {
  // Generate to public directory so Vite includes them in build
  const outputDir = path.join(__dirname, 'public');
  const libraryDir = path.join(outputDir, 'library');
  const promptsDir = path.join(libraryDir, 'prompts');
  
  // Ensure directories exist
  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(libraryDir, { recursive: true });
  fs.mkdirSync(promptsDir, { recursive: true });
  
  let generatedCount = 0;
  
  // Generate a page for each use case
  useCasesData.useCases.forEach(useCase => {
    const slug = generateSlug(useCase.title);
    const html = generateMetaHTML(useCase);
    const outputPath = path.join(promptsDir, `${slug}.html`);
    
    fs.writeFileSync(outputPath, html, 'utf8');
    generatedCount++;
  });
  
  console.log(`✅ Generated ${generatedCount} meta-optimized HTML files`);
  console.log(`📁 Output directory: ${promptsDir}`);
  
  return generatedCount;
};

// Run the generator
try {
  const count = generateMetaPages();
  console.log(`🎯 Meta page generation completed successfully!`);
} catch (error) {
  console.error('❌ Error generating meta pages:', error);
  process.exit(1);
}