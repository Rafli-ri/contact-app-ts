import { ButtonAction } from "../../style/style";

import { ReactNode } from "react";

interface InfoModalProps {
  children: ReactNode;
  type: "submit" | "button" | "reset";
}

export default function Button({ children, type, ...props }: InfoModalProps) {
  return (
    <ButtonAction type={type} {...props}>
      {children}
    </ButtonAction>
  );
}
