import styled from "@emotion/styled";

const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

export const Card = styled.div`
  max-width: 550px;
  border: 0;
  width: 100%;
  margin-inline: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 6rem;
  ${mq(1)} {
    width: 80%;
  }
`;

export const CardContainer = styled.div`
  max-width: 550px;
  border: 0;
  width: 100%;
  margin-inline: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 1rem;
  margin-bottom: 10rem;
  ${mq(1)} {
    width: 80%;
  }
`;

export const CardBody = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 40px;
`;

export const Navigation = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff;
  background-color: #ffffff;
  padding: 20px 10%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  z-index: 99;
`;

export const Li = styled.li`
  text-decoration: none;
  display: inline;
  flex-direction: column;
  font-size: 18px;
  margin: 0 25px;
  ${mq(1)} {
    display: inline;
    font-size: 12px;
  }
`;

export const Ul = styled.ul`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 4px;
  font-weight: 500;
`;

export const NavbarMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  ${mq(1)} {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    box-shadow: 0 -1px 12px hsla(174, 63%, 15%, 0.15);
    width: 100%;
    height: 4rem;
    align-content: center;
    border-radius: 1rem 1rem 0 0;
    transition: 0.4s;
  }
`;

export const HomePageAction = styled.div`
  position: fixed;
  display: flex;
  gap: 16px;
  bottom: 90px;
  right: 40px;
  ${mq(1)} {
    bottom: 79px;
    right: 15px;
  }
  ${mq(2)} {
    bottom: 80px;
    right: 20px;
  }
`;

export const AddButton = styled.button`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  border: 0;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #ffffff;
  color: #000000;
  padding: 8px;
  cursor: pointer;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  ${mq(1)} {
    font-size: 24px;
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.h1`
  color: #495057;
  margin: 20px 0;
`;

export const Label = styled.label`
  color: #495057;
  margin: 20px 0;
  font-weight: 500;
`;

export const ButtonAction = styled.button`
  padding: 14px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #6c63ff;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #6c63ff;
  }
`;

export const Control = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2c3e50;
  font-size: 13px;
  border: 2px solid #f4f4f4;
  background-color: #f8f9fa;
  outline: none;
  &:focus {
    border: 2px solid #6c63ff;
  }
`;

export const SearchContainer = styled.div`
  margin: 7rem auto 2rem;
  max-width: 100%;
  width: 40rem;
  ${mq(1)} {
    max-width: 90%;
    margin-inline: auto;
  }
`;

// export const Ul = styled.ul`
//   ${mq(1)} {
//     width: 90%;
//     margin: 0 auto;
//   }
// `;

export const ListContainer = styled.div`
  margin: 2rem auto;
  padding: 0;
  width: 40rem;
  margin-bottom: 70px;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid #f4f4f4;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  &:focus {
    border: 2px solid #6c63ff;
  }
`;
export const P = styled.p`
  margin: 10px;
  border-bottom: 2px solid #ddd;
`;

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: start;
  gap: 30px;
  margin-bottom: 100px;
  ${mq(1)} {
    width: 90%;
    margin-bottom: 100px;
    margin-inline: auto;
  }
`;

export const PaginationButton = styled.button`
  background-color: #6c63ff;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover {
    background-color: #b3d3ea;
    color: #2c5777;
  }
`;
