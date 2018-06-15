import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src="images/wired-brain-coffee-logo.png" alt="Wired Brain"/>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;
