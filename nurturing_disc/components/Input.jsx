import React from "react";

const Input = ({ placeholder, value, onChange, children }) => {
  return (
    <div className="w-full">
      <input
        className="rounded-xl border py-3 px-5 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Input;
