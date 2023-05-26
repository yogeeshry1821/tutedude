import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="hero-image">
      <div className="sign-up" />
      <div className="nav">
        <div className="my-assignment">My Assignment</div>
        <div className="my-assignment">Chat with Mentor</div>
        <div className="profile-name">
          <img
            className="account-circle-icon"
            alt=""
            src="/account-circle.svg"
          />
          <div className="my-assignment">ProfileName</div>
          <img
            className="account-circle-icon"
            alt=""
            src="/keyboard-arrow-down.svg"
          />
        </div>
      </div>
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
    </div>
  );
};

export default Navbar;
