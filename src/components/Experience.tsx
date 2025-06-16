import { div } from "motion/react-client";
import { experiences } from "../assets/experiences";
import { motion } from "motion/react";

export function Experience() {
  return (
    <section className="py-10 px-4 md:px-10 bg-gradient-to-b from-blue-50/10 via-white/10 to-blue-50/10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Experience</h1>
      <ol className="relative border-s border-stone-500 mt-8">
        {mapExperiences()}
      </ol>
    </section>
  )
}

function mapExperiences() {
  return (
    <div>
      {experiences.map((exp, i) => (
        <div>
          <li className="mb-10 ms-6 relative">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-9 ring-3 ring-white/30 "></span>
            <motion.div key={i} whileHover={{ scale: 1.01 }}>
              <div className="bg-white/30 rounded-2xl px-3 py-2" >
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                  {exp.jobTitle}
                  <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-blue-900 text-blue-300 ms-3">
                    {exp.companyName}
                  </span>
                </h3>
                <p className="text-sm text-white mb-1">
                  {exp.location}
                </p>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-300">
                  {exp.startDate} – {exp.endDate ?? "Present"}
                </time>
                {exp.description && (
                  <p className="text-base font-normal text-gray-200">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          </li>
        </div>
      ))}
    </div>
  );
}