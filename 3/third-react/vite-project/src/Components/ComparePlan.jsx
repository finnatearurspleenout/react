import React, { Component } from 'react';

class ComparePlan extends Component {
    render() {
        return (
            <div className="container py-3" bis_skin_checked="1">
                <h2 className="display-6 text-center mb-4">Compare plans</h2>
                <div className="table-responsive"> 
                    <table className="table text-center"> 
                        <thead> 
                            <tr> 
                                <th style={{ width: '34%' }}></th> 
                                <th style={{ width: '22%' }}>Free</th>
                                <th style={{ width: '22%' }}>Pro</th> 
                                <th style={{ width: '22%' }}>Enterprise</th> 
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Public</th> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td>
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td>
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Private</th> 
                                <td></td>
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                            </tr> 
                            <tr> 
                                <th scope="row" className="text-start">Permissions</th> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                            </tr> 
                            <tr> 
                                <th scope="row" className="text-start">Sharing</th> 
                                <td></td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                            </tr> 
                            <tr> 
                                <th scope="row" className="text-start">Unlimited members</th> 
                                <td></td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                            </tr> 
                            <tr> 
                                <th scope="row" className="text-start">Extra security</th> 
                                <td></td> 
                                <td></td> 
                                <td>
                                    <svg className="bi" width="24" height="24" role="img" aria-label="Included">
                                        <use xlinkHref="#check"></use>
                                    </svg>
                                </td> 
                            </tr> 
                        </tbody> 
                    </table> 
                </div>
            </div>
        );
    }
}

export default ComparePlan;