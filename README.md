# Next.js Project

This is a starter project built with Next.js, React, ShadCN UI components, Tailwind CSS, and Genkit.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js and npm (or yarn) installed on your system. You can download Node.js from [https://nodejs.org/](https://nodejs.org/).

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install dependencies:**
    Open your terminal in the project's root directory and run:
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```
or with yarn:
```bash
yarn dev
```

This command starts the Next.js development server (usually on `http://localhost:9002` or another available port if 9002 is in use). Open your browser and navigate to the provided URL to see the application.

The Genkit development server (for AI flows) can be started separately if needed:
```bash
npm run genkit:dev
```

### Building for Production

To create a production build, run:
```bash
npm run build
```

### Starting the Production Server

After building, you can start the production server with:
```bash
npm run start
```

## Project Structure

Key directories and files:

-   `src/app/`: Contains the core application pages and layouts (using Next.js App Router).
-   `src/components/`: Houses reusable React components, including UI components from ShadCN.
-   `src/ai/`: Contains Genkit AI flows and configurations.
-   `public/`: For static assets like images.
-   `package.json`: Lists project dependencies and scripts.
-   `next.config.ts`: Configuration file for Next.js.
-   `tailwind.config.ts`: Configuration file for Tailwind CSS.
-   `tsconfig.json`: Configuration file for TypeScript.

## Learn More

To learn more about the technologies used in this project, refer to their official documentation:

-   [Next.js Documentation](https://nextjs.org/docs)
-   [React Documentation](https://reactjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [ShadCN UI](https://ui.shadcn.com/)
-   [Genkit Documentation](https://firebase.google.com/docs/genkit)
