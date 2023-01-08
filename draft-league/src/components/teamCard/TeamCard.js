export function TeamCard(input) {
  let amountOfTeams = Number(input.input);
  console.log(typeof amountOfTeams);
  let teams = [...Array(amountOfTeams).keys()].map((x) => ++x);
  console.log(teams);

  return (
    <>
      <h2>Team</h2>
      <form>
        <input type="text"></input>
        <button type="submit">Add</button>
      </form>
      <ol></ol>
    </>
  );
}
