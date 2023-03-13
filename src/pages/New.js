import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function New(props) {
  let navigate = useNavigate();
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    info: "",
    price: "",
  });

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPicture(newForm);
    setNewForm({
      name: "",
      image: "",
      info: "",
      price: "",
    });
    navigate(`/picture`);
  };
  return (
    <div className="flex justify-center text-center h-screen mt-40">
      <p className="mt-14 font-bold">Add a Photo</p>
      <form className="p-10" onSubmit={handleSubmit}>
        <input className="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3  w-40 m-2"
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input className="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3  w-40 m-2"
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input className="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3  w-40 m-2"
          type="text"
          value={newForm.info}
          name="info"
          placeholder="info"
          onChange={handleChange}
        />
        <input className="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3  w-40 m-2"
          type="number"
          value={newForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input className="shadow appearance-none border border-blue-500 rounded py-2 px-3 text-gray-700 mb-3  w-40 m-2" type="submit" value="Add" />
      </form>
    </div>
  );
}