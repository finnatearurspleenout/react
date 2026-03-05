import React from 'react';

const Price = ({ plans }) => {
    return (
        <div className="container py-3">
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {plans.map((plan, index) => (
                    <div className="col" key={index}>
                        <div className={`card mb-4 rounded-3 shadow-sm ${plan.name === 'Enterprise'?'border-primary':''}`}>
                            <div className={`card-header py-3 ${plan.name === 'Enterprise'?'text-bg-primary border-primary':''}`}>
                                <h4 className="my-0 fw-normal">{plan.name}</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    ${plan.price}
                                    <small className="text-body-secondary fw-light">/mo</small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>{plan.users} users</li>
                                    <li>{plan.storage} GB of storage</li>
                                    <li>{plan.support}</li>
                                    <li>{plan.hasHelpCenter?'Help center access':'No help center'}</li>
                                </ul>
                                <button 
                                    type="button" 
                                    className={`w-100 btn btn-lg ${plan.name === 'Free'?'btn-outline-primary':'btn-primary'}`}
                                >
                                    {plan.name === 'Enterprise'?'Contact us':'Get started'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;