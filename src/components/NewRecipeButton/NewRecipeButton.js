import React from 'react';
import './NewRecipeButton.css';

const NewRecipeButton =({recipe,removebtn}) => {
    return(
        <div>
          {removebtn?<button type="button" className="btn btn-success nmapd grow" onClick={recipe}>New Recipe</button>:''}
        </div>
       
    )
}
export default NewRecipeButton;