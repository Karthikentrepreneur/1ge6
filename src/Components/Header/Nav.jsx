import DropDown from './DropDown';
import { Link } from "react-router";

export default function Nav({ setMobileToggle, linkColor }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" style={{ color: linkColor }}>Home</Link>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)} style={{ color: linkColor }}>
        About Us
        </Link>
      </li>


        <li>
          <Link to="/activities" onClick={() => setMobileToggle(false)} style={{ color: linkColor }}>
          Activities
          </Link>
        </li>

        <li>
          <Link to="/corporate-sustainability" onClick={() => setMobileToggle(false)} style={{ color: linkColor }}>
          Sustainability
          </Link>
        </li>

      <li>
        <Link to="/team" style={{ color: linkColor }}>Our Team</Link>
      </li>

      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)} style={{ color: linkColor }}>
          News Room
        </Link>

      </li>

    </ul>
  );
}
