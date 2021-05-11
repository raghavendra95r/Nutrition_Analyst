import React from 'react';
import'./inputArea.css';


const InputArea =({getInput,value}) => {
    return(
        <div>
            <textarea className="inputtext fw7 fs-5 shadow-2 " type="text"  onChange={getInput} value={value} ></textarea>
        </div>
    )
}

export default InputArea;