import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../Contexts/User.context";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const LogoutIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #333;
  cursor: pointer;
  padding-left: 5%;
  transform: scaleX(-1); /* 👈 Flips the icon horizontally */

  &:hover {
    stroke: #d32f2f;
  }
`;

export default function Header({ title }: { title: string }) {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const backDisplay = (
    <>
      <BackButton onClick={() => navigate(-1)} aria-label='Go back'>
        <svg
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </BackButton>
      <Title>{title}</Title>
    </>
  );
  return (
    <HeaderWrapper>
      {location.pathname !== "/" ? (
        backDisplay
      ) : (
        <div
          onClick={logout}
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <LogoutIcon
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1'
            />
          </LogoutIcon>
          <Title>logout</Title>
        </div>
      )}
    </HeaderWrapper>
  );
}
