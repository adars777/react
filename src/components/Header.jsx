import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li>
            <img
              className="cart"
              src="https://tse3.mm.bing.net/th/id/OIP.s5CCZvdCyC12P1jYJbRdpAHaGW?rs=1&pid=ImgDetMain&o=7&rm=3"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
