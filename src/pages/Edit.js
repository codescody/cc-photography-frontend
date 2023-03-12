import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Edit(props) {
  const { id } = useParams();
  const picture = props.picture.find((picture) => picture._id === id);
  let navigate = useNavigate();

  const [editForm, setEditForm] = useState(picture);

  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePicture(editForm, picture._id);
    console.log(editForm);
    navigate(`/picture/${picture._id}`);
  };
  const removePicture = () => {
    props.deletePicture(picture._id);
    navigate(`/picture/`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Edit picture</p>
        <div>
          <div>Name:</div>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <div>Image:</div>
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <div>Information:</div>
          <input
            type="text"
            value={editForm.info}
            name="info"
            placeholder="Information"
            onChange={handleChange}
          />
        </div>
        <div>
          <div>Price:</div>
          <input
            type="number"
            value={editForm.price}
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Update" />
        </div>
        <button onClick={() => removePicture(picture._id)}>Delete</button>
      </form>
    </div>
  );
}
