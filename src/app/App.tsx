import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./components/ThemeProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="system" storageKey="acp-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
