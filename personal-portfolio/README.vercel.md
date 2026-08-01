Quick Vercel deployment instructions

1. Push the repository (or branch) to GitHub.
2. In Vercel, click "New Project" → "Import Git Repository" and select this repo.
3. In the project settings, set the Root Directory to: personal-portfolio
4. Framework Preset: Other
5. Build Command: npm run build
6. Output Directory: dist
7. Environment variables: none required for static build. If you use Formspree, no secret is required; Formspree handles forwarding in their dashboard.
8. Deploy. Vercel will run the build and serve the site.

Optional: After deployment, enable Automatic Deploys on pushes to the default branch or enable Preview Deploys for PRs.