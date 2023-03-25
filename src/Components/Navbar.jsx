import React, { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const listElements = [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "Properties",
      url: "#",
    },
    {
      title: "Contact us",
      url: "#",
    },
  ];
  const ListElement = (props) => (
    <button
      button
      className={
        "btn " + (props.title === selected ? "btn-primary" : "btn-light")
      }
    >
      {props.title}
    </button>
  );
  return (
    <div className="custom-navbar">
      <div className="custom-container">
        {listElements.map((li) => (
          <ListElement {...li} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
