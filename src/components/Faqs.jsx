import React, { useState } from "react";
import "../style/faqs.css";

export default function Faqs() {
  const [ans0, setAns0] = useState(true);
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);
  function showAns0() {
    ans0 ? setAns0(false) : setAns0(true);
    setAns1(false);
    setAns2(false);
  }
  function showAns1() {
    ans1 ? setAns1(false) : setAns1(true);
    setAns0(false);
    setAns2(false);
  }
  function showAns2() {
    ans2 ? setAns2(false) : setAns2(true);
    setAns1(false);
    setAns0(false);
  }

  return (
    <div className="faqs  shadow">
      <h2>Frequently Asked Questions </h2>
      <p>
        Welcome to our FAQ page! We have compiled a list of commonly asked
        questions for you with quick and informative answers.
      </p>
      <div className="faq-inner">
        <div className="py-2">
          <h3
            className="my-3"
            onClick={() => {
              showAns0();
            }}
          >
            Q: How do you do online bus reservation on Web?
          </h3>
          {ans0 && (
            <p>
              Although a definitive answer would of course require further
              measurements, published species-wide averages of wing length and
              body mass, initial Strouhal estimates based on those averages and
              cross-species comparisons, the Lund wind tunnel study of birds
              flying at a range of speeds, and revised Strouhal numbers based on
              that study all lead me to estimate that the average cruising
              airspeed velocity of an unladen European Swallow is roughly 11
              meters per second, or 24 miles an hour.
            </p>
          )}
        </div>
        <div className="py-2">
          <h3
            className="my-3"
            onClick={() => {
              showAns1();
            }}
          >
            Q: How do you do online bus reservation on Web?
          </h3>
          {ans1 && (
            <p>
              Although a definitive answer would of course require further
              measurements, published species-wide averages of wing length and
              body mass, initial Strouhal estimates based on those averages and
              cross-species comparisons, the Lund wind tunnel study of birds
              flying at a range of speeds, and revised Strouhal numbers based on
              that study all lead me to estimate that the average cruising
              airspeed velocity of an unladen European Swallow is roughly 11
              meters per second, or 24 miles an hour.
            </p>
          )}
        </div>
        <div className="py-2">
          <h3
            className="my-3"
            onClick={() => {
              showAns2();
            }}
          >
            Q: How do you do online bus reservation on Web?
          </h3>
          {ans2 && (
            <p>
              Although a definitive answer would of course require further
              measurements, published species-wide averages of wing length and
              body mass, initial Strouhal estimates based on those averages and
              cross-species comparisons, the Lund wind tunnel study of birds
              flying at a range of speeds, and revised Strouhal numbers based on
              that study all lead me to estimate that the average cruising
              airspeed velocity of an unladen European Swallow is roughly 11
              meters per second, or 24 miles an hour.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
