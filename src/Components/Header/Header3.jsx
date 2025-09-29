import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

type Header3Props = {
  variant?: 'header-transparent' | string;
};

export default function Header3({ variant }: Header3Props) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string | undefined>(undefined);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const isHero = variant === 'header-transparent' && !hasScrolled;
  const logoSrc = isHero ? '/1global1.png' : '/one-globe.png';
  const textColor = isHero ? '#fff' : '#000';

  const headerStyle: React.CSSProperties = {
    color: textColor,
    backgroundColor: isHero ? 'transparent' : '#fff',
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const heroHeight = document.querySelector<HTMLElement>('.hero-section')?.offsetHeight || 0;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down: hide header but keep sticky
        setIsSticky('cs-gescout_sticky');
      } else if (currentScrollPos !== 0) {
        // Scrolling up: show header & sticky
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        // At top: normal
        setIsSticky(undefined);
      }

      setPrevScrollPos(currentScrollPos);
      setHasScrolled(currentScrollPos > heroHeight);
    };

    handleScroll(); // initialize on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      {/* Inline CSS to control logo size — no imports */}
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
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
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
                  <Nav setMobileToggle={setMobileToggle} linkColor={textColor} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button">
                    <Link
                      to="/corporate-sustainability"
                      className="theme-btn"
                      style={{ color: textColor }}
                    >
                      <span>
                        Vision &amp; Strategy <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* spacer so content doesn't jump under fixed header */}
      <div className="cs_site_header_spacing_140"></div>
    </div>
  );
}
