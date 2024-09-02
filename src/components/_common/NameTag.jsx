import React from "react";

const NameTag = ({ index, children }) => {
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const divStyle = {
    backgroundColor: randomColor(),
  };

  return (
    <div
      className="rounded-full bg-orange-500"
      // style={divStyle}
    >
      {children}
    </div>
  );
};

export default NameTag;
