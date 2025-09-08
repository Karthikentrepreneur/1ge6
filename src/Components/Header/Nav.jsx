import { Link } from "react-router";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" style={{ color: 'inherit' }}>Home</Link>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)} style={{ color: 'inherit' }}>
          About Us
        </Link>
      </li>

      <li>
        <Link to="/activities" onClick={() => setMobileToggle(false)} style={{ color: 'inherit' }}>
          Activities
        </Link>
      </li>

      <li>
        <Link to="/team" style={{ color: 'inherit' }}>Our Team</Link>
      </li>

      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)} style={{ color: 'inherit' }}>
          Blog
        </Link>
      </li>

    </ul>
  );
}
