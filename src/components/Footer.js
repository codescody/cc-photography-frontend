import { Link } from "react-router-dom"

export default function Footer() {
    return <div className="flex justify-center space-x-40">
        <div className="m-10 font-extralight">©Copyright Cody Clark Photography</div>
        <Link className="flex m-10 font-extralight" to="/contact">Contact Me:</Link>
        <img className="flex w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg" />
        <img className="flex w-7" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
    </div>
}