import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Picture(props) {
  const { id } = useParams();
  const picture = props.picture.find((picture) => picture._id === id);

  return (
    <div>
      <h1>{picture.name}</h1>
      <img src={picture.image} alt={picture.name}></img>
      <div>{picture.info}</div>
      <div>{picture.price}</div>
      <Link to={`/picture/${picture._id}/edit`}><button>EDIT</button></Link>
    </div>
  );
}