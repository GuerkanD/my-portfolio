import { skills, SkillArea, SkillLevel, Skill } from "../assets/skills";
import { motion } from "motion/react";

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
                    <hr className="mb-2 border-white/50"></hr>
                    <ul className="rounded-lg p-2 grid lg:grid-cols-3 gap-2 bg-white/30">
                        {skills.map(skill => (
                            <motion.li className="border-2 rounded-lg p-2 bg-white/40 text-black hover:bg-white/60" whileHover={{ scale: 1.05 }} key={skill.name}>
                                <button className="flex items-center justify-between">
                                    <i className={`${skill.icon} me-2`}></i> {skill.name} <span className="text-stone-600 ms-1">({skill.level})</span>
                                </button>
                                <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                    <div className="flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap bg-yellow-700 transition duration-500" style={{ width: `${(levelOrder[skill.level] / 4) * 100}%` }}></div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
