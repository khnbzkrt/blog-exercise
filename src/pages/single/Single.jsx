import { Sidebar } from "../../components/sidebar/Sidebar";
import { SinglePost } from "../../components/single-post/SinglePost";
import "./single.css";

export const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};
