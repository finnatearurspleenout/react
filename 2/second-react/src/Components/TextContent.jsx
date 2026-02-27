import React, { Component } from 'react';

class TextContent extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <div className="main-container">
                        <div className="text-content"> 
                            Drama | Thriller | Supernatural
                        </div>
                        <div className="text-content1">
                            <p>
                                <strong>Stranger Things</strong>
                            </p>
                        </div>
                        <div className="text-content2">
                            <p> 
                                <strong>2019 | DIRECTOR:</strong> Shawn Levy <strong> seasons:</strong> 3 (5 Episodes)
                            </p>
                        </div>
                        <div className="text-content3">
                            <p>
                                In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
                            </p>
                        </div>
                        <div className="score">
                            <img src="/Group 5.svg" alt="#"/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default TextContent;