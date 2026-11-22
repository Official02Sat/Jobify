import { useState, useEffect } from "react";
import FilterSection from "./FilterSection/FilterSection";
import JobsList from "./JobsList/JobsList";
import Cookies from "js-cookie";
import { FiSearch } from "react-icons/fi";

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const [profileDetails, setProfileDetails] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState([]);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookies.get("jwtToken");

  // get jobs data from api
  const getJobsData = async () => {
    setIsLoading(true);
    const empTypeQuery = selectedEmploymentTypes.join(",");
    const api = `https://apis.ccbp.in/jobs?employment_type=${empTypeQuery}&minimum_package=${selectedSalaryRange}&search=${searchInput}`;

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(api, options);
      if (response.ok) {
        const data = await response.json();
        setJobsList(data.jobs || []);
      }
    } catch (error) {
      console.log("jobs fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // get profile data from api
  const getProfileData = async () => {
    const api = "https://apis.ccbp.in/profile";
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(api, options);
      if (response.ok) {
        const data = await response.json();
        setProfileDetails(data.profile_details || {});
      }
    } catch (error) {
      console.log("profile fetch error:", error);
    }
  };

  useEffect(() => {
    getProfileData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getJobsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmploymentTypes, selectedSalaryRange]);

  // change employment type filter
  const onChangeEmploymentType = (typeId) => {
    if (selectedEmploymentTypes.includes(typeId)) {
      setSelectedEmploymentTypes(
        selectedEmploymentTypes.filter((item) => item !== typeId)
      );
    } else {
      setSelectedEmploymentTypes([...selectedEmploymentTypes, typeId]);
    }
  };

  // change salary filter
  const onChangeSalaryRange = (salaryId) => {
    setSelectedSalaryRange(salaryId);
  };

  // on search submit
  const onSearchSubmit = (e) => {
    e.preventDefault();
    getJobsData();
  };

  return (
    <div className="min-h-screen bg-slate-900 px-4 md:px-12 py-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        {/* left column: profile and filters (fixed on screen) */}
        <div className="col-span-1 md:sticky md:top-24 md:self-start md:max-h-[calc(100vh-7rem)] md:overflow-y-auto pr-1">
          <FilterSection
            profileDetails={profileDetails}
            selectedEmploymentTypes={selectedEmploymentTypes}
            onChangeEmploymentType={onChangeEmploymentType}
            selectedSalaryRange={selectedSalaryRange}
            onChangeSalaryRange={onChangeSalaryRange}
          />
        </div>

        {/* right column: search and jobs list */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          {/* search input */}
          <form onSubmit={onSearchSubmit} className="mb-6 flex items-center">
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search"
              className="w-full max-w-md bg-slate-800 text-white border border-slate-700 rounded-l-md px-4 py-2 outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2.5 rounded-r-md border border-l-0 border-slate-700"
            >
              <FiSearch size={18} />
            </button>
          </form>

          {/* jobs feed */}
          {isLoading ? (
            <div className="text-center py-20 text-slate-400">
              <p className="text-lg">Loading Jobs...</p>
            </div>
          ) : jobsList.length === 0 ? (
            <div className="text-center py-20 bg-slate-800 rounded-xl border border-slate-700">
              <h2 className="text-xl font-bold mb-2">No Jobs Found</h2>
              <p className="text-slate-400 text-sm">
                We could not find any jobs. Try other filters.
              </p>
            </div>
          ) : (
            <ul>
              {jobsList.map((job) => (
                <JobsList key={job.id} jobItem={job} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
