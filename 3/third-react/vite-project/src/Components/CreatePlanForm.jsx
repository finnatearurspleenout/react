import React, { useState } from 'react';

const CreatePlanForm = ({ onAddPlan }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        users: '',
        storage: '',
        support: 'Email support',
        hasHelpCenter: false
    });

    const handleChange =(e)=> {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]:type === 'checkbox'?checked:value
        });
    };

    const handleSubmit =(e)=> {
        e.preventDefault();
        onAddPlan(formData);
        setFormData({
            name: '',
            price: '',
            users: '',
            storage: '',
            support: 'Email support',
            hasHelpCenter: false 
        });
    };

    return (
        <div className="container mt-5 p-4 border rounded bg-light">
            <h3>
                Створити новий тариф
            </h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">
                        Назва тарифу
                    </label>
                    <input type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Ціна
                    </label>
                    <input type="number"
                    name="price"
                    className="form-control"
                    value={formData.price}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Кількість юзерів
                    </label>
                    <input type="text"
                    name="users"
                    className="form-control"
                    value={formData.users}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Обсяг пам'яті(GB)
                    </label>
                    <input type="text"
                    name="storage"
                    className="form-control"
                    value={formData.storage}
                    onChange={handleChange} 
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox"
                    name="hasHelpCenter"
                    className="form-check-input"
                    id="helpCenter"
                    checked={formData.hasHelpCenter}
                    onChange={handleChange} 
                    />
                    <label className="form-check-label" htmlFor="helpCenter">
                        Наявність хелп центру
                    </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Додати картку
                </button>
            </form>
        </div>
    );
};

export default CreatePlanForm;