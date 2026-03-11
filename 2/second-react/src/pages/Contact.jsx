import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container text-center mt-5 text-white">
                <h2 className="mb-4">
                    Центр підтримки
                </h2>
                <p className="fs-4">
                    Зверніться до нашої служби підтримки
                </p>
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

export default Contact;