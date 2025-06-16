interface Education {
    institution: string;
    degree: number;
    fieldOfStudy: string;
    startDate: string;
    endDate?: string;
    location?: string;
    description?: string;
}

export const education: Education[] = [
    {
        institution: "Theodor-Litt-Schule",
        degree: 2.2,
        fieldOfStudy: "Computer Science",
        startDate: "August 2019",
        endDate: "July 2021",
        location: "Gießen, Germany",
        description: "Completed the Fachoberschule (FOS) with a focus on Computer Science, combining theoretical education with practical experience. Gained foundational knowledge in programming, networks, databases, and systems analysis, alongside an internship in the IT sector."
    },
    {
        institution: "Technische Hochschule Mittelhessen",
        degree: 2.3,
        fieldOfStudy: "Computer Science",
        startDate: "October 2021",
        endDate: "Ongoing",
        location: "Gießen, Germany",
        description: "Studies focused on software development, data analysis, and system architecture. Covered practical projects with industry partners, programming in Java and Python, and topics such as databases, AI, and cloud computing."
    }
]