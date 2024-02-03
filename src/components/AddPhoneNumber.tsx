import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ADD_NUMBER_TO_CONTACT, GET_CONTACT } from "../gql/query";
import { useMutation } from "@apollo/client";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import ModalContext from "../store/ModalContext";
import Button from "./UI/Button";
import { css } from "@emotion/react";

const CardBody = css`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  border: 0;
`;

const AddPhoneNumber: React.FC = () => {
  const infoModalCtx = useContext(ModalContext);
  const [newNumber, setNewNumber] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  // console.log("ID:", id);

  const [insert_phone, { loading, error }] = useMutation(
    ADD_NUMBER_TO_CONTACT,
    {
      refetchQueries: [GET_CONTACT],
    }
  );

  useEffect(() => {
    if (infoModalCtx.modal === "modal") {
      setNewNumber("");
    }
  }, [infoModalCtx.modal, id]);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const newNumberhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(e.target.value);
  };

  const submitNewNumberHandler = (
    e: React.SyntheticEvent<EventTarget>
  ): void => {
    e.preventDefault();

    if (newNumber.trim().length === 0) {
      infoModalCtx.hideModal();
      return;
    }
    insert_phone({
      variables: {
        contact_id: id,
        phone_number: newNumber,
      },
    });

    setNewNumber("");
    infoModalCtx.hideModal();
  };

  function handleCloseModal() {
    infoModalCtx.hideModal();
  }

  return (
    <Modal
      className={""}
      open={infoModalCtx.modal === "modal"}
      onClose={infoModalCtx.modal === "modal" ? handleCloseModal : null}
    >
      <div css={CardBody}>
        <h2>Add New Phone Number</h2>
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
            pattern="[0-9]*"
            defaultValue={newNumber}
            onChange={newNumberhandler}
            placeholder="Input Phone Number"
          />

          <Button type="submit">Add New Number</Button>
          <Button textOnly onClick={handleCloseModal}>
            Close
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddPhoneNumber;
