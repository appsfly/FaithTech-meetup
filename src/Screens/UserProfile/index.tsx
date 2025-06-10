import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  handleClick?: () => void;
  children?: React.ReactNode;
}
const user = {
  reviews: 4,
};
export const UserProfile = ({ children, handleClick }: Props) => {
  return (
    <Wrapper onClick={handleClick}>
      <Card>{children}</Card>
    </Wrapper>
  );
};

UserProfile.HeaderSection = ({ children }: any) => {
  return (
    <CardHeader>
      <Avatar src='https://i.pravatar.cc/100' alt='image src'></Avatar>
      <CardHeaderRightSectionContainer>
        {children ? (
          children
        ) : (
          <>
            <CardHeaderTitle>John Doe</CardHeaderTitle>
            <CardHeaderDescritpiton>Head Developer</CardHeaderDescritpiton>
          </>
        )}
      </CardHeaderRightSectionContainer>
    </CardHeader>
  );
};

UserProfile.NotesSection = ({ children }: any) => {
  return (
    <CardBelowHeader>
      {children
        ? children
        : "This product really improved my teams workflow. Highly recommended!"}
    </CardBelowHeader>
  );
};

UserProfile.BottomSection = ({ children }: any) => {
  return (
    <CardBottomSection>
      {children ? (
        children
      ) : (
        <>
          <CardBottomStars>
            {Array.from({ length: 5 }).map((star, index) => (
              <span>{index < user.reviews ? <>&#11088;</> : <>&#9734;</>}</span>
            ))}
          </CardBottomStars>
          <CardBottomDateArea>June 9, 2025</CardBottomDateArea>
        </>
      )}
    </CardBottomSection>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  max-width: 500px;
  padding: 35px;
  border-radius: 15px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CardHeaderTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const CardHeaderDescritpiton = styled.div`
  font-size: 16px;
  color: grey;
`;
const CardHeaderRightSectionContainer = styled.div`
  margin-left: 10px;
  text-align: start;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
`;

const CardBelowHeader = styled.div`
  text-align: start;
  line-height: 1.5;
`;

const CardBottomSection = styled.div``;
const CardBottomStars = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CardBottomDateArea = styled.div`
  color: grey;
  text-align: end;
  font-size: 24px;
`;
