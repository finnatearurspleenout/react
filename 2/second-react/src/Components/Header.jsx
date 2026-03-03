import React, { Component } from 'react';

class Header extends Component {
    render() {
        const {date, isLogin, userAvatar} = this.props;
        let profileContent;
        if(isLogin) {
            profileContent = (
                <img 
                    src={userAvatar} 
                    alt="Profile" 
                    className="profile-avatar" 
                />
            );
        }
        else {
            profileContent = (
                <button className="login-button">
                    Login
                </button>
            );
        }
        return (
            <div>
                <header>
                    <div className="main-container">
                        <div className="logo">
                            <img src="/netflix-logo-png-2562 1.png" alt="logo"/>
                            <p className="header-date">
                                {/* Friday July 8th */}
                                {date}
                            </p>
                        </div>
                        <div className="search">
                            <button className="search-icon">
                                <img src="/fe_search.svg" alt="search"/>
                            </button>
                            {/* <img src="/Ellipse 2.png" alt="Ellipse" className="profile-avatar"/> */}
                            {profileContent}
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;