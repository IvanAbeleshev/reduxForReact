import React, { useState } from "react";
import {addPost} from '../redux/actions';
import { connect } from 'react-redux';

const InputDataPost = (props) =>{
    const [dataInput, setDataInput] = useState('');
    
    const handlerSubmit = (event) =>{
        event.preventDefault();

        if(dataInput.length ===0 ){
            return;
        }
        const newId = (new Date).getTime().toString();
        props.addPost({data: dataInput, id: newId});
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
};

export default connect(null,{addPost})(InputDataPost);