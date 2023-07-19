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
          fontSize: 27,
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        Your Appointment is confirmed
      </div>
      <div style={{ alignSelf: "start", marginBottom: 15, color: "black" }}>
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
          fontSize: 20,
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
          marginLeft: 25,
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
              borderRadius: 5,
              width: 400,
              height: 40,
              border: "none",
              marginBottom: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              fontSize: 18,
              color: "gray",
              fontWeight: 400,
              marginBottom: 5,
              display: "flex",
              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            Name
          </div>
          Email:
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 400,
              height: 40,
              border: "none",
              marginBottom: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              fontSize: 18,
              color: "gray",
              fontWeight: 400,
              marginBottom: 5,
              display: "flex",
              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            Email
          </div>
          Phone number:
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 400,
              height: 40,
              border: "none",
              marginBottom: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              fontSize: 18,
              color: "gray",
              fontWeight: 400,
              marginBottom: 5,
              display: "flex",

              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            Phone number
          </div>
          Notes:
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              width: 400,
              height: 40,
              border: "none",
              marginBottom: 10,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              fontSize: 18,
              color: "gray",
              fontWeight: 400,
              marginBottom: 5,
              display: "flex",

              alignItems: "center",
              paddingLeft: 5,
            }}
          >
            Notes
          </div>
        </div>
        <div style={{ marginRight: 30 }}>
          <div
            style={{
              fontWeight: 500,
              color: "#00095B",
              fontSize: 23,
              alignSelf: "start",
              textAlign: "start",
              marginBottom: 10,
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
              fontSize: 23,
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
