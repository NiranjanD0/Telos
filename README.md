# Telos

A sleek, developer-focused Chrome New Tab extension featuring a clean terminal aesthetic, dynamic themes, and a zero-distraction productivity setup.

## ✨ Features

- **Terminal Aesthetic**: Minimalist, monospace-driven design tailored for developers.
- **Customizable Themes**: Multiple curated dark mode themes dynamically swap CSS variables (Ash, Midnight, Abyss, Forest, Plum, Ember, Slate, Ocean).
- **Productivity Panels**:
  - `$ todo --list`: A quick to-do list for managing tasks.
  - `~/shortcuts`: Draggable shortcut links to your favorite sites.
  - `// sticky-notes`: A simple, persistent scratchpad for quick notes.
- **Customization**: Personalize your tab name directly in the settings.
- **Modern Styling**: Fully styled with Tailwind CSS for rapid UI iteration.
- **Offline Ready**: No external dependencies or remote telemetry.

---

## 🚀 Installation (Chrome Web Store)

You can install the official, stable version of Telos directly from the Chrome Web Store:
[**Add Telos to Chrome**](https://chromewebstore.google.com/detail/telos/dlddlcfpmhfoddfapagfpglkconkhbdg)

---

## 💻 Local Development

Telos is built with **HTML, vanilla JavaScript, and Tailwind CSS**. If you'd like to build the extension from source or contribute to the UI:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NiranjanD0/Telos.git
   cd Telos
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development watcher:**
   This command continuously watches your HTML and CSS for changes and recompiles the Tailwind output (`style.css`).
   ```bash
   npm run watch
   ```

4. **Load the Unpacked Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **Developer mode** in the top right corner.
   - Click **Load unpacked** and select your `Telos` directory.
   - Open a new tab to see your local version of Telos!

---

## 📦 Building & Publishing

When you are ready to package the extension for the Chrome Web Store, use the build command:

```bash
npm run build
```

**What this does:**
1. Compiles a fresh, minified version of your Tailwind CSS into `style.css`.
2. Creates an `out/` directory.
3. Packages all necessary runtime files (`manifest.json`, `newtab.html`, `script.js`, `style.css`, and `icons/`) into a clean versioned zip archive: `out/telos-v<version>.zip`.

You can upload `out/telos-v<version>.zip` directly to the Chrome Web Store Developer Dashboard. (Note: Build files like `node_modules` and raw Tailwind inputs are automatically excluded to keep the extension small and fast).

---

## ⚙️ Settings & Configuration

Click the settings icon in the top right corner of the new tab page to:
- Change the tab name.
- Select your background theme.
- Toggle individual productivity panels on or off.
- The `script.js` securely handles all user preferences and states locally using Chrome's `chrome.storage.local` API.
