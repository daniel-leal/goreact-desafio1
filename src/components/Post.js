import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

const Post = props => {
  const { headerTitle, avatar, time, children } = props;

  return (
    <div className="card">
      <PostHeader headerTitle={headerTitle} avatar={avatar} time={time} />
      <PostBody content={children} />
    </div>
  );
};

Post.defaultProps = {
  children: "",
  headerTitle: "User",
  avatar: "https://randomuser.me/api/portraits/med/women/65.jpg",
  time: "Ha 999 days"
};

Post.propTypes = {
  headerTitle: PropTypes.string,
  avatar: PropTypes.string,
  time: PropTypes.string,
  children: PropTypes.string
};

export default Post;
