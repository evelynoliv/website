import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';


gsap.registerPlugin(ScrollTrigger);

const About = () => {

    //gsap animation

    const aboutTl = gsap.timeline();

    useEffect(() => {

        const ctx = gsap.context(() => {
            aboutTl.from(".heading-background", {
                ease: "power1.in",
                duration: 1,
                x: "1000",
            })
            aboutTl.from(".about-heading", {
                opacity: 0,
                ease: "power1.inOut",
                duration: 1,
                x: "-10",
                y: "-10"
            });
            aboutTl.from(".heading-line", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "1000"
            });
            aboutTl.from(".about-info", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100"
            });
            aboutTl.from(".info-one", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "-1000"
            });
            aboutTl.from(".info-two", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "-1000"
            });
            aboutTl.from(".scroll-down", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                y: "-100",
            })

        })
        return () => ctx.revert()

    }, [aboutTl]);

    const mainTl = gsap.timeline(({
        scrollTrigger: {
            trigger: "#about",
            start: "15% top",
            end: "bottom bottom",
            //markers: true,
            toggleActions: "play none none none",
        }

    }));

    useEffect(() => {
        const ctx = gsap.context(() => {
            mainTl.from(".info-text", {
                opacity: 0,
                ease: "power1.in",
                delay: 1,
                duration: 1,
            });
            mainTl.from(".snorkel", {
                opacity: 0,
                ease: "power1.in",
                duration: .5,
                delay: .5
            });
            mainTl.from(".more-info-line", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "400",
                delay: .5
            });
            mainTl.from(".more-info p", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "0",
                delay: .5
            })
        })
        return () => ctx.revert()
    }, [mainTl]);

    return (
        <div id="about">
            <div className="heading-background"></div>
            <h1 className="about-heading">About me<span style={{ color: "#9f86c0" }}>.</span></h1>
            <div className="heading-line"></div>
            <div className="about-info">Over the last years of my career, I worked directly with business and project management, and throughout that time, I always envisioned exploring and working in a different area. My appreciation for learning new things and enthusiasm for technology led me to start a new path and become a software developer. My background in management allows me to have a holistic view of the project and ensure efficiency in deliveries. Currently, I am working as a developer and feel fulfilled in contributing to the development of innovative projects.</div>

        </div>
    )
}

export default About;