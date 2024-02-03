import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { css } from "@emotion/react";

const modalStyle = css`
  border: none;
  border: none;
  padding: 1.5rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 40rem;
  animation: fade-slide-up 0.3s ease-out forwards;
`;

interface InfoModalProps {
  children: ReactNode;
  className?: string;
  open: boolean;
  onClose: any;
}

// Fungsi komponen Modal
export default function Modal({ children, open, onClose }: InfoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // untuk menampilkan atau menyembunyikan modal
  useEffect(() => {
    const modal: any = dialogRef.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  // Portal modal ke modalRoot atau document.body
  return createPortal(
    <dialog css={modalStyle} ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal") || document.body
  );
}
