// screens/CourseTopicsScreen.tsx
import {
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { markTopicComplete, updateCourseProgress } from "../../api/api";
import { UserContext } from "../../Contexts/User.context";
import { H2 } from "../../Component/Atoms/h2";
// data/htmlTopics.ts
interface Topic {
  id: any;
  title: string;
  category?: string;
}
interface ExtraInfo {
  course: string;
  topicId: number;
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
        <AccourdionCard
          key={topic.id}
          toggleCompleted={toggleCompleted}
          topic={topic}
          completed={completed.includes(topic.id)}
        />
      ))}
    </Container>
  );
};

export default CourseTopicsScreen;

interface AccourdionCardProps {
  topic: Topic;
  completed: boolean;
  toggleCompleted: (id: string) => void;
}
const AccourdionCard: FC<AccourdionCardProps> = (props) => {
  const { topic, completed, toggleCompleted } = props;
  const { courseName = "" } = useParams<{ courseName: string }>();

  const handleButtonMarkClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleCompleted(topic.id);
  };
  const Topic = (
    <TopicCard key={topic.id} completed={completed}>
      <span>{topic.title}</span>
      <Button onClick={handleButtonMarkClick}>
        {completed ? "Undo" : "Mark as Done"}
      </Button>
    </TopicCard>
  );
  const AccourdionTopic = WithAccourdionBehaviour(Topic, {
    course: courseName,
    topicId: topic.id,
  });
  return <>{AccourdionTopic}</>;
};

