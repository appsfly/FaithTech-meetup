import styled from "styled-components";
import { H2 } from "../../Component/Atoms/h2";
import { P } from "../../Component/Atoms/P";
import { projects } from "../../mock/projets";
import { useState } from "react";
import { ProjectDetail } from "../../Component/ProjectDetail";

export const ProjectsScreen = () => {
  const [selectedTask, setSelectedTask] = useState<null | number>(null);
  const handleSetSelectedTaskId = (id: number) => () =>
    setSelectedTask((prev) => id);

  return (
    <Wrapper>
      {selectedTask !== null ? (
        <ProjectDetail id={selectedTask} />
      ) : (
        projects.map(({ name, description, icon, difficulty }, index) => (
          <CardWrapper onClick={handleSetSelectedTaskId(index)}>
            <CardRightSection>
              <i className={icon}></i>
            </CardRightSection>
            <CardLeftSection>
              <H2>{name}</H2>
              <P>{description}</P>
              <P>{difficulty}</P>
            </CardLeftSection>
          </CardWrapper>
        ))
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  margin: auto;
  padding: 2%;
`;

const CardWrapper = styled.div`
  flex: 1 1 200px;

  padding: 10px;
  display: flex;

  gap: 30px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
`;
const CardRightSection = styled.div``;
const CardLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
