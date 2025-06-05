import React from "react";
import styled from "styled-components";
import { Student } from "../../types/User";

type LessonStatus = "not-started" | "in-progress" | "completed";

// export interface IStudent {
//   id: string;
//   name: string;
//   email: string;
//   progress: {
//     html: { status: LessonStatus; progress: number };
//     css: { status: LessonStatus; progress: number };
//     js: { status: LessonStatus; progress: number };
//   };
// }

interface Props {
  student: Student;
  onClick: (id: string) => void;
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Email = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
`;

const StatusBox = styled.div<{ status: LessonStatus }>`
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#d1fae5"
      : status === "in-progress"
      ? "#fef9c3"
      : "#fee2e2"};
  color: ${({ status }) =>
    status === "completed"
      ? "#065f46"
      : status === "in-progress"
      ? "#92400e"
      : "#991b1b"};
`;

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const StudentCard: React.FC<Props> = ({ student, onClick }) => {
  return (
    <Card onClick={() => onClick(student.id)}>
      <Name>{student.name}</Name>
      <Email>{student.email}</Email>
      {["html", "css", "js"].map((key) => {
        const progress = student.progress[key as keyof Student["progress"]];
        return (
          <StatusBox key={key} status={progress.status}>
            <strong>{capitalize(key)}</strong>:{" "}
            {progress.completedTopics.length * 10}%
          </StatusBox>
        );
      })}
    </Card>
  );
};

export default StudentCard;
