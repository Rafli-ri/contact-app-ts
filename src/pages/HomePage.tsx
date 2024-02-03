import React from "react";
import { Link } from "react-router-dom";
import ContactLists from "../components/ContactLists";
import Header from "../components/Header";
import { css } from "@emotion/react";
const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

const HomePageAction = css`
  position: fixed;
  display: flex;
  gap: 16px;
  bottom: 90px;
  right: 40px;

  ${mq(1)} {
    bottom: 79px;
    right: 15px;
  }
  ${mq(2)} {
    bottom: 80px;
    right: 20px;
  }
`;

const AddButton = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  border: 0;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #ffffff;
  color: #000000;
  padding: 8px;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  &:hover {
    color: #6c63ff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  ${mq(1)} {
    font-size: 24px;
    width: 40px;
    height: 40px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <ContactLists />
      <div css={HomePageAction}>
        <Link to="/add" style={{ textDecoration: "none" }}>
          <button css={AddButton}>+</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
