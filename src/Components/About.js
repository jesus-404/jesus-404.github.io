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
                        <h3 className="about-subTitle">Once again, Hello!</h3>
                        <div className="about-paragraph">
                            <p>I’m Jesus Aguayo, a current student at CSU East Bay majoring in Computer Science and an aspiring Full-Stack Web Developer. I’ve worked as a team leader and instructor in programming-focused roles. I am confident and ready to apply my skills for the benefit of your company.</p>
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
