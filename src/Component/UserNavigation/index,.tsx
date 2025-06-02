// components/UserNavigation.tsx

import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`;

const NavButton = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? "#2563eb" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#1f2937")};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? "#1e40af" : "#e0e7ff")};
  }
`;

type Props = {
  currentView: string;
  onChange: (view: string) => void;
};

const UserNavigation: React.FC<Props> = ({ currentView, onChange }) => {
  return (
    <NavContainer>
      <NavButton active={currentView === "all"} onClick={() => onChange("all")}>
        👥 כל התלמידים
      </NavButton>
      <NavButton
        active={currentView === "progress"}
        onClick={() => onChange("progress")}
      >
        📈 התקדמות
      </NavButton>
      <NavButton active={currentView === "add"} onClick={() => onChange("add")}>
        ➕ הוספת תלמיד
      </NavButton>
    </NavContainer>
  );
};

export default UserNavigation;
