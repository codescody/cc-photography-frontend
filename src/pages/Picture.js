import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Picture(props) {
  const { id } = useParams();
  const picture = props.picture.find((picture) => picture._id === id);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-semibold
    ">{picture.name}</h1>
      <img className="max-h-96 w-fit m-10" src={picture.image} alt={picture.name}></img>
      <div>{picture.info}</div>
      {/* <div>{picture.price}</div> */}
      <Link className="m-10" to={`/picture/${picture._id}/edit`}><button>EDIT</button></Link>
    </div>
  );
}