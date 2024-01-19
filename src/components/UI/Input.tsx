import React from "react";
import { Label, Control } from "../../style/style";

interface InputControl {
  label: string;
  id: string;
  name: string;
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
