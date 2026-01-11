#!/bin/zsh

# Default commit message if none provided
msg="${1:-Site Update via Auto-Deploy Script}"

echo "🚀 Starting deployment..."

# Add all changes
git add .

# Commit
git commit -m "$msg"

# Push
git push

echo "✅ Successfully pushed to GitHub! Netlify should be building now."
