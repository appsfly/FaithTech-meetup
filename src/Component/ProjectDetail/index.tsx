import { FC } from "react";
import { projects } from "../../mock/projets";
import { H2 } from "../../Component/Atoms/h2";
import { P } from "../Atoms/P";

interface Props {
  id: number;
  backClick: () => void;
}
export const ProjectDetail: FC<Props> = ({ id, backClick }) => {
  const { name, description, difficulty, tasks, imageName = "" } = projects[id];

  if (!imageName) {
    return <div>Go back your not ready...</div>;
  }
  const img = require(`../../assets/${imageName}`);
  return (
    <div style={{ padding: 10, gap: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: 10,
        }}
      >
        <button onClick={backClick}>← back</button>
        <H2 style={{ fontSize: "2rem" }}>Project: {name}</H2>
        <div></div>
      </div>
      <H2 style={{ fontSize: "1.5rem" }}>Difficulty: {difficulty}</H2>
      <P style={{ fontSize: "1rem" }}>Description: {description}</P>

      <h3>Process:</h3>
      <ul>
        {tasks.map((t) => (
          <li>{t.description}</li>
        ))}
      </ul>
      <img src={img} alt='' style={{ marginTop: 20, width: "100%" }} />
    </div>
  );
};
