import React from "react";
import "./Button.css";
import "./Button.css";

function Button({
  children,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  className = ""
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
