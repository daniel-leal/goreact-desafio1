import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { title } = props;

  return (
    <div className="navbar">
      <h1>{title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: 'HeaderDefault',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
