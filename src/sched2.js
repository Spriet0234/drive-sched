import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "./index.css";

const hours = [...Array(12).keys()]
  .map((i) => {
    const value = i + 9;
    const label =
      (value % 12 || 12) + (value < 12 || value === 24 ? " AM" : " PM");
    return { value, label };
  })
  .filter((i) => i.value <= 20);

export default function Sched2() {
  const [date, setDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState("Time");
  const [hour, setHour] = useState(0);

  return (
    <div
      style={{
        width: "1082px",
        backgroundColor: "#113B7A1A",
        height: "335px",
        borderRadius: "30px",

        position: "relative",
        justifyContent: "start",
        alignContent: "space-between",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          color: "#00095B",
          fontWeight: "bold",
          fontSize: 25,
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        Schedule Test Drive Appointment
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
              fontSize: 22,
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
              <div
                style={{
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
                }}
              >
                <div style={{ color: "gray" }}>Thursday, 7/13</div>
                <div>12:00 pm</div>
              </div>
              <div
                style={{
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
                }}
              >
                <div style={{ color: "gray" }}>Thursday, 7/13</div>
                <div style={{ fontSize: 18 }}>12:00 pm</div>
              </div>
              <div
                style={{
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
                }}
              >
                <div style={{ color: "gray" }}>Thursday, 7/13</div>
                <div style={{ fontSize: 18 }}>12:00 pm</div>
              </div>
            </div>
            <div>
              <div
                style={{
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
                }}
              >
                <div style={{ color: "gray" }}>Thursday, 7/13</div>
                <div style={{ fontSize: 18 }}>12:00 pm</div>
              </div>
              <div
                style={{
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
                }}
              >
                <div style={{ color: "gray" }}>Thursday, 7/13</div>
                <div style={{ fontSize: 18 }}>12:00 pm</div>
              </div>
              <div
                style={{
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
                }}
              >
                <div
                  style={{
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
                  }}
                >
                  <div style={{ color: "gray" }}>Thursday, 7/13</div>
                  <div style={{ fontSize: 18 }}>12:00 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#00095B",
              fontSize: 22,
              fontWeight: 500,
              marginBottom: 20,
            }}
          >
            Look up date and time
          </div>
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div>
            <Select
              styles={{
                container: (provided) => ({ ...provided, width: "100%" }),
              }} // Add this line
              options={hours}
              value={selectedHour}
              onChange={setSelectedHour}
            />
          </div>
          <div style={{ width: 500 }}>
            <button
              style={{
                color: "white",
                backgroundColor: "#00095B",
                border: "none",
                borderRadius: "5px",
                paddingHorizontal: "10px",
                paddingTop: 5,
                paddingRight: 10,
                paddingLeft: 10,
                paddingBottom: 10,
                marginTop: 20,
                fontSize: 18,
                width: 300,
              }}
            >
              Search Appointments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
