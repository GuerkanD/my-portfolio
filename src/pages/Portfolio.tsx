import { Experience } from "../components/Experience.tsx";
import { Projects } from "../components/Projects.tsx";
import { Skills } from "../components/Skills.tsx";
import { Navigation } from "../components/Navigation.tsx";
import { Footer } from "../components/Footer.tsx";
import { useState } from "react";

export function Portfolio() {

    const [showElement, setShowElement] = useState(true);
    return (
        <div className="bg-custom">
            <Navigation></Navigation>
            <div className="pt-20">
                <div className="md:mx-40">
                    <div className="grid lg:grid-cols-2 lg:gap-4 rounded-2xl shadow-2xl outline-2 outline-[#343a40] bg-secondary text-[#f8f9fa]">
                        <div className="p-6 flex flex-col justify-center">
                            <h1 className="text-2xl font-bold mb-4">
                                Hi! My name is <span className="">Gürkan Deniz</span>
                            </h1>
                            <p className="text-lg">
                                I’m still a student and learning every day. I really like programming and enjoy working on projects that help me understand new concepts.
                            </p>
                            <p className="text-lg mt-4">
                                I’m always ready to learn more and improve my skills, whether it’s in web development, software, or anything tech-related. I like tackling challenges and figuring out how things work.
                            </p>
                            <p className="text-lg mt-4">
                                I don’t have all the answers yet, but I’m curious and open-minded. Every mistake or problem is just another chance to get better. For me, programming isn’t just about code—it’s about solving problems and building something useful.
                            </p>

                            <div className="align-bottom mt-10 lg:mt-30">
                                <p className="font-bold">Are you interested? You can find me here:</p>
                                <div className="flex gap-4">
                                    <a href="https://github.com/GuerkanD" target="_blank" rel="noopener noreferrer">
                                        <i className="devicon-github-original text-4xl hover:text-gray-500"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/guerkan-deniz" target="_blank" rel="noopener noreferrer">
                                        <i className="devicon-linkedin-plain text-4xl hover:text-gray-500"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex justify-center items-center">
                            <img src="/picture.jpg" alt="Portrait" className="max-w-90 w-full h-auto object-contain rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-20">
                <div className="shadow-2xl rounded-2xl md:mx-40 mt-20 md:px-6 py-5 bg-secondary outline-2 outline-[#343a40] text-[#f8f9fa]">
                    <nav className="flex justify-center gap-4">
                        <ul className="flex gap-4">
                            <li>
                                <button className="bg-[#adb5bd] px-4 py-2 rounded-md hover:bg-[#6c757d] active:bg-gray-200" onClick={() => setShowElement(true)}>Experience</button>
                            </li>
                            <li>
                                <button className="bg-[#adb5bd] px-4 py-2 rounded-md hover:bg-[#6c757d] active:bg-gray-200" onClick={() => setShowElement(false)}>Skills</button>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        {showElement ? <Experience></Experience> : <Skills></Skills>}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}