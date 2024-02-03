import React from "react";
import ContactDetail from "../components/ContactDetail";
import AddPhoneNumber from "../components/AddPhoneNumber";

const DetailPage: React.FC = () => {
  return (
    <div>
      <ContactDetail />
      <AddPhoneNumber />
    </div>
  );
};

export default DetailPage;
