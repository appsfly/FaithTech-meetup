import { useContext, useEffect, useState } from "react";
import { Endpoints, getItemById } from "../../api/api";
import { UserContext } from "../../Contexts/User.context";

enum MeetingColor {
  Ready = "black",
  NotTime = "grey",
}

interface Meeting {
  day: string;
  time: string;
}

const useMockData = true; // Set this to false when the endpoint is ready

const getMeetings = async (userId: string = "") => {
  if (useMockData) {
    // Simulating a delay to mimic an API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock data
    return [
      { day: "Mon", time: "18:50" },
      { day: "Tue", time: "11:00" },
      { day: "Wed", time: "14:30" },
      { day: "Thu", time: "10:00" },
      { day: "Fri", time: "16:00" },
      { day: "Sat", time: "15:00" },
    ];
  }
  return [];
  // // Real API call
  // return getItemById(Endpoints.Meeting, userId);
};

export const UpComingMeetings = () => {
  const { user } = useContext(UserContext);
  const [meetings, setMeetings] = useState<Array<Meeting>>([]);

  useEffect(() => {
    (async () => {
      const res: Array<Meeting> = await getMeetings();

      // Filter out past meetings
      const filteredMeetings = res.filter(({ day, time }) =>
        isMeetingInFuture(day, time)
      );

      const formattedMeetings = filteredMeetings.map(({ day, time }) =>
        getTodayLessons(day, time)
      );
      console.log({ formattedMeetings });
      setMeetings(formattedMeetings);
    })();
  }, [user?._id]);

  return (
    <div className='tabcontent'>
      <div>
        {meetings
          .filter(({ time }) => {
            const [hours, minutes] = time.split(":").map(Number);
            const meetingTime = new Date();
            meetingTime.setHours(hours, minutes, 0, 0);

            return meetingTime.getTime() >= new Date().getTime();
          })
          .map(({ day, time }, index) => (
            <div
              key={`${day}-${time}-${index}`}
              style={meetingStyle({ day, time })}
            >
              <div>{time}</div>
              <div>
                <span onClick={() => handleJoin({ day, time })}>Join</span> |{" "}
                <span>Copy Link</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const getTodayLessons = (d: string, t: string): Meeting => {
  console.log({ d });
  const today = new Date(d);

  return {
    day: formatDayToCustom(today),
    time: t,
  };
};

function formatDayToCustom(date: Date): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

const handleJoin = (meeting: Meeting) => () => {
  if (!isCurrentTimeMeetingTime(meeting)) return;

  const LINK =
    "https://us05web.zoom.us/j/6740291247?pwd=K7dQgvGE6DUTt7nlhLT3stoVdmxLgZ.1";
  window.open(LINK)?.focus();
};

const isWithinMinutesBeforeEndOfHourRange = (time: string): boolean => {
  const now = new Date();
  const [hours, minutes] = time.split(":").map(Number);
  const meetingTime = new Date(now);
  meetingTime.setHours(hours, minutes, 0, 0);

  const startRange = new Date(meetingTime);
  startRange.setMinutes(meetingTime.getMinutes() - 10);

  const endRange = new Date(meetingTime);
  endRange.setMinutes(meetingTime.getMinutes() + 60);

  return now >= startRange && now <= endRange;
};

const isCurrentTimeMeetingTime = ({ day, time }: Meeting): boolean => {
  const now = new Date();

  return (
    formatDayToCustom(now) === day && isWithinMinutesBeforeEndOfHourRange(time)
  );
};

const isMeetingInFuture = (day: string, time: string): boolean => {
  const now = new Date();
  const meetingDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(
    day
  );

  const [hours, minutes] = time.split(":").map(Number);
  const meetingDate = new Date();
  meetingDate.setDate(now.getDate() + ((meetingDay - now.getDay() + 7) % 7));
  meetingDate.setHours(hours, minutes, 0, 0);

  return meetingDate >= now;
};

const meetingStyle = (meeting: Meeting): any => {
  const baseStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "1rem",
    minWidth: "30vw",
    color: MeetingColor.Ready,
    cursor: "pointer",
    border: "1px solid",
  };
  console.log({ meeting });
  const itis = isCurrentTimeMeetingTime(meeting);

  return itis
    ? baseStyle
    : { ...baseStyle, opacity: "0.5", color: MeetingColor.NotTime };
};
