import {Experience} from "../components/Experience.tsx";
import {Projects} from "../components/Projects.tsx";
import {Languages} from "../components/Languages.tsx";

export function Portfolio() {
    return (
        <div>
            <div>
                <img src="../assets/Portrait_Placeholder.png" alt="Portfolio" />
                <h1>My personal Portfolio</h1>
                <p>Hi, my Name is Gürkan Deniz</p>
            </div>
            <div>
                <Experience></Experience>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div>
                <Languages></Languages>
            </div>
        </div>
    )
}