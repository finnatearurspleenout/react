import React, { Component } from 'react';

class Popular extends Component {
    render() {
        return (
            <div>
                <section className="popular-section">
                    <div className="main-container">
                        <div className="popular">
                            <div className="popular-tatle">
                                <strong>POPULAR THIS WEEK</strong>
                            </div>
                            <div className="navigate">
                                <button className="prev">
                                    <img src="img/ic_baseline-navigate-next (2).png" alt="#"/>
                                </button>
                                <button className="next">
                                    <img src="img/ic_baseline-navigate-next.png" alt="#"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Popular;