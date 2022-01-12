import { createContext, useEffect, useState } from "react";
import { URL, URL_SOCKET } from "../constants/urls";
import { io } from "socket.io-client";

export const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [menus, setmenus] = useState([]);
  const [_io, setio] = useState(null);

  useEffect(() => {
    const socket = io(URL_SOCKET, { autoConnect: true });

    setio(socket);
    socket.on("connection", () => {
      console.log("Connected to server");
    });

    socket.on("done", (data) => {
      console.log(data);
      setmenus(data.menus);
    });

    socket.on("error", (err) => {
      console.log(err);
    });
  }, []);

  const loadData = () => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => setmenus(data))
      .catch((err) => console.error(err));
  };

  const request = (method, data) => {
    console.log(data);
    fetch(URL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmenus(data);
      });
  };

  const update = (data) => {
    request("PUT", data);
  };

  const add = (data) => {
    _io.emit("requestAdd", data);
  };

  const erase = (id) => {
    // console.log(id);
    // fetch(`${URL}/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => setmenus(data));

    _io.emit("requestDelete", id);
  };

  return (
    <MainContext.Provider value={{ menus, loadData, update, add, erase }}>
      {children}
    </MainContext.Provider>
  );
};
