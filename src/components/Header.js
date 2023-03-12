import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex">
        <div className="flex w text-1xl mx-4 my-4">Cody Clark Photography</div>
        <div className="absolute right-0 p-4">
        <Link className="m-10" to="/">Home</Link>
        <Link className="m-10" to="/about">About</Link>
        <Link className="m-10" to="/picture">Gallery</Link>
        {/* <Link className="p-3 m-3 m-10" to="/contact">Contact</Link> */}
        </div>
    </div>
  );
}