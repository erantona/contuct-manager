import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <div className="bg-blue-800 p-4 text-white h-20 flex items-center">
      <div className="pl-3">
        <i className="px-3 text-2xl font-semibold fas fa-id-card-alt" />
        <a href="" className="px-3 text-2xl font-semibold ">
          {title}
        </a>
      </div>
    </div>
  );
};
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: 'Contact Manager',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
