import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-slate-900 text-center px-4">
      <h1 className="text-6xl font-bold text-indigo-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
      <p className="text-slate-400 max-w-sm mb-6">
        We are sorry, the page you requested could not be found.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-md transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
