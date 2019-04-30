import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PostHeader = props => {
  const { headerTitle, avatar, time } = props;

  return (
    <Fragment>
      <div className="cardHeader">
        <img src={avatar} alt="default" className="avatar" />
        <div className="cardHeaderText">
          <div className="name">{headerTitle}</div>
          <div className="eta">{time}</div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

PostHeader.defaultProps = {
  headerTitle: "PostHeaderDefault",
  avatar: "https://randomuser.me/api/portraits/med/women/65.jpg"
};

PostHeader.propTypes = {
  headerTitle: PropTypes.string,
  avatar: PropTypes.string
};

export default PostHeader;
