import React from 'react';
import './NutritionFacts.css';

// d_Zinc,d_VitaC,d_VitaB6,d_VitaB12,d_Water,
// n_Zinc,n_VitaC,n_VitaB6,n_VitaB12,n_Water

const NutritionFacts = ({calories,d_carbs,d_Cholestrol,d_Saturated,d_Fat,d_Iron,d_Sodium,d_protein,d_VitaD,d_Calcium,d_Pottasium,n_carbs,n_Cholestrol,n_Saturated,n_Fat,n_Iron,n_Sodium,n_protein,n_VitaD,n_Calcium,n_Pottasium 
  }) => {
    return(

            <div class="container-fluid ">
                    <div class="col-sm-5 ">
                    <section className="box grow">
                        <div style={{display:"-webkit-inline-flex"}}>
                        <h1 style={{borderBottom:"5px solid black"}}>Nutrition Facts</h1>
                        </div>

                        <table style={{marginBottom:"20px"}}>
                            <thead>
                            <tr >
                                <th>Amount per serving</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr style={{borderBottom:"1px solid black"}}>
                                    <th colSpan="2" id="size" >
                                        <b>Calories</b>
                                    </th>
                                    <td>{calories}</td>
                                </tr>

                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">
                                    <b>Total Fat</b> {n_Fat}
                                    </td>
                                    <td>{d_Fat} %</td>
                                </tr>

                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">&nbsp; saturated Fat {n_Saturated}</td>
                                    <td>{d_Saturated} %</td>
                                </tr>

                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">&nbsp; Trans Fat {n_Fat}</td>
                                        <td>{d_Fat}%</td>
                                </tr>

                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">
                                        <b>Cholestrol</b> {n_Cholestrol}
                                    </td>
                                    <td>{d_Cholestrol} %</td>
                                </tr>

                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">
                                            <b>Sodium</b> {n_Sodium}
                                        </td>
                                        <td>{d_Sodium} %</td>
                                </tr>

                                <tr style={{borderBottom:"1px solid black"}}>
                                        <td colSpan="2">
                                            <b>Total Carbohydrate</b> {n_carbs}
                                        </td>
                                        <td>{d_carbs} %</td>
                                </tr>

                                {/* <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">&nbsp; Zinc {n_Zinc}</td>
                                    <td>{d_Zinc} %</td>
                                </tr> */}

                            
{/* 
                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">&nbsp; Vitamin C {n_VitaC}</td>
                                    <td>{d_VitaC} </td>
                                </tr> */}

                                <tr style={{borderBottom:"1px solid black"}}>
                                        <td colSpan="2">
                                            <b>Protein</b> {n_protein}
                                        </td>
                                        <td>{d_protein} %</td>
                                </tr>

                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">Vitamin D {n_VitaD}</td>
                                    <td>{d_VitaD} %</td>
                                </tr>
                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">Calcium {n_Calcium}</td>
                                    <td>{d_Calcium} %</td>
                                </tr>
                                <tr style={{borderBottom:"1px solid black"}}>
                                    <td colSpan="2">Iron {n_Iron}</td>
                                    <td>{d_Iron} %</td>
                                </tr>
                                <tr >
                                    <td colSpan="2">Potassium {n_Pottasium}</td>
                                    <td>{d_Pottasium} %</td>
                                </tr>
                                {/* <tr >
                                    <td colSpan="2">Vitamin B6 {n_VitaB6}</td>
                                    <td>{d_VitaB6} %</td>
                                </tr>

                                <tr >
                                    <td colSpan="2">Vitamin B12 {n_VitaB12}</td>
                                    <td>{d_VitaB12} %</td>
                                </tr>

                                <tr >
                                    <td colSpan="2">Water {n_Water}</td>
                                    <td>{d_Water} %</td>
                                </tr> */}


                            </tbody>
                        </table>
                        <div>*Percent Daily Values are based on a 2000 calorie diet</div>
                    </section>
                    </div>
                    
                </div>
                 
    )
}



export default NutritionFacts;





// Application ID
// 17275922  Application Keys
// bff200596bf3d83111225b9d51211937	—


// let api ="https://api.edamam.com/api/nutrion-data?app_id=17275922&app_key=bff200596bf3d83111225b9d512119377ingr="
