import React from "react";

export const LoginButton = (props: {
  type: "button" | "submit";
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <button type={props.type} className={`btn ${props.className}`} onClick={props.onClick}>
    {props.children}
  </button>
);

