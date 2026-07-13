import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // In production, you would send this to an error reporting service
    // Example: sendToErrorReporting(error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-[color:var(--ivory)] px-4">
          <div className="max-w-md w-full text-center">
            <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[color:var(--lavender)] mb-6">
              <AlertTriangle
                className="w-8 h-8 text-[color:var(--plum)]"
                aria-hidden="true"
              />
            </div>

            <h1 className="font-display text-[2rem] text-[color:var(--plum-ink)] mb-3">
              Something went wrong
            </h1>

            <p className="text-[color:var(--ink-soft)] mb-6 leading-relaxed">
              We're sorry for the inconvenience. An unexpected error occurred.
              Please try refreshing the page or return to the home page.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mb-6 text-left p-4 rounded-lg bg-[color:var(--ivory-2)] border border-[color:var(--hairline)]">
                <summary className="cursor-pointer font-semibold text-[color:var(--plum-ink)] mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs overflow-auto text-[color:var(--ink-soft)] whitespace-pre-wrap">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="pill-btn pill-btn--primary"
              >
                <RefreshCw className="w-4 h-4" aria-hidden="true" />
                Try Again
              </button>

              <Link to="/" className="pill-btn pill-btn--ghost">
                <Home className="w-4 h-4" aria-hidden="true" />
                Go Home
              </Link>
            </div>

            <p className="mt-8 text-sm text-[color:var(--ink-soft)]">
              If this problem persists, please{" "}
              <a
                href="mailto:help@achildsperspective.com"
                className="text-[color:var(--plum)] hover:underline"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
