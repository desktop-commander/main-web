import fs from 'fs';
import path from 'path';

// Test if our static HTML files have the right meta tags
const testStaticHTML = () => {
  const testFile = 'docs/library/prompts/build-a-feature-from-scratch.html';
  
  if (!fs.existsSync(testFile)) {
    console.log('❌ Static HTML file not found:', testFile);
    return false;
  }
  
  const content = fs.readFileSync(testFile, 'utf8');
  
  // Test for key SEO elements
  const tests = [
    {
      name: 'Custom Title',
      test: content.includes('<title>Build A Feature from Scratch - Desktop Commander Prompt Library</title>'),
      expected: true
    },
    {
      name: 'Meta Description',
      test: content.includes('Build a new feature for your app based on your existing codebase'),
      expected: true
    },
    {
      name: 'Canonical URL',
      test: content.includes('rel="canonical" href="https://desktopcommander.app/library/prompts/build-a-feature-from-scratch"'),
      expected: true
    },
    {
      name: 'Open Graph Title',
      test: content.includes('og:title" content="Build A Feature from Scratch - Desktop Commander Prompt Library"'),
      expected: true
    },
    {
      name: 'Structured Data',
      test: content.includes('"@type": "Article"') && content.includes('"headline": "Build A Feature from Scratch"'),
      expected: true
    },
    {
      name: 'React App Still Works',
      test: content.includes('<div id="root"></div>') && content.includes('src="/src/main.tsx"'),
      expected: true
    }
  ];
  
  console.log('🧪 Testing Static HTML Generation');
  console.log('=' .repeat(50));
  
  let passed = 0;
  let failed = 0;
  
  tests.forEach(test => {
    const result = test.test === test.expected;
    const icon = result ? '✅' : '❌';
    const status = result ? 'PASS' : 'FAIL';
    
    console.log(`${icon} ${test.name}: ${status}`);
    
    if (result) {
      passed++;
    } else {
      failed++;
    }
  });
  
  console.log('=' .repeat(50));
  console.log(`📊 Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 All tests passed! Static HTML generation is working correctly.');
    return true;
  } else {
    console.log('⚠️  Some tests failed. Check the implementation.');
    return false;
  }
};

// Test sitemap includes new URLs
const testSitemap = () => {
  const sitemapFile = 'docs/sitemap.xml';
  
  if (!fs.existsSync(sitemapFile)) {
    console.log('❌ Sitemap not found');
    return false;
  }
  
  const content = fs.readFileSync(sitemapFile, 'utf8');
  
  console.log('\n🗺️  Testing Sitemap');
  console.log('=' .repeat(50));
  
  const hasPromptURL = content.includes('<loc>https://desktopcommander.app/library/prompts/build-a-feature-from-scratch</loc>');
  const icon = hasPromptURL ? '✅' : '❌';
  const status = hasPromptURL ? 'PASS' : 'FAIL';
  
  console.log(`${icon} Sitemap includes prompt URLs: ${status}`);
  
  // Count total URLs in sitemap
  const urlCount = (content.match(/<loc>/g) || []).length;
  console.log(`📈 Total URLs in sitemap: ${urlCount}`);
  
  return hasPromptURL;
};

// Count generated files
const countGeneratedFiles = () => {
  const promptsDir = 'docs/library/prompts';
  
  if (!fs.existsSync(promptsDir)) {
    console.log('❌ Prompts directory not found');
    return 0;
  }
  
  const files = fs.readdirSync(promptsDir).filter(f => f.endsWith('.html'));
  
  console.log('\n📁 File Generation Summary');
  console.log('=' .repeat(50));
  console.log(`📄 Generated HTML files: ${files.length}`);
  console.log(`📍 Location: ${promptsDir}`);
  
  return files.length;
};

// Run all tests
console.log('🚀 Running SEO Implementation Tests\n');

const htmlTest = testStaticHTML();
const sitemapTest = testSitemap();
const fileCount = countGeneratedFiles();

console.log('\n' + '=' .repeat(50));
console.log('🏆 OVERALL RESULTS');
console.log('=' .repeat(50));

if (htmlTest && sitemapTest && fileCount > 0) {
  console.log('✅ SUCCESS: Static HTML pre-rendering is working perfectly!');
  console.log('🎯 SEO Impact: Search engines will now see proper meta tags immediately');
  console.log('🚀 Ready for deployment!');
} else {
  console.log('❌ Some issues found. Please review the failed tests above.');
}