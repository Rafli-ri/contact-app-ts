import React from "react";
import dateFormat from "dateformat";
import { css } from "@emotion/react";

const Paragraph = css`
  margin: 6px;
  border-bottom: 2px solid #ddd;
`;

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
        <p css={Paragraph}>{dateFormat(created_at)}</p>
      </div>
      <div>
        <h4>Contact Name :</h4>
        <p css={Paragraph}>
          {first_name} {last_name}
        </p>
      </div>
      <div>
        <h4>phone Number :</h4>
        {phones.map(({ number, id }: ContactsDetail) => (
          <p css={Paragraph} key={id}>
            {number}
          </p>
        ))}
      </div>
    </>
  );
};

export default ContactDetailItem;
