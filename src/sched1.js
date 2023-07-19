import React, { useState } from "react";
export default function Sched1() {
  return (
    <div
      style={{
        width: "1082px",
        backgroundColor: "#113B7A1A",
        height: "380px",
        borderRadius: "30px",
        marginBottom: "10px",
        flexDirection: "column",
        justifyContent: "flex-start",
        display: "flex",
        padding: 20,

        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
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
          backgroundColor: "white",
          width: "100%",
          height: 100,
          color: "#00095B",
          borderRadius: 5,
          marginRight: 10,
          marginLeft: 10,
          fontWeight: 500,
          fontSize: 18,
          padding: 3,
          marginBottom: 20,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          alignSelf: "center",
        }}
      >
        Wayne Ford - Thursday, 7/13 @12pm
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 50,
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <div
            style={{
              fontWeight: 500,
              color: "#00095B",
              fontSize: 22,
              alignSelf: "start",
              textAlign: "start",
            }}
          >
            Guest Information
          </div>
          <a
            style={{ marginBottom: 10 }}
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Or login/create a Ford accound{" "}
          </a>
          <input
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 340,
              height: 30,
              border: "none",
              marginBottom: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
            placeholder="Name"
          ></input>
          <input
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 340,
              height: 30,
              border: "none",
              marginBottom: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
            placeholder="Email"
          />
          <input
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 340,
              height: 30,
              border: "none",
              marginBottom: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
            placeholder="Number"
          />
          <input
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 340,
              height: 30,
              border: "none",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
            placeholder="Notes"
          />
        </div>
        <div
          style={{
            alignItems: "start",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              fontWeight: 500,
              color: "#00095B",
              fontSize: 22,
              alignSelf: "start",
              textAlign: "start",
            }}
          >
            Trims to Test Drive
          </div>

          <div>limited to 2 cars to test drive during your appointment.</div>
          <img src="/bronco.png" style={{ alignSelf: "start" }}></img>
          <div style={{ marginBottom: 0 }}>
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Select more cars available at Wayne Ford
            </a>
          </div>
          <button
            style={{
              alignSelf: "end",
              marginTop: 0,
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
              marginBottom: 10,
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
