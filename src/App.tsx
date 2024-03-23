import "./App.css";
import { Meetings } from "./Screens/Meetings";
import { ScheduleProccessScreen } from "./Screens/ScheduleProccess";

const BASE_URL = "";
const ACCESS_TOKEN = "user_access_token"; // OAuth access token
const USER_ID = "your_user_id"; // User ID of the user creating the meeting
const MEETING_ID = "918 740 4680";
const ZOOM_LINK =
  "https://us04web.zoom.us/j/9187404680?pwd=QzRNOFF5OG9QS2VSV2tKcmpuVXVQUT09";
const meetingDetails = {
  topic: "Meeting Topic",
  type: 2, // 1 for instant meeting, 2 for scheduled meeting
  start_time: "2024-03-07T10:00:00",
  duration: 60, // Meeting duration in minutes
  timezone: "America/New_York", // Timezone of the meeting
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Meetings />
      </header>
    </div>
  );
}

export default App;
