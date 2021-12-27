import React from "react";
import React, { useState } from "react";
import "./Postview.css";
import bike from "./images/bike.jpg";
import aircraft from "./images/aircraft.jpg";

const Postview = () => {
  const [posts, setPost] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((res) => res.json())
      .then((responseData) => setPost(responseData));
  }, []);
  return (
    <div className="site-container">
      <div className="header-container">
        <div className="title">
          <span>InstaClone</span>
        </div>
        <div className="cam">
          <img
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png"
            height="50"
            width="50"
          ></img>
        </div>
      </div>
      {posts.map((post, index) => (
        <div className="gallery">
          <div className="post">
            <div className="post-head">
              <div className="posthead-left">
                <h3 className="name">{post.name}</h3>
                <p className="location">{post.location}</p>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2J8wOiXJ7_kJB_3uRm55zHaSVe1WYFRwGA&usqp=CAU"
                className="three-dot"
                height="30"
                width="30"
              ></img>
              <img src={post.PostImage} className="post-image"></img>
              <div className="likeshare-icon">
                <img
                  src="https://cdn4.vectorstock.com/i/1000x1000/05/43/red-heart-icon-love-icon-vector-23570543.jpg"
                  width="20"
                  height="20"
                  className="like"
                ></img>
                <img
                  src="https://cdn5.vectorstock.com/i/1000x1000/22/09/instagram-sets-share-line-icon-vector-25412209.jpg"
                  width="20"
                  height="20"
                  className="share"
                ></img>
                <p className="total-likes">{post.likes}</p>
                <h3 className="caption">{post.description}</h3>
              </div>
              <p className="date">{post.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
