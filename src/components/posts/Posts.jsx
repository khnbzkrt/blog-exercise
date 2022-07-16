import { posts } from "../../data/postData";
import { Post } from "../post/Post";
import "./posts.css";

export const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          imageUrl={post.imageUrl}
          cats={post.cats}
          title={post.title}
          date={post.date}
          content={post.content}
          key={post.id}
        />
      ))}
    </div>
  );
};
