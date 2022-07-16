import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Hakan Angın</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://media-exp1.licdn.com/dms/image/C4D16AQH5I59fzVWdOg/profile-displaybackgroundimage-shrink_200_800/0/1656017426556?e=1663200000&v=beta&t=1yNCoEiFnjr_YuHawHEdm7Lvb-S6Rc_Az1_21xR5sZs"
        alt=""
      />
    </div>
  );
};
