import TeamCard from "../teamCard/TeamCard";
import IntroText from "./IntroText";
import "./intro.css";
import React from "react";
import Button from "../button/Button";
import { useState, useRef } from "react";

export default function Intro() {
  const [numberOfTeams, setNumberOfTeams] = useState(0);

  const numberOfTeamsRef = useRef(null);

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();
    setNumberOfTeams(numberOfTeamsRef.current.value);
  };

  const createTeams = () => {
    console.log(numberOfTeams);
    return new Array(+numberOfTeams)
      .fill(0)
      .map((x, i) => <TeamCard key={i} numberOfTeams={numberOfTeams} />);
  };

  return (
    <div>
      <IntroText />

      <form>
        <input type="text" id="NumberOfTeams" ref={numberOfTeamsRef} />
        <Button onClick={handleSubmitButtonClick} text="Submit" />
      </form>

      <h3>Number of Teams: </h3>
      {numberOfTeams > 0 && createTeams()}
    </div>
  );
}
