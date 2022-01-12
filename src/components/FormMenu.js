import { useContext, useState } from "react";
import { MainContext } from "../providers/main_provider";

export const FormMenu = ({
  name,
  price,
  description,
  available_qty,
  isUpdating,
}) => {
  const { update, add } = useContext(MainContext);
  const [_name, setname] = useState(name);
  const [_price, setprice] = useState(price);
  const [_description, setdescription] = useState(description);
  const [_available_qty, setqty] = useState(available_qty);

  const data = {
    name: "" + _name,
    price: "" + _price,
    description: "" + _description,
    available_qty: Number(_available_qty),
  };

  return (
    <div>
      <input type="file"></input>
      <input
        type="text"
        placeholder="Name"
        value={_name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Price"
        value={_price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />
      <textarea
        type="text"
        placeholder="Description"
        value={_description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />
      <input
        type="number"
        value={_available_qty}
        onChange={(e) => {
          setqty(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          isUpdating ? update(data) : add(data);
        }}
      >
        {isUpdating ? "Modifier" : "Ajouter"}
      </button>
    </div>
  );
};
