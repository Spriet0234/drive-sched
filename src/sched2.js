import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "./index.css";

const getHours = (fromHour) => {
  return [...Array(24).keys()]
    .map((i) => {
      const value = i * 0.5 + fromHour;
      const hourPart = Math.floor(value);
      const minutePart = value % 1 > 0 ? 30 : 0;
      const label =
        (hourPart % 12 || 12) +
        ":" +
        (minutePart === 0 ? "00" : "30") +
        (hourPart < 12 || hourPart === 24 ? " AM" : " PM");
      return { value, label };
    })
    .filter((i) => i.value <= 20);
};

function formatDate(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = date.getMonth() + 1; // getMonth() returns 0-11, so we add 1 to make it 1-12
  const day = date.getDate();
  const weekday = days[date.getDay()]; // getDay() returns 0-6
  return `${weekday}, ${month}/${day}`;
}
const getNextSixHours = (fromHour) => {
  const hourPart = Math.floor(fromHour);
  const minutePart = fromHour % 1 >= 0.5 ? 30 : 0;
  const initialTime = hourPart + (minutePart === 30 ? 0.5 : 0);
  return [...Array(12).keys()]
    .map((i) => {
      const value = initialTime + i * 0.5;
      const hour = Math.floor(value);
      const minute = value % 1 > 0 ? 30 : 0;
      const label =
        (hour % 12 || 12) +
        ":" +
        (minute === 0 ? "00" : "30") +
        (hour < 12 || hour === 24 ? " AM" : " PM");
      return { value, label };
    })
    .filter((i) => i.value <= 20);
};

function HourComponent({ hour, selectedDate }) {
  const handleClick = () => {
    console.log(
      `Selected date and time: ${formatDate(selectedDate)} ${hour.label}`
    );
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        backgroundColor: "white",
        width: "250px",
        height: "65px",
        borderRadius: "5px",
        fontSize: "18px",
        marginBottom: 10,
        marginRight: 10,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <div style={{ color: "gray" }}>{formatDate(selectedDate)}</div>
      <div>{hour.label}</div>
    </div>
  );
}

export default function Sched2() {
  const [now, setNow] = useState(new Date());
  const [currentHour, setCurrentHour] = useState(now.getHours());
  const [pendingSelectedDate, setPendingSelectedDate] = useState(now);
  const [pendingSelectedHour, setPendingSelectedHour] = useState(null);

  const [date, setDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState("Time");
  const [hour, setHour] = useState(0);
  const [appts, setAppts] = useState([]);
  const [displayDate, setDisplayDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(now);
  const [availableHours, setAvailableHours] = useState(
    getHours(now.getHours())
  );
  function handleHourClick() {
    console.log(pendingSelectedDate + " " + pendingSelectedDate);
  }
  const hours = [...Array(24).keys()]
    .map((i) => {
      const value = i * 0.5 + currentHour;
      const hourPart = Math.floor(value);
      const minutePart = value % 1 >= 0.5 ? 30 : 0;
      const label =
        (hourPart % 12 || 12) +
        ":" +
        (minutePart === 0 ? "00" : "30") +
        (hourPart < 12 || hourPart === 24 ? " AM" : " PM");
      return { value, label };
    })
    .filter((i) => i.value < 20.5);

  useEffect(() => {
    const newNow = new Date();
    setNow(newNow);
    setCurrentHour(newNow.getHours() + newNow.getMinutes() / 60);
  }, []);

  useEffect(() => {
    const hourValue =
      selectedHour?.value ||
      (selectedDate.getDate() === now.getDate() ? currentHour : 9);
    setAvailableHours(getNextSixHours(hourValue));
  }, [selectedDate, now, currentHour, selectedHour]);

  const onSubmit = () => {
    setSelectedDate(pendingSelectedDate);
    setSelectedHour(pendingSelectedHour);
  };

  return (
    <div
      style={{
        width: "1082px",
        backgroundColor: "#113B7A1A",
        height: "375px",
        borderRadius: "30px",

        position: "relative",
        justifyContent: "start",
        alignContent: "space-between",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        marginBottom: 20,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          color: "#00095B",
          fontWeight: "bold",
          fontSize: 27,
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        Schedule a Test Drive Appointment
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",

            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#00095B",
              fontSize: 23,
              alignSelf: "start",
              fontWeight: 500,
            }}
          >
            Appointments available
          </div>
          <div style={{ alignSelf: "start", marginBottom: 20 }}>
            Select an appointment below
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {availableHours.slice(0, 6).map((hour, index) => (
                    <div style={{ flexBasis: "50%" }}>
                      <HourComponent
                        key={hour.value}
                        hour={hour}
                        selectedDate={selectedDate}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#00095B",
              fontSize: 23,
              fontWeight: 500,
              marginBottom: 41,
              alignSelf: "start",
            }}
          >
            Look up date and time
          </div>
          <div>
            <DatePicker
              selected={pendingSelectedDate}
              onChange={(date) => setPendingSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
            />
          </div>
          <div>
            <Select
              styles={customStyles}
              options={hours}
              value={pendingSelectedHour}
              onChange={setPendingSelectedHour}
            />
          </div>
          <div style={{ width: 500 }}>
            <button
              style={{
                paddingTop: 2,
                color: "white",
                backgroundColor: "#00095B",
                border: "none",
                borderRadius: 10,
                paddingHorizontal: "10px",
                paddingTop: 5,
                paddingRight: 10,
                paddingLeft: 10,
                paddingBottom: 10,
                marginTop: 20,
                fontSize: 18,
                width: 300,
              }}
              onClick={onSubmit}
            >
              Search Appointments
            </button>
          </div>
        </div>
      </div>
      <img
        src="/back.png"
        style={{
          alignSelf: "start",
          height: 22,
          marginTop: 10,
          marginLeft: 8,
        }}
      ></img>
    </div>
  );
}
const customStyles = {
  control: (provided) => ({
    ...provided,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Adjust the values as needed
  }),
};
