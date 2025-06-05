// screens/CourseTopicsScreen.tsx
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { markTopicComplete, updateCourseProgress } from "../../api/api";
import { UserContext } from "../../Contexts/User.context";
// data/htmlTopics.ts
interface Topic {
  id: any;
  title: string;
  category?: string;
}
const courseTopics: Record<string, Array<Topic>> = {
  html: [
    { id: 1, title: "Intro to HTML" },
    { id: 2, title: "HTML Document Structure" },
    { id: 3, title: "Headings & Paragraphs" },
    { id: 4, title: "Links and Images" },
    { id: 5, title: "Lists (ul, ol)" },
    { id: 6, title: "Forms and Inputs" },
    { id: 7, title: "Semantic HTML" },
    { id: 8, title: "Tables" },
    { id: 9, title: "HTML5 New Tags" },
    { id: 10, title: "Practice Project: Personal Profile Page" },
  ],
  css: [
    { id: 1, title: "Intro to CSS" },
    { id: 2, title: "Selectors and Specificity" },
    { id: 3, title: "Colors and Units" },
    { id: 4, title: "Box Model" },
    { id: 5, title: "Flexbox" },
    { id: 6, title: "Grid Layout" },
    { id: 7, title: "Positioning" },
    { id: 8, title: "Responsive Design (Media Queries)" },
    { id: 9, title: "Transitions and Animations" },
    { id: 10, title: "Practice Project: Styled Profile Page" },
  ],
  js: [
    { id: 1, title: "Intro to JavaScript" },
    { id: 2, title: "Variables and Data Types" },
    { id: 3, title: "Functions" },
    { id: 4, title: "Conditionals and Loops" },
    { id: 5, title: "Arrays and Objects" },
    { id: 6, title: "DOM Manipulation" },
    { id: 7, title: "Events" },
    { id: 8, title: "Async JS: Callbacks, Promises" },
    { id: 9, title: "Fetch API" },
    { id: 10, title: "Practice Project: Interactive Quiz" },
  ],
  ["project development"]: [
    { id: 1, title: "Intro to Projects" },
    { id: 2, title: "Planning & Wireframes" },
    { id: 3, title: "Folder Structure & Assets" },
    { id: 4, title: "Version Control (Git/GitHub)" },
    { id: 5, title: "Working with APIs" },
    { id: 6, title: "Error Handling" },
    { id: 7, title: "Code Review & Debugging" },
    { id: 8, title: "Deployment Basics" },
    { id: 9, title: "Final Project Work" },
    { id: 10, title: "Presentation & Feedback" },
  ],
  development: [
    {
      id: 1,
      title: "Build a Personal Portfolio Website",
      category: "Frontend",
    },
    { id: 2, title: "Create a Responsive Landing Page", category: "Frontend" },
    {
      id: 3,
      title: "Develop a Todo App with Local Storage",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Build a Blog with Markdown Support",
      category: "Frontend",
    },
    { id: 5, title: "Create a Weather App using an API", category: "Frontend" },
    { id: 6, title: "Build a CRUD App with Firebase", category: "Fullstack" },
    {
      id: 7,
      title: "Develop a Chat App using WebSockets",
      category: "Fullstack",
    },
    { id: 8, title: "Create a Task Manager with Auth", category: "Fullstack" },
    {
      id: 9,
      title: "Integrate a Payment Gateway (like Stripe)",
      category: "Fullstack",
    },
    {
      id: 10,
      title: "Build a Movie Search App using TMDB API",
      category: "Frontend",
    },
    {
      id: 11,
      title: "Deploy a Fullstack App to Vercel / Netlify",
      category: "DevOps",
    },
    {
      id: 12,
      title: "Version Control Project with Git & GitHub",
      category: "Workflow",
    },
    {
      id: 13,
      title: "Create a RESTful API with Express.js",
      category: "Backend",
    },
    { id: 14, title: "Design a MongoDB Data Model", category: "Backend" },
    {
      id: 15,
      title: "Setup CI/CD Pipeline for a React App",
      category: "DevOps",
    },
  ],
};

const Container = styled.div`
  padding: 20px;
`;

const TopicCard = styled.div<{ completed: boolean }>`
  background-color: ${({ completed }) => (completed ? "#d1fae5" : "#f3f4f6")};
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: #10b981;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #059669;
  }
`;

const CourseTopicsScreen = () => {
  const { courseName = "" } = useParams<{ courseName: string }>();
  const { user } = useContext(UserContext);

  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted((prev) => user?.progress![courseName]?.completedTopics || []);
  }, [user?.progress![courseName]?.completedTopics.length]);

  const toggleCompleted = (id: string) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    (async () => {
      await markTopicComplete(user?.email!, courseName, completed);
      await updateCourseProgress(
        user?.email!,
        courseName,
        completed.length * 10
      );
    })();
  }, [completed.length]);

  const topics = useMemo(() => courseTopics[courseName], [courseName]);
  return (
    <Container>
      <h2>📘 HTML Course Topics</h2>
      {topics.map((topic) => (
        <TopicCard key={topic.id} completed={completed.includes(topic.id)}>
          <span>{topic.title}</span>
          <Button onClick={() => toggleCompleted(topic.id)}>
            {completed.includes(topic.id) ? "Undo" : "Mark as Done"}
          </Button>
        </TopicCard>
      ))}
    </Container>
  );
};

export default CourseTopicsScreen;
