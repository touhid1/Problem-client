import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Information = ({ data }) => {

    return (
        <div className="show-input-info">
            <div className='row'>
                <div className='col-md-4 offset-md-4 mt-5'>
                    <div className='card card-body bg-white'>
                        <h3 className='text-center mb-5 bg-success py-3 text-white border rounded'>Post</h3>
                        <h3 className='mb-3'> {data.title}</h3>
                        <h5 className='mb-3'> {data.message}</h5>
                        <p className='mb-3'> {data.author}</p>
                        <Link to='/' className='btn btn-dark text-white mt-3'>Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps)(Information);