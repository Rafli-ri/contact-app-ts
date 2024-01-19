import React, { useState } from "react";
import { ADD_CONTACT, GET_CONTACT } from "../gql/query";
import { useMutation } from "@apollo/client";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Control, Title, Label } from "../style/style";
import Button from "./UI/Button";

const AddContact: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string[] | string>([""]);

  const [insert_contact, { loading, error }] = useMutation(ADD_CONTACT, {
    refetchQueries: [
      GET_CONTACT, // DocumentNode object parsed with gql
      "GetComments", // Query name
    ],
  });
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

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
          <Title>Add Contact</Title>
          <form onSubmit={submitContactHandler}>
            <div>
              <Label htmlFor="first_name">First Name</Label>
              <Control
                type="text"
                name="firstName"
                id="first_name"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Control
                type="text"
                name="lastName"
                id="last_name"
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="number">Number</Label>
              <Control
                type="number"
                name="phoneNumber"
                id="number"
                defaultValue={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <Button type="submit">Add Contact</Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddContact;
