import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [WhoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (x) => {
    x.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(WhoIsPaying === "user" ? paidByFriend : -paidByUser);

  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill || ""}
        onChange={(i) => setBill(Number(i.target.value))}
      />
      <label>Your expense</label>
      <input
        type="text"
        onChange={(i) =>
          setPaidByUser(
            Number(i.target.value) > bill ? paidByUser : Number(i.target.value)
          )
        }
        value={paidByUser || ""}
      />
      <label>{selectedFriend.name} expense</label>
      <input type="text" readOnly value={paidByFriend} />
      <label>Who is paying the bill</label>
      <select
        value={WhoIsPaying}
        onChange={(i) => setWhoIsPaying(i.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
