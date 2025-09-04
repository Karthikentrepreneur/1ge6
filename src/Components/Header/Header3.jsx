import { useEffect, useState } from 'react';
import { Link } from "react-router";
import Nav from './Nav';

export default function Header3({ variant }) {
  // ---- Company details ----
  const SITE = {
    name: '1 Global Enterprises Pte Ltd',
    email: 'jp@1ge.sg',
    phoneDisplay: '+65 69080838',
    phoneHref: '+6569080838',
    address: '#03-01, Keppel Distripark, 511 Kampong Bahru Road, Singapore 099447',
    socials: {
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      instagram: '#'
    }
  };
  // --------------------------

  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState<string>('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      {/* Inline CSS for logo size */}
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
        className={`cs_site_header header_style_2 header_style_2_2 cs_style_1 header_sticky_style1 ${
          variant ? variant : ''
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? 'cs_mobile_toggle_active' : ''
        } ${isSticky}`}
      >
        <div className="cs_top_header">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left header-info">
                <ul className="cs_header_contact_list cs_mp_0 cs_white_color">
                  <li>
                    <i className="bi bi-envelope-fill" aria-hidden="true"></i>
                    <a href={`mailto:${SITE.email}`} aria-label="Email link">{SITE.email}</a>
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                    <a href={`tel:${SITE.phoneHref}`} aria-label="Phone call link">{SITE.phoneDisplay}</a>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                    {SITE.address}
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <div className="cs_header_social_links top-header-social-icon">
                    <div className="cs_social_btns cs_style_1">
                      <a href={SITE.socials.twitter} aria-label="Twitter" className="cs_center"><i className="bi bi-twitter-x"></i></a>
                      <a href={SITE.socials.facebook} aria-label="Facebook" className="cs_center"><i className="bi bi-facebook"></i></a>
                      <a href={SITE.socials.linkedin} aria-label="LinkedIn" className="cs_center"><i className="bi bi-linkedin"></i></a>
                      <a href={SITE.socials.instagram} aria-label="Instagram" className="cs_center"><i className="bi bi-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/" aria-label="Go to homepage">
                  <img src="/one-globe.png" alt={`${SITE.name} Logo`} />
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
                    role="button"
                    aria-label="Toggle navigation"
                    aria-expanded={mobileToggle}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button">
                    <a
                      onClick={() => setSearchToggle(!searchToggle)}
                      className="search-trigger search-icon"
                      role="button"
                      aria-label="Open search"
                    >
                      <i className="bi bi-search"></i>
                    </a>
                    <Link to="/blog" className="theme-btn">
                      <span>
                        Newsletter <i className="bi bi-arrow-right"></i>
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
            role="button"
            aria-label="Close search"
          ></i>
          <div className="search-cell">
            <form method="get" action="/search">
              <div className="search-field-holder">
                <input type="search" name="q" className="main-search-input" placeholder="Search..." aria-label="Search input" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
