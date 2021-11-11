import Loader from "react-loader-spinner";

export const MainLoader = () => {
  return (
    <div>
      <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};
