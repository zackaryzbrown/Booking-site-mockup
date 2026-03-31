import { Link } from "react-router";
import { Button } from "../ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#DDF0FF] to-white">
      <div className="text-center px-4">
        <h1 className="text-6xl sm:text-8xl mb-4 text-[#5D17EA]">404</h1>
        <h2 className="text-2xl sm:text-3xl mb-4 text-[#111813]">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button size="lg" asChild>
          <Link to="/" className="flex items-center justify-center gap-2">
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
