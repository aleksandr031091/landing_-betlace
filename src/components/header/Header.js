import Logo from "./logo/Logo";
import Modal from "../modal/Modal";
import Navigation from "../navigation/Navigation";
import { headerRoutes } from "../../routes/headerRoutes";

import HeaderStyled from "./HeaderStyled";
import sprite from "../../images/sprite.svg";

import useModal from "../../hooks/useModal";

const Header = () => {
  const [stateModal, setOpenModal] = useModal();

  const showBtn = () => {
    return !stateModal.isModalOpen ? (
      <svg className="burgerMenu" onClick={setOpenModal}>
        <use href={sprite + "#icon-burger-menu"} />
      </svg>
    ) : (
      <svg className="closeModalBtn" onClick={setOpenModal}>
        <use href={sprite + "#icon-close-modal"} />
      </svg>
    );
  };

  return (
    <>
      <HeaderStyled isOpenModal={stateModal.isModalOpen}>
        <Logo />

        {stateModal.width <= stateModal.breakPointUserMenu ? (
          showBtn()
        ) : (
          <Navigation routes={headerRoutes} />
        )}
      </HeaderStyled>
      {stateModal.isModalOpen && (
        <Modal>
          <Navigation routes={headerRoutes} />
        </Modal>
      )}
    </>
  );
};

export default Header;
