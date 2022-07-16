import "./topbar.css";
import { Link } from "react-router-dom";

export const Topbar = () => {
  const user = true;
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <a
          href="https://www.youtube.com/channel/UCE8jIzvXiM5Z5zj97eoHvTw"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topbarIcon fab fa-youtube"></i>
        </a>
        <a
          href="https://twitter.com/hakanangin_"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topbarIcon fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/hakanangin_/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topbarIcon fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hakan-angin/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topbarIcon fab fa-linkedin"></i>
        </a>
      </div>
      <div className="topbarCenter">
        <ul className="topbarList">
          <li className="topbarListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topbarListItem">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="topbarListItem">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="topbarListItem">
            {user && <Link to="/write">WRITE</Link>}
          </li>
          <li className="topbarListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topbarRight">
        {user ? (
          <img
            className="topbarImage"
            src="https://media-exp1.licdn.com/dms/image/C5603AQGlcgJbTo1h5w/profile-displayphoto-shrink_100_100/0/1657902763569?e=1663200000&v=beta&t=Ok2yfhdvOhpmxNZjIFhjWiHlWVx49POoQFl7VEKksXs"
            alt=""
          />
        ) : (
          <ul className="topbarList">
            <li className="topbarListItem">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="topbarListItem">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topbarSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};
