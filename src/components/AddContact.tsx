import React, { useState } from "react";
import { ADD_CONTACT } from "../gql/query";
import { useMutation } from "@apollo/client";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Input, Title, Label, Button } from "../style/style";

const AddContact: React.FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);

  const [insert_contact, { loading, error }] = useMutation(ADD_CONTACT);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const firstNameHandler = (e: any) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e: any) => {
    setLastName(e.target.value);
  };
  const PhoneNumberHandler = (e: any) => {
    setPhoneNumber(e.target.value);
  };

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
              <Input
                type="text"
                name="firstName"
                id="first_name"
                defaultValue={firstName}
                onChange={firstNameHandler}
              />
            </div>
            <div>
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="last_name"
                defaultValue={lastName}
                onChange={lastNameHandler}
              />
            </div>
            <div>
              <Label htmlFor="number">Number</Label>
              <Input
                type="number"
                name="phoneNumber"
                id="number"
                defaultValue={phoneNumber}
                onChange={PhoneNumberHandler}
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
