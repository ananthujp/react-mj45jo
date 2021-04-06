import React from "react";
import Avatar from "./Avatar.js"
import './Post.css'
function Post(){
  return(
    <div>
    <p>Feed</p>
    <div className="feed__o">
      <div className="feed___o__head">
        <Avatar path="https://pbs.twimg.com/profile_images/498002223062732801/5xunNbjU_400x400.png" className="feed___o__avatar"/>
        <div className="feed___o__headInfo">
          <h3>Username</h3>
          <p>timestamp</p>
        </div>
      </div>
      <div className="feed__o__content">This Works ...................
      </div>
      </div>
    </div>
  );
}

export default Post;