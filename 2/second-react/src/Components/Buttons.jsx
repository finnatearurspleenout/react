import React, { Component } from 'react';

class Buttons extends Component {
    streamClick =()=> {
        window.open('https://www.netflix.com/ua/title/80057281', '_blank');
    };
    allEpisodesClick = () => {
        window.open('https://www.netflix.com/ua/title/80057281#episodes', '_blank');
    };
    render() {
        return (
            <div>
                <section className="popular-section">
                    <div className="main-container">
                        <div className="buttons">
                            <button className="stream-now" onClick={this.streamClick} style={{cursor:'pointer'}}>
                                <span>
                                    STREAM NOW
                                </span>
                                <img src="/ant-design_play-circle-filled.png" alt="Circle" className="img-stream"/>
                            </button>
                            <button className="episodes" onClick={this.allEpisodesClick} style={{cursor:'pointer'}}>
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