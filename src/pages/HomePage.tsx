import React from "react";
import { Link } from "react-router-dom";
import ContactLists from "../components/ContactLists";
import Header from "../components/Header";
import { AddButton, HomePageAction } from "../style/style";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <ContactLists />
      </div>
      <HomePageAction>
        <Link to="/add" style={{ textDecoration: "none" }}>
          <AddButton>+</AddButton>
        </Link>
      </HomePageAction>
      {/* <Link to="/add">Go to User 42 Page</Link> */}
    </div>
  );
};

export default HomePage;
