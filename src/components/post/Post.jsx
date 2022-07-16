import "./post.css";

export const Post = (props) => {
  return (
    <div className="post">
      <img className="postImg" src={props.imageUrl} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {props.cats.map((item) => (
            <span className="postCat" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
        <span className="postTitle">{props.title}</span>
        <span className="postDate">{props.date}</span>
      </div>
      <p className="postDescription">{props.content}</p>
    </div>
  );
};
