import { education } from "../assets/education"

export function Education() {
    return (
        <section className="py-10 px-4 md:px-10 bg-gradient-to-b from-blue-50/10 via-white/10 to-blue-50/10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Education</h1>
            <div className="flex flex-row justify-center gap-6">
                {mapEducations()}
            </div>
        </section>
    );
}

function mapEducations() {
    return education.map((e, index) => (
        <div
            key={index}
            className="md:w-200 bg-white/20 backdrop-blur-sm shadow-lg rounded-2xl p-6"
        >
            <h2 className="text-xl font-semibold text-white">{e.fieldOfStudy}</h2>
            <h3 className="text-md text-white/80 mb-2">{e.degree}</h3>
            <p className="text-sm text-white/60 mb-2">
                {e.startDate} – {e.endDate}
            </p>
            <div className="text-sm text-white/70 space-y-1">
                <p><strong>Location:</strong> {e.location}</p>
                <p><strong>Institution:</strong> {e.institution}</p>
                <p className="mt-2">{e.description}</p>
            </div>
        </div>
    ));
}
