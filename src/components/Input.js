import React, { useState } from 'react';
import './input.css'

const Input = () => {
    const [image, setImage] = useState([]);
    const onImageChange = (event) => {
        setImage([...image, URL.createObjectURL(event.target.files[0])]);
    }
    const remove = (e, id) => {
        e.preventDefault();
        let images = [...image];
        setImage(images.filter((image, index) => index !== id))
    }
    const removeAll = (e) => {
        e.preventDefault();
        setImage([])
    }
    let render = [1, 2, 3, 4, 5, 6].map((ele, index) => {
        return (<div key={index} className="col-md-4">
            <form method="post" >
                <div className="form-group files">
                    <p><label htmlFor={`file${index}`}>Upload Image</label></p>
                    <p><input type="file" accept="image/*" name="image" id={`file${index}`} onChange={(e) => onImageChange(e)} /></p>
                    <div className='image'><img className='' id={`output${index}`} width="200" src={image[index]} /></div>
                    <button className="btn btn-secondary" onClick={(e) => remove(e, index)}>Remove</button>
                </div>
            </form>
        </div>)
    })
    return <div className='container'>
        <div className='row'>
            {render}
            <div className="col-md-4">
                <div className="form-group files">
                    <button className="btn btn-dark" onClick={(e) => removeAll(e)}>RemoveAll</button>
                </div>
            </div>
        </div>
    </div>

}
export default Input;