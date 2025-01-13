import { FC } from "react";
import "./style.css"; // Importing a CSS file for styling

interface Props {
  title: string;
  description: string;
  progressPercent: number;
}

export const ProgressCard: FC<Props> = (props) => {
  const { title = "", description = "", progressPercent = 0 } = props;
  return (
    <div className='wrapper'>
      <div className='title'>Goal Progress: {title}</div>
      <li className='topic-item'>
        <div className='progress-bar-wrapper'>
          <div
            className='progress-bar'
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </li>
      <div className='description'>{description}</div>
    </div>
  );
};
