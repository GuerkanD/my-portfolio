import { experiences } from "../assets/experiences";

export function Experience() {
    return (
        <section>
            <h1 className="text-2xl font-bold mb-1">My Experience</h1>
            <div className="flex flex-col gap-4">
                {mapExperiences()}
            </div>
        </section>
    )
}

function mapExperiences() {
    return experiences.map((exp, i) => (
        <div key={i} className="p-4 border rounded shadow hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{exp.jobTitle}</h2>
            <h3 className="text-md text-[#dee2e6]">{exp.companyName} – {exp.location}</h3>
            <p className="text-sm text-[#dee2e6]">{exp.startDate} – {exp.endDate ?? "Present"}</p>
            {exp.description && <p className="mt-2 text-[#dee2e6]">{exp.description}</p>}
        </div>
    ));
}