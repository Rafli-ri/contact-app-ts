import React from "react";
import { Link } from "react-router-dom";
import { Navigation, NavbarMenu, Ul, Li } from "../style/style";

const Header: React.FC = () => {
  return (
    <Navigation>
      <h2>
        <Link to="/" style={{ textDecoration: "none", color: "#495057" }}>
          Contact App
        </Link>
      </h2>
      <nav>
        <NavbarMenu>
          <Ul>
            <Li>
              <Link to="/" style={{ textDecoration: "none", color: "#495057" }}>
                Home
              </Link>
            </Li>
          </Ul>
          <Ul>
            <Link
              to="/bookmark/"
              style={{ textDecoration: "none", color: "#495057" }}
            >
              <Li>Bookmark</Li>
            </Link>
          </Ul>
        </NavbarMenu>
      </nav>
    </Navigation>
  );
};

export default Header;
