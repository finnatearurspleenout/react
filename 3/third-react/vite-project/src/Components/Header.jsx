import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container py-3" bis_skin_checked="1">
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom" bis_skin_checked="1">
                    <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none"> 
                        <span className="fs-4">Pricing example</span> 
                    </a> 
                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto"> 
                        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Features</a> 
                        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Enterprise</a> 
                        <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Support</a> 
                        <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a> 
                    </nav> 
                </div>
            </div>
        );
    }
}

export default Header;