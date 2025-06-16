import { Experience } from "../components/Experience.tsx";
import { Skills } from "../components/Skills.tsx";
import { Footer } from "../components/Footer.tsx";
import { useState } from "react";
import { motion } from "motion/react";
import { Education } from "../components/Education.tsx";

export function Portfolio() {

    type Section = 'experience' | 'skills' | 'education';
    const [currentSection, setCurrentSection] = useState<Section>('experience');

    const renderComponent = () => {
        switch (currentSection) {
            case 'experience': return <Experience />;
            case 'skills': return <Skills />;
            case 'education': return <Education />;
        }
    };



    return (
        <div className="bg-gradient-to-br from-black via-gray-900 to-red-950 text-white">
            <div className="pt-20">
                <motion.div className="md:mx-40" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
                    <div className="grid lg:grid-cols-2 lg:gap-4 rounded-2xl shadow-2xl bg-white/20">
                        <div className="p-6 flex flex-col justify-center">
                            <h1 className="text-2xl font-bold mb-4">
                                Hi! My name is <span className="">Gürkan Deniz</span>
                            </h1>
                            <h3 className="text-lg font-bold">About me</h3> <hr />
                            <p className="text-lg">
                                I'm a curious and motivated student with a passion for programming.
                                I love exploring how things work and enjoy solving real-world problems through code.
                            </p>
                            <h3 className="text-lg font-bold mt-4">What I do</h3> <hr />
                            <p className="text-lg">
                                I build projects that challenge me to grow,
                                whether it's web development, software engineering, or anything tech-related. I'm always eager to dive into new technologies and improve my skills.
                            </p>
                            <h3 className="text-lg font-bold mt-4">How I work</h3> <hr />
                            <p className="text-lg">
                                I'm a curious and open minded developer who sees every challenge as an opportunity to grow.
                            </p>
                            <div className="align-bottom mt-10 lg:mt-30">
                                <p className="font-bold">Are you interested? You can find me here:</p>
                                <div className="flex gap-4">
                                    <motion.a href="https://github.com/GuerkanD" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} >
                                        <i className="devicon-github-original text-4xl hover:text-gray-500"></i>
                                    </motion.a>
                                    <motion.a href="https://www.linkedin.com/in/guerkan-deniz" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} >
                                        <i className="devicon-linkedin-plain text-4xl hover:text-gray-500"></i>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex justify-center items-center">
                            <img src="/picture.jpg" alt="Portrait" className="max-w-90 w-full h-auto object-contain rounded-lg shadow-md" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="pb-20">
                <motion.div className="shadow-2xl rounded-2xl md:mx-40 mt-20 md:px-6 py-5 bg-white/20" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
                    <div>
                        <nav className="flex justify-center gap-4">
                            <ul className="flex gap-4">
                                <li>
                                    <motion.button className="hover:bg-white/30 border-1 px-4 py-2 rounded-md active:bg-white/40" onClick={() => setCurrentSection("experience")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Experience</motion.button>
                                </li>
                                <li>
                                    <motion.button className="hover:bg-white/30 border-1 px-4 py-2 rounded-md active:bg-white/40" onClick={() => setCurrentSection("skills")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Skills</motion.button>
                                </li>
                                <li>
                                    <motion.button className="hover:bg-white/30 border-1 px-4 py-2 rounded-md active:bg-white/40" onClick={() => setCurrentSection("education")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Education</motion.button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <motion.div>
                        {renderComponent()}
                    </motion.div>
                </motion.div>
            </div>
            <Footer></Footer>

        </div>
    );
}