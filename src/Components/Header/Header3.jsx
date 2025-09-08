import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // <- v6
import Nav from "./Nav";

type Props = { variant?: "header-transparent" | string };

export default function Header3({ variant }: Props) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [headerHeight, setHeaderHeight] = useState<number>(80);

  const headerRef = useRef<HTMLElement | null>(null);
  const lastY = useRef(0);
  const ticking = useRef(false);

  const atTop = !hasScrolled;
  const isHero = variant === "header-transparent" && atTop;

  const logoSrc = isHero ? "/1global1.png" : "/one-globe.png";
  const textColor = isHero ? "#fff" : "#000";

  // ---- measure header height (keeps spacer accurate) ----
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const measure = () => {
      setHeaderHeight(el.offsetHeight);
      // also expose to CSS if you want global usage
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`
      );
    };

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    measure();

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // ---- scroll logic (show when scrolling up, hide when scrolling down) ----
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setHasScrolled(y > 0);
        setIsScrollingUp(y < lastY.current);
        lastY.current = y;
        ticking.current = false;
      });
    };

    onScroll(); // initialize once
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* Minimal styles to make it stable + pretty */}
      <style>{`
        :root { --header-h: ${headerHeight}px; }

        .site-header {
          position: fixed; inset: 0 0 auto 0; z-index: 1000;
          transition: background-color .25s ease, transform .25s ease, box-shadow .25s ease, backdrop-filter .25s ease;
          will-change: transform, backdrop-filter, background-color;
        }

        /* Hero mode: transparent, no shadow */
        .site-header--hero {
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
        }

        /* Solid/frosted when not on hero */
        .site-header--solid {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        /* Hide on scroll down (subtle) */
        .site-header--hide {
          transform: translateY(-12px);
          opacity: 0.98;
        }

        /* Logo sizing + shrink on scroll */
        .cs_site_branding img {
          height: clamp(40px, 5vw, 64px);
          width: auto; object-fit: contain; display: block;
          transition: height .25s ease;
        }
        .site-header--compact .cs_site_branding img {
          height: clamp(34px, 4.2vw, 56px);
        }

        /* Header inner layout (uses your existing classes too) */
        .cs_main_header_in {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; min-height: 72px;
        }

        /* Keep nav links legible over both modes */
        .cs_nav a { transition: color .2s ease; }

        /* Spacer reserves space so content never overlaps */
        .header-spacer { height: var(--header-h); }

        /* Tweak your theme button on transparent backgrounds */
        .theme-btn { border: 1px solid currentColor; }
      `}</style>

      <header
        ref={headerRef}
        style={{ color: textColor }}
        className={[
          "site-header",
          isHero ? "site-header--hero" : "site-header--solid",
          hasScrolled ? "site-header--compact" : "",
          !isScrollingUp && hasScrolled ? "site-header--hide" : "",
          "cs_site_header header_style_2 header_style_2_2 cs_style_1 header_sticky_style1",
          variant ? variant : "",
          mobileToggle ? "cs_mobile_toggle_active" : "",
          "cs_sticky_header cs_site_header_full_width",
        ].join(" ")}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              {/* Left: Branding */}
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/" aria-label="Home">
                  <img src={logoSrc} alt="Logo" />
                </Link>
              </div>

              {/* Center: Nav */}
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <button
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle((v) => !v)}
                    aria-label="Toggle navigation"
                    aria-expanded={mobileToggle}
                    aria-controls="primary-nav"
                    style={{ color: textColor, background: "transparent", border: 0 }}
                  >
                    <span></span>
                  </button>

                  <Nav
                    id="primary-nav"
                    setMobileToggle={setMobileToggle}
                    linkColor={textColor}
                  />
                </div>
              </div>

              {/* Right: Actions */}
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button" style={{ display: "flex", gap: 12 }}>
                    <button
                      onClick={() => setSearchToggle((v) => !v)}
                      className="search-trigger search-icon"
                      style={{ color: textColor, background: "transparent", border: 0 }}
                      aria-label="Open search"
                      aria-expanded={searchToggle}
                      aria-controls="site-search"
                    >
                      <i className="bi bi-search"></i>
                    </button>

                    <Link
                      to="/blog"
                      className="theme-btn"
                      style={{ color: textColor, padding: "10px 14px", borderRadius: 10 }}
                    >
                      <span>
                        Newsletter <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>{/* /cs_main_header_in */}
          </div>{/* /container */}
        </div>{/* /cs_main_header */}
      </header>

      {/* Spacer prevents overlap with About (or any section) */}
      <div className="header-spacer" />

      {/* Full-screen Search */}
      <div
        id="site-search"
        className={`search-wrap ${searchToggle ? "active" : ""}`}
        aria-hidden={!searchToggle}
      >
        <div className="search-inner">
          <button
            onClick={() => setSearchToggle(false)}
            id="search-close"
            className="bi bi-x-lg search-close"
            aria-label="Close search"
            style={{ background: "transparent", border: 0 }}
          />
          <div className="search-cell">
            <form method="get" onSubmit={(e) => e.preventDefault()}>
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                  autoFocus={searchToggle}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
