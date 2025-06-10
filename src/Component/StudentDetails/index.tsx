// components/StudentDetails.tsx

import React from "react";
import styled from "styled-components";

type LessonStatus = "not-started" | "in-progress" | "completed";
interface Topic {
  status: LessonStatus;
  progress: number;
  completedTopics: Array<any>;
}
export interface IStudentDetails {
  id: string;
  name: string;
  email: string;
  phone?: string;
  progress: {
    html: Topic;
    css: Topic;
    js: Topic;
    tasks: Topic;
  };
  attendance: {
    lessonName: string;
    attended: boolean;
    needsReview: boolean;
  }[];
  notes: string[];
  onBack: () => void;
}

const Container = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.div`
  margin-top: 24px;
`;

const ProgressBox = styled.div<{ status: LessonStatus }>`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 6px;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#d1fae5"
      : status === "in-progress"
      ? "#fef9c3"
      : "#fee2e2"};
`;

const Note = styled.li`
  margin-bottom: 8px;
  padding: 8px;
  background: #f3f4f6;
  border-radius: 4px;
`;

const StudentDetails: React.FC<IStudentDetails> = (props) => {
  const { id, name, email, progress, attendance, notes, onBack } = props;
  return (
    <Container>
      <Header>
        <h2>{name}</h2>
        <button onClick={onBack}>← חזור</button>
      </Header>

      <p>
        <strong>אימייל:</strong> {email}
      </p>

      <Section>
        <h3>סטטוס כללי</h3>
        {Object.entries(progress).map(([key, val]) => (
          <ProgressBox key={key} status={val.status}>
            <strong>{key.toUpperCase()}:</strong> {val.progress}%
          </ProgressBox>
        ))}
      </Section>

      <Section>
        <h3>נוכחות</h3>
        <ul>
          {attendance.map((a, i) => (
            <li key={i}>
              {a.lessonName} – {a.attended ? "✅ היה" : "❌ לא היה"}{" "}
              {a.needsReview && <strong> (צריך חיזוק)</strong>}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h3>הערות מהתלמיד</h3>
        <ul>
          {notes.length > 0 ? (
            notes.map((n, i) => <Note key={i}>{n}</Note>)
          ) : (
            <p>אין הערות</p>
          )}
        </ul>
      </Section>
    </Container>
  );
};

export default StudentDetails;
