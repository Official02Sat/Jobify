import { FiUser } from "react-icons/fi";

// employment types
const employmentTypesList = [
  { label: "Full Time", employmentTypeId: "FULLTIME" },
  { label: "Part Time", employmentTypeId: "PARTTIME" },
  { label: "Freelance", employmentTypeId: "FREELANCE" },
  { label: "Internship", employmentTypeId: "INTERNSHIP" },
];

// salary ranges
const salaryRangesList = [
  { salaryRangeId: "1000000", label: "10 LPA and above" },
  { salaryRangeId: "2000000", label: "20 LPA and above" },
  { salaryRangeId: "3000000", label: "30 LPA and above" },
  { salaryRangeId: "4000000", label: "40 LPA and above" },
];

const FilterSection = (props) => {
  const {
    profileDetails,
    selectedEmploymentTypes,
    onChangeEmploymentType,
    selectedSalaryRange,
    onChangeSalaryRange,
  } = props;

  const { name, profile_image_url, short_bio } = profileDetails;

  return (
    <div className="w-full space-y-6">
      {/* profile card */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center shadow">
        <div className="flex justify-center mb-3">
          {profile_image_url ? (
            <img
              src={profile_image_url}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
              <FiUser size={28} />
            </div>
          )}
        </div>
        <h1 className="text-lg font-bold text-white">{name || "Rahul Attluri"}</h1>
        <p className="text-xs text-slate-400 mt-1">
          {short_bio || "Lead Software Developer and AI-ML expert"}
        </p>
      </div>

      {/* filters container */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow space-y-6">
        <h2 className="text-base font-semibold text-white border-b border-slate-700 pb-2">
          Filters
        </h2>

        {/* employment type */}
        <div>
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            Type of Employment
          </h3>
          <ul className="space-y-3">
            {employmentTypesList.map((each) => (
              <li key={each.employmentTypeId} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={each.employmentTypeId}
                  value={each.employmentTypeId}
                  checked={selectedEmploymentTypes.includes(each.employmentTypeId)}
                  onChange={() => onChangeEmploymentType(each.employmentTypeId)}
                  className="w-4 h-4 rounded text-indigo-600 bg-slate-900 border-slate-700 cursor-pointer accent-indigo-600"
                />
                <label
                  htmlFor={each.employmentTypeId}
                  className="text-sm text-slate-300 hover:text-white cursor-pointer select-none"
                >
                  {each.label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-slate-700 pt-4">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
            Salary Range
          </h3>
          <ul className="space-y-3">
            {salaryRangesList.map((each) => (
              <li key={each.salaryRangeId} className="flex items-center gap-3">
                <input
                  type="radio"
                  id={each.salaryRangeId}
                  name="salary"
                  value={each.salaryRangeId}
                  checked={selectedSalaryRange === each.salaryRangeId}
                  onChange={() => onChangeSalaryRange(each.salaryRangeId)}
                  className="w-4 h-4 text-indigo-600 bg-slate-900 border-slate-700 cursor-pointer accent-indigo-600"
                />
                <label
                  htmlFor={each.salaryRangeId}
                  className="text-sm text-slate-300 hover:text-white cursor-pointer select-none"
                >
                  {each.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
