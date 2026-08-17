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
                            <p>I’m a Computer Science graduate, Army National Guard Network Communication Systems Specialist (25H), and M.S. Networking student at CSU East Bay. My experience includes network administration, IT support, secure communications, routers and switches, and troubleshooting, supported by CompTIA Security+ and an active Secret clearance. I’m preparing for the CCNA and building toward a career designing, securing, and maintaining reliable network infrastructure as a Network Engineer.</p>
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
