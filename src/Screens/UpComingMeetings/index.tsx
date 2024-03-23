enum MeetingColor {
  Ready = "white",
  NotTime = "grey",
}
interface Meeting {
  day: string;
  time: string;
}
const meetings: Array<Meeting> = [
  { day: "Thu", time: "14:00" },
  { day: "Fri", time: "15:00" },
  { day: "Sat", time: "22:00" },
  { day: "Sun", time: "12:00" },
  { day: "Fri", time: "00:00" },
  { day: "Fri", time: "19:00" },
];

function formatDayToCustom(date: Date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = date.getDay();
  const day = days[dayIndex];

  return day;
}

const handleJoin = (meeting: Meeting) => () => {
  if (!isCurrentTimeMeetingTime(meeting)) {
    // window.location.reload();
    return;
  }

  const LINK =
    "https://us05web.zoom.us/j/6740291247?pwd=K7dQgvGE6DUTt7nlhLT3stoVdmxLgZ.1";
  window.open(LINK)?.focus();
};

/**  Calculate if the current time is within 80 minutes before the end of the hour */
const isWithinMinutesBeforeEndOfHourRage = (time: any): boolean => {
  const now = new Date();
  const meetingTime = new Date();
  const [hours, minutes] = time.split(":");
  meetingTime.setHours(parseInt(hours));
  meetingTime.setMinutes(parseInt(minutes));

  // Calculate the time 10 minutes before the meeting
  const tenMinutesBeforeMeeting = new Date(meetingTime);
  tenMinutesBeforeMeeting.setMinutes(meetingTime.getMinutes() - 10);

  // Calculate the time 60 minutes after the meeting
  const sixtyMinutesAfterMeeting = new Date(meetingTime);
  sixtyMinutesAfterMeeting.setMinutes(meetingTime.getMinutes() + 60);

  // Check if the current time is within the specified range
  const isInRange =
    now >= tenMinutesBeforeMeeting && now <= sixtyMinutesAfterMeeting;
  return isInRange;
};

const isCurrentTimeMeetingTime = ({ day, time }: Meeting): boolean => {
  const now = new Date();

  // Example usage:
  const currentDay = formatDayToCustom(now);

  return currentDay === day && isWithinMinutesBeforeEndOfHourRage(time);
};

const meeetingStyle = (meeting: Meeting) => {
  const baseStyle: any = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "1rem",
    minWidth: "30vw",

    cursor: "pointer",
    border: "1px solid",
  };
  if (isCurrentTimeMeetingTime(meeting)) return baseStyle;

  return {
    ...baseStyle,
    color: MeetingColor.NotTime,
  };
};

export const UpComingMeetings = () => {
  return (
    <>
      <div id="Paris" className="tabcontent">
        <div>
          {meetings.map(({ day, time }, key) => (
            <div
              key={key}
              style={{
                ...meeetingStyle({ day, time }),
              }}
            >
              <div>
                {day}, {time}
              </div>

              <div>
                <span onClick={handleJoin({ day, time })}>Join</span> |{" "}
                <span>Copy Link</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
