# LectureSnap 📚

A Chrome extension that transforms your YouTube learning experience by enabling you to take timestamped notes while watching educational videos and export them as beautifully formatted PDFs.

## 🌟 Features

- **Timestamped Note-Taking**: Capture notes with automatic timestamps while watching YouTube videos
- **PDF Export**: Convert your notes into professional PDF documents with embedded video thumbnails
- **Clean Interface**: Intuitive sidebar design that doesn't interfere with your viewing experience
- **Bookmark Integration**: Generate PDF bookmarks for easy navigation through your notes
- **Responsive Design**: Works seamlessly across different screen sizes
- **Educational Focus**: Specifically designed for learning and educational content

## 🚀 Installation

### From Source Code
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/lecturesnap.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle switch in top right)

4. Click "Load unpacked" and select the project folder

5. The LectureSnap extension should now appear in your extensions list

## 💡 How to Use

1. **Navigate to YouTube**: Visit any YouTube video you want to take notes on

2. **Open LectureSnap**: Click the extension icon in your Chrome toolbar

3. **Take Notes**: 
   - Use the clean interface to write your notes
   - Notes are automatically timestamped based on video playback
   - Add multiple notes throughout the video

4. **Export to PDF**:
   - Click the download button when you're ready
   - Your notes will be compiled into a professional PDF
   - Includes video thumbnails and timestamps for reference

## 🛠️ Technical Stack

- **Frontend**: React.js with modern JavaScript (ES6+)
- **Styling**: CSS3 with Flexbox/Grid layouts
- **Extension APIs**: Chrome Extension Manifest V3
- **PDF Generation**: React-PDF library
- **Build Tools**: Webpack, Babel
- **Font**: Oswald (Google Fonts)

## 📁 Project Structure

```
lecturesnap/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for extension
├── content.js            # Content script for YouTube integration
├── updateContent.js      # Content script updates
├── index.html           # Extension popup HTML
├── contentcss.css       # Styling for content scripts
├── icon.png            # Extension icon
├── static/             # Built assets
│   ├── css/           # Compiled CSS
│   ├── js/            # Compiled JavaScript
│   └── media/         # Fonts and images
└── Oswald/            # Font files
```

## 🔧 Development

### Prerequisites
- Node.js (v14 or higher)
- Chrome browser
- Basic knowledge of JavaScript/React

### Development Setup
1. Install dependencies (if you want to modify the source):
   ```bash
   npm install
   ```

2. Make your changes to the source files

3. Build the project:
   ```bash
   npm run build
   ```

4. Load the updated extension in Chrome using developer mode

## 🎯 Use Cases

- **Students**: Take organized notes during online lectures
- **Researchers**: Document important points from educational videos
- **Professionals**: Create study materials from training videos
- **Content Creators**: Analyze and document educational content

## 🔒 Privacy & Permissions

LectureSnap requires minimal permissions:
- `activeTab`: To interact with the current YouTube tab
- `storage`: To save your notes locally
- `unlimitedStorage`: To handle larger note collections

**Privacy Commitment**: All your notes are stored locally on your device. No data is transmitted to external servers.

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome! If you find any bugs or have feature requests, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🏆 Project Highlights

- **Clean Architecture**: Well-structured codebase following modern React patterns
- **User-Centered Design**: Intuitive interface designed with user experience in mind
- **Performance Optimized**: Lightweight extension that doesn't slow down YouTube
- **Cross-Browser Ready**: Built with standards that work across modern browsers
- **Responsive Design**: Adapts to different screen sizes and resolutions

## 📧 Contact

For questions about this project, feel free to reach out through GitHub issues or connect with me on LinkedIn.

---

**LectureSnap** - Making learning more organized, one note at a time! 🎓