import React, { useState } from "react";
export default function Sched3() {
  return (
    <div
      style={{
        width: "1082px",
        backgroundColor: "#113B7A1A",
        height: "435px",
        borderRadius: "30px",
        marginTop: 20,
        position: "relative",
        justifyContent: "start",
        alignContent: "start",
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
          fontSize: 25,
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        Your Appointment is confirmed
      </div>
      <div style={{ alignSelf: "start" }}>
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
          alignContent: "start",
          textAlign: "start",
        }}
      >
        <div
          style={{
            fontWeight: 500,
            color: "#00095B",
            fontSize: 20,
            marginRight: 40,
          }}
        >
          Name:
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
              fontWeight: 300,
              fontSize: 18,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            name
          </div>
          Email:
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
              fontWeight: 300,
              fontSize: 18,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            email
          </div>
          Phone number:
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
              fontWeight: 300,
              fontSize: 18,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            phone
          </div>
          Notes:
          <div
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 250,
              height: 20,
              borderRadius: 5,
              marginBottom: 10,
              fontWeight: 300,
              fontSize: 18,
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            notes
          </div>
        </div>
        <div style={{ marginRight: 30 }}>
          <div
            style={{
              fontWeight: 500,
              color: "#00095B",
              fontSize: 22,
              alignSelf: "start",
              textAlign: "start",
            }}
          >
            Trims to test drive
          </div>
          <img src="/bronco.png"></img>
        </div>
        <div>
          <div
            style={{
              fontWeight: 500,
              color: "#00095B",
              fontSize: 22,
              marginBottom: 10,
            }}
          >
            Wayne Ford
          </div>
          <div
            style={{
              fontWeight: 400,
              color: "black",
              fontSize: 18,
            }}
          >
            {" "}
            Location
          </div>
          <div
            style={{
              fontWeight: 400,
              color: "black",
              fontSize: 18,
            }}
          >
            phone
          </div>
          <div
            style={{
              fontWeight: 400,
              color: "black",
              fontSize: 18,
            }}
          >
            site
          </div>
          <div
            style={{
              fontWeight: 400,
              color: "black",
              fontSize: 18,
            }}
          >
            time
          </div>
        </div>
      </div>
    </div>
  );
}
