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
import { breakpoints } from "../../theme/breakpoints";
import { courseSubTopics } from "../../mock/courseSubTopics";
import { courseTopics } from "../../mock/courseTopics";
// data/htmlTopics.ts
export interface Topic {
  id: any;
  title: string;
  category?: string;
}
interface ExtraInfo {
  course: string;
  topicId: number;
}

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
    <div style={{ marginBottom: 10 }}>
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
                <InputWrapper>
                  <Input
                    value={note}
                    onChange={handleChange}
                    type='text'
                    placeholder='Write your thoughts or key takeaways...'
                  />
                  <button onClick={handleAddToNotes}>Add Note</button>
                </InputWrapper>
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

const InputWrapper = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;
const Input = styled.input`
  border: none;
  width: 25%;
  font-size: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;
