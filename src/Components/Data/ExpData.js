import armyNationalGuard from "../../Images/exp/armyNationalGuard.png";
import codeNinjas from "../../Images/exp/codeNinjas.webp";
import csueb from "../../Images/exp/csueb.svg";
import hackHayward from "../../Images/exp/HackHayward.webp";
import securityPlus from "../../Images/exp/securityPlus.png";
import { FaLaptopCode } from "react-icons/fa";

const expData = [
    {
        img: armyNationalGuard,
        title: "Army National Guard",
        date: "March 2025 – Present",
        subTitle: "Network Systems Specialist (25H)",
        desc: (
            <>
                Support secure voice and data communications across tactical and garrison-oriented environments where availability and reliability have operational importance.
                <br /><br />• Deploy, configure, maintain, and support routers, switches, LAN/WAN connectivity, satellite communications, and transport-network equipment.
                <br />• Diagnose connectivity faults and restore communications during time-sensitive or degraded operating conditions.
                <br />• Apply VPN, encryption, access-control, and information-assurance procedures, including work with KIV-7M equipment.
            </>
        )
    },
    {
        img: csueb,
        link: "https://www.csueastbay.edu/",
        linkLabel: "university website",
        title: "California State University, East Bay",
        date: "August 2026 – May 2028",
        subTitle: "M.S. Computer Science — Networking Concentration",
        desc: (
            <>
                Pursuing graduate specialization in networking to build deeper knowledge of networked systems and infrastructure.
                <br /><br />• Focus areas include advanced computer networks, network security, cloud infrastructure, distributed systems, and systems architecture.
                <br />• Extending a broad Computer Science foundation toward enterprise networking, infrastructure reliability, and future cloud networking work.
            </>
        )
    },
    {
        icon: FaLaptopCode,
        brandScale: .85,
        title: "FLAZ Labs",
        date: "April 2026 – Present",
        subTitle: "Co-Founder & Front-End Software Lead",
        desc: (
            <>
                Lead front-end software design and development across the application lifecycle, from planning through deployment and maintenance.
                <br /><br />• Coordinate with back-end engineers and UI/UX designers to deliver responsive, secure, and user-centered application experiences.
                <br />• Support testing, technical planning, code review, deployment, troubleshooting, and application reliability.
                <br />• Work across interconnected account, profile, payment, and application-data workflows, reinforcing a broader systems perspective.
            </>
        )
    },
    {
        img: securityPlus,
        brandScale: .88,
        title: "Credentials & Current Development",
        date: "2025 – Present",
        subTitle: "Security+ Certified | CCNA In Progress",
        desc: (
            <>
                Continuing structured development in networking and secure infrastructure.
                <br /><br />• CompTIA Security+ — earned February 2026 and current through February 2029.
                <br />• Cisco CCNA — actively preparing through Jeremy’s IT Lab, Cisco Packet Tracer, and hands-on routing and switching practice.
                <br />• Active Secret security clearance.
            </>
        )
    },
    {
        img: csueb,
        link: "https://www.csueastbay.edu/",
        linkLabel: "university website",
        title: "California State University, East Bay",
        date: "August 2021 – May 2025",
        subTitle: "B.S. Computer Science | Minor in Mathematics",
        desc: (
            <>
                Built the software, systems, and problem-solving foundation supporting my transition into Network Engineering.
                <br /><br />• Relevant coursework included Computer Networks, Operating Systems, Computer Organization and Assembly, Databases, Software Engineering, and Data Structures and Algorithms.
                <br />• Developed experience with applications, operating systems, databases, programming, and system interactions that can support future network automation and programmability.
            </>
        )
    },
    {
        img: hackHayward,
        brandFilter: "brightness(0) saturate(100%) invert(48%) sepia(30%) saturate(1050%) hue-rotate(211deg) brightness(79%) contrast(100%) opacity(.15)",
        link: "https://www.hackhayward.com",
        linkLabel: "organization website",
        title: "HackHayward",
        date: "July 2024 – March 2025",
        subTitle: "Full-Stack Web Developer",
        desc: (
            <>
                Collaborated with design and engineering teams to build and maintain software for hackathon and event operations.
                <br /><br />• Developed and debugged front-end and back-end features supporting registration, live activities, and ranking systems.
                <br />• Improved responsive behavior and application performance across devices.
                <br />• Participated in code reviews and collaborative troubleshooting to maintain reliable production-oriented software.
            </>
        )
    },
    {
        img: codeNinjas,
        link: "https://www.codeninjas.com/ca-union-city",
        linkLabel: "organization website",
        title: "Code Ninjas",
        date: "May 2022 – August 2022",
        subTitle: "Coding Instructor",
        desc: (
            <>
                Taught programming fundamentals to students ages 7–14 through hands-on JavaScript and game-development projects.
                <br /><br />• Broke technical concepts into understandable steps and guided students through structured problem solving.
                <br />• Helped learners diagnose errors, debug their code, and communicate their reasoning—skills that transfer directly to documentation and collaborative troubleshooting.
            </>
        )
    }
];

export default expData;
