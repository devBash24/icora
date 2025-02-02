# Icora - Icon Management System

Icora is a modern web application for managing and using icons from various popular icon libraries. Built with Next.js and TypeScript, it provides a seamless interface for browsing, searching, and implementing icons in your projects. Idea can to me as good idea for a side project.

## Features

- 🎨 Support for 20+ popular icon libraries including:
  - Font Awesome
  - Ant Design Icons
  - Bootstrap Icons
  - Material Design Icons
  - And many more!
- 🔍 Real-time icon search and filtering
- 📋 One-click copy functionality for import statements
- 🖼️ Icon preview with multiple display options
- 💻 Code view with syntax highlighting
- ⚡ Virtual scrolling for optimal performance
- 🎯 Responsive design that works on all devices

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Headless UI Components
- [React Query](https://tanstack.com/query/latest) - Data 
- [React Virtuoso](https://virtuoso.dev/) - Virtual Scrolling

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/devBash24/icora-web
cd icora
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/         
│   ├── icons/          # Icon-related components
│   ├── layout/         # Layout components
│   └── ui/             # Reusable UI components
├── data/               # Static data and types
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── context/            # React context providers
```

## Usage
1. Initialize Icora in your project:
```bash
npx icora@latest init
```

3. Add icons to your project:
```bash
npx icora@latest add ai-AiFillDelete
```

4. Import and use in your components:
```typescript
import { AiFillDelete } from "@/assets/icons/ai/ai"
```

## API Reference

The application uses a REST API to fetch icon data. 
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
