import { useEffect, useState } from 'react';
import { Link } from "react-router";
import Nav from './Nav';

export default function Header3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const isHero = variant === 'header-transparent' && !hasScrolled;
  const logoSrc = isHero ? '/1global1.png' : '/one-globe.png';
  const textColor = isHero ? '#fff' : '#000';

  const headerStyle = {
    color: textColor,
    backgroundColor: isHero ? 'transparent' : '#fff',
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }

      setPrevScrollPos(currentScrollPos);
      setHasScrolled(currentScrollPos > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
      {/* Inline CSS to control logo size — no imports */}
      <style>{`
        .cs_site_branding img {
          height: clamp(40px, 5vw, 64px); /* normal size */
          width: auto;
          display: block;
          object-fit: contain;
        }
        /* When header becomes sticky, gently reduce the logo size */
        .cs_sticky_header .cs_site_branding img,
        .cs-gescout_sticky .cs_site_branding img {
          height: clamp(34px, 4.2vw, 56px);
        }
        /* Ensure the img never overflows its container */
        .cs_main_header_left .cs_site_branding {
          display: inline-flex;
          align-items: center;
          line-height: 0;
        }
      `}</style>

      <header
        style={headerStyle}
        className={`cs_site_header header_style_2 header_style_2_2 cs_style_1 header_sticky_style1 ${
          isHero ? variant : ''
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? 'cs_mobile_toggle_active' : ''
        } ${isSticky ? isSticky : ''}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} linkColor={textColor} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button">
                    <a
                      onClick={() => setSearchToggle(!searchToggle)}
                      className="search-trigger search-icon"
                      style={{ color: textColor }}
                    >
                      <i className="bi bi-search"></i>
                    </a>
                    <Link to="/investor-relations" className="theme-btn" style={{ color: textColor }}>
                      <span>
                        Investor Relations <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <div className="cs_site_header_spacing_140"></div>

      <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
        <div className="search-inner">
          <i
            onClick={() => setSearchToggle(!searchToggle)}
            id="search-close"
            className="bi bi-x-lg search-close"
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
