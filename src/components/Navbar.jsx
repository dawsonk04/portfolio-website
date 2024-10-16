import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dawson-knudtson/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/dawsonk04">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/dawsonknudtson/">
          <FaInstagram />
        </a>
        <a href="https://x.com/dawsonk04">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
