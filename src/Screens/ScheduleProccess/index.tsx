import { FC, useContext, useEffect, useState } from "react";
import { createItem, Endpoints } from "../../api/api";
import { UserContext } from "../../Contexts/User.context";
import { useNavigate } from "react-router-dom";

enum Step {
  Start,
  PickDate,
  SelectHour,
}

export const ScheduleProccessScreen = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [step, setStep] = useState(0);
  const nextStep = () => setStep((prev) => ++prev);
  const prevStep = () => setStep((prev) => --prev);
  // Function to handle date change
  const handleDateChange = (event: any) => {
    setSelectedDate(event.target.value);
    nextStep();
  };
  const goToFirstStep = () => setStep(Step.Start);
  const handleScheduleLesson = (time: any) => {
    // create meeting
    createItem(Endpoints.Meeting, {
      time,
      day: selectedDate,
      user_id: user?._id,
    });
    // go back to screen
    navigate("/");
  };
  const renderStep = () => {
    switch (step) {
      case Step.Start:
        return <FirstStep nextStep={nextStep} />;
      case Step.PickDate:
        return <DatePicker handleDateChange={handleDateChange} />;
      case Step.SelectHour:
        return (
          <DisplayHours
            back={prevStep}
            selectedDate={selectedDate}
            handleScheduleLesson={handleScheduleLesson}
          />
        );
      default:
        goToFirstStep();
        break;
    }
  };

  return <div>{renderStep()}</div>;
};

const FirstStep: FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ textAlign: "start", cursor: "pointer", marginBottom: "5rem" }}
        onClick={() => navigate("/")}
      >
        X
      </div>
      <p>Select your preferred lesson</p>
      <button style={buttonStyle} onClick={nextStep}>
        Schedule
      </button>
    </>
  );
};

const DatePicker: FC<{
  handleDateChange: (e: any) => void;
}> = ({ handleDateChange }) => {
  const [selectedDate, setSelectedDate] = useState("");
  // List of disabled dates

  const disabledDates = ["2024-03-11", "2024-03-15", "2024-03-25"];
  const isDayFullyBooked = (day: string) => disabledDates.includes(day);

  const handleSelectedDate = (e: any) => {
    const day = e.target.value;
    if (isDayFullyBooked(day)) {
      setSelectedDate((prev) => e.target.value);
      return;
    }
    handleDateChange(e);
  };

  return (
    <div style={layoutWrapper}>
      <div>
        <label htmlFor='date'>Select a Date: </label>
        <input
          type='date'
          id='date'
          name='date'
          value={selectedDate}
          onChange={handleSelectedDate}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      {isDayFullyBooked(selectedDate) && <FullyBookedDay />}
    </div>
  );
};

const DisplayHours: FC<{
  selectedDate: string;
  handleScheduleLesson: (time: any) => void;
  back: () => void;
}> = ({ selectedDate, handleScheduleLesson, back }) => {
  const [hours, setHours] = useState<Array<string>>([]);
  const [selectedHour, setSelectedHour] = useState("");

  useEffect(() => {
    setHours(getHours(selectedDate));
    return () => {
      setHours([]);
    };
  }, [selectedDate]);

  const handleClick = ({ target: { value } }: any) => {
    setSelectedHour(value);
  };

  if (!hours.length) return <></>;

  return (
    <div style={layoutWrapper}>
      <div>
        <div style={{ textAlign: "start", cursor: "pointer" }} onClick={back}>
          Back
        </div>
        Select Hour:{" "}
        <select onChange={handleClick}>
          {hours.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>
      </div>
      {selectedHour && (
        <div>
          Time: <span>{selectedHour}</span>
        </div>
      )}
      {selectedHour && (
        <button
          style={buttonStyle}
          onClick={() => handleScheduleLesson(selectedHour)}
        >
          Schedule
        </button>
      )}
    </div>
  );
};

const FullyBookedDay = () => {
  return (
    <>
      <p>
        Unfortunately this date was fully booked.
        <br /> Please choose another date.
      </p>
    </>
  );
};

const buttonStyle = {
  padding: "1rem 2rem",
  borderRadius: "4px",
  cursor: "pointer",
};

const layoutWrapper: any = {
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
  gap: "1rem",
};

const getHours = (day: any) => {
  var result = []; // Results will go here
  var selectedDayHours = new Date(day).getHours(); // Get current hour of the day

  // Loop from current hour number to 23
  for (var i = selectedDayHours; i < 24; i++) {
    result.push(i + ":00"); // Put loop counter into array with "00" next to it
  }

  return result;
};
