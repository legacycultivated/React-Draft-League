import { TeamCard } from "../teamCard/TeamCard";
import "./intro.css";
import { useState } from "react";

export default function Intro() {
  const [numberOfTeams, setNumberOfTeams] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    alert(numberOfTeams);
  };
  return (
    <div>
      <h1>Welcome to Draft League!</h1>
      <h2>How To Play</h2>
      <p>
        1. Determine and input how many teams will participate.
        <br />
        2. Click 'Submit' to generate teams.
        <br />
        3. Each team will take turns drafting mons until rosters are filled.
        <br />
        4. Once teams are selected and rosters are full, let the battles begin!
      </p>
      <form>
        <input
          type="text"
          value={numberOfTeams}
          onChange={(e) => setNumberOfTeams(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      <h3>Number of Teams: {numberOfTeams}</h3>
      <TeamCard input={numberOfTeams} />
    </div>
  );
}
