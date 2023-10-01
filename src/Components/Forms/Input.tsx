import React, { ChangeEvent, FormEvent } from "react";

export const Input = (props: {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string | boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type={props.type}
    id={props.id}
    name={props.name}
    placeholder={props.placeholder}
    value={props.value as string}
    onChange={props.onChange}
    className="form-control"
  />
);
export const Label = (props: { htmlFor: string; children: React.ReactNode }) => (
    <label className="small mb-1" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
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

export const Form = (props: {
  onSubmit: (e: FormEvent) => void;
  children: React.ReactNode;
}) => <form onSubmit={props.onSubmit}>{props.children}</form>;

export const FormGroup = (props: { children: React.ReactNode }) => <div className="mb-3">{props.children}</div>;


