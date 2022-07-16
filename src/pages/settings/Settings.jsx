import "./settings.css";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGlcgJbTo1h5w/profile-displayphoto-shrink_100_100/0/1657902763569?e=1663200000&v=beta&t=Ok2yfhdvOhpmxNZjIFhjWiHlWVx49POoQFl7VEKksXs"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="username" />
          <label>E-mail</label>
          <input type="text" placeholder="example@example.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
