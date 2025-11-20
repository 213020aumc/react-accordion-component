# React Accordion Component

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-4.0.10-6E9F18?logo=vitest)](https://vitest.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

A modern, interactive accordion component built with React and TypeScript. Expand and collapse FAQ items and content sections with smooth animations and a clean user interface.

## ✨ Features

- ✨ Interactive expand/collapse functionality
- 🎨 Modern UI with Tailwind CSS styling
- 📱 Responsive design
- ♿ Semantic HTML structure
- 🧪 Fully tested with Vitest and React Testing Library
- 🎯 TypeScript support for type safety
- 🎭 Multiple content types support (text, lists, rich content)
- 🔄 State management with React hooks
- 💚 Green theme accent color

## 📸 Screenshot

![Accordion Component](./screenshot.png)

_Screenshot showing the accordion component with one FAQ item expanded and displaying content_

## 🛠️ Tools and Technologies

### Frontend Framework

- **React 19** - UI library for building interactive components
- **TypeScript 5.9** - Typed JavaScript for better code quality

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development

### Build Tools

- **Vite 7** - Next-generation frontend build tool with HMR
- **Vitest 4** - Unit testing framework compatible with Vite

### Testing

- **Vitest** - Fast unit test framework
- **React Testing Library** - Testing utilities for React components
- **@testing-library/jest-dom** - Custom matchers for DOM assertions

### Development

- **ESLint** - JavaScript/TypeScript linter
- **Tailwind CSS with Vite** - Optimized Tailwind integration

## 📦 Installation

```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

## 🧪 Testing

Run tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Open test UI:

```bash
npm run test:ui
```

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx              # Main App component with Accordion
├── index.css            # Global styles with Tailwind components
├── App.test.tsx         # App component tests
├── main.tsx             # Application entry point
├── setup.ts             # Test setup file
├── components/
│   └── Accordion.test.tsx  # Accordion component tests
└── assets/              # Static assets
```

## 💻 Component Usage

```tsx
import App from "./App";

function MyApp() {
  return <App />;
}

export default MyApp;
```

## 🎯 Component Features

### Accordion Component

- Displays a list of FAQs with title and expandable content
- Click any item to expand/collapse
- Visual feedback with green highlight (#087f5b) for open items
- Number indicator for each accordion item
- Plus/minus icon to indicate expand/collapse state
- Supports rich content including lists and text
- Only one item open at a time (controlled state)

### AccordionItem Component

- Individual expandable item with title and content
- Receives callback functions for state management
- Dynamic styling based on open/close state
- Smooth transitions and visual feedback

## 🎨 Styling

The component uses Tailwind CSS utility classes with custom components layer:

```css
.accordion        /* Container with grid layout */
/* Container with grid layout */
.item            /* Individual accordion item */
.item.open       /* Open state styling */
.number          /* Item number indicator */
.title           /* Item title */
.icon            /* Expand/collapse icon */
.content-box; /* Content area with list support */
```

**Color Scheme:**

- Primary: Green (#087f5b)
- Secondary: Gray (#343a40)
- Accent: Light Gray (#ced4da)

## 📜 Available Scripts

| Script               | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm run test`       | Run all tests            |
| `npm run test:watch` | Run tests in watch mode  |
| `npm run test:ui`    | Open Vitest UI dashboard |
| `npm run lint`       | Run ESLint               |
| `npm run preview`    | Preview production build |

## 📊 Example Data Structure

```typescript
interface FAQ {
  title: string;
  text: string;
}

const faqs: FAQ[] = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur...",
  },
  // ...more items
];
```

## 🔧 Component Props

### `AccordionProps`

```typescript
interface AccordionProps {
  data: FAQ[];
}
```

### `AccordionItemProps`

```typescript
interface AccordionItemProps {
  num: number;
  title: string;
  children: React.ReactNode;
  curOpen: number | null;
  onOpen: (num: number | null) => void;
}
```

## 📄 License

MIT © 2025 Muhammad Fraz

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Open an issue for bugs or feature requests
- Submit a pull request with improvements
- Add more test cases
- Improve documentation

## 👤 Author

**Muhammad Fraz**

- 🔗 **GitHub**: [@213020aumc](https://github.com/213020aumc)
- 💼 **LinkedIn**: [Muhammad Fraz](https://www.linkedin.com/in/muhammad-fraz-298900247/)

---

Made with ❤️ by Muhammad Fraz
