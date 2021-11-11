import Loader from "react-loader-spinner";
import LoaderStyled from "./LoaderStyled";

export const MainLoader = () => {
  return (
    <LoaderStyled>
      <Loader type="Grid" color="#5DADE2" height={100} width={100} />
    </LoaderStyled>
  );
};
