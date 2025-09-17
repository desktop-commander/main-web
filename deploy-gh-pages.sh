#!/bin/bash

# GitHub Pages Deployment Script for Desktop Commander
# This script ensures clean deployment to the root of gh-pages branch

echo "🚀 Starting GitHub Pages deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Create temporary directory for deployment
echo "📁 Preparing deployment files..."
rm -rf .deploy-tmp
cp -r dist .deploy-tmp
cd .deploy-tmp

# Initialize git and deploy
echo "🌐 Deploying to GitHub Pages..."
git init
git config user.email "deployment@desktop-commander.com"
git config user.name "Desktop Commander Deploy"
git add .
git commit -m "Deploy to gh-pages $(date)"
git branch -M gh-pages
git remote add origin https://github.com/desktop-commander/main-web.git
git push -f origin gh-pages

# Clean up
cd ..
rm -rf .deploy-tmp

echo "✅ Deployment completed!"
echo "🌍 Your site will be available at: https://desktop-commander.github.io/main-web/"
echo "⏱️  Please wait 2-5 minutes for changes to appear due to CDN caching."