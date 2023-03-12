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
    <div>
      <p>Add a Photo</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.info}
          name="info"
          placeholder="info"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}