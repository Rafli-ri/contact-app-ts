import React from "react";
import { GET_CONTACT_DETAIL } from "../gql/query";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ContactDetail from "../components/ContactDetail";
import Header from "../components/Header";
import AddPhoneNumber from "../components/AddPhoneNumber";
import { CardBody, CardContainer, P } from "../style/style";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}
interface ContactsDetail {
  number: string[];
}
const DetailPage: React.FC<{ id: any }> = (props) => {
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
          <ContactDetail {...DATA} />
          <div>
            <h4>Phone Number :</h4>
            {data?.contact_by_pk.phones.map(({ number }: ContactsDetail) => (
              <P>{number}</P>
            ))}
          </div>
        </CardBody>
      </CardContainer>
      {/* {console.log(data?.contact_by_pk.phones.map((item) => item.number))} */}
    </div>
  );
};

export default DetailPageWrapper;
