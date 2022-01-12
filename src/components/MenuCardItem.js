import { useContext, useState } from "react";
import { imagemenu } from "../assets/images/images";
import { MainContext } from "../providers/main_provider";
import { FormMenu } from "./FormMenu";

export const MenuCardItem = ({
  _id,
  name,
  price,
  description,
  available_qty,
}) => {
  const { erase } = useContext(MainContext);
  const [isUpdating, setisUpdating] = useState(false);

  return (
    <div className="menu-item">
      {isUpdating && (
        <FormMenu
          {...{ name, price, description, available_qty, isUpdating }}
        />
      )}
      <img src={imagemenu} alt="place" />
      <h1>{name}</h1>
      <p>
        {price} - <i>Qté: {available_qty}</i>
      </p>
      <button
        onClick={() => {
          erase(_id);
        }}
      >
        Effacer
      </button>
      <button
        onClick={() => {
          setisUpdating(!isUpdating);
        }}
      >
        {isUpdating ? "Annuler" : "Modifier"}
      </button>
    </div>
  );
};
