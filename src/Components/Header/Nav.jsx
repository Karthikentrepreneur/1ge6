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
          <Link to="/our-business-verticals" onClick={() => setMobileToggle(false)} style={{ color: linkColor }}>
          Our Business Verticals
          </Link>
        </li>

     





    </ul>
  );
}
