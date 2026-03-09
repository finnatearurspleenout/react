import React, { Component } from 'react';

class TablePlan extends Component {
    render() {
        const {selectedPlans} = this.props;

        return (
            <div className="container py-3">
                <h2 className="text-center mb-4">
                    Обрані для порівняння
                </h2>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Параметр</th>
                                {selectedPlans.map((plan, index)=>(
                                    <th key={index}>{plan.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ціна</td>
                                {selectedPlans.map((plan, index)=>(
                                    <td key={index}>{plan.price}$</td>
                                ))}
                            </tr>
                            <tr>
                                <td>Користувачі</td>
                                {selectedPlans.map((plan, index)=>(
                                    <td key={index}>{plan.users}</td>
                                ))}
                            </tr>
                            <tr>
                                <td>Пам'ять</td>
                                {selectedPlans.map((plan, index)=>(
                                    <td key={index}>{plan.storage} GB</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TablePlan;