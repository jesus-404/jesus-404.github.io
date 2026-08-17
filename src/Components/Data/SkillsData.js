import AWS from "../../Images/Logos/skills/aws.webp";
import Bash from "../../Images/Logos/skills/bash.webp";
import CCNA from "../../Images/Logos/skills/ccna.webp";
import Cisco from "../../Images/Logos/skills/cisco.png";
import CiscoPacketTracer from "../../Images/Logos/skills/cisco-packet-tracer.webp";
import Cplusplus from "../../Images/Logos/skills/cpp.webp";
import CSUEB from "../../Images/Logos/skills/csueb.webp";
import Java from "../../Images/Logos/skills/java.webp";
import JavaScript from "../../Images/Logos/skills/javascript.webp";
import Linux from "../../Images/Logos/skills/linux.webp";
import MongoDB from "../../Images/Logos/skills/mongodb.webp";
import Node from "../../Images/Logos/skills/node.webp";
import Python from "../../Images/Logos/skills/python.webp";
import REACT from "../../Images/Logos/skills/react.webp";
import SecurityClearance from "../../Images/Logos/skills/security-clearance.webp";
import SecurityPlus from "../../Images/Logos/skills/security-plus.webp";
import VMware from "../../Images/Logos/skills/vmware-workstation.webp";
import Wireshark from "../../Images/Logos/skills/wireshark.webp";
import {
    FaBookOpen,
    FaGlobe,
    FaNetworkWired,
    FaProjectDiagram,
    FaRoute,
    FaSatelliteDish,
    FaServer,
    FaShieldAlt,
    FaSitemap,
    FaTools,
    FaTree,
    FaUserCog
} from "react-icons/fa";
import { SiDocker, SiGit, SiWindows } from "react-icons/si";

const skillsData = [
    { icon: FaNetworkWired, color: "#0093e9", title: "TCP/IP", category: "Networking & Infrastructure" },
    { icon: FaSitemap, color: "#0077b6", title: "LAN/WAN", category: "Networking & Infrastructure" },
    { img: Cisco, title: "Routers & Switches", category: "Networking & Infrastructure" },
    { icon: FaTools, color: "#f59e0b", scale: .8, title: "Network Troubleshooting", category: "Networking & Infrastructure" },
    { icon: FaShieldAlt, color: "#2e7d32", title: "VPNs, Encryption & Secure Communications", category: "Networking & Infrastructure" },
    { icon: FaUserCog, color: "#7b61a8", title: "Network Administration", category: "Networking & Infrastructure" },
    { icon: FaServer, color: "#607d8b", title: "System Administration", category: "Networking & Infrastructure" },
    { icon: FaSatelliteDish, color: "#ef6c00", title: "Satellite Communications", category: "Networking & Infrastructure" },

    { icon: FaGlobe, color: "#0093e9", title: "IPv4/IPv6 & Subnetting", category: "CCNA & Networking Development" },
    { icon: FaProjectDiagram, color: "#0077b6", title: "VLANs & Trunking", category: "CCNA & Networking Development" },
    { icon: FaTree, color: "#2e7d32", title: "Spanning Tree Protocol", category: "CCNA & Networking Development" },
    { icon: FaRoute, color: "#f59e0b", title: "Routing & OSPF", category: "CCNA & Networking Development" },

    { img: SecurityPlus, scale: 1, title: "CompTIA Security+", category: "Credentials & Development" },
    { img: CCNA, scale: 1, title: "CCNA — In Progress", category: "Credentials & Development" },
    { img: SecurityClearance, scale: 1, title: "Active Secret Clearance", category: "Credentials & Development" },
    { img: CSUEB, scale: 1, title: "M.S. Networking", category: "Credentials & Development" },

    { img: CiscoPacketTracer, title: "Cisco Packet Tracer", category: "Systems & Tools" },
    { img: Wireshark, scale: .8, title: "Wireshark", category: "Systems & Tools" },
    { img: Linux, scale: .8, title: "Linux", category: "Systems & Tools" },
    { icon: SiWindows, color: "#0078d4", title: "Windows", category: "Systems & Tools" },
    { img: VMware, title: "VMware", category: "Systems & Tools" },
    { img: AWS, scale: 1, title: "AWS", category: "Systems & Tools", hidden: true },
    { icon: SiDocker, color: "#2496ed", scale: 1, title: "Docker", category: "Systems & Tools" },
    { icon: FaBookOpen, color: "var(--ink)", scale: 1, title: "Technical Documentation", category: "Systems & Tools" },
    { icon: SiGit, color: "#f05032", title: "Git & GitHub", category: "Systems & Tools" },

    { img: Python, title: "Python", category: "Programming & Software" },
    { img: Bash, offsetY: "-8px", title: "Bash", category: "Programming & Software" },
    { img: Java, offsetY: "-18px", scale: .82, title: "Java", category: "Programming & Software" },
    { img: Cplusplus, offsetY: "-8px", title: "C++", category: "Programming & Software" },
    { img: JavaScript, title: "JavaScript", category: "Programming & Software" },
    { img: REACT, scale: 1, title: "React.js", category: "Programming & Software" },
    { img: Node, offsetY: "-8px", title: "Node.js", category: "Programming & Software" },
    { img: MongoDB, offsetY: "-42px", scale: .5, title: "MongoDB", category: "Programming & Software" }
];

export default skillsData;
