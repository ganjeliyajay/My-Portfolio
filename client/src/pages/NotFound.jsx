// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // optional, for nice icon
import { StarBackground } from "../components/StarBackground";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <StarBackground/>
      <h1 className="text-9xl font-extrabold text-red-500 mb-4 animate-pulse">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">Oops! Page Not Found 😢</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full transition duration-300"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>
    </div>
  );
};
