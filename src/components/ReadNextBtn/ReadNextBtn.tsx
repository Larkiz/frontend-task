import { NavLink } from "react-router";
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  padding: 12px 24px;
  border-radius: 60px;
  border-width: 2px;
  background-color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 16px;

  cursor: pointer;
`;

const NavLinkStyled = styled(NavLink)`
  align-self: flex-end;
`;

export const ReadNextBtn = ({ id }: { id: number }) => {
  return (
    <NavLinkStyled to={"/post/" + id}>
      <Button>Читать далее</Button>
    </NavLinkStyled>
  );
};
