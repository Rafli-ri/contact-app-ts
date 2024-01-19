import { ReactNode, useRef } from "react";

interface InfoModalProps {
  children: ReactNode;
}

export default function Modal({ children }: InfoModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  return <dialog ref={dialog}>{children}</dialog>;
}
