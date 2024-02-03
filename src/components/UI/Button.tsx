import { ReactNode } from "react";
import { css } from "@emotion/react";

interface InfoModalProps {
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: () => void | any;
  textOnly?: any;
  css?: string | any;
}

const ButtonAction = css`
  padding: 14px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #6c63ff;
  border: 1px solid #6c63ff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  &:hover {
    background-color: white;
    color: #6c63ff;
  }
`;

const ButtonActionTextOnly = css`
  background: #e0e0e0;
  cursor: pointer;
  margin: 0 10px;
  background-color: transparent;
  border: none;
  color: #6c63ff;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #6f2dbd;
    background-color: #fff;
  }
`;

export default function Button({
  children,
  type,
  textOnly,
  ...props
}: InfoModalProps) {
  if (textOnly) {
    return (
      <button css={ButtonActionTextOnly} type={type} {...props}>
        {children}
      </button>
    );
  } else {
    return (
      <button css={ButtonAction} type={type} {...props}>
        {children}
      </button>
    );
  }
}
