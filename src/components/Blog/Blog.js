import React, { useEffect, useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import'./Blog.css'
const Blog = () => {
  const [allServices, setAllServices] = useState([])
  const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
                // console.log(data);
            })
    }, [])
  
    const change = (e, id) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status updated successfully')
                }
            })
    }

    
        const deleteRegistration = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                // console.log('innanillah valo thakis');
            })
        alert('your registration has been cancelled succesfully reload the page to see the result')

    }
    
    return (
        <div className="show-input-info">
                            <h3 className='text-center mb-5 bg-success py-3 text-white border rounded'>Blog </h3>

            {
                    allServices.length === 0 && <Preloader />

                }
        {
            <div className='blog'>{
            allServices.map(data => <div className='row'>
                <div className='col-md-4 offset-md-4 mt-5'>
                    <div className='card card-body bg-white'>
                        <h4 className='mb-3'> {data.title}</h4>
                        <p className='mb-3'><b> {data.message}</b></p>
                        <img src={`data:image/png;base64,${data.image.img}`} style={{ width: '100%' }} className="card-img-top" alt="..." />
                        <p><small>Author: {data.author}</small></p>
                        <button type="button" onClick={() => deleteRegistration(data._id)} class="btn btn-outline-danger">Delete</button><br/>
                        <button type="button" onClick={() => change(data._id)} class="btn btn-outline-dark">Update</button>
                    </div>
                </div>
            </div>
            )        
        }

        </div>
        
    }
</div>
    );
};



export default Blog;