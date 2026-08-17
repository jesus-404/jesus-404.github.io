import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import dayShape from "../Images/Shapes/shape1.webp";
import mailBack from "../Images/Landscape/mailBack.webp";
import mailFrontOpened from "../Images/mailFront_Opened.webp";
import mailFrontClosed from "../Images/mailFront_Closed.webp";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function Contact({ opacityStyle, filterStyle }) {
    const [formData, setFormData] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const landscapeRef = useRef(null);
    const openMailboxRef = useRef(null);
    const closedMailboxRef = useRef(null);
    const statusRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

        let frameId = null;
        const update = () => {
            frameId = null;
            const contact = document.getElementById("contact");
            if (!contact) return;

            const contactRect = contact.getBoundingClientRect();
            if (contactRect.bottom < 0 || contactRect.top > window.innerHeight) return;

            const distanceFromBottom = window.scrollY - (document.documentElement.scrollHeight - window.innerHeight);
            landscapeRef.current?.style.setProperty("--parallax-y", `${distanceFromBottom * 0.15}px`);
            openMailboxRef.current?.style.setProperty("--parallax-y", `${distanceFromBottom * 0.3}px`);
            closedMailboxRef.current?.style.setProperty("--parallax-y", `${distanceFromBottom * 0.3}px`);
        };
        const scheduleUpdate = () => {
            if (frameId === null) frameId = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            if (frameId !== null) window.cancelAnimationFrame(frameId);
        };
    }, []);

    useEffect(() => {
        if (![
            "invalid",
            "success",
            "error"
        ].includes(status)) return undefined;
        const timeoutId = window.setTimeout(() => setStatus("idle"), 6000);
        return () => window.clearTimeout(timeoutId);
    }, [status]);

    useEffect(() => {
        if (status === "success" || status === "error") statusRef.current?.focus();
    }, [status]);

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(previous => ({ ...previous, [name]: value }));
        setErrors(previous => {
            if (!previous[name]) return previous;
            const next = { ...previous };
            delete next[name];
            return next;
        });
        if (status === "invalid") setStatus("idle");
    };

    const validate = () => {
        const nextErrors = {};
        if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
        if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) nextErrors.email = "Please enter a valid email address.";
        if (!formData.subject.trim()) nextErrors.subject = "Please enter a subject.";
        if (!formData.message.trim()) nextErrors.message = "Please enter a message.";
        return nextErrors;
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const nextErrors = validate();

        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            setStatus("invalid");
            const firstInvalidField = event.currentTarget.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`);
            firstInvalidField?.focus();
            return;
        }

        setErrors({});
        setStatus("submitting");
        try {
            await emailjs.sendForm("service_email", "template_veclmwh", event.currentTarget, "9Pqk6uYwgA_txHoVR");
            setFormData(emptyForm);
            setStatus("success");
        } catch (error) {
            setStatus("error");
        }
    };

    const fieldClass = name => {
        if (status === "success") return "success";
        return errors[name] ? "fail" : "";
    };
    const message = {
        invalid: "Please check the highlighted fields.",
        submitting: "Sending your message…",
        success: "Message sent successfully.",
        error: "Your message could not be sent. Please try again or email me directly."
    }[status];
    const isError = status === "invalid" || status === "error";
    const mailboxClosed = status === "success";
    const shapeMaskStyle = { "--shape-mask": `url(${dayShape})` };

    return (
        <section id="contact" aria-labelledby="contact-title">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 id="contact-title" className="contact-title text">GET IN TOUCH</h2>
                </div>
                <div className="contact-body">
                    <div className="contact-imgs" aria-hidden="true">
                        <div className="nightGradient" style={opacityStyle}></div>
                        <div className="dayShape" style={shapeMaskStyle}></div>
                        <div className="nightShape" style={{ ...shapeMaskStyle, ...opacityStyle }}></div>
                        <img src={mailBack} alt="" className="landscape" width="3127" height="1080" style={filterStyle} ref={landscapeRef} loading="lazy" decoding="async" />
                        <img src={mailFrontOpened} alt="" className="mail-box-open" width="3127" height="1080" style={{ ...filterStyle, opacity: mailboxClosed ? 0 : 1 }} ref={openMailboxRef} loading="lazy" decoding="async" />
                        <img src={mailFrontClosed} alt="" className="mail-box-closed" width="3127" height="1080" style={{ ...filterStyle, opacity: mailboxClosed ? 1 : 0 }} ref={closedMailboxRef} loading="lazy" decoding="async" />
                    </div>
                    <div className="contacts-form">
                        {message && (
                            <p
                                ref={statusRef}
                                className={`sent${isError ? " error" : ""}`}
                                id="contact-status"
                                role={isError ? "alert" : "status"}
                                aria-live="polite"
                                tabIndex="-1"
                            >
                                {message}
                                {status === "success" && <BsCheckLg className="icon" aria-hidden="true" />}
                                {isError && <ImCross className="icon" aria-hidden="true" />}
                            </p>
                        )}
                        <form className="form" onSubmit={handleSubmit} noValidate aria-describedby={message ? "contact-status" : undefined}>
                            <div className="common">
                                <label htmlFor="contact-name">Name
                                    <input id="contact-name" type="text" onChange={handleChange} name="name" value={formData.name} className={fieldClass("name")} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                                    {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
                                </label>
                                <label htmlFor="contact-email">Email
                                    <input id="contact-email" type="email" onChange={handleChange} name="email" value={formData.email} className={fieldClass("email")} autoComplete="email" inputMode="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                                    {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
                                </label>
                            </div>
                            <label htmlFor="contact-subject">Subject
                                <input id="contact-subject" type="text" onChange={handleChange} name="subject" value={formData.subject} className={fieldClass("subject")} autoComplete="off" required aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} />
                                {errors.subject && <span className="field-error" id="subject-error">{errors.subject}</span>}
                            </label>
                            <label htmlFor="contact-message">Message
                                <textarea id="contact-message" onChange={handleChange} name="message" value={formData.message} className={fieldClass("message")} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
                                {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
                            </label>
                            <button className="submit-btn" type="submit" disabled={status === "submitting"}>
                                {status === "submitting" ? "SENDING…" : "SEND MESSAGE"}
                            </button>
                        </form>
                        <ul className="contact-list" aria-label="Contact links">
                            <li className="cList"><a href="mailto:aguayo.jesus2003@gmail.com" aria-label="Email Jesus Aguayo"><AiOutlineMail aria-hidden="true" /></a></li>
                            <li className="cList"><a href="https://www.linkedin.com/in/jesus-aguayo/" target="_blank" rel="noreferrer" aria-label="Jesus Aguayo on LinkedIn"><AiFillLinkedin aria-hidden="true" /></a></li>
                            <li className="cList"><a href="https://github.com/jesus-404" target="_blank" rel="noreferrer" aria-label="Jesus Aguayo on GitHub"><AiFillGithub aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
