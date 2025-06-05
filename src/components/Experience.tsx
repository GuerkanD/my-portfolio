import { motion } from "motion/react";
import { experiences } from "../assets/experiences";

export function Experience() {
    return (
        <section>
            <h1 className="text-2xl font-bold mb-1">My Experience</h1>
            <div className="flex flex-col gap-4">
                <ul className="space-y-8">
                    {mapExperiences()}
                </ul>
            </div>
        </section>
    )
}

function mapExperiences() {
    return experiences.map((exp, i) => (
        <motion.div key={i} className="p-4 rounded shadow hover:bg-spare bg-white/30 text-black" whileHover={{ scale: 1.05 }}>
            <li className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-300"></div>
                <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <div>
                        <h2 className="text-xl font-semibold">{exp.jobTitle}</h2>
                        <h3 className="text-md text-stone-600">{exp.companyName} – {exp.location}</h3>
                        <p className="text-sm">{exp.startDate} – {exp.endDate ?? "Present"}</p>
                        {exp.description && <p className="mt-2">{exp.description}</p>}
                    </div>
                </div>
            </li>
        </motion.div>
    ));
}