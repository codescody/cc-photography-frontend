import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex font-semibold">
        <Link className="flex text-xl font-bold mx-4 my-4 hover:bg-gray-200" to="/">Cody Clark Photography</Link>
        <div className="absolute right-0 p-4">
        <Link className="m-10 hover:bg-gray-200" to="/">Home</Link>
        <Link className="m-10 hover:bg-gray-200" to="/about">About</Link>
        <Link className="m-10 hover:bg-gray-200" to="/picture">Gallery</Link>
        <Link className="m-10 hover:bg-gray-200" to="/contact">Contact</Link>
        </div>
    </div>
  );
}