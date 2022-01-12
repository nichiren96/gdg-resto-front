import React, { useContext, useEffect } from "react";
import { FormMenu } from "../../components/FormMenu";
import { MenuCardItem } from "../../components/MenuCardItem";
import { MainContext } from "../../providers/main_provider";

export const HomePage = () => {
  return (
    <div className="App">
      <FormMenu />
      <HomeContent />
    </div>
  );
};

const HomeContent = () => {
  const { menus, loadData } = useContext(MainContext);
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="menu-container">
      {menus.map((menu) => (
        <MenuCardItem key={menu._id} {...menu} />
      ))}
    </div>
  );
};
