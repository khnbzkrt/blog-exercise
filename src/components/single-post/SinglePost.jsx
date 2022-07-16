import "./singlePost.css";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://media-exp1.licdn.com/dms/image/sync/C5627AQFWrKRVLpQMLg/articleshare-shrink_800/0/1657878101136?e=1658487600&v=beta&t=DiTllH92kUoUOAacOR2L-GHN0gYQ1zNRb0QuqyI4Jcc"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Hakan Angın</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          dolorem nisi quaerat earum expedita soluta debitis officia quo ipsum
          labore quam odit sit ratione, cumque sapiente! Rerum illo optio neque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          minus perferendis nulla dolorem nam ab doloribus laborum nihil, dicta
          tenetur quibusdam eveniet voluptas illum voluptatem deserunt itaque
          officia maxime obcaecati. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor ab iure earum doloribus, iste, illo asperiores
          id facere recusandae tenetur error nam laudantium aspernatur dolorum
          iusto eligendi. Inventore, omnis impedit? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Tempore nemo officiis distinctio,
          reiciendis harum nulla dolor incidunt ipsa accusantium, veritatis,
          nihil delectus at beatae. Distinctio minima porro perferendis dicta
          repellat.
        </p>
      </div>
    </div>
  );
};
