import { NavLink } from "react-router-dom";
import styles from "./ComponentOfLayout.module.css";
import "../../App.css";

const items = [
  { to: "/", name: "Home" },
  { to: "/new-comment", name: "New Comment" },
];

const Navigation = () => {
  return (
    <nav className="container">
      <ul>
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={(dataLink) =>
                dataLink.isActive
                  ? `${styles.activeLink}`
                  : `${styles.hoverLink}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
