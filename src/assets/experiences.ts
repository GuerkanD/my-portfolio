interface Experience {
    companyName: string;
    location: string;
    jobTitle: string;
    startDate: string;
    endDate?: string;
    description?: string;
}
  

export const experiences: Experience[] = [
    {
        companyName: "OPTIMA Pharma GmbH",
        location: "Mornshausen",
        jobTitle:"Student Intern SCADA",
        startDate:"01/2022",
        description: "Supporting the SCADA Team with installation and preparation of Hardware"
    },
    {
        companyName: "3U TELECOM GmbH",
        location: "Marburg",
        jobTitle: "Intern IT Department",
        startDate: "08/2019",
        endDate: "03/2020",
        description: "Supporting the IP Department with setting up and installing Computers for Users"
    }
];