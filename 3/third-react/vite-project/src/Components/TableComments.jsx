import React, {useState, useEffect} from 'react';

function TableComments({title, onSelectedComment, children}) {
    const [comments, setComments] = useState([]);
    const [visablity, setVisablity] = useState(5);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setComments(data.slice(0, visablity)));
    }, [visablity]);
    function loadMore() {
        setVisablity(visablity => visablity+5);
    }
    return (
        <div className="container py-3">
            <h3 className='text-center'>
                {title}
            </h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Номер посту</th>
                        <th scope="col">Назва</th>
                        <th scope="col">Email: </th>
                        <th scope="col">Коментар</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, index)=>{
                        return<tr key={index}>
                            <td>
                                {comment.postId}
                            </td>
                            <td>
                                {comment.name}
                            </td>
                            <td>
                                {comment.email}
                            </td>
                            <td>
                                {comment.body}
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>{onSelectedComment(comment)}}>
                                    Додати до списку вибраних
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className='p-5 text-center' onClick={loadMore}>
                <button className="btn btn-success">Наступні коментарі</button>
            </div>
            {children}
        </div>
    );
}

export default TableComments;