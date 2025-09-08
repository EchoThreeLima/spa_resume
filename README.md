# Brandon Lott - Personal Resume Website

A modern, interactive single-page application showcasing my professional background as a Project Manager, Healthcare Professional, U.S.M.C. Veteran, and Family Man.

## 🌟 Features

- **Interactive Design**: Clickable cards with detailed modal pop-ups for each area of expertise
- **Responsive Layout**: Beautiful alternating sections that work on all devices
- **Professional Sections**:
  - Project Management (Strategic Planning, Team Leadership, Process Optimization)
  - Healthcare Professional (Patient Care, Healthcare Administration, Continuous Learning)
  - Military Service (Leadership Under Pressure, Discipline & Honor, Service to Country)
  - Family Values (Work-Life Balance, Core Values, Legacy & Future)
- **Resume Download**: One-click download of traditional resume (PNG format)
- **Contact Integration**: Direct links to GitHub, LinkedIn, and email
- **Modern UI**: Built with Material-UI components and smooth animations

## 🚀 Live Demo

Visit the live website: [Your deployed URL here]

## 🛠️ Built With

- **React 19** - Frontend framework
- **Material-UI (MUI)** - UI component library
- **Vite** - Build tool and development server
- **CSS3** - Custom styling and animations
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
personal-resume/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── brandon_suit.webp
│   │   │   ├── brandon_healthcare.webp
│   │   │   ├── brandon_military.webp
│   │   │   └── brandon_family.webp
│   │   └── png/
│   │       └── brandon_resume.png
│   ├── App.jsx          # Main application component
│   ├── App.css          # Custom styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EchoThreeLima/spa_resume.git
   cd spa_resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎨 Key Components

### Interactive Modals
Each section contains clickable cards that open detailed modals with:
- Professional philosophy and approach
- Key skills and competencies
- Relevant experience highlights
- Skill badges and certifications

### Responsive Design
- **Mobile-first approach** with breakpoints for all screen sizes
- **Alternating layout pattern** (Image Left → Image Right → Image Left → Image Right)
- **Flexible grid system** using Material-UI Grid components

### Resume Download Feature
- Instant download of professional resume in PNG format
- Prominent download button in hero section
- File automatically named "Brandon_Lott_Resume.png"

## 📧 Contact Information

- **Email**: lott.work@gmail.com
- **Location**: Fountain Inn, South Carolina
- **GitHub**: [@EchoThreeLima](https://github.com/EchoThreeLima)
- **LinkedIn**: [brandon-lott-664728108](https://linkedin.com/in/brandon-lott-664728108/)

## 🚀 Deployment

This project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal resume website, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

---

**Built with ❤️ by Brandon Lott**
*Ready to connect and explore opportunities together*