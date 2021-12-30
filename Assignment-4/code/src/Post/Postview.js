import React, { useState } from "react";
import "./Post.css";
import cam from "./logo.jpg";
import like from "./heart.png";
import share from "./arrow.png";

const Postview = () => {
  const [posts, setPost] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3008/user")
      .then((res) => res.json())
      .then((responseData) => setPost(responseData));
  }, []);

  return (
    <div className="site-container">
      <hr></hr>

      <div className="insta">
        <div className="dev">
          <h1>Instaclone</h1>
        </div>
        <div className="tani">
          <img src={cam} className="logo" alt="random" />
        </div>
      </div>
      <hr></hr>

      {posts.map((post, index) => {
        return (
          <div className="post" key={index}>
            <div className="box1">
              <strong>{post.name}</strong>
              <br></br>
              {post.location}
            </div>
            <div className="box2">
              <img src={post.PostImage} className="pic" alt="random" />
            </div>
            <div className="tam">
              <div className="imog">
                <div className="imoj1">
                  <img src={like} className="logo" alt="random" />
                </div>
                <div className="imoj2">
                  <img src={share} className="logo" alt="random" />
                </div>
              </div>
            </div>
            <div className="box3">
              <div className="box31">{post.date}</div>
              <div className="box32">
                {post.likes} likes
                <br></br>
                <strong>{post.description}</strong>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Postview;
// Postview
