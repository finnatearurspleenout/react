import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div>
                <section className="popular-section">
                    <div className="main-container">
                        <div className="buttons">
                            <button className="stream-now">
                                <span>
                                    STREAM NOW
                                </span>
                                <img src="/ant-design_play-circle-filled.png" alt="Circle" className="img-stream"/>
                            </button>
                            <button className="episodes">
                                <span>
                                ALL EPISODES 
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </div> 
        );
    }
}

export default Buttons;