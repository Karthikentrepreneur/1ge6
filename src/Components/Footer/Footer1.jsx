import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Footer1 = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="grid">
          <section aria-label="Subscribe Newsletter" className="col">
            <img src="/1global1.png" alt="1 Global Enterprises" className="logo" />
            <h3 className="h3">Subscribe Newsletter</h3>
            <p className="muted">Get our latest deals and updates</p>

            <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" aria-label="Your email address" />
              <button type="submit">Subscribe →</button>
            </form>

            <div className="social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </section>

          <nav aria-label="Quick Links" className="col">
            <h4 className="h4">Quick Links</h4>
            <ul className="links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/activities">Activities</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          <address className="col" aria-label="Contact Us">
            <h4 className="h4">Contact Us</h4>

            <div className="item">
              <FaMapMarkerAlt className="ico" aria-hidden />
              <div>
                1 Global Enterprises Pte Ltd<br />
                #03-01, Keppel Distripark,<br />
                511 Kampong Bahru Road,<br />
                Singapore 099447
              </div>
            </div>

            <div className="item">
              <FaEnvelope className="ico" aria-hidden />
              <a href="mailto:jp@1ge.sg">jp@1ge.sg</a>
            </div>

            <div className="item">
              <FaPhone className="ico" aria-hidden />
              <div className="phones">
                <a href="tel:+6569080838">+65 69080838</a>
                <a href="tel:+6569080849">+65 69080849</a>
                <a href="tel:+6598177292">+65 98177292</a>
              </div>
            </div>

            <div className="tags">
              <span>ISO Certified</span>
              <span>Green Logistics</span>
              <span>Global Network</span>
            </div>
          </address>
        </div>

        <hr className="divide" />

        <div className="bottom">
          <p>© 1 Global Enterprises, All Rights Reserved.</p>
          <ul className="bottom-links">
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Privacy & Environmental Policy</a></li>
          </ul>
        </div>
      </div>

      <style>{`
        .footer { background:#000; color:#fff; padding:60px 0 30px; }
        .container { width:min(1200px,90%); margin:0 auto; }
        .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:40px 32px; align-items:start; }
        .col { padding:4px 0; }
        .h3{ font-size:22px; font-weight:800; margin:10px 0 6px; }
        .h4{ font-size:18px; font-weight:800; margin:6px 0 14px; }
        .muted{ color:#fff; opacity:.8; }
        .logo{ max-height:56px; width:auto; display:block; margin-bottom:12px; }
        .subscribe{ display:flex; gap:10px; margin:12px 0; flex-wrap:wrap; }
        .subscribe input{ flex:1; min-width:220px; height:46px; background:#111; border:1px solid #2a2a2a; color:#fff; border-radius:8px; padding:0 14px; }
        .subscribe input::placeholder{ color:rgba(255,255,255,.8); }
        .subscribe button{ height:46px; padding:0 16px; font-weight:700; border:0; border-radius:8px; cursor:pointer; background:#fff; color:#000; }
        @media(max-width:600px){ .subscribe{ flex-direction:column; } .subscribe input{ min-width:unset; width:100%; } .subscribe button{ width:100%; } }
        .social{ display:flex; gap:10px; margin-top:6px; }
        .social a{ width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:#111;border:1px solid #2a2a2a;color:#fff; }
        .links{ list-style:none; padding:0; margin:0; display:grid; gap:10px; }
        .links a{ color:#fff; text-decoration:none; }
        .links a:hover{ color:#62a0ff; transform:translateX(2px); }
        .item{ display:grid; grid-template-columns:24px 1fr; gap:10px; margin:10px 0; }
        .ico{ font-size:18px; margin-top:2px; }
        .phones{ display:grid; gap:4px; }
        .col a{ color:#fff; text-decoration:none; }
        .col a:hover{ color:#62a0ff; }
        .tags{ display:flex; flex-wrap:wrap; gap:8px; margin-top:12px; }
        .tags span{ font-size:12px; font-weight:700; padding:6px 12px; border-radius:999px; background:#111; border:1px solid #2a2a2a; color:#fff; }
        .divide{ height:1px; border:0; margin:32px 0; background:rgba(255,255,255,.15); }
        .bottom{ display:flex; flex-direction:column; align-items:center; gap:16px; text-align:center; }
        .bottom-links{ list-style:none; display:flex; gap:18px; padding:0; margin:0; }
        .bottom a{ color:#fff; text-decoration:none; }
        .bottom a:hover{ color:#62a0ff; }
        @media(min-width:600px){ .bottom{ flex-direction:row; justify-content:space-between; text-align:left; } }
      `}</style>
    </footer>
  );
};

export default Footer1;
