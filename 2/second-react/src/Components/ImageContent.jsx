import React, { Component } from 'react';

class ImageContent extends Component {
    render() {
        return (
                <div>
                    <section className="popular-section">
                        <div className="main-container">
                            <div className="card-container">
                                <img src="/Rectangle 6.png" alt="Breaking Bad"/>
                                <img src="/Rectangle 7.png" alt="The Rain"/>
                                <img src="/Rectangle 8.png" alt="Life after Year"/>
                                <img src="/Rectangle 9.png" alt="Money Heist"/>
                                <img src="/Rectangle 11.png" alt="Squid Game"/>
                            </div>
                        </div>
                    </section>
            </div>
        );
    }
}

export default ImageContent;