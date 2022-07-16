import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media-exp1.licdn.com/dms/image/sync/C5627AQG5A0dk2CQquQ/articleshare-shrink_1280_800/0/1657354246847?e=1658484000&v=beta&t=TCLQkNjaLLVdbEoXadNyc2tTDwPZDymy7cT6FdTMjPA"
          alt=""
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          perspiciatis est nulla soluta quod porro ab repudiandae consectetur?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>

        <div className="sidebarSocial">
          <a
            href="https://www.youtube.com/channel/UCE8jIzvXiM5Z5zj97eoHvTw"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-youtube"></i>
          </a>
          <a
            href="https://twitter.com/hakanangin_"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/hakanangin_/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hakan-angin/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
