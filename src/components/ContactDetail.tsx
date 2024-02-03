import React, { useContext } from "react";
import { GET_CONTACT_DETAIL } from "../gql/query";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ContactDetailItem from "./ContactDetailItems";
import Button from "./UI/Button";
import ModalContext from "../store/ModalContext";
import { css } from "@emotion/react";

const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

const CardBody = css`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
  border: 0;
`;

const CardContainer = css`
  max-width: 550px;
  border: 0;
  width: 100%;
  margin-inline: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 7rem;
  margin-bottom: 10rem;
  ${mq(1)} {
    width: 80%;
  }
`;

function DetailPageWrapper() {
  const { id } = useParams();
  return <ContactDetail id={id} />;
}

const ContactDetail: React.FC<{ id: any }> = (props) => {
  const navigate = useNavigate();
  const infoModalCtx = useContext(ModalContext);
  const { loading, error, data } = useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id: props.id,
    },
  });

  const DATA = data?.contact_by_pk;

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  function handleShowModal() {
    infoModalCtx.showModal();
  }

  return (
    <div>
      <Header />
      <div css={CardContainer}>
        <div css={CardBody}>
          <h2>Contact Detail</h2>
          <ContactDetailItem {...DATA} phones={data?.contact_by_pk.phones} />
          <Button type="submit" onClick={handleShowModal}>
            New Number Phone
          </Button>
          <Button textOnly onClick={() => navigate("/")}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailPageWrapper;
