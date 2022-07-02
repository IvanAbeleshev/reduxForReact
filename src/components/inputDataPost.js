import React, { useState } from "react";
import {addPost} from '../redux/actions';
import { connect } from 'react-redux';

export const InputDataPost = (props) =>{
    const [dataInput, setDataInput] = useState('');
    
    const handlerSubmit = (event) =>{
        event.preventDefault();

        props.addPost(dataInput);
        setDataInput('');
    };

    return(
        <form>
            <div className="mb-3">
                <label htmlFor = "dataPost" className="form-label">
                    Text:
                    <input 
                        value={dataInput}
                        className="form-control"
                        id="dataPost"
                        onChange={e=>setDataInput(e.target.value)} />
                </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handlerSubmit}>Submit</button>
        </form>
    );
}
export default InputDataPost