# Program Track - GitHub Pages Deployment

## Quick Setup Instructions

### 1. Create GitHub Repository
1. Go to github.com and log in
2. Click the **+** icon → **New repository**
3. Repository name: `program-track`
4. Make it **Public**
5. Check "Add a README file"
6. Click **Create repository**

### 2. Upload Files
1. In your new repository, click **Add file** → **Upload files**
2. Drag ALL these files into the upload area:
   - `index.html`
   - `app.js`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Click **Commit changes**

### 3. Enable GitHub Pages
1. Go to **Settings** (tab at top)
2. Scroll to **Pages** (left sidebar)
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes

### 4. Access Your App
Your app will be live at:
```
https://YOUR-USERNAME.github.io/program-track/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 5. Add to Home Screen (iPhone)
1. Open the URL in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap **Add to Home Screen**
4. Name it "Program Track"
5. Tap **Add**

### 5. Add to Home Screen (Android)
1. Open the URL in Chrome
2. Tap the three dots menu
3. Tap **Add to Home screen**
4. Name it and tap **Add**

## Features
- ✅ Works offline (after first load)
- ✅ Installs like a native app
- ✅ All data stored locally in your browser
- ✅ Free hosting forever
- ✅ Access from any device at the same URL

## Updating
To update the app later:
1. Edit files locally
2. Go to your GitHub repository
3. Click on the file you want to update
4. Click the pencil icon (Edit)
5. Paste new code
6. Click **Commit changes**
7. Changes go live in 1-2 minutes

## Files Included
- `index.html` - Main app interface
- `app.js` - All workout tracking logic
- `manifest.json` - PWA configuration
- `sw.js` - Offline support
- `icon-192.png` - Home screen icon (small)
- `icon-512.png` - Home screen icon (large)
- `README.md` - This file

## Notes
- Your workout data is stored in your browser's local storage
- Data persists between sessions
- Data is NOT synced between devices
- To backup data, use browser export tools or manually record it
