import React, { useState, Component } from "react";
import MenuYou from "./menu_you";
import MenuFriend from "./menu_friend";
import "../styles/menu.css";


const MenuFriends = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="menu_friends">
      <MenuYou />
      <MenuFriend />
      <MenuFriend />
      <MenuFriend />
      <MenuFriend />
    </div>
  );
};

export default MenuFriends;
