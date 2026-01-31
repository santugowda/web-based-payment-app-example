#!/bin/bash

# Quick deployment script for GitHub Pages
# Usage: ./deploy-github.sh YOUR_USERNAME YOUR_REPO_NAME

if [ "$#" -ne 2 ]; then
    echo "Usage: ./deploy-github.sh YOUR_USERNAME YOUR_REPO_NAME"
    echo "Example: ./deploy-github.sh john-doe bobbucks-payment-test"
    exit 1
fi

USERNAME=$1
REPO=$2
REPO_URL="https://github.com/$USERNAME/$REPO.git"

echo "🚀 Deploying to GitHub Pages..."
echo "Repository: $REPO_URL"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Creating commit..."
git commit -m "Deploy BobBucks payment app with custom fingerprint"

# Add remote
echo "🔗 Adding remote..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

# Push
echo "⬆️  Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to: https://github.com/$USERNAME/$REPO/settings/pages"
echo "2. Under 'Build and deployment':"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Folder: /public"
echo "3. Click 'Save'"
echo ""
echo "⏱️  Wait 1-2 minutes for deployment"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://$USERNAME.github.io/$REPO/"
echo ""
echo "📄 Payment manifest will be at:"
echo "   https://$USERNAME.github.io/$REPO/pay/manifest.json"
