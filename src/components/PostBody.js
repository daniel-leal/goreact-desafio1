import React from 'react';
import PropTypes from 'prop-types';

const PostBody = (props) => {
  const { content } = props;

  return <div className="cardBody">{content}</div>;
};

PostBody.defaultProps = {
  content: 'HeaderDefault',
};

PostBody.propTypes = {
  content: PropTypes.string,
};

export default PostBody;
