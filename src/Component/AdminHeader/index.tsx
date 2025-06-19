import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../Contexts/User.context";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #24292f;
  color: white;
  padding: 16px;
  text-align: center;
`;

export default function AdminHeader() {
  const { user } = useContext(UserContext);

  if (!user || user.role !== "admin")
    return <HeaderContainer></HeaderContainer>;

  return (
    <HeaderContainer>
      <h2>📊 לוח בקרה אדמין – PrimeTech</h2>
      <LinksWrapper>
        <Link to='users'>Users</Link>
        <Link to='/'>Main</Link>
        <Link to='/projects'>Projects</Link>
      </LinksWrapper>
    </HeaderContainer>
  );
}

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  & > * {
    color: white;
  }
`;
