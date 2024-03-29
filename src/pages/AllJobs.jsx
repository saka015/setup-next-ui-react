import React from "react";
import { CiSearch } from "react-icons/ci";
import JobCard from '../components/JobCard'

const AllJobs = () => {
  return (
    <div>
      <div className="flex  bg-tea-200 text-3xl rounded-xl p- border m-4 mx-48 mt-6">
        <CiSearch className="mt-3 text-4xl mx-2" />
        <input className="h-full w-full  rounded-xl focus:outline-none  p-2 text-normal font-extralight" type="text" placeholder="Search for jobs..." />
          </div>
          
          <div className="border p-4 m-4 rounded-xl">
              <JobCard/>
              <JobCard/>
              <JobCard/>
              <JobCard/>
          </div>
    </div>
  );
};

export default AllJobs;
