import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { BsGrid3X3GapFill, BsXLg } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/axtra-logo-light-2.webp";


export default function Sidebar() { 
  const [menuState, setMenuState] = useState("closed"); // 'closed', 'opening', 'open', 'closing'
  const [showLinks, setShowLinks] = useState(false);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const textLinks = [
    "Digital Marketing",
    "Design Studio",
    "Digital Agency",
    "Creative Agency",
    "Modern Agency",
    "Startup Agency",
    "Personal Portfolio",
  ];

  const MENU_TRANSITION_MS = 1200; // must match CSS transition (1.2s)
  const STAGGER_DELAY_MS = 100;
  const ITEM_ANIM_DURATION_MS = 400; // matches CSS ease-out duration

  const toggleMenu = () => {
    if (menuState === "closed") {
      setMenuState("opening");
      // after next frame, mark open so CSS class applies
      requestAnimationFrame(() => {
        setMenuState("open");
        // wait for the panel transition to finish, then show links staggered
        openTimeoutRef.current = setTimeout(() => {
          setShowLinks(true);
        }, MENU_TRANSITION_MS + 50); // small buffer
      });
    }
  };

  const closeMenu = () => {
    // first hide links in reverse (by removing showLinks)
    setShowLinks(false);
    // compute total reverse delay: last item delay + its animation duration
    const totalReverseDelay =
      (textLinks.length - 1) * STAGGER_DELAY_MS + ITEM_ANIM_DURATION_MS;
    // after links disappear, start closing panels
    closeTimeoutRef.current = setTimeout(() => {
      setMenuState("closing");
      // after panel closing animation, fully hide
      setTimeout(() => {
        setMenuState("closed");
      }, 500); // matching existing closing duration in CSS
    }, totalReverseDelay + 50); // small buffer
  };

  useEffect(() => {
    return () => {
      clearTimeout(openTimeoutRef.current);
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {menuState === "closed" && (
        <aside className="sidebar">
          <div className="sidebar__logo">
            <img className="sidebar-logo" src={logo} alt="Xtra Logo" />
          </div>

          <div className="sidebar__icon" onClick={toggleMenu}>
            <BsGrid3X3GapFill size={28} color="#fff" />
          </div>

          <div className="sidebar__support">
            <div className="support-text">Support Center</div>
            <div className="support-phone">+98 123 25902</div>
          </div>
        </aside>
      )}

      <div className={`menu-overlay ${menuState !== "closed" ? menuState : ""}`}>
        <button className="menu-close-btn" onClick={closeMenu}>
          <BsXLg size={28} color="#fff" />
        </button>

        <div className="menu-left">
          <div className="left-content">
            <div className="logo-container">
              <img src={logo} alt="Xtra Logo" className="menu-logo" />
            </div>

            <div className="contact-section">
              <h3 className="h3">EMAIL ADDRESS</h3>
              <a href="mailto:axtra@gmaill.com" className="email-link">
                AXTRA@GMAILL.COM
              </a>

              <div className="contact-details">
                <div className="contact-row">
                  <h4 className="phone-info">Phone</h4>
                  <p className="number">01796582452</p>
                </div>

                <div className="contact-row">
                  <p className="phone-info">
                    <p className="address">Address</p>
                    <br />
                    Nenuya Centre, Elia Street,
                    <br />
                    New York, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <div className="copyright">
                © Alrights reserved <br /> by CrowdyFlow
              </div>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search here"
                  className="search-input"
                />
                <FiSearch className="search-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="menu-right">
          <div className={`right-content ${showLinks ? "links-visible" : ""}`}>
            {textLinks.map((text, index) => (
              <h2
                key={text}
                className="menu-item"
                style={{
                  transitionDelay: showLinks
                    ? `${index * STAGGER_DELAY_MS}ms`
                    : `${(textLinks.length - 1 - index) * STAGGER_DELAY_MS}ms`,
                }}
              >
                <a href="#" onClick={closeMenu}>
                  {text}
                </a>
              </h2>
            ))}
          </div>
        </div>
        {/* follow-me vertical tab */}
<div className="follow-me-tab">
 <span> FOLLOW ME</span>
</div>
      </div>
    </>
  );
}
