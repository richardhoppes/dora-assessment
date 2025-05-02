# DORA Assessment Quiz

A simple React app to assess your organization on the four DORA metrics:
- Deployment Frequency
- Lead Time for Changes
- Change Failure Rate
- Mean Time to Restore

## Local Setup (mac/linux)

1. **Clone or create the folder**  
   ```bash
   mkdir dora-assessment && cd dora-assessment
   ```

2. **Initialize & install**  
   ```bash
   npm init -y
   npm install react react-dom react-router-dom tailwindcss
   npm install --save-dev react-scripts
   ```

3. **Create files** as in `src/…` directories.

4. **Initialize Tailwind**  
   ```bash
   npx tailwindcss init
   ```
   Then add to `src/styles/tailwind.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Start the dev server**  
   ```bash
   npm run start
   ```

6. **Build for production**  
   ```bash
   npm run build
   ```

Enjoy assessing your DevOps performance with DORA metrics!
