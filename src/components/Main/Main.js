import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLoading } from 'react-icons/ai';
import { BsSlashLg } from 'react-icons/bs';
import { FaSlash } from 'react-icons/fa';
import { BiDownArrow, BiRightArrow, BiUpArrow} from 'react-icons/bi';
import { SiSpringCreators } from 'react-icons/si';
import { CgShapeZigzag} from 'react-icons/cg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './main.css';


gsap.registerPlugin(ScrollTrigger);

const Main = () => {

    //parallax background shapes on mousemove
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
        this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100 ;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    };


    //gsap animation 
    const titleTl = gsap.timeline();
    const name = useRef();
    const mouse = useRef();

    useEffect(() => {
        
        const ctx = gsap.context(() => {
            titleTl.from(name.current, {
                opacity: 0,
                ease: 'sine.inOut',
                duration: 2,
                scale: 1.8,
            })
            titleTl.from('.title', {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1,  
            });
            titleTl.from('.pdf-button', {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1, 
            });
            titleTl.from('.page-links a', {
                opacity: 0,
                stagger: 0.3,
                ease:'power1.in',
                y: 0,
            })
            titleTl.from(mouse.current, {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1,
                scale: 1.2,
                y: -1000,
            })
        })  
            return () => ctx.revert()

    },[titleTl]);

    const spanTl = gsap.timeline(({
        scrollTrigger: {
            id: "main",
            start: "=+100",
            end: "bottom bottom",
        }
    }));
   
    useEffect(() => {

        const ctx = gsap.context(() => {
            spanTl.from(".intro-heading", {
                opacity: 0,
                ease: "power1",
                //duration: 1,
                x: "-100"
            });
            spanTl.from(".intro-line", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                //delay: 1,
                x: "-100"
            });
            spanTl.from(".intro-subtitle", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                //delay: 1,
                x: "0"
            });
            spanTl.from(".intro-scroll", {
                opacity: 0,
                ease:"power1",
                scale: 1.2,
                duration: 1,
                y:"-300"
            });
            spanTl.fromTo('.tech-stack span', {
                opacity: 0,
                scale: 1.2,
                duration:1,
                ease:"none",
                repeatRefresh:true // gets a new random x and y value on each repeat
            },
            {
                opacity: 0.2,
                scale: 1,
                stagger: {
                each: 0.1,
                x: "random(-20, 20, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5
                y: "random(-20, 10, 3)", 
                from: "random"
                }
            });
        })
    
        return () => ctx.revert()
    
    }, [spanTl]);

  
    const secondTl = gsap.timeline(({
        scrollTrigger: {
           trigger: ".intro-scroll-line",
           start: "center",
        }
    }));

    useEffect(() => {

        const ctx = gsap.context(() => {

            // secondTl.from(".intro-background", {
            //     ease: "power1.in",
            //     duration: 1,
            //     x: "1200",
            // });
            secondTl.from(".intro-projects", {
                opacity: 0,
                ease: "power1.in",
                duration: 1.2,
                x: "-1000",
            });
            secondTl.from(".intouch", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100",
            });
            secondTl.from(".intouch-line", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100",
            });
            secondTl.from(".intouch-resume", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "0",  
            })
        })

        return () => ctx.revert()
    
    }, [secondTl]);


    return (
        <>
        <div id="main">
            <div className="background-layer">
            <div id="halfcircle" className="layer" data-speed="-5"><AiOutlineLoading /></div>
            <div id="zigzag" className="layer" data-speed="5"><CgShapeZigzag /></div>
            <div id="spring1" className="layer" data-speed="-7"><SiSpringCreators /></div>
            <div id="right" className="layer" data-speed="4"><BiRightArrow /></div>
            <div id="spring2" className="layer" data-speed="2"><SiSpringCreators /></div>
            <div id="down" className="layer" data-speed="8"><BiDownArrow /></div>
            <div id="up" className="layer" data-speed="3"><BiUpArrow /></div>
            <div id="slash" className="layer" data-speed="9"><BsSlashLg /></div>
            <div id="backslash" className="layer" data-speed="-5"><FaSlash /></div>
            </div>
            <h1 className="main-heading" ref={name}>
                Evelyn Oliveira<span style={{color:"#9f86c0", fontSize: "3.2rem"}}>,</span>
            </h1>
            <div className="title">
                Sofwtare developer and amateur dancer.
            </div>
            <div className="pdf-button">
               </div>
            <div className="page-links">
                <Link to="/about">About<span style={{color:"#9f86c0"}}>.</span></Link>
                <Link to="/projects">Projects<span style={{color:"#9f86c0"}}>.</span></Link>
            </div>

            <div className="mouse-scroll" ref={mouse}>
            <a href="#intro-section"> scroll </a>
            </div>
            <div className="mouse">
                <a href="#intro-section"><span></span></a>
            </div> 
        </div>
        <div id="intro-section">
            <div className="intro-heading">
                <h1>Hello World!<span style={{color:"#9f86c0", fontSize:"4rem"}}>.</span></h1>
            </div>
            <div className="intro-line"></div>
            <div className="intro-subtitle">
                <h2> Hi, my name is Evelyn and I am passionate about learning <span style={{color: "#9f86c0"}}>new things</span> and the idea that I can create almost <span style={{color: "#9f86c0"}}>everything</span> through code excites me.
                     I believe that the power of technology can change the world, and I strive to be a part of that change.
                </h2>
            </div>
            <div className="tech-stack">
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>Javascript</span>
                <span>HTML</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>CSS</span>
                <span>MySQL</span>
               <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>Git</span>
               <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>Styled Components</span>
                <span>Github</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>Node.js</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>JSON</span>
                <span>NPM</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>React</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#fff"}}>Expo</span>
                
            </div>
            <div className="intro-scroll">Scroll
                <div className="intro-scroll-line"></div>
            </div>
            <div className="intro-container">
                
        
           </div>

        </div>
      </>
    )
}

export default Main;