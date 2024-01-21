import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (x) => {
    x.preventDefault();
    const id = crypto.randomUUID();

    if (!name || !image) return;

    const newFriend = {
      id,
      name,
      image: `${image}?id=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(input) => setName(input.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(input) => setImage(input.target.value)}
      />

      <Button type="submit" className="button">
        Add
      </Button>
    </form>
  );
}

export default FormAddFriend