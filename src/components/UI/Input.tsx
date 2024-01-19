import React from "react";
import { Label, Control } from "../../style/style";

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
      {label && <Label htmlFor={id}>{label}</Label>}
      <Control id={id} required {...props} />
    </p>
  );
};

export default Input;
