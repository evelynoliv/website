import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';
import './footer.css';


const Footer = () => {
    return (
        <div className="footer-container">
            
            <div className="footer-socials">
                <a href="http://github.com/evelynoliv"><AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/evelynolives/"><AiFillLinkedin /></a>
                <a href="mailto:evelynolives@gmail.com"><AiOutlineMail /></a>
            </div>
            <div className="footer-info">
                <BiCopyright /> 2023 Evelyn Oliveira
            </div>
        </div>
    )
}

export default Footer;