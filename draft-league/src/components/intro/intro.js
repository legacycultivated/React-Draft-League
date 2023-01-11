import TeamCard from "../teamCard/TeamCard";
import IntroText from "./IntroText";
import "./intro.css";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Intro() {
  const [teamCount, setTeamCount] = useState(0);
  const [teams, setTeams] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (parseInt(teamCount) <= 0) {
      setTeams([]);
    } else {
      setTeams(Array.from({ length: parseInt(teamCount) }, (_, i) => i + 1));
    }
  }

  return (
    <div>
      <IntroText />

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={teamCount}
          onChange={(e) =>
            e.target.valueAsNumber > 0 && setTeamCount(e.target.valueAsNumber)
          }
        />
        <Button type="submit" text="Submit">
          Generate Teams
        </Button>
      </form>

      <h3>Number of Teams: </h3>
      <div>
        {teams.map((teamNumber) => (
          <TeamCard key={teamNumber} teamNumber={teamNumber} />
        ))}
      </div>
    </div>
  );
}
