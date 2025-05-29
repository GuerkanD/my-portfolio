import { skills, SkillArea, SkillLevel, Skill } from "../assets/skills";

export function Skills() {
    return (
        <section>
            <div>
                {sortSkills()}
            </div>
        </section>
    );
}

function sortSkills() {
    // Group skills by area
    const areaMap: Record<SkillArea, Skill[]> = {} as Record<SkillArea, Skill[]>;

    for (const skill of skills) {
        if (!areaMap[skill.area]) {
            areaMap[skill.area] = [];
        }
        areaMap[skill.area].push(skill);
    }

    // Sort each area's skills by level (descending: e.g., Expert > Advanced > Intermediate > Beginner), then by name
    const levelOrder: Record<SkillLevel, number> = {
        "Expert": 4,
        "Advanced": 3,
        "Intermediate": 2,
        "Beginner": 1
    };

    (Object.keys(areaMap) as SkillArea[]).forEach((area) => {
        areaMap[area].sort((a, b) => {
            if (levelOrder[b.level] !== levelOrder[a.level]) {
                return levelOrder[b.level] - levelOrder[a.level];
            }
            return a.name.localeCompare(b.name);
        });
    });

    return (
        <div>
            {Object.entries(areaMap).map(([area, skills]) => (
                <div key={area}>
                    <h3 className="text-2xl font-bold">{area}</h3>
                    <ul className="border-2 border-[#343a40] rounded-lg p-2 grid grid-cols-3 gap-2">
                        {skills.map(skill => (
                            <li className="border-2 border-[#343a40] rounded-lg p-2 hover:bg-[#6c757d]" key={skill.name}>
                                <button>
                                    <i className={skill.icon}></i> {skill.name} <span className="text-[#ced4da]">({skill.level})</span>
                                </button>
                                <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-blue-500 transition duration-500" style={{ width: `${(levelOrder[skill.level] / 4) * 100}%` }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
