import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mx-auto mb-8 w-64 h-64 rounded-md overflow-hidden">
          <img
            src="https://placehold.co/480x360/fff7ed/0f172a?text=404+Car+Illustration"
            alt="404 illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-[96px] md:text-[120px] font-extrabold text-gray-900 leading-none">404</h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-900">Oops! It looks like you've taken a wrong turn.</h2>

        <p className="mt-4 text-sm md:text-base text-gray-500">
          The page you're looking for might have been moved, deleted, or simply never existed. Let's get you back on track.
        </p>

        <Link to="/" className="inline-block mt-8 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
