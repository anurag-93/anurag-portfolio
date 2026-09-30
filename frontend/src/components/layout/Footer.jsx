import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";

import "./Footer.css";

const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Work",
    path: "/work",
  },
  {
    label: "Resume",
    path: "/resume",
  },
  {
    label: "Blog",
    path: "/blog",
  },
];

const socialLinks = [
  {
    label: "X",
    icon: <FaXTwitter />,
    href: "https://x.com/anurag93__",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/anurag-rajpoot-760955304/",
  },
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/anurag-93",
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "mailto:codewithanurag93@gmail.com",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__content">

          {/* Navigation */}
          <div className="footer__section">
            <h3 className="footer__title">
              Navigate
            </h3>

            <nav className="footer__nav">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="footer__link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="footer__section footer__connect">
            <h3 className="footer__title">
              Connect
            </h3>

            <div className="footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Anurag Rajpoot. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;