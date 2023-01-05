import { NavLink } from "react-router-dom";
import styles from "./ComponentOfLayout.module.css";

const items = [
  { to: "/", name: "Home" },
  { to: "/new-comment", name: "Add New Comment" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li>
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
