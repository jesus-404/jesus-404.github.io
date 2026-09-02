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
                Deploy, configure, and maintain routers, switches, and satellite communications equipment for secure voice and data networks supporting battalion- and battery-sized elements across field exercise and garrison environments.
                <br /><br />• Lead 3 soldiers in garrison while deploying, maintaining, and configuring network and satellite communications for a battery-sized element.
                <br />• Provide network administration, system support, and user troubleshooting for LAN/WAN and secure communications services across field and fixed-site environments.
                <br />• Monitor network availability, diagnose connectivity and equipment faults, isolate service issues, and restore communications during time-sensitive or degraded conditions.
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
                Lead front-end application development, testing, and maintenance on a team of 4 engineers, including integration with APIs and back-end services.
                <br /><br />• Coordinate feature priorities and implementation with back-end engineers and UI/UX contributors; review code and support release readiness.
                <br />• Troubleshoot front-end integration and production UI issues involving authentication, user accounts, and application data.
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
                <br />• Supported the live hackathon platform through performance improvements and production-focused troubleshooting.
                <br />• Translated UI/UX designs into responsive, cross-device interfaces in collaboration with designers and engineers.
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
