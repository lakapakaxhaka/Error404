import React from "react";

const ProfileBage = ({ src, name, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full w-15 rounded-t-full hover:bg-[#252525] cursor-pointer"
      onClick={onClick}
    >
      <img
        src={src}
        alt="face icon"
        className="rounded-full h-15 w-15 object-contain"
      />
      <label className="px-1 w-13.5 text-slate-500 pt-2 text-xs !overflow-hidden !text-ellipsis !whitespace-nowrap">
        {name}
      </label>
    </div>
  );
};

export default ProfileBage;