const courseSubTopics: Record<string, Array<any>> = {
  html: [
    {
      id: 1,
      subtopics: [
        "What is HTML?",
        "History and Evolution",
        "Basic Tags Overview",
      ],
      references: [
        {
          name: "MDN: Introduction to HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "W3Schools: HTML Basics",
          link: "https://www.w3schools.com/html/html_basic.asp",
        },
      ],
    },
    {
      id: 2,
      subtopics: [
        "Doctype Declaration",
        "HTML Skeleton",
        "Head and Body Elements",
      ],
      references: [
        {
          name: "MDN: HTML Document Structure",
          link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure",
        },
      ],
    },
    {
      id: 3,
      subtopics: [
        "Heading Tags (h1–h6)",
        "Paragraph Tag",
        "Line Breaks and Horizontal Rules",
      ],
      references: [
        {
          name: "W3Schools: HTML Headings",
          link: "https://www.w3schools.com/html/html_headings.asp",
        },
        {
          name: "W3Schools: HTML Paragraphs",
          link: "https://www.w3schools.com/html/html_paragraphs.asp",
        },
      ],
    },
    {
      id: 4,
      subtopics: [
        "Anchor Tags and href",
        "Image Tag and Attributes",
        "Opening Links in New Tabs",
      ],
      references: [
        {
          name: "MDN: Links",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
        },
        {
          name: "MDN: Images",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
        },
      ],
    },
    {
      id: 5,
      subtopics: [
        "Unordered Lists",
        "Ordered Lists",
        "Nested Lists and List Styles",
      ],
      references: [
        {
          name: "MDN: Lists",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
        },
      ],
    },
    {
      id: 6,
      subtopics: ["Form Tag Basics", "Input Types", "Labels and Accessibility"],
      references: [
        {
          name: "MDN: Forms",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
        },
      ],
    },
    {
      id: 7,
      subtopics: [
        "Semantic Elements (header, nav, footer)",
        "Why Semantics Matter",
        "Improving Accessibility with Semantics",
      ],
      references: [
        {
          name: "MDN: Semantics",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
        },
      ],
    },
    {
      id: 8,
      subtopics: [
        "Table Structure: thead, tbody, tfoot",
        "td, th, tr Elements",
        "Table Attributes and Styling Basics",
      ],
      references: [
        {
          name: "W3Schools: HTML Tables",
          link: "https://www.w3schools.com/html/html_tables.asp",
        },
      ],
    },
    {
      id: 9,
      subtopics: [
        "HTML5 Structural Tags",
        "Multimedia Tags: audio, video",
        "New Form Input Types",
      ],
      references: [
        {
          name: "MDN: HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
        },
      ],
    },
    {
      id: 10,
      subtopics: [
        "Build a Personal Profile Page",
        "Use of Semantic Tags",
        "Including Links, Images, Lists, and Forms",
      ],
      references: [
        {
          name: "MDN: HTML Projects",
          link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_a_simple_page",
        },
      ],
    },
  ],

  css: [
    {
      id: 1,
      subtopics: [
        "What is CSS?",
        "CSS Syntax and Selectors",
        "Inline, Internal, and External Styles",
      ],
      references: [
        {
          name: "MDN: CSS Basics",
          link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        {
          name: "W3Schools: CSS Introduction",
          link: "https://www.w3schools.com/css/css_intro.asp",
        },
      ],
    },
    {
      id: 2,
      subtopics: [
        "Types of Selectors",
        "Specificity Hierarchy",
        "Combining Selectors",
      ],
      references: [
        {
          name: "MDN: Selectors",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
        },
      ],
    },
    {
      id: 3,
      subtopics: [
        "Color Formats (Hex, RGB, HSL)",
        "Units (px, %, em, rem)",
        "Custom Properties (CSS Variables)",
      ],
      references: [
        {
          name: "MDN: Color",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/color",
        },
        {
          name: "W3Schools: CSS Units",
          link: "https://www.w3schools.com/cssref/css_units.asp",
        },
      ],
    },
    {
      id: 4,
      subtopics: [
        "Understanding Content, Padding, Border, Margin",
        "Box Sizing: border-box vs content-box",
        "Inspecting Layouts with DevTools",
      ],
      references: [
        {
          name: "MDN: Box Model",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
        },
      ],
    },
    {
      id: 5,
      subtopics: [
        "Flex Container & Flex Items",
        "Main Axis vs Cross Axis",
        "Aligning and Justifying Items",
      ],
      references: [
        {
          name: "CSS Tricks: A Complete Guide to Flexbox",
          link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        },
      ],
    },
    {
      id: 6,
      subtopics: [
        "Grid Container & Items",
        "Grid Template Areas",
        "Implicit vs Explicit Grids",
      ],
      references: [
        {
          name: "MDN: CSS Grid Layout",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
        },
      ],
    },
    {
      id: 7,
      subtopics: [
        "Static, Relative, Absolute, Fixed, Sticky",
        "Z-index and Overlapping Elements",
        "Positioning Techniques in Layouts",
      ],
      references: [
        {
          name: "W3Schools: CSS Position",
          link: "https://www.w3schools.com/css/css_positioning.asp",
        },
      ],
    },
    {
      id: 8,
      subtopics: [
        "Media Queries Syntax",
        "Breakpoints and Responsive Design",
        "Mobile-First Design Approach",
      ],
      references: [
        {
          name: "MDN: Responsive Design",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        },
      ],
    },
    {
      id: 9,
      subtopics: [
        "Transitions with duration and easing",
        "Keyframes and @keyframes Rule",
        "Creating Animations with CSS",
      ],
      references: [
        {
          name: "MDN: Transitions",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
        },
        {
          name: "MDN: Animations",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations",
        },
      ],
    },
    {
      id: 10,
      subtopics: [
        "Apply Styling to HTML Profile Page",
        "Use Flexbox or Grid for Layout",
        "Implement Hover Effects and Media Queries",
      ],
      references: [
        {
          name: "MDN: Project Example with CSS",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction",
        },
      ],
    },
  ],
  js: [
    {
      id: 1,
      subtopics: [
        "What is JavaScript?",
        "Where JS Runs (Browser, Node.js)",
        "Connecting JS to HTML",
      ],
      references: [
        {
          name: "MDN: JavaScript Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
        },
        {
          name: "W3Schools: JS Introduction",
          link: "https://www.w3schools.com/js/js_intro.asp",
        },
      ],
    },
    {
      id: 2,
      subtopics: [
        "var, let, const",
        "Primitive Data Types",
        "Type Coercion and Type Checking",
      ],
      references: [
        {
          name: "MDN: Values and Variables",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables",
        },
      ],
    },
    {
      id: 3,
      subtopics: [
        "Declaring and Calling Functions",
        "Parameters and Return Values",
        "Function Expressions and Arrow Functions",
      ],
      references: [
        {
          name: "MDN: Functions",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        },
      ],
    },
    {
      id: 4,
      subtopics: [
        "if-else, switch",
        "for, while, do-while loops",
        "Loop control: break, continue",
      ],
      references: [
        {
          name: "MDN: Control Flow and Loops",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling",
        },
      ],
    },
    {
      id: 5,
      subtopics: [
        "Creating and Accessing Arrays",
        "Array Methods (map, filter, etc.)",
        "Object Literals and Properties",
      ],
      references: [
        {
          name: "MDN: Arrays",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        },
        {
          name: "MDN: Objects",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
        },
      ],
    },
    {
      id: 6,
      subtopics: [
        "Selecting Elements (getElementById, querySelector)",
        "Changing DOM Content",
        "Creating and Appending Elements",
      ],
      references: [
        {
          name: "MDN: Introduction to the DOM",
          link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
        },
      ],
    },
    {
      id: 7,
      subtopics: [
        "addEventListener",
        "Mouse & Keyboard Events",
        "Event Object and Delegation",
      ],
      references: [
        {
          name: "MDN: Events",
          link: "https://developer.mozilla.org/en-US/docs/Web/Events",
        },
      ],
    },
    {
      id: 8,
      subtopics: [
        "Synchronous vs Asynchronous",
        "Callbacks and Callback Hell",
        "Promises and .then/.catch",
      ],
      references: [
        {
          name: "MDN: Promises",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
        },
      ],
    },
    {
      id: 9,
      subtopics: [
        "What is Fetch API?",
        "Making GET and POST Requests",
        "Handling JSON Responses",
      ],
      references: [
        {
          name: "MDN: Fetch API",
          link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        },
      ],
    },
    {
      id: 10,
      subtopics: [
        "Designing a Quiz Interface",
        "Using JS for Dynamic Questions",
        "Storing and Checking Answers",
      ],
      references: [
        {
          name: "FreeCodeCamp: Quiz App Tutorial",
          link: "https://www.freecodecamp.org/news/build-a-quiz-app-with-html-css-and-javascript/",
        },
      ],
    },
  ],
};

const WithAccourdionBehaviour = (Topc: any, accInfo: ExtraInfo) => {
  const { course, topicId } = accInfo;
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [{ notes, note }, setNote] = useState({
    note: "",
    notes: [] as Array<string>,
  });
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleChange = (e: any) => {
    setNote((prev) => ({ ...prev, note: e.target.value }));
  };
  const handleAddToNotes = () => {
    //  set the update as a low priorit
    startTransition(() => {
      if (!note) return;
      setNote((prev) => ({
        ...prev,
        note: "",
        notes: [...prev.notes, prev.note],
      }));
    });
  };
  const [courseSubTopic = null] = courseSubTopics[course].filter(
    (sb) => sb.id == topicId
  );

  if (!courseSubTopic) return <>{Topc}</>;

  const { subtopics = [], references = [] } = courseSubTopic;

  return (
    <div>
      <div onClick={handleToggle}>{Topc}</div>
      {isOpen && (
        <AccourdionTopicWrapper>
          <AccourdionTopicSection>
            <H2>Subtopics</H2>
            <ul>
              {subtopics.map((sub: any) => (
                <li key={sub}>{sub}</li>
              ))}
            </ul>
          </AccourdionTopicSection>
          <AccourdionTopicSection>
            <H2>References</H2>
            <ul>
              {references.map((ref: any) => (
                <li key={ref.name}>
                  <a style={{ textDecorationLine: "none" }} href={ref.link}>
                    {ref.name}
                  </a>
                </li>
              ))}
            </ul>
          </AccourdionTopicSection>
          <AccourdionTopicSection>
            <H2>Your Notes</H2>
            <ul>
              {notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
              {isPending ? "Adding..." : null}
              <li>
                <div style={{ display: "flex" }}>
                  <Input
                    value={note}
                    onChange={handleChange}
                    type='text'
                    placeholder='Write your thoughts or key takeaways...'
                  />
                  <button onClick={handleAddToNotes}>Add Note</button>
                </div>
              </li>
            </ul>
          </AccourdionTopicSection>
        </AccourdionTopicWrapper>
      )}
    </div>
  );
};

const AccourdionTopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const AccourdionTopicSection = styled.div`
  text-align: start;

  & > ul {
    margin: 10px 0 0 0;
  }
`;

const Input = styled.input`
  border: none;
  width: fit-content;
  font-size: 1.5rem;
`;
