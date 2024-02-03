import { ReactNode, useState, createContext } from "react";

interface ModalProps {
  children: ReactNode;
}

const ModalContext = createContext({
  modal: "",
  showModal: () => {},
  hideModal: () => {},
});

export function ModalContextProvider({ children }: ModalProps) {
  const [infoModal, setInfoModal] = useState("");

  function showModal() {
    setInfoModal("modal");
  }

  function hideModal() {
    setInfoModal("");
  }

  const infoModalCtx = {
    modal: infoModal,
    showModal,
    hideModal,
  };

  return (
    <ModalContext.Provider value={infoModalCtx}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
