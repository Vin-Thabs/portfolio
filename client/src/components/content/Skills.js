import '../../styles/Skills.css';
import Background3D from '../Background3D';
import TopBar from '../TopBar';

export default function Skills() {
    return (
        <>
            <TopBar />
            <Background3D />

            <section className="skills-page">

                <h1 className="skills-title">Skills</h1>

                <div className="skill-section">
                    <h2 className="section-title">Programming Languages</h2>

                    <ul className="text-list">
                        <li>C / C++</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                    </ul>
                </div>

                {/* Frameworks */}
                <div className="skill-section">
                    <h2 className="section-title">Frameworks</h2>

                    <ul className="text-list">
                        <li>ReactJs</li>
                        <li>Angular</li>
                    </ul>
                </div>

                {/* Soft Skills */}
                <div className="skill-section">
                    <h2 className="section-title">Soft Skills</h2>

                    <ul className="text-list">
                        <li>Critical & creative problem-solving</li>
                        <li>Communication and teamwork oriented</li>
                        <li>Analytical and investigative mindset</li>
                        <li>Learns quickly through experience</li>
                    </ul>
                </div>

                {/* DevOps & Networking */}
                <div className="skill-section">
                    <h2 className="section-title">DevOps & Cloud</h2>

                   <ul className="text-list">
                    <li>CI/CD pipelines using GitHub Actions and Azure DevOps</li>
                    <li>Firebase (Backend as a Service)</li>
                    <li>Basic cloud deployment and server management</li>
                </ul>

                    <h3 className="sub-title">Networking & Tools</h3>
                    <ul className="text-list">
                        <li>Networking protocols</li>
                        <li>Wireshark (tshark)</li>
                        <li>Nmap</li>
                    </ul>
                </div>

               
                <div className="skill-section">
                    <h2 className="section-title">CS Fundamentals & Machine Learning</h2>

                    <ul className="text-list">
                        <li>OS fundamentals: locks, processes, schedulers</li>
                        <li>Analysis of algorithms</li>
                        <li>Machine Learning basics (Logistic Regression, Decision Trees, Naive Bayes, K-Means, Linear Regression)</li>
                        <li>Parallel computing & High Performance Computing</li>
                    </ul>
                </div>

            </section>
        </>
    );
}
