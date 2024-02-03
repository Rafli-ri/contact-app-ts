import React, { useState } from "react";
import { GET_CONTACT } from "../gql/query";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import SearchContact from "./SearchContact";
import { css } from "@emotion/react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdBookmarkBorder } from "react-icons/md";
import Button from "./UI/Button";

type Contacts = {
  id: number;
  last_name: string;
  first_name: string;
  phones: { number: string };
};

const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

const Li = css`
  color: black;
  list-style: none;
  align-items: center;
  display: flex;
`;

const ListContainer = css`
  background-color: #ffffff;
  box-shadow: 0 10px 10px hsla(0, 0%, 0%, 0.05);
  padding: 2rem;
  border-radius: 7px;
  margin: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = css`
  ${mq(1)} {
    width: 90%;
    margin: 0 auto;
  }
`;

const ContactContainer = css`
  margin: 2rem auto;
  padding: 0;
  max-width: 100%;
  width: 40rem;
  margin-bottom: 70px;
  ${mq(1)} {
    width: 90%;
    margin: 0 auto;
  }
`;

const Name = css`
  font-weight: 500;
  color: #495057;
  font-size: 1.1rem;
  flex-grow: 3;
`;

const ImageProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 1rem;
  border: 0;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
`;

const PAGE_SIZE = 10;

function getRandomColor(id: any) {
  return Math.floor(Math.random() * id).toString(16);
}

const ContactLists: React.FC = () => {
  // const { id } = useParams<{ id: string }>();

  const [page, setPage] = useState<number>(0);
  const [searchContacts, setSearchContacts] = useState("");

  const { loading, error, data } = useQuery(GET_CONTACT, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });

  // const [deleteContact] = useMutation(DELETE_PHONE);

  // const handleDelete = (contactId: string) => {
  //   deleteContact({
  //     variables: {
  //       id: parseInt(contactId), // Pastikan id adalah integer
  //     },
  //     update(cache, { data: { delete_contact_by_pk } }) {
  //       // Update the cache to remove the deleted contact
  //       cache.modify({
  //         fields: {
  //           contacts(existingContacts = [], { readField }) {
  //             return existingContacts.filter(
  //               (contactRef: any) =>
  //                 parseInt(contactId) !== readField("id", contactRef)
  //             );
  //           },
  //         },
  //       });
  //     },
  //   }).catch((error) => {
  //     console.error("Error deleting contact:", error);
  //   });
  // };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  function filterContacts() {
    return data?.contact.filter((contact: any) => {
      const fullName =
        `${contact.first_name} ${contact.last_name}`.toLowerCase();
      return fullName.includes(searchContacts.toLowerCase());
    });
  }
  const filteredContacts = filterContacts();

  function handlePrevPagination() {
    return setPage((prev) => prev - 1);
  }

  function handleNextPagination() {
    return setPage((prev) => prev + 1);
  }

  function renderContactItem({ id, first_name, last_name }: Contacts) {
    return (
      <div css={ListContainer}>
        <Link to={`detail/${id}`} style={{ textDecoration: "none" }}>
          <li css={Li} key={id}>
            <ImageProfile color={`#${getRandomColor(id)}`}>
              {first_name.slice(0, 1)}
              {last_name.slice(0, 1)}
            </ImageProfile>
            <p css={Name}>
              {first_name} {last_name}
            </p>
          </li>
        </Link>
        <div>
          <Button textOnly>
            <MdBookmarkBorder size={25} />
          </Button>
          <Button
            textOnly
            css={{ color: "#e63946" }}
            // onClick={() => handleDelete(id.toString())}
          >
            <AiOutlineDelete size={25} />
          </Button>
        </div>
      </div>
    );
  }
  const renderedContacts = filteredContacts?.map(renderContactItem);

  return (
    <>
      <SearchContact
        search={searchContacts}
        onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchContacts(e.target.value)
        }
      />
      <div css={ContactContainer}>
        <h2>Contact List</h2>
        <ul css={Ul}>{renderedContacts}</ul>
        <Pagination
          page={page}
          prevPage={handlePrevPagination}
          nextPage={handleNextPagination}
        />
      </div>
    </>
  );
};

export default ContactLists;
