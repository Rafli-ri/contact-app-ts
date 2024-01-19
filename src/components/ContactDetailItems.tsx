import React from "react";
import dateFormat from "dateformat";
import { P } from "../style/style";

interface ContactsDetail {
  id: number;
  created_at: string;
  last_name: string;
  first_name: string;
  number: string[];
  phones: any;
}

const ContactDetailItem: React.FC<ContactsDetail> = ({
  first_name,
  last_name,
  created_at,
  phones,
}: ContactsDetail) => {
  return (
    <>
      <div>
        <h4>Created At : </h4>
        <P>{dateFormat(created_at)}</P>
      </div>
      <div>
        <h4>Contact Name :</h4>
        <P>
          {first_name} {last_name}
        </P>
      </div>
      <div>
        <h4>Phone Number :</h4>
        {phones.map(({ number }: ContactsDetail) => (
          <P>{number}</P>
        ))}
      </div>
    </>
  );
};

export default ContactDetailItem;
