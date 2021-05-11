import React from 'react';

import './AnalyzeButton.css';

const AnalyzeButton =({analyze}) => {
    return(
        <button className="btn btn-success mapd grow  " onClick={analyze}>
            Analyze
        </button>
    )
}
export default AnalyzeButton;