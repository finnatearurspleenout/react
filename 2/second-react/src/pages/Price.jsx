import React, { Component } from 'react';

class Price extends Component {
    render() {
        return (
            <div className="container text-center mt-5 text-white">
                <h1 className="mb-4">
                    Наші тарифи

                </h1>
                <p className="fs-4 mb-4">
                    Виберіть план, який підходить саме вам. 
                    Ознайомитися з деталями підписок та вибрати найкращий варіант 
                    можна на офіційному сайті Netflix.
                </p>
                <div className="mt-5">
                    <a href="https://help.netflix.com/en/node/24926" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-danger btn-lg">
                        Переглянути інформацію про тарифи
                    </a>
                </div>
            </div>
        );
    }
}

export default Price;