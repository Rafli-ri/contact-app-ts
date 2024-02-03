import React from "react";
import { css } from "@emotion/react";

const Label = css`
  color: #495057;
  margin: 20px 0;
  font-weight: 500;
`;

const Control = css`
  ::placeholder {
    color: #adb5bd;
    font-size: 12px;
  }
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2c3e50;
  font-size: 13px;
  border: 2px solid #f4f4f4;
  background-color: #f8f9fa;
  outline: none;
  &:focus {
    border: 2px solid #6c63ff;
  }
`;

interface InputControl {
  label: string;
  id: string;
  name: string;
  type?: "text" | "number" | "tel";
  defaultValue?: string | string[] | any;
  pattern?: any;
  onChange?: (e: any) => void;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean | string | any;
}

const Input: React.FC<InputControl> = ({ label, id, ...props }) => {
  return (
    <p>
      {label && (
        <label css={Label} htmlFor={id}>
          {label}
        </label>
      )}
      <input css={Control} id={id} required {...props} />
    </p>
  );
};

export default Input;
