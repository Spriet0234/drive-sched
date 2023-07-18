import React, { useState } from "react";
export default function Sched3() {
  return (
    <div
      style={{
        width: "1082px",
        backgroundColor: "#113B7A1A",
        height: "335px",
        borderRadius: "30px",
        padding: 20,
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
        Your Appointment is confirmed
      </div>
      <div>
        A confirmation email has been sent. Please arrive 15 minutes before your
        scheduled appointment time.
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          color: "#00095B",
          borderRadius: 5,
          marginRight: 10,
          marginLeft: 10,
          fontWeight: 500,
          padding: 3,
        }}
      >
        Wayne Ford - Thursday, 7/13 @12pm
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            name
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            email
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            phone
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            notes
          </div>
        </div>
        <div>
          <div>Trims to test drive</div>
          <img src="/bronco.png"></img>
        </div>
        <div>
          <div>Wayne Ford</div>
          <div>Location</div>
          <div>phone</div>
          <div>site</div>
          <div>time</div>
        </div>
      </div>
    </div>
  );
}
