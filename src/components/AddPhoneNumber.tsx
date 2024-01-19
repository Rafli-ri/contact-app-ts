import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ADD_NUMBER_TO_CONTACT, GET_CONTACT } from "../gql/query";
import { useMutation } from "@apollo/client";
import { Card, CardBody, ButtonAction } from "../style/style";
import Input from "./UI/Input";

const AddPhoneNumber: React.FC = () => {
  const [newNumber, setNewNumber] = useState<string>("");
  const { id } = useParams();
  const [insert_phone, { loading, error }] = useMutation(
    ADD_NUMBER_TO_CONTACT,
    {
      refetchQueries: [
        GET_CONTACT, // DocumentNode object parsed with gql
        "GetComments", // Query name
      ],
    }
  );

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const newNumberhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(e.target.value);
  };

  const submitNewNumberHandler = (
    e: React.SyntheticEvent<EventTarget>
  ): void => {
    e.preventDefault();
    // console.log(id, `${"+62" + newNumber}`);
    if (newNumber.trim().length === 0) {
      return;
    }
    insert_phone({
      variables: {
        contact_id: id,
        phone_number: newNumber,
      },
    });

    setNewNumber("");
  };

  return (
    <>
      <Card>
        <CardBody>
          <form onSubmit={submitNewNumberHandler}>
            <Input
              label="Contact ID"
              id="id"
              name="id"
              defaultValue={id}
              readOnly
            />
            <Input
              label="Number"
              id="newNumber"
              name="newNumber"
              type="tel"
              defaultValue={newNumber}
              onChange={newNumberhandler}
            />

            <ButtonAction type="submit">Add Number</ButtonAction>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddPhoneNumber;
