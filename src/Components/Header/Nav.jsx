import DropDown from './DropDown';
import { Link } from "react-router";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
      </li>


      <li>
        <Link to="/activities" onClick={() => setMobileToggle(false)}>
        Activities
        </Link>
      </li> 
      
      <li>
        <Link to="/team">Our Team</Link>
      </li>        

      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        
      </li>
      
    </ul>
  );
}
