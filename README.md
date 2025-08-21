# LectureSnap

LectureSnap is a lightweight Chrome extension for capturing screenshots from online videos, annotating them with notes, and exporting the results as a single PDF. It’s built for students and professionals who want to collect and organize important moments from lectures, tutorials, and other video content.

Previously named: FrameTagger

## Key features

- Capture screenshots from HTML5 video players (YouTube-supported).
- Add text notes to each captured frame.
- Draw and annotate captured frames with a simple in-extension canvas tool.
- Store screenshots locally using the Chrome extension storage API.
- Export screenshots and notes to a single PDF using html2canvas + html2pdf.

## Technologies

- Chrome Extension (Manifest V3)
- JavaScript (ES6+), HTML5, CSS3
- Chrome APIs: tabs, runtime messaging, storage (chrome.storage.local)
- html2canvas, html2pdf, jsPDF
- Canvas 2D API, File/Blob APIs, FileReader, Clipboard API

## Installation 

1. Clone the repository:

   ```powershell
   git clone https://github.com/Shresth17/LectureSnap.git
   cd LectureSnap
   ```

2. Load the extension in Chrome (Developer mode):

   - Open `chrome://extensions`
   - Enable "Developer mode"
   - Click "Load unpacked" and choose this project folder

## Usage

1. Open a supported video (YouTube).
2. Click the LectureSnap extension icon to open the popup.
3. Use the capture button (or Ctrl+B) while the video is playing to take a screenshot and add notes.
4. Edit or annotate the captured frame using the in-extension drawing tool (Ctrl+I).
5. From the popup, click the download/export button to generate a PDF of your notes.

## File references

- `manifest.json` — extension manifest (Manifest V3)
- `popup.html`, `popup.js` — UI for the extension popup
- `background.js` — background service worker
- `content2.js` — content script injected into video pages
- `htmltocanvas.js`, `htmltopdf.js` — third-party bundles for html2canvas/html2pdf


