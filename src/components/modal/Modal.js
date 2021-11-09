import { useEffect } from "react";
// import sprite from "../../images/sprite.svg";
// import { colors } from "../../general/styles/colors";
import ModalStyled from "./ModalStyled";

const Modal = ({ children, handleCloseModal }) => {
  // useEffect(() => {
  //   window.addEventListener("keydown", handleEsc);
  //   const body = document.querySelector("body");
  //   body.style.overflow = "hidden";
  //   return () => {
  //     window.removeEventListener("keydown", handleEsc);
  //     const body = document.querySelector("body");
  //     body.style.overflow = "auto";
  //   };
  // });

  // const handleEsc = (e) => e.code === "Escape" && handleCloseModal();

  const handleClick = (e) => e.target === e.currentTarget && handleCloseModal();

  const onBtnClose = () => handleCloseModal();

  return (
    <ModalStyled>
      <div className="modal">{children}</div>
    </ModalStyled>
  );
};

export default Modal;
