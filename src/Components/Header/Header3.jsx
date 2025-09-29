import React, { useEffect, useState } from 'react';
import Nav from './Nav';

export default function Header3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(undefined);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
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
      const hero = document.querySelector('.hero-section');
      const heroHeight = (hero && hero.offsetHeight) || 0;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsSticky('cs-gescout_sticky');
      } else if (currentScrollPos !== 0) {
        // Scrolling up
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        // Top
        setIsSticky(undefined);
      }

      setPrevScrollPos(currentScrollPos);
      setHasScrolled(currentScrollPos > heroHeight);
    };

    handleScroll(); // initialize
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      {/* Inline CSS to control logo size */}
      <style>{`
        .cs_site_branding img {
          height: clamp(40px, 5vw, 64px);
          width: auto;
          display: block;
          object-fit: contain;
        }
        .cs_sticky_header .cs_site_branding img,
        .cs-gescout_sticky .cs_site_branding img {
          height: clamp(34px, 4.2vw, 56px);
        }
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
                {/* Use anchor instead of Link */}
                <a className="cs_site_branding" href="/">
                  <img src={logoSrc} alt="Logo" />
                </a>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                    onClick={() => setMobileToggle(!mobileToggle)}
                    role="button"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                  </span>
                  {/* Nav can still handle anchors or internal links as needed */}
                  <Nav setMobileToggle={setMobileToggle} linkColor={textColor} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button">
                    {/* Use anchor instead of Link */}
                    <a
                      href="/corporate-sustainability"
                      className="theme-btn"
                      style={{ color: textColor }}
                    >
                      <span>
                        Vision &amp; Strategy <i className="bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <div className="cs_site_header_spacing_140"></div>
    </div>
  );
}
