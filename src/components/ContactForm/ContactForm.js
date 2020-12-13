import Axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { postFormData } from '../../redux/actions/formAction'
import Preloader from '../Preloader/Preloader';
import './ContactForm.css'
import uploadIcon from '../.././Images/cloud-upload-outline 1.png';

const ContactForm = ({ postFormData }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const [isDisabled, setIsDisabled] = useState(false)
    const [preloader, setPreloader] = useState(false)

    const onSubmit = (data, e) => {
        Axios.post('http://localhost:5000/formData', data)
            .then(resData => {
                if (resData.data.success) {
                    setPreloader(true)
                    swal('success', `${resData.data.message}`, 'success')
                    postFormData(data);
                    history.push('/info');
                    setIsDisabled(true)
                    e.target.reset()
                }
            })
            .catch(error => {
                setPreloader(false)
                swal('Error', `${error}`, 'error');
                setIsDisabled(false)
            })
        setPreloader(true)
    };

    return (
        <div className='contact-form-area'>
            {
                preloader && <Preloader />
            }
            <div className='contact-form'>
                <div className='row d-flex justify-content-center m-0'>
                    <div className="col-md-4 card card-body mt-5 py-4 px-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="form-header text-center">Blog</h3>
                            <input
                                type="text"
                                className='form-control mb-3 mt-4'
                                placeholder="Title"
                                name="title"
                                ref={register({ required: true, maxLength: 80 })}
                                required/>
                         
                       
                            <textarea
                                className='form-control mb-3'
                                type="text"
                                placeholder="What's on your mind, ..?
                                "
                                rows='5'
                                name="message"
                                ref={register({ required: true })}
                                required/>
                             <input
                                type="text"
                                className='form-control mb-3 mt-4'
                                placeholder="Author"
                                name="author"
                                ref={register({ required: true, maxLength: 80 })}
                                required/>
                        <label className='font-weight-bold'></label>
                        <input type="file" name="file" id="upload-file"
                                                        ref={register({ required: true, maxLength: 80 })}                                                        required/>
                        <label className='btn btn-warning form-control ml-1' id="upload-label" htmlFor="upload-file" title='Upload image'><img style={{height: '30px'}} src={uploadIcon} alt=""/> <span className='image-upload'>Upload image</span></label>
                            <input
                                type="submit"
                                className="btn btn-success border rounded-pill px-5 py-3 d-block mx-auto"
                                value='Submit'
                                disabled={isDisabled}
                            />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default connect(null, { postFormData })(ContactForm);