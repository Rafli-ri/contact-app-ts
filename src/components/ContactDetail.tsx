import React from "react";
import { GET_CONTACT_DETAIL } from "../gql/query";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import AddPhoneNumber from "../components/AddPhoneNumber";
import { CardBody, CardContainer } from "../style/style";
import ContactDetailItem from "./ContactDetailItems";
import Button from "./UI/Button";

function DetailPageWrapper() {
  const { id } = useParams();
  return <ContactDetail id={id} />;
}

const ContactDetail: React.FC<{ id: any }> = (props) => {
  const { loading, error, data } = useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id: props.id,
    },
  });

  const DATA = data?.contact_by_pk;

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <div>
      <Header />
      <AddPhoneNumber />
      <CardContainer>
        <CardBody>
          <ContactDetailItem {...DATA} phones={data?.contact_by_pk.phones} />
          <Button type="submit">Add new </Button>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default DetailPageWrapper;
