# LectureSnap 📚

A Chrome extension that transforms your YouTube learning experience by enabling you to take timestamped screenshots and notes while watching educational videos, with the ability to export everything as beautifully formatted PDFs.

## 🌟 Features

- **📸 Timestamped Screenshots**: Capture video frames with automatic timestamps
- **🎨 Drawing Tools**: Annotate screenshots with customizable colors and brush sizes
- **📝 Note-Taking**: Add text notes to your captured screenshots
- **📄 PDF Export**: Generate beautiful PDFs with clickable timestamps
- **📚 Playlist Support**: Export entire YouTube playlists as one comprehensive PDF
- **💾 Local Storage**: All data stored locally on your device
- **⌨️ Keyboard Shortcuts**: 
  - `Ctrl+B` - Quick screenshot
  - `Ctrl+I` - Drawing mode
  - `Ctrl+Enter` - Save note
- **🎯 YouTube Integration**: Seamless integration with YouTube's video player

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Chrome browser

### Setup & Build

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shresth17/LectureSnap.git
   cd LectureSnap
   ```

2. **Install dependencies**
   ```bash
   cd source
   npm install
   ```

3. **Configure environment (Optional)**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env and add your YouTube API key (optional - has fallback)
   # Get your API key from: https://console.cloud.google.com/apis/credentials
   ```

4. **Build the extension**
   ```bash
   # From project root
   npm run build
   
   # OR from source directory
   cd source
   npm run build
   ```
   
   This creates:
   - `index.html` in root
   - `/static` folder with bundled JS/CSS

5. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `LectureSnap` project folder
   - The extension icon should appear in your toolbar

## 💡 How to Use

### Taking Screenshots
1. Navigate to any YouTube video
2. Click the 📝 capture button in the video controls (or press `Ctrl+B`)
3. A note popup appears - add your text and press `Ctrl+Enter` to save
4. Screenshot is automatically saved with timestamp

### Drawing Annotations
1. Press `Ctrl+I` to enter drawing mode
2. Choose color and brush size from the toolbar
3. Draw on the video frame
4. Click the ✅ save button to capture

### Viewing & Exporting PDFs
1. Click the LectureSnap extension icon
2. View your screenshots in the popup
3. Click the download icon to export as PDF
4. For playlists, switch to "List View" to export all videos together

## 🛠️ Technical Stack

- **Frontend**: React 18.3.1 with Vite 5.4.10
- **PDF Generation**: @react-pdf/renderer 4.1.6
- **HTTP Client**: Axios 1.7.7 (YouTube API integration)
- **Extension**: Chrome Manifest V3
- **Canvas API**: Screenshot capture and drawing
- **Storage**: Chrome Storage API (local)
- **Font**: Oswald (custom font in PDFs)

## 📁 Project Structure

```
LectureSnap/
├── manifest.json           # Chrome extension manifest (v3)
├── background.js           # Service worker (tab listener)
├── updateContent.js        # Content script (YouTube integration)
├── package.json            # Root build scripts
├── .gitignore             # Git ignore (excludes build output)
│
├── Oswald/                # Custom fonts for PDF
│   └── static/            # Multiple font weights
│
└── source/                # React source code
    ├── .env               # Environment variables (gitignored)
    ├── .env.example       # Environment template
    ├── package.json       # Dependencies
    ├── vite.config.js     # Vite build config
    ├── index.html         # HTML template
    │
    └── src/
        ├── main.jsx       # React entry point
        ├── popup/
        │   ├── App.jsx                # Main app component
        │   └── components/
        │       ├── Sidebar.jsx        # Navigation sidebar
        │       └── StartingScreen.jsx # Landing screen
        └── styles/
            └── index.css  # Global styles

Generated on build:
├── index.html             # Built popup HTML
└── static/                # Bundled assets
    ├── js/                # JavaScript bundles
    ├── css/               # Stylesheets
    └── media/             # Images, fonts
```

## 🔧 Development

### Development Workflow

**For Content Scripts** (`background.js`, `updateContent.js`):
```bash
# Edit the file
# Reload extension in Chrome - that's it!
# ✅ No build required
```

**For Popup UI** (React in `/source/src`):
```bash
# 1. Edit files in /source/src
# 2. Build
npm run build  # from root
# 3. Reload extension in Chrome
```

### Build Process

The Vite build outputs to the project root:
- `index.html` → Root directory
- JavaScript/CSS → `/static` folder
- Assets → `/static/media`

**Important**: Don't manually edit `index.html` or `/static` - they're auto-generated and in `.gitignore`

### Environment Variables

Create `/source/.env`:
```env
VITE_YOUTUBE_API_KEY=your_api_key_here
```

Used for fetching playlist information. Falls back to embedded key if not set.

## 🧪 Testing

1. Build: `npm run build`
2. Load extension in Chrome
3. Visit YouTube and test features
4. Check console for errors (F12)

### Common Issues

**Build fails?**
- Check Node.js version: `node --version` (need v14+)
- Install dependencies: `cd source && npm install`
- Clear build: `rm -rf static index.html` then rebuild

**Extension not loading?**
- Ensure `npm run build` completed successfully
- Check `manifest.json` is in root
- Look for errors in `chrome://extensions/`

**Fonts not showing in PDF?**
- Verify `/Oswald/static/*.ttf` files exist
- Check `web_accessible_resources` in manifest.json
- Inspect browser console for font loading errors

**Screenshots not saving?**
- Check Chrome storage: `chrome://extensions/` → LectureSnap → Inspect views → Application tab
- Verify storage permissions in manifest

## 🔒 Privacy & Security

### Permissions
- **activeTab**: Interact with current YouTube tab
- **storage**: Save screenshots/notes locally
- **unlimitedStorage**: Handle large screenshot collections

### Data Storage
✅ **100% Local** - All screenshots and notes stay on your device  
✅ **No Cloud Sync** - Nothing is sent to external servers  
✅ **No Tracking** - We don't collect any user data

### API Usage
The YouTube API key is only used to fetch **public** playlist metadata for PDF organization. It's optional and has a fallback.

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to your branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### Contribution Guidelines
- Follow existing code style
- Test thoroughly before submitting
- Update README if adding features
- Keep commits focused and descriptive

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Oswald font by Vernon Adams
- @react-pdf/renderer for PDF generation
- Chrome Extensions team for excellent documentation

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Shresth17/LectureSnap/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Shresth17/LectureSnap/discussions)

---

**Made with ❤️ by [Shresth17](https://github.com/Shresth17)**

**LectureSnap** - Making learning more organized with visual notes! 🎓