import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-center">
      <div>
        <Link className="p-3 m-3 text-green-600" to="/">Home</Link>
        <Link className="p-3 m-3 text-green-600" to="/about">About</Link>
        <Link className="p-3 m-3 text-green-600" to="/picture">Gallery</Link>
        {/* <Link className="p-3 m-3 text-green-600" to="/contact">Contact</Link> */}
      </div>
    </div>
  );
}