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
        subTitle: "Network Communication Systems Specialist (25H) — Network Administration & IT Support",
        desc: (
            <>
                Administer, monitor, and support secure voice and data networks across tactical and garrison environments, maintaining reliable connectivity and resolving user, device, and infrastructure issues.
                <br /><br />• Deploy, configure, maintain, and support routers, switches, LAN/WAN connectivity, satellite communications, and transport equipment.
                <br />• Monitor network availability for service degradation or outages, isolate network, device, and connectivity faults, and restore service during time-sensitive or degraded conditions.
                <br />• Provide IT support for users and networked systems by resolving configuration, access, and connectivity issues.
                <br />• Apply VPN, encryption, access-control, and information-assurance procedures, including support for KIV-7M equipment.
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
                Pursuing graduate study in advanced networking, secure infrastructure, distributed systems, and cloud-connected environments.
                <br /><br />• Focus areas include advanced computer networks, network security, cloud infrastructure, distributed systems, and systems architecture.
                <br />• Developing knowledge of network design, scalability, infrastructure management, and reliability in support of a career in Network Engineering.
            </>
        )
    },
    {
        icon: FaLaptopCode,
        brandScale: .85,
        title: "FLAZ Labs",
        date: "April 2026 – Present",
        subTitle: "Co-Founder — Front-End Software Lead",
        desc: (
            <>
                Lead front-end engineering and contribute to application delivery from planning through deployment and maintenance.
                <br /><br />• Translate product and UI/UX requirements into responsive, user-centered interfaces while coordinating with designers and back-end engineers.
                <br />• Diagnose front-end and API-integration issues while contributing to testing, code review, deployment, and release reliability.
                <br />• Use Docker to run back-end services and supporting data containers for account, profile, authentication, payment, and application-data workflows.
            </>
        )
    },
    {
        img: securityPlus,
        brandScale: .88,
        title: "Credentials & Certifications",
        date: "2025 – Present",
        subTitle: "CompTIA Security+ Certified — CCNA In Progress",
        desc: (
            <>
                Combine a current security foundation with structured Cisco routing, switching, and troubleshooting development.
                <br /><br />• CompTIA Security+ — earned February 2026 and current through February 2029.
                <br />• Cisco CCNA — preparing through Jeremy’s IT Lab, Cisco Packet Tracer, and lab practice with IPv4/IPv6, subnetting, VLANs, trunking, Spanning Tree, routing, and OSPF.
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
        subTitle: "B.S. Computer Science — Mathematics Minor",
        desc: (
            <>
                Built a broad Computer Science foundation in networking, operating systems, software, databases, and computer architecture.
                <br /><br />• Completed relevant coursework in Computer Networks, Operating Systems, Computer Organization and Assembly, Databases, Software Engineering, and Data Structures and Algorithms.
                <br />• Applied programming and systems concepts across software projects, strengthening debugging, integration, and structured problem-solving skills.
            </>
        )
    },
    {
        img: hackHayward,
        brandFilter: "brightness(0) saturate(100%) invert(48%) sepia(30%) saturate(1050%) hue-rotate(211deg) brightness(79%) contrast(100%)",
        link: "https://www.hackhayward.com",
        linkLabel: "organization website",
        title: "HackHayward",
        date: "July 2024 – March 2025",
        subTitle: "Full-Stack Web Developer",
        desc: (
            <>
                Collaborated with design and engineering teams to build and maintain HackHayward’s live-event platform.
                <br /><br />• Developed and debugged front-end and back-end features supporting registration, live activities, and ranking systems.
                <br />• Improved responsive behavior, usability, and performance across devices.
                <br />• Contributed to code reviews and cross-team troubleshooting to support reliable event operations.
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
                Taught JavaScript fundamentals and problem solving to students ages 7–14 through game-development projects.
                <br /><br />• Explained technical concepts in clear, approachable steps.
                <br />• Guided students through diagnosing errors, debugging code, and communicating their reasoning.
                <br />• Adapted instruction to individual needs while reinforcing patience, logical thinking, and collaborative problem solving.
            </>
        )
    }
];

export default expData;
