import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="main-container">
                        <div className="logo">
                            <img src="/netflix-logo-png-2562 1.png" alt="logo"/>
                            <p className="header-date">
                                Friday July 8th
                            </p>
                        </div>
                        <div className="search">
                            <button className="search-icon">
                                <img src="/fe_search.svg" alt="search"/>
                            </button>
                            <img src="/Ellipse 2.png" alt="Ellipse" className="profile-avatar"/>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;