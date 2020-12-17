import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { DeleteFormData, UpdateFormData } from '../../Redux/actions/Action'
import Preloader from '../Preloader/Preloader';
import './Post.css'
import uploadIcon from '../.././Images/cloud-upload-outline 1.png';
import swal from 'sweetalert';
import Axios from 'axios';

const Post = () => {
    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const [file, setFile] = useState(null); 
    const [isDisabled, setIsDisabled] = useState(false)
    const [preloader, setPreloader] = useState(false)
  
   

    const onSubmit = (data,e) => {
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('title', data.title);
        formData.append('file', file);
        formData.append('image', image);
        formData.append('message', data.message);
        formData.append('author', data.author);
        fetch('http://localhost:5000/formData', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())

            .then(res => {

                if (res.data) {
                    setPreloader(true)
                    swal('success', `${res.data.message}`, 'success')
                    UpdateFormData(data);
                    DeleteFormData(data);
                    history.push('/blog');
                    setIsDisabled(true)
                    e.target.reset()

                }

                console.log(res);
            })
            .catch(err => {
                setPreloader(false)
                swal('Err', `${err}`, 'err');
                setIsDisabled(false)
            })
        // console.log(formData);
        // data.preventDefault();
        setPreloader(true)

    }

   

 const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
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
                        <input type="file" name="image" onChange={fileChange} id="upload-file"
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
    )
};


export default Post;
