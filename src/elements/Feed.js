import React from "react"
import "./Feed.css"
import Post from "./Post.js"
function Feed(){
  return(
    <div className="feed__container">
    <p>Feed</p>
    <Post Prof__pic="https://pbs.twimg.com/profile_images/498002223062732801/5xunNbjU_400x400.png"
    image="https://images.shiksha.com/mediadata/images/1610105960phpngot1u.jpeg"
    User__id="Harish PM"
    time__stamp="28 Jun 21"
    text__content="Post content. Oh!"
    />
    <Post Prof__pic="https://pbs.twimg.com/profile_images/498002223062732801/5xunNbjU_400x400.png"
    User__id="Control Room"
    time__stamp="28 Jun 21"
    text__content="Post content. Oh!"
    />
    <Post Prof__pic="https://sites.google.com/a/iitgn.ac.in/harish/_/rsrc/1346043768348/config/customLogo.gif?revision=10"
    image="https://images1.livehindustan.com/uploadimage/library/2021/03/30/16_9/16_9_1/maharashtra_corona_cases_1617118042.jpg"
    User__id="Harish PM"
    time__stamp="28 Jun 21"
    text__content="Post content. Oh!"
    />
    <Post Prof__pic="https://pbs.twimg.com/profile_images/498002223062732801/5xunNbjU_400x400.png"
    User__id="Control Room"
    time__stamp="28 Jun 21"
    text__content="Post content. Oh2!"
    />
    </div>
  );
}

export default Feed;