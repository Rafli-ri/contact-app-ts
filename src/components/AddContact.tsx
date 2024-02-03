import React, { useState } from "react";
import { ADD_CONTACT, GET_CONTACT } from "../gql/query";
import { useMutation } from "@apollo/client";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "../style/style";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Loading from "./Loading";
import Error from "./Error";
import { css } from "@emotion/react";

const Title = css`
  color: #495057;
  margin: 20px 0;
`;

const AddContact: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string[] | string>([""]);

  const [insert_contact, { loading, error }] = useMutation(ADD_CONTACT, {
    refetchQueries: [GET_CONTACT, "GetComments"],
  });

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const submitContactHandler = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();

    if (firstName.trim().length === 0 && lastName.trim().length === 0) {
      return;
    }
    // console.log(firstName, lastName, phoneNumber);
    const toUpperCaseFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const toUpperCaseLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1);
    // console.log(toUpperCaseFirstName, toUpperCaseLastName, phoneNumber);

    insert_contact({
      variables: {
        first_name: toUpperCaseFirstName,
        last_name: toUpperCaseLastName,
        phones: { number: phoneNumber },
      },
    });
    navigate("/");
  };

  return (
    <>
      <Header />
      <Card>
        <CardBody>
          <h1 css={Title}>Add Contact</h1>
          <form onSubmit={submitContactHandler}>
            <Input
              id="first_name"
              label="First Name"
              name="firstName"
              type="text"
              defaultValue={firstName}
              onChange={(e: any) => setFirstName(e.target.value)}
              maxLength={16}
              placeholder="input your first name"
            />
            <Input
              type="text"
              name="lastName"
              id="last_name"
              label="Last Name"
              defaultValue={lastName}
              maxLength={16}
              onChange={(e: any) => setLastName(e.target.value)}
              placeholder="input your last name"
            />

            <Input
              type="tel"
              name="phoneNumber"
              id="number"
              label="Phone Number"
              defaultValue={phoneNumber}
              onChange={(e: any) => setPhoneNumber(e.target.value)}
              pattern="[0-9\s]{13,19}"
              maxLength={14}
              placeholder="xxx xxx xxx"
            />

            <Button type="submit">Add Contact</Button>
            <Button textOnly onClick={() => navigate("/")}>
              Back
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddContact;
