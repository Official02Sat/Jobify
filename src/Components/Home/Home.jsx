import { Link } from "react-router-dom";
import JobImg from "../../assets/jobify.webp";

const Home = () => {
  return (
    <div className="h-[calc(100vh-5rem)] w-full overflow-hidden bg-slate-900 flex items-center px-6 md:px-16">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 h-full py-6">
        {/* left content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Find The Job That Fits <br />
            <span className="text-indigo-400">Your Life</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-lg mt-5 leading-relaxed">
            Millions of people are searching jobs, salary information, company
            reviews. Find the job that fits your abilities and potential.
          </p>

          <Link to="/jobs" className="mt-8">
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 text-lg rounded-md transition shadow-md"
            >
              Find Jobs
            </button>
          </Link>
        </div>

        {/* right image */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-full max-h-[70vh]">
          <img
            src={JobImg}
            alt="job search"
            className="w-auto h-full max-h-[calc(100vh-14rem)] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
