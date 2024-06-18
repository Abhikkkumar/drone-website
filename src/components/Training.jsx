import React from "react";
import "../style/training.css";
import TrainingDetails from "./TrainingDetails";

export default function Training() {
  return (
    <>
      <div className="train-bread">
        <h3 className="train-bread-text">
          Small Category (7 days) – Training Curriculum as per{" "}
          <span style={{ color: "#e97f23" }}>DGCA</span>{" "}
        </h3>
        <button className="train-enroll">Enroll Now</button>
      </div>
      <div className="train-data">
        <div className="train-idata">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "1.34",
            }}
          >
            Duration
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: "var(--brand-color)",
            }}
          >
            5
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            DAYS OF TRAINING
          </p>
        </div>
        <div className="train-idata">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "1.34",
            }}
          >
            Upto
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: "var(--brand-color)",
            }}
          >
            25Kg
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Weight Category
          </p>
        </div>
        <div className="train-idata">
          <p
            style={{
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "1.34",
            }}
          >
            Topics
          </p>
          <p
            style={{
              fontWeight: "600",
              fontSize: "2.5rem",
              color: "var(--brand-color)",
            }}
          >
            68
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            In Curriculum
          </p>
        </div>
      </div>
      <TrainingDetails />
    </>
  );
}
