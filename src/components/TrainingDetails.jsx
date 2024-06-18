import React, { useState } from "react";
import "../style/training.css";

export default function () {
  const [sDay1, setDay1] = useState(true);
  const [sDay2, setDay2] = useState(false);
  const [sDay3, setDay3] = useState(false);
  const [sDay4, setDay4] = useState(false);
  const [sDay5, setDay5] = useState(false);

  function selectDay(dayNumber) {
    switch (dayNumber) {
      case 1:
        setDay1(true);
        setDay2(false);
        setDay3(false);
        setDay4(false);
        setDay5(false);
        break;
      case 2:
        setDay1(false);
        setDay2(true);
        setDay3(false);
        setDay4(false);
        setDay5(false);
        break;
      case 3:
        setDay1(false);
        setDay2(false);
        setDay3(true);
        setDay4(false);
        setDay5(false);
        break;
      case 4:
        setDay1(false);
        setDay2(false);
        setDay3(false);
        setDay4(true);
        setDay5(false);
        break;
      case 5:
        setDay1(false);
        setDay2(false);
        setDay3(false);
        setDay4(false);
        setDay5(true);
        break;
      default:
    }
  }
  return (
    <div className="train-details">
      <div className="train-days">
        <p
          onClick={() => {
            selectDay(1);
          }}
          className="train-iday"
          style={{
            borderRadius: "5px 0 0 0",
          }}
        >
          Day-1
        </p>
        <p
          onClick={() => {
            selectDay(2);
          }}
          className="train-iday"
        >
          Day-2
        </p>
        <p
          onClick={() => {
            selectDay(3);
          }}
          className="train-iday"
        >
          Day-3
        </p>
        <p
          onClick={() => {
            selectDay(4);
          }}
          className="train-iday"
        >
          Day-4
        </p>
        <p
          onClick={() => {
            selectDay(5);
          }}
          className="train-iday"
          style={{
            borderRadius: "0 5px  0 0",
          }}
        >
          Day-5
        </p>
      </div>
      <div className="train-day-data-cnt">
        {sDay1 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                STAKEHOLDERS & THEIR LAWS DRONE RULES 2021
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>
                  INTERNATIONAL RULES, REGULATION, STANDARDS & PRACTICE
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>
                  CLASSIFICATION AND CATERGORIZATION OF DRONES, TYPE CERTIFICATE
                </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>REGISTRATION, SALE, DE-REGISTRATION OF DRONES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>OPERATIONS OF DRONES, DOS AND DONTS</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">BASIC PRINCIPLES OF FLIGHT</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>FUNDAMENTALS OF FLIGHT</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>AERODYNAMICS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>TAKE-OFF, FLIGHT AND LANDING</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                ATC PROCEDURES & RADIO TELEPHONY
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>UNDERSTANDING ATC OPERATIONS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>AIRSPACE STRUCTURE AND AIRSPACE RESTRICTIONS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>FLIGHT PLANNING PROCEDURES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>COLLISION AVOIDANCE</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                FIXED WING OPERATIONS AND AERODYNAMICS
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>TYPES OF FIXED WING DRONES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>OPERATION AND MANEUVERS OF FIXED WING DRONES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>INTRO TO MISSION PLANNING, GCS, INSTRUMENT FLYING.</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>APPLICATIONS OF FIXED WING UAVs</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                MULTI- ROTOR OPERATIONS AND AERODYNAMICS
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>BASIC DRONE TERMINNOLOGY & PARTS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>TYPES OF DRONES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>DRONE ANATOMY</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>AVIONICS & C2 LINK</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                HYBRID OPERATIONS AND AERODYNAMICS
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PRINCIPLES OF AERODYNAMICS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>TYPES OF HYBRID DRONES & PARTS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>APLLICATIONS OF HYBRID UAVs</span>
              </p>
            </div>
          </div>
        )}
        {sDay2 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">WEATHER AND METEOROLOGY</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>THE STANDARD ATMOSPHERE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>MEASURING AIR PRESSURE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>HEAT AND TEMPERATURE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>WIND</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>MOISTURE, CLOUD FORMATION</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">DRONE EQUIPMENT AND MAINTENANCE</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>MAINTENANCE OF DRONE FLIGHT CONTROL BOX</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>MAINTENANCE OF GROUND EQUIPMENT, BATTERIES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>SCHEDULED SERVICING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>REPAIR OF EQUIPMENT</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>FAULT FINDING</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">RISK ASSESSMENT AND ANALYSIS</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>DRONE EMERGENCY & HANDLING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>LOSS OF C2 LINK, LOSS OF POWER</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>OTHER EMERGENCIES, CONTROL SUFACE FAILURES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>HUMAN PERFORMANCE </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>FAIL-SAFE FEATURES</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                PAYLOAD INSTALLATION AND UTILISATION
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>TYPES OF PAYLOADS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PARTS OF PAYLOADS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>INSTALLATION</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>FEATURES OF PAYLOADS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>UTILIZATION</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">INTRO TO DRONE DATA & ANALYSIS</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PRINCIPLES OF OBSERVATION</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>ELEMENTS OF IMAGE & VIDEO INTERPRETATION</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>TYPES OF IMAGE & VIDEO DATA</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>ANALYSIS</span>
              </p>
            </div>
          </div>
        )}
        {sDay3 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">FINAL TEST- THEORY</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>WRITTEN TEST</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">PRACTICAL LESSONS IN LAB</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>ASSEMBLING OF DRONE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>DE-ASSEMBLING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>INTEGRATION OF SUB-SECTIONS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>INTEGRATION OF ENGINE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>FAULT FINDING AND RECTIFICATION</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>REPAIR, MAINTENANCE AND DOCUMENTATION.</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                INTRODUCTION TO FLIGHT SIMULATOR AND SIMULATOR FLIGHT TRAINING
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>BASIC OPERATING FEATURES OF SIMULATOR</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>HOW TO SELECT DIFFERENT AIRCRAFT AND AERODROMES</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>DEMO FLIGHTS</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PRE-FLIGHT CHECKS AND START UP </span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PREPARATION CUM COORDINATION FOR FLIGHT</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>TAKE-OFF AND FLIGHT STAGE</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>APPROACH AND LANDING</span>
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>AFTER FLIGHT CHECKS</span>
              </p>
            </div>
          </div>
        )}
        {sDay4 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                PRACTICAL FLYING WITH INSTRUCTOR, TRAINER
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PRACTICAL FLYING WITH TRAINER (FULL DAY)</span>
              </p>
            </div>
          </div>
        )}
        {sDay5 && (
          <div className="train-iday-data">
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">PRACTICAL FLYING</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PRACTICAL FLYING SOLO</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">PRACTICAL FLYING TEST</p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>PRACTICAL FLYING TEST</span>
              </p>
            </div>
            <div
              className="train-topic-one"
              style={{ width: "31%", marginRight: ".4rem" }}
            >
              <p className="train-act-title">
                DISTRIBUTION OF CERTIFICATE & CONCLUSION OF TRAINING
              </p>
              <p className="train-act-others">
                <span
                  style={{ marginRight: ".4rem", color: "var(--brand-color)" }}
                >
                  ✓
                </span>
                <span>
                  DISTRIBUTION OF CERTIFICATE & CONCLUSION OF TRAINING
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
