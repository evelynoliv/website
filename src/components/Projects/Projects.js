import { useState, useLayoutEffect } from 'react';
import localizaAPI from '../../assets/images/localizaAPI.png';
import pingPong from '../../assets/images/pingPong.png';
import crud from '../../assets/images/crud.png';
import comingSoon from '../../assets/images/comingSoon.png'
import museulight from '../../assets/images/museulight.png';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    useLayoutEffect(() => {
        const workTl = gsap.timeline();
        const ctx = gsap.context(() => {
            workTl.from(".projects-background", {
                ease: "power1.in",
                duration: 1,
                x: "1000",
            });
            workTl.from(".projects-heading", {
                opacity: 0,
                ease: "power1.inOut",
                duration: 1,
                x: "-10",
                y: "-10"
            });
            workTl.from('.projects-line', {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "1000",
            });
            workTl.from('.code', {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "1000",
            })
            workTl.from('.projects-scroll', {
                opacity: 0,
                ease: "power1",
                scale: 1.2,
                duration: 1,
                y: "-300"
            });
        })
        return () => ctx.revert()

    }, []);

    useLayoutEffect(() => {
        const tlTwo = gsap.timeline({
            scrollTrigger: {
                id: "#projects",
                start: "top top",
                end: "bottom bottom",
                ease: "sine.out",
                toggleActions: "play none none none",
                //markers: true, 
            },
        });

        const ctx = gsap.context(() => {
            tlTwo.from('.project-one img', {
                opacity: 0, duration: 1,
            });
            tlTwo.from('.project-one-info', {
                opacity: 0, duration: 1, y: -15
            })
            tlTwo.from('.project-two img', {
                opacity: 0, duration: 1, delay: .1,
            });
            tlTwo.from('.project-two-info', {
                opacity: 0, duration: 1, delay: .1, y: -15
            });
            tlTwo.from('.project-three img', {
                opacity: 0, duration: 1, delay: .1,
            });
            tlTwo.from('.project-three-info', {
                opacity: 0, duration: 1, delay: .1, y: -15
            });
            tlTwo.from('.project-four img', {
                opacity: 0, duration: 1, delay: .1,
            });
            tlTwo.from('.project-four-info', {
                opacity: 0, duration: 1, delay: .1, y: -15
            })
        })
        return () => ctx.revert()

    }, []);

    const [showMore, setShowMore] = useState(false);


    function handleMoreClick(e) {
        e.preventDefault();
        setShowMore(!showMore)
    }

    return (
        <div id="projects">
            <div className="projects-container">
                <h1 className="projects-heading">
                    Projects<span style={{ color: "#5F18EB" }}>.</span>
                </h1>
                <div className="projects-background"></div>
                <div className="projects-line"></div>
                <div className="projects-scroll" style={{ color: "#5F18EB" }}>
                    Scroll
                    <div className="projects-scroll-line"></div>
                </div>

                <div className="projects-grid">
                    <div className="project-one">
                        <a href="https://localiza-api.vercel.app/"><img src={localizaAPI} alt="Localiza API" /></a>
                    </div>
                    <div className="project-one-info">
                        <h3><span className="underline">Localiza AI<div className="highlights"></div></span></h3>
                        Consuming the IBGE API to show a list about States and Counties, using React and Redux.
                        <br />
                        <div className="code-info">
                            <a href="https://github.com/evelynoliv/localiza-api"><AiOutlineGithub /></a>
                            <a href="https://localiza-api.vercel.app/"><BsGlobe2 /></a>
                        </div>
                    </div>

                    <div className="project-two">
                        <a href="https://codeleap-evelyn.vercel.app/"><img src={crud} alt="React Crud" /></a>
                    </div>
                    <div className="project-two-info">
                        <h3><span className="underline">React CRUD<div className="highlights"></div></span></h3>
                        Application that performs CRUD functions, using React, Styled-Components, React Modal and Moment.
                        <br />
                        <div className="code-info">
                            <a href="https://github.com/evelynoliv/front-end-delivery"><AiOutlineGithub /></a>
                            <a href="https://codeleap-evelyn.vercel.app/"><BsGlobe2 /> </a>
                        </div>
                    </div>

                    <div className="project-three">
                        <a href="https://app.museulight.com.br/"><img src={museulight} alt="Web App Light" /></a>
                    </div>
                    <div className="project-three-info">
                        <h3><span className="underline">Web App Light<div className="highlights"></div></span></h3>
                        Web App builded for a interactive experience during the visiting on The Light Museum. Mobile first, acessible via Aria Label, using React, HTML, CSS, Bootsrapt and QR-Code. (Project created under Super Uber supervision)
                        <br />
                        <div className="code-info">

                            <a href="https://app.museulight.com.br/"><BsGlobe2 /></a>
                        </div>
                    </div>

                    <div className="project-four">
                        <a href="https://ping-pong-hazel.vercel.app"><img src={pingPong} alt="Ping Pong" /></a>
                    </div>
                    <div className="project-four-info">
                        <h3><span className="underline">Ping Pong Game <div className="highlights"></div></span></h3>
                        A clone of the Ping Pong Game, using Javacript, HTML and CSS;
                        <br />
                        <div className="code-info">
                            <a href="https://github.com/evelynoliv/ping-pong"><AiOutlineGithub /></a>
                            <a href="https://ping-pong-hazel.vercel.app"><BsGlobe2 /></a>
                        </div>
                    </div>

                    <div className="project-five">
                        <a href="https://app.museulight.com.br/"><img src={comingSoon} alt="Web App Light" /></a>
                    </div>
                    <div className="project-five-info">
                        <h3><span className="underline">Coming Soon<div className="highlights"></div></span></h3>
                        Under construction.
                        <br />
                        <div className="code-info">

                            <a href="https://app.museulight.com.br/"><BsGlobe2 /></a>
                        </div>
                    </div>



                </div>
            </div>
            <section id="more-projects">
                <div className="show-more">
                    <button onClick={handleMoreClick}>
                        <h3>{showMore ? '- Show Less Work' : '+ Show More Work'}
                        </h3>
                    </button>
                    {showMore && <p>

                        <a href="https://github.com/evelynoliv/qrcode-generator">QR Code Generator</a>
                        <br />
                        <a href="https://github.com/evelynoliv/react-crud">Ping Pong Clone</a>
                        <br />

                        {/* <a href="">In Progress</a> */}

                        {/* <a href="">Example</a><a href="" style={{ color: "#222d3e", paddingLeft: "15px" }}><AiOutlineGithub /></a> */}

                    </p>}

                </div>
            </section>
        </div>
    )
}


export default Projects;