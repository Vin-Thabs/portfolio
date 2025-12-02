import '../../styles/WorkingExp.css';
import Background3D from '../Background3D';
import TopBar from '../TopBar';

export default function WorkingExperience() {
    return (
        <>
            <TopBar />
            <Background3D />
            <section className="working-exp-container">
                 <h1 className="working-exp-title">Working Experience</h1>
                <div className="company-logo-wrapper">
                    <img 
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.hFXdGBzbE63MJKY0QxoyggHaEK%3Fpid%3DApi&f=1&ipt=7a5fcbcbc05289f16321c3e924f3f1727e09eb15123db8761a5d9e3c803b1246&ipo=images"  
                        alt="Nu Metro Logo"
                        className="company-logo"
                    />
                </div>

                <p className="company-name">
                    <strong>Company:</strong> Nu Metro
                </p>

                <p>
                    <strong>Role:</strong> Software Engineer / Full-Stack Developer
                </p>

                <div>
                    <strong>Responsibilities:</strong>
                    <ul className="responsibility-list">
                        <li>Developed and maintained full-stack applications, handling both front-end UI design and back-end logic.</li>
                        <li>Integrated cloud services using <strong>AWS</strong> and <strong>Microsoft Azure</strong> for scalable deployment and storage solutions.</li>
                        <li>Created and customized websites using <strong>WordPress</strong> as a content management platform for clients.</li>
                        <li>Configured servers, performed routine maintenance, and ensured optimal performance for production environments.</li>
                        <li>Worked with network protocols such as HTTP/HTTPS, TCP/IP, and DNS to ensure reliable communication between services.</li>
                        <li>Collaborated with cross-functional teams to design software features and streamline development workflows.</li>
                        <li>Implemented API integrations, database management, and secure authentication systems.</li>
                        <li>Monitored application performance and applied debugging techniques to resolve issues efficiently.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}
