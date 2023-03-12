import { React } from "react"
import { Link } from 'react-router-dom'

export default function Gallery(props) {
    const loaded = () => {
        return props.picture.map((pictureItem) => (
            <div key={pictureItem._id}>
                <Link to={`/picture/${pictureItem?._id}`}>
                    <h1>{pictureItem.name}</h1>
                </Link>
                <Link to={`/picture/${pictureItem?._id}`}>
                    <img src={pictureItem.image} alt={pictureItem.name} />
                </Link>
                <h3>{pictureItem.info}</h3>
                <h3>{pictureItem.price}</h3>
            </div>
        ))
    }
    console.log(props.picture)

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div>  
            {props.picture ? loaded() : loading()}
        </div>
    )
}