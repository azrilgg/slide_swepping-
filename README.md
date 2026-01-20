# 🌍 Globe Express

> **The Ultimate Travel Experience** — specific, immersive, and fully interactive.

![Project Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square)

**Globe Express** is a premium travel destination showcase website designed with a "Super God" aesthetic. It features fluid animations, a dynamic carousel, interactive modals, and a rich user interface that provides an immersive experience for potential travelers.

---

## 📖 Table of Contents
- [✨ Key Features](#-key-features)
- [🏗️ Technology Stack](#-technology-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Installation & Setup](#-installation--setup)
- [⚙️ Configuration & Customization](#-configuration--customization)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Key Features

### 🖥️ Immersive User Interface
- **Dynamic Hero Carousel**: A full-screen, touch-enabled slider showcasing top destinations with cinematic transitions.
- **Glassmorphism Design**: Modern, frosted-glass UI elements for modals, forms, and overlays.
- **Infinite Marquee**: A scrolling text loop (running in both directions) displaying top destination names instantly.
- **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile devices with a custom hamburger menu.

### 🎮 Interactive Elements
- **Discovery Modals**:
  - Click "Discover Location" or "Explore" to open detailed information.
  - **Dynamic Data**: Fetches descriptions, facts (price, climate, population), and images from a central data source.
  - **Gallery View**: Each modal features a 3-grid image gallery specific to that location.
- **Video Cinematics**:
  - Integrated YouTube Modal for immersive video playback.
  - Auto-play and stop functionality when closing the modal.
- **Real-Time Search**:
  - Instant filtering for both "Holidays" and "Destinations".
  - Smart autocomplete-like behavior that highlights valid results or alerts on invalid ones.

---

## 🏗️ Technology Stack

This project is built using pure, vanilla web technologies to ensure maximum performance and zero dependency overhead.

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure, SEO-optimized markup. |
| **CSS3** | Advanced styling, Flexbox/Grid layouts, Animations, Glassmorphism effects. |
| **JavaScript (ES6+)** | DOM manipulation, Slider logic, Modal event handling, Data rendering. |
| **Google Fonts** | Typography (Oswald & Poppins) for a modern, clean look. |
| **Phosphor/Feather Icons** | Lightweight SVG icons (inline). |

---

## 📂 Project Structure

```bash
globe-express/
├── index.html          # Main HTML structure
├── style.css           # Global styles, variables, and responsive media queries
├── script.js           # Core logic (Data arrays, Event listeners, Functions)
├── README.md           # Documentation
└── images/             # Local assets (slide-1.jpg, slide-2.jpg, etc.)
```

---

## 🚀 Installation & Setup

Since this is a static site, no build tools or npm installation is required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/globe-express.git
    cd globe-express
    ```

2.  **Open the Project**
    - Simply open `index.html` in your favorite web browser (Chrome, Edge, Firefox).
    - **Recommended**: Use the "Live Server" extension in VS Code for hot-reloading.

---

## ⚙️ Configuration & Customization

All data is managed centrally in `script.js` making it easy to add new destinations or holidays without touching the HTML.

### Adding a New Destination
Locate the `destinationsData` array in `script.js`:

```javascript
/* script.js */
const destinationsData = [
    {
        name: "New Location",
        subtitle: "Country Name",
        desc: "Description of the place...",
        population: "1M",
        climate: "Tropical",
        bestTime: "Jan - Mar",
        video: "https://www.youtube.com/embed/VIDEO_ID",
        images: [
            "image_url_1.jpg",
            "image_url_2.jpg",
            "image_url_3.jpg"
        ]
    },
    // ...
];
```

### Modifying Holiday Packages
Locate the `holidaysData` array in `script.js`:

```javascript
/* script.js */
const holidaysData = [
    {
        name: "Package Name",
        subtitle: "Subtitle",
        desc: "Description...",
        facts: [
            { label: "Price", value: "$1000" },
            // ...
        ],
        images: [...]
    }
];
```

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for cooler animations or better design tweaks:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Riel**
- *Front-End Developer & UI Enthusiast*
- [GitHub Profile](https://github.com/your-username)
- [Live Demo](https://riel-superslide.vercel.app) (Example Link)

---

*Built with ❤️ and Vanilla JS.*
