import { FaStar, FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";

const JobsList = (props) => {
  const { jobItem } = props;
  const {
    title,
    company_logo_url,
    rating,
    location,
    employment_type,
    package_per_annum,
    job_description,
  } = jobItem;

  return (
    <li className="list-none w-full mb-4">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-slate-500 transition shadow">
        {/* company logo, title and rating */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={company_logo_url}
            alt="job details company logo"
            className="w-12 h-12 object-contain bg-slate-900 rounded-lg p-1"
          />
          <div>
            <h1 className="text-lg font-bold text-white">{title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <FaStar className="text-yellow-400" />
              <span className="text-sm font-semibold text-slate-200">{rating}</span>
            </div>
          </div>
        </div>

        {/* location, employment type and package */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-slate-700 py-3 text-sm text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <FaLocationDot className="text-slate-400" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <BsBriefcaseFill className="text-slate-400" />
              {employment_type}
            </span>
          </div>
          <div className="font-bold text-white text-base">
            {package_per_annum}
          </div>
        </div>

        {/* description */}
        <div className="mt-4">
          <h2 className="text-sm font-bold text-white mb-1">Description</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {job_description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default JobsList;
