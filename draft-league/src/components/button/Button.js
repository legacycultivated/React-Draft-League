import TeamCard from "../teamCard/TeamCard";

export default function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}
