import React from 'react';
import '../../stylesheet/Header.css';
import PropTypes from 'prop-types';

export default function Header({headerText}) {

  return (
    <div>
      <header className="navbar">
        <h1 className="mx-auto header-size pink">
          { headerText }
        </h1>
      </header>
    </div>
  )
}
Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};
