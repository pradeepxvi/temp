import BookVerseLogo from "../../../assets/bookverseLogo.png";

const LogoForAdmin = () => {
  return (
    <>
      <div className=" flex text-white items-center uppercase  lg:text-xl justify-center lg:font-extrabold ">
        <img
          src={BookVerseLogo}
          alt="Bookverse Logo"
          className="lg:w-15 w-5  aspect-square "
        />
        <h1>bookverse</h1>
      </div>
    </>
  );
};

export default LogoForAdmin;
