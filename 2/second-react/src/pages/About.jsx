import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container text-center mt-5 text-white">
                <h2 className="mb-4">
                    Про нас
                </h2>
                <a href="https://help.netflix.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-danger btn-lg mt-3">
                    Перейти на офіціальний сайт
                </a>
            </div>
        );
    }
}

export default About;