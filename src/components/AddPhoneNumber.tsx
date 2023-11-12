import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ADD_NUMBER_TO_CONTACT } from "../gql/query";
import { useMutation } from "@apollo/client";
import { Card, CardBody, Input, Label, Button } from "../style/style";

const AddPhoneNumber: React.FC = () => {
  const [newNumber, setNewNumber] = useState<string>("");
  const { id } = useParams();
  const [insert_phone, { loading, error }] = useMutation(ADD_NUMBER_TO_CONTACT);

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
            <div>
              <Label htmlFor="id">Contact Id</Label>
              <Input type="text" name="id" id="id" defaultValue={id} readOnly />
            </div>
            <div>
              <Label htmlFor="newNumber">Add Number</Label>
              <Input
                type="number"
                name="newNumber"
                id="newNumber"
                defaultValue={newNumber}
                onChange={newNumberhandler}
              />
            </div>
            <Button type="submit">Add Number</Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default AddPhoneNumber;
