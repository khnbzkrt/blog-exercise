import "./write.css";

export const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://media-exp1.licdn.com/dms/image/C4D22AQFvJHVxNFyGPQ/feedshare-shrink_800/0/1657861594644?e=1660780800&v=beta&t=WGfD7anlRlH-v5iYEblOjZW1J-0sQpcEOYdxKxjrzcY"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell you story..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};
