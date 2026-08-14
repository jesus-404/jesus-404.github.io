import React, { useRef } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import DOWNLOAD from "../Resume.pdf";
import profPic from "../Images/prof_pic_small.webp";

export default function About() {
    const sectionRef = useRef(null);
    useRevealOnScroll(sectionRef, ".about-body");

    return (
        <section id="about" ref={sectionRef} aria-labelledby="about-title">
            <div className="about-container">
                <div className="about-header">
                    <h2 id="about-title" className="about-title">ABOUT</h2>
                </div>
                <div className="about-body">
                    <img src={profPic} alt="Jesus Aguayo" className="prof-pic" width="350" height="350" loading="lazy" decoding="async" />
                    <div className="about-text">
                        <h3 className="about-subTitle">Building toward Network Engineering</h3>
                        <div className="about-paragraph">
                            <p>I’m a Computer Science graduate, Army National Guard Network Systems Specialist (25H), and M.S. Computer Science student specializing in Networking at CSU East Bay. My background spans secure communications, routers and switches, LAN/WAN connectivity, network troubleshooting, cybersecurity, and software development. I hold CompTIA Security+ and an active Secret clearance, and I’m preparing for the Cisco CCNA as I pursue early-career network infrastructure opportunities.</p>
                            <a className="about-btn" href={DOWNLOAD} download="Jesus-Aguayo-Resume.pdf">
                                <span>DOWNLOAD RESUME</span>
                                <span aria-hidden="true"><MdOutlineFileDownload /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
