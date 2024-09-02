// AvatarPile.js
import React from "react";

const AvatarPill = ({ avatars }) => {
  return (
    <div className=" flex relative">
      {avatars?.map((avatar, index) => (
        <img
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          className={`w-[24px] h-[24px] border-2 border-white rounded-full ${
            index === avatars.length - 1 ? "" : "mr-[-10px]"
          }`}
        />
      ))}
    </div>
  );
};

export default AvatarPill;
