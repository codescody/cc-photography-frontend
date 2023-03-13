import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <div className="pt-5 pb-10 px-10"><Link to="/picture/640e6937cf11b081d96bcf8d"><img className="" src="https://i.imgur.com/z1nILIV.jpg"></img></Link></div>
        <div className="pt-5 pb-10 px-10"><Link to="/picture/640e6999cf11b081d96bcf91"><img src="https://i.imgur.com/uujHS8T.jpg"></img></Link></div>
        <div className="pt-5 pb-10 px-10"><Link to="/picture/640e69edcf11b081d96bcf95"><img src="https://i.imgur.com/kCxD1oE.jpg"></img></Link></div>
    </div>
    
  );
}
