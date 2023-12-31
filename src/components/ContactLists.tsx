import React, { useState } from "react";
import { GET_CONTACT } from "../gql/query";
import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import SearchContact from "./SearchContact";

type Contacts = {
  id: number;
  last_name: string;
  first_name: string;
  phones: { number: string };
};

const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

const Li = styled.li`
  margin: 1.25rem 0;
  box-shadow: 0 10px 10px hsla(0, 0%, 0%, 0.05);
  padding: 2rem;
  border-radius: 7px;
  background-color: #ffffff;
  color: black;
  list-style: none;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  ${mq(1)} {
    width: 90%;
    margin: 0 auto;
  }
`;

const ListContainer = styled.div`
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

const ContactLists: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [searchContacts, setSearchContacts] = useState("");
  console.log(searchContacts);
  const { loading, error, data } = useQuery(GET_CONTACT, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <SearchContact
        search={searchContacts}
        onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchContacts(e.target.value)
        }
      />
      <ListContainer>
        <h2>Contact List</h2>
        <Ul>
          {data?.contact
            .filter((item: any) => {
              return searchContacts?.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(searchContacts);
            })
            .map(
              ({ id, first_name, last_name, phones: { number } }: Contacts) => (
                <Link to={`detail/${id}`} style={{ textDecoration: "none" }}>
                  <Li key={id}>
                    <ImageProfile
                      color={`#${Math.floor(Math.random() * id).toString(16)}`}
                    >
                      {first_name.slice(0, 1)}
                      {last_name.slice(0, 1)}
                    </ImageProfile>
                    {first_name} {last_name} {number}
                  </Li>
                </Link>
              )
            )}
        </Ul>
        {/* pagination */}
        <Pagination
          page={page}
          prevPage={() => setPage((prev) => prev - 1)}
          nextPage={() => setPage((prev) => prev + 1)}
        />
      </ListContainer>
    </>
  );
};

export default ContactLists;
