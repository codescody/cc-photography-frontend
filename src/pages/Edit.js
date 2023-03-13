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
    <div className="flex justify-center text-center h-screen mt-40">
      <form onSubmit={handleSubmit}>
        <p className="font-semibold">Edit Picture</p>
        <div>
          <div className="font-semibold">Name:</div>
          <input class="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3  w-40"
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="font-semibold">Image:</div>
          <input class="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3 w-40"
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="font-semibold">Information:</div>
          <input class="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3 w-40"
            type="text"
            value={editForm.info}
            name="info"
            placeholder="Information"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="font-semibold">Price:</div>
          <input class="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3 w-40"
            type="number"
            value={editForm.price}
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
        </div>
        <div>
          <input class="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3 w-40" type="submit" value="Update" />
        </div>
        <button class="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3 w-40" onClick={() => removePicture(picture._id)}>Delete</button>
      </form>
    </div>
  );
}
