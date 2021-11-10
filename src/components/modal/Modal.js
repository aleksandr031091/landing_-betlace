import colors from "../../styles/colors";
import ModalStyled from "./ModalStyled";

const Modal = ({ children }) => {
  return (
    <ModalStyled colors={colors}>
      <div className="modal">{children}</div>
    </ModalStyled>
  );
};

export default Modal;
