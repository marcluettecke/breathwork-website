# Manuela Cosic - Yoga & Atemtherapie Website

A modern, responsive website for Manuela Cosic's Yoga and Breathwork therapy practice in Cologne and Pulheim, Germany.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Stack**: Built with React, TypeScript, and Vite for optimal performance
- **Smooth Animations**: Scroll-triggered animations for enhanced user experience
- **Contact Form**: Functional contact form with newsletter subscription
- **Multi-page Navigation**: Clean routing with React Router v6
- **SCSS Styling**: Organized styles with SCSS for maintainability

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS with custom styles
- **Routing**: React Router v6
- **UI Components**: Custom component library
- **Font**: Urbanist from Google Fonts

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[username]/breathwork-website.git
cd breathwork-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
breathwork-website/
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # UI components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── ...
│   ├── pages/            # Page components
│   ├── models/           # TypeScript interfaces
│   ├── styles/           # SCSS files
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   │   └── main.scss
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Static assets
│   └── App.tsx           # Main app component
├── public/               # Public assets
└── package.json         # Project dependencies
```

## 🎨 Customization

### Colors

The main color palette is defined in `src/styles/variables.scss`:
- Primary: `#547183` (Blue-gray)
- Secondary: `#F4F1ED` (Light beige)
- White: `#ffffff`
- Black: `#000000`

### Typography

The site uses the Urbanist font family. You can change the font in `src/index.css`.

## 📧 Contact Form

The contact form stores submissions in localStorage for demo purposes. To integrate with a real email service, you can:

1. Use EmailJS
2. Use Formspree
3. Connect to your own backend API

Update the form submission handler in `src/components/ContactForm.tsx`.

## 🌐 Deployment

The site can be deployed to various platforms:

- **Netlify**: Drop the `dist` folder after building
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` branch

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the owner for contribution guidelines.

---

Developed with ❤️ for Manuela Cosic