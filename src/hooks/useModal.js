import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const initialState = {
  width: window.innerWidth,
  breakPointNavigation: 1920,
  breakPointUserMenu: 480,
  isModalOpen: false,
};

const useModal = () => {
  const [stateModal, setOptionModal] = useState(initialState);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    location && closeModalOnLocation();
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const closeModalOnLocation = () =>
    setOptionModal((prev) => ({ ...prev, isModalOpen: false }));

  const handleResizeWindow = () =>
    setOptionModal((prev) => ({ ...prev, width: window.innerWidth }));

  const setOpenModal = () =>
    setOptionModal((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));

  return [stateModal, setOpenModal];
};

export default useModal;