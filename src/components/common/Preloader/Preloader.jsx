import loading from "../../../assets/loading.gif";

export const Preloader = (props) => {
  return (
    <div>
      <img style={{ width: "30px" }} src={loading} alt="" />
    </div>
  );
};
