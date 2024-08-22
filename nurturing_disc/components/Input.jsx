import React from "react";
import PropTypes from "prop-types";

// Input component
const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      <input
        type={type}
        className="rounded-xl border py-3 px-5 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

// TextArea component
const TextArea = ({
  placeholder,
  value,
  onChange,
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`w-full ${className}`}>
      <textarea
        className="rounded-xl border py-3 px-5 w-full resize-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Input, TextArea };
