import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    useEffect(()=>{
        fetch('http://localhost:5000/service',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
        })
            .then(res => res.json())
           .then(data =>{
               console.log(data);
           }) 
    }, [])

    return (
        <div className="show-input-info">
            <div className='row'>
                <div className='col-md-4 offset-md-4 mt-5'>
                    <div className='card card-body bg-white'>
                        <h3 className='text-center mb-5 bg-success py-3 text-white border rounded'>Blog </h3>
                        
                        <Link to='/' className='btn btn-dark text-white mt-3'>Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Blog;