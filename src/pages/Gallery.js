import { React } from "react"
import { Link } from 'react-router-dom'

export default function Gallery(props) {
    const loaded = () => {
        return props.picture.map((pictureItem) => (
            <div className="inline-flex mx-3" key={pictureItem._id}>
                <div>
                <Link to={`/picture/${pictureItem?._id}`}>
                    <h1>{pictureItem.name}</h1>
                </Link>
                <Link to={`/picture/${pictureItem?._id}`}>
                    <img className="flex w-80 m-h-5" src={pictureItem.image} alt={pictureItem.name} />
                </Link>
                <h3>{pictureItem.info}</h3>
                {/* <h3>{pictureItem.price}</h3> */}
                </div>
            </div>
        ))
    }
    console.log(props.picture)

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div className="mx-3">  
            {props.picture ? loaded() : loading()}
        </div>
    )
}