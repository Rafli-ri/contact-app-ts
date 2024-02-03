import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

const Navigation = css`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff;
  background-color: #ffffff;
  padding: 0 10%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  z-index: 99;
`;

const NavbarMenu = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  ${mq(1)} {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    box-shadow: 0 -1px 12px hsla(174, 63%, 15%, 0.15);
    width: 100%;
    height: 4rem;
    align-content: center;
    border-radius: 1rem 1rem 0 0;
    transition: 0.4s;
  }
`;
const Ul = css`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 4px;
  font-weight: 500;
`;

const Li = css`
  text-decoration: none;
  display: inline;
  flex-direction: column;
  font-size: 18px;
  margin: 0 25px;
  ${mq(1)} {
    display: inline;
    font-size: 12px;
  }
`;

const NavLink = css`
  text-decoration: none;
  color: #495057;
  &:hover {
    color: #6c63ff;
  }
  &.active {
    color: #6c63ff;
  }
`;

const Header: React.FC = () => {
  return (
    <div css={Navigation}>
      <h2>
        <Link to="/" css={NavLink}>
          Contact App
        </Link>
      </h2>
      <nav css={NavbarMenu}>
        <>
          <ul css={Ul}>
            <li css={Li}>
              <Link to="/" css={NavLink}>
                Home
              </Link>
            </li>
          </ul>
          <ul css={Ul}>
            <Link to="/bookmark" css={NavLink}>
              <li css={Li}>Bookmark</li>
            </Link>
          </ul>
        </>
      </nav>
    </div>
  );
};

export default Header;
