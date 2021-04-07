import React from "react";
// import Avatar from "./Avatar.js";
import Avatar from '@material-ui/core/Avatar';
import "./Post.css";
import GradeIcon from "@material-ui/icons/Grade";
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
function Post(props) {
  return (
    <div>
      <div className="post__o">
        <div className="post___o__head">
          <Avatar src={props.Prof__pic} className="post__avatar"/>
          <div className="post___o__headInfo">
            <h3>{props.User__id}</h3>
            <p>{props.time__stamp}</p>
          </div>
        </div>
        <div className="post__o__content">{props.text__content}</div>
        <div className="post__Image">
          <img src={props.image} alt="" className="post__Image"/>
        </div>
        <div className="post__options">
          <div className="post__option">
            <GradeIcon />
            <p>Stars</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <ShareIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
