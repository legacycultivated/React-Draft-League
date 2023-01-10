import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function TeamCard(key) {
  return (
    <div>
      <Card className="card">
        <Card.Title>Team {key}</Card.Title>
        <input type="text"></input>
        <Button>Add</Button>
        <ol></ol>
      </Card>
    </div>
  );
}
