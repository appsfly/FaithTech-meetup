import React, { useContext } from "react";
import "./App.css";
import { LoginScreen } from "./Screens/LoginScreen";
import { Meetings } from "./Screens/Meetings";
import { ScheduleProccessScreen } from "./Screens/ScheduleProccess";
import { UserContext } from "./Contexts/User.context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHeader from "./Component/AdminHeader";

import UsersDashboard from "./Component/UsersDashboard";
import CourseTopicsScreen from "./Screens/CourseTopicsScreen";
import Header from "./Component/StudentHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProjectsScreen } from "./Screens/Projects";

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

const ScreensWrapper = (Screen: any) => {
  return <div className='screens-style'>{<Screen />}</div>;
};

// Create a client
const queryClient = new QueryClient();

function App() {
  const { user } = useContext(UserContext);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <header className='App-header'>
          {!user ? (
            <LoginScreen />
          ) : user?.role == "admin" ? (
            <DashboardRouts />
          ) : (
            <ScreensRouts />
          )}
        </header>
      </div>
    </QueryClientProvider>
  );
}

const AppHeader = () => {
  const { user } = useContext(UserContext);

  if (!user) return <></>;

  if (user.role !== "admin") return <Header title={`Hello ${user.name}`} />;

  return (
    <React.Fragment>
      <AdminHeader />
    </React.Fragment>
  );
};
export default App;

const ScreensRouts = () => {
  // const MeetingsScreen = ScreensWrapper(Meetings);
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route index element={<Meetings />} />
        <Route path='/new' element={<ScheduleProccessScreen />} />
        <Route path='/projects' element={<ProjectsScreen />} />
        <Route path='/course/:courseName' element={<CourseTopicsScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

const DashboardRouts = () => {
  // const MeetingsScreen = ScreensWrapper(Meetings);
  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          {/* <Route index element={<ReactQuryExample />} /> */}
          <Route index element={<Meetings />} />
          <Route path='/new' element={<ScheduleProccessScreen />} />
          <Route path='/users' element={<UsersDashboard />} />
          <Route path='/projects' element={<ProjectsScreen />} />
          <Route path='/course/:courseName' element={<CourseTopicsScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
